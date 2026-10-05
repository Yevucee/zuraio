import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const PORT = 4190;
const V = '20261005c';

const server = await startStaticDistServer(DIST, PORT);
const base = `http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

async function shot(pagePath, tabId, file, width = 1280) {
  const page = await browser.newPage({ viewport: { width, height: width <= 400 ? 1400 : 900 } });
  await page.goto(`${base}${pagePath}?v=${V}`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForSelector('#skills', { timeout: 30_000 });
  if (tabId) {
    await page.click(`[data-skills-tab="${tabId}"]`);
    await page.waitForTimeout(250);
  }
  await page.locator('#skills').scrollIntoViewIfNeeded();
  await page.locator('#skills').screenshot({ path: path.join(OUT, file) });
  console.log('wrote', file);
  await page.close();
}

await shot('/en/homepage-preview.html', 'architecture', 'run8b-skills-en-arch-1280.png');
await shot('/en/homepage-preview.html', 'fiduciary', 'run8b-skills-en-fiduciary-1280.png');
await shot('/en/homepage-preview.html', 'property', 'run8b-skills-en-property-1280.png');
await shot('/de/homepage-preview.html', 'property', 'run8b-skills-de-property-1280.png');
await shot('/en/homepage-preview.html', 'architecture', 'run8b-skills-en-arch-390.png', 390);
await shot('/en/homepage-preview.html', 'property', 'run8b-skills-en-property-390.png', 390);

await browser.close();
await server.close();
