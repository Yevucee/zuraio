import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.ALT_HOME_BASE || 'http://127.0.0.1:5173/zuraio-comparison';
const CACHE = process.env.ALT_HOME_CACHE || '20260930n';
const OUT = process.env.ALT_HOME_OUT || '/opt/cursor/artifacts/alt-home-hero-strip';

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

for (const locale of ['en', 'de']) {
  for (const vp of [
    { name: '1280x800', width: 1280, height: 800, maxClip: 780 },
    { name: '390', width: 390, height: 1600, maxClip: 1600 },
  ]) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto(`${BASE}/${locale}/homepage-preview.html?v=${CACHE}`, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () =>
        document.querySelector('.alt-home-reasons-strip') &&
        (document.querySelector('.alt-home-hero--has-visual') || document.querySelector('.alt-home-hero--text-only')),
      { timeout: 12000 },
    );
    await page.waitForTimeout(500);

    const box = await page.evaluate((maxClip) => {
      const hero = document.getElementById('hero');
      const demo = document.getElementById('demo');
      if (!hero || !demo) return null;
      const hb = hero.getBoundingClientRect();
      const db = demo.getBoundingClientRect();
      return {
        x: 0,
        y: Math.max(0, hb.top),
        width: window.innerWidth,
        height: Math.min(db.bottom - hb.top, maxClip),
      };
    }, vp.maxClip);

    if (box) {
      await page.screenshot({
        path: path.join(OUT, `${locale}-hero-demo-${vp.name}.png`),
        clip: box,
      });
    }

    await context.close();
  }
}

await browser.close();
console.log('Wrote', OUT);
