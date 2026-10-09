/**
 * Locale OG share images (1200×630 JPG) and HTML meta tags.
 */
import { copyAltHome } from '../public/zuraio-comparison/js/copy-alt-home.js';
import { CANONICAL_BASE } from './seo-config.mjs';

export const OG_SHARE_WIDTH = 1200;
export const OG_SHARE_HEIGHT = 630;
export const OG_SHARE_MAX_BYTES = 300 * 1024;

export const OG_SHARE_LOCALES = ['en', 'de', 'fr', 'it'];

export function localeOgImagePath(locale) {
  return `/assets/og/zuraio-og-${locale}.jpg`;
}

export function localeOgImageUrl(locale) {
  return `${CANONICAL_BASE}${localeOgImagePath(locale)}`;
}

export function altHomeOgImageAlt(locale) {
  const copy = copyAltHome[locale] ?? copyAltHome.en;
  return copy.hero?.headlineLines?.[0] ?? 'Zuraio';
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Open Graph + Twitter image tags (shared by homepage inject and prerender). */
export function buildOgShareImageMetaTags(locale) {
  const url = localeOgImageUrl(locale);
  const alt = altHomeOgImageAlt(locale);
  return `
  <meta property="og:image" content="${escapeHtml(url)}">
  <meta property="og:image:width" content="${OG_SHARE_WIDTH}">
  <meta property="og:image:height" content="${OG_SHARE_HEIGHT}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="${escapeHtml(alt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${escapeHtml(url)}">
`;
}
