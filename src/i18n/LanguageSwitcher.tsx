import { LOCALES } from './types';
import { useI18n } from './I18nProvider';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, messages } = useI18n();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-md border p-0.5 ${className}`}
      style={{ borderColor: 'rgba(70, 70, 70, 0.2)' }}
      role="group"
      aria-label={messages.common.lang.switchLabel}
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className="rounded px-2.5 py-1 text-xs font-medium transition-colors"
            style={{
              backgroundColor: active ? 'var(--zuraio-olive)' : 'transparent',
              color: active ? 'var(--paper-white)' : 'var(--charcoal)',
            }}
            aria-pressed={active}
            aria-label={code === 'en' ? messages.common.lang.en : messages.common.lang.de}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
