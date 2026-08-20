#!/usr/bin/env node
/** Pre-merge audit for PR #64 generated dist output. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  HTML_PAGES,
  LOCALES,
  LOCALE_DIRS,
  canonicalUrl,
  pageUrl,
} from './seo-config.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');

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
  const noindex = /noindex/i.test(html);
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  return { canonical, hreflang, title, desc, lang, noindex, jsonLd };
}

function countH1(html) {
  const body = html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html;
  return (body.match(/<h1[\s>]/gi) ?? []).length;
}

function mainText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? '';
  return stripTags(main);
}

function internalLinks(html) {
  return [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
}

function auditPage(locale, page) {
  const fp = filePathFor(locale, page);
  const urlPath = pageUrl(locale, page);
  const expectedCanonical = canonicalUrl(locale, page);

  if (!fs.existsSync(fp)) {
    err(`MISSING FILE: ${urlPath} (${fp})`);
    return;
  }

  const html = fs.readFileSync(fp, 'utf8');
  const head = parseHead(html);
  const h1Count = countH1(html);
  const mainLen = mainText(html).length;

  if (head.canonical.length !== 1) err(`${urlPath}: expected 1 canonical, got ${head.canonical.length}`);
  if (head.canonical[0] && head.canonical[0] !== expectedCanonical) {
    err(`${urlPath}: canonical ${head.canonical[0]} != ${expectedCanonical}`);
  }
  if (head.hreflang.length !== 5) err(`${urlPath}: expected 5 hreflang, got ${head.hreflang.length}`);
  const langs = new Set(head.hreflang.map((h) => h.lang));
  for (const l of [...LOCALES, 'x-default']) {
    if (!langs.has(l)) err(`${urlPath}: missing hreflang ${l}`);
  }
  for (const h of head.hreflang) {
    const expected = h.lang === 'x-default' ? canonicalUrl('en', page) : canonicalUrl(h.lang, page);
    if (h.href !== expected) err(`${urlPath}: hreflang ${h.lang} href ${h.href} != ${expected}`);
  }
  if (head.lang !== locale) err(`${urlPath}: html lang ${head.lang} != ${locale}`);
  if (!head.title) err(`${urlPath}: missing title`);
  if (!head.desc) warn(`${urlPath}: missing meta description`);
  if (h1Count !== 1) err(`${urlPath}: expected 1 h1, got ${h1Count}`);
  if (mainLen < 200) err(`${urlPath}: main text too short (${mainLen})`);
  if (head.noindex) err(`${urlPath}: noindex present`);
  if (!html.includes('id="site-header"')) err(`${urlPath}: missing header`);
  if (!html.includes('site-footer') && !html.includes('foot-')) warn(`${urlPath}: footer marker not found`);

  for (const block of head.jsonLd) {
    try {
      const data = JSON.parse(block);
      const s = JSON.stringify(data);
      if (/placeholder|TODO|lorem|xxx|0000|example\.com/i.test(s)) err(`${urlPath}: placeholder in JSON-LD`);
      if (/aggregateRating|reviewCount|price|streetAddress|"rating"/i.test(s)) err(`${urlPath}: invented JSON-LD commercial data`);
    } catch (e) {
      err(`${urlPath}: invalid JSON-LD: ${e.message}`);
    }
  }

  for (const href of internalLinks(html)) {
    if (href.includes('?lang=')) err(`${urlPath}: internal link with ?lang=: ${href}`);
    if (page === 'index.html' && /index\.html/.test(href) && !href.includes('#')) {
      warn(`${urlPath}: index.html link in homepage output: ${href}`);
    }
  }
}

// Reciprocal hreflang
const hreflangMap = new Map();
for (const locale of LOCALES) {
  for (const page of HTML_PAGES) {
    auditPage(locale, page);
    const fp = filePathFor(locale, page);
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, 'utf8');
    for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
      hreflangMap.set(`${locale}:${page}:${m[1]}`, m[2]);
    }
  }
}

// Sitemap audit
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (sitemapLocs.length !== 64) err(`sitemap: expected 64 URLs, got ${sitemapLocs.length}`);
for (const loc of sitemapLocs) {
  if (loc.includes('index.html')) err(`sitemap contains index.html variant: ${loc}`);
  if (!loc.startsWith(CANONICAL_BASE)) err(`sitemap URL not on canonical base: ${loc}`);
}

// robots
const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${CANONICAL_BASE}/sitemap.xml`)) err('robots.txt missing sitemap line');

// Homepage link normalization in representative pages
for (const [loc, file] of [
  ['en', 'index.html'],
  ['de', 'de/index.html'],
]) {
  const html = fs.readFileSync(path.join(DIST, file), 'utf8');
  if (html.includes('href="index.html"')) err(`${file}: still has href="index.html"`);
  const brand = html.match(/class="brand" href="([^"]+)"/)?.[1];
  const expected = loc === 'en' ? '/' : `/${loc}/`;
  if (brand && brand !== expected && brand !== `./`) warn(`${file}: brand href ${brand} (expected ${expected})`);
}

console.log('AUDIT_URLS_CHECKED', LOCALES.length * HTML_PAGES.length);
console.log('AUDIT_ERRORS', errors.length);
console.log('AUDIT_WARNINGS', warnings.length);
if (errors.length) {
  console.log('\nERRORS:');
  errors.forEach((e) => console.log(' -', e));
}
if (warnings.length) {
  console.log('\nWARNINGS:');
  warnings.forEach((w) => console.log(' -', w));
}
process.exit(errors.length ? 1 : 0);
