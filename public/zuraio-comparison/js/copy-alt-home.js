/** Alternative homepage copy (DE + EN). Self-contained; no imports from copy-de/en. */

export const ALT_HOME_LOCALES = ['de', 'en'];

export const copyAltHome = {
  de: {
    metaTitle: 'Zuraio | Alternative Startseite',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: 'Demo buchen',
    },
    hero: {
      eyebrow: 'KI-Assistent für Schweizer KMU',
      headlineLines: [
        'KI, die Ihr Unternehmen kennt.',
        'Ihre Daten bleiben in der Schweiz.',
      ],
      variants: {
        a: 'KI, die Ihr Unternehmen kennt. Ihre Daten bleiben in der Schweiz.',
        c: 'Ihr Team nutzt KI längst. Wissen Sie, wo Ihre Daten landen?',
        h: 'Ein KI-Assistent, eingerichtet für Ihren Betrieb. Von Menschen, die sich die Zeit nehmen, ihn zu verstehen.',
      },
      sub: 'Zuraio beantwortet E-Mails, bereitet Sitzungen vor und findet, was Sie im Wissen Ihres Unternehmens brauchen, immer mit Quellen.',
      cta: '30-Minuten-Demo buchen',
      ctaMicro: 'Mit Ihren eigenen Beispielen. Unverbindlich.',
      trust: [
        'Gehostet bei Infomaniak in der Schweiz',
        'ISO 27001:2022',
        'Arbeitet mit bexio, Abacus und Microsoft 365',
      ],
      imageAlt:
        'Zuraio entwirft aus drei Quellen eine Antwort auf eine Kunden-E-Mail und markiert einen fehlenden Preis zur Prüfung vor dem Versand',
    },
    reasons: {
      cards: [
        {
          title: 'Kennt Ihren Betrieb bereits.',
          body: 'Antworten aus Ihren E-Mails, Dokumenten und Systemen, jede mit Quelle.',
        },
        {
          title: 'Sie entscheiden, wohin Ihre Daten gehen.',
          body: 'Jedes KI-Modell ist gekennzeichnet. Was die Schweiz verlässt, entscheiden Sie.',
        },
        {
          title: 'Skills, gemeinsam mit Ihnen entwickelt.',
          body: 'Fertige Skills ab dem ersten Tag. Danach entwickeln wir mit Ihrem Team Ihre eigenen.',
        },
      ],
    },
    demo: {
      heading: 'So beantwortet Zuraio eine Kundenanfrage.',
      caption:
        'Zuraio entwirft die Antwort aus den letzten E-Mails, dem Vertrag und bexio, mit allen Quellen. Ihr Team entscheidet.',
    },
    skills: {
      eyebrow: 'FÜR ARCHITEKTUR- UND INGENIEURBÜROS, TREUHÄNDER UND IMMOBILIENVERWALTUNGEN',
      eyebrowShort: 'FÜR ARCHITEKTEN, TREUHÄNDER UND VERWALTUNGEN',
      heading: 'Ab dem ersten Tag nützlich. Dann so eingerichtet, wie Sie arbeiten.',
      intro:
        'Zuraio arbeitet mit Skills: Aufgaben, die Zuraio erledigen kann. Einige sind von Anfang an bereit. Andere bauen wir mit Ihrem Team, aus Ihren Vorlagen, Regeln und Ihrem Ton.',
      footer: 'Wir beginnen mit einer Aufgabe, die Ihnen wichtig ist.',
      link: 'Alle Skills ansehen →',
      linkHref: '../how-it-helps.html#skills',
    },
    integrations: {
      heading: 'Arbeitet mit den Systemen, die Schweizer KMU wirklich nutzen.',
      line: 'Ihr Team arbeitet weiter in Microsoft Outlook und Microsoft Teams.',
      link: 'Alle Integrationen →',
    },
    sameQuestion: {
      eyebrow: 'DAS WISSEN IHRES UNTERNEHMENS',
      heading: 'Gleiche Frage. Andere Antwort.',
      intro: 'Allgemeine KI-Tools sind klug. Aber sie wissen nur, was sie sehen.',
      questionLabel: 'Die Frage',
      question:
        'Hat die Muster AG die letzte Rechnung bezahlt, und was haben wir zum Jahresabschluss vereinbart?',
      leftLabel: 'Ohne Zugriff auf Ihre Systeme',
      leftAnswer:
        'Ich habe keinen Zugriff auf Ihre Rechnungen oder Ihre Vereinbarungen mit der Muster AG.',
      rightLabel: 'Zuraio',
      rightAnswer:
        'Die Rechnung vom 30. September ist in bexio offen (fällig am 30. Oktober). Jahresabschluss bis 30. April, zum Pauschalpreis; die Lohnbuchhaltung wird separat verrechnet.',
      sourcesLabel: 'Quellen',
      sourceChips: ['bexio · Rechnung 2026-118', 'Mandatsvertrag · 12. März'],
      closing: 'Der Unterschied ist nicht die KI. Sondern was sie über Ihr Unternehmen weiss.',
      link: 'So unterscheiden wir uns von ChatGPT und Copilot →',
      linkAnchor: 'chatgpt-copilot',
    },
    aiTrademark:
      'ChatGPT ist eine Marke von OpenAI. Copilot und Microsoft 365 sind Marken von Microsoft. Claude ist eine Marke von Anthropic.',
    control: {
      eyebrow: 'DATENKONTROLLE',
      heading: 'Nichts verlässt den Betrieb ohne Ihr OK.',
      intro: 'Standardmässig Schweiz. Nie abhängig von einem einzigen KI-Anbieter.',
      introSupport:
        'Ändert ein Anbieter Preise, Bedingungen oder Verfügbarkeit, wechseln Sie das Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen.',
      cards: [
        {
          title: 'Schweizer Hosting, Ihre Wahl der KI',
          body: 'Gehostet bei Infomaniak in der Schweiz (ISO 27001:2022). Andere KI-Modelle sind gekennzeichnet; nur der Inhalt dieser Aufgabe geht dorthin.',
        },
        {
          title: 'Zugriff nach Ihren Regeln',
          body: 'Mitarbeitende sehen nur, was sie schon heute sehen dürfen.',
        },
        {
          title: 'Jede Antwort zeigt ihre Quelle',
          body: 'Prüfen, bevor man sich darauf verlässt.',
        },
        {
          title: 'Klar nachvollziehbar',
          body: 'Wer gefragt hat, welche Quellen genutzt wurden, wer freigegeben hat.',
        },
      ],
      note: 'Sie arbeiten mit einem IT-Partner? Wir beziehen ihn ab dem ersten Gespräch ein, auch für eigene Server oder ein bestimmtes KI-Modell.',
      itLink: 'Für Ihren IT-Partner: technische Details →',
      itHref: '../technical-architecture.html',
    },
    start: {
      heading: 'Klein anfangen. Gemeinsam aufbauen.',
      cta: '30-Minuten-Gespräch buchen',
      steps: [
        {
          title: 'Gespräch',
          meta: '30 Min.',
          body: 'Wir wählen eine Aufgabe, die sich lohnt.',
        },
        {
          title: 'Einrichtungs-Workshop',
          meta: '3 Stunden',
          body: 'Wir bauen mit Ihrem Team den ersten Skill, mit Ihren Daten.',
        },
        {
          title: 'Nutzen und verfeinern',
          meta: '2 Wochen',
          body: 'Ihr Team arbeitet damit. Danach schauen wir es gemeinsam an.',
        },
        {
          title: 'Entscheiden',
          meta: 'Ihre Wahl',
          body: 'Behalten, ausbauen oder aufhören.',
          tone: 'exit',
        },
      ],
    },
    team: {
      heading: 'Entwickelt in der Schweiz. Von Menschen, die Ihnen antworten.',
      body: 'Wir haben Zuraio gebaut, weil KI zwar Antworten schreiben konnte, aber unser Firmenwissen, unsere Zugriffsregeln und unsere Arbeitsweise nicht verstand.',
      contact: 'Schreiben Sie uns direkt. Sie erhalten eine Antwort von einem von uns.',
      contactFollowUp: 'Wir antworten in Tagen, nicht in Wochen.',
      people: [
        { name: 'Michael C. Wili', role: '', email: 'michael.wili@zuraio.ch', img: 'Michael' },
        { name: 'Marcelo Zanette', role: '', email: 'marcelo.zanette@zuraio.ch', img: 'Marcelo' },
        { name: 'Samuel A. Polley', role: '', email: 'samuel.polley@zuraio.ch', img: 'Samuel' },
        { name: 'Roland Steiner', role: '', email: 'roland.steiner@zuraio.ch', img: 'Roland' },
      ],
    },
    closing: {
      heading: 'Was könnte Zuraio Ihnen abnehmen?',
      cta: '30-Minuten-Demo buchen',
      tagline: 'Ihr Betrieb. Ihre Informationen. Ihr OK.',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
  en: {
    metaTitle: 'Zuraio | Alternative homepage',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a demo',
    },
    hero: {
      eyebrow: 'AI assistant for Swiss SMEs',
      headlineLines: [
        'AI that knows your company.',
        'Your data stays in Switzerland.',
      ],
      variants: {
        a: 'AI that knows your company. Your data stays in Switzerland.',
        c: 'Your team already uses AI. Do you know where your data goes?',
        h: 'An AI assistant set up around your business, by people who take the time to understand it.',
      },
      sub: 'Zuraio answers emails, prepares meetings and finds what you need in your company knowledge, always with sources.',
      cta: 'Book a 30-minute demo',
      ctaMicro: 'With your own examples. No commitment.',
      trust: [
        'Hosted by Infomaniak in Switzerland',
        'ISO 27001:2022',
        'Works with bexio, Abacus and Microsoft 365',
      ],
      imageAlt:
        'Zuraio drafts a reply to a client email from three sources and flags a missing price for you to check before sending',
    },
    reasons: {
      cards: [
        {
          title: 'Already knows your business.',
          body: 'Answers from your emails, documents and systems, each with its source.',
        },
        {
          title: 'You decide where your data goes.',
          body: 'Every AI model is labelled. You decide what leaves Switzerland.',
        },
        {
          title: 'Skills built with you.',
          body: 'Ready-made skills from day one. Then we build your own with your team.',
        },
      ],
    },
    demo: {
      heading: 'Watch Zuraio answer a customer email.',
      caption:
        'Zuraio drafts the reply from the latest emails, the contract and bexio, with every source shown. Your team decides.',
    },
    skills: {
      eyebrow: 'FOR ARCHITECTURE AND ENGINEERING OFFICES, FIDUCIARIES AND PROPERTY MANAGERS',
      eyebrowShort: 'BUILT FOR ARCHITECTS, FIDUCIARIES AND PROPERTY MANAGERS',
      heading: 'Useful from day one. Then set up the way you work.',
      intro:
        'Zuraio works with skills: tasks it knows how to do. Some are ready from the start. Others we build with your team, from your templates, rules and tone.',
      footer: 'We start with one task that matters to you.',
      link: 'See all skills →',
      linkHref: '../how-it-helps.html#skills',
    },
    integrations: {
      heading: 'Works with the systems Swiss SMEs actually use.',
      line: 'Your team keeps working in Microsoft Outlook and Microsoft Teams.',
      link: 'All integrations →',
    },
    sameQuestion: {
      eyebrow: 'YOUR COMPANY\'S KNOWLEDGE',
      heading: 'Same question. Different answer.',
      intro: 'General AI tools are smart. But they only know what they can see.',
      questionLabel: 'The question',
      question:
        'Has Muster AG paid the last invoice, and what did we agree about the year-end close?',
      leftLabel: 'Without access to your systems',
      leftAnswer:
        'I don\'t have access to your invoices or your agreements with Muster AG.',
      rightLabel: 'Zuraio',
      rightAnswer:
        'The invoice from 30 September is open in bexio (due 30 October). Year-end close by 30 April, at a fixed fee; payroll is billed separately.',
      sourcesLabel: 'Sources',
      sourceChips: ['bexio · Invoice 2026-118', 'Engagement letter · 12 March'],
      closing: 'The difference isn\'t the AI. It\'s what the AI knows about your company.',
      link: 'See how we compare to ChatGPT and Copilot →',
      linkAnchor: 'chatgpt-copilot',
    },
    aiTrademark:
      'ChatGPT is a trademark of OpenAI. Copilot and Microsoft 365 are trademarks of Microsoft. Claude is a trademark of Anthropic.',
    control: {
      eyebrow: 'DATA CONTROL',
      heading: 'Nothing leaves your company without your OK.',
      intro: 'Swiss by default. Never locked into a single AI provider.',
      introSupport:
        'If a provider changes its prices, terms or availability, you switch models. Your data and your skills stay with you.',
      cards: [
        {
          title: 'Swiss hosting, your choice of AI',
          body: 'Hosted by Infomaniak in Switzerland (ISO 27001:2022). Other AI models are labelled, and only that task\'s content goes to them.',
        },
        {
          title: 'Access follows your rules',
          body: 'People only see what they\'re already allowed to see.',
        },
        {
          title: 'Every answer shows its source',
          body: 'Check before you rely on it.',
        },
        {
          title: 'A clear record',
          body: 'Who asked, which sources were used, who approved the result.',
        },
      ],
      note: 'Working with an IT partner? We involve them from the first call, including for on-premise options or a specific AI model.',
      itLink: 'For your IT partner: technical details →',
      itHref: '../technical-architecture.html',
    },
    start: {
      heading: 'Start small. Build it together.',
      cta: 'Book the 30-minute talk',
      steps: [
        {
          title: 'Talk',
          meta: '30 min',
          body: 'We pick one task worth improving.',
        },
        {
          title: 'Set-up workshop',
          meta: '3 hours',
          body: 'We build your first skill with your team, on your data.',
        },
        {
          title: 'Use and refine',
          meta: '2 weeks',
          body: 'Your team works with it. Then we review it together.',
        },
        {
          title: 'Decide',
          meta: 'Your call',
          body: 'Keep it, expand it or stop.',
          tone: 'exit',
        },
      ],
    },
    team: {
      heading: 'Developed in Switzerland, by people who answer.',
      body: 'We built Zuraio because AI could write answers but didn\'t understand our company knowledge, access rules or the way we work.',
      contact: 'Write to us directly. You\'ll get a reply from one of us.',
      contactFollowUp: 'We reply in days, not weeks.',
      people: [
        { name: 'Michael C. Wili', role: '', email: 'michael.wili@zuraio.ch', img: 'Michael' },
        { name: 'Marcelo Zanette', role: '', email: 'marcelo.zanette@zuraio.ch', img: 'Marcelo' },
        { name: 'Samuel A. Polley', role: '', email: 'samuel.polley@zuraio.ch', img: 'Samuel' },
        { name: 'Roland Steiner', role: '', email: 'roland.steiner@zuraio.ch', img: 'Roland' },
      ],
    },
    closing: {
      heading: 'What could Zuraio take off your plate?',
      cta: 'Book a 30-minute demo',
      tagline: 'Your company. Your information. Your OK.',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
};

export function getAltHomeCopy(locale) {
  const key = locale === 'en' ? 'en' : 'de';
  return copyAltHome[key] ?? copyAltHome.de;
}
