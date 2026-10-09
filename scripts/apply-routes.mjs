/**
 * Sync href on elements with data-route from site-routes (preview paths).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveRoute } from './site-routes.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteRoot = path.join(root, 'public/zuraio-comparison');

function applyFile(rel, viewingLocale) {
  const full = path.join(siteRoot, rel);
  if (!fs.existsSync(full)) return;
  let html = fs.readFileSync(full, 'utf8');
  html = html.replace(
    /<a\b([^>]*?\sdata-route="([^"]+)"[^>]*)>/gi,
    (tag, attrs, routeKey) => {
      const targetLocale = viewingLocale;
      const href = resolveRoute(routeKey, targetLocale, viewingLocale);
      const withoutHref = attrs.replace(/\shref="[^"]*"/i, '');
      return `<a${withoutHref} href="${href}">`;
    },
  );
  fs.writeFileSync(full, html);
}

const enHtml = fs.readdirSync(siteRoot).filter((f) => f.endsWith('.html'));
for (const f of enHtml) applyFile(f, 'en');
for (const loc of ['en', 'de', 'fr', 'it']) {
  const dir = path.join(siteRoot, loc);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.html'))) {
    applyFile(path.join(loc, f), loc);
  }
}

console.log('apply-routes: OK');
