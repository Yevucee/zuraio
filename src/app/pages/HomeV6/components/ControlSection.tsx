import { V6Section } from './V6Section';
import { ControlIcon, type ControlIconType } from './ControlIcon';

const groups: {
  label: string;
  cards: { title: string; body: string; icon: ControlIconType }[];
}[] = [
  {
    label: 'Where it runs',
    cards: [
      {
        title: 'Swiss hosting',
        body: 'For Swiss companies that want their Zuraio environment hosted in Switzerland.',
        icon: 'swiss-hosting',
      },
      {
        title: 'On-premise options',
        body: 'For companies that need stronger internal control.',
        icon: 'on-premise',
      },
    ],
  },
  {
    label: 'Who can use what',
    cards: [
      {
        title: 'Access control',
        body: 'Access can follow your company rules, so people only work with the information they are allowed to use.',
        icon: 'access',
      },
      {
        title: 'Sources visible',
        body: 'Answers can include sources, so your team can check where information came from.',
        icon: 'sources',
      },
    ],
  },
  {
    label: 'How it stays reviewable',
    cards: [
      {
        title: 'Model choice',
        body: 'Zuraio is designed around model choice, so your company is not tied to one AI provider.',
        icon: 'model',
      },
      {
        title: 'Reviewable use',
        body: 'Prompts, sources, outputs and usage can be made easier to review according to the agreed deployment and audit model.',
        icon: 'review',
      },
    ],
  },
];

function ControlCard({
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
      className="v6-control-card flex gap-4 rounded-xl border bg-white p-4 md:p-5"
      style={{ borderColor: 'rgba(70, 70, 70, 0.1)' }}
    >
      <ControlIcon type={icon} />
      <div className="min-w-0">
        <h3 className="mb-1.5 text-base font-semibold leading-snug" style={{ color: 'var(--deep-charcoal)' }}>
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
        className="rounded-2xl border px-6 py-10 md:px-10 md:py-12 lg:px-12"
        style={{
          backgroundColor: 'var(--cloud-grey)',
          borderColor: 'rgba(70, 70, 70, 0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        <div className="mx-auto max-w-[900px] text-center md:text-left">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            AI, without handing over the keys.
          </h2>
          <p className="mb-3 text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            AI should not mean losing control of company data.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            Zuraio is designed for companies that want the benefits of AI while keeping control over hosting, access,
            approved sources and model choice.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--zuraio-olive)' }}
              >
                {group.label}
              </p>
              <div className="flex flex-col gap-3">
                {group.cards.map((card) => (
                  <ControlCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          className="mx-auto mt-10 max-w-[640px] text-center text-sm leading-relaxed"
          style={{ color: 'var(--charcoal)' }}
        >
          Control over hosting, access, sources, model choice and reviewability — without making daily work harder.
        </p>
      </div>
    </V6Section>
  );
}
