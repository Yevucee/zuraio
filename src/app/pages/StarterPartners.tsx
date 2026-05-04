import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';

export default function StarterPartners() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page positions the starter partner route as selective, practical and collaborative.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              Shape a controlled AI platform around real company needs.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio works with selected starter partners to deploy practical AI workflows, test real use cases and shape the product roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section qualifies the right type of partner and avoids attracting purely experimental interest.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            For companies ready to explore controlled AI seriously.
          </h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>Swiss companies with sensitive internal knowledge</span>
              </li>
              <li className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>owner-managed and mid-sized organisations</span>
              </li>
              <li className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>teams that want AI but need data control</span>
              </li>
              <li className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>companies with scattered knowledge across emails, documents and systems</span>
              </li>
              <li className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>organisations that want practical first use cases, not abstract AI experiments</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Starter Partners Get */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section explains the value of becoming an early partner without overcommitting on unconfirmed commercial terms.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            What starter partners can expect.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• direct input into product development</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• early access to Zuraio AI Hub</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• practical workflow selection</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• controlled pilot setup</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• roadmap influence</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• commercial terms to be agreed</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Start */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section reduces perceived implementation risk by showing a measured rollout process.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            A careful path into practical AI.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>1</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Understand your company setup</p>
                <p style={{ color: 'var(--charcoal)' }}>Learn about your systems, workflows and data needs</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>2</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Select the first practical workflows</p>
                <p style={{ color: 'var(--charcoal)' }}>Identify where AI can add immediate value</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>3</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Configure access and data controls</p>
                <p style={{ color: 'var(--charcoal)' }}>Set up permissions and governance</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>4</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Pilot with a small group</p>
                <p style={{ color: 'var(--charcoal)' }}>Test with selected users in real scenarios</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>5</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Review, improve and expand</p>
                <p style={{ color: 'var(--charcoal)' }}>Refine based on feedback and scale carefully</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section converts qualified interest into a private founder-led conversation.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              Discuss becoming a starter partner.
            </h2>

            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              Start the conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
