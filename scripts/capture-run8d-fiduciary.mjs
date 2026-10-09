import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const V = '20261009b';
const LIVE = process.argv.includes('--live');
const base = LIVE
  ? 'https://yevucee.github.io/zuraio'
  : `http://127.0.0.1:${4226}`;

let server;
if (!LIVE) {
  server = await startStaticDistServer(DIST, 4226);
}

const browser = await chromium.launch();

async function shot(pagePath, file, width = 1280) {
  const page = await browser.newPage({ viewport: { width, height: width <= 400 ? 1400 : 900 } });
  await page.goto(`${base}${pagePath}?v=${V}`, { waitUntil: 'networkidle', timeout: 120_000 });
  await page.waitForSelector('#skills', { timeout: 60_000 });
  await page.click('[data-skills-tab="fiduciary"]');
  await page.waitForTimeout(300);
  await page.locator('#skills').scrollIntoViewIfNeeded();
  await page.locator('#skills').screenshot({ path: path.join(OUT, file) });
  console.log('wrote', file);
  await page.close();
}

await shot('/en/homepage-preview.html', 'run8d-fiduciary-en-1280.png');
await shot('/de/homepage-preview.html', 'run8d-fiduciary-de-1280.png');
await shot('/de/homepage-preview.html', 'run8d-fiduciary-de-390.png', 390);

await browser.close();
if (server) await server.close();
