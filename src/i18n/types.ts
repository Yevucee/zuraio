export type Locale = 'en' | 'de';

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export const LOCALE_STORAGE_KEY = 'zuraio-locale';
