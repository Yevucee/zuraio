import { PrimaryButton, GhostButton } from './V6Buttons';

export function FinalCTA() {
  return (
    <section className="v6-reveal py-16 md:py-20" style={{ backgroundColor: 'var(--soft-olive)' }}>
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
          Find your first Zuraio use case.
        </h2>
        <p className="mb-3 text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
          We will walk through your current tools, your data-control needs and the first practical ways Zuraio could help
          your team.
        </p>
        <p className="mb-8 text-sm" style={{ color: 'var(--charcoal)' }}>
          Private demo. Your company setup. Your questions.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton to="/contact">Book a demo</PrimaryButton>
          <GhostButton href="#see-it-in-action">See it in action</GhostButton>
        </div>
      </div>
    </section>
  );
}
