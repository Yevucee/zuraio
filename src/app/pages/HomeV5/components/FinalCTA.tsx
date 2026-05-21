import { V5 } from '../tokens';
import { PrimaryButton, GhostButton } from './V5Buttons';

export function FinalCTA() {
  return (
    <section className="v5-reveal py-20 md:py-28" style={{ backgroundColor: V5.warmAccent }}>
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <p
          className="mb-4 text-xs font-semibold tracking-[0.12em]"
          style={{ fontFamily: 'var(--font-mono)', color: V5.olive }}
        >
          READY WHEN YOU ARE
        </p>
        <h2 className="mb-5 text-3xl font-semibold md:text-4xl" style={{ color: V5.ink }}>
          See what Zuraio could do inside your company.
        </h2>
        <p className="mb-10 text-lg leading-relaxed" style={{ color: V5.inkMuted }}>
          A private demo focused on your current tools, your data-control needs and the first workflows we can configure
          with you.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton to="/contact">Book a private demo</PrimaryButton>
          <GhostButton href="#how-it-works">See how it works</GhostButton>
        </div>
      </div>
    </section>
  );
}
