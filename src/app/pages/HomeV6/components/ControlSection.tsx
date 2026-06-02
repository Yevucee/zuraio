import { V6Section } from './V6Section';

const controlCards = [
  {
    title: 'Swiss hosting',
    body: 'For Swiss companies that want their Zuraio environment hosted in Switzerland.',
  },
  {
    title: 'On-premise options',
    body: 'For companies that need stronger internal control.',
  },
  {
    title: 'Access control',
    body: 'Access can follow your company rules, so people only work with the information they are allowed to use.',
  },
  {
    title: 'Sources visible',
    body: 'Answers can include sources, so your team can check where information came from.',
  },
  {
    title: 'Model choice',
    body: 'Zuraio is designed around model choice, so your company is not tied to one AI provider.',
  },
  {
    title: 'Reviewable use',
    body: 'Prompts, sources, outputs and usage can be made easier to review according to the agreed deployment and audit model.',
  },
] as const;

export function ControlSection() {
  return (
    <V6Section>
      <h2 className="mb-4 text-center text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        AI, without handing over the keys.
      </h2>
      <p className="mx-auto mb-4 max-w-[720px] text-center text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        AI should not mean losing control of company data.
      </p>
      <p className="mx-auto mb-10 max-w-[720px] text-center text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        Zuraio is designed for companies that want the benefits of AI while keeping control over hosting, access,
        approved sources and model choice.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {controlCards.map(({ title, body }) => (
          <article
            key={title}
            className="v6-card rounded-xl border bg-white p-5"
            style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}
          >
            <h3 className="mb-2 text-base font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {body}
            </p>
          </article>
        ))}
      </div>
    </V6Section>
  );
}
