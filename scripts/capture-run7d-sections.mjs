import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const PORT = 4183;
const V = '20261004b';

const jobs = [
  { file: 'run7d-skills-en-1280.png', path: `/en/homepage-preview.html?v=${V}`, sel: '#skills' },
  { file: 'run7d-skills-de-1280.png', path: `/de/homepage-preview.html?v=${V}`, sel: '#skills' },
  { file: 'run7d-same-question-en-1280.png', path: `/en/homepage-preview.html?v=${V}`, sel: '#same-question' },
  { file: 'run7d-same-question-de-1280.png', path: `/de/homepage-preview.html?v=${V}`, sel: '#same-question' },
];

const server = await startStaticDistServer(DIST, PORT);
const base = `http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

for (const j of jobs) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${base}${j.path}`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForSelector(j.sel, { timeout: 30_000 });
  await page.locator(j.sel).scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await page.locator(j.sel).screenshot({ path: path.join(OUT, j.file) });
  console.log('wrote', j.file);
  await page.close();
}

await browser.close();
await server.close();
