import { V5 } from '../tokens';

export function V5Styles() {
  return (
    <style>{`
      .v5-page {
        --v5-cream-bg: ${V5.creamBg};
        --v5-cream-soft: ${V5.creamSoft};
        --v5-ink: ${V5.ink};
        --v5-ink-muted: ${V5.inkMuted};
        --v5-hairline: ${V5.hairline};
        --v5-warm-accent: ${V5.warmAccent};
        --v5-olive: ${V5.olive};
        --v5-soft-olive: ${V5.softOlive};
        --v5-data-teal: ${V5.dataTeal};
        --v5-shadow-soft: ${V5.shadowSoft};
        background-color: var(--v5-cream-bg);
        color: var(--v5-ink);
        font-family: var(--font-sans);
      }

      .v5-card {
        box-shadow: var(--v5-shadow-soft);
        transition: transform 200ms ease, box-shadow 200ms ease;
      }

      .v5-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(11,20,36,0.06), 0 16px 40px rgba(11,20,36,0.08);
      }

      .v5-btn-primary {
        transition: transform 180ms ease, box-shadow 180ms ease;
      }

      .v5-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 12px 30px rgba(11,20,36,0.10);
      }

      .v5-btn-primary:active {
        transform: translateY(0);
      }

      .v5-btn-ghost {
        transition: border-color 180ms ease, background-color 180ms ease;
      }

      .v5-focus:focus-visible {
        outline: 2px solid var(--v5-olive);
        outline-offset: 2px;
      }

      .v5-hero-reveal {
        opacity: 0;
        transform: translateY(16px);
        animation: v5HeroReveal 800ms ease forwards;
      }

      .v5-hero-reveal-delay-1 { animation-delay: 120ms; }
      .v5-hero-reveal-delay-2 { animation-delay: 240ms; }
      .v5-hero-reveal-delay-3 { animation-delay: 360ms; }
      .v5-hero-reveal-delay-4 { animation-delay: 480ms; }
      .v5-hero-reveal-delay-5 { animation-delay: 600ms; }

      @keyframes v5HeroReveal {
        to { opacity: 1; transform: translateY(0); }
      }

      .v5-reveal {
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 500ms ease, transform 500ms ease;
      }

      .v5-reveal.v5-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .v5-step {
        opacity: 0;
        transform: translateY(8px);
        transition: opacity 400ms ease, transform 400ms ease;
      }

      .v5-animate .v5-step {
        opacity: 1;
        transform: translateY(0);
      }

      .v5-animate .v5-step:nth-child(1) { transition-delay: 0ms; }
      .v5-animate .v5-step:nth-child(2) { transition-delay: 200ms; }
      .v5-animate .v5-step:nth-child(3) { transition-delay: 400ms; }
      .v5-animate .v5-step:nth-child(4) { transition-delay: 600ms; }
      .v5-animate .v5-step:nth-child(5) { transition-delay: 800ms; }
      .v5-animate .v5-step:nth-child(6) { transition-delay: 1000ms; }

      .v5-marquee-track {
        display: flex;
        width: max-content;
        animation: v5Marquee 60s linear infinite;
      }

      .v5-marquee:hover .v5-marquee-track {
        animation-play-state: paused;
      }

      @keyframes v5Marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .v5-flow-dot {
        opacity: 0;
      }

      .v5-flow-animate .v5-flow-dot {
        animation: v5Flow 3s ease-in-out forwards;
      }

      .v5-flow-dot:nth-of-type(2) { animation-delay: 400ms; }
      .v5-flow-dot:nth-of-type(3) { animation-delay: 800ms; }
      .v5-flow-dot:nth-of-type(4) { animation-delay: 1200ms; }

      @keyframes v5Flow {
        0% { opacity: 0; }
        15% { opacity: 1; }
        85% { opacity: 1; }
        100% { opacity: 0.3; }
      }

      .v5-typing-cursor::after {
        content: "|";
        animation: v5Blink 1s step-end infinite;
        margin-left: 1px;
        color: var(--v5-olive);
      }

      @keyframes v5Blink {
        50% { opacity: 0; }
      }

      @media (prefers-reduced-motion: reduce) {
        .v5-hero-reveal,
        .v5-reveal,
        .v5-step,
        .v5-card,
        .v5-btn-primary,
        .v5-marquee-track,
        .v5-flow-dot {
          animation: none !important;
          transition: none !important;
          transform: none !important;
          opacity: 1 !important;
        }

        .v5-typing-cursor::after {
          display: none;
        }
      }
    `}</style>
  );
}
