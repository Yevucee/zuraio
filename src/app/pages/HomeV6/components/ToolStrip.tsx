import { useI18n } from '../../../../i18n/I18nProvider';
import { V6Section } from './V6Section';
import { ToolGlyph } from './ToolGlyph';

export function ToolStrip() {
  const { messages: m } = useI18n();
  const t = m.homeV6.toolStrip;

  return (
    <V6Section background="grey">
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        {t.title}
      </h2>
      <p className="mb-4 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        {t.body1}
      </p>
      <p className="mb-8 text-base" style={{ color: 'var(--charcoal)' }}>
        {t.body2}
      </p>

      <div className="flex flex-wrap gap-2">
        {t.tools.map((label) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm"
            style={{
              borderColor: 'rgba(70, 70, 70, 0.12)',
              backgroundColor: 'var(--paper-white)',
              color: 'var(--deep-charcoal)',
            }}
          >
            <ToolGlyph />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm" style={{ color: 'var(--charcoal)' }}>
        {t.footnote}
      </p>
    </V6Section>
  );
}
