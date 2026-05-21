import { useRef } from 'react';
import { V5 } from '../tokens';
import { V5Section } from './V5Section';
import { useInViewOnce } from './hooks/useInViewOnce';

const nodes = [
  { label: 'User request', short: 'Request' },
  { label: 'Policy check', short: 'Policy' },
  { label: 'Approved source / model route', short: 'Approved route' },
  { label: 'Answer with sources', short: 'Answer' },
  { label: 'Audit record', short: 'Audit' },
];

export function ControlSection() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(diagramRef);

  return (
    <V5Section background="soft">
      <div className="mx-auto max-w-[900px] text-center">
        <p
          className="mb-4 text-xs font-semibold tracking-[0.12em]"
          style={{ fontFamily: 'var(--font-mono)', color: V5.olive }}
        >
          CONTROL
        </p>
        <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl" style={{ color: V5.ink }}>
          Your data, your rules.
        </h2>
        <p className="mb-12 text-lg leading-relaxed" style={{ color: V5.inkMuted }}>
          Host in Switzerland, on-premise, or in the country your organisation requires. Decide which models are
          allowed, what sources can be used and how AI activity should be reviewed.
        </p>
      </div>

      <div
        ref={diagramRef}
        className={`v5-card mx-auto max-w-[980px] overflow-x-auto rounded-2xl border bg-white p-6 md:p-8 ${inView ? 'v5-flow-animate' : ''}`}
        style={{ borderColor: V5.hairline }}
      >
        <svg viewBox="0 0 920 120" role="img" className="min-w-[640px] w-full" aria-labelledby="v5-control-flow-title">
          <title id="v5-control-flow-title">
            User request flows through policy check and approved routes to an answer with sources and audit record.
          </title>
          {nodes.map((node, index) => {
            const x = 20 + index * 175;
            return (
              <g key={node.label}>
                <rect
                  x={x}
                  y="30"
                  width="155"
                  height="56"
                  rx="12"
                  fill={index === 2 ? V5.warmAccent : '#FFFFFF'}
                  stroke={index === 2 ? V5.olive : V5.hairline}
                  strokeWidth="1.5"
                />
                <text
                  x={x + 77}
                  y="62"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill={V5.ink}
                >
                  {node.short}
                </text>
                {index < nodes.length - 1 && (
                  <>
                    <path
                      d={`M${x + 155} 58 H${x + 175}`}
                      stroke={V5.hairline}
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle className="v5-flow-dot" cx={x + 165} cy="58" r="4" fill={V5.dataTeal} />
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mx-auto mt-8 max-w-[720px] text-center text-sm leading-relaxed" style={{ color: V5.inkMuted }}>
        Traceability matters because companies will increasingly need to show how AI-assisted work was produced,
        reviewed and controlled. Designed to log prompts, source usage and outputs according to the agreed deployment
        and audit model.
      </p>
    </V5Section>
  );
}
