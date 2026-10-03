/**
 * Report H1 line counts at 1280 and 390 for alt marketing pages (EN + DE).
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startStaticDistServer } from './static-dist-server.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PORT = Number(process.env.MEASURE_PORT || 4178);

const PAGES = [
  { path: '/en/homepage-preview.html', label: 'EN home preview' },
  { path: '/de/homepage-preview.html', label: 'DE home preview' },
  { path: '/security.html', label: 'EN security' },
  { path: '/de/security.html', label: 'DE security' },
  { path: '/how-it-helps.html', label: 'EN how-it-helps' },
  { path: '/de/how-it-helps.html', label: 'DE how-it-helps' },
  { path: '/integrations.html', label: 'EN integrations' },
  { path: '/de/integrations.html', label: 'DE integrations' },
  { path: '/technical-architecture.html', label: 'EN IT partner' },
  { path: '/de/technical-architecture.html', label: 'DE IT partner' },
  { path: '/contact.html', label: 'EN contact' },
  { path: '/de/contact.html', label: 'DE contact' },
];

async function measurePage(page, url, width) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForSelector('h1', { timeout: 15000 });
  return page.evaluate(() => {
    const h1 = document.querySelector('main h1, #alt-home-main h1, .alt-security-hero h1, .alt-help-hero h1, .alt-int-hero h1');
    if (!h1) return null;
    const style = getComputedStyle(h1);
    const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.05;
    const height = h1.getBoundingClientRect().height;
    const lines = Math.max(1, Math.round(height / lineHeight));
    return {
      lines,
      fontSize: style.fontSize,
      maxWidth: style.maxWidth,
      text: h1.textContent?.trim().slice(0, 80),
    };
  });
}

async function run() {
  const server = await startStaticDistServer(DIST, PORT);
  const browser = await chromium.launch({ headless: true });
  const base = `http://127.0.0.1:${PORT}`;
  const rows = [];

  try {
    const page = await browser.newPage();
    for (const { path: p, label } of PAGES) {
      const at1280 = await measurePage(page, `${base}${p}`, 1280);
      const at390 = await measurePage(page, `${base}${p}`, 390);
      rows.push({ label, at1280, at390 });
    }
    await page.close();

    const page390 = await browser.newPage();
    await page390.setViewportSize({ width: 390, height: 12000 });
    await page390.goto(`${base}/technical-architecture.html`, { waitUntil: 'domcontentloaded' });
    await page390.waitForSelector('.alt-security-hero h1', { timeout: 15000 });
    await page390.waitForTimeout(300);
    const itHeight = await page390.evaluate(() => document.body.scrollHeight);
    await page390.close();

    console.log(JSON.stringify({ rows, itPageHeight390: itHeight }, null, 2));
  } finally {
    await browser.close();
    await server.close();
  }
}

if (!fs.existsSync(DIST)) {
  console.error('dist missing');
  process.exit(1);
}

await run();
