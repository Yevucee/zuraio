/** Security page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §2 */

export const SECURITY_LOCALES = ['de', 'en'];

export const copySecurity = {
  de: {
    metaTitle: 'Sicherheit und Datenkontrolle | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      eyebrow: 'SICHERHEIT UND DATENKONTROLLE',
      headingLines: ['Ihre Daten bleiben Ihre.', 'Sie entscheiden, wohin sie gehen.'],
      sub: 'Gehostet bei Infomaniak in der Schweiz. Der Zugriff folgt Ihren bestehenden Berechtigungen, und nichts wird ohne Ihr OK versendet.',
      trust: [
        'Gehostet bei Infomaniak in der Schweiz',
        'ISO 27001:2022',
        'Ihre Daten werden nie zum Trainieren von KI-Modellen verwendet',
      ],
    },
    promises: {
      heading: 'Worauf Sie sich verlassen können.',
      cards: [
        {
          title: 'Ihre Daten bleiben Ihre',
          body: 'Ihre Dokumente, E-Mails und Ihr Wissen bleiben Ihr Eigentum. Wir erheben keinen Anspruch darauf.',
        },
        {
          title: 'Standardmässig Schweiz',
          body: 'Zuraio läuft in der Schweiz. Andere KI-Modelle sind gekennzeichnet, und nur der Inhalt dieser Aufgabe geht dorthin, wenn Sie es wählen.',
        },
        {
          title: 'Zugriff nach Ihren Regeln',
          body: 'Zuraio nutzt Ihre bestehenden Microsoft- oder Google-Benutzer und -Gruppen. Mitarbeitende sehen nur, was sie heute schon sehen dürfen.',
        },
        {
          title: 'Nichts geht ohne Ihr OK hinaus',
          body: 'Zuraio bereitet Antworten und Änderungen als Entwurf vor. Eine Person prüft und versendet.',
        },
        {
          title: 'Klar nachvollziehbar',
          body: 'Wer gefragt hat, welche Quellen genutzt wurden und wer das Ergebnis freigegeben hat.',
        },
      ],
    },
    models: {
      eyebrow: 'KI-MODELLE',
      heading: 'Nie an einen einzigen KI-Anbieter gebunden.',
      body: 'Zuraio wählt für jede Aufgabe ein passendes Modell: standardmässig in der Schweiz gehostet, andere nur, wenn Sie es zulassen. Ändert ein Anbieter Preise, Bedingungen oder Verfügbarkeit, wechseln Sie das Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen.',
      cards: [
        {
          title: 'Schweizer Standard.',
          body: 'Alltägliche Aufgaben laufen auf einem Modell mit Schweizer Hosting.',
        },
        {
          title: 'Ihre Regeln.',
          body: 'Sie legen fest, welche Daten an welches Modell dürfen, oder schalten externe Modelle ganz ab.',
        },
        {
          title: 'Klar gekennzeichnet.',
          body: 'Jedes Modell zeigt vor der Nutzung, wo es läuft.',
        },
      ],
    },
    hosting: {
      heading: 'In der Schweiz gehostet, oder noch näher.',
      intro:
        'Die meisten Betriebe nutzen unser Schweizer Hosting. Haben Sie strengere Anforderungen, planen wir die Lösung mit Ihrem IT-Partner.',
      options: [
        {
          title: 'Schweizer Hosting',
          body: 'Von uns bei Infomaniak in der Schweiz betrieben. Am wenigsten Aufwand für Ihre IT.',
          tag: 'Standard',
          tagKind: 'standard',
        },
        {
          title: 'Hybrid',
          body: 'Sensibles Wissen bleibt auf Ihren eigenen Systemen, der Rest läuft im Schweizer Hosting.',
          tag: 'Auf Anfrage',
          tagKind: 'request',
        },
        {
          title: 'Auf eigenen Servern',
          body: 'Ausgewählte Teile von Zuraio laufen in Ihrer Infrastruktur oder Private Cloud.',
          tag: 'Auf Anfrage',
          tagKind: 'request',
        },
      ],
    },
    finePrint:
      'KI kann Fehler machen. Prüfen Sie wichtige Angaben anhand der Quelle, bevor Sie sie verwenden. Zuraio unterstützt fachliches Urteil, ersetzt aber keine rechtliche, finanzielle oder andere Fachberatung. Vertragsdetails, Unterauftragsbearbeiter und Datenflüsse werden für jeden Kunden dokumentiert.',
    cta: {
      heading: 'Sie arbeiten mit einem IT-Partner?',
      body: 'Wir beziehen ihn ab dem ersten Gespräch ein. Die technischen Details findet er hier.',
      itLink: 'Für Ihren IT-Partner →',
      itHref: 'technical-architecture.html',
      demo: '30-Minuten-Demo buchen',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
  en: {
    metaTitle: 'Security and data control | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      eyebrow: 'SECURITY AND DATA CONTROL',
      headingLines: ['Your data stays yours.', 'You decide where it goes.'],
      sub: 'Hosted by Infomaniak in Switzerland. Access follows your existing permissions, and nothing is sent without your OK.',
      trust: [
        'Hosted by Infomaniak in Switzerland',
        'ISO 27001:2022',
        'Your data is never used to train AI models',
      ],
    },
    promises: {
      heading: 'What you can rely on.',
      cards: [
        {
          title: 'Your data stays yours',
          body: 'Your documents, emails and knowledge remain your property. We make no claim to them.',
        },
        {
          title: 'Swiss by default',
          body: 'Zuraio runs in Switzerland. Other AI models are labelled, and only that task\'s content goes to them, when you choose.',
        },
        {
          title: 'Access follows your rules',
          body: 'Zuraio uses your existing Microsoft or Google users and groups. People only see what they\'re already allowed to see.',
        },
        {
          title: 'Nothing goes out without your OK',
          body: 'Zuraio prepares replies and changes as drafts. A person checks and sends.',
        },
        {
          title: 'A clear record',
          body: 'Who asked, which sources were used and who approved the result.',
        },
      ],
    },
    models: {
      eyebrow: 'AI MODELS',
      heading: 'Never locked into a single AI provider.',
      body: 'Zuraio chooses a suitable model for each task: Swiss-hosted by default, others only when you allow them. If a provider changes its prices, terms or availability, you switch models. Your data and your skills stay with you.',
      cards: [
        {
          title: 'Swiss default.',
          body: 'Everyday tasks run on a Swiss-hosted model.',
        },
        {
          title: 'Your rules.',
          body: 'You decide which data may go to which model, or switch external models off completely.',
        },
        {
          title: 'Clearly labelled.',
          body: 'Every model shows where it runs before you use it.',
        },
      ],
    },
    hosting: {
      heading: 'Hosted in Switzerland, or closer still.',
      intro:
        'Most companies use our Swiss hosting. If you have stricter requirements, we design the set-up with your IT partner.',
      options: [
        {
          title: 'Swiss hosting',
          body: 'Run by us at Infomaniak in Switzerland. The least effort for your IT.',
          tag: 'Standard',
          tagKind: 'standard',
        },
        {
          title: 'Hybrid',
          body: 'Sensitive knowledge stays on your own systems; the rest runs in Swiss hosting.',
          tag: 'On request',
          tagKind: 'request',
        },
        {
          title: 'On your own servers',
          body: 'Selected parts of Zuraio run in your infrastructure or private cloud.',
          tag: 'On request',
          tagKind: 'request',
        },
      ],
    },
    finePrint:
      'AI can make mistakes. Check important information against the source before you use it. Zuraio supports professional judgement; it doesn\'t replace legal, financial or other expert advice. Contract details, sub-processors and data flows are documented for each customer.',
    cta: {
      heading: 'Working with an IT partner?',
      body: 'We involve them from the first call. They\'ll find the technical details here.',
      itLink: 'For your IT partner →',
      itHref: 'technical-architecture.html',
      demo: 'Book a 30-minute demo',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
};

export function getSecurityCopy(locale) {
  const key = locale === 'de' ? 'de' : 'en';
  return copySecurity[key];
}
