#!/usr/bin/env node
/** Verify hero CTA line-height and wrapping on mobile FR/IT. */
import { chromium } from 'playwright';

const BASE = process.env.PREVIEW_TEST_BASE || 'https://yevucee.github.io';
const LOCALES = [
  ['fr', '/zuraio/fr/', 'Découvrez'],
  ['it', '/zuraio/it/', 'Scoprite'],
  ['en', '/zuraio/', 'Meet'],
  ['de', '/zuraio/de/', 'Lernen'],
];
const WIDTHS = [320, 360, 390];

const browser = await chromium.launch();
const errors = [];

for (const width of WIDTHS) {
  for (const [loc, path] of LOCALES) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 60000 });
    const metrics = await page.locator('[data-hero-cta]').evaluate((el) => {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        lineHeight: style.lineHeight,
        lineHeightPx: parseFloat(style.lineHeight),
        height: rect.height,
        scrollHeight: el.scrollHeight,
        overflowX: document.documentElement.scrollWidth > window.innerWidth,
        text: el.textContent?.trim(),
      };
    });

    if (metrics.lineHeight === '0px' || metrics.lineHeightPx <= 0) {
      errors.push(`${loc}@${width}px: line-height is ${metrics.lineHeight}`);
    }
    if (metrics.scrollHeight > metrics.height + 2) {
      errors.push(`${loc}@${width}px: text clipped (scrollHeight ${metrics.scrollHeight} > height ${metrics.height})`);
    }
    if (metrics.overflowX) {
      errors.push(`${loc}@${width}px: horizontal overflow`);
    }
    await page.close();
  }
}

await browser.close();

if (errors.length) {
  console.log('CTA_AUDIT_ERRORS', errors.length);
  errors.forEach((e) => console.log(' -', e));
  process.exit(1);
}

console.log('CTA_AUDIT_OK', LOCALES.length * WIDTHS.length);
process.exit(0);
