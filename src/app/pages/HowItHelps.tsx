import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { FeatureCard } from '../components/FeatureCard';

export default function HowItHelps() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page helps visitors understand where Zuraio creates value in normal daily work.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              AI support for the work your teams do every day.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio helps companies prepare, search, summarise, draft, report and follow up using approved company knowledge and controlled AI workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases by Workflow */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section shows that Zuraio is useful for everyday work, not only for technical or experimental AI use cases.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Where Zuraio helps day to day.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Meeting preparation
              </h3>
              <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>
                Generate a briefing before a meeting using relevant emails, documents, client history, open tasks and previous notes.
              </p>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Examples:
              </p>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• client meeting brief</li>
                <li style={{ color: 'var(--charcoal)' }}>• supplier negotiation brief</li>
                <li style={{ color: 'var(--charcoal)' }}>• internal management meeting brief</li>
                <li style={{ color: 'var(--charcoal)' }}>• project status briefing</li>
                <li style={{ color: 'var(--charcoal)' }}>• board preparation notes</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Email and follow-up
              </h3>
              <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>
                Summarise long threads, draft replies and detect open actions.
              </p>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Examples:
              </p>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• What did the client ask for?</li>
                <li style={{ color: 'var(--charcoal)' }}>• What do we still owe them?</li>
                <li style={{ color: 'var(--charcoal)' }}>• Draft a reply in our tone.</li>
                <li style={{ color: 'var(--charcoal)' }}>• Create a follow-up reminder.</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Reports and summaries
              </h3>
              <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>
                Draft updates from approved documents and internal sources.
              </p>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Examples:
              </p>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• monthly management summaries</li>
                <li style={{ color: 'var(--charcoal)' }}>• project updates</li>
                <li style={{ color: 'var(--charcoal)' }}>• sales account reports</li>
                <li style={{ color: 'var(--charcoal)' }}>• internal decision notes</li>
                <li style={{ color: 'var(--charcoal)' }}>• board briefing packs</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Internal knowledge search
              </h3>
              <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>
                Ask questions across documents, policies, standards, project folders and other approved knowledge sources.
              </p>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Examples:
              </p>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• What do we usually include in this proposal?</li>
                <li style={{ color: 'var(--charcoal)' }}>• Where is the latest version of this policy?</li>
                <li style={{ color: 'var(--charcoal)' }}>• What did we agree on this project?</li>
                <li style={{ color: 'var(--charcoal)' }}>• Which document supports this claim?</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Admin and task capture
              </h3>
              <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>
                Turn emails, notes or voice inputs into structured tasks, reminders and follow-ups.
              </p>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Examples:
              </p>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• meeting actions</li>
                <li style={{ color: 'var(--charcoal)' }}>• client follow-up tasks</li>
                <li style={{ color: 'var(--charcoal)' }}>• internal reminders</li>
                <li style={{ color: 'var(--charcoal)' }}>• admin checklists</li>
                <li style={{ color: 'var(--charcoal)' }}>• project handover notes</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Process consistency
              </h3>
              <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>
                Help teams follow the same steps and reduce avoidable human error.
              </p>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                Examples:
              </p>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• proposal checklists</li>
                <li style={{ color: 'var(--charcoal)' }}>• client onboarding</li>
                <li style={{ color: 'var(--charcoal)' }}>• report templates</li>
                <li style={{ color: 'var(--charcoal)' }}>• compliance document reviews</li>
                <li style={{ color: 'var(--charcoal)' }}>• recurring admin workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Role */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section helps each visitor see how Zuraio applies to their role or department.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Built for the way different teams work.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Owners and management
              </h3>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• meeting preparation</li>
                <li style={{ color: 'var(--charcoal)' }}>• decision summaries</li>
                <li style={{ color: 'var(--charcoal)' }}>• company-wide knowledge search</li>
                <li style={{ color: 'var(--charcoal)' }}>• board and management reports</li>
                <li style={{ color: 'var(--charcoal)' }}>• risk and follow-up visibility</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Operations teams
              </h3>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• project summaries</li>
                <li style={{ color: 'var(--charcoal)' }}>• handovers</li>
                <li style={{ color: 'var(--charcoal)' }}>• process checklists</li>
                <li style={{ color: 'var(--charcoal)' }}>• task capture</li>
                <li style={{ color: 'var(--charcoal)' }}>• follow-up tracking</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Administration teams
              </h3>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• email summaries</li>
                <li style={{ color: 'var(--charcoal)' }}>• document search</li>
                <li style={{ color: 'var(--charcoal)' }}>• reminders</li>
                <li style={{ color: 'var(--charcoal)' }}>• report drafts</li>
                <li style={{ color: 'var(--charcoal)' }}>• internal FAQs</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Sales and client teams
              </h3>
              <ul className="space-y-2">
                <li style={{ color: 'var(--charcoal)' }}>• client briefs</li>
                <li style={{ color: 'var(--charcoal)' }}>• proposal preparation</li>
                <li style={{ color: 'var(--charcoal)' }}>• CRM context</li>
                <li style={{ color: 'var(--charcoal)' }}>• follow-up drafting</li>
                <li style={{ color: 'var(--charcoal)' }}>• meeting notes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section moves practical interest into a consultation around the visitor's own company setup.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              Show us your current workflow. We will show where controlled AI can help first.
            </h2>

            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              Book a private demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
