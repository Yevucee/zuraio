import { chromium } from 'playwright';

const CACHE = '20261006a';
const BASE = `https://yevucee.github.io/zuraio/de/homepage-preview.html?v=${CACHE}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(BASE, { waitUntil: 'networkidle', timeout: 120_000 });
await page.waitForSelector('[data-alt-skills-sector]');
await page.locator('#skills').scrollIntoViewIfNeeded();
await page.waitForTimeout(300);

const scrollBefore = await page.evaluate(() => window.scrollY);
for (const tab of ['architecture', 'fiduciary', 'property', 'architecture']) {
  await page.click(`[data-skills-tab="${tab}"]`);
  await page.waitForTimeout(200);
}
const scrollAfter = await page.evaluate(() => window.scrollY);

const figGrid = await page.evaluate(() => {
  const grid = document.querySelector('#skills-panel-fiduciary .alt-skills-doc__figures');
  if (!grid) return null;
  const children = [...grid.children];
  return {
    childCount: children.length,
    classes: children.map((c) => c.className),
    hlOnMiddle: children[1]?.classList.contains('alt-skills-doc__fig--hl'),
    markerInMiddle: !!children[1]?.querySelector('.alt-skills-doc__marker'),
  };
});

console.log(JSON.stringify({ scrollBefore, scrollAfter, scrollDelta: scrollAfter - scrollBefore, figGrid }, null, 2));
await browser.close();
process.exit(Math.abs(scrollAfter - scrollBefore) < 2 && figGrid?.childCount === 3 ? 0 : 1);
