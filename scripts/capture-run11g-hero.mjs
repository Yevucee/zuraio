import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const ART = '/opt/cursor/artifacts';
const PORT = 4192;

fs.mkdirSync(ART, { recursive: true });

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch({ headless: true });
const base = `http://127.0.0.1:${PORT}`;

const shots = [
  { file: 'run11g-de-hero-1024.png', path: '/de/homepage-preview.html', width: 1024 },
  { file: 'run11g-de-hero-1280.png', path: '/de/homepage-preview.html', width: 1280 },
  { file: 'run11g-de-hero-1440.png', path: '/de/homepage-preview.html', width: 1440 },
  { file: 'run11g-it-hero-1024.png', path: '/it/homepage-preview.html', width: 1024 },
];

try {
  const page = await browser.newPage();
  for (const { file, path: p, width } of shots) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${base}${p}`, { waitUntil: 'networkidle', timeout: 60_000 });
    await page.waitForSelector('.alt-home-hero__frame', { timeout: 30_000 });
    const hero = page.locator('.alt-home-hero');
    await hero.screenshot({ path: path.join(ART, file) });
    console.log('wrote', file);
  }
  await page.close();
} finally {
  await browser.close().catch(() => {});
  await server.close().catch(() => {});
}
