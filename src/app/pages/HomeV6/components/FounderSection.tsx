import { useI18n } from '../../../../i18n/I18nProvider';
import { V6Section } from './V6Section';

export function FounderSection() {
  const { messages: m } = useI18n();
  const f = m.homeV6.founder;

  return (
    <V6Section reveal>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            {f.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {f.body1}
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {f.body2}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {f.body3}
          </p>
        </div>

        <div
          className="flex aspect-[4/3] items-center justify-center rounded-xl border px-6 text-center text-sm"
          style={{
            borderColor: 'rgba(70, 70, 70, 0.12)',
            backgroundColor: 'var(--cloud-grey)',
            color: 'var(--charcoal)',
          }}
          role="img"
          aria-label={f.photoAria}
        >
          {f.photoPlaceholder}
        </div>
      </div>
    </V6Section>
  );
}
