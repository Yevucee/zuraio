/** Path-based locale URL helpers (shared by i18n and page bundles). */
export const LOCALE_SEGMENTS = ['de', 'fr', 'it'];

export function detectSiteBase() {
  const segments = location.pathname.split('/').filter(Boolean);
  if (segments[0] === 'zuraio') return '/zuraio';
  return '';
}

export function getLocaleFromPathname(pathname = location.pathname) {
  const segments = pathname.split('/').filter(Boolean);
  let idx = 0;
  if (segments[0] === 'zuraio') idx = 1;
  const seg = segments[idx];
  if (LOCALE_SEGMENTS.includes(seg)) return seg;
  return null;
}

export function isInLocaleSubdir(pathname = location.pathname) {
  return getLocaleFromPathname(pathname) !== null;
}

function isHomePageFile(file) {
  return file === 'index.html' || file === '' || file === '/';
}

function joinUrl(prefix, path, hash = '') {
  const base = prefix ? `${prefix}${path}` : path;
  const normalized = base.replace(/\/{2,}/g, '/');
  if (!normalized.startsWith('/') && !normalized.startsWith('http')) {
    return `${normalized}${hash}`;
  }
  return `${normalized}${hash}`;
}

/** Canonical homepage path for a locale (leading slash, trailing slash). */
export function homePathForLocale(locale, siteBase = detectSiteBase()) {
  if (locale === 'en') {
    return siteBase ? `${siteBase}/` : '/';
  }
  return siteBase ? `${siteBase}/${locale}/` : `/${locale}/`;
}

export function langHrefForLocale(path, locale, siteBase = detectSiteBase()) {
  if (!path || path.startsWith('http') || path.startsWith('../') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  if (path.startsWith('#') && !path.includes('.html')) return path;

  const hashIndex = path.indexOf('#');
  const file = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';

  if (isHomePageFile(file)) {
    return joinUrl('', homePathForLocale(locale, siteBase), hash);
  }

  if (!file.endsWith('.html')) return path;

  const rootPrefix = siteBase ? `${siteBase}/` : '/';
  const inSubdir = isInLocaleSubdir();

  if (locale === 'en') {
    if (inSubdir) return joinUrl('', `../${file}`, hash);
    return joinUrl('', siteBase ? `${siteBase}/${file}` : file, hash);
  }
  if (inSubdir) return joinUrl('', file, hash);
  return joinUrl('', siteBase ? `${siteBase}/${locale}/${file}` : `${locale}/${file}`, hash);
}
