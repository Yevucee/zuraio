import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.ALT_HOME_BASE || 'http://127.0.0.1:5173/zuraio-comparison';
const CACHE = process.env.ALT_HOME_CACHE || '20260930m';
const OUT = process.env.ALT_HOME_OUT || '/opt/cursor/artifacts/alt-home-hero-reasons';

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

for (const locale of ['en', 'de']) {
  for (const vp of [
    { name: '1280x800', width: 1280, height: 800 },
    { name: '390', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto(`${BASE}/${locale}/homepage-preview.html?v=${CACHE}`, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () => document.querySelector('.alt-home-hero--has-visual, .alt-home-hero--text-only'),
      { timeout: 10000 },
    );
    await page.waitForTimeout(400);

    const hero = page.locator('#hero');
    const reasons = page.locator('#reasons');
    const box = await page.evaluate(() => {
      const h = document.getElementById('hero');
      const r = document.getElementById('reasons');
      if (!h || !r) return null;
      const hr = h.getBoundingClientRect();
      const rr = r.getBoundingClientRect();
      const top = Math.min(hr.top, 0);
      const bottom = rr.bottom;
      return { x: 0, y: 0, width: window.innerWidth, height: Math.ceil(bottom - top) };
    });

    if (box) {
      await page.screenshot({
        path: path.join(OUT, `${locale}-hero-reasons-${vp.name}.png`),
        clip: {
          x: box.x,
          y: Math.max(0, box.y),
          width: box.width,
          height: Math.min(box.height, vp.name === '390' ? 1280 : 720),
        },
      });
    }

    await context.close();
  }
}

await browser.close();
console.log('Wrote', OUT);
