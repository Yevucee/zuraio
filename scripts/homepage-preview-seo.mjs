/**
 * SEO head for locale homepage-preview.html (from copy-alt-home.js).
 */
import { copyAltHome } from '../public/zuraio-comparison/js/copy-alt-home.js';
import { CANONICAL_BASE, OG_LOCALE } from './seo-config.mjs';

const LOCALES = ['en', 'de', 'fr', 'it'];

export function altHomePageTitle(locale) {
  const copy = copyAltHome[locale] ?? copyAltHome.en;
  if (copy.metaTitle) return copy.metaTitle;
  const primary = copy.hero?.headlineLines?.[0]?.replace(/\.$/, '').trim() ?? 'Zuraio';
  return `Zuraio | ${primary}`;
}

export function altHomeMetaDescription(locale) {
  const copy = copyAltHome[locale] ?? copyAltHome.en;
  return copy.metaDescription ?? copy.hero?.sub ?? '';
}

export function altHomeOgImageUrl(locale) {
  return `${CANONICAL_BASE}/assets/hero/zuraio-hero-reply-${locale}@2x.webp`;
}

export function homepagePreviewCanonical(locale) {
  const page = 'homepage-preview.html';
  return locale === 'en'
    ? `${CANONICAL_BASE}/en/${page}`
    : `${CANONICAL_BASE}/${locale}/${page}`;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function injectHomepagePreviewHead(html, locale) {
  const title = altHomePageTitle(locale);
  const description = altHomeMetaDescription(locale);
  const ogTitle = title;
  const ogDescription = description;
  const canonical = homepagePreviewCanonical(locale);
  const ogImage = altHomeOgImageUrl(locale);
  const ogLocale = OG_LOCALE[locale] ?? 'en_CH';

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  const descTag = `<meta name="description" content="${escapeHtml(description)}">`;
  if (out.includes('name="description"')) {
    out = out.replace(/<meta name="description" content="[^"]*">/, descTag);
  } else {
    out = out.replace('</head>', `  ${descTag}\n</head>`);
  }

  out = out.replace(/<link rel="canonical"[^>]*>\s*/g, '');
  out = out.replace(/<meta property="og:[^"]+"[^>]*>\s*/g, '');
  out = out.replace(/<meta name="twitter:[^"]+"[^>]*>\s*/g, '');

  const inject = `
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <meta property="og:title" content="${escapeHtml(ogTitle)}">
  <meta property="og:description" content="${escapeHtml(ogDescription)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(ogImage)}">
  <meta property="og:locale" content="${ogLocale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(ogTitle)}">
  <meta name="twitter:description" content="${escapeHtml(ogDescription)}">
`;

  out = out.replace('</head>', `${inject}</head>`);
  return out;
}

export { LOCALES as HOMEPAGE_PREVIEW_LOCALES };
