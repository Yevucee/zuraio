/**
 * List elements with computed font-size < 15px and more than one line of text.
 */
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = 4179;

const PAGES = [
  '/en/homepage-preview.html',
  '/de/homepage-preview.html',
  '/security.html',
  '/de/security.html',
  '/how-it-helps.html',
  '/de/how-it-helps.html',
  '/integrations.html',
  '/de/integrations.html',
  '/technical-architecture.html',
  '/de/technical-architecture.html',
  '/contact.html',
  '/de/contact.html',
];

async function auditPage(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(500);
  return page.evaluate(() => {
    const hits = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    while (walker.nextNode()) {
      const el = walker.currentNode;
      if (!(el instanceof HTMLElement)) continue;
      const style = getComputedStyle(el);
      const px = parseFloat(style.fontSize);
      if (px >= 15 || px <= 0) continue;
      const text = (el.innerText || '').trim();
      if (text.length < 20) continue;
      const lineHeight = parseFloat(style.lineHeight) || px * 1.4;
      const h = el.getBoundingClientRect().height;
      if (h / lineHeight < 1.6) continue;
      if (el.closest('.hero-eyebrow, .marker')) continue;
      hits.push({
        tag: el.tagName.toLowerCase(),
        class: el.className?.toString().slice(0, 60) || '',
        px,
        snippet: text.slice(0, 60),
      });
    }
    return hits;
  });
}

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });
const report = {};
for (const p of PAGES) {
  report[p] = await auditPage(page, `http://127.0.0.1:${PORT}${p}`);
}
await browser.close();
await server.close();
console.log(JSON.stringify(report, null, 2));
