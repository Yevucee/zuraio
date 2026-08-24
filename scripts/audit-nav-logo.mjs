#!/usr/bin/env node
/** Audit prerendered logo paths and desktop nav label alignment. */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { HTML_PAGES, LOCALES, LOCALE_DIRS, SITE_BASE_PATH } from './seo-config.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PREVIEW_BASE = (process.env.PREVIEW_TEST_BASE || 'https://yevucee.github.io/zuraio').replace(/\/$/, '');
const NAV_WIDTHS = [980, 1100, 1280, 1440];
const NAV_LOCALES = ['fr', 'de', 'it', 'en'];

const errors = [];

function filePathFor(locale, page) {
  const dir = LOCALE_DIRS[locale];
  return dir ? path.join(DIST, dir, page) : path.join(DIST, page);
}

function liveUrl(locale, page) {
  const dir = LOCALE_DIRS[locale];
  if (!dir) return page === 'index.html' ? `${PREVIEW_BASE}/` : `${PREVIEW_BASE}/${page}`;
  return page === 'index.html' ? `${PREVIEW_BASE}/${dir}/` : `${PREVIEW_BASE}/${dir}/${page}`;
}

// 1) Static dist HTML — logo must include preview base when built for GitHub Pages
if (SITE_BASE_PATH) {
  for (const locale of LOCALES) {
    for (const page of HTML_PAGES) {
      const fp = filePathFor(locale, page);
      if (!fs.existsSync(fp)) {
        errors.push(`missing dist file: ${locale}/${page}`);
        continue;
      }
      const html = fs.readFileSync(fp, 'utf8');
      if (html.includes('/fr/fr/') || html.includes('/de/de/') || html.includes('/it/it/')) {
        errors.push(`${locale}/${page}: duplicated locale segment in prerendered links`);
      }
      const logos = [...html.matchAll(/class="brand-logo"[^>]*src="([^"]+)"/g)].map((m) => m[1]);
      for (const src of logos) {
        if (src === '/assets/zuraio-logo.png') {
          errors.push(`${locale}/${page}: prerendered logo missing preview base (${src})`);
        } else if (src.includes('/fr/fr/') || src.includes('/de/de/') || src.includes('/it/it/')) {
          errors.push(`${locale}/${page}: duplicated locale in path ${src}`);
        } else if (!src.includes(`${SITE_BASE_PATH}/assets/zuraio-logo.png`)) {
          errors.push(`${locale}/${page}: unexpected logo src ${src}`);
        }
      }
    }
  }
}

const browser = await chromium.launch();

// 2) Logo loads without JS (prerendered HTML only)
for (const locale of LOCALES) {
  for (const page of ['index.html', 'about.html']) {
    const url = liveUrl(locale, page);
    const p = await browser.newPage();
    await p.route('**/*.js', (route) => route.abort());
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    const logo = await p.evaluate(() => {
      const img = document.querySelector('.brand-logo');
      return {
        src: img?.getAttribute('src') ?? null,
        ok: img ? img.complete && img.naturalWidth > 0 : false,
      };
    });
    if (!logo.ok) errors.push(`${url}: logo broken without JS (${logo.src})`);
    await p.close();
  }
}

// 3) Desktop nav labels stay on one line
for (const width of NAV_WIDTHS) {
  for (const locale of NAV_LOCALES) {
    const url = liveUrl(locale, 'index.html');
    const p = await browser.newPage({ viewport: { width, height: 900 } });
    await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    const wrapped = await p.evaluate(() =>
      [...document.querySelectorAll('.nav-links > a, .nav-links > .nav-dropdown')].flatMap((el) => {
        const node = el.classList.contains('nav-dropdown')
          ? el.querySelector('.nav-dropdown-btn')
          : el;
        const rect = node?.getBoundingClientRect();
        const lines = node?.getClientRects().length ?? 0;
        if (!node || (lines <= 1 && (rect?.height ?? 0) <= 24)) return [];
        return [{ text: node.textContent?.trim(), lines, height: rect?.height, width: rect?.width }];
      }),
    );
    if (wrapped.length) errors.push(`${locale}@${width}px: nav wrap ${JSON.stringify(wrapped)}`);
    await p.close();
  }
}

await browser.close();

if (errors.length) {
  console.log('NAV_LOGO_AUDIT_ERRORS', errors.length);
  errors.forEach((e) => console.log(' -', e));
  process.exit(1);
}

console.log('NAV_LOGO_AUDIT_OK', LOCALES.length * HTML_PAGES.length + NAV_WIDTHS.length * NAV_LOCALES.length);
process.exit(0);
