import { V6Section } from './V6Section';
import { ControlIcon, type ControlIconType } from './ControlIcon';

const trustCards: { title: string; body: string; icon: ControlIconType }[] = [
  {
    title: 'Hosted in Switzerland',
    body: 'For Swiss companies that want their Zuraio environment hosted in Switzerland.',
    icon: 'swiss-hosting',
  },
  {
    title: 'Access follows your rules',
    body: 'People only work with the sources and information they are allowed to use.',
    icon: 'access',
  },
  {
    title: 'Answers show their sources',
    body: 'Your team can check where information came from before relying on it.',
    icon: 'sources',
  },
  {
    title: 'Built to be reviewed',
    body: 'Prompts, sources and outputs can be easier to trace according to the agreed setup.',
    icon: 'review',
  },
];

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
          Controlled company AI
        </p>

        <div className="mx-auto max-w-[800px] text-center md:text-left">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            AI, without handing over the keys.
          </h2>
          <p className="mb-3 text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            AI should not mean losing control of company data.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            Zuraio gives companies control over where it runs, what it can use, who can access it and how outputs can
            be reviewed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {trustCards.map((card) => (
            <TrustCard key={card.title} {...card} />
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
            Need stronger control?
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            On-premise options and model choice can be discussed for companies with stricter internal requirements.
          </p>
        </div>
      </div>
    </V6Section>
  );
}
