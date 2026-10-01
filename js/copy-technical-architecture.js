/** Technical architecture page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §4 */

export const copyTechnicalArchitecture = {
  en: {
    metaTitle: 'For your IT partner | Zuraio',
    metaDescription:
      'How Zuraio handles identity, knowledge, models and records, and where it runs. Technical architecture for your IT partner.',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      eyebrow: 'FOR YOUR IT PARTNER',
      heading: 'The technical details, in one place.',
      sub: 'How Zuraio handles identity, knowledge, models and records, and where it runs. If something here is unclear, write to us. We reply in days, not weeks.',
      cta: 'Book a technical call',
    },
    architecture: {
      heading: 'One platform, seven layers.',
      layers: [
        {
          title: 'Access',
          body: 'People work in the Zuraio interface or in connected apps.',
        },
        {
          title: 'Identity and permissions',
          body: 'Microsoft or Google identities and groups, plus optional Zuraio roles. Checked before any knowledge or action is used.',
        },
        {
          title: 'Orchestration',
          body: 'Understands the task, picks the workflow, and coordinates knowledge, tools and models.',
        },
        {
          title: 'Skills and company knowledge',
          body: 'Versioned skills with templates and quality rules, managed outside the AI model.',
        },
        {
          title: 'Assistants and integrations',
          body: 'Specialised assistants, connected via MCP, APIs, webhooks and connectors.',
        },
        {
          title: 'Model gateway',
          body: 'Chooses an approved model per task, based on data class, location, quality and cost.',
        },
        {
          title: 'Records and operations',
          body: 'Requests, sources, actions and approvals are logged according to the agreed audit set-up.',
        },
      ],
      diagramCaption:
        'Illustrative platform architecture. Component boundaries and operating locations vary by customer deployment.',
      diagramLabels: [
        'Access',
        'Identity & permissions',
        'Orchestration',
        'Skills & knowledge',
        'Assistants & integrations',
        'Model gateway',
        'Records & operations',
      ],
      diagramTitle: 'Zuraio platform architecture, seven layers',
      diagramDesc:
        'Illustrative vertical flow from access through identity, orchestration, skills, integrations, model gateway to records.',
    },
    requestFlow: {
      heading: 'From request to result',
      steps: [
        'A person asks a question or starts a task.',
        'Zuraio checks who they are and what they may access.',
        'The right skill supplies the steps, templates and rules.',
        'Zuraio picks the assistants, sources and an approved model.',
        'It prepares an answer, a draft or a proposed action.',
        'Anything that changes data or goes out waits for a person\'s OK.',
        'Sources, versions and approvals are recorded.',
      ],
    },
    deployment: {
      heading: 'What we document for every set-up.',
      items: [
        'Operator and responsibilities',
        'Processing and storage locations',
        'AI model providers',
        'Identity provider',
        'Data separation',
        'Backup and recovery',
        'Monitoring and support',
        'Updates and patches',
        'Retention and deletion',
        'Approved external services',
      ],
    },
    cta: {
      heading: 'Let\'s go through it together.',
      body: 'A technical call with one of our founders, with your IT partner if you like.',
      button: 'Book a technical call',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  de: {
    metaTitle: 'Für Ihren IT-Partner | Zuraio',
    metaDescription:
      'Wie Zuraio mit Identitäten, Wissen, Modellen und Protokollen umgeht, und wo es läuft. Technische Architektur für Ihren IT-Partner.',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      eyebrow: 'FÜR IHREN IT-PARTNER',
      heading: 'Die technischen Details, an einem Ort.',
      sub: 'Wie Zuraio mit Identitäten, Wissen, Modellen und Protokollen umgeht, und wo es läuft. Ist etwas unklar, schreiben Sie uns. Wir antworten in Tagen, nicht in Wochen.',
      cta: 'Technisches Gespräch vereinbaren',
    },
    architecture: {
      heading: 'Eine Plattform, sieben Ebenen.',
      layers: [
        {
          title: 'Zugang',
          body: 'Mitarbeitende arbeiten in der Zuraio-Oberfläche oder in angebundenen Anwendungen.',
        },
        {
          title: 'Identität und Berechtigungen',
          body: 'Identitäten und Gruppen von Microsoft oder Google, ergänzt durch optionale Zuraio-Rollen. Geprüft, bevor Wissen oder Aktionen genutzt werden.',
        },
        {
          title: 'Orchestrierung',
          body: 'Versteht die Aufgabe, wählt den Ablauf und koordiniert Wissen, Werkzeuge und Modelle.',
        },
        {
          title: 'Skills und Firmenwissen',
          body: 'Versionierte Skills mit Vorlagen und Qualitätsregeln, verwaltet ausserhalb des KI-Modells.',
        },
        {
          title: 'Assistenten und Integrationen',
          body: 'Spezialisierte Assistenten, angebunden über MCP, APIs, Webhooks und Connectoren.',
        },
        {
          title: 'Modell-Gateway',
          body: 'Wählt pro Aufgabe ein freigegebenes Modell nach Datenklasse, Standort, Qualität und Kosten.',
        },
        {
          title: 'Protokolle und Betrieb',
          body: 'Anfragen, Quellen, Aktionen und Freigaben werden gemäss der vereinbarten Audit-Konfiguration festgehalten.',
        },
      ],
      diagramCaption:
        'Illustrative Plattformarchitektur. Komponentengrenzen und Betriebsorte variieren je nach Kundenlösung.',
      diagramLabels: [
        'Zugang',
        'Identität & Berechtigungen',
        'Orchestrierung',
        'Skills & Wissen',
        'Assistenten & Integrationen',
        'Modell-Gateway',
        'Protokolle & Betrieb',
      ],
      diagramTitle: 'Zuraio Plattformarchitektur, sieben Ebenen',
      diagramDesc:
        'Illustrativer vertikaler Ablauf von Zugang über Identität, Orchestrierung, Skills, Integrationen und Modell-Gateway bis zu Protokollen.',
    },
    requestFlow: {
      heading: 'Von der Anfrage zum Ergebnis',
      steps: [
        'Eine Person stellt eine Frage oder startet eine Aufgabe.',
        'Zuraio prüft, wer sie ist und worauf sie zugreifen darf.',
        'Der passende Skill liefert Schritte, Vorlagen und Regeln.',
        'Zuraio wählt Assistenten, Quellen und ein freigegebenes Modell.',
        'Es bereitet eine Antwort, einen Entwurf oder eine vorgeschlagene Aktion vor.',
        'Alles, was Daten ändert oder nach aussen geht, wartet auf das OK einer Person.',
        'Quellen, Versionen und Freigaben werden festgehalten.',
      ],
    },
    deployment: {
      heading: 'Was wir bei jeder Lösung dokumentieren.',
      items: [
        'Betreiber und Verantwortlichkeiten',
        'Verarbeitungs- und Speicherorte',
        'KI-Modellanbieter',
        'Identity Provider',
        'Datentrennung',
        'Backup und Wiederherstellung',
        'Monitoring und Support',
        'Updates und Patches',
        'Aufbewahrung und Löschung',
        'Zulässige externe Dienste',
      ],
    },
    cta: {
      heading: 'Gehen wir es gemeinsam durch.',
      body: 'Ein technisches Gespräch mit einem unserer Gründer, gerne mit Ihrem IT-Partner.',
      button: 'Technisches Gespräch vereinbaren',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
};

export function getTechnicalArchitectureCopy(locale) {
  const key = locale === 'de' ? 'de' : 'en';
  return copyTechnicalArchitecture[key];
}
