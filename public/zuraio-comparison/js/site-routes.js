/**
 * Preview site route map (EN + DE). At go-live, update paths here and re-run apply-routes.
 * TODO Run 7: flip about + faq to real pages.
 */
export const PREVIEW_SITE_ROUTES = {
  home: { en: 'en/homepage-preview.html', de: 'de/homepage-preview.html' },
  'how-it-helps': { en: 'how-it-helps.html', de: 'de/how-it-helps.html' },
  skills: { en: 'how-it-helps.html#skills', de: 'de/how-it-helps.html#skills' },
  security: { en: 'security.html', de: 'de/security.html' },
  'security-hosting': { en: 'security.html#hosting', de: 'de/security.html#hosting' },
  'security-good-to-know': { en: 'security.html#good-to-know', de: 'de/security.html#good-to-know' },
  integrations: { en: 'integrations.html', de: 'de/integrations.html' },
  'it-partner': { en: 'technical-architecture.html', de: 'de/technical-architecture.html' },
  /** TODO Run 7: about.html */
  about: { en: 'en/homepage-preview.html#team', de: 'de/homepage-preview.html#team' },
  /** TODO Run 7: faq.html */
  faq: { en: 'en/homepage-preview.html#faq', de: 'de/homepage-preview.html#faq' },
  contact: { en: 'contact.html', de: 'de/contact.html' },
  impressum: { en: 'impressum.html', de: 'de/impressum.html' },
  privacy: { en: 'privacy.html', de: 'de/privacy.html' },
  cookies: { en: 'cookies.html', de: 'de/cookies.html' },
  terms: { en: 'terms.html', de: 'de/terms.html' },
};

const PAGE_TO_ROUTE = [
  ['technical-architecture.html', 'it-partner'],
  ['how-it-helps.html', 'how-it-helps'],
  ['integrations.html', 'integrations'],
  ['security.html', 'security'],
  ['contact.html', 'contact'],
  ['impressum.html', 'impressum'],
  ['privacy.html', 'privacy'],
  ['homepage-preview.html', 'home'],
];

/**
 * @param {string} routeKey
 * @param {'en'|'de'} targetLocale link target language
 * @param {'en'|'de'} viewingLocale language of the current page URL
 */
export function resolveRoute(routeKey, targetLocale, viewingLocale = 'en') {
  const entry = PREVIEW_SITE_ROUTES[routeKey];
  if (!entry) throw new Error(`Unknown route: ${routeKey}`);
  const canonical = entry[targetLocale] ?? entry.en;
  if (viewingLocale === 'de') {
    if (targetLocale === 'de') return canonical.replace(/^de\//, '');
    if (canonical.startsWith('en/')) return `../${canonical}`;
    return `../${canonical}`;
  }
  return canonical;
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

function inDeSite(pathname) {
  return /\/de\//.test(pathname) && !pathname.includes('/de/en/');
}

function inEnPreview(pathname) {
  return /\/en\/homepage-preview/i.test(pathname) || pathname.endsWith('/en/homepage-preview.html');
}

function inDePreview(pathname) {
  return /\/de\/homepage-preview/i.test(pathname);
}

/** Location-aware href for preview + site pages. */
export function resolveRouteFromLocation(routeKey, targetLocale, pathname = '') {
  const canonical = PREVIEW_SITE_ROUTES[routeKey]?.[targetLocale] ?? PREVIEW_SITE_ROUTES[routeKey].en;

  if (inDePreview(pathname)) {
    if (targetLocale === 'de') {
      if (routeKey === 'home') return 'homepage-preview.html';
      return canonical.replace(/^de\//, '');
    }
    if (routeKey === 'home') return '../en/homepage-preview.html';
    const enPath = PREVIEW_SITE_ROUTES[routeKey].en;
    return enPath.startsWith('en/') ? `../${enPath}` : `../${enPath}`;
  }

  if (inEnPreview(pathname)) {
    if (targetLocale === 'en') {
      if (routeKey === 'home') return 'homepage-preview.html';
      const enPath = PREVIEW_SITE_ROUTES[routeKey].en;
      if (enPath.startsWith('en/')) return `../${enPath.slice(3)}`;
      return `../${enPath}`;
    }
    if (routeKey === 'home') return '../de/homepage-preview.html';
    return `../${PREVIEW_SITE_ROUTES[routeKey].de}`;
  }

  const viewing = inDeSite(pathname) ? 'de' : 'en';
  return resolveRoute(routeKey, targetLocale, viewing);
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
