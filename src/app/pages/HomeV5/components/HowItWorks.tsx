import { V5 } from '../tokens';
import { V5Section } from './V5Section';

const steps = [
  {
    number: '1',
    title: 'Connect',
    description: 'Connect the tools and knowledge sources your team already uses.',
  },
  {
    number: '2',
    title: 'Set the rules',
    description: 'Decide hosting, access, approved sources, model routes and audit needs.',
  },
  {
    number: '3',
    title: 'Use it in real work',
    description:
      'Prepare briefs, drafts, answers and follow-ups with personal setup support from the Zuraio team.',
  },
] as const;

export function HowItWorks() {
  return (
    <V5Section id="how-it-works" background="soft" reveal>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl" style={{ color: V5.ink }}>
          Start quickly, with us beside you.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map(({ number, title, description }) => (
          <div key={title} className="text-center md:text-left">
            <div
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
              style={{ backgroundColor: V5.olive, color: '#FFFFFF' }}
            >
              {number}
            </div>
            <h3 className="mb-3 text-xl font-semibold" style={{ color: V5.ink }}>
              {title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: V5.inkMuted }}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </V5Section>
  );
}
