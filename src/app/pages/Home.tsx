import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { FeatureCard } from '../components/FeatureCard';
import { ComparisonBanner } from '../components/ComparisonBanner';

export default function Home() {
  return (
    <div className="w-full">
      <ComparisonBanner currentVersion="original" />
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section must explain what Zuraio does in five seconds and reassure visitors that the product is about practical business value and data control.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-sm uppercase tracking-wider mb-6"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
            >
              AI for Swiss companies that need control of their data.
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              Prepare better. Work faster. Keep control.
            </h1>

            <p className="text-xl md:text-2xl mb-10 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio AI Hub helps teams use AI across emails, documents, meetings, reports and internal knowledge, while keeping control of data, access and model choice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button to="/contact">Book a private demo</Button>
              <Button variant="secondary" to="/how-it-helps">See how it works</Button>
            </div>

            <p
              className="text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
            >
              Built for Swiss companies · Configurable data residency · Model-independent AI · Designed for auditability
            </p>
          </div>
        </div>
      </section>

      {/* Everyday Problem Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section helps business owners recognise the operational problem before Zuraio introduces the technology.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center max-w-3xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            Your company already has the knowledge. It is just scattered.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Emails, documents, meeting notes, CRM records, project files and internal policies often sit in different places. That slows teams down, creates repeated admin and increases the risk of missed details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Missed follow-ups"
              description="Important actions disappear inside long email threads."
            />
            <FeatureCard
              title="Slow meeting preparation"
              description="People spend time searching instead of preparing."
            />
            <FeatureCard
              title="Repeated manual admin"
              description="Reports, summaries and updates are rebuilt again and again."
            />
            <FeatureCard
              title="Inconsistent information"
              description="Different teams work from different versions of the truth."
            />
          </div>
        </div>
      </section>

      {/* Practical AI Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section translates AI into practical, recognisable use cases rather than abstract technology.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Practical AI for the work your company does every day.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Zuraio turns scattered company knowledge into controlled assistance for meetings, emails, reports and internal search.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              title="Meetings"
              description="Prepare meeting briefs from recent emails, documents, notes and client history."
            />
            <FeatureCard
              title="Emails"
              description="Summarise long threads, draft replies and identify actions that need follow-up."
            />
            <FeatureCard
              title="Reports"
              description="Create first drafts of summaries, updates and management reports from approved sources."
            />
            <FeatureCard
              title="Knowledge"
              description="Ask questions across company documents and receive source-backed answers."
            />
          </div>

          <div className="text-center">
            <Button to="/how-it-helps">Explore how it helps</Button>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section makes the transformation tangible by showing the difference between current working habits and a controlled AI workflow.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Less searching. Fewer missed details. Better-prepared teams.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                Before Zuraio
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Information spread across inboxes and folders</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Manual preparation before meetings</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Long email threads and missed actions</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Reports rebuilt from scratch</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Sensitive information copied into public AI tools</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--soft-olive)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                With Zuraio
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Key context brought together from approved sources</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Meeting briefs generated from company knowledge</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Summaries, drafts and follow-ups identified</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>First drafts created from existing documents and data</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>AI use routed through a controlled company layer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Control Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section builds trust by showing why controlled AI matters and how Zuraio differs from generic cloud-first tools.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center max-w-4xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            AI should not mean losing control of company data.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Many AI tools are powerful, but they are built around external platforms and standardised cloud processing. For companies with sensitive commercial knowledge, client information or internal documents, that raises serious questions.
          </p>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Zuraio is designed around control from the start: configurable data residency, access permissions, model choice and workflows that are easier to review.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="p-8 rounded-lg border-2" style={{ borderColor: 'var(--charcoal)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                Standard cloud AI approach
              </h3>
              <ul className="space-y-3">
                <li style={{ color: 'var(--charcoal)' }}>External platform-first</li>
                <li style={{ color: 'var(--charcoal)' }}>Generic assistant</li>
                <li style={{ color: 'var(--charcoal)' }}>One model route</li>
                <li style={{ color: 'var(--charcoal)' }}>Limited visibility</li>
                <li style={{ color: 'var(--charcoal)' }}>Hard to adapt</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--paper-white)' }}>
                Zuraio AI Hub
              </h3>
              <ul className="space-y-3">
                <li style={{ color: 'var(--paper-white)' }}>Control-first design</li>
                <li style={{ color: 'var(--paper-white)' }}>Company-specific knowledge</li>
                <li style={{ color: 'var(--paper-white)' }}>Model choice by task</li>
                <li style={{ color: 'var(--paper-white)' }}>Designed for traceable workflows</li>
                <li style={{ color: 'var(--paper-white)' }}>Modular agents and integrations</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button to="/data-control">Read about data control</Button>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section encourages cautious buyers to evaluate AI providers critically without directly attacking competitors.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Before connecting your company to AI, ask five questions.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                1. Where is our data processed?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                2. Who controls the model?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                3. Can we see which sources were used?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                4. Can access follow our company permissions?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                5. Can the system adapt to how we work?
              </p>
            </div>
          </div>

          <p className="text-2xl text-center font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
            Zuraio is built around these questions from the start.
          </p>
        </div>
      </section>

      {/* Built From Real Need Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section humanises the company and explains that Zuraio was built from a real operational need, not as a trend-driven AI wrapper.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              We built the AI layer we wanted to use ourselves.
            </h2>

            <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio started because we needed a better way to use AI in our own work: preparing for meetings, handling emails, finding the right information, reducing repeated admin and keeping control over sensitive business data.
            </p>

            <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              We did not want another public chatbot. We wanted a controlled AI layer connected to real company knowledge, with clear rules around access, data and model choice.
            </p>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              That is what became Zuraio AI Hub.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Confidence Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section reassures technical buyers that the simple business message is backed by serious architecture.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Serious technology. Clear controls.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              title="Model choice"
              description="Route work to cloud, open-source or local models depending on the task and policy."
            />
            <FeatureCard
              title="Access control"
              description="Use permissions and roles to control who can access which knowledge."
            />
            <FeatureCard
              title="Internal knowledge"
              description="Connect selected documents, systems and sources to company-specific AI assistance."
            />
            <FeatureCard
              title="Auditability"
              description="Design workflows so sources, actions and model usage are easier to review."
            />
          </div>

          <div className="text-center">
            <Button to="/technical-architecture">View the technical architecture</Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section turns interest into a private, low-pressure conversation.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              See what controlled AI could do inside your company.
            </h2>

            <p className="text-xl mb-10" style={{ color: 'var(--paper-white)' }}>
              We will walk through your current systems, your data-control needs and the most useful first applications for your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
                Book a private demo
              </Button>
              <Button to="/starter-partners" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--zuraio-olive)]">
                Discuss starter partner options
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
