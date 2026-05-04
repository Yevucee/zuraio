import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page shows that Zuraio was built from real operational need, not from AI hype.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              We built the AI layer we wanted to use ourselves.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio started from a practical need: to use AI in daily work without losing control of company knowledge, sensitive data or decision-making processes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Zuraio Exists */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives the company a credible origin story rooted in practical business need.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Built from the same problem our clients face.
            </h2>

            <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              We needed a better way to prepare for meetings, manage emails, find the right information, draft reports and reduce repeated admin. Public AI tools were useful, but they were not enough for serious company work.
            </p>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              We wanted one controlled layer connected to real business knowledge, with clear rules around access, data and model choice.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section makes the company's values explicit and reassures cautious buyers.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Our principles.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
                AI should support human judgement, not replace it.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
                Company data should stay under company control.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
                Useful AI starts with real workflows.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
                Trust depends on sources, access and reviewability.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
                The best AI system is one people can actually use every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section builds trust in the people behind the platform.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            The people behind Zuraio.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--paper-white)' }}>
              <div className="w-32 h-32 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--soft-olive)' }}></div>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                [Founder Name]
              </h3>
              <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Co-Founder & CEO
              </p>
              <p className="text-base" style={{ color: 'var(--charcoal)' }}>
                [Background in technology and business. Built Zuraio to solve real operational challenges faced in previous roles.]
              </p>
            </div>

            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--paper-white)' }}>
              <div className="w-32 h-32 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--soft-olive)' }}></div>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                [Team Member Name]
              </h3>
              <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Co-Founder & CTO
              </p>
              <p className="text-base" style={{ color: 'var(--charcoal)' }}>
                [Technical expertise in AI systems and enterprise architecture. Focused on building secure, scalable solutions.]
              </p>
            </div>

            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--paper-white)' }}>
              <div className="w-32 h-32 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--soft-olive)' }}></div>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                [Team Member Name]
              </h3>
              <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Head of Product
              </p>
              <p className="text-base" style={{ color: 'var(--charcoal)' }}>
                [Experience in enterprise software and AI integration. Ensuring Zuraio meets real business needs.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section turns human trust into a direct conversation.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              Speak with us about your company setup.
            </h2>

            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              Contact the team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
