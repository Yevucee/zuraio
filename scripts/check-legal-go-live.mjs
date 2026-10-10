/**
 * Production go-live guard: Impressum and privacy pages must not ship with
 * visible “to be confirmed” markers or bracket placeholders. Run from the
 * Mcwili sync workflow only (not npm run build).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');

const LEGAL_PAGES = ['impressum.html', 'privacy.html'];
const LEGAL_DIRS = ['', 'de', 'fr', 'it'];

const FORBIDDEN = [
  'Noch zu bestätigen',
  'To be confirmed',
  'À confirmer',
  'Da confermare',
];

const VARIANT_MARKERS = [
  'Variant A',
  'Variant B',
  'Variante A',
  'Variante B',
  'Option A',
  'Option B',
  'Variante A',
  'Variante B',
];

function mainText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  return main.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ');
}

function localeLabel(rel) {
  if (rel.startsWith('de/')) return 'DE';
  if (rel.startsWith('fr/')) return 'FR';
  if (rel.startsWith('it/')) return 'IT';
  return 'EN';
}

function checkFile(absPath, rel) {
  if (!fs.existsSync(absPath)) {
    console.error(`check-legal-go-live: missing ${rel}`);
    return { ok: false, issues: ['missing file'] };
  }
  const text = mainText(fs.readFileSync(absPath, 'utf8'));
  const issues = [];
  for (const phrase of FORBIDDEN) {
    if (text.includes(phrase)) issues.push(`forbidden phrase: ${phrase}`);
  }
  const brackets = text.match(/\[[^\]]+\]/g);
  if (brackets?.length) {
    issues.push(`bracket placeholders: ${[...new Set(brackets)].slice(0, 8).join(', ')}${brackets.length > 8 ? '…' : ''}`);
  }
  for (const marker of VARIANT_MARKERS) {
    if (text.includes(marker)) issues.push(`open variant block: ${marker}`);
  }
  return { ok: issues.length === 0, issues };
}

if (!fs.existsSync(DIST)) {
  console.error('check-legal-go-live: dist/ not found — run npm run build first');
  process.exit(1);
}

let allOk = true;
const byLocale = { EN: [], DE: [], FR: [], IT: [] };

for (const dir of LEGAL_DIRS) {
  for (const page of LEGAL_PAGES) {
    const rel = dir ? `${dir}/${page}` : page;
    const abs = path.join(DIST, rel);
    const { ok, issues } = checkFile(abs, rel);
    if (!ok) {
      allOk = false;
      byLocale[localeLabel(rel)].push(`${rel}: ${issues.join('; ')}`);
    }
  }
}

const allowPlaceholders = process.env.ALLOW_LEGAL_PLACEHOLDERS === 'true';

if (!allOk) {
  const lines = ['check-legal-go-live: open Impressum/privacy placeholders:\n'];
  for (const loc of ['EN', 'DE', 'FR', 'IT']) {
    if (byLocale[loc].length) {
      lines.push(`  ${loc}:`);
      byLocale[loc].forEach((line) => lines.push(`    - ${line}`));
    }
  }
  const report = lines.join('\n');
  if (allowPlaceholders) {
    console.warn(report);
    console.warn(
      '\ncheck-legal-go-live: WARNING ONLY (ALLOW_LEGAL_PLACEHOLDERS=true). Impressum/privacy remain noindex until placeholders are resolved.',
    );
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `\n### Legal go-live guard (warning)\n\n\`\`\`\n${report}\n\`\`\`\n`);
    }
    process.exit(0);
  }
  console.error('check-legal-go-live: FAILED — open Impressum/privacy placeholders:\n');
  console.error(report);
  console.error(
    '\ncheck-legal-go-live: resolve placeholders before Mcwili production sync.',
  );
  process.exit(1);
}

console.log('check-legal-go-live: OK (no Impressum/privacy go-live blockers in dist)');
