import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const OUT = '/opt/cursor/artifacts';
const PORT = 4185;
const V = '20261005b';

const server = await startStaticDistServer(DIST, PORT);
const base = `http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

async function shotSection(pagePath, tabId, file) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
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

async function shotMobile(pagePath, tabId, file, width = 390) {
  const page = await browser.newPage({ viewport: { width, height: 1200 } });
  await page.goto(`${base}${pagePath}?v=${V}`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForSelector('#skills', { timeout: 30_000 });
  await page.click(`[data-skills-tab="${tabId}"]`);
  await page.waitForTimeout(250);
  await page.locator('#skills').scrollIntoViewIfNeeded();
  await page.locator('#skills').screenshot({ path: path.join(OUT, file) });
  console.log('wrote', file);
  await page.close();
}

await shotSection('/en/homepage-preview.html', 'architecture', 'run8-skills-en-arch-1280.png');
await shotSection('/en/homepage-preview.html', 'fiduciary', 'run8-skills-en-fiduciary-1280.png');
await shotSection('/en/homepage-preview.html', 'property', 'run8-skills-en-property-1280.png');
await shotSection('/de/homepage-preview.html', 'architecture', 'run8-skills-de-arch-1280.png');

await shotMobile('/en/homepage-preview.html', 'architecture', 'run8-skills-en-arch-390.png');
await shotMobile('/en/homepage-preview.html', 'property', 'run8-skills-en-property-390.png');
await shotMobile('/de/homepage-preview.html', 'architecture', 'run8-skills-de-arch-390.png');

await browser.close();
await server.close();
