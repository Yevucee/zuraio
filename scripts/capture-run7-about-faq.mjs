import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const OUT = '/opt/cursor/artifacts';
const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = 4182;
const V = '20261003c';

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch();

async function capture(pagePath, locale, width) {
  const page = await browser.newPage({ viewport: { width, height: width === 390 ? 5000 : 900 } });
  await page.goto(`http://127.0.0.1:${PORT}${pagePath}?v=${V}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('main h1', { timeout: 60000 });
  await page.waitForTimeout(300);
  const height = await page.evaluate(() => Math.round(document.body.scrollHeight));
  const name = pagePath.replace(/^\//, '').replace(/\//g, '-').replace('.html', '');
  await page.screenshot({ path: `${OUT}/run7-${name}-${locale}-${width}-full.png`, fullPage: true });
  await page.close();
  return height;
}

const heights390 = {};
for (const [path, locale] of [
  ['/about.html', 'en'],
  ['/de/about.html', 'de'],
  ['/faq.html', 'en'],
  ['/de/faq.html', 'de'],
]) {
  for (const w of [1280, 390]) {
    const h = await capture(path, locale, w);
    if (w === 390) heights390[path] = h;
  }
}

await browser.close();
await server.close();
console.log(JSON.stringify({ heights390 }, null, 2));
