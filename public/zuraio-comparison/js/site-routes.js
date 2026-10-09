/** Preview site route map (EN + DE + FR + IT). At go-live, update paths here and re-run apply-routes. */
export const PREVIEW_LOCALES = ['en', 'de', 'fr', 'it'];
const LOCALE_SUBDIRS = ['de', 'fr', 'it'];

export const PREVIEW_SITE_ROUTES = {
  home: {
    en: 'en/homepage-preview.html',
    de: 'de/homepage-preview.html',
    fr: 'fr/homepage-preview.html',
    it: 'it/homepage-preview.html',
  },
  'how-it-helps': {
    en: 'how-it-helps.html',
    de: 'de/how-it-helps.html',
    fr: 'fr/how-it-helps.html',
    it: 'it/how-it-helps.html',
  },
  skills: {
    en: 'how-it-helps.html#skills',
    de: 'de/how-it-helps.html#skills',
    fr: 'fr/how-it-helps.html#skills',
    it: 'it/how-it-helps.html#skills',
  },
  security: {
    en: 'security.html',
    de: 'de/security.html',
    fr: 'fr/security.html',
    it: 'it/security.html',
  },
  'security-hosting': {
    en: 'security.html#hosting',
    de: 'de/security.html#hosting',
    fr: 'fr/security.html#hosting',
    it: 'it/security.html#hosting',
  },
  'security-good-to-know': {
    en: 'security.html#good-to-know',
    de: 'de/security.html#good-to-know',
    fr: 'fr/security.html#good-to-know',
    it: 'it/security.html#good-to-know',
  },
  integrations: {
    en: 'integrations.html',
    de: 'de/integrations.html',
    fr: 'fr/integrations.html',
    it: 'it/integrations.html',
  },
  'it-partner': {
    en: 'technical-architecture.html',
    de: 'de/technical-architecture.html',
    fr: 'fr/technical-architecture.html',
    it: 'it/technical-architecture.html',
  },
  about: { en: 'about.html', de: 'de/about.html', fr: 'fr/about.html', it: 'it/about.html' },
  faq: { en: 'faq.html', de: 'de/faq.html', fr: 'fr/faq.html', it: 'it/faq.html' },
  contact: { en: 'contact.html', de: 'de/contact.html', fr: 'fr/contact.html', it: 'it/contact.html' },
  impressum: { en: 'impressum.html', de: 'de/impressum.html', fr: 'fr/impressum.html', it: 'it/impressum.html' },
  privacy: { en: 'privacy.html', de: 'de/privacy.html', fr: 'fr/privacy.html', it: 'it/privacy.html' },
  cookies: { en: 'cookies.html', de: 'de/cookies.html', fr: 'fr/cookies.html', it: 'it/cookies.html' },
  terms: { en: 'terms.html', de: 'de/terms.html', fr: 'fr/terms.html', it: 'it/terms.html' },
};

const PAGE_TO_ROUTE = [
  ['technical-architecture.html', 'it-partner'],
  ['how-it-helps.html', 'how-it-helps'],
  ['integrations.html', 'integrations'],
  ['security.html', 'security'],
  ['contact.html', 'contact'],
  ['about.html', 'about'],
  ['faq.html', 'faq'],
  ['impressum.html', 'impressum'],
  ['privacy.html', 'privacy'],
  ['homepage-preview.html', 'home'],
];

function viewingLocaleFromPath(pathname) {
  for (const loc of LOCALE_SUBDIRS) {
    if (pathname.includes(`/${loc}/`)) return loc;
  }
  if (pathname.includes('/en/')) return 'en';
  return 'en';
}

function inHomePreview(pathname, locale) {
  return pathname.includes(`/${locale}/homepage-preview`);
}

/**
 * @param {string} routeKey
 * @param {string} targetLocale
 * @param {string} viewingLocale language of the current page URL
 */
export function resolveRoute(routeKey, targetLocale, viewingLocale = 'en') {
  const entry = PREVIEW_SITE_ROUTES[routeKey];
  if (!entry) throw new Error(`Unknown route: ${routeKey}`);
  const canonical = entry[targetLocale] ?? entry.en;
  if (viewingLocale === 'en') return canonical;
  if (targetLocale === viewingLocale) return canonical.replace(new RegExp(`^${viewingLocale}/`), '');
  if (targetLocale === 'en') {
    const enPath = entry.en;
    return enPath.startsWith('en/') ? `../${enPath}` : `../${enPath}`;
  }
  return `../${entry[targetLocale] ?? entry.en}`;
}

export function detectRouteFromPathname(pathname = '', hash = '') {
  const segments = pathname.split('/').filter(Boolean);
  let file = segments[segments.length - 1] || 'index.html';
  if (file === '' || file === 'zuraio') file = 'index.html';
  for (const [page, key] of PAGE_TO_ROUTE) {
    if (file === page || file === page.replace('.html', '')) {
      if (key === 'how-it-helps' && hash === '#skills') return 'skills';
      return key;
    }
  }
  if (file === 'index.html') return 'home';
  return 'home';
}

/** Location-aware href for preview + site pages. */
export function resolveRouteFromLocation(routeKey, targetLocale, pathname = '') {
  const entry = PREVIEW_SITE_ROUTES[routeKey];
  if (!entry) throw new Error(`Unknown route: ${routeKey}`);
  const canonical = entry[targetLocale] ?? entry.en;

  for (const loc of PREVIEW_LOCALES) {
    if (!inHomePreview(pathname, loc)) continue;
    if (targetLocale === loc) {
      if (routeKey === 'home') return 'homepage-preview.html';
      const sameLocale = canonical.replace(new RegExp(`^${loc}/`), '');
      if (loc === 'en' && !canonical.startsWith('en/')) return `../${sameLocale}`;
      return sameLocale;
    }
    if (routeKey === 'home') return `../${PREVIEW_SITE_ROUTES.home[targetLocale]}`;
    return `../${entry[targetLocale] ?? entry.en}`;
  }

  const viewing = viewingLocaleFromPath(pathname);
  const onLocaleSite = LOCALE_SUBDIRS.some((loc) => pathname.includes(`/${loc}/`));
  return resolveRoute(routeKey, targetLocale, onLocaleSite ? viewing : 'en');
}

export function langSwitchHref(targetLocale, pathname, hash = '') {
  const routeKey = detectRouteFromPathname(pathname, hash);
  const href = resolveRouteFromLocation(routeKey, targetLocale, pathname);
  if (hash && !href.includes('#')) return `${href}${hash}`;
  return href;
}

/** Expected href for CI (always from site root, no ../). */
export function expectedRouteHref(routeKey, locale) {
  return PREVIEW_SITE_ROUTES[routeKey]?.[locale] ?? '';
}
