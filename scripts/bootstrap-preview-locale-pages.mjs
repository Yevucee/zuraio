/**
 * Create fr/ and it/ preview HTML shells (and fill missing de/ subpages) from EN templates.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public/zuraio-comparison');

const SUB_PAGES = [
  'how-it-helps.html',
  'security.html',
  'integrations.html',
  'technical-architecture.html',
  'about.html',
  'contact.html',
  'faq.html',
];

const LANG_ATTR = { de: 'de-CH', fr: 'fr-CH', it: 'it-CH' };

function rewriteRootPageForLocale(html, lang) {
  return html
    .replace(/\blang="[^"]*"/, `lang="${lang}"`)
    .replace(/\bhref="assets\//g, 'href="../assets/')
    .replace(/\bsrc="assets\//g, 'src="../assets/')
    .replace(/\bhref="css\//g, 'href="../css/')
    .replace(/\bsrc="js\//g, 'src="../js/')
    .replace(/\bhref="zuraio\//g, 'href="../zuraio/')
    .replace(/\bsrc="zuraio\//g, 'src="../zuraio/');
}

function writeHomePreview(locale) {
  const src = path.join(siteRoot, 'de/homepage-preview.html');
  const outDir = path.join(siteRoot, locale);
  fs.mkdirSync(outDir, { recursive: true });
  let html = fs.readFileSync(src, 'utf8');
  html = html.replace(/\blang="[^"]*"/, `lang="${LANG_ATTR[locale]}"`);
  fs.writeFileSync(path.join(outDir, 'homepage-preview.html'), html);
}

function writeSubPages(locale) {
  const outDir = path.join(siteRoot, locale);
  fs.mkdirSync(outDir, { recursive: true });
  for (const page of SUB_PAGES) {
    const src = path.join(siteRoot, page);
    if (!fs.existsSync(src)) continue;
    const html = rewriteRootPageForLocale(fs.readFileSync(src, 'utf8'), LANG_ATTR[locale]);
    fs.writeFileSync(path.join(outDir, page), html);
  }
}

for (const locale of ['de', 'fr', 'it']) {
  if (locale !== 'de' || !fs.existsSync(path.join(siteRoot, 'de/how-it-helps.html'))) {
    writeSubPages(locale);
  }
  if (locale === 'fr' || locale === 'it') {
    writeHomePreview(locale);
  }
}

// Normalize de homepage lang
const deHome = path.join(siteRoot, 'de/homepage-preview.html');
if (fs.existsSync(deHome)) {
  const html = fs.readFileSync(deHome, 'utf8').replace(/\blang="de"/, 'lang="de-CH"');
  fs.writeFileSync(deHome, html);
}

console.log('bootstrap-preview-locale-pages: OK');
