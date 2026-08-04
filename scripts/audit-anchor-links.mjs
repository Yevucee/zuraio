#!/usr/bin/env node
/**
 * Validates in-page anchor links across the static marketing site.
 * Scans HTML and JS copy files for href values containing # fragments,
 * then verifies each target id exists on the referenced page.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const SITE_DIR = join(process.cwd(), 'public/zuraio-comparison');
const HTML_DIR = SITE_DIR;
const JS_DIR = join(SITE_DIR, 'js');

const HREF_PATTERN = /href\s*:\s*['"]([^'"]+)['"]|href=["']([^"']+)['"]/g;

function listFiles(dir, ext) {
  return readdirSync(dir)
    .filter((name) => name.endsWith(ext))
    .map((name) => join(dir, name));
}

function collectIds(html) {
  const ids = new Set();
  const idPattern = /\bid=["']([^"']+)["']/g;
  let match;
  while ((match = idPattern.exec(html)) !== null) {
    ids.add(match[1]);
  }
  return ids;
}

function pageIdsByFile() {
  const map = new Map();
  for (const file of listFiles(HTML_DIR, '.html')) {
    const html = readFileSync(file, 'utf8');
    map.set(basename(file), collectIds(html));
  }
  return map;
}

function extractAnchorsFromText(text, source) {
  const links = [];
  let match;
  while ((match = HREF_PATTERN.exec(text)) !== null) {
    const href = match[1] ?? match[2];
    if (!href || !href.includes('#')) continue;
    links.push({ href, source });
  }
  return links;
}

function collectAnchorLinks() {
  const links = [];
  for (const file of listFiles(HTML_DIR, '.html')) {
    const text = readFileSync(file, 'utf8');
    links.push(...extractAnchorsFromText(text, basename(file)));
  }
  for (const file of listFiles(JS_DIR, '.js')) {
    const text = readFileSync(file, 'utf8');
    links.push(...extractAnchorsFromText(text, basename(file)));
  }
  return links;
}

const PAGE_CONTEXT = {
  'copy-de-technical.js': 'technical-architecture.html',
  'copy-fr-technical.js': 'technical-architecture.html',
  'copy-it-technical.js': 'technical-architecture.html',
  'copy-de.js': 'index.html',
  'copy-en.js': 'index.html',
  'copy-fr.js': 'index.html',
  'copy-it.js': 'index.html',
};

function resolveTarget(href, sourcePage) {
  const hashIndex = href.indexOf('#');
  if (hashIndex < 0) return null;
  const pagePart = href.slice(0, hashIndex);
  const fragment = href.slice(hashIndex + 1);
  const page = pagePart || PAGE_CONTEXT[sourcePage] || sourcePage;
  return { page, fragment };
}

function main() {
  const idsByPage = pageIdsByFile();
  const links = collectAnchorLinks();
  const seen = new Set();
  const errors = [];
  const ok = [];

  for (const { href, source } of links) {
    const key = `${source} -> ${href}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const target = resolveTarget(href, source);
    if (!target?.fragment) continue;

    const { page, fragment } = target;
    const ids = idsByPage.get(page);
    if (!ids) {
      errors.push({ href, source, reason: `Unknown page "${page}"` });
      continue;
    }
    if (!ids.has(fragment)) {
      errors.push({ href, source, reason: `Missing id="${fragment}" on ${page}` });
      continue;
    }
    ok.push({ href, source, page, fragment });
  }

  console.log(`Anchor link audit: ${ok.length} unique links checked`);
  for (const item of ok.sort((a, b) => a.href.localeCompare(b.href))) {
    console.log(`  OK  ${item.href.padEnd(48)} (${item.source})`);
  }

  if (errors.length) {
    console.error(`\n${errors.length} broken anchor link(s):`);
    for (const err of errors) {
      console.error(`  FAIL ${err.href} in ${err.source}: ${err.reason}`);
    }
    process.exit(1);
  }

  console.log('\nAll anchor links resolve to existing section ids.');
}

main();
