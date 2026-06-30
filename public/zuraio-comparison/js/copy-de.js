export const heroOptions = [
  {
    headline: 'Ein digitaler Executive Assistant für jede Mitarbeitende Person.',
    paragraph:
      'Zuraio gibt allen in Ihrem Unternehmen einen intelligenten Assistenten, der Informationen findet, Fragen beantwortet, Dokumente vorbereitet und bei der Arbeit hilft.',
    cta: 'Lernen Sie den KI-Assistenten Ihres Unternehmens kennen',
    ctaHref: 'contact.html',
    image: '../zuraio/assets/zuraio-hero-option-1.jpg',
    imageAlt: 'Zuraio — Ein digitaler Executive Assistant für jede Mitarbeitende Person.',
  },
  {
    headline: 'Geben Sie jeder Mitarbeitenden Person die Kraft eines Executive Assistants.',
    paragraph:
      'Zuraio verbindet das Wissen und die Tools Ihres Unternehmens und unterstützt Ihre Teams sofort bei Recherche, Texten, Analyse und alltäglichen Aufgaben.',
    cta: 'So funktioniert Zuraio',
    ctaHref: '#assistant-demo',
    image: '../zuraio/assets/zuraio-hero-option-2.jpg',
    imageAlt: 'Zuraio — Geben Sie jeder Mitarbeitenden Person die Kraft eines Executive Assistants.',
  },
  {
    headline: 'Ein KI-Assistent, der Ihr Unternehmen kennt.',
    paragraph:
      'Zuraio versteht Ihre Dokumente, Meetings, E-Mails und Ihr Unternehmenswissen, damit Mitarbeitende schneller Antworten finden und Arbeit erledigen können.',
    cta: 'Entdecken Sie den Zuraio AI Hub',
    ctaHref: 'knowledge.html',
    image: '../zuraio/assets/zuraio-hero-option-3.jpg',
    imageAlt: 'Zuraio — Ein KI-Assistent, der Ihr Unternehmen kennt.',
  },
  {
    headline: 'Der intelligente Workspace für Ihr gesamtes Unternehmen.',
    paragraph:
      'Durchsuchen Sie Unternehmenswissen, erstellen Sie Dokumente, analysieren Sie Informationen und erledigen Sie alltägliche Arbeit über einen sicheren AI Hub.',
    cta: 'Sehen Sie, was möglich ist',
    ctaHref: '#assistant-demo',
    image: '../zuraio/assets/zuraio-hero-option-4.jpg',
    imageAlt: 'Zuraio — Der intelligente Workspace für Ihr gesamtes Unternehmen.',
  },
  {
    headline: 'Ein KI-Assistent für alle. Angetrieben von Ihrem Unternehmen.',
    paragraph:
      'Zuraio macht aus Ihrem Unternehmenswissen sichere, praktische Unterstützung für jede Mitarbeitende Person.',
    cta: 'Zuraio entdecken',
    ctaHref: 'how-it-helps.html',
    image: '../zuraio/assets/zuraio-hero-option-5.jpg',
    imageAlt: 'Zuraio — Ein KI-Assistent für alle. Angetrieben von Ihrem Unternehmen.',
  },
];

export const trustSignals = [
  'In der Schweiz gehostet',
  'Quellen sichtbar',
  'Unternehmenswissen verbunden',
  'Sie behalten die Kontrolle',
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
    body: 'Generische KI arbeitet mit dem, was jemand manuell eingibt. Zuraio verbindet sich mit genehmigtem Unternehmenswissen, versteht den Kontext der fragenden Person und bereitet quellenbasierte Arbeit zur Prüfung vor.',
    generic: {
      title: 'Generische KI',
      items: ['Isolierte Gespräche', 'Manuell hinzugefügte Informationen', 'Begrenzter Unternehmenskontext'],
    },
    zuraio: {
      title: 'Zuraio',
      items: ['Verbundenes Unternehmenswissen', 'Persönlicher und rollenbezogener Kontext', 'Quellenbasierte Antworten und Entwürfe', 'Prüfung vor Aktion'],
    },
  },
  pillars: {
    heading: 'Alles, was Ihr Assistent braucht, um zu helfen.',
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
    body: 'Zuraio sammelt den richtigen Unternehmenskontext, bereitet die Arbeit vor und liefert sie mit Quellen zur Freigabe zurück.',
    disclaimer: 'Inszenierte Demonstration — Funktionen hängen vom vereinbarten Deployment und den Berechtigungen ab.',
    steps: [
      '1. Anfrage trifft ein',
      '2. Kundenhistorie',
      '3. Verwandte Dateien',
      '4. Kalenderprüfung',
      '5. Vorgeschlagene Zeiten',
      '6. Antwortentwurf',
      '7. Quellen angezeigt',
      '8. Wartet auf Freigabe',
    ],
    tabs: [
      { label: 'E-Mail', heading: 'Die Antwort wartet bereits.', body: 'Lange Threads können zusammengefasst und Antworten mit relevantem Unternehmenskontext vorbereitet werden. Sie prüfen, bearbeiten und entscheiden, was gesendet wird.' },
      { label: 'Meetings', heading: 'Vorbereitet ins Meeting.', body: 'Relevante E-Mails, Notizen, Dokumente, Entscheidungen und offene Aktionen werden vor dem Meeting zusammengetragen.' },
      { label: 'Wissen', heading: 'Antwort finden. Nachweis sehen.', body: 'Fragen Sie über genehmigtes Unternehmenswissen und sehen Sie, woher die Antwort stammt.' },
    ],
  },
  outcomes: {
    heading: 'Weniger Administration. Mehr wertvolle Arbeit.',
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
    body: 'Wir betrachten Ihre aktuellen Tools, Ihr Unternehmenswissen und Ihre Anforderungen an Datenkontrolle — und identifizieren, wo Zuraio zuerst helfen könnte.',
    primaryCta: 'Private Demo buchen',
    secondaryCta: 'Assistenten bei der Arbeit sehen',
    supporting: 'Ihr Unternehmen. Ihre Informationen. Ihre Freigabe.',
  },
};

export const pages = {
  howItHelps: {
    title: 'Wie es hilft — Zuraio',
    hero: { marker: 'Wie es hilft', heading: 'Weniger Administration. Mehr wertvolle Arbeit.', lede: 'Zuraio hilft Menschen, mit genehmigtem Unternehmenswissen vorzubereiten, zu suchen, zu entwerfen, zusammenzufassen und nachzufassen. Es arbeitet neben bestehenden Systemen und bringt den relevanten Kontext zusammen, wenn er gebraucht wird.' },
  },
  knowledge: {
    title: 'Wissen — Zuraio',
    hero: { marker: 'Wissen', heading: 'Verstreute Unternehmensinformationen in nutzbaren Kontext verwandeln.', lede: 'Wichtiges Wissen liegt oft in Postfächern, Shared Drives, Meeting-Notizen, CRM-Daten und Geschäftssystemen. Zuraio ist dafür konzipiert, genehmigte Informationen zusammenzuführen, damit Menschen sie leichter finden, verstehen und nutzen können.' },
  },
  integrations: {
    title: 'Integrationen — Zuraio',
    hero: { marker: 'Integrationen', heading: 'Arbeitet neben den Systemen, die Ihr Team bereits nutzt.', lede: 'Zuraio ist dafür konzipiert, Unternehmenswissen und Workflows zu verbinden, ohne Teams zum Ersatz funktionierender Systeme zu zwingen.' },
  },
  dataControl: {
    title: 'Datenkontrolle & Sicherheit — Zuraio',
    hero: { marker: 'Datenkontrolle & Sicherheit', heading: 'Ihre Daten. Ihre Regeln. Ihr Deployment.', lede: 'Zuraio ist dafür konzipiert, Unternehmen bei der Nutzung von KI zu helfen, ohne die Kontrolle über Unternehmenswissen, Berechtigungen oder Infrastrukturentscheidungen aufzugeben.' },
  },
  deploymentModels: {
    title: 'Deployment-Modelle — Zuraio',
    hero: { marker: 'Deployment-Modelle', heading: 'Lokal, hybrid oder Schweizer Cloud.', lede: 'Unternehmen haben unterschiedliche Anforderungen an Kontrolle, Performance, Infrastruktur und Kosten. Zuraio kann um das für den Kunden vereinbarte Deployment-Modell konfiguriert werden.' },
  },
  technicalArchitecture: {
    title: 'Technische Architektur — Zuraio',
    hero: { marker: 'Technische Architektur', heading: 'Ein kontrollierter Weg von der Anfrage zum geprüften Ergebnis.', lede: 'Zuraio verbindet Nutzer, genehmigte Unternehmensquellen, Geschäftstools und KI-Modelle über eine gesteuerte Ausführungsschicht. Die genaue Architektur hängt von der Kundenumgebung und dem Deployment-Modell ab.' },
  },
  aiGovernance: {
    title: 'KI-Governance — Zuraio',
    hero: { marker: 'KI-Governance', heading: 'KI-Nutzung, die verstanden und geprüft werden kann.', lede: 'Verantwortungsvolle Unternehmens-KI braucht mehr als ein Modell. Organisationen benötigen klare Regeln für Zugriff, Datennutzung, menschliche Prüfung, Protokollierung und Verantwortlichkeit.' },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: { marker: 'FAQ', heading: 'Praktische Fragen zur Nutzung von Zuraio im Arbeitsalltag.', lede: 'Antworten auf häufige Fragen zu Deployment, Berechtigungen, Datenkontrolle und alltäglicher Nutzung.' },
  },
  about: {
    title: 'Über uns — Zuraio',
    hero: { marker: 'Über Zuraio', heading: 'Gebaut von Menschen, die einen besseren Weg arbeiten wollten.', lede: 'Zuraio begann mit einem praktischen Problem. Bestehende KI-Tools waren nützlich, verbanden aber Unternehmenswissen, Datenkontrolle und Alltagsarbeit nicht so, wie wir es brauchten.' },
  },
  contact: {
    title: 'Kontakt — Zuraio',
    hero: { marker: 'Kontakt', heading: 'Den ersten praktischen Anwendungsfall für Ihr Unternehmen finden.', lede: 'Wir betrachten Ihre aktuellen Tools, Ihr Unternehmenswissen und Ihre Anforderungen an Datenkontrolle — und identifizieren, wo Zuraio zuerst helfen könnte.' },
  },
  resources: {
    title: 'Ressourcen — Zuraio',
    hero: { marker: 'Ressourcen', heading: 'Technische und praktische Informationen über Zuraio.', lede: 'Leitfäden, Übersichten und Referenzmaterial für Teams, die Zuraio evaluieren oder einführen.' },
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
