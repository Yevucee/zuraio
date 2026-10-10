/**
 * Promote locale homepage-preview shells to production index.html (go-live).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(ROOT, '..', 'public', 'zuraio-comparison');

function stripHomeNoindex(html) {
  return html.replace(/<meta name="robots" content="noindex[^"]*"[^>]*>\s*/gi, '');
}

function promoteEnRoot(html) {
  return stripHomeNoindex(html)
    .replace(/\.\.\/assets\//g, 'assets/')
    .replace(/\.\.\/css\//g, 'css/')
    .replace(/\.\.\/js\//g, 'js/')
    .replace(/\.\.\/zuraio\//g, 'zuraio/');
}

const enPreview = path.join(SITE, 'en', 'homepage-preview.html');
if (!fs.existsSync(enPreview)) {
  console.error('promote-alt-home-go-live: missing en/homepage-preview.html');
  process.exit(1);
}

fs.writeFileSync(path.join(SITE, 'index.html'), promoteEnRoot(fs.readFileSync(enPreview, 'utf8')));

for (const locale of ['de', 'fr', 'it']) {
  const preview = path.join(SITE, locale, 'homepage-preview.html');
  if (!fs.existsSync(preview)) continue;
  const outDir = path.join(SITE, locale);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), stripHomeNoindex(fs.readFileSync(preview, 'utf8')));
}

console.log('promote-alt-home-go-live: OK (index.html + locale index shells)');
