import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.ALT_HOME_BASE || 'http://127.0.0.1:5173/zuraio-comparison';
const CACHE = process.env.ALT_HOME_CACHE || '20260930l';
const OUT = process.env.ALT_HOME_OUT || '/opt/cursor/artifacts/alt-home-hero-skills';

const locales = ['en', 'de'];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const report = { cache: CACHE, locales: {} };

for (const locale of locales) {
  report.locales[locale] = {};

  for (const vp of [
    { name: '1280x800', width: 1280, height: 800 },
    { name: '390', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    const url = `${BASE}/${locale}/homepage-preview.html?v=${CACHE}`;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () =>
        document.querySelector('.alt-home-hero--has-visual') ||
        document.querySelector('.alt-home-hero--text-only'),
      { timeout: 10000 },
    );
    await page.waitForTimeout(500);

    const hero = page.locator('#hero');
    await hero.screenshot({ path: path.join(OUT, `${locale}-hero-${vp.name}.png`) });

    const skills = page.locator('#skills');
    await skills.screenshot({ path: path.join(OUT, `${locale}-skills-${vp.name}.png`) });

    if (vp.name === '390') {
      const metrics = await page.evaluate(() => {
        const heroEl = document.getElementById('hero');
        const skillsEl = document.getElementById('skills');
        const heroHasVisual = document.querySelector('.alt-home-hero--has-visual') != null;
        const skillsHasVisual = document.querySelector('.alt-home-skills--has-visual') != null;
        const skillsVisualDisplay = skillsEl
          ? getComputedStyle(skillsEl.querySelector('[data-alt-skills-visual]') || document.body).display
          : null;
        return {
          totalHeight: document.documentElement.scrollHeight,
          heroHeight: heroEl?.getBoundingClientRect().height ?? 0,
          skillsHeight: skillsEl?.getBoundingClientRect().height ?? 0,
          heroHasVisual,
          skillsHasVisual,
          skillsVisualHiddenBelow600: window.matchMedia('(max-width: 599px)').matches
            ? skillsEl?.querySelector('[data-alt-skills-visual]')?.offsetParent === null
            : null,
        };
      });
      report.locales[locale].mobile390 = metrics;
    }

    if (vp.name === '1280x800') {
      const metrics = await page.evaluate(() => ({
        heroHasVisual: document.querySelector('.alt-home-hero--has-visual') != null,
        heroGridCols: getComputedStyle(document.querySelector('.alt-home-hero__grid')).gridTemplateColumns,
        heroFrameWidth: document.querySelector('.alt-home-hero__frame')?.getBoundingClientRect().width ?? 0,
        skillsHasVisual: document.querySelector('.alt-home-skills--has-visual') != null,
      }));
      report.locales[locale].desktop1280 = metrics;
    }

    await context.close();
  }
}

await writeFile(path.join(OUT, 'capture-report.json'), JSON.stringify(report, null, 2));
await browser.close();
console.log('Wrote', OUT);
