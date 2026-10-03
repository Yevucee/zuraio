import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const OUT = '/opt/cursor/artifacts';
const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = 4181;
const V = '20261003a';

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch();

async function shot(pagePath, locale, width, name) {
  const page = await browser.newPage({ viewport: { width, height: width === 390 ? 2000 : 900 } });
  await page.goto(`http://127.0.0.1:${PORT}${pagePath}?v=${V}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#same-question', { timeout: 60000 });
  await page.waitForTimeout(400);
  for (const sel of ['#hero', '#same-question']) {
    const el = page.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    await el.screenshot({ path: `${OUT}/${name}-${locale}-${width}-${sel.replace('#', '')}.png` });
  }
  const height = await page.evaluate(() => document.body.scrollHeight);
  await page.close();
  return height;
}

const en390 = await shot('/en/homepage-preview.html', 'en', 390, 'homepage');
const de390 = await shot('/de/homepage-preview.html', 'de', 390, 'homepage');
await shot('/en/homepage-preview.html', 'en', 1280, 'homepage');
await shot('/de/homepage-preview.html', 'de', 1280, 'homepage');

await browser.close();
await server.close();
console.log(JSON.stringify({ homepageHeight390: { en: en390, de: de390 } }, null, 2));
