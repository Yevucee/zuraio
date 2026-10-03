/** Alternative homepage copy (DE + EN). Self-contained; no imports from copy-de/en. */

export const ALT_HOME_LOCALES = ['de', 'en'];

const FAQ_PERMISSION_DE =
  'Zuraio ist darauf ausgelegt, die bestehenden Zugriffsregeln Ihres Unternehmens zu berücksichtigen. Mitarbeitende sollen nur Informationen verwenden können, für die sie eine entsprechende Berechtigung haben. Die genaue Umsetzung hängt von den angebundenen Systemen und der vereinbarten Konfiguration ab.';

const FAQ_PERMISSION_EN =
  'Zuraio is designed to respect your company\'s existing access rules. Employees should only be able to use information they are permitted to access. The exact implementation depends on connected systems and the agreed configuration.';

const FAQ_AUTO_DE =
  'Zuraio kann Antworten, Dokumente und nächste Schritte zur Prüfung vorbereiten. Welche Aktionen automatisch ausgeführt werden dürfen, richtet sich nach den Berechtigungen, Freigaberegeln und der gewählten Konfiguration Ihres Unternehmens.';

const FAQ_AUTO_EN =
  'Zuraio can prepare answers, drafts and proposed actions for review. Which actions may be executed automatically depends on the component, permissions, approval rules and selected configuration.';

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
      heading: 'Ab dem ersten Tag bereit. Danach für Sie gemacht.',
      intro:
        'Starten Sie mit fertigen Skills. Danach entwickeln wir mit Ihrem Team die Skills, die nur Ihr Betrieb hat: Ihre Offerten, Ihr Ton, Ihre Abläufe.',
      readyMade: [
        {
          title: 'Kunden und Mieter beantworten',
          body: 'Entwirft eine Antwort aus Korrespondenz, Verträgen und Ihren Konditionen',
          sources: 'E-Mails · Verträge · Ihre Konditionen',
        },
        {
          title: 'Sitzung vorbereiten',
          body: 'Einseitiges Briefing: letzte E-Mails, offene Punkte, Dokumente',
          sources: 'E-Mails · Kalender · Dokumente',
        },
        {
          title: 'Projektstatus',
          body: 'Wo es steht, was offen ist und wer wartet, aus E-Mails und Dateien',
          sources: 'E-Mails · Dateien · Aufgaben',
        },
        {
          title: 'Verlauf zusammenfassen',
          body: 'Lange E-Mail-Verläufe in fünf Zeilen, Entscheide hervorgehoben',
          sources: 'E-Mails',
        },
        {
          title: 'Aufgaben erfassen',
          body: 'Macht aus Sitzung oder E-Mail Aufgaben mit Verantwortlichen',
          sources: 'Sitzungen · E-Mails · Aufgaben',
        },
        {
          title: 'Offerte vorbereiten',
          body: 'Entwurf aus Anfrage und Ihrer Produkt- oder Preisliste',
          sources: 'Anfrage · Preisliste · bexio',
        },
      ],
      band:
        'Gemeinsam mit Ihnen entwickelt: «Offerte in unserem Format, mit unseren Rabattregeln» · «Antwort an Mieter in unserem Ton, mit unseren Standardklauseln» · «Monatsreport, so wie ihn unsere Partner mögen»',
      footnoteLabel: 'Mit Ihnen entwickelt',
      link: 'Alle Skills ansehen →',
      linkHref: '../how-it-helps.html#skills',
      presentationImageAlt:
        'Zuraio erstellt aus der Firmenvorlage eine Verkaufspräsentation mit 12 Folien und listet die Lücken auf, die vor dem Versand zu füllen sind',
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
      steps: [
        { title: 'Gespräch (30 Min.).', body: 'Wir wählen eine Aufgabe, die sich lohnt.' },
        {
          title: 'Einrichtungs-Workshop',
          titleMeta: '3 Std. · CHF 1\'490',
          body: 'Wir entwickeln mit Ihrem Team Ihren ersten eigenen Skill, mit Ihren Daten.',
        },
        { title: 'Nutzen und verfeinern.', body: 'Nach 2 Wochen schauen wir gemeinsam darauf.' },
        { title: 'Entscheiden.', body: 'Behalten, ausbauen oder stoppen.' },
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
    faq: {
      items: [
        {
          id: 'chatgpt-copilot',
          q: 'Warum nicht einfach ChatGPT oder Copilot?',
          a: 'Sie müssen sich nicht entscheiden. ChatGPT kennt Ihr Unternehmen nur, wenn jemand den Kontext jedes Mal teilt. Copilot kennt Ihre Microsoft-365-Welt gut; für andere Systeme braucht es meist Konnektoren, die Ihre IT aufbaut. Zuraio ist bereits mit den Systemen verbunden, die Schweizer KMU nutzen, etwa bexio, Abacus und Proffix, und mit Skills, die wir mit Ihrem Team aufbauen. Zuraio ist modellneutral: standardmässig Schweizer Modelle, GPT oder Claude für Aufgaben, die Ihr Unternehmen freigibt.',
        },
        {
          q: 'Bleiben unsere Daten in der Schweiz?',
          a: 'Ja, standardmässig. Die Plattform und Ihre Firmendaten werden bei Infomaniak in der Schweiz gehostet, und auch das Standardmodell läuft in der Schweiz. Für einzelne Aufgaben können Sie ein anderes KI-Modell wählen. Jedes ist gekennzeichnet, damit Sie sehen, wo es arbeitet. Wählen Sie ein Modell ausserhalb der Schweiz, wird nur der Inhalt dieser Aufgabe übermittelt. So entscheiden Sie selbst, was die Schweiz verlässt und was nicht.',
        },
        {
          q: 'Was passiert, wenn ein KI-Anbieter Preise oder Bedingungen ändert?',
          a: 'Sie wechseln direkt in Zuraio auf ein anderes Modell. Ihre Firmendaten, Ihr Firmenwissen und Ihre Skills bleiben unverändert, weil sie bei Zuraio in der Schweiz liegen und nicht beim Modellanbieter.',
        },
        {
          q: 'Können Mitarbeitende Informationen sehen, die sie nicht sehen dürfen?',
          a: FAQ_PERMISSION_DE,
        },
        {
          q: 'Versendet Zuraio etwas automatisch?',
          a: FAQ_AUTO_DE,
        },
        {
          q: 'Was kostet der Einstieg?',
          aHtml:
            'Für Einzelpersonen ab CHF 19 pro Monat. Firmenpläne ab CHF 225 pro Monat für bis zu 5 Mitarbeitende, inklusive Konnektoren und Standard-KI-Nutzung. Der Einrichtungs-Workshop mit Ihrem ersten eigenen Skill kostet CHF 1\'490; die Hälfte rechnen wir an, wenn Sie innert 30 Tagen einen Jahresplan wählen. Bei jährlicher Zahlung sind zwei Monate gratis. Alle Preise exkl. MWST.',
        },
      ],
      linkAll: 'Alle Fragen →',
      linkIt: 'Fragen, die Ihre IT stellen wird →',
      linkItHref: '../faq.html#it-questions',
      moreLabel: 'Weitere Fragen',
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
      heading: 'Ready from day one. Then made for you.',
      intro:
        'Start with ready-made skills. Then we sit down with your team and build the ones only your company has: your offers, your tone, your processes.',
      readyMade: [
        {
          title: 'Reply to clients and tenants',
          body: 'Drafts an answer using the correspondence, contracts and your terms',
          sources: 'Email · Contracts · Your terms',
        },
        {
          title: 'Prepare a meeting',
          body: 'One-page briefing on the client: last emails, open points, documents',
          sources: 'Email · Calendar · Documents',
        },
        {
          title: 'Project status',
          body: 'Where things stand, what\'s open, who\'s waiting, from emails and files',
          sources: 'Email · Files · Tasks',
        },
        {
          title: 'Summarise a thread',
          body: 'Long email chains in five lines, with the decisions highlighted',
          sources: 'Email',
        },
        {
          title: 'Capture tasks',
          body: 'Turns a meeting or email into tasks with owners',
          sources: 'Meetings · Email · Tasks',
        },
        {
          title: 'Prepare a quote',
          body: 'Draft offer from the enquiry and your product or price list',
          sources: 'Enquiry · Price list · bexio',
        },
      ],
      band:
        'Built with you: "Quote in our house format with our discount rules" · "Reply to tenants in our tone, with our standard clauses" · "Monthly client report the way our partners like it"',
      footnoteLabel: 'Built with you',
      link: 'See all skills →',
      linkHref: '../how-it-helps.html#skills',
      presentationImageAlt:
        'Zuraio builds a 12-slide sales presentation from the company\'s own template and lists the gaps to fill before sending',
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
      steps: [
        { title: 'Talk (30 min).', body: 'We pick one task worth improving.' },
        {
          title: 'Set-up workshop',
          titleMeta: '3 h · CHF 1,490',
          body: 'We build your first bespoke skill with your team, on your data.',
        },
        { title: 'Use and refine.', body: 'We check in after 2 weeks.' },
        { title: 'Decide.', body: 'Keep it, expand it or stop.' },
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
    faq: {
      items: [
        {
          id: 'chatgpt-copilot',
          q: 'Why not just use ChatGPT or Copilot?',
          a: 'You don\'t have to choose. ChatGPT only knows your company if someone shares the context each time. Copilot knows your Microsoft 365 world well, and reaching other systems usually needs connectors your IT builds. Zuraio comes connected to the systems Swiss SMEs use, like bexio, Abacus and Proffix, with skills we build with your team. It is model neutral: Swiss models by default, and GPT or Claude for tasks your company approves.',
        },
        {
          q: 'Is our data kept in Switzerland?',
          a: 'Yes, by default. The platform and your company data are hosted by Infomaniak in Switzerland, and the default AI model runs in Switzerland too. For individual tasks you can choose a different model, and each one is labelled so you can see where it runs. If you choose a model outside Switzerland, only the content of that task is sent. So you decide what leaves Switzerland, and what doesn\'t.',
        },
        {
          q: 'What happens if an AI provider changes its prices or terms?',
          a: 'You switch to another model directly in Zuraio. Your company data, knowledge and skills don\'t change, because they\'re stored in Switzerland with Zuraio, not with the model provider.',
        },
        {
          q: 'Can employees see information they shouldn\'t?',
          a: FAQ_PERMISSION_EN,
        },
        {
          q: 'Does Zuraio send anything automatically?',
          a: FAQ_AUTO_EN,
        },
        {
          q: 'What does it cost to start?',
          aHtml:
            'Individuals from CHF 19 per month. Company plans from CHF 225 per month for up to 5 employees, including connectors and standard AI usage. The set-up workshop with your first bespoke skill costs CHF 1,490, and we credit half of it if you choose an annual plan within 30 days. Pay yearly and get two months free. All prices excl. VAT.',
        },
      ],
      linkAll: 'View all questions →',
      linkIt: 'Questions your IT team will ask →',
      linkItHref: '../faq.html#it-questions',
      moreLabel: 'More questions',
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
