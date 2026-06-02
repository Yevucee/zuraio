import { useRef } from 'react';
import { V6Section } from './V6Section';
import { useInViewOnce } from './hooks/useInViewOnce';

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

const nodes = [
  { short: 'Request' },
  { short: 'Access' },
  { short: 'Sources' },
  { short: 'Model' },
  { short: 'Answer' },
  { short: 'Review' },
];

export function ControlSection() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(diagramRef);

  return (
    <V6Section>
      <h2 className="mb-4 text-center text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        AI, without handing over the keys.
      </h2>
      <p className="mx-auto mb-10 max-w-[720px] text-center text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        AI should not mean losing control of company data. Zuraio is designed for companies that want the benefits of AI
        while keeping control over hosting, access, approved sources and model choice.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <div
        ref={diagramRef}
        className={`mx-auto max-w-[1000px] overflow-x-auto rounded-xl border bg-white p-6 ${inView ? 'v6-flow-animate' : ''}`}
        style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}
      >
        <svg viewBox="0 0 1000 140" role="img" className="min-w-[700px] w-full" aria-labelledby="v6-control-flow-title">
          <title id="v6-control-flow-title">
            User request flows through access check, approved sources and model route to an answer with sources and review record.
          </title>
          {nodes.map((node, index) => {
            const x = 16 + index * 158;
            return (
              <g key={node.short}>
                <rect
                  x={x}
                  y="40"
                  width="130"
                  height="48"
                  rx="10"
                  fill={index === 2 ? '#D0DC9A' : '#FFFFFF'}
                  stroke={index === 2 ? '#9FAF52' : 'rgba(70,70,70,0.2)'}
                  strokeWidth="1.5"
                />
                <text x={x + 65} y="68" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0B1424">
                  {node.short}
                </text>
                {index < nodes.length - 1 && (
                  <>
                    <path d={`M${x + 130} 64 H${x + 148}`} stroke="rgba(70,70,70,0.25)" strokeWidth="2" fill="none" />
                    <circle className="v6-flow-dot" cx={x + 139} cy="64" r="4" fill="#2F8F8A" />
                  </>
                )}
              </g>
            );
          })}
        </svg>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-center text-xs" style={{ color: 'var(--charcoal)' }}>
          {[
            'Access checked',
            'Approved sources only',
            'Model route selected',
            'Sources attached',
            'Review record created',
            'Hosting: Switzerland / On-premise',
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border px-2.5 py-1"
              style={{ borderColor: 'rgba(70, 70, 70, 0.12)', backgroundColor: 'var(--cloud-grey)' }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </V6Section>
  );
}
