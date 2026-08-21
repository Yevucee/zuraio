#!/usr/bin/env node
/** Assert production SEO output never includes the GitHub preview base path. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  HTML_PAGES,
  LOCALES,
  LOCALE_DIRS,
  canonicalUrl,
} from './seo-config.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const FORBIDDEN_PAGE_PREFIX = `${CANONICAL_BASE}/zuraio/`;

const errors = [];

function err(msg) {
  errors.push(msg);
}

function containsForbiddenPageUrl(text) {
  const re = new RegExp(`${CANONICAL_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/zuraio/(?!assets/)`, 'g');
  return re.test(text);
}

function scanFile(filePath) {
  const rel = path.relative(DIST, filePath);
  const text = fs.readFileSync(filePath, 'utf8');
  if (containsForbiddenPageUrl(text)) {
    const match = text.match(
      new RegExp(`${CANONICAL_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/zuraio/(?!assets/)[^"\\s<]+`),
    );
    err(`${rel}: contains forbidden SEO page URL ${match?.[0] ?? FORBIDDEN_PAGE_PREFIX}`);
  }
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) walk(fp);
    else if (/\.(html|xml|txt|json)$/i.test(name)) scanFile(fp);
  }
}

if (!fs.existsSync(DIST)) {
  console.error('audit-seo-no-preview-base: dist/ not found');
  process.exit(1);
}

for (const locale of LOCALES) {
  for (const page of HTML_PAGES) {
    const dir = LOCALE_DIRS[locale];
    const fp = dir ? path.join(DIST, dir, page) : path.join(DIST, page);
    if (!fs.existsSync(fp)) {
      err(`missing page file for ${canonicalUrl(locale, page)}`);
      continue;
    }
    const html = fs.readFileSync(fp, 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const expected = canonicalUrl(locale, page);
    if (canonical !== expected) {
      err(`${locale}/${page}: canonical ${canonical} != ${expected}`);
    }
    for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
      const lang = m[1];
      const href = m[2];
      const exp = lang === 'x-default' ? canonicalUrl('en', page) : canonicalUrl(lang, page);
      if (href !== exp) err(`${locale}/${page}: hreflang ${lang} ${href} != ${exp}`);
    }
    const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
    if (ogUrl && ogUrl !== expected) {
      err(`${locale}/${page}: og:url ${ogUrl} != ${expected}`);
    }
    for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(block[1]);
      } catch (e) {
        err(`${locale}/${page}: invalid JSON-LD — ${e.message}`);
      }
      if (containsForbiddenPageUrl(block[1])) {
        err(`${locale}/${page}: JSON-LD contains forbidden preview-base page URL`);
      }
    }
  }
}

walk(DIST);

const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length !== 64) err(`sitemap: expected 64 URLs, got ${locs.length}`);
for (const loc of locs) {
  if (loc.includes(FORBIDDEN_PAGE_PREFIX)) err(`sitemap loc contains preview page base: ${loc}`);
  if (!loc.startsWith(CANONICAL_BASE)) err(`sitemap loc not on canonical base: ${loc}`);
}

if (fs.existsSync(path.join(DIST, 'llms.txt'))) {
  const llms = fs.readFileSync(path.join(DIST, 'llms.txt'), 'utf8');
  if (containsForbiddenPageUrl(llms)) err('llms.txt contains forbidden preview-base page URL');
}

console.log('SEO_FORBIDDEN_PAGE_PREFIX', FORBIDDEN_PAGE_PREFIX);
console.log('SEO_AUDIT_ERRORS', errors.length);
if (errors.length) {
  console.log('\nERRORS:');
  errors.forEach((e) => console.log(' -', e));
}
process.exit(errors.length ? 1 : 0);
