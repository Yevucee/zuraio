/**
 * One-off generator: docs/legal/zuraio-privacy-policy-4lang.md → privacy-copy-*.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const MD = path.join(ROOT, 'docs/legal/zuraio-privacy-policy-4lang.md');
const OUT = path.join(ROOT, 'public/zuraio-comparison/js');

const LOCALE_MARKERS = {
  Deutsch: 'de',
  English: 'en',
  Français: 'fr',
  Italiano: 'it',
};

const SECTION_IDS = {
  1: 'controller',
  3: 'data',
  4: 'cookies',
  5: 'recipients',
  6: 'abroad',
  7: 'retention',
  8: 'security',
  9: 'rights',
  10: 'changes',
};

const META = {
  en: {
    title: 'Privacy policy — Zuraio',
    description: 'How Zuraio processes personal data when you use this website and contact us.',
  },
  de: {
    title: 'Datenschutzerklärung — Zuraio',
    description: 'Wie Zuraio Personendaten bearbeitet, wenn Sie diese Website nutzen und uns kontaktieren.',
  },
  fr: {
    title: 'Politique de protection des données — Zuraio',
    description:
      'Comment Zuraio traite les données personnelles lorsque vous utilisez ce site et nous contactez.',
  },
  it: {
    title: 'Informativa sulla protezione dei dati — Zuraio',
    description:
      'Come Zuraio tratta i dati personali quando utilizzate questo sito e ci contattate.',
  },
};

function applyFrNbsp(text) {
  return text.replace(/([^\s\u00a0])(:)/g, (m, before, colon) => {
    if (before === '»' || before === '«') return m;
    return `${before}\u00a0${colon}`;
  });
}

function boldLineToHtml(line) {
  const m = line.match(/^\*\*(.+?)\*\*(.*)$/);
  if (!m) return line;
  const rest = m[2].trim();
  return rest ? `<strong>${m[1]}</strong> ${rest}` : `<strong>${m[1]}</strong>`;
}

function parseLocaleBlock(body, locale) {
  const lines = body.split('\n');
  let lastUpdated = '';
  const sections = [];
  let current = null;

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    if (line.startsWith('**') && line.endsWith('**') && !line.includes(':**')) continue;
    if (/^(Stand:|Last updated:|Version du|Versione del)/.test(line)) {
      lastUpdated = locale === 'fr' ? applyFrNbsp(line.trim()) : line.trim();
      continue;
    }
    const sec = line.match(/^### (\d+)\.\s+(.+)$/);
    if (sec) {
      if (current) sections.push(current);
      const num = Number(sec[1]);
      current = {
        ...(SECTION_IDS[num] ? { id: SECTION_IDS[num] } : {}),
        heading: `${sec[1]}. ${sec[2]}`,
        paragraphs: [],
        list: [],
      };
      continue;
    }
    if (!current) continue;
    if (line.startsWith('- ')) {
      current.list.push(line.slice(2));
      continue;
    }
    let p = line;
    if (p.includes('**')) p = boldLineToHtml(p);
    if (locale === 'fr') p = applyFrNbsp(p);
    current.paragraphs.push(p);
  }
  if (current) sections.push(current);

  for (const s of sections) {
    if (!s.list.length) delete s.list;
    else if (locale === 'fr') s.list = s.list.map((item) => applyFrNbsp(item));
    if (!s.paragraphs.length) delete s.paragraphs;
  }

  return { lastUpdated, sections };
}

function parseMd(text) {
  const parts = text.split(/^## /m).slice(1);
  const out = {};
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const title = part.slice(0, nl).trim();
    const locale = LOCALE_MARKERS[title];
    if (!locale) continue;
    const { lastUpdated, sections } = parseLocaleBlock(part.slice(nl + 1), locale);
    out[locale] = {
      ...META[locale],
      lastUpdated,
      sections,
    };
  }
  return out;
}

function jsString(s) {
  return JSON.stringify(s);
}

function writeModule(locale, data) {
  const file = path.join(OUT, `privacy-copy-${locale}.js`);
  const body = `/** Generated from docs/legal/zuraio-privacy-policy-4lang.md — do not edit by hand. */
export const privacyPage = ${JSON.stringify(data, null, 2)};
`;
  fs.writeFileSync(file, body);
}

const md = fs.readFileSync(MD, 'utf8');
const parsed = parseMd(md);
for (const loc of ['en', 'de', 'fr', 'it']) {
  if (!parsed[loc]) throw new Error(`Missing locale ${loc} in markdown`);
  writeModule(loc, parsed[loc]);
}
console.log('generate-privacy-copy: wrote privacy-copy-{en,de,fr,it}.js');
