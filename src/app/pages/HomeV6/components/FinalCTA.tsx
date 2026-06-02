import { useI18n } from '../../../../i18n/I18nProvider';
import { PrimaryButton, GhostButton } from './V6Buttons';

export function FinalCTA() {
  const { messages: m } = useI18n();
  const c = m.homeV6.finalCta;

  return (
    <section className="v6-reveal py-16 md:py-20" style={{ backgroundColor: 'var(--soft-olive)' }}>
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
          {c.title}
        </h2>
        <p className="mb-3 text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
          {c.body1}
        </p>
        <p className="mb-8 text-sm" style={{ color: 'var(--charcoal)' }}>
          {c.body2}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton to="/contact">{m.common.buttons.bookDemo}</PrimaryButton>
          <GhostButton href="#see-it-in-action">{m.homeV6.hero.seeInAction}</GhostButton>
        </div>
      </div>
    </section>
  );
}
