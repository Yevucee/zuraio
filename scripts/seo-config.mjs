/** Shared SEO / prerender configuration. */
export const LOCALES = ['en', 'de', 'fr', 'it'];
export const LOCALE_DIRS = { en: '', de: 'de', fr: 'fr', it: 'it' };

/** Production canonical origin — override via CANONICAL_BASE env for previews. */
export const CANONICAL_BASE = (process.env.CANONICAL_BASE || 'https://zuraio.ch').replace(/\/$/, '');

/** Path prefix when hosted under GitHub Pages project site (empty on zuraio.ch). */
export const SITE_BASE_PATH = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');

export const OG_IMAGE_PATH = '/zuraio/assets/zuraio-og-share.png';

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
  'resources.html',
  'technical-architecture.html',
  'knowledge.html',
  'data-control.html',
  'deployment-models.html',
  'ai-governance.html',
  'integrations.html',
  'faq.html',
  'impressum.html',
  'privacy.html',
  'terms.html',
  'cookies.html',
];

/** Production path only — never includes GitHub preview base. */
export function canonicalPagePath(locale, page) {
  const dir = LOCALE_DIRS[locale];
  if (page === 'index.html') {
    return dir ? `/${dir}/` : '/';
  }
  return dir ? `/${dir}/${page}` : `/${page}`;
}

/** Preview or production navigation path (includes SITE_BASE_PATH on GitHub Pages). */
export function pageUrl(locale, page) {
  const path = canonicalPagePath(locale, page);
  if (!SITE_BASE_PATH) return path;
  if (path === '/') return `${SITE_BASE_PATH}/`;
  return `${SITE_BASE_PATH}${path}`;
}

export function canonicalUrl(locale, page) {
  return `${CANONICAL_BASE}${canonicalPagePath(locale, page)}`;
}

export const SOFTWARE_APP_PAGES = new Set([
  'index.html',
  'technical-architecture.html',
  'data-control.html',
]);
