/**
 * Resize and compress team headshots for web delivery.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(ROOT, '..', 'public', 'zuraio', 'assets');
const TEAM = ['Michael', 'Marcelo', 'Samuel', 'Roland'];
const MAX_WIDTH = 800;

for (const name of TEAM) {
  const src = path.join(ASSETS, `${name}.png`);
  if (!fs.existsSync(src)) {
    console.warn(`optimize-team-images: missing ${name}.png, skipping`);
    continue;
  }

  const stat = fs.statSync(src);
  if (stat.size < 1024) {
    console.warn(`optimize-team-images: ${name}.png looks corrupt (${stat.size} bytes), skipping`);
    continue;
  }

  const tmp = path.join(ASSETS, `${name}.optimized.png`);
  await sharp(src)
    .rotate()
    .resize({ width: MAX_WIDTH, height: MAX_WIDTH, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9, palette: true, quality: 80 })
    .toFile(tmp);

  fs.renameSync(tmp, src);

  const webpOut = path.join(ASSETS, `${name}.webp`);
  await sharp(src).webp({ quality: 82 }).toFile(webpOut);

  const outStat = fs.statSync(src);
  console.log(`optimize-team-images: ${name} → ${Math.round(outStat.size / 1024)}KB png + webp`);
}
