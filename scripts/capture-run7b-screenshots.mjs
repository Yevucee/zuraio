import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const PORT = 4180;
const V = '20261003d';

const shots = [
  { file: 'run7b-homepage-en-1280.png', path: `/en/homepage-preview.html?v=${V}` },
  { file: 'run7b-about-en-1280.png', path: `/about.html?v=${V}` },
];

const server = await startStaticDistServer(DIST, PORT);
const base = `http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const s of shots) {
  await page.goto(`${base}${s.path}`, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForSelector('body[data-alt-chrome]', { timeout: 30_000 });
  await page.screenshot({ path: path.join(OUT, s.file), fullPage: false });
  console.log('wrote', s.file);
}

await browser.close();
await server.close();
