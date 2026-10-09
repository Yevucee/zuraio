/**
 * Write static SEO head into locale homepage-preview.html (source + dist if present).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  HOMEPAGE_PREVIEW_LOCALES,
  injectHomepagePreviewHead,
} from './homepage-preview-seo.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(ROOT, '..', 'public', 'zuraio-comparison');
const DIST = path.join(ROOT, '..', 'dist');

function previewPath(siteRoot, locale) {
  return path.join(siteRoot, locale, 'homepage-preview.html');
}

let count = 0;
for (const locale of HOMEPAGE_PREVIEW_LOCALES) {
  for (const siteRoot of [SITE, DIST]) {
    const file = previewPath(siteRoot, locale);
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, injectHomepagePreviewHead(html, locale));
    count += 1;
  }
}

console.log(`inject-homepage-preview-seo: OK (${count} files)`);
