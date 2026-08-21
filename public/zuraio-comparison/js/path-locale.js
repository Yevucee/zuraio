/** Path-based locale and deployment-aware URL helpers. */
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

function normalizeSiteBase(siteBase) {
  return (siteBase || '').replace(/\/$/, '');
}

/**
 * Strip deployment base and locale prefix from an internal page reference.
 * Makes page URL generation idempotent (safe to run more than once).
 */
export function normalizePageRef(path, siteBase = detectSiteBase()) {
  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  let file = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  if (
    !file ||
    file.startsWith('http') ||
    file.startsWith('mailto:') ||
    file.startsWith('tel:') ||
    (file.startsWith('#') && !file.includes('.html'))
  ) {
    return { skip: true, path, hash: '' };
  }

  const base = normalizeSiteBase(siteBase);
  if (base && (file === base || file === `${base}/`)) file = '';
  else if (base && file.startsWith(`${base}/`)) file = file.slice(base.length + 1);

  if (file.startsWith('/')) file = file.slice(1);
  while (file.startsWith('../')) file = file.slice(3);

  for (const loc of LOCALE_SEGMENTS) {
    if (file === loc || file === `${loc}/`) {
      file = '';
      break;
    }
    if (file.startsWith(`${loc}/`)) {
      file = file.slice(loc.length + 1);
      break;
    }
  }

  if (file.startsWith('zuraio/')) file = file.slice(6);

  return { skip: false, file, hash };
}

/** Canonical homepage path for a locale (leading slash, trailing slash). */
export function homePathForLocale(locale, siteBase = detectSiteBase()) {
  const base = normalizeSiteBase(siteBase);
  if (locale === 'en') {
    return base ? `${base}/` : '/';
  }
  return base ? `${base}/${locale}/` : `/${locale}/`;
}

/** Deployment-aware internal page URL — applies site base exactly once. */
export function langHrefForLocale(path, locale, siteBase = detectSiteBase()) {
  const norm = normalizePageRef(path, siteBase);
  if (norm.skip) return path;

  const { file, hash } = norm;
  const base = normalizeSiteBase(siteBase);

  if (isHomePageFile(file)) {
    return joinUrl('', homePathForLocale(locale, siteBase), hash);
  }

  if (!file.endsWith('.html')) return path;

  if (locale === 'en') {
    return joinUrl('', base ? `${base}/${file}` : `/${file}`, hash);
  }
  return joinUrl('', base ? `${base}/${locale}/${file}` : `/${locale}/${file}`, hash);
}

/**
 * Deployment-aware asset URL from site root.
 * Accepts logical paths like `assets/logo.png` or `zuraio/assets/hero.png`.
 */
export function assetHref(relativePath, siteBase = detectSiteBase()) {
  if (!relativePath) return relativePath;
  if (/^(https?:|data:|mailto:|tel:)/.test(relativePath)) return relativePath;

  const hashIndex = relativePath.indexOf('#');
  const queryIndex = relativePath.indexOf('?');
  const splitAt = Math.min(
    hashIndex >= 0 ? hashIndex : relativePath.length,
    queryIndex >= 0 ? queryIndex : relativePath.length,
  );
  const suffix = relativePath.slice(splitAt);
  let path = relativePath.slice(0, splitAt);

  path = path.replace(/^(\.\.\/)+/, '').replace(/^\//, '');

  const base = normalizeSiteBase(siteBase);
  if (base) {
    const baseKey = base.slice(1);
    if (path === baseKey || path.startsWith(`${baseKey}/`)) {
      return `/${path}${suffix}`;
    }
    return `${base}/${path}${suffix}`;
  }

  return `/${path}${suffix}`;
}
