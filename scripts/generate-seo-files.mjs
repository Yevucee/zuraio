/**
 * Generate sitemap.xml and robots.txt at dist root.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  HTML_PAGES,
  LOCALES,
  canonicalUrl,
} from './seo-config.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');

const LASTMOD = process.env.SITEMAP_LASTMOD || '2026-08-20';

function buildSitemap() {
  const urls = [];
  for (const locale of LOCALES) {
    for (const page of HTML_PAGES) {
      const loc = canonicalUrl(locale, page);
      const alternates = LOCALES.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${canonicalUrl(l, page)}"/>`,
      ).join('\n');
      urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${canonicalUrl('en', page)}"/>
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

Sitemap: ${CANONICAL_BASE}/sitemap.xml
`;
}

function buildLlmsTxt() {
  return `# Zuraio

> Zuraio is a digital executive assistant for Swiss SMEs. It works with approved company knowledge, shows its sources, and keeps employees in control of company data.

Canonical homepage: ${CANONICAL_BASE}/

## English
- Homepage: ${CANONICAL_BASE}/
- Data control: ${CANONICAL_BASE}/data-control.html
- Technical architecture: ${CANONICAL_BASE}/technical-architecture.html
- Deployment models: ${CANONICAL_BASE}/deployment-models.html
- AI governance: ${CANONICAL_BASE}/ai-governance.html
- Integrations: ${CANONICAL_BASE}/integrations.html
- FAQ: ${CANONICAL_BASE}/faq.html

## German
- Homepage: ${CANONICAL_BASE}/de/
- Datenschutz / Data control: ${CANONICAL_BASE}/de/data-control.html
- Technische Architektur: ${CANONICAL_BASE}/de/technical-architecture.html
- FAQ: ${CANONICAL_BASE}/de/faq.html

## French
- Homepage: ${CANONICAL_BASE}/fr/
- Contrôle des données: ${CANONICAL_BASE}/fr/data-control.html
- Architecture technique: ${CANONICAL_BASE}/fr/technical-architecture.html
- FAQ: ${CANONICAL_BASE}/fr/faq.html

## Italian
- Homepage: ${CANONICAL_BASE}/it/
- Controllo dei dati: ${CANONICAL_BASE}/it/data-control.html
- Architettura tecnica: ${CANONICAL_BASE}/it/technical-architecture.html
- FAQ: ${CANONICAL_BASE}/it/faq.html

Contact: michael.wili@zuraio.ch
`;
}

if (!fs.existsSync(DIST)) {
  console.error('generate-seo-files: dist/ not found');
  process.exit(1);
}

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), buildSitemap());
fs.writeFileSync(path.join(DIST, 'robots.txt'), buildRobots());
fs.writeFileSync(path.join(DIST, 'llms.txt'), buildLlmsTxt());
console.log('generate-seo-files: wrote sitemap.xml, robots.txt, llms.txt');
