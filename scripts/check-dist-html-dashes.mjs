/**
 * Fail build if prerendered preview-site HTML uses em-dash separators in SEO
 * fields or non-plain logo alt text.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'zuraio-comparison');
const EM_DASH_SEP = / — /;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (name.endsWith('.html')) files.push(full);
  }
  return files;
}

const files = walk(DIST);
if (!files.length) {
  console.error('check-dist-html-dashes: no HTML under dist/zuraio-comparison');
  process.exit(1);
}

const offenders = [];

function metaContent(html, names) {
  const out = [];
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = m[0];
    const name =
      tag.match(/\b(?:name|property)=["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? '';
    if (!names.has(name)) continue;
    const content =
      tag.match(/\bcontent=["']([^"']*)["']/i)?.[1] ??
      tag.match(/\bcontent=["']([^"']*)["']/i)?.[1];
    if (content != null) out.push(content);
  }
  return out;
}

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(path.join(DIST, '..'), file);

  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  if (EM_DASH_SEP.test(title)) offenders.push(`${rel}: <title> ${title.slice(0, 100)}`);

  for (const content of metaContent(html, new Set(['description', 'og:title', 'twitter:title']))) {
    if (EM_DASH_SEP.test(content)) offenders.push(`${rel}: meta ${content.slice(0, 100)}`);
  }

  for (const m of html.matchAll(/<img\b[^>]*class=["'][^"']*brand-logo[^"']*["'][^>]*>/gi)) {
    const tag = m[0];
    const alt = tag.match(/\balt=["']([^"']*)["']/i)?.[1];
    if (alt != null && alt !== 'Zuraio') {
      offenders.push(`${rel}: brand-logo alt="${alt}"`);
    }
  }
  for (const m of html.matchAll(/<img\b[^>]*\balt=["']([^"']*)["'][^>]*class=["'][^"']*brand-logo/gi)) {
    const alt = m[1];
    if (alt !== 'Zuraio') offenders.push(`${rel}: brand-logo alt="${alt}"`);
  }
}

if (offenders.length) {
  console.error('check-dist-html-dashes: FAIL\n' + offenders.map((o) => `  ${o}`).join('\n'));
  process.exit(1);
}

console.log(`check-dist-html-dashes: OK (${files.length} preview HTML files)`);
