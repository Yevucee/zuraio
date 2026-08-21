#!/usr/bin/env node
/** Audit dist output for GitHub Pages /zuraio/ preview base-path correctness. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  HTML_PAGES,
  LOCALES,
  LOCALE_DIRS,
  SITE_BASE_PATH,
  canonicalUrl,
  pageUrl,
} from './seo-config.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const PREVIEW_BASE = SITE_BASE_PATH || '/zuraio';

const errors = [];
const warnings = [];

function err(msg) {
  errors.push(msg);
}
function warn(msg) {
  warnings.push(msg);
}

function filePathFor(locale, page) {
  const dir = LOCALE_DIRS[locale];
  return dir ? path.join(DIST, dir, page) : path.join(DIST, page);
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function parseHead(html) {
  const canonical = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  const hreflang = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => ({
    lang: m[1],
    href: m[2],
  }));
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const lang = html.match(/<html lang="([^"]+)"/)?.[1] ?? '';
  return { canonical, hreflang, title, desc, lang };
}

function collectUrls(html, attr) {
  return [...html.matchAll(new RegExp(`${attr}="([^"]+)"`, 'g'))].map((m) => m[1]);
}

function isBrokenPreviewPath(href) {
  if (!href.startsWith('/')) return false;
  return (
    href.includes('/zuraio/zuraio/zuraio/') ||
    href.includes('/de/zuraio/') ||
    href.includes('/fr/zuraio/') ||
    href.includes('/it/zuraio/') ||
    href.includes('/zuraio/de/assets/') ||
    href.includes('/zuraio/fr/assets/') ||
    href.includes('/zuraio/it/assets/') ||
    href.includes('/zuraio/de/zuraio/') ||
    href.includes('/zuraio/fr/zuraio/') ||
    href.includes('/zuraio/it/zuraio/')
  );
}

function auditPage(locale, page) {
  const fp = filePathFor(locale, page);
  const urlPath = pageUrl(locale, page);

  if (!fs.existsSync(fp)) {
    err(`MISSING FILE: ${urlPath}`);
    return;
  }

  const html = fs.readFileSync(fp, 'utf8');
  const head = parseHead(html);
  const mainLen = stripTags(html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? '').length;

  if (head.lang !== locale) err(`${urlPath}: html lang ${head.lang} != ${locale}`);
  if (!head.title) err(`${urlPath}: missing title`);
  if (mainLen < 200) err(`${urlPath}: main text too short (${mainLen})`);
  if (head.canonical[0] !== canonicalUrl(locale, page)) {
    err(`${urlPath}: canonical must remain ${canonicalUrl(locale, page)}`);
  }

  for (const href of collectUrls(html, 'href')) {
    if (href.includes('?lang=')) err(`${urlPath}: link with ?lang=: ${href}`);
    if (isBrokenPreviewPath(href)) err(`${urlPath}: invalid preview path: ${href}`);
    if (href.includes('/zuraio/zuraio/') && href.endsWith('.html')) {
      err(`${urlPath}: duplicated page base in link: ${href}`);
    }
  }

  for (const src of [...collectUrls(html, 'src'), ...collectUrls(html, 'data-src')]) {
    if (isBrokenPreviewPath(src)) err(`${urlPath}: invalid asset path: ${src}`);
  }

  if (PREVIEW_BASE && locale !== 'en') {
    for (const src of collectUrls(html, 'src')) {
      if (src.startsWith('assets/') || src.startsWith('zuraio/')) {
        err(`${urlPath}: locale page has non-root asset path: ${src}`);
      }
    }
  }
}

if (!PREVIEW_BASE) {
  console.error('audit-preview-base: set SITE_BASE_PATH=/zuraio');
  process.exit(1);
}

for (const locale of LOCALES) {
  for (const page of HTML_PAGES) {
    auditPage(locale, page);
  }
}

console.log('PREVIEW_BASE', PREVIEW_BASE);
console.log('CANONICAL_BASE', CANONICAL_BASE);
console.log('PREVIEW_AUDIT_URLS', LOCALES.length * HTML_PAGES.length);
console.log('PREVIEW_AUDIT_ERRORS', errors.length);
console.log('PREVIEW_AUDIT_WARNINGS', warnings.length);

if (errors.length) {
  console.log('\nERRORS:');
  errors.forEach((e) => console.log(' -', e));
}
if (warnings.length) {
  console.log('\nWARNINGS:');
  warnings.forEach((w) => console.log(' -', w));
}

process.exit(errors.length ? 1 : 0);
