import { V5 } from '../tokens';
import { PrimaryButton, GhostButton } from './V5Buttons';

function HeroProductVisual() {
  return (
    <div
      className="v5-card relative aspect-[16/10] w-full overflow-hidden rounded-2xl border"
      style={{ borderColor: V5.hairline, backgroundColor: '#FFFFFF' }}
    >
      {/* TODO: replace with real hero product UI mock-up at src/assets/home-v5/hero-product.png */}
      <div className="flex h-full flex-col">
          <div
            className="flex items-center gap-3 border-b px-5 py-3"
            style={{ borderColor: V5.hairline, backgroundColor: V5.creamSoft }}
          >
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: V5.hairline }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: V5.hairline }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: V5.hairline }} />
            </div>
            <span className="text-xs font-medium" style={{ color: V5.inkMuted }}>
              Zuraio AI Workspace
            </span>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-0">
            <div className="border-r p-4" style={{ borderColor: V5.hairline }}>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider" style={{ color: V5.inkMuted }}>
                Inbox
              </p>
              {['Q3 contract thread', 'Board prep', 'Client follow-up'].map((item, i) => (
                <div
                  key={item}
                  className="mb-2 rounded-lg px-3 py-2 text-xs"
                  style={{
                    backgroundColor: i === 0 ? V5.warmAccent : 'transparent',
                    color: V5.ink,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="col-span-2 p-5">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: V5.olive }}>
                Email Assistant
              </p>
              <p className="mb-4 text-sm font-semibold" style={{ color: V5.ink }}>
                Re: Q3 contract — draft ready for review
              </p>
              <div
                className="rounded-xl border p-4 text-xs leading-relaxed"
                style={{ borderColor: V5.hairline, color: V5.inkMuted, backgroundColor: V5.creamBg }}
              >
                Thank you for the updated terms. We reviewed the pricing section and can confirm alignment with our
                internal policy. Please find our proposed adjustments attached for your review before sending.
              </div>
              <div className="mt-4 flex gap-2">
                <span
                  className="rounded-md px-3 py-1.5 text-[10px] font-medium"
                  style={{ backgroundColor: V5.olive, color: '#FFFFFF' }}
                >
                  Review draft
                </span>
                <span
                  className="rounded-md border px-3 py-1.5 text-[10px] font-medium"
                  style={{ borderColor: V5.hairline, color: V5.ink }}
                >
                  Edit before send
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export function HeroV5() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40" style={{ backgroundColor: V5.creamBg }}>
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[560px]">
            <p
              className="v5-hero-reveal mb-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: V5.warmAccent, color: V5.ink }}
            >
              Built in Switzerland
            </p>
            <h1
              className="v5-hero-reveal v5-hero-reveal-delay-1 mb-6 text-4xl font-semibold leading-[1.08] md:text-5xl lg:text-[3.25rem]"
              style={{ color: V5.ink }}
            >
              Your work, ready before you are.
            </h1>
            <p
              className="v5-hero-reveal v5-hero-reveal-delay-2 mb-10 text-lg leading-relaxed md:text-xl"
              style={{ color: V5.inkMuted }}
            >
              Zuraio connects to your emails, documents, meetings and messages so briefs, drafts and answers are ready
              when you need them, with your data kept under your control.
            </p>
            <div className="v5-hero-reveal v5-hero-reveal-delay-3 mb-6 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton to="/contact">Book a private demo</PrimaryButton>
              <GhostButton href="#how-it-works">See how it works</GhostButton>
            </div>
            <p
              className="v5-hero-reveal v5-hero-reveal-delay-4 text-xs leading-relaxed md:text-sm"
              style={{ color: V5.inkMuted }}
            >
              Swiss, local-country and on-premise hosting options · Model-independent · Designed for upcoming AI audits
              · Personal setup support
            </p>
          </div>
          <div className="v5-hero-reveal v5-hero-reveal-delay-5">
            <HeroProductVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
