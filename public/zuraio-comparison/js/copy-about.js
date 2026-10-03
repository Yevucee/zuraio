/** About page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §5 */

import { CONTACT_FOUNDERS } from './copy-contact.js';

export const ABOUT_LOCALES = ['de', 'en'];

export const copyAbout = {
  en: {
    metaTitle: 'About us | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      eyebrow: 'ABOUT US',
      heading: 'Four people in Switzerland, building the AI we wanted ourselves.',
      sub: 'We kept losing hours to meeting prep, email and searching for the right document. Public AI tools helped, but they didn\'t know our company or respect our access rules. So we built Zuraio.',
    },
    team: {
      heading: 'The people you\'ll talk to.',
      contactLine: 'Write to us directly. You\'ll get a reply from one of us.',
      people: CONTACT_FOUNDERS,
    },
    beliefs: {
      heading: 'What we believe',
      items: [
        { lead: 'People decide.', body: 'AI prepares, your team judges and approves.' },
        { lead: 'Your data stays yours.', body: 'Swiss by default, and you choose what goes elsewhere.' },
        { lead: 'Start with real work.', body: 'One task that matters, not a big AI project.' },
        { lead: 'Show the source.', body: 'So people can check before they rely on it.' },
        { lead: 'Built with you.', body: 'Your skills, your tone, your way of working.' },
      ],
    },
    starter: {
      heading: 'We\'re working with our first starter partners.',
      body: 'Swiss companies that shape Zuraio with us, work directly with the founders and influence what we build next.',
      link: 'Become a starter partner →',
    },
    cta: {
      heading: 'Let\'s talk about your company.',
      body: '',
      button: 'Book a 30-minute demo',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  de: {
    metaTitle: 'Über uns | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      eyebrow: 'ÜBER UNS',
      heading: 'Vier Menschen in der Schweiz, die die KI bauen, die sie selbst wollten.',
      sub: 'Wir haben Stunden mit Sitzungsvorbereitung, E-Mails und der Suche nach dem richtigen Dokument verloren. Öffentliche KI-Tools halfen, kannten aber weder unseren Betrieb noch unsere Zugriffsregeln. Also haben wir Zuraio gebaut.',
    },
    team: {
      heading: 'Die Menschen, mit denen Sie sprechen.',
      contactLine: 'Schreiben Sie uns direkt. Sie erhalten eine Antwort von einem von uns.',
      people: CONTACT_FOUNDERS,
    },
    beliefs: {
      heading: 'Was wir glauben',
      items: [
        { lead: 'Menschen entscheiden.', body: 'KI bereitet vor, Ihr Team beurteilt und gibt frei.' },
        { lead: 'Ihre Daten bleiben Ihre.', body: 'Standardmässig in der Schweiz, und Sie entscheiden, was anderswohin geht.' },
        { lead: 'Mit echter Arbeit beginnen.', body: 'Eine Aufgabe, die zählt, statt eines grossen KI-Projekts.' },
        { lead: 'Die Quelle zeigen.', body: 'Damit man prüfen kann, bevor man sich darauf verlässt.' },
        { lead: 'Mit Ihnen entwickelt.', body: 'Ihre Skills, Ihr Ton, Ihre Arbeitsweise.' },
      ],
    },
    starter: {
      heading: 'Wir arbeiten mit unseren ersten Starter-Partnern.',
      body: 'Schweizer Betriebe, die Zuraio mitgestalten, direkt mit den Gründern arbeiten und beeinflussen, was wir als Nächstes bauen.',
      link: 'Starter-Partner werden →',
    },
    cta: {
      heading: 'Sprechen wir über Ihren Betrieb.',
      body: '',
      button: '30-Minuten-Demo buchen',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
};

export function getAboutCopy(locale) {
  return locale === 'en' ? copyAbout.en : copyAbout.de;
}
