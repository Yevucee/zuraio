/**
 * Render locale OG share JPGs (1200×630) via Playwright.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { copyAltHome } from '../public/zuraio-comparison/js/copy-alt-home.js';
import {
  OG_SHARE_HEIGHT,
  OG_SHARE_LOCALES,
  OG_SHARE_MAX_BYTES,
  OG_SHARE_MIN_BYTES,
  OG_SHARE_WIDTH,
} from './og-share-meta.mjs';
import { OG_HERO_CROP } from './og-hero-crop.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(ROOT, '..', 'public', 'zuraio-comparison', 'assets');
const TEMPLATE = fs.readFileSync(path.join(ROOT, 'og-image-template.html'), 'utf8');
const OUT_DIRS = [
  path.join(ASSETS, 'og'),
  path.join(ROOT, '..', 'public', 'zuraio', 'assets', 'og'),
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function embedAsPngDataUri(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`build-og-images: missing asset ${filePath}`);
  }
  const png = await sharp(filePath).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

async function embedHeroCropPngDataUri(locale) {
  const filePath = path.join(ASSETS, 'hero', `zuraio-hero-reply-${locale}@2x.webp`);
  const crop = OG_HERO_CROP[locale];
  if (!crop) throw new Error(`build-og-images: no crop for ${locale}`);
  const meta = await sharp(filePath).metadata();
  const left = Math.min(crop.left, Math.max(0, (meta.width ?? 0) - crop.width));
  const top = Math.min(crop.top, Math.max(0, (meta.height ?? 0) - crop.height));
  const width = Math.min(crop.width, (meta.width ?? crop.width) - left);
  const height = Math.min(crop.height, (meta.height ?? crop.height) - top);
  const png = await sharp(filePath).extract({ left, top, width, height }).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

async function buildPageHtml(locale) {
  const copy = copyAltHome[locale];
  const primary = escapeHtml(copy.hero.headlineLines[0]);
  const secondary = escapeHtml(copy.hero.headlineLines[1]);
  const logo = await embedAsPngDataUri(path.join(ASSETS, 'zuraio-logo-nav@2x.webp'));
  const hero = await embedHeroCropPngDataUri(locale);
  return TEMPLATE.replace('{{LOGO_URL}}', logo)
    .replace('{{PRIMARY}}', primary)
    .replace('{{SECONDARY}}', secondary)
    .replace('{{HERO_URL}}', hero);
}

async function waitForRenderReady(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    const imgs = Array.from(document.images);
    if (!imgs.length) throw new Error('no images in OG template');
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve, reject) => {
            const ok = () => {
              if (img.complete && img.naturalWidth > 0) resolve();
              else reject(new Error(`image not loaded: ${img.src.slice(0, 40)}`));
            };
            if (img.complete) {
              ok();
              return;
            }
            img.addEventListener('load', ok, { once: true });
            img.addEventListener(
              'error',
              () => reject(new Error(`image failed: ${img.src.slice(0, 40)}`)),
              { once: true },
            );
          }),
      ),
    );
  });
}

async function renderLocale(page, locale, outPath) {
  const html = await buildPageHtml(locale);
  await page.setViewportSize({ width: OG_SHARE_WIDTH, height: OG_SHARE_HEIGHT });
  await page.setContent(html, { waitUntil: 'load' });
  await waitForRenderReady(page);
  await page.waitForTimeout(100);

  let quality = 95;
  let buffer = await page.screenshot({
    type: 'jpeg',
    quality,
    clip: { x: 0, y: 0, width: OG_SHARE_WIDTH, height: OG_SHARE_HEIGHT },
  });
  while (buffer.length > OG_SHARE_MAX_BYTES && quality > 75) {
    quality -= 3;
    buffer = await page.screenshot({
      type: 'jpeg',
      quality,
      clip: { x: 0, y: 0, width: OG_SHARE_WIDTH, height: OG_SHARE_HEIGHT },
    });
  }

  if (buffer.length < OG_SHARE_MIN_BYTES) {
    throw new Error(
      `${path.basename(outPath)}: ${buffer.length} bytes (min ${OG_SHARE_MIN_BYTES}) — hero likely missing`,
    );
  }

  for (const dir of OUT_DIRS) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, path.basename(outPath)), buffer);
  }

  return { bytes: buffer.length, quality };
}

const browser = await chromium.launch();
const page = await browser.newPage();

for (const locale of OG_SHARE_LOCALES) {
  const name = `zuraio-og-${locale}.jpg`;
  const { bytes, quality } = await renderLocale(page, locale, name);
  console.log(`${name}: ${(bytes / 1024).toFixed(1)} KB (quality ${quality})`);
  if (bytes > OG_SHARE_MAX_BYTES) {
    console.error(`build-og-images: ${name} exceeds ${OG_SHARE_MAX_BYTES} bytes`);
    process.exit(1);
  }
}

await browser.close();
console.log('build-og-images: OK');
