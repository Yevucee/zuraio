import { useState } from 'react';
import { useI18n } from '../../i18n/I18nProvider';
import { SectionPurpose } from '../components/SectionPurpose';

const interestOptions = [
  { value: 'meeting-preparation', key: 'meetingPreparation' as const },
  { value: 'email-followup', key: 'emailFollowup' as const },
  { value: 'knowledge-search', key: 'knowledgeSearch' as const },
  { value: 'reports-summaries', key: 'reportsSummaries' as const },
  { value: 'data-control', key: 'dataControl' as const },
  { value: 'technical-architecture', key: 'technicalArchitecture' as const },
  { value: 'starter-partner', key: 'starterPartner' as const },
];

export default function Contact() {
  const { messages: m } = useI18n();
  const p = m.pages.contact;
  const interests = p.form.interests;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    companySize: '',
    mainInterest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page makes the sales conversation feel confidential, practical and low-pressure.
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
            This form captures the information needed for a useful first conversation without making the visitor feel like they are entering an automated sales funnel.
          </SectionPurpose>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <div className="space-y-6">
                {(
                  [
                    { id: 'name', label: p.form.name, type: 'text', required: true },
                    { id: 'company', label: p.form.company, type: 'text', required: true },
                    { id: 'role', label: p.form.role, type: 'text', required: true },
                    { id: 'email', label: p.form.email, type: 'email', required: true },
                    { id: 'phone', label: p.form.phone, type: 'tel', required: false },
                  ] as const
                ).map(({ id, label, type, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      required={required}
                      className="w-full px-4 py-3 rounded-md border"
                      style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="companySize" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    {p.form.companySize}
                  </label>
                  <input
                    type="text"
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    placeholder={p.form.companySizePlaceholder}
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="mainInterest" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    {p.form.mainInterest}
                  </label>
                  <select
                    id="mainInterest"
                    name="mainInterest"
                    value={formData.mainInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  >
                    <option value="">{p.form.selectOption}</option>
                    {interestOptions.map(({ value, key }) => (
                      <option key={value} value={value}>
                        {interests[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    {p.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                  {p.form.confidential}
                </p>

                {isSubmitted && (
                  <p className="rounded-md px-4 py-3 text-sm" style={{ backgroundColor: 'var(--cloud-grey)', color: 'var(--deep-charcoal)' }}>
                    {p.form.thankYou}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-md transition-all font-medium text-lg"
                  style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}
                >
                  {m.common.buttons.submitEnquiry}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
              {p.direct.title}
            </h2>
            <p className="text-xl mb-4" style={{ color: 'var(--charcoal)' }}>
              {p.direct.email}
            </p>
            <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
              {p.direct.location}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
