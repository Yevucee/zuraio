import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { useI18n } from '../../i18n/I18nProvider';

export default function About() {
  const { messages: m } = useI18n();
  const p = m.pages.about;

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page shows that Zuraio was built from real operational need, not from AI hype.
          </SectionPurpose>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              {p.hero.title}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {p.hero.body}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives the company a credible origin story rooted in practical business need.
          </SectionPurpose>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              {p.origin.title}
            </h2>
            <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {p.origin.body1}
            </p>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {p.origin.body2}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section makes the company's values explicit and reassures cautious buyers.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.principles.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {p.principles.items.map((item) => (
              <div key={item} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
                <p className="text-xl" style={{ color: 'var(--charcoal)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section builds trust in the people behind the platform.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.team.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {p.team.members.map((member) => (
              <div key={member.name} className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--paper-white)' }}>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--soft-olive)' }} />
                <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                  {member.name}
                </h3>
                <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                  {member.role}
                </p>
                <p className="text-base" style={{ color: 'var(--charcoal)' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section turns human trust into a direct conversation.
          </SectionPurpose>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              {p.cta.title}
            </h2>
            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              {m.common.buttons.contactTeam}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
