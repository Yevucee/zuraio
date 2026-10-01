export const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'it'];

/** Locales shown in nav, footer language switcher and sitemap (EN + DE site rewrite). */
export const PUBLIC_SITE_LOCALES = ['en', 'de'];

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function getLocaleLabels(ui) {
  return {
    en: ui.langEn,
    de: ui.langDe,
    fr: ui.langFr,
    it: ui.langIt,
  };
}
