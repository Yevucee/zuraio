/**
 * Fail if data-route hrefs in static HTML do not match site-routes for that file's locale.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveRoute } from './site-routes.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteRoot = path.join(root, 'public/zuraio-comparison');

const TAG_RE = /<a\b([^>]*?\sdata-route="([^"]+)"[^>]*)>/gi;

function checkFile(rel, viewingLocale) {
  const full = path.join(siteRoot, rel);
  if (!fs.existsSync(full)) return [];
  const html = fs.readFileSync(full, 'utf8');
  const errors = [];
  for (const match of html.matchAll(TAG_RE)) {
    const attrs = match[1];
    const routeKey = match[2];
    const hrefMatch = attrs.match(/\shref="([^"]*)"/i);
    if (!hrefMatch) {
      errors.push(`${rel}: missing href on data-route="${routeKey}"`);
      continue;
    }
    const expected = resolveRoute(routeKey, viewingLocale, viewingLocale);
    if (hrefMatch[1] !== expected) {
      errors.push(`${rel}: data-route="${routeKey}" href="${hrefMatch[1]}" expected "${expected}"`);
    }
  }
  return errors;
}

const errors = [];
for (const f of fs.readdirSync(siteRoot).filter((n) => n.endsWith('.html'))) {
  errors.push(...checkFile(f, 'en'));
}
for (const loc of ['en', 'de']) {
  const dir = path.join(siteRoot, loc);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.html'))) {
    errors.push(...checkFile(path.join(loc, f), loc));
  }
}

if (errors.length) {
  console.error('check-route-hrefs:\n' + errors.map((e) => `  ${e}`).join('\n'));
  process.exit(1);
}
console.log('check-route-hrefs: OK');
