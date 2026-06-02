import { V6Section } from './V6Section';

export function FounderSection() {
  return (
    <V6Section reveal>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            Made for the work we had to do ourselves.
          </h2>
          <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            Zuraio started because we needed a better way to prepare, search, summarise, draft and follow up in our own
            work.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            Public AI tools were useful, but they were not enough for serious company work. We wanted AI connected to
            real business knowledge, with clear control over data, access and model choice.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            That is what became Zuraio.
          </p>
        </div>

        {/* TODO: replace with approved founder or team photo at src/assets/home-v6/founder.jpg */}
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-xl border px-6 text-center text-sm"
          style={{
            borderColor: 'rgba(70, 70, 70, 0.12)',
            backgroundColor: 'var(--cloud-grey)',
            color: 'var(--charcoal)',
          }}
          role="img"
          aria-label="Founder or team photo placeholder"
        >
          Founder or team photo placeholder — calm, documentary-style image preferred
        </div>
      </div>
    </V6Section>
  );
}
