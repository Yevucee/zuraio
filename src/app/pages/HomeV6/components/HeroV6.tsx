import heroImage from '../../../../imports/hero_image_2_-.png';
import { useI18n } from '../../../../i18n/I18nProvider';
import { PrimaryButton, GhostButton } from './V6Buttons';

export function HeroV6() {
  const { messages: m } = useI18n();
  const h = m.homeV6.hero;

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: 'var(--paper-white)' }}>
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[560px]">
            <p
              className="v6-hero-reveal mb-4 text-sm font-medium"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
            >
              {h.eyebrow}
            </p>
            <h1
              className="v6-hero-reveal v6-hero-reveal-delay-1 mb-6 text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-[3rem]"
              style={{ color: 'var(--deep-charcoal)' }}
            >
              {h.title}
            </h1>
            <p
              className="v6-hero-reveal v6-hero-reveal-delay-2 mb-8 text-lg leading-relaxed"
              style={{ color: 'var(--charcoal)' }}
            >
              {h.body}
            </p>
            <div className="v6-hero-reveal v6-hero-reveal-delay-3 mb-6 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton to="/contact">{m.common.buttons.bookDemo}</PrimaryButton>
              <GhostButton href="#see-it-in-action">{h.seeInAction}</GhostButton>
            </div>
            <p className="v6-hero-reveal text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {h.trustLine}
            </p>
          </div>

          <div className="v6-hero-reveal v6-hero-reveal-delay-3 relative">
            <img
              src={heroImage}
              alt={h.imageAlt}
              className="w-full max-w-[720px] rounded-lg"
              style={{
                display: 'block',
                boxShadow: '0 1px 2px rgba(11,20,36,0.04), 0 12px 32px rgba(11,20,36,0.06)',
              }}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {h.pills.map((label) => (
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
