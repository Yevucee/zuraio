import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const ART = '/opt/cursor/artifacts';
const PORT = 4197;
const tag = process.argv[2] || 'after';

fs.mkdirSync(ART, { recursive: true });

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch({ headless: true });
const base = `http://127.0.0.1:${PORT}`;

const jobs = [
  { locale: 'en', path: '/en/homepage-preview.html' },
  { locale: 'de', path: '/de/homepage-preview.html' },
];

const widths = [390, 360];

try {
  const page = await browser.newPage();
  const heights = {};

  for (const { locale, path: p } of jobs) {
    for (const width of widths) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto(`${base}${p}`, { waitUntil: 'networkidle', timeout: 90_000 });
      await page.waitForSelector('#alt-home-main #hero', { timeout: 30_000 });
      await page.waitForTimeout(1200);

      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        return {
          pageHeight: Math.max(doc.scrollHeight, document.body?.scrollHeight ?? 0),
          overflowX: doc.scrollWidth > doc.clientWidth + 1,
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
        };
      });

      const file = `run13-${tag}-${locale}-${width}.png`;
      await page.screenshot({ path: path.join(ART, file), fullPage: true });
      heights[`${locale}-${width}`] = metrics;
      console.log(JSON.stringify({ tag, locale, width, file, ...metrics }));
    }
  }

  fs.writeFileSync(path.join(ART, `run13-heights-${tag}.json`), JSON.stringify(heights, null, 2));
} finally {
  await browser.close().catch(() => {});
  await server.close().catch(() => {});
}
