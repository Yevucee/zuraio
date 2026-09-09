/**
 * Resize and compress team headshots for web delivery.
 * Sources: public/zuraio/assets/team-source/{Name}.png (designer-delivered, pre-cropped).
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

for (const name of TEAM) {
  const src = path.join(SOURCE_DIR, `${name}.png`);
  if (!fs.existsSync(src)) {
    console.warn(`optimize-team-images: missing team-source/${name}.png, skipping`);
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
    .resize(OUTPUT_SIZE, OUTPUT_SIZE, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .png({ compressionLevel: 9, palette: true, quality: 82 })
    .toFile(tmp);

  fs.renameSync(tmp, path.join(ASSETS, `${name}.png`));

  await sharp(path.join(ASSETS, `${name}.png`)).webp({ quality: 84 }).toFile(path.join(ASSETS, `${name}.webp`));

  const outStat = fs.statSync(path.join(ASSETS, `${name}.png`));
  console.log(`optimize-team-images: ${name} → ${Math.round(outStat.size / 1024)}KB png + webp`);
}
