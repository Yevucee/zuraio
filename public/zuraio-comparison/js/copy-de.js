export const heroOptions = [
  {
    headline: 'Ein digitaler Executive Assistant für jede Mitarbeitende Person.',
    emphasis: 'Assistant',
    paragraph:
      'Zuraio gibt allen in Ihrem Unternehmen einen intelligenten Assistenten, der Informationen findet, Fragen beantwortet, Dokumente vorbereitet und bei der Arbeit hilft.',
    cta: 'Lernen Sie den KI-Assistenten Ihres Unternehmens kennen',
    ctaHref: 'contact.html',
  },
  {
    headline: 'Geben Sie jeder Mitarbeitenden Person die Kraft eines Executive Assistants.',
    emphasis: 'Kraft',
    paragraph:
      'Zuraio verbindet das Wissen und die Tools Ihres Unternehmens und unterstützt Ihre Teams sofort bei Recherche, Texten, Analyse und alltäglichen Aufgaben.',
    cta: 'So funktioniert Zuraio',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'Ein KI-Assistent, der Ihr Unternehmen kennt.',
    emphasis: 'kennt',
    paragraph:
      'Zuraio versteht Ihre Dokumente, Meetings, E-Mails und Ihr Unternehmenswissen, damit Mitarbeitende schneller Antworten finden und Arbeit erledigen können.',
    cta: 'Entdecken Sie den Zuraio AI Hub',
    ctaHref: 'knowledge.html',
  },
  {
    headline: 'Der intelligente Workspace für Ihr gesamtes Unternehmen.',
    emphasis: 'Workspace',
    paragraph:
      'Durchsuchen Sie Unternehmenswissen, erstellen Sie Dokumente, analysieren Sie Informationen und erledigen Sie alltägliche Arbeit über einen sicheren AI Hub.',
    cta: 'Sehen Sie, was möglich ist',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'Ein KI-Assistent für alle. Angetrieben von Ihrem Unternehmen.',
    emphasis: 'alle',
    paragraph:
      'Zuraio macht aus Ihrem Unternehmenswissen sichere, praktische Unterstützung für jede Mitarbeitende Person.',
    cta: 'Zuraio entdecken',
    ctaHref: 'how-it-helps.html',
  },
];

export const problemOptions = [
  {
    heading: 'Lassen Sie Zuraio Ihr Unternehmenswissen leichter finden und nutzen.',
    emphasis: 'finden',
  },
  {
    heading: 'Lassen Sie Zuraio Ihre Informationen finden und die Arbeit voranbringen.',
    emphasis: 'voranbringen',
  },
  {
    heading: 'Lassen Sie Zuraio Ihr Wissen verbinden und die Arbeit vereinfachen.',
    emphasis: 'vereinfachen',
  },
  {
    heading: 'Lassen Sie Zuraio Ihren Mitarbeitenden helfen, Antworten zu finden und Arbeit zu erledigen.',
    emphasis: 'Antworten',
  },
  {
    heading: 'Lassen Sie Zuraio Ihr Unternehmenswissen leichter finden, verstehen und nutzen.',
    emphasis: 'verstehen',
  },
];

export const trustSignals = [
  { label: 'In der Schweiz gehostet', href: 'deployment-models.html' },
  { label: 'Quellen sichtbar', href: 'knowledge.html' },
  { label: 'Unternehmenswissen verbunden', href: 'knowledge.html' },
  { label: 'Sie behalten die Kontrolle', href: 'data-control.html' },
];

export const integrations = [
  'Outlook',
  'Gmail',
  'Microsoft 365',
  'Google Workspace',
  'Teams',
  'Slack',
  'Notion',
  'SharePoint',
  'OneDrive',
  'HubSpot',
  'Salesforce',
  'WhatsApp',
  'Sprachnotizen',
];

export const nav = {
  main: [
    { label: 'Wie es hilft', href: 'how-it-helps.html' },
    { label: 'Wissen', href: 'knowledge.html' },
    { label: 'Integrationen', href: 'integrations.html' },
    { label: 'Datenkontrolle', href: 'data-control.html' },
  ],
  technical: [
    { label: 'Deployment-Modelle', href: 'deployment-models.html' },
    { label: 'Technische Architektur', href: 'technical-architecture.html' },
    { label: 'KI-Governance', href: 'ai-governance.html' },
    { label: 'Ressourcen', href: 'resources.html' },
    { label: 'FAQ', href: 'faq.html' },
  ],
  about: { label: 'Über uns', href: 'about.html' },
};

export const ui = {
  bookDemo: 'Demo buchen',
  technical: 'Technisch',
  previous: '← Zurück',
  next: 'Weiter →',
  optionOf: (n) => `Option ${n} von 5`,
  optionLabel: (n) => `Option ${n}`,
  previousAria: 'Vorherige Hero-Option',
  nextAria: 'Nächste Hero-Option',
  heroOptionsGroup: 'Hero-Messaging-Optionen',
  trustAria: 'Vertrauenssignale',
  langEn: 'EN',
  langDe: 'DE',
  langFr: 'FR',
  langIt: 'IT',
  languageLabel: 'Sprache',
  languageContact: 'Sprache / Kontakt',
  languageActive: 'aktiv',
  openMenu: 'Menü öffnen',
  closeMenu: 'Menü schliessen',
  zuraioHome: 'Zuraio Startseite',
};

export const home = {
  meta: {
    title: 'Zuraio — KI für Schweizer Unternehmen, die die Kontrolle über ihre Daten behalten wollen',
  },
  problem: {
    marker: 'Kommt Ihnen das bekannt vor?',
    heading: 'Ihr Unternehmen hat die Antworten bereits. Sie sind nur schwer zu finden.',
    body: 'Wichtiges Wissen ist über E-Mails, Dokumente, Meetings und Geschäftssysteme verteilt. Teams verlieren Zeit mit Suchen, Vorbereiten und wiederholter Arbeit, die bereits erledigt wurde.',
    cards: [
      { title: 'Wissen ist verstreut', body: 'Wichtige Informationen liegen in Postfächern, Dateien, Meetings und Unternehmenssystemen.' },
      { title: 'Administration übernimmt', body: 'Zusammenfassungen, Berichte, Vorbereitung und Follow-ups nehmen Zeit von der eigentlichen Arbeit.' },
      { title: 'Antworten fehlt der Kontext', body: 'Entscheidungen dauern länger, wenn die vollständige Historie oder Quelle nicht sichtbar ist.' },
      { title: 'Öffentliche KI erzeugt Unsicherheit', body: 'Nützliche Tools werden riskant, wenn sensibles Unternehmenswissen ohne klare Regeln genutzt wird.' },
    ],
    link: 'Praktische Anwendungsfälle ansehen →',
  },
  different: {
    marker: 'Mehr als ein Chatbot',
    heading: 'Ihr Unternehmenswissen, im Dienst Ihrer Teams.',
    headingEmphasis: 'Dienst',
    body: 'Generische KI kennt nur das, was jemand manuell bereitstellt. Zuraio verbindet sich sicher mit genehmigtem Unternehmenswissen, versteht den Kontext der fragenden Person und bereitet quellenbasierte Arbeit zur Prüfung vor.',
    without: {
      title: 'Ohne Zuraio',
      titleEmphasis: null,
      subtitle: 'Typischer Prozess: bis zu 20 Minuten',
      timeLabel: '~20 Min.',
      progressCompleting: 'Wird abgeschlossen...',
      progressCompleted: 'Abgeschlossen',
      steps: [
        {
          title: 'Generische KI fragen',
          body: 'Ein neues Gespräch beginnen',
        },
        {
          title: 'Kontext manuell hinzufügen',
          body: 'Dateien finden und hochladen oder die Situation erklären',
        },
        {
          title: 'Generische Ausgabe prüfen',
          body: 'Informationen prüfen und verifizieren',
        },
        {
          title: 'Verfeinern und erneut fragen',
          body: 'Weitere Details hinzufügen und präzisieren',
        },
        {
          title: 'Verifizieren und zusammenstellen',
          body: 'Gegenchecken und Informationen zusammenführen',
        },
        {
          title: 'Beim nächsten Mal wiederholen',
          body: 'Mit einem neuen Gespräch von vorn beginnen',
        },
      ],
    },
    with: {
      title: 'Mit Zuraio',
      titleEmphasis: 'Zuraio',
      subtitle: 'Typischer Prozess: unter 1 Minute',
      timeLabel: '<1 Min.',
      progressCompleting: 'Wird abgeschlossen...',
      progressCompleted: 'Abgeschlossen.',
      steps: [
        {
          title: 'Zuraio fragen',
          body: 'Ihre Frage in natürlicher Sprache stellen',
        },
        {
          title: 'Nutzt genehmigtes Wissen',
          body: 'Verbindet sich automatisch mit Ihren Unternehmensquellen',
        },
        {
          title: 'Erstellt quellenbasierte Arbeit',
          body: 'Erzeugt Antworten und Entwürfe mit Referenzen',
        },
        {
          title: 'Prüfen und handeln',
          body: 'Sie prüfen, verifizieren und handeln mit Vertrauen',
        },
      ],
    },
    integrationsStrip: {
      title: 'Funktioniert mit den Tools, die Ihr Team bereits nutzt.',
      link: 'Alle Integrationen ansehen →',
      clarify: 'Verbindungen hängen von Ihrem Setup, genehmigten Tools und Deployment-Umfang ab.',
      tools: ['microsoft-365', 'google-workspace', 'outlook', 'sharepoint', 'hubspot', 'salesforce'],
    },
  },
  pillars: {
    heading: 'Alles, was Ihr Assistent braucht, um zu helfen.',
    headingEmphasis: 'helfen',
    items: [
      { title: 'Wissen', body: 'Zuraio arbeitet mit genehmigten E-Mails, Dokumenten, Kontakten, Meeting-Notizen und Unternehmenssystemen.', link: 'Wissen erkunden →', href: 'knowledge.html' },
      { title: 'Verbindungen', body: 'Es arbeitet mit den Tools, die Ihr Team bereits nutzt, statt Menschen zum Wechsel zu zwingen.', link: 'Verbindungen ansehen →', href: 'integrations.html' },
      { title: 'Sicherheit', body: 'Hosting, Zugriff, Quellen und Prüfregeln bleiben unter Unternehmenskontrolle.', link: 'Datenkontrolle lesen →', href: 'data-control.html' },
    ],
  },
  integrations: {
    heading: 'Passt in die Tools, die Ihr Team bereits nutzt.',
    body: 'Zuraio ist dafür konzipiert, neben Ihrer bestehenden E-Mail, Dokumenten, Meetings, Nachrichten und Geschäftssysteme zu arbeiten.',
    clarify: 'Konkrete Verbindungen hängen von Ihrem Setup, genehmigten Tools und Deployment-Umfang ab.',
    link: 'Integrationen ansehen →',
  },
  demo: {
    heading: 'Sehen Sie Ihren Assistenten bei der Arbeit.',
    headingEmphasis: 'Arbeit',
    body: 'Zuraio sammelt den richtigen Unternehmenskontext, bereitet die Arbeit vor und liefert sie mit Quellen zur Freigabe zurück.',
    disclaimer: 'Inszenierte Demonstration — Funktionen hängen vom vereinbarten Deployment und den Berechtigungen ab.',
    slides: [
      {
        id: 'mail',
        label: 'E-Mail',
        heading: 'Die Antwort wartet bereits.',
        emphasis: 'wartet',
        body: 'Lange Threads können zusammengefasst und Antworten mit relevantem Unternehmenskontext vorbereitet werden. Sie prüfen, bearbeiten und entscheiden, was gesendet wird.',
        alt: 'Zuraio E-Mail-Assistent — eingehende Mail mit Antwortentwurf und Quellen.',
      },
      {
        id: 'project-summary',
        label: 'Projektzusammenfassung',
        heading: 'Das Gesamtbild, bereits zusammengestellt.',
        emphasis: 'zusammengestellt',
        body: 'Zuraio führt Projektkontext aus E-Mails, Dokumenten und Notizen zusammen, damit Ihr Team den Status sieht, ohne zu suchen.',
        alt: 'Zuraio Projektzusammenfassung — konsolidierte Projektübersicht mit Details und Quellen.',
      },
      {
        id: 'appointment-reply',
        label: 'Termin und Antwort',
        heading: 'Terminplanung mit Kontext erledigt.',
        emphasis: 'Kontext',
        body: 'Eine Kundenanfrage wird mit Kalenderverfügbarkeit, relevanter Historie und einem Antwortentwurf zur Freigabe zusammengebracht.',
        alt: 'Zuraio Termin-Workflow — vorgeschlagene Zeiten und Antwortentwurf aus Unternehmenskontext.',
      },
      {
        id: 'meeting-transcript',
        label: 'Meetingtranskript',
        heading: 'Jedes Meeting erfasst und nutzbar.',
        emphasis: 'nutzbar',
        body: 'Transkripte werden mit Entscheidungen, Aktionen und Follow-ups zusammengefasst — nichts hängt allein vom Gedächtnis ab.',
        alt: 'Zuraio Meetingtranskript — zusammengefasste Diskussion mit Aktionen und Follow-ups.',
      },
      {
        id: 'tasks',
        label: 'Aufgaben',
        heading: 'Nichts geht verloren.',
        emphasis: 'verloren',
        body: 'Aktionen werden aus E-Mails, Meetings und Nachrichten extrahiert, damit Follow-ups sichtbar bleiben.',
        alt: 'Zuraio Aufgabenansicht — offene Aktionen aus aktueller Unternehmensaktivität.',
      },
      {
        id: 'briefing',
        label: 'Briefing',
        heading: 'Vorbereitet ins Meeting.',
        emphasis: 'Vorbereitet',
        body: 'Relevante E-Mails, Notizen, Dokumente, Entscheidungen und offene Aktionen werden vor dem Meeting zusammengetragen.',
        alt: 'Zuraio Meeting-Briefing — Kundenhistorie, Dateien und Gesprächspunkte vorbereitet.',
      },
    ],
  },
  outcomes: {
    heading: 'Weniger Administration. Mehr wertvolle Arbeit.',
    headingEmphasis: 'wertvolle',
    body: 'Zuraio hilft Menschen, weniger Zeit mit Suchen, Zusammenfassen und Vorbereiten zu verbringen, damit sie sich auf Kunden, Entscheidungen und ihre eigentliche Arbeit konzentrieren können.',
    cards: [
      { tag: 'Meetings', title: 'Vorbereitet ins Meeting', body: 'Relevante Historie, Entscheidungen und offene Aktionen bereits vorbereitet.' },
      { tag: 'E-Mail', title: 'Antwortentwürfe bereit', body: 'Entwürfe basierend auf dem vollständigen Thread und relevantem Unternehmenskontext.' },
      { tag: 'Antworten', title: 'Mit Nachweis fragen', body: 'Fragen über genehmigtes Wissen stellen und die Quellen hinter der Antwort sehen.' },
      { tag: 'Berichte', title: 'Erste Entwürfe, schneller', body: 'Bestehende Informationen in strukturierte Erstentwürfe verwandeln.' },
      { tag: 'Follow-ups', title: 'Nichts geht verloren', body: 'Aktionen und nächste Schritte erfassen, bevor sie vergessen werden.' },
    ],
  },
  dataControl: {
    marker: 'Datenkontrolle',
    heading: 'KI, ohne die Schlüssel abzugeben.',
    headingEmphasis: 'Schlüssel',
    body: 'Zuraio gibt Unternehmen Kontrolle darüber, wo es läuft, welche Informationen es nutzen darf, wer Zugriff hat und wie die Arbeit geprüft wird.',
    cards: [
      { title: 'In der Schweiz gehostet', body: 'Eine Schweizer Hosting-Option für Unternehmen, die ihre Umgebung und Unternehmensdaten in der Schweiz halten möchten.' },
      { title: 'Zugriff nach Ihren Regeln', body: 'Menschen arbeiten nur mit Informationen, die sie nutzen dürfen.' },
      { title: 'Antworten zeigen ihre Quellen', body: 'Nutzer können prüfen, woher Informationen stammen, bevor sie sich darauf verlassen.' },
      { title: 'Für Prüfung konzipiert', body: 'Anfragen, Quellen und Ergebnisse können gemäss vereinbartem Setup leichter nachverfolgt werden.' },
    ],
    note: '<b>Brauchen Sie stärkere Kontrolle?</b> On-Premise-Optionen und Modellwahl können für Unternehmen mit strengeren internen Anforderungen besprochen werden.',
    link: 'Datenkontrolle und Sicherheit erkunden →',
  },
  reviewable: {
    heading: 'KI, die Sie später erklären können.',
    headingEmphasis: 'erklären',
    body: 'Sehen Sie, was gefragt wurde, welche genehmigten Quellen genutzt wurden und was produziert wurde. Das unterstützt interne Prüfung und hilft Unternehmen, sich auf künftige KI-Governance-Erwartungen vorzubereiten.',
    steps: [
      { label: 'Was gefragt wurde', title: 'Die Anfrage', body: 'Die Eingabe oder Anfrage, die die Arbeit ausgelöst hat.' },
      { label: 'Was genutzt wurde', title: 'Die Quellen', body: 'Die genehmigten Unternehmensquellen hinter der Antwort.' },
      { label: 'Was produziert wurde', title: 'Das Ergebnis', body: 'Die Antwort, der Entwurf oder die Zusammenfassung zur Prüfung.' },
    ],
    link: 'Technischen Ansatz ansehen →',
  },
  origin: {
    marker: 'Warum wir es gebaut haben',
    heading: 'Gemacht für die Arbeit, die wir selbst erledigen mussten.',
    headingEmphasis: 'selbst',
    paragraphs: [
      'Zuraio entstand, weil wir einen besseren Weg brauchten, um in unserer eigenen Arbeit vorzubereiten, zu suchen, zusammenzufassen, zu entwerfen und nachzufassen.',
      'Öffentliche KI-Tools waren nützlich, reichten aber nicht für ernsthafte Unternehmensarbeit. Wir wollten KI, die mit echtem Unternehmenswissen verbunden ist — mit klarer Kontrolle über Daten, Zugriff und Modellwahl.',
      'Daraus wurde Zuraio.',
    ],
    link: 'Team kennenlernen →',
    caption: 'Gebaut, weil wir es selbst brauchten.',
    imageAlt: 'Das Zuraio-Team bei der Zusammenarbeit — Laptop, Notizbücher und Whiteboard mit Vorbereiten, Suchen, Zusammenfassen, Entwerfen und Nachfassen.',
  },
  final: {
    heading: 'Sehen Sie, was Ihr eigener Assistent von Ihrem Schreibtisch nehmen könnte.',
    headingEmphasis: 'Assistent',
    body: 'Wir betrachten Ihre aktuellen Tools, Ihr Unternehmenswissen und Ihre Anforderungen an Datenkontrolle — und identifizieren, wo Zuraio zuerst helfen könnte.',
    primaryCta: 'Private Demo buchen',
    secondaryCta: 'Assistenten bei der Arbeit sehen',
    supporting: 'Ihr Unternehmen. Ihre Informationen. Ihre Freigabe.',
  },
};

export const pages = {
  howItHelps: {
    title: 'Wie es hilft — Zuraio',
    hero: { marker: 'Wie es hilft', heading: 'Weniger Administration. Mehr wertvolle Arbeit.', headingEmphasis: 'wertvolle', lede: 'Zuraio hilft Menschen, mit genehmigtem Unternehmenswissen vorzubereiten, zu suchen, zu entwerfen, zusammenzufassen und nachzufassen. Es arbeitet neben bestehenden Systemen und bringt den relevanten Kontext zusammen, wenn er gebraucht wird.' },
  },
  knowledge: {
    title: 'Wissen — Zuraio',
    hero: { marker: 'Wissen', heading: 'Verstreute Unternehmensinformationen in nutzbaren Kontext verwandeln.', headingEmphasis: 'nutzbaren', lede: 'Wichtiges Wissen liegt oft in Postfächern, Shared Drives, Meeting-Notizen, CRM-Daten und Geschäftssystemen. Zuraio ist dafür konzipiert, genehmigte Informationen zusammenzuführen, damit Menschen sie leichter finden, verstehen und nutzen können.' },
  },
  integrations: {
    title: 'Integrationen — Zuraio',
    hero: { marker: 'Integrationen', heading: 'Arbeitet neben den Systemen, die Ihr Team bereits nutzt.', headingEmphasis: 'bereits', lede: 'Zuraio ist dafür konzipiert, Unternehmenswissen und Workflows zu verbinden, ohne Teams zum Ersatz funktionierender Systeme zu zwingen.' },
  },
  dataControl: {
    title: 'Datenkontrolle & Sicherheit — Zuraio',
    hero: { marker: 'Datenkontrolle & Sicherheit', heading: 'Ihre Daten. Ihre Regeln. Ihr Deployment.', headingEmphasis: 'Regeln', lede: 'Zuraio ist dafür konzipiert, Unternehmen bei der Nutzung von KI zu helfen, ohne die Kontrolle über Unternehmenswissen, Berechtigungen oder Infrastrukturentscheidungen aufzugeben.' },
  },
  deploymentModels: {
    title: 'Deployment-Modelle — Zuraio',
    hero: { marker: 'Deployment-Modelle', heading: 'Lokal, hybrid oder Schweizer Cloud.', headingEmphasis: 'Schweizer', lede: 'Unternehmen haben unterschiedliche Anforderungen an Kontrolle, Performance, Infrastruktur und Kosten. Zuraio kann um das für den Kunden vereinbarte Deployment-Modell konfiguriert werden.' },
  },
  technicalArchitecture: {
    title: 'Technische Architektur — Zuraio',
    hero: { marker: 'Technische Architektur', heading: 'Ein kontrollierter Weg von der Anfrage zum geprüften Ergebnis.', headingEmphasis: 'kontrollierter', lede: 'Zuraio verbindet Nutzer, genehmigte Unternehmensquellen, Geschäftstools und KI-Modelle über eine gesteuerte Ausführungsschicht. Die genaue Architektur hängt von der Kundenumgebung und dem Deployment-Modell ab.' },
  },
  aiGovernance: {
    title: 'KI-Governance — Zuraio',
    hero: { marker: 'KI-Governance', heading: 'KI-Nutzung, die verstanden und geprüft werden kann.', headingEmphasis: 'geprüft', lede: 'Verantwortungsvolle Unternehmens-KI braucht mehr als ein Modell. Organisationen benötigen klare Regeln für Zugriff, Datennutzung, menschliche Prüfung, Protokollierung und Verantwortlichkeit.' },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: { marker: 'FAQ', heading: 'Praktische Fragen zur Nutzung von Zuraio im Arbeitsalltag.', headingEmphasis: 'Praktische', lede: 'Antworten auf häufige Fragen zu Deployment, Berechtigungen, Datenkontrolle und alltäglicher Nutzung.' },
  },
  about: {
    title: 'Über uns — Zuraio',
    hero: { marker: 'Über Zuraio', heading: 'Gebaut von Menschen, die einen besseren Weg arbeiten wollten.', headingEmphasis: 'besseren', lede: 'Zuraio begann mit einem praktischen Problem. Bestehende KI-Tools waren nützlich, verbanden aber Unternehmenswissen, Datenkontrolle und Alltagsarbeit nicht so, wie wir es brauchten.' },
  },
  contact: {
    title: 'Kontakt — Zuraio',
    hero: { marker: 'Kontakt', heading: 'Den ersten praktischen Anwendungsfall für Ihr Unternehmen finden.', headingEmphasis: 'praktischen', lede: 'Wir betrachten Ihre aktuellen Tools, Ihr Unternehmenswissen und Ihre Anforderungen an Datenkontrolle — und identifizieren, wo Zuraio zuerst helfen könnte.' },
  },
  resources: {
    title: 'Ressourcen — Zuraio',
    hero: { marker: 'Ressourcen', heading: 'Technische und praktische Informationen über Zuraio.', headingEmphasis: 'praktische', lede: 'Leitfäden, Übersichten und Referenzmaterial für Teams, die Zuraio evaluieren oder einführen.' },
  },
  privacy: {
    title: 'Datenschutz — Zuraio',
    hero: { marker: 'Rechtliches', heading: 'Datenschutzerklärung.', lede: 'Diese Seite ist ein strukturierter Platzhalter. Eine vollständige Datenschutzerklärung muss von qualifizierten Rechtsberaterinnen und Rechtsberatern erstellt und geprüft werden, bevor sie veröffentlicht wird.' },
  },
  impressum: {
    title: 'Impressum — Zuraio',
    hero: { marker: 'Rechtliches', heading: 'Impressum.', lede: 'Diese Seite ist ein strukturierter Platzhalter. Alle Unternehmensangaben unten müssen verifiziert und eingefügt werden, bevor sie veröffentlicht werden.' },
  },
  terms: {
    title: 'Nutzungsbedingungen — Zuraio',
    hero: { marker: 'Rechtliches', heading: 'Nutzungsbedingungen.', lede: 'Diese Seite ist ein strukturierter Platzhalter. Vollständige Nutzungsbedingungen müssen von qualifizierten Rechtsberaterinnen und Rechtsberatern erstellt und geprüft werden, bevor sie veröffentlicht werden.' },
  },
  cookies: {
    title: 'Cookie-Einstellungen — Zuraio',
    hero: { marker: 'Rechtliches', heading: 'Cookie-Einstellungen.', lede: 'Diese Seite ist ein strukturierter Platzhalter. Tatsächliche Cookie-Kategorien und Steuerungen werden nach rechtlicher und technischer Prüfung veröffentlicht.' },
  },
};

export const site = {
  tagline: 'KI für Schweizer Unternehmen, die die Kontrolle über ihre Daten behalten wollen.',
};

export const footerGroups = [
  {
    title: 'Produkt',
    links: [
      { label: 'Wie Zuraio hilft', href: 'how-it-helps.html' },
      { label: 'Wissen', href: 'knowledge.html' },
      { label: 'Integrationen', href: 'integrations.html' },
      { label: 'Anwendungsfälle', href: 'how-it-helps.html#use-cases' },
      { label: 'Demo buchen', href: 'contact.html' },
    ],
  },
  {
    title: 'Daten & Sicherheit',
    links: [
      { label: 'Datenkontrolle', href: 'data-control.html' },
      { label: 'Schweizer Hosting', href: 'deployment-models.html#swiss-hosted' },
      { label: 'Deployment-Modelle', href: 'deployment-models.html' },
      { label: 'Technische Architektur', href: 'technical-architecture.html' },
      { label: 'KI-Governance', href: 'ai-governance.html' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns', href: 'about.html' },
      { label: 'Kontakt', href: 'contact.html' },
      { label: 'Ressourcen', href: 'resources.html' },
      { label: 'Partner', href: 'contact.html#partnerships' },
      { label: 'Presse', href: 'resources.html#pressroom' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Datenschutz', href: 'privacy.html' },
      { label: 'Cookie-Einstellungen', href: 'cookies.html' },
      { label: 'Nutzungsbedingungen', href: 'terms.html' },
    ],
  },
];
