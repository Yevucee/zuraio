/** Contact page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §7 */

export const CONTACT_FOUNDERS = [
  { name: 'Michael C. Wili', email: 'michael.wili@zuraio.ch', img: 'Michael' },
  { name: 'Marcelo Zanette', email: 'marcelo.zanette@zuraio.ch', img: 'Marcelo' },
  { name: 'Samuel A. Polley', email: 'samuel.polley@zuraio.ch', img: 'Samuel' },
  { name: 'Roland Steiner', email: 'roland.steiner@zuraio.ch', img: 'Roland' },
];

export const copyContact = {
  en: {
    metaTitle: 'Contact | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      heading: 'Let\'s find your first task.',
      sub: 'Tell us a little about your company. One of the founders will get back to you in days, not weeks.',
    },
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      companySize: 'Company size',
      companySizePlaceholder: 'Select (optional)',
      companySizeOptions: [
        { value: '1-9', label: '1-9' },
        { value: '10-49', label: '10-49' },
        { value: '50-249', label: '50-249' },
        { value: '250+', label: '250+' },
      ],
      message: 'What would you like to improve?',
      messagePlaceholder: 'For example: answering client emails, preparing meetings, quotes',
      starterLabel: 'I\'m interested in becoming a starter partner',
      submit: 'Send',
      trust: 'Your message goes straight to the founders, nowhere else.',
      sending: 'Sending…',
      success: 'Thank you. We received your message. One of the founders will get back to you in days, not weeks.',
      error: 'Something went wrong. Please try again or email us directly at',
      errorNetwork: 'We could not reach the server. Please check your connection or email us at',
      fallback: 'This form is not yet connected. Please email us at',
      validationEmail: 'Please enter a valid email address.',
      validationRequired: 'Please enter your name, company and email.',
      starterInterestLabel: 'Starter partner',
      websiteEnquiryLabel: 'Website contact',
    },
    founders: {
      heading: 'Or write to us directly',
      reply: 'We reply in days, not weeks.',
    },
    starter: {
      heading: 'We\'re working with our first starter partners.',
      body: 'Swiss companies that shape Zuraio with us, work directly with the founders and influence what we build next.',
      link: 'Become a starter partner →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  de: {
    metaTitle: 'Kontakt | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      heading: 'Finden wir Ihre erste Aufgabe.',
      sub: 'Erzählen Sie uns kurz von Ihrem Betrieb. Einer unserer Gründer meldet sich in Tagen, nicht in Wochen.',
    },
    form: {
      name: 'Name',
      company: 'Firma',
      email: 'E-Mail',
      companySize: 'Betriebsgrösse',
      companySizePlaceholder: 'Auswählen (optional)',
      companySizeOptions: [
        { value: '1-9', label: '1-9' },
        { value: '10-49', label: '10-49' },
        { value: '50-249', label: '50-249' },
        { value: '250+', label: '250+' },
      ],
      message: 'Was möchten Sie verbessern?',
      messagePlaceholder: 'Zum Beispiel: Kunden-E-Mails beantworten, Sitzungen vorbereiten, Offerten',
      starterLabel: 'Ich interessiere mich für eine Starter-Partnerschaft',
      submit: 'Senden',
      trust: 'Ihre Nachricht geht direkt an die Gründer, sonst nirgendwohin.',
      sending: 'Wird gesendet…',
      success: 'Vielen Dank. Wir haben Ihre Nachricht erhalten. Einer unserer Gründer meldet sich in Tagen, nicht in Wochen.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns an',
      errorNetwork: 'Der Server ist nicht erreichbar. Bitte prüfen Sie Ihre Verbindung oder schreiben Sie uns an',
      fallback: 'Das Formular ist noch nicht verbunden. Bitte schreiben Sie uns an',
      validationEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      validationRequired: 'Bitte geben Sie Name, Firma und E-Mail ein.',
      starterInterestLabel: 'Starter-Partnerschaft',
      websiteEnquiryLabel: 'Kontakt über Website',
    },
    founders: {
      heading: 'Oder schreiben Sie uns direkt',
      reply: 'Wir antworten in Tagen, nicht in Wochen.',
    },
    starter: {
      heading: 'Wir arbeiten mit unseren ersten Starter-Partnern.',
      body: 'Schweizer Betriebe, die Zuraio mitgestalten, direkt mit den Gründern arbeiten und beeinflussen, was wir als Nächstes bauen.',
      link: 'Starter-Partner werden →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
};

export function getContactCopy(locale) {
  return copyContact[locale === 'de' ? 'de' : 'en'];
}
