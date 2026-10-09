/**
 * Verify OG share JPG assets and og:image meta on built preview pages.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { listPreviewSiteHtmlFiles } from './preview-site-html-paths.mjs';
import {
  OG_SHARE_HEIGHT,
  OG_SHARE_LOCALES,
  OG_SHARE_MAX_BYTES,
  OG_SHARE_WIDTH,
} from './og-share-meta.mjs';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const OG_DIR = path.join(DIST, 'assets', 'og');

const offenders = [];

for (const locale of OG_SHARE_LOCALES) {
  const file = path.join(OG_DIR, `zuraio-og-${locale}.jpg`);
  if (!fs.existsSync(file)) {
    offenders.push(`missing ${path.relative(DIST, file)}`);
    continue;
  }
  const stat = fs.statSync(file);
  if (stat.size > OG_SHARE_MAX_BYTES) {
    offenders.push(`${path.relative(DIST, file)}: ${stat.size} bytes (max ${OG_SHARE_MAX_BYTES})`);
  }
  const meta = await sharp(file).metadata();
  if (meta.width !== OG_SHARE_WIDTH || meta.height !== OG_SHARE_HEIGHT) {
    offenders.push(
      `${path.relative(DIST, file)}: ${meta.width}×${meta.height} (expected ${OG_SHARE_WIDTH}×${OG_SHARE_HEIGHT})`,
    );
  }
}

const zuraioOgDir = path.join(DIST, 'zuraio', 'assets', 'og');
for (const locale of OG_SHARE_LOCALES) {
  const file = path.join(zuraioOgDir, `zuraio-og-${locale}.jpg`);
  if (!fs.existsSync(file)) {
    offenders.push(`missing preview path ${path.relative(DIST, file)}`);
  }
}

function ogImageMeta(html) {
  const image = html.match(/<meta property="og:image" content="([^"]*)"/i)?.[1] ?? '';
  const width = html.match(/<meta property="og:image:width" content="([^"]*)"/i)?.[1] ?? '';
  const height = html.match(/<meta property="og:image:height" content="([^"]*)"/i)?.[1] ?? '';
  return { image, width, height };
}

for (const file of listPreviewSiteHtmlFiles(DIST)) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(DIST, file);
  const { image, width, height } = ogImageMeta(html);
  if (!image) {
    offenders.push(`${rel}: missing og:image`);
    continue;
  }
  if (!/\.(jpe?g|png)(\?|$)/i.test(image)) {
    offenders.push(`${rel}: og:image not jpg/png (${image})`);
  }
  if (width !== String(OG_SHARE_WIDTH) || height !== String(OG_SHARE_HEIGHT)) {
    offenders.push(`${rel}: og:image dimensions ${width}×${height}`);
  }
}

if (offenders.length) {
  console.error('check-dist-og-images: FAIL\n' + offenders.map((o) => `  ${o}`).join('\n'));
  process.exit(1);
}

console.log(`check-dist-og-images: OK (${OG_SHARE_LOCALES.length} JPGs, ${listPreviewSiteHtmlFiles(DIST).length} HTML pages)`);
