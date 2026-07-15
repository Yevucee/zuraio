export const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'it'];

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
