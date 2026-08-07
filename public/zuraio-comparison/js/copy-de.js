export const heroOptions = [
  {
    headline: 'Ein digitaler Executive Assistant für alle Mitarbeitenden.',
    emphasis: 'Executive Assistant',
    paragraph:
      'Zuraio stellt allen Mitarbeitenden einen intelligenten Assistenten zur Seite, der Informationen findet, Fragen beantwortet, Dokumente vorbereitet und sie bei ihrer täglichen Arbeit unterstützt.',
    cta: 'Lernen Sie Ihren KI-Assistenten kennen',
    ctaHref: 'contact.html',
    imageAlt: 'Zuraio AI Hub mit Anwendungen und Chat-Oberfläche.',
  },
  {
    headline: 'Geben Sie allen Mitarbeitenden die Unterstützung eines Executive Assistants.',
    emphasis: 'Executive Assistant',
    paragraph:
      'Zuraio verbindet das Wissen und die Tools Ihres Unternehmens und unterstützt Ihre Teams bei Recherche, Texten, Analyse und alltäglichen Aufgaben.',
    cta: 'So funktioniert Zuraio',
    ctaHref: '#assistant-demo',
    imageAlt: 'Zuraio AI Hub mit Anwendungen und Chat-Oberfläche.',
  },
  {
    headline: 'Ein KI-Assistent, der Ihr Unternehmen kennt.',
    emphasis: 'KI-Assistent',
    paragraph:
      'Zuraio versteht Ihre Dokumente, Meetings, E-Mails und Ihr Unternehmenswissen, damit Mitarbeitende schneller Antworten finden und Arbeit erledigen können.',
    cta: 'Entdecken Sie den Zuraio AI Hub',
    ctaHref: 'knowledge.html',
    imageAlt: 'Zuraio AI Hub mit Anwendungen und Chat-Oberfläche.',
  },
  {
    headline: 'Der intelligente Workspace für Ihr gesamtes Unternehmen.',
    emphasis: 'Workspace',
    paragraph:
      'Durchsuchen Sie Unternehmenswissen, erstellen Sie Dokumente, analysieren Sie Informationen und erledigen Sie alltägliche Arbeit über einen sicheren AI Hub.',
    cta: 'Sehen Sie, was möglich ist',
    ctaHref: '#assistant-demo',
    imageAlt: 'Zuraio AI Hub mit Anwendungen und Chat-Oberfläche.',
  },
  {
    headline: 'Ein KI-Assistent für alle. Angetrieben von Ihrem Unternehmen.',
    emphasis: 'KI-Assistent',
    paragraph:
      'Zuraio macht aus Ihrem Unternehmenswissen sichere, praktische Unterstützung für alle Mitarbeitenden.',
    cta: 'Zuraio entdecken',
    ctaHref: 'how-it-helps.html',
    imageAlt: 'Zuraio AI Hub mit Anwendungen und Chat-Oberfläche.',
  },
];

export const problemOptions = [
  {
    heading: 'Lassen Sie Zuraio Ihr Unternehmenswissen leichter finden und nutzen.',
  },
  {
    heading: 'Lassen Sie Zuraio Ihre Informationen finden und die Arbeit voranbringen.',
  },
  {
    heading: 'Lassen Sie Zuraio Ihr Wissen verbinden und die Arbeit vereinfachen.',
  },
  {
    heading: 'Lassen Sie Zuraio Ihren Mitarbeitenden helfen, Antworten zu finden und Arbeit zu erledigen.',
  },
  {
    heading: 'Lassen Sie Zuraio Ihr Unternehmenswissen leichter finden, verstehen und nutzen.',
  },
];

export const trustSignals = [
  { label: 'Schweizer Hosting verfügbar', href: 'deployment-models.html#swiss-hosted' },
  { label: 'Quellen sichtbar', href: 'knowledge.html#traceability' },
  { label: 'Freigegebenes Unternehmenswissen', href: 'knowledge.html#skillos' },
  { label: 'Sie behalten die Kontrolle', href: 'data-control.html#data-ownership' },
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
    { label: 'So hilft Zuraio', href: 'how-it-helps.html' },
    { label: 'Wissen', href: 'knowledge.html' },
    { label: 'Integrationen', href: 'integrations.html' },
    { label: 'Datenkontrolle', href: 'data-control.html' },
  ],
  technical: [
    { label: 'Technische Architektur', href: 'technical-architecture.html' },
    { label: 'Bereitstellungsmodelle', href: 'deployment-models.html' },
    { label: 'KI-Governance', href: 'ai-governance.html' },
    { label: 'Datenkontrolle', href: 'data-control.html' },
    { label: 'Wissen und SkillOS', href: 'knowledge.html#skillos' },
  ],
  about: { label: 'Über uns', href: 'about.html' },
};

export const ui = {
  bookDemo: 'Demo buchen',
  technical: 'Technik',
  previous: '← Zurück',
  next: 'Weiter →',
  optionOf: (n) => `Option ${n} von 5`,
  optionLabel: (n) => `Option ${n}`,
  previousAria: 'Vorherige Hero-Option',
  nextAria: 'Nächste Hero-Option',
  heroOptionsGroup: 'Hero-Messaging-Optionen',
  trustAria: 'Vertrauen und Datenkontrolle',
  primaryNavAria: 'Hauptnavigation',
  logoAlt: 'Zuraio – own your data',
  langEn: 'EN',
  langDe: 'DE',
  langFr: 'FR',
  langIt: 'IT',
  languageLabel: 'Sprache',
  languageContact: 'Sprache und Kontakt',
  languageActive: 'aktiv',
  openMenu: 'Menü öffnen',
  closeMenu: 'Menü schliessen',
  zuraioHome: 'Zuraio Startseite',
};

export const home = {
  meta: {
    title: 'Zuraio — Ein digitaler Executive Assistant für alle Mitarbeitenden',
    description:
      'Zuraio — Ein digitaler Executive Assistant für alle Mitarbeitenden. KI für Schweizer Unternehmen, die die Kontrolle über ihre Daten behalten wollen.',
  },
  problem: {
    marker: 'Kommt Ihnen das bekannt vor?',
    headingHtml: 'Ihre Mitarbeitenden verbringen zu viel Zeit mit der Suche nach Informationen.',
    body: 'Wichtiges Wissen ist über E-Mails, Dokumente, Meetings und Geschäftssysteme verteilt. Mitarbeitende verlieren Zeit mit Suchen, Vorbereiten und Arbeiten, die anderswo bereits erledigt wurden.',
    cards: [
      {
        title: 'Wissen ist verstreut',
        body: 'Informationen sind über E-Mails, Dokumente, Meetings und Geschäftssysteme verteilt.',
      },
      {
        title: 'Routinearbeit kostet Zeit',
        body: 'Mitarbeitende verbringen viel Zeit mit Zusammenfassungen, Berichten und Nachfassarbeiten.',
      },
      {
        title: 'Antworten fehlt der Kontext',
        body: 'Ohne die richtigen Quellen und Zusammenhänge sind Antworten schwieriger zu finden und zu beurteilen.',
      },
    ],
    link: 'Praxisbeispiele ansehen →',
    illustration: {
      labels: {
        whereIsIt: 'Wo finde ich das?',
        whichDocument: 'Welches Dokument ist das richtige?',
        latestVersion: 'Ist das die aktuelle Version?',
        whoKnows: 'Wer weiss Bescheid?',
        doneBefore: 'Hat das schon jemand gemacht?',
        whoHasAccess: 'Wer hat Zugriff?',
      },
    },
  },
  different: {
    marker: 'Mehr als ein Chatbot',
    heading: 'Unternehmenswissen, das Ihre Mitarbeitenden weiterbringt.',
    headingEmphasis: 'Unternehmenswissen',
    body: 'Herkömmliche KI kennt nur das, was in jeder einzelnen Unterhaltung bereitgestellt wird. Zuraio greift sicher auf freigegebenes Unternehmenswissen zu, berücksichtigt den Kontext der fragenden Person und bereitet Antworten und Dokumente mit Quellen zur Prüfung vor.',
    bridge:
      'Im Hintergrund ist Zuraio darauf ausgelegt, spezialisierte KI-Assistenten, geeignete Modelle und angebundene Geschäftssysteme zu koordinieren. Die Mitarbeitenden arbeiten über eine einzige, übersichtliche Oberfläche.',
    bridgeLink: 'Technische Architektur entdecken →',
    without: {
      title: 'Ohne Zuraio',
      subtitle: 'Ein fragmentierter Prozess',
      steps: [
        { title: 'Allgemeine KI fragen' },
        { title: 'Dateien suchen und hinzufügen' },
        { title: 'Kontext erklären' },
        { title: 'Prüfen, zusammenstellen und wiederholen' },
      ],
    },
    with: {
      title: 'Mit Zuraio',
      subtitle: 'Ein verbundener Ablauf',
      steps: [
        { title: 'Zuraio fragen' },
        { title: 'Freigegebenes Wissen' },
        { title: 'Antwort mit Quellen' },
        { title: 'Prüfen und entscheiden' },
      ],
      outcome: 'Sie behalten die Kontrolle',
    },
  },
  integrations: {
    heading: 'Entwickelt für die Tools, die Ihr Team bereits nutzt.',
    body: 'Zuraio kann an freigegebene E-Mail-, Dokumenten-, Kommunikations- und Geschäftssysteme angebunden werden. Verfügbare Integrationen hängen von Ihrer Unternehmenskonfiguration, der Bereitstellung und dem aktuellen Produktstatus ab.',
    link: 'Alle Integrationen ansehen →',
  },
  demo: {
    heading: 'Sehen Sie Zuraio bei der Arbeit.',
    body: 'Zuraio stellt den relevanten Unternehmenskontext zusammen, bereitet die Arbeit vor und zeigt die verwendeten Quellen zur Prüfung an.',
    caption:
      'Zuraio kann eine Antwort an einen Kunden vorbereiten und dabei frühere Korrespondenz, aktuelle Dokumente und relevante Unternehmensinformationen berücksichtigen. Die Mitarbeitenden prüfen das Ergebnis und entscheiden über die nächsten Schritte.',
    video: '../zuraio/assets/zuraio-demo.mp4',
    poster: '../zuraio/assets/zuraio-demo-mail.png',
    videoAlt:
      'Zuraio E-Mail-Assistent mit vorbereitetem Antwortentwurf, Unternehmenskontext und sichtbaren Quellen.',
    steps: [
      { title: 'Eine Frage stellen', body: null },
      { title: 'Zuraio stellt den berechtigten Unternehmenskontext zusammen', body: null },
      { title: 'Antwort und Quellen prüfen', body: null },
    ],
  },
  dataControl: {
    marker: 'Datenkontrolle',
    positioning:
      'Für Schweizer KMU, die KI nutzen möchten, ohne die Kontrolle über ihre Unternehmensdaten aus der Hand zu geben.',
    heading: 'KI nutzen. Kontrolle behalten.',
    headingEmphasis: 'Kontrolle',
    body: 'Mit Zuraio bestimmen Unternehmen, wo die Lösung betrieben wird, welche Informationen sie nutzen darf, wer darauf zugreifen kann und wie Ergebnisse geprüft werden.',
    cards: [
      {
        title: 'Schweizer Hosting verfügbar',
        body: 'Für Unternehmen, die ihre Zuraio-Umgebung und Unternehmensdaten in der Schweiz halten möchten, steht eine Schweizer Hosting-Option zur Verfügung.',
      },
      {
        title: 'Zugriff nach Ihren Regeln',
        body: 'Mitarbeitende arbeiten nur mit Informationen, für die sie eine entsprechende Berechtigung haben.',
      },
      {
        title: 'Antworten mit Quellen',
        body: 'Nutzerinnen und Nutzer sehen, woher die verwendeten Informationen stammen, und können sie vor der weiteren Verwendung prüfen.',
      },
      {
        title: 'Für nachvollziehbare Prozesse',
        body: 'Je nach gewählter Konfiguration lassen sich Anfragen, Quellen und Ergebnisse nachvollziehen.',
      },
    ],
    note: '<b>Benötigen Sie zusätzliche Kontrolle?</b> Für Unternehmen mit erhöhten internen Anforderungen können On-Premise-Optionen und die Wahl der eingesetzten Modelle besprochen werden.',
    link: 'Datenkontrolle und Sicherheit entdecken →',
  },
  reviewable: {
    marker: 'KI-Governance',
    heading: 'KI, die auch später nachvollziehbar bleibt.',
    headingEmphasis: 'nachvollziehbar',
    bodyParagraphs: [
      'Der Einsatz von KI wird zunehmend genauer geprüft. Kunden, Revisionsstellen und Behörden erwarten vermehrt, dass Unternehmen erklären können, woher Informationen stammen und wie KI eingesetzt wurde.',
      'Zuraio unterstützt Sie dabei mit Antworten, deren Quellen sichtbar sind, und KI-Prozessen, die sich prüfen lassen.',
    ],
    steps: [
      { label: 'Was wurde gefragt?', title: 'Die Anfrage', body: 'Halten Sie fest, welche Frage gestellt oder welche Aufgabe erteilt wurde.' },
      { label: 'Welche Informationen wurden verwendet?', title: 'Die Quellen', body: 'Sehen Sie, welche freigegebenen Unternehmensinformationen verwendet wurden.' },
      { label: 'Was wurde erstellt?', title: 'Das Ergebnis', body: 'Prüfen Sie die erstellte Antwort, den Entwurf oder die Zusammenfassung.' },
      { label: 'Wer hat das Ergebnis geprüft?', title: 'Die Prüfung', body: 'Sehen Sie, wer das Ergebnis geprüft, bearbeitet oder freigegeben hat.' },
    ],
    link: 'Mehr zur KI-Governance →',
  },
  origin: {
    marker: 'Warum wir Zuraio entwickelt haben',
    heading: 'Entwickelt für Aufgaben, die wir selbst täglich erledigen.',
    paragraphs: [
      'Wir haben Zuraio entwickelt, weil bestehende KI-Anwendungen zwar Antworten erzeugen konnten, aber unser Unternehmenswissen, unsere Zugriffsregeln und unseren Arbeitskontext nicht kannten.',
      'Wir wollten einen Assistenten, der mit echten Geschäftsinformationen arbeiten kann – und bei dem die Menschen die Kontrolle darüber behalten, welche Informationen verwendet und welche Ergebnisse erstellt werden.',
      'So entstand Zuraio.',
    ],
    link: 'Unser Team kennenlernen →',
    caption: 'Entwickelt, weil wir es selbst brauchten.',
    imageAlt: 'Das Zuraio-Team bei der Arbeit.',
  },
  faq: {
    heading: 'Häufige Fragen',
    link: 'Alle Fragen ansehen →',
    items: [
      {
        question: 'Was ist Zuraio?',
        answer:
          'Zuraio ist ein digitaler Assistent für Unternehmen. Er hilft Mitarbeitenden, Informationen zu finden, Fragen zu beantworten und Dokumente auf Grundlage von freigegebenem Unternehmenswissen und angebundenen Geschäftsanwendungen vorzubereiten.',
      },
      {
        question: 'Bleiben unsere Unternehmensdaten in der Schweiz?',
        answer:
          'Zuraio bietet eine Schweizer Hosting-Option für Unternehmen, die ihre Umgebung und Unternehmensdaten in der Schweiz halten möchten. Weitere Anforderungen an die Bereitstellung werden anhand der Bedürfnisse Ihres Unternehmens geklärt.',
      },
      {
        question: 'Können Mitarbeitende auf Informationen zugreifen, für die sie keine Berechtigung haben?',
        answer:
          'Zuraio ist darauf ausgelegt, die bestehenden Zugriffsregeln Ihres Unternehmens zu berücksichtigen. Mitarbeitende sollen nur Informationen verwenden können, für die sie eine entsprechende Berechtigung haben. Die genaue Umsetzung hängt von den angebundenen Systemen und der vereinbarten Konfiguration ab.',
      },
      {
        question: 'Können wir sehen, auf welchen Quellen eine Antwort basiert?',
        answer:
          'Ja. Zuraio kann anzeigen, welche Unternehmensquellen für eine Antwort, ein Dokument oder eine Zusammenfassung verwendet wurden. So können Mitarbeitende die Informationen prüfen, bevor sie sie weiterverwenden.',
      },
      {
        question: 'Trifft Zuraio selbstständig Entscheidungen oder versendet es Inhalte automatisch?',
        answer:
          'Zuraio kann Antworten, Dokumente und nächste Schritte zur Prüfung vorbereiten. Welche Aktionen automatisch ausgeführt werden dürfen, richtet sich nach den Berechtigungen, Freigaberegeln und der gewählten Konfiguration Ihres Unternehmens.',
      },
      {
        question: 'Mit welchen Anwendungen kann Zuraio verbunden werden?',
        answer:
          'Zuraio ist dafür ausgelegt, mit bestehenden E-Mail-, Dokumenten-, Kommunikations- und Geschäftsanwendungen zusammenzuarbeiten. Welche Anbindungen verfügbar sind, hängt von den freigegebenen Tools und dem vereinbarten Umfang ab.',
      },
      {
        question: 'Müssen wir unsere bestehenden Systeme ersetzen?',
        answer:
          'Nein. Zuraio ist darauf ausgelegt, bestehende Tools zu ergänzen statt zu ersetzen. Anbindungen werden passend zu Ihren freigegebenen Systemen, Berechtigungen und dem vereinbarten Bereitstellungsumfang eingerichtet.',
      },
      {
        question: 'Wie lange dauert die Einführung?',
        answer:
          'Der Umfang hängt von Ihren Systemen, Datenquellen, Berechtigungsmodellen und der gewählten Bereitstellung ab. Ein typischer Weg beginnt mit ausgewählten Anwendungsfällen und wird nach der Prüfung schrittweise erweitert. Kontaktieren Sie uns, um Ihre Situation zu besprechen.',
      },
      {
        question: 'Bieten Sie Schulungen und laufenden Support an?',
        answer:
          'Schulungen und Support richten sich nach Ihrer Bereitstellung und der vereinbarten Zusammenarbeit. Diese Punkte werden im Rahmen Ihrer Einführung geklärt.',
      },
      {
        question: 'Ist Zuraio für Schweizer KMU gedacht?',
        answer:
          'Zuraio ist für Schweizer Unternehmen und mittelgrosse Organisationen konzipiert, die Kontrolle über Daten, Zugriff, Modellwahl und internes Wissen benötigen – einschliesslich inhabergeführter Betriebe, die praktische KI statt abstrakter Experimente suchen.',
      },
    ],
  },
  final: {
    heading: 'Entdecken Sie, was Ihr eigener Assistent Ihnen abnehmen kann.',
    body: 'Gemeinsam betrachten wir Ihre bestehenden Tools, Ihr Unternehmenswissen und Ihre Anforderungen an die Datenkontrolle. Anschliessend zeigen wir Ihnen, wo Zuraio Ihr Unternehmen zuerst unterstützen kann.',
    primaryCta: 'Private Demo buchen',
    secondaryCta: 'Zuraio bei der Arbeit sehen',
    supporting: 'Ihr Unternehmen. Ihre Informationen. Ihre Entscheidung.',
  },
};

export const pages = {
  howItHelps: {
    title: 'So hilft Zuraio — Zuraio',
    hero: {
      marker: 'So hilft Zuraio',
      heading: 'Weniger Administration. Mehr wertvolle Arbeit.',
      headingEmphasis: 'wertvolle',
      lede: 'Zuraio hilft Menschen, mit freigegebenem Unternehmenswissen vorzubereiten, zu suchen, zu entwerfen, zusammenzufassen und nachzufassen. Es arbeitet neben bestehenden Systemen und bringt den relevanten Kontext zusammen, wenn er gebraucht wird.',
    },
  },
  knowledge: {
    title: 'Wissen und SkillOS — Zuraio',
    hero: {
      marker: 'Wissen',
      heading: 'Verteilte Unternehmensinformationen werden zu kontrolliert nutzbarem Kontext.',
      lede: 'Wichtiges Wissen liegt häufig verteilt in Postfächern, gemeinsamen Ablagen, Besprechungsnotizen und Geschäftssystemen. Zuraio führt freigegebene Informationen und Arbeitsweisen zusammen, damit Mitarbeitende und spezialisierte Assistenten sie wirksamer nutzen können.',
    },
  },
  integrations: {
    title: 'Integrationen — Zuraio',
    hero: {
      marker: 'Integrationen',
      heading: 'Funktioniert mit den Systemen, die Ihr Team bereits nutzt.',
      lede: 'Zuraio ist darauf ausgelegt, Unternehmenswissen und Arbeitsabläufe zu verbinden, ohne funktionierende bestehende Systeme ersetzen zu müssen.',
    },
  },
  dataControl: {
    title: 'Datenkontrolle — Zuraio',
    hero: {
      marker: 'Datenkontrolle',
      heading: 'Ihre Daten bleiben unter Ihrer Kontrolle.',
      lede: 'Zuraio ist darauf ausgelegt, Unternehmensinformationen innerhalb der Grenzen der vereinbarten Bereitstellung und des Vertrags zu verarbeiten. Eigentum, zulässige Nutzung, Aufbewahrung und Verarbeitungsbedingungen müssen für die gewählte Lösung und die eingesetzten Modellanbieter dokumentiert werden.',
    },
  },
  deploymentModels: {
    title: 'Bereitstellungsmodelle — Zuraio',
    hero: {
      marker: 'Bereitstellung',
      heading: 'Lokal, hybrid oder in der Schweiz gehostet.',
      lede: 'Unternehmen stellen unterschiedliche Anforderungen an Datenstandort, Infrastruktur, Modellwahl, Betrieb und Kosten. Zuraio unterstützt Bereitstellungsarchitekturen, die an diese Anforderungen angepasst werden können.',
    },
  },
  technicalArchitecture: {
    title: 'Technische Architektur — Zuraio',
    hero: {
      marker: 'Technische Architektur',
      heading: 'Eine kontrollierbare KI-Plattform für Unternehmenswissen, spezialisierte Assistenten und Geschäftsprozesse.',
      lede: 'Zuraio verbindet eine zentrale Benutzeroberfläche mit Identitäts- und Zugriffssteuerung, Unternehmenswissen, spezialisierten KI-Assistenten, Modellwahl und Systemintegrationen. Die Orchestrierungsschicht koordiniert diese Komponenten, damit Mitarbeitende in einer einheitlichen Arbeitsumgebung arbeiten können.',
    },
  },
  aiGovernance: {
    title: 'KI-Governance — Zuraio',
    hero: {
      marker: 'KI-Governance',
      heading: 'KI-Nutzung, die verständlich und überprüfbar bleibt.',
      lede: 'Verantwortungsvolle KI im Unternehmen erfordert mehr als ein Modell. Organisationen benötigen klare Regeln für Wissen, Zugriffe, Modelle, Aktionen, menschliche Prüfung und betriebliche Nachweise.',
    },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: {
      marker: 'FAQ',
      heading: 'Praktische Fragen zum Einsatz von Zuraio im Unternehmen.',
      lede: 'Antworten auf häufige Fragen zu Unternehmenswissen, Bereitstellung, Berechtigungen, Modellen und dem Einsatz im Arbeitsalltag.',
    },
  },
  about: {
    title: 'Über uns — Zuraio',
    hero: {
      marker: 'Über Zuraio',
      heading: 'Entwickelt von Menschen, die einen besseren Weg arbeiten wollten.',
      headingEmphasis: 'besseren',
      lede: 'Zuraio begann mit einem praktischen Problem. Bestehende KI-Tools waren nützlich, verbanden aber Unternehmenswissen, Datenkontrolle und Alltagsarbeit nicht so, wie wir es brauchten.',
    },
  },
  contact: {
    title: 'Kontakt — Zuraio',
    hero: {
      marker: 'Kontakt',
      heading: 'Den ersten praktischen Anwendungsfall für Ihr Unternehmen finden.',
      headingEmphasis: 'praktischen',
      lede: 'Gemeinsam betrachten wir Ihre bestehenden Tools, Ihr Unternehmenswissen und Ihre Anforderungen an die Datenkontrolle. Anschliessend zeigen wir Ihnen, wo Zuraio zuerst helfen kann.',
    },
  },
  resources: {
    title: 'Ressourcen — Zuraio',
    hero: {
      marker: 'Ressourcen',
      heading: 'Technische und praktische Informationen über Zuraio.',
      headingEmphasis: 'praktische',
      lede: 'Leitfäden, Übersichten und Referenzmaterial für Teams, die Zuraio evaluieren oder einführen.',
    },
  },
  privacy: {
    title: 'Datenschutz — Zuraio',
    hero: {
      marker: 'Rechtliches',
      heading: 'Datenschutzerklärung.',
      lede: 'Diese Seite ist ein strukturierter Platzhalter. Eine vollständige Datenschutzerklärung muss von qualifizierten Rechtsberaterinnen und Rechtsberatern erstellt und geprüft werden, bevor sie veröffentlicht wird.',
    },
  },
  impressum: {
    title: 'Impressum — Zuraio',
    hero: {
      marker: 'Rechtliches',
      heading: 'Impressum.',
      lede: 'Diese Seite ist ein strukturierter Platzhalter. Alle Unternehmensangaben unten müssen verifiziert und eingefügt werden, bevor sie veröffentlicht werden.',
    },
  },
  terms: {
    title: 'Nutzungsbedingungen — Zuraio',
    hero: {
      marker: 'Rechtliches',
      heading: 'Nutzungsbedingungen.',
      lede: 'Diese Seite ist ein strukturierter Platzhalter. Vollständige Nutzungsbedingungen müssen von qualifizierten Rechtsberaterinnen und Rechtsberatern erstellt und geprüft werden, bevor sie veröffentlicht werden.',
    },
  },
  cookies: {
    title: 'Cookie-Einstellungen — Zuraio',
    hero: {
      marker: 'Rechtliches',
      heading: 'Cookie-Einstellungen.',
      lede: 'Diese Seite ist ein strukturierter Platzhalter. Tatsächliche Cookie-Kategorien und Steuerungen werden nach rechtlicher und technischer Prüfung veröffentlicht.',
    },
  },
};

export const site = {
  tagline: 'KI für Schweizer Unternehmen, die die Kontrolle über ihre Daten behalten wollen.',
};

export const footerGroups = [
  {
    title: 'Produkt',
    links: [
      { label: 'So hilft Zuraio', href: 'how-it-helps.html' },
      { label: 'Wissen', href: 'knowledge.html' },
      { label: 'Integrationen', href: 'integrations.html' },
      { label: 'Anwendungsfälle', href: 'how-it-helps.html#use-cases' },
      { label: 'Demo buchen', href: 'contact.html' },
    ],
  },
  {
    title: 'Daten und Sicherheit',
    links: [
      { label: 'Datenkontrolle', href: 'data-control.html' },
      { label: 'Schweizer Hosting', href: 'deployment-models.html#swiss-hosted' },
      { label: 'Bereitstellungsmodelle', href: 'deployment-models.html' },
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
      { label: 'Medien', href: 'resources.html#pressroom' },
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
