import heroImage from '../../../../imports/hero_image_2_-.png';
import { PrimaryButton, GhostButton } from './V6Buttons';

const statusPills = [
  'Sources attached',
  'Access checked',
  'Swiss hosting',
] as const;

export function HeroV6() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: 'var(--paper-white)' }}>
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[560px]">
            <p
              className="v6-hero-reveal mb-4 text-sm font-medium"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
            >
              AI for Swiss companies that need control of their data.
            </p>
            <h1
              className="v6-hero-reveal v6-hero-reveal-delay-1 mb-6 text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-[3rem]"
              style={{ color: 'var(--deep-charcoal)' }}
            >
              Your work, ready before you are.
            </h1>
            <p
              className="v6-hero-reveal v6-hero-reveal-delay-2 mb-8 text-lg leading-relaxed"
              style={{ color: 'var(--charcoal)' }}
            >
              Zuraio helps teams prepare for meetings, draft replies, find answers with sources, create reports and
              keep follow-ups moving, with Swiss hosting and access controls suited to your company.
            </p>
            <div className="v6-hero-reveal v6-hero-reveal-delay-3 mb-6 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton to="/contact">Book a demo</PrimaryButton>
              <GhostButton href="#see-it-in-action">See it in action</GhostButton>
            </div>
            <p
              className="v6-hero-reveal text-sm leading-relaxed"
              style={{ color: 'var(--charcoal)' }}
            >
              Swiss hosting · On-premise options · Source-backed answers · Personal setup support
            </p>
          </div>

          <div className="v6-hero-reveal v6-hero-reveal-delay-3 relative">
            <img
              src={heroImage}
              alt="Zuraio AI Workspace showing prepared work with sources and access controls"
              className="w-full max-w-[720px] rounded-lg"
              style={{
                display: 'block',
                boxShadow: '0 1px 2px rgba(11,20,36,0.04), 0 12px 32px rgba(11,20,36,0.06)',
              }}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {statusPills.map((label) => (
                <span
                  key={label}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: 'rgba(70, 70, 70, 0.15)',
                    color: 'var(--data-teal)',
                    backgroundColor: 'var(--paper-white)',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
