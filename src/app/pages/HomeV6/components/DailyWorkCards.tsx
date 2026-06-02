import { useI18n } from '../../../../i18n/I18nProvider';
import { V6Section } from './V6Section';

export function DailyWorkCards() {
  const { messages: m } = useI18n();
  const d = m.homeV6.dailyWork;

  return (
    <V6Section>
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        {d.title}
      </h2>
      <p className="mb-10 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        {d.body}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {d.cards.map(({ title, body, label }) => (
          <article
            key={title}
            className="v6-card rounded-xl border bg-white p-5"
            style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}
          >
            <h3 className="mb-2 text-lg font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
              {title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {body}
            </p>
            <p
              className="text-xs font-medium uppercase tracking-wide"
              style={{ color: 'var(--zuraio-olive)', fontFamily: 'var(--font-mono)' }}
            >
              {label}
            </p>
          </article>
        ))}
      </div>
    </V6Section>
  );
}
