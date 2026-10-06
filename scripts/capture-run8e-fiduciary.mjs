import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const V = '20261006a';
const LIVE = process.argv.includes('--live');
const base = LIVE
  ? 'https://yevucee.github.io/zuraio'
  : `http://127.0.0.1:${4226}`;

let server;
if (!LIVE) {
  server = await startStaticDistServer(DIST, 4226);
}

const browser = await chromium.launch();

async function shot(locale, file, width = 1280) {
  const page = await browser.newPage({ viewport: { width, height: width <= 400 ? 1400 : 900 } });
  await page.goto(`${base}/${locale}/homepage-preview.html?v=${V}#skills-fiduciary`, {
    waitUntil: 'networkidle',
    timeout: 120_000,
  });
  await page.waitForSelector('#skills', { timeout: 60_000 });
  await page.click('[data-skills-tab="fiduciary"]');
  await page.waitForTimeout(400);
  const fig = page.locator('.alt-skills-doc__fig--hl').first();
  await fig.waitFor({ state: 'visible' });
  await fig.screenshot({ path: path.join(OUT, file) });
  console.log('wrote', file);
  await page.close();
}

await shot('en', 'run8e-fiduciary-fig-en-1280.png', 1280);
await shot('en', 'run8e-fiduciary-fig-en-390.png', 390);
await shot('de', 'run8e-fiduciary-fig-de-1280.png', 1280);
await shot('de', 'run8e-fiduciary-fig-de-390.png', 390);

await browser.close();
if (server) await server.close();
