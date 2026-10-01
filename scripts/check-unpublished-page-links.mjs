/**
 * Fail the build if customer-facing sources link to unpublished pages.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteRoot = path.join(root, 'public/zuraio-comparison');

const FORBIDDEN = /(?:resources\.html|pricing\.html|preise\.html|new-in-zuraio\.html|neu-bei-zuraio\.html)/;

const SCAN_DIRS = ['js', 'css'];
const SCAN_HTML = fs
  .readdirSync(siteRoot, { withFileTypes: true })
  .filter((e) => e.isFile() && e.name.endsWith('.html'))
  .map((e) => e.name);

/** Files kept offline but not linked from the live site. */
const ALLOWLIST = new Set([
  'resources.html',
  path.join('de', 'preise.html'),
  path.join('en', 'pricing.html'),
  path.join('de', 'neu-bei-zuraio.html'),
  path.join('en', 'new-in-zuraio.html'),
]);

const hits = [];

function scanFile(rel) {
  if (ALLOWLIST.has(rel)) return;
  const text = fs.readFileSync(path.join(siteRoot, rel), 'utf8');
  if (FORBIDDEN.test(text)) hits.push(rel);
}

for (const dir of SCAN_DIRS) {
  for (const name of fs.readdirSync(path.join(siteRoot, dir))) {
    if (name.endsWith('.js')) scanFile(path.join(dir, name));
  }
}
for (const name of SCAN_HTML) scanFile(name);
for (const locale of ['de', 'en']) {
  const localeDir = path.join(siteRoot, locale);
  if (!fs.existsSync(localeDir)) continue;
  for (const name of fs.readdirSync(localeDir)) {
    if (name.endsWith('.html') && !ALLOWLIST.has(path.join(locale, name))) {
      scanFile(path.join(locale, name));
    }
  }
}

if (hits.length) {
  console.error('check-unpublished-page-links: forbidden hrefs in:\n' + hits.map((h) => `  - ${h}`).join('\n'));
  process.exit(1);
}
console.log('check-unpublished-page-links: OK');
