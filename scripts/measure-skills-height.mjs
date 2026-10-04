import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.MEASURE_PORT || 4181);
const V = process.env.CACHE_V || '20261004a';

const pages = [
  { loc: 'en', path: `/en/homepage-preview.html?v=${V}` },
  { loc: 'de', path: `/de/homepage-preview.html?v=${V}` },
];

const server = await startStaticDistServer(DIST, PORT);
const base = `http://127.0.0.1:${PORT}`;
const browser = await chromium.launch();

for (const width of [390]) {
  for (const p of pages) {
    const page = await browser.newPage({ viewport: { width, height: 1200 } });
    await page.goto(`${base}${p.path}`, { waitUntil: 'networkidle', timeout: 90_000 });
    await page.waitForSelector('#skills', { timeout: 30_000 });
    const m = await page.evaluate(() => {
      const skills = document.getElementById('skills');
      const main = document.getElementById('alt-home-main');
      const sr = skills?.getBoundingClientRect();
      const mr = main?.getBoundingClientRect();
      return {
        skillsHeight: sr ? Math.round(sr.height) : 0,
        mainHeight: mr ? Math.round(mr.height) : 0,
      };
    });
    console.log(`${p.loc}@${width}px skills=${m.skillsHeight}px main=${m.mainHeight}px`);
    await page.close();
  }
}

await browser.close();
await server.close();
