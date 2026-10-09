/** Shared SEO / prerender configuration. */
export const LOCALES = ['en', 'de', 'fr', 'it'];

/** Locales included in sitemap.xml (preview site rewrite). */
export const SITEMAP_LOCALES = ['en', 'de', 'fr', 'it'];

export const HREFLANG_TAGS = {
  en: 'en',
  de: 'de-CH',
  fr: 'fr-CH',
  it: 'it-CH',
};
export const LOCALE_DIRS = { en: '', de: 'de', fr: 'fr', it: 'it' };

/** Production canonical origin — override via CANONICAL_BASE env for previews. */
export const CANONICAL_BASE = (process.env.CANONICAL_BASE || 'https://zuraio.ch').replace(/\/$/, '');

/** Path prefix when hosted under GitHub Pages project site (empty on zuraio.ch). */
export const SITE_BASE_PATH = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');

/** @deprecated Use locale JPGs via scripts/og-share-meta.mjs */
export const OG_IMAGE_PATH = '/assets/og/zuraio-og-en.jpg';

export const OG_LOCALE = {
  en: 'en_CH',
  de: 'de_CH',
  fr: 'fr_CH',
  it: 'it_CH',
};

export const HTML_PAGES = [
  'index.html',
  'about.html',
  'how-it-helps.html',
  'contact.html',
  'technical-architecture.html',
  'knowledge.html',
  'security.html',
  'integrations.html',
  'faq.html',
  'impressum.html',
  'privacy.html',
  'terms.html',
  'cookies.html',
];

export function pageUrl(locale, page) {
  const dir = LOCALE_DIRS[locale];
  const base = SITE_BASE_PATH;
  if (page === 'index.html') {
    return dir ? `${base}/${dir}/` : `${base}/`;
  }
  return dir ? `${base}/${dir}/${page}` : `${base}/${page}`;
}

export function canonicalUrl(locale, page) {
  return `${CANONICAL_BASE}${pageUrl(locale, page)}`;
}

export const SOFTWARE_APP_PAGES = new Set([
  'index.html',
  'technical-architecture.html',
  'security.html',
]);
