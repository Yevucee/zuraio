/**
 * SEO head checks on the built preview site (dist root after set-main-site).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  HOMEPAGE_INDEX_PATHS,
  listPreviewSiteHtmlFiles,
} from './preview-site-html-paths.mjs';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const EM_DASH_SEP = / — /;
const TITLE_DASH = /–|—|\s-\s/;
const PREVIEW_TITLE_FORBIDDEN = /Vorschau|Alternative|\bpreview\b/i;

function metaContent(html, names) {
  const out = [];
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = m[0];
    const name =
      tag.match(/\b(?:name|property)=["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? '';
    if (!names.has(name)) continue;
    const content = tag.match(/\bcontent=["']([^"']*)["']/i)?.[1];
    if (content != null) out.push(content);
  }
  return out;
}

function hasMetaDescription(html) {
  const m = html.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i);
  if (!m) return false;
  const content = m[0].match(/\bcontent=["']([^"']*)["']/i)?.[1] ?? '';
  return content.trim().length > 0;
}

const files = listPreviewSiteHtmlFiles(DIST);
if (!files.length) {
  console.error('check-dist-html-dashes: no preview-site HTML under dist/ (run set-main-site first)');
  process.exit(1);
}

const homepageFiles = new Set(
  HOMEPAGE_INDEX_PATHS.map((p) => path.join(DIST, p)),
);

const offenders = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(DIST, file);
  const isHomePreview = homepageFiles.has(file);

  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';

  if (EM_DASH_SEP.test(title)) {
    offenders.push(`${rel}: <title> em dash ${title.slice(0, 100)}`);
  }

  if (isHomePreview) {
    if (PREVIEW_TITLE_FORBIDDEN.test(title)) {
      offenders.push(`${rel}: <title> preview placeholder ${title.slice(0, 100)}`);
    }
    if (TITLE_DASH.test(title)) {
      offenders.push(`${rel}: <title> contains dash ${title.slice(0, 100)}`);
    }
  }

  const isRedirectStub = html.includes('location.replace(') && !html.includes('data-alt-chrome');
  if (!isRedirectStub && !hasMetaDescription(html)) {
    offenders.push(`${rel}: missing meta description`);
  }

  for (const content of metaContent(html, new Set(['description', 'og:title', 'twitter:title']))) {
    if (EM_DASH_SEP.test(content)) offenders.push(`${rel}: meta em dash ${content.slice(0, 100)}`);
  }

  const headerBlock = html.match(/<header\b[^>]*class=["'][^"']*site-header[^"']*["'][\s\S]*?<\/header>/i)?.[0] ?? '';
  if (headerBlock) {
    for (const m of headerBlock.matchAll(/<img\b[^>]*class=["'][^"']*brand-logo[^"']*["'][^>]*>/gi)) {
      const alt = m[0].match(/\balt=["']([^"']*)["']/i)?.[1];
      if (alt != null && alt !== 'Zuraio') {
        offenders.push(`${rel}: header brand-logo alt="${alt}"`);
      }
    }
  }
}

if (offenders.length) {
  console.error('check-dist-html-dashes: FAIL\n' + offenders.map((o) => `  ${o}`).join('\n'));
  process.exit(1);
}

console.log(`check-dist-html-dashes: OK (${files.length} preview-site HTML files)`);
