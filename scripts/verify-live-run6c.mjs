import { chromium } from 'playwright';

const BASE = 'https://yevucee.github.io/zuraio';
const V = '20261003b';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${BASE}/en/homepage-preview.html?v=${V}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForSelector('#same-question', { timeout: 60000 });
const hero = await page.locator('h1 .alt-home-hero__line').first().textContent();
await page.locator('.alt-sq-link-wrap a').click();
await page.waitForFunction(
  () => document.getElementById('chatgpt-copilot')?.querySelector('.faq-q')?.getAttribute('aria-expanded') === 'true',
  null,
  { timeout: 10000 },
);
console.log('hero line 1:', hero?.trim());
console.log('chatgpt-copilot open: OK');
await browser.close();
