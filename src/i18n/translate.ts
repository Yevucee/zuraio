import type { Locale } from './types';

type NestedMessages = { [key: string]: string | NestedMessages };

export function resolveMessage(messages: NestedMessages, path: string): string | undefined {
  const parts = path.split('.');
  let current: string | NestedMessages | undefined = messages;

  for (const part of parts) {
    if (current == null || typeof current === 'string') {
      return undefined;
    }
    current = current[part];
  }

  return typeof current === 'string' ? current : undefined;
}

export function createTranslator(messages: NestedMessages) {
  return (path: string, fallback?: string): string => {
    const value = resolveMessage(messages, path);
    if (value != null) return value;
    return fallback ?? path;
  };
}

export function getDocumentLang(locale: Locale): string {
  return locale;
}
