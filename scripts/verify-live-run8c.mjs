import { chromium } from 'playwright';

const BASE = 'https://yevucee.github.io/zuraio';
const CACHE = '20261005e';
const URL = `${BASE}/de/homepage-preview.html?run8c-verify=${Date.now()}`;

const htmlRes = await fetch(URL, {
  headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
});
const html = await htmlRes.text();
const scriptMatch = html.match(/alt-homepage\.js\?v=([0-9a-z]+)/);
const scriptKey = scriptMatch?.[1] ?? '(not found)';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(URL, { waitUntil: 'networkidle', timeout: 120_000 });
await page.waitForSelector('[data-alt-skills-sector]', { timeout: 60_000 });
await page.click('[data-skills-tab="property"]');
await page.waitForTimeout(400);

const panelsMinHeight = await page.evaluate(() => {
  const el = document.querySelector('[data-skills-panels]');
  return el ? el.style.minHeight || '(empty)' : '(missing)';
});

const vielenMark = await page.evaluate(() => {
  const hl = [...document.querySelectorAll('#skills-panel-property .alt-skills-doc__hl')]
    .find((el) => el.dataset.hl === '1');
  if (!hl) return { error: 'highlight 1 missing' };
  const marks = hl.querySelectorAll('mark');
  const text = hl.querySelector('mark')?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  return { markCount: marks.length, textSnippet: text.slice(0, 80) };
});

await browser.close();

console.log(JSON.stringify({ scriptKey, panelsMinHeight, vielenMark, pageUrl: URL }, null, 2));

const ok =
  scriptKey === CACHE &&
  panelsMinHeight === '(empty)' &&
  vielenMark.markCount === 1 &&
  vielenMark.textSnippet?.includes('Vielen') &&
  vielenMark.textSnippet?.includes('Dank');

process.exit(ok ? 0 : 1);
