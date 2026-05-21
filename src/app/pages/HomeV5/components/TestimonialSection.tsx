import { V5 } from '../tokens';
import { V5Section } from './V5Section';

export function TestimonialSection() {
  return (
    <V5Section background="cream" reveal>
      {/* TODO: replace placeholder quote and attribution with an approved customer reference. */}
      <article
        className="v5-card mx-auto max-w-[760px] rounded-2xl border bg-white p-8 md:p-12"
        style={{ borderColor: V5.hairline }}
      >
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.08em]"
          style={{ color: V5.olive }}
        >
          Placeholder
        </p>
        <blockquote className="mb-8 text-2xl font-semibold leading-[1.4] md:text-3xl" style={{ color: V5.ink }}>
          “Zuraio helped us test AI inside the company without giving up control of sensitive knowledge.”
        </blockquote>
        <div>
          <p className="font-semibold" style={{ color: V5.ink }}>
            Placeholder customer
          </p>
          <p className="text-sm" style={{ color: V5.inkMuted }}>
            Role, Company
          </p>
        </div>
      </article>
    </V5Section>
  );
}
