import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { deMessages } from './messages/de';
import { enMessages } from './messages/en';
import { createTranslator, getDocumentLang } from './translate';
import { LOCALE_STORAGE_KEY, type Locale } from './types';

export type Messages = typeof enMessages;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
  t: (path: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === 'de' ? 'de' : 'en';
}

function applyDocumentLocale(locale: Locale, messages: Messages) {
  document.documentElement.lang = getDocumentLang(locale);
  document.title = messages.common.meta.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', messages.common.meta.description);
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const messages = locale === 'de' ? deMessages : enMessages;

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    applyDocumentLocale(locale, messages);
  }, [locale, messages]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      messages,
      t: createTranslator(messages as unknown as Record<string, string | Record<string, unknown>>),
    }),
    [locale, setLocale, messages],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}
