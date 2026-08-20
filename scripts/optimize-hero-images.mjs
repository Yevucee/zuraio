/**
 * Generate responsive AVIF/WebP hero variants and OG share image.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const HERO_SRC = path.join(ROOT, '..', 'public', 'zuraio', 'assets', '260714_zuraio_hero_12.png');
const HERO_OUT_DIR = path.join(ROOT, '..', 'public', 'zuraio', 'assets', 'hero');
const OG_SRC = path.join(ROOT, '..', 'public', 'zuraio', 'assets', '260707_UI_Apps_Vision.png');
const OG_OUT = path.join(ROOT, '..', 'public', 'zuraio', 'assets', 'zuraio-og-share.png');

const WIDTHS = [640, 960, 1440, 1920];

async function generateHeroVariants() {
  if (!fs.existsSync(HERO_SRC)) {
    console.warn('optimize-hero-images: hero source not found, skipping');
    return;
  }
  fs.mkdirSync(HERO_OUT_DIR, { recursive: true });
  for (const width of WIDTHS) {
    const base = path.join(HERO_OUT_DIR, `hero-${width}`);
    await sharp(HERO_SRC)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 62, effort: 4 })
      .toFile(`${base}.avif`);
    await sharp(HERO_SRC)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`${base}.webp`);
    console.log(`optimize-hero-images: wrote hero-${width}.{avif,webp}`);
  }
}

async function generateOgImage() {
  if (!fs.existsSync(OG_SRC)) {
    console.warn('optimize-hero-images: OG source not found, skipping');
    return;
  }
  await sharp(OG_SRC)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(OG_OUT);
  console.log('optimize-hero-images: wrote zuraio-og-share.png');
}

await generateHeroVariants();
await generateOgImage();
