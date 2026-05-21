import { V5 } from '../tokens';
import { V5Section } from './V5Section';

const logoSlots = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'];

export function LogoStrip() {
  return (
    <V5Section background="white" reveal>
      <p
        className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.08em]"
        style={{ color: V5.inkMuted }}
      >
        Built for Swiss companies with serious data-control needs.
      </p>
      {/* TODO: replace placeholders with approved customer or partner logos. */}
      <div className="grid grid-cols-2 gap-4 min-[481px]:grid-cols-3 md:grid-cols-6">
        {logoSlots.map((label) => (
          <div
            key={label}
            role="img"
            aria-label="Company logo placeholder"
            className="flex h-10 items-center justify-center rounded border text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
            style={{ borderColor: V5.hairline, color: V5.inkMuted, backgroundColor: '#FFFFFF' }}
          >
            {label}
          </div>
        ))}
      </div>
    </V5Section>
  );
}
