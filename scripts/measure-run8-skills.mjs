import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = 4184;
const V = '20261005e';
const TAB_IDS = ['architecture', 'fiduciary', 'property'];

async function measurePage(page, pagePath, width) {
  await page.setViewportSize({ width, height: width <= 400 ? 1400 : 1000 });
  await page.goto(`http://127.0.0.1:${PORT}${pagePath}?v=${V}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60_000,
  });
  await page.waitForSelector('[data-alt-skills-sector]', { timeout: 30_000 });

  let tallestSkills = 0;
  let tallestTab = TAB_IDS[0];
  for (const tabId of TAB_IDS) {
    await page.evaluate((id) => {
      document.querySelector(`[data-skills-tab="${id}"]`)?.click();
    }, tabId);
    await page.waitForTimeout(200);
    const h = await page.evaluate(() => {
      const el = document.getElementById('skills');
      return el ? Math.round(el.getBoundingClientRect().height) : 0;
    });
    if (h > tallestSkills) {
      tallestSkills = h;
      tallestTab = tabId;
    }
  }

  const mainH = await page.evaluate(() => {
    const main = document.getElementById('alt-home-main');
    return main ? Math.round(main.getBoundingClientRect().height) : 0;
  });

  return { tallestSkills, tallestTab, mainH };
}

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch();

for (const loc of ['en', 'de']) {
  const pagePath = loc === 'en' ? '/en/homepage-preview.html' : '/de/homepage-preview.html';
  for (const width of [1280, 390]) {
    const page = await browser.newPage();
    const m = await measurePage(page, pagePath, width);
    console.log(`${loc}@${width}px tallestTab=${m.tallestTab} skills=${m.tallestSkills}px main=${m.mainH}px`);
    await page.close();
  }
}

await browser.close();
await server.close();
