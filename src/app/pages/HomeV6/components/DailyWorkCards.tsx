import { V6Section } from './V6Section';

const cards = [
  {
    title: 'Meetings',
    body: 'Walk in prepared with relevant emails, documents, notes and open actions already gathered.',
    label: 'Meeting brief prepared',
  },
  {
    title: 'Email',
    body: 'Summarise long threads and prepare replies your team can review before sending.',
    label: 'Draft reply ready',
  },
  {
    title: 'Answers',
    body: 'Ask questions across company knowledge and see the sources behind the answer.',
    label: 'Answer with sources',
  },
  {
    title: 'Reports',
    body: 'Turn existing information into first drafts of updates, summaries and reports.',
    label: 'Report draft created',
  },
  {
    title: 'Follow-ups',
    body: 'Capture actions from emails, meetings, notes and messages so fewer things are missed.',
    label: 'Follow-up list captured',
  },
] as const;

export function DailyWorkCards() {
  return (
    <V6Section>
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        Less searching. More doing.
      </h2>
      <p className="mb-10 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        Zuraio helps teams move faster through the work they already do every day, with more context and fewer missed
        details.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map(({ title, body, label }) => (
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
