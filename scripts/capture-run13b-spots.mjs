import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const ART = '/opt/cursor/artifacts';
const PORT = 4198;

fs.mkdirSync(ART, { recursive: true });

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch({ headless: true });
const base = `http://127.0.0.1:${PORT}`;

const locales = [
  { code: 'en', path: '/en/homepage-preview.html' },
  { code: 'de', path: '/de/homepage-preview.html' },
];
const widths = [390, 360];

try {
  for (const { code, path: p } of locales) {
    for (const width of widths) {
      const page = await browser.newPage();
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}${p}`, { waitUntil: 'networkidle', timeout: 90_000 });
      await page.waitForSelector('#team', { timeout: 30_000 });
      await page.waitForTimeout(1000);

      const overflow = await page.evaluate(() => ({
        overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      console.log(JSON.stringify({ locale: code, width, ...overflow }));

      await page.locator('#team').scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await page.locator('#team').screenshot({
        path: path.join(ART, `run13b-${code}-team-${width}.png`),
      });

      await page.locator('#skills .alt-skills-doc__paper').first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      const docCard = page.locator('#skills .alt-skills-doc').first();
      await docCard.screenshot({
        path: path.join(ART, `run13b-${code}-skills-card-${width}.png`),
      });

      await page.locator('.alt-home-reasons-strip__item:last-child').scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
      const transition = page.locator('#hero .alt-home-hero__tail');
      await transition.screenshot({
        path: path.join(ART, `run13b-${code}-benefits-skills-${width}.png`),
      });

      await page.close();
    }
  }
} finally {
  await browser.close().catch(() => {});
  await server.close().catch(() => {});
}
