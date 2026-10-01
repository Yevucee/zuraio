import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.ALT_HOME_BASE || 'http://127.0.0.1:5173/zuraio-comparison';
const CACHE = process.env.ALT_HOME_CACHE || '20260930p';
const OUT = process.env.ALT_HOME_OUT || '/opt/cursor/artifacts/alt-home-polish';

const locales = ['en', 'de'];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

for (const locale of locales) {
  for (const vp of [
    { name: '1280', width: 1280, height: 900 },
    { name: '390', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    const url = `${BASE}/${locale}/homepage-preview.html?v=${CACHE}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('.alt-home-hero__trust-list', { timeout: 45000 });
    await page.waitForTimeout(1200);

    const heroTrust = page.locator('.alt-home-hero__trust');
    await heroTrust.screenshot({ path: path.join(OUT, `${locale}-hero-trust-${vp.name}.png`) });

    const demo = page.locator('.alt-home-demo');
    await demo.screenshot({ path: path.join(OUT, `${locale}-demo-${vp.name}.png`) });

    const skills = page.locator('#skills');
    await skills.screenshot({ path: path.join(OUT, `${locale}-skills-${vp.name}.png`) });

    const integrations = page.locator('#integrations');
    await integrations.screenshot({ path: path.join(OUT, `${locale}-integrations-${vp.name}.png`) });

    await context.close();
  }
}

await writeFile(
  path.join(OUT, 'dash-audit.txt'),
  `# Remaining en-dash / em-dash in copy-alt-home.js (preview copy)\n# Generated ${new Date().toISOString()}\n`,
);
await browser.close();
console.log('Wrote', OUT);
