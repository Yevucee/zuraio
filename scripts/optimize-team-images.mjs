/**
 * Resize, face-normalize, and compress team headshots for web delivery.
 * Sources live in public/zuraio/assets/team-source/; outputs overwrite Name.png + Name.webp.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(ROOT, '..', 'public', 'zuraio', 'assets');
const SOURCE_DIR = path.join(ASSETS, 'team-source');
const TEAM = ['Michael', 'Marcelo', 'Samuel', 'Roland'];
const OUTPUT_SIZE = 800;

/** Normalized square extract: centre (cx,cy) and side as fraction of min(w,h). */
const TEAM_CROPS = {
  Michael: { cx: 0.5, cy: 0.35, size: 0.52 },
  Marcelo: { cx: 0.5, cy: 0.34, size: 0.52 },
  Samuel: { cx: 0.5, cy: 0.33, size: 0.44 },
  Roland: { cx: 0.5, cy: 0.36, size: 0.5 },
};

function resolveSource(name) {
  const fromSourceDir = path.join(SOURCE_DIR, `${name}.png`);
  if (fs.existsSync(fromSourceDir)) return fromSourceDir;
  return path.join(ASSETS, `${name}.png`);
}

function clampExtract(left, top, side, width, height) {
  const w = Math.min(side, width);
  const h = Math.min(side, height);
  return {
    left: Math.max(0, Math.min(left, width - w)),
    top: Math.max(0, Math.min(top, height - h)),
    width: w,
    height: h,
  };
}

async function cropToSquare(src, crop) {
  const meta = await sharp(src).metadata();
  const width = meta.width ?? OUTPUT_SIZE;
  const height = meta.height ?? OUTPUT_SIZE;
  const side = Math.round(Math.min(width, height) * crop.size);
  const left = Math.round(width * crop.cx - side / 2);
  const top = Math.round(height * crop.cy - side / 2);
  const extract = clampExtract(left, top, side, width, height);

  return sharp(src)
    .rotate()
    .extract(extract)
    .resize(OUTPUT_SIZE, OUTPUT_SIZE, { fit: 'cover' });
}

for (const name of TEAM) {
  const src = resolveSource(name);
  if (!fs.existsSync(src)) {
    console.warn(`optimize-team-images: missing source for ${name}, skipping`);
    continue;
  }

  const stat = fs.statSync(src);
  if (stat.size < 1024) {
    console.warn(`optimize-team-images: ${name} source looks corrupt (${stat.size} bytes), skipping`);
    continue;
  }

  const crop = TEAM_CROPS[name];
  const tmp = path.join(ASSETS, `${name}.optimized.png`);
  const pipeline = crop
    ? await cropToSquare(src, crop)
    : sharp(src).rotate().resize(OUTPUT_SIZE, OUTPUT_SIZE, { fit: 'cover', position: 'centre' });

  await pipeline
    .png({ compressionLevel: 9, palette: true, quality: 80 })
    .toFile(tmp);

  fs.renameSync(tmp, path.join(ASSETS, `${name}.png`));

  const webpOut = path.join(ASSETS, `${name}.webp`);
  await sharp(path.join(ASSETS, `${name}.png`)).webp({ quality: 82 }).toFile(webpOut);

  const outStat = fs.statSync(path.join(ASSETS, `${name}.png`));
  console.log(`optimize-team-images: ${name} → ${Math.round(outStat.size / 1024)}KB png + webp`);
}
