/**
 * Render locale OG share JPGs (1200×630) via Playwright.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { copyAltHome } from '../public/zuraio-comparison/js/copy-alt-home.js';
import {
  OG_SHARE_HEIGHT,
  OG_SHARE_LOCALES,
  OG_SHARE_MAX_BYTES,
  OG_SHARE_WIDTH,
} from './og-share-meta.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(ROOT, '..', 'public', 'zuraio-comparison', 'assets');
const TEMPLATE = fs.readFileSync(path.join(ROOT, 'og-image-template.html'), 'utf8');
const OUT_DIRS = [
  path.join(ASSETS, 'og'),
  path.join(ROOT, '..', 'public', 'zuraio', 'assets', 'og'),
];

function fileUrl(p) {
  return `file://${p}`;
}

function buildPageHtml(locale) {
  const copy = copyAltHome[locale];
  const primary = copy.hero.headlineLines[0];
  const secondary = copy.hero.headlineLines[1];
  const logo = fileUrl(path.join(ASSETS, 'zuraio-logo-nav@2x.webp'));
  const hero = fileUrl(path.join(ASSETS, 'hero', `zuraio-hero-reply-${locale}@2x.webp`));
  return TEMPLATE.replace('{{LOGO_URL}}', logo)
    .replace('{{PRIMARY}}', primary)
    .replace('{{SECONDARY}}', secondary)
    .replace('{{HERO_URL}}', hero);
}

async function renderLocale(page, locale, outPath) {
  const html = buildPageHtml(locale);
  await page.setViewportSize({ width: OG_SHARE_WIDTH, height: OG_SHARE_HEIGHT });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);

  let quality = 85;
  let buffer;
  do {
    buffer = await page.screenshot({
      type: 'jpeg',
      quality,
      clip: { x: 0, y: 0, width: OG_SHARE_WIDTH, height: OG_SHARE_HEIGHT },
    });
    if (buffer.length <= OG_SHARE_MAX_BYTES || quality <= 60) break;
    quality -= 5;
  } while (quality >= 60);

  for (const dir of OUT_DIRS) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, path.basename(outPath)), buffer);
  }

  return { bytes: buffer.length, quality };
}

const browser = await chromium.launch();
const page = await browser.newPage();

const summary = [];
for (const locale of OG_SHARE_LOCALES) {
  const name = `zuraio-og-${locale}.jpg`;
  const { bytes, quality } = await renderLocale(page, locale, name);
  summary.push({ locale, name, bytes, quality });
  console.log(`${name}: ${(bytes / 1024).toFixed(1)} KB (quality ${quality})`);
  if (bytes > OG_SHARE_MAX_BYTES) {
    console.error(`build-og-images: ${name} exceeds ${OG_SHARE_MAX_BYTES} bytes`);
    process.exit(1);
  }
}

await browser.close();
console.log('build-og-images: OK');
