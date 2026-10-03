import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const OUT = '/opt/cursor/artifacts';
const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = 4180;

const server = await startStaticDistServer(DIST, PORT);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(`http://127.0.0.1:${PORT}/technical-architecture.html?v=20261002g`, {
  waitUntil: 'domcontentloaded',
});
await page.waitForSelector('.alt-security-hero h1', { timeout: 15000 });

const shots = [
  { id: 'hero', sel: '.alt-security-hero' },
  { id: 'lifecycle', sel: '#skill-lifecycle' },
  { id: 'hosting', sel: '#hosting-compare' },
  { id: 'recorded', sel: '#whats-recorded' },
];

for (const { id, sel } of shots) {
  const el = page.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await el.screenshot({ path: `${OUT}/it-page-${id}-1280.png` });
}

await browser.close();
await server.close();
console.log('saved IT page screenshots to', OUT);
