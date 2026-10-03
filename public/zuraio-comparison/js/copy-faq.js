/** FAQ page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §6 */

export const FAQ_LOCALES = ['de', 'en'];

/** Homepage preview FAQ ids (shared text with faq.html). */
export const FAQ_HOME_PREVIEW_ITEM_IDS = [
  'chatgpt-copilot',
  'is-our-data-kept-in-switzerland',
  'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
  'can-employees-see-information-they-shouldnt',
  'does-zuraio-send-anything-automatically',
];

export const copyFaq = {
  en: {
    metaTitle: 'FAQ | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      heading: 'Questions we\'re often asked.',
      sub: 'Short, honest answers. If yours isn\'t here, write to us.',
    },
    groups: [
      {
        id: 'about-zuraio',
        heading: 'About Zuraio',
        items: [
          {
            id: 'chatgpt-copilot',
            q: 'Why not just use ChatGPT or Copilot?',
            a: 'You don\'t have to choose. ChatGPT only knows your company if someone shares the context each time. Copilot knows your Microsoft 365 world well, and reaching other systems usually needs connectors your IT builds. Zuraio comes connected to the systems Swiss SMEs use, like bexio, Abacus and Proffix, with skills we build with your team. It is model neutral: Swiss models by default, and GPT or Claude for tasks your company approves.',
          },
          {
            id: 'what-is-zuraio',
            q: 'What is Zuraio?',
            a: 'An AI assistant for Swiss SMEs. It answers emails, prepares meetings and finds information in your company knowledge, with sources, hosted in Switzerland. It works with skills: tasks it knows how to do your way.',
          },
          {
            id: 'who-is-zuraio-for',
            q: 'Who is Zuraio for?',
            a: 'Swiss companies with roughly 5 to 250 employees whose knowledge is spread across email, documents and business software. Many of our first conversations are with architecture and engineering offices, fiduciaries and property managers.',
          },
          {
            id: 'which-software-does-zuraio-work-with',
            q: 'Which software does Zuraio work with?',
            a: 'Swiss business software such as bexio, Klara, Proffix and Abacus, Microsoft 365 and Google Workspace, CRM systems, and technical software such as AutoCAD, Revit, ArchiCAD and Rhino. The full list is on our Integrations page.',
          },
          {
            id: 'how-do-we-get-started',
            q: 'How do we get started?',
            a: 'With a 30-minute talk where we pick one task worth improving. Then a set-up workshop where we build your first skill with your team, a check-in after two weeks, and you decide whether to continue.',
          },
          {
            id: 'what-is-a-starter-partner',
            q: 'What is a starter partner?',
            a: 'One of our first customers. Starter partners work directly with the founders, get early access and help decide what we build next. Commercial terms are agreed individually.',
          },
        ],
      },
      {
        id: 'data-and-control',
        heading: 'Data and control',
        items: [
          {
            id: 'is-our-data-kept-in-switzerland',
            q: 'Is our data kept in Switzerland?',
            a: 'Yes, by default. Zuraio and your company data are hosted by Infomaniak in Switzerland, and the default AI model runs in Switzerland too. For individual tasks you can choose another model; each one is labelled with where it runs, and only that task\'s content is sent.',
          },
          {
            id: 'is-our-data-used-to-train-ai-models',
            q: 'Is our data used to train AI models?',
            a: 'No. Your data is never used to train AI models.',
          },
          {
            id: 'can-employees-see-information-they-shouldnt',
            q: 'Can employees see information they shouldn\'t?',
            a: 'No. Zuraio uses your existing permissions from Microsoft or Google. People only see what they\'re already allowed to see.',
          },
          {
            id: 'does-zuraio-send-anything-automatically',
            q: 'Does Zuraio send anything automatically?',
            a: 'No. Replies and changes are prepared as drafts. A person checks them and decides.',
          },
          {
            id: 'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
            q: 'What happens if an AI provider changes its prices or terms?',
            a: 'You switch to another model. Your data and your skills stay with you, because they\'re kept separate from the model.',
          },
          {
            id: 'can-we-see-which-sources-were-used',
            q: 'Can we see which sources were used?',
            a: 'Yes. Answers based on your company knowledge show the documents or systems they came from.',
          },
        ],
      },
      {
        id: 'for-your-it-team',
        heading: 'For your IT team',
        items: [
          {
            id: 'where-is-our-data-stored',
            q: 'Where is our data stored?',
            a: 'In Swiss hosting at Infomaniak (ISO 27001:2022). Hybrid and on-premise set-ups are possible on request.',
          },
          {
            id: 'can-external-ai-models-be-switched-off',
            q: 'Can external AI models be switched off?',
            a: 'Yes. You decide which models are allowed, and you can limit Zuraio to Swiss-hosted models only.',
          },
          {
            id: 'are-our-chats-with-zuraio-saved',
            q: 'Are our chats with Zuraio saved?',
            a: 'Yes, inside your company\'s Zuraio, so people can come back to earlier work. Chats belong to the employee and to your company. They aren\'t shared outside your company and are never used to train AI models.',
          },
          {
            id: 'are-there-audit-records',
            q: 'Are there audit records?',
            a: 'Yes. Requests, sources, actions and approvals are recorded according to the audit set-up we agree with you.',
          },
          {
            id: 'how-do-you-connect-to-our-systems',
            q: 'How do you connect to our systems?',
            a: 'Through ready connectors, APIs, MCP or custom connectors. The Integrations page lists the systems we connect to.',
          },
        ],
      },
    ],
    itTeamLink: 'Questions for your IT team? See the technical details →',
    cta: {
      heading: 'Still have a question?',
      body: 'Write to us. One of the founders will get back to you in days, not weeks.',
      button: 'Contact us',
      buttonRoute: 'contact',
    },
    homePreview: {
      moreLabel: 'More questions',
      linkAll: 'View all questions →',
      linkIt: 'Questions your IT team will ask →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  de: {
    metaTitle: 'FAQ | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      heading: 'Fragen, die man uns oft stellt.',
      sub: 'Kurze, ehrliche Antworten. Fehlt Ihre Frage, schreiben Sie uns.',
    },
    groups: [
      {
        id: 'about-zuraio',
        heading: 'Über Zuraio',
        items: [
          {
            id: 'chatgpt-copilot',
            q: 'Warum nicht einfach ChatGPT oder Copilot?',
            a: 'Sie müssen sich nicht entscheiden. ChatGPT kennt Ihr Unternehmen nur, wenn jemand den Kontext jedes Mal teilt. Copilot kennt Ihre Microsoft-365-Welt gut; für andere Systeme braucht es meist Konnektoren, die Ihre IT aufbaut. Zuraio ist bereits mit den Systemen verbunden, die Schweizer KMU nutzen, etwa bexio, Abacus und Proffix, und mit Skills, die wir mit Ihrem Team aufbauen. Zuraio ist modellneutral: standardmässig Schweizer Modelle, GPT oder Claude für Aufgaben, die Ihr Unternehmen freigibt.',
          },
          {
            id: 'what-is-zuraio',
            q: 'Was ist Zuraio?',
            a: 'Ein KI-Assistent für Schweizer KMU. Er beantwortet E-Mails, bereitet Sitzungen vor und findet Informationen in Ihrem Firmenwissen, mit Quellen und in der Schweiz gehostet. Er arbeitet mit Skills: Aufgaben, die er auf Ihre Art erledigt.',
          },
          {
            id: 'who-is-zuraio-for',
            q: 'Für wen ist Zuraio?',
            a: 'Für Schweizer Betriebe mit rund 5 bis 250 Mitarbeitenden, deren Wissen in E-Mails, Dokumenten und Geschäftssoftware verteilt ist. Viele unserer ersten Gespräche führen wir mit Architektur- und Ingenieurbüros, Treuhänderinnen und Treuhändern sowie Liegenschaftsverwaltungen.',
          },
          {
            id: 'which-software-does-zuraio-work-with',
            q: 'Mit welcher Software arbeitet Zuraio?',
            a: 'Mit Schweizer Geschäftssoftware wie bexio, Klara, Proffix und Abacus, mit Microsoft 365 und Google Workspace, mit CRM-Systemen und mit technischer Software wie AutoCAD, Revit, ArchiCAD und Rhino. Die vollständige Liste finden Sie auf unserer Seite Integrationen.',
          },
          {
            id: 'how-do-we-get-started',
            q: 'Wie fangen wir an?',
            a: 'Mit einem 30-minütigen Gespräch, in dem wir eine Aufgabe auswählen, die sich lohnt. Danach folgen ein Einrichtungs-Workshop, in dem wir mit Ihrem Team den ersten Skill entwickeln, und nach zwei Wochen eine Zwischenbilanz. Dann entscheiden Sie, ob es weitergeht.',
          },
          {
            id: 'what-is-a-starter-partner',
            q: 'Was ist ein Starter-Partner?',
            a: 'Einer unserer ersten Kunden. Starter-Partner arbeiten direkt mit den Gründern, erhalten frühen Zugang und bestimmen mit, was wir als Nächstes bauen. Die kommerziellen Bedingungen vereinbaren wir individuell.',
          },
        ],
      },
      {
        id: 'data-and-control',
        heading: 'Daten und Kontrolle',
        items: [
          {
            id: 'is-our-data-kept-in-switzerland',
            q: 'Bleiben unsere Daten in der Schweiz?',
            a: 'Ja, standardmässig. Zuraio und Ihre Firmendaten werden bei Infomaniak in der Schweiz gehostet, und auch das Standardmodell läuft in der Schweiz. Für einzelne Aufgaben können Sie ein anderes Modell wählen. Jedes ist gekennzeichnet, damit Sie sehen, wo es arbeitet, und nur der Inhalt dieser Aufgabe wird übermittelt.',
          },
          {
            id: 'is-our-data-used-to-train-ai-models',
            q: 'Werden unsere Daten zum Trainieren von KI-Modellen verwendet?',
            a: 'Nein. Ihre Daten werden nie zum Trainieren von KI-Modellen verwendet.',
          },
          {
            id: 'can-employees-see-information-they-shouldnt',
            q: 'Sehen Mitarbeitende Informationen, die sie nicht sehen dürfen?',
            a: 'Nein. Zuraio übernimmt Ihre bestehenden Berechtigungen von Microsoft oder Google. Mitarbeitende sehen nur, was sie heute schon sehen dürfen.',
          },
          {
            id: 'does-zuraio-send-anything-automatically',
            q: 'Versendet Zuraio etwas automatisch?',
            a: 'Nein. Antworten und Änderungen werden als Entwurf vorbereitet. Eine Person prüft sie und entscheidet.',
          },
          {
            id: 'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
            q: 'Was passiert, wenn ein KI-Anbieter Preise oder Bedingungen ändert?',
            a: 'Sie wechseln zu einem anderen Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen, weil sie vom Modell getrennt sind.',
          },
          {
            id: 'can-we-see-which-sources-were-used',
            q: 'Sehen wir, welche Quellen verwendet wurden?',
            a: 'Ja. Antworten aus Ihrem Firmenwissen zeigen die Dokumente oder Systeme, aus denen sie stammen.',
          },
        ],
      },
      {
        id: 'for-your-it-team',
        heading: 'Für Ihr IT-Team',
        items: [
          {
            id: 'where-is-our-data-stored',
            q: 'Wo werden unsere Daten gespeichert?',
            a: 'Im Schweizer Hosting bei Infomaniak (ISO 27001:2022). Hybride Lösungen oder der Betrieb auf eigenen Servern sind auf Anfrage möglich.',
          },
          {
            id: 'can-external-ai-models-be-switched-off',
            q: 'Lassen sich externe KI-Modelle abschalten?',
            a: 'Ja. Sie legen fest, welche Modelle erlaubt sind, und können Zuraio auf Modelle mit Schweizer Hosting beschränken.',
          },
          {
            id: 'are-our-chats-with-zuraio-saved',
            q: 'Werden unsere Chats mit Zuraio gespeichert?',
            a: 'Ja, in der Zuraio-Umgebung Ihres Betriebs, damit man auf frühere Arbeit zurückgreifen kann. Chats gehören der jeweiligen Person und Ihrem Betrieb. Sie werden nicht ausserhalb Ihres Betriebs geteilt und nie zum Trainieren von KI-Modellen verwendet.',
          },
          {
            id: 'are-there-audit-records',
            q: 'Gibt es Audit-Protokolle?',
            a: 'Ja. Anfragen, Quellen, Aktionen und Freigaben werden gemäss der mit Ihnen vereinbarten Audit-Konfiguration festgehalten.',
          },
          {
            id: 'how-do-you-connect-to-our-systems',
            q: 'Wie verbinden Sie sich mit unseren Systemen?',
            a: 'Über fertige Connectoren, APIs, MCP oder eigene Connectoren. Die Seite Integrationen listet die Systeme auf, mit denen wir uns verbinden.',
          },
        ],
      },
    ],
    itTeamLink: 'Fragen für Ihr IT-Team? Technische Details ansehen →',
    cta: {
      heading: 'Noch eine Frage?',
      body: 'Schreiben Sie uns. Einer unserer Gründer meldet sich in Tagen, nicht in Wochen.',
      button: 'Kontakt',
      buttonRoute: 'contact',
    },
    homePreview: {
      moreLabel: 'Weitere Fragen',
      linkAll: 'Alle Fragen →',
      linkIt: 'Fragen, die Ihre IT stellen wird →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
};

export function getFaqCopy(locale) {
  return locale === 'en' ? copyFaq.en : copyFaq.de;
}

export function getAllFaqItems(locale) {
  const copy = getFaqCopy(locale);
  return copy.groups.flatMap((g) => g.items);
}

export function getHomePreviewFaqItems(locale) {
  const byId = new Map(getAllFaqItems(locale).map((item) => [item.id, item]));
  return FAQ_HOME_PREVIEW_ITEM_IDS.map((id) => byId.get(id)).filter(Boolean);
}
