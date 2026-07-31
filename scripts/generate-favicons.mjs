import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, '..', 'public', 'zuraio-comparison', 'assets', 'favicon.svg');
const OUT = path.dirname(SRC);

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function main() {
  const svg = fs.readFileSync(SRC);
  await Promise.all(
    sizes.map(({ name, size }) =>
      sharp(svg, { density: 300 })
        .resize(size, size, { fit: 'contain', background: { r: 251, g: 251, b: 248, alpha: 1 } })
        .png()
        .toFile(path.join(OUT, name)),
    ),
  );

  const ico32 = await sharp(svg, { density: 300 })
    .resize(32, 32, { fit: 'contain', background: { r: 251, g: 251, b: 248, alpha: 1 } })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(OUT, 'favicon.ico'), ico32);
  fs.copyFileSync(SRC, path.join(ROOT, '..', 'public', 'favicon.svg'));
  console.log('Generated favicon PNG/ICO assets in', OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
