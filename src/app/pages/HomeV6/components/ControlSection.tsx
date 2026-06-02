import { useI18n } from '../../../../i18n/I18nProvider';
import { V6Section } from './V6Section';
import { ControlIcon, type ControlIconType } from './ControlIcon';

const cardIcons: ControlIconType[] = ['swiss-hosting', 'access', 'sources', 'review'];

function TrustCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: ControlIconType;
}) {
  return (
    <article
      className="v6-control-card flex gap-4 rounded-xl border bg-white p-5 md:p-6"
      style={{ borderColor: 'rgba(70, 70, 70, 0.1)' }}
    >
      <ControlIcon type={icon} />
      <div className="min-w-0">
        <h3 className="mb-2 text-lg font-semibold leading-snug" style={{ color: 'var(--deep-charcoal)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
          {body}
        </p>
      </div>
    </article>
  );
}

export function ControlSection() {
  const { messages: m } = useI18n();
  const c = m.homeV6.control;

  return (
    <V6Section>
      <div
        className="rounded-2xl border px-6 py-10 md:px-10 md:py-12"
        style={{
          backgroundColor: 'var(--cloud-grey)',
          borderColor: 'rgba(70, 70, 70, 0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        <p
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.1em] md:text-left"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--zuraio-olive)' }}
        >
          {c.label}
        </p>

        <div className="mx-auto max-w-[800px] text-center md:text-left">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            {c.title}
          </h2>
          <p className="mb-3 text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {c.body1}
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {c.body2}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {c.cards.map((card, index) => (
            <TrustCard key={card.title} {...card} icon={cardIcons[index]} />
          ))}
        </div>

        <div
          className="mt-5 rounded-xl border px-5 py-4 md:px-6"
          style={{
            borderColor: 'rgba(70, 70, 70, 0.08)',
            backgroundColor: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <p className="mb-1 text-sm font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
            {c.strongerTitle}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {c.strongerBody}
          </p>
        </div>
      </div>
    </V6Section>
  );
}
