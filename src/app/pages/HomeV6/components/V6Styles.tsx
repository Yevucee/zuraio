export function V6Styles() {
  return (
    <style>{`
      .v6-page {
        background-color: var(--paper-white);
        color: var(--deep-charcoal);
        font-family: var(--font-sans);
      }

      .v6-card {
        box-shadow: 0 1px 2px rgba(11,20,36,0.04), 0 8px 24px rgba(11,20,36,0.04);
      }

      .v6-btn-primary {
        transition: transform 180ms ease, box-shadow 180ms ease;
      }

      .v6-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(11,20,36,0.08);
      }

      .v6-focus:focus-visible {
        outline: 2px solid var(--zuraio-olive);
        outline-offset: 2px;
      }

      .v6-hero-reveal {
        opacity: 0;
        transform: translateY(12px);
        animation: v6HeroReveal 700ms ease forwards;
      }

      .v6-hero-reveal-delay-1 { animation-delay: 100ms; }
      .v6-hero-reveal-delay-2 { animation-delay: 200ms; }
      .v6-hero-reveal-delay-3 { animation-delay: 300ms; }

      @keyframes v6HeroReveal {
        to { opacity: 1; transform: translateY(0); }
      }

      .v6-reveal {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 450ms ease, transform 450ms ease;
      }

      .v6-reveal.v6-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .v6-step {
        opacity: 0;
        transform: translateY(6px);
        transition: opacity 350ms ease, transform 350ms ease;
      }

      .v6-animate .v6-step {
        opacity: 1;
        transform: translateY(0);
      }

      .v6-animate .v6-step:nth-child(1) { transition-delay: 0ms; }
      .v6-animate .v6-step:nth-child(2) { transition-delay: 150ms; }
      .v6-animate .v6-step:nth-child(3) { transition-delay: 300ms; }
      .v6-animate .v6-step:nth-child(4) { transition-delay: 450ms; }
      .v6-animate .v6-step:nth-child(5) { transition-delay: 600ms; }

      .v6-flow-dot {
        opacity: 0;
      }

      .v6-flow-animate .v6-flow-dot {
        animation: v6Flow 2.5s ease-in-out forwards;
      }

      .v6-flow-dot:nth-of-type(2) { animation-delay: 350ms; }
      .v6-flow-dot:nth-of-type(3) { animation-delay: 700ms; }
      .v6-flow-dot:nth-of-type(4) { animation-delay: 1050ms; }

      @keyframes v6Flow {
        0% { opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0.4; }
      }

      @media (prefers-reduced-motion: reduce) {
        .v6-hero-reveal,
        .v6-reveal,
        .v6-step,
        .v6-btn-primary,
        .v6-flow-dot {
          animation: none !important;
          transition: none !important;
          transform: none !important;
          opacity: 1 !important;
        }
      }
    `}</style>
  );
}
