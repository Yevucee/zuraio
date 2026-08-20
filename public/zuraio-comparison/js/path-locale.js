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

export function langHrefForLocale(path, locale, siteBase = detectSiteBase()) {
  if (!path || path.startsWith('http') || path.startsWith('../') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  if (path.startsWith('#') && !path.includes('.html')) return path;

  const hashIndex = path.indexOf('#');
  const file = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  if (!file.endsWith('.html')) return path;

  const rootPrefix = siteBase ? `${siteBase}/` : '';
  const inSubdir = isInLocaleSubdir();

  if (locale === 'en') {
    if (inSubdir) return `../${file}${hash}`;
    return rootPrefix ? `${rootPrefix}${file}${hash}` : `${file}${hash}`;
  }
  if (inSubdir) return `${file}${hash}`;
  return rootPrefix ? `${rootPrefix}${locale}/${file}${hash}` : `${locale}/${file}${hash}`;
}
