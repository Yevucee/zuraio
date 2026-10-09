/** About page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §5 */

import { CONTACT_FOUNDERS } from './copy-contact.js';

export const ABOUT_LOCALES = ['de', 'en', 'fr', 'it'];

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
      heading: 'Four people in Switzerland, building the AI we wanted.',
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
      heading: 'Vier Menschen in der Schweiz, die die KI bauen, die sie wollten.',
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
  fr: {
    metaTitle: 'À propos | Zuraio',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      eyebrow: 'À PROPOS',
      heading: 'Quatre personnes en Suisse, qui créent l’IA qu’elles voulaient.',
      sub: 'Nous perdions des heures à préparer des séances, à traiter des e-mails et à chercher le bon document. Les outils d’IA publics aidaient, mais ils ne connaissaient pas notre entreprise et ne respectaient pas nos règles d’accès. Alors nous avons créé Zuraio.',
    },
    team: {
      heading: 'Les personnes à qui vous parlerez.',
      contactLine: 'Écrivez-nous directement. L’un de nous vous répondra.',
      people: CONTACT_FOUNDERS,
    },
    beliefs: {
      heading: 'Ce en quoi nous croyons',
      items: [
        { lead: 'Les personnes décident.', body: 'L’IA prépare, votre équipe juge et valide.' },
        { lead: 'Vos données restent les vôtres.', body: 'Suisse par défaut, et vous choisissez ce qui va ailleurs.' },
        { lead: 'Commencer par du vrai travail.', body: 'Une tâche qui compte, pas un grand projet d’IA.' },
        { lead: 'Montrer la source.', body: 'Pour pouvoir vérifier avant de s’y fier.' },
        { lead: 'Développé avec vous.', body: 'Vos skills, votre ton, votre façon de travailler.' },
      ],
    },
    starter: {
      heading: 'Nous travaillons avec nos premiers partenaires de lancement.',
      body: 'Des entreprises suisses qui façonnent Zuraio avec nous, travaillent directement avec les fondateurs et influencent ce que nous développons ensuite.',
      link: 'Devenir partenaire de lancement →',
    },
    cta: {
      heading: 'Parlons de votre entreprise.',
      body: '',
      button: 'Réserver une démo de 30 minutes',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },
  it: {
    metaTitle: 'Chi siamo | Zuraio',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      eyebrow: 'CHI SIAMO',
      heading: 'Quattro persone in Svizzera, che creano l’IA che volevano.',
      sub: 'Perdevamo ore a preparare riunioni, a gestire e-mail e a cercare il documento giusto. Gli strumenti di IA pubblici aiutavano, ma non conoscevano la nostra azienda né rispettavano le nostre regole di accesso. Così abbiamo creato Zuraio.',
    },
    team: {
      heading: 'Le persone con cui parlerete.',
      contactLine: 'Scriveteci direttamente. Vi risponderà uno di noi.',
      people: CONTACT_FOUNDERS,
    },
    beliefs: {
      heading: 'In cosa crediamo',
      items: [
        { lead: 'Decidono le persone.', body: 'L’IA prepara, il vostro team valuta e approva.' },
        { lead: 'I vostri dati restano vostri.', body: 'Svizzera di base, e siete voi a scegliere cosa va altrove.' },
        { lead: 'Partire dal lavoro vero.', body: 'Un compito che conta, non un grande progetto di IA.' },
        { lead: 'Mostrare la fonte.', body: 'Così si può verificare prima di fidarsi.' },
        { lead: 'Sviluppato con voi.', body: 'Le vostre skill, il vostro tono, il vostro modo di lavorare.' },
      ],
    },
    starter: {
      heading: 'Lavoriamo con i nostri primi partner di lancio.',
      body: 'Aziende svizzere che danno forma a Zuraio con noi, lavorano direttamente con i fondatori e influenzano ciò che sviluppiamo dopo.',
      link: 'Diventare partner di lancio →',
    },
    cta: {
      heading: 'Parliamo della vostra azienda.',
      body: '',
      button: 'Prenotare una demo di 30 minuti',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },

};

export function getAboutCopy(locale) {
  return copyAbout[locale] ?? copyAbout.en;
}
