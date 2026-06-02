import { V6Section } from './V6Section';

const steps = [
  {
    number: '1',
    title: 'Choose the first useful workflow',
    body: 'Start with email, meetings, internal search, reports or follow-ups.',
  },
  {
    number: '2',
    title: 'Connect approved sources',
    body: 'Connect the tools and knowledge sources your team already uses, depending on your setup.',
  },
  {
    number: '3',
    title: 'Set the rules',
    body: 'Decide hosting, access, approved sources, model choices and review requirements.',
  },
  {
    number: '4',
    title: 'Use it in real work',
    body: 'Your team begins with practical daily outputs: briefs, drafts, answers, summaries and follow-ups.',
  },
] as const;

export function SetupSection() {
  return (
    <V6Section background="grey" reveal>
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        Start with one useful workflow.
      </h2>
      <p className="mb-10 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        We help you choose the first useful work areas, connect approved sources and set the rules around hosting,
        access, model choice and review.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ number, title, body }) => (
          <div key={title}>
            <div
              className="mb-3 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
              style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}
            >
              {number}
            </div>
            <h3 className="mb-2 text-lg font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </V6Section>
  );
}
