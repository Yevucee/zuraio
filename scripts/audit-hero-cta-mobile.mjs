#!/usr/bin/env node
/** Verify hero CTA line-height and headline/popup overlap on FR/IT (and EN/DE regression). */
import { chromium } from 'playwright';

const BASE = process.env.PREVIEW_TEST_BASE || 'https://yevucee.github.io';
const LOCALES = [
  ['fr', '/zuraio/fr/', 'Découvrez'],
  ['it', '/zuraio/it/', 'Scoprite'],
  ['en', '/zuraio/', 'Meet'],
  ['de', '/zuraio/de/', 'Lernen'],
];
const WIDTHS = [320, 360, 390, 768, 1440];
const OVERLAP_WIDTHS = [1000, 1280, 1440];

const browser = await chromium.launch();
const errors = [];

for (const width of WIDTHS) {
  for (const [loc, path] of LOCALES) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 90000 });
    const metrics = await page.locator('[data-hero-cta]').evaluate((el) => {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        lineHeight: style.lineHeight,
        lineHeightPx: parseFloat(style.lineHeight),
        height: rect.height,
        scrollHeight: el.scrollHeight,
        overflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
      };
    });

    if (metrics.lineHeight === '0px' || metrics.lineHeightPx <= 0) {
      errors.push(`${loc}@${width}px: line-height is ${metrics.lineHeight}`);
    }
    if (metrics.scrollHeight > metrics.height + 2) {
      errors.push(
        `${loc}@${width}px: text clipped (scrollHeight ${metrics.scrollHeight} > height ${metrics.height})`,
      );
    }
    if (metrics.overflowX) {
      errors.push(`${loc}@${width}px: horizontal overflow`);
    }
    await page.close();
  }
}

for (const width of OVERLAP_WIDTHS) {
  for (const [loc, path] of LOCALES) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 90000 });
    const overlap = await page.evaluate(() => {
      const em = document.querySelector('#hero-comparison [data-hero-headline] .headline-em');
      const img = document.querySelector('#hero-comparison .hero-popup-img');
      if (!em || !img) return { skip: true };
      const er = em.getBoundingClientRect();
      const ir = img.getBoundingClientRect();
      return { emRight: er.right, imgLeft: ir.left, overlap: er.right > ir.left - 4 };
    });
    if (!overlap.skip && overlap.overlap) {
      errors.push(
        `${loc}@${width}px: headline emphasis overlaps popup (emRight ${overlap.emRight} > imgLeft ${overlap.imgLeft})`,
      );
    }
    await page.close();
  }
}

await browser.close();

if (errors.length) {
  console.log('HERO_AUDIT_ERRORS', errors.length);
  errors.forEach((e) => console.log(' -', e));
  process.exit(1);
}

console.log('HERO_AUDIT_OK', LOCALES.length * WIDTHS.length + LOCALES.length * OVERLAP_WIDTHS.length);
process.exit(0);
