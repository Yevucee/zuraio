/** Integrations page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §3 */

export const INTEGRATIONS_LOCALES = ['de', 'en', 'fr', 'it'];

const GROUPS = {
  en: [
    {
      title: 'Finance, accounting and ERP',
      systems:
        'bexio · Klara · Proffix · Abacus · Banana Buchhaltung · Sage 50 · SAP Business One · Microsoft Dynamics 365 · Odoo',
    },
    {
      title: 'Email, calendar and collaboration',
      systems:
        'Microsoft Outlook · Microsoft Exchange · Microsoft Teams · Gmail · Google Calendar · Slack',
    },
    {
      title: 'Documents and files',
      systems:
        'Microsoft SharePoint · Microsoft OneDrive · Google Drive · Dropbox · network drives',
    },
    {
      title: 'CRM and sales',
      systems: 'Salesforce · HubSpot · Microsoft Dynamics 365 Sales',
    },
    {
      title: 'CAD and BIM',
      systems:
        'Autodesk AutoCAD · Autodesk Revit · Graphisoft ArchiCAD · Allplan · Vectorworks · Bentley MicroStation · Trimble Tekla Structures',
    },
    {
      title: '3D modelling and visualisation',
      systems:
        'Rhino · SketchUp · Autodesk 3ds Max · Cinema 4D · Blender · Twinmotion · Lumion',
    },
    {
      title: 'Engineering and product design',
      systems:
        'SolidWorks · Autodesk Inventor · Autodesk Fusion · Siemens NX · PTC Creo',
    },
    {
      title: 'Construction and project management',
      systems: 'Messerli · Sorba · Procore · Microsoft Project',
    },
    {
      title: 'Property management',
      systems: 'ImmoTop2 · Rimo R5 · GARAIO REM · Abacus Immobilien',
    },
    {
      title: 'Maps and GIS',
      systems: 'ArcGIS · QGIS',
    },
    {
      title: 'Your own systems',
      systems: 'APIs · databases · internal tools',
    },
  ],
  de: [
    {
      title: 'Finanzen, Buchhaltung und ERP',
      systems:
        'bexio · Klara · Proffix · Abacus · Banana Buchhaltung · Sage 50 · SAP Business One · Microsoft Dynamics 365 · Odoo',
    },
    {
      title: 'E-Mail, Kalender und Zusammenarbeit',
      systems:
        'Microsoft Outlook · Microsoft Exchange · Microsoft Teams · Gmail · Google Calendar · Slack',
    },
    {
      title: 'Dokumente und Dateien',
      systems:
        'Microsoft SharePoint · Microsoft OneDrive · Google Drive · Dropbox · Netzlaufwerke',
    },
    {
      title: 'CRM und Verkauf',
      systems: 'Salesforce · HubSpot · Microsoft Dynamics 365 Sales',
    },
    {
      title: 'CAD und BIM',
      systems:
        'Autodesk AutoCAD · Autodesk Revit · Graphisoft ArchiCAD · Allplan · Vectorworks · Bentley MicroStation · Trimble Tekla Structures',
    },
    {
      title: '3D-Modellierung und Visualisierung',
      systems:
        'Rhino · SketchUp · Autodesk 3ds Max · Cinema 4D · Blender · Twinmotion · Lumion',
    },
    {
      title: 'Engineering und Produktentwicklung',
      systems:
        'SolidWorks · Autodesk Inventor · Autodesk Fusion · Siemens NX · PTC Creo',
    },
    {
      title: 'Bau- und Projektmanagement',
      systems: 'Messerli · Sorba · Procore · Microsoft Project',
    },
    {
      title: 'Liegenschaftsverwaltung',
      systems: 'ImmoTop2 · Rimo R5 · GARAIO REM · Abacus Immobilien',
    },
    {
      title: 'Karten und GIS',
      systems: 'ArcGIS · QGIS',
    },
    {
      title: 'Eigene Systeme',
      systems: 'APIs · Datenbanken · interne Werkzeuge',
    },
  ],
  fr: [
    { title: 'Finances, comptabilité et ERP', systems: 'bexio · Klara · Proffix · Abacus · Banana Comptabilité · Sage 50 · SAP Business One · Microsoft Dynamics 365 · Odoo' },
    { title: 'E-mail, agenda et collaboration', systems: 'Microsoft Outlook · Microsoft Exchange · Microsoft Teams · Gmail · Google Calendar · Slack' },
    { title: 'Documents et fichiers', systems: 'Microsoft SharePoint · Microsoft OneDrive · Google Drive · Dropbox · lecteurs réseau' },
    { title: 'CRM et vente', systems: 'Salesforce · HubSpot · Microsoft Dynamics 365 Sales' },
    { title: 'CAO et BIM', systems: 'Autodesk AutoCAD · Autodesk Revit · Graphisoft ArchiCAD · Allplan · Vectorworks · Bentley MicroStation · Trimble Tekla Structures' },
    { title: 'Modélisation 3D et visualisation', systems: 'Rhino · SketchUp · Autodesk 3ds Max · Cinema 4D · Blender · Twinmotion · Lumion' },
    { title: 'Ingénierie et conception de produits', systems: 'SolidWorks · Autodesk Inventor · Autodesk Fusion · Siemens NX · PTC Creo' },
    { title: 'Construction et gestion de projet', systems: 'Messerli · Sorba · Procore · Microsoft Project' },
    { title: 'Gérance immobilière', systems: 'ImmoTop2 · Rimo R5 · GARAIO REM · Abacus Immobilien' },
    { title: 'Cartes et SIG', systems: 'ArcGIS · QGIS' },
    { title: 'Vos propres systèmes', systems: 'API · bases de données · outils internes' },
  ],
  it: [
    { title: 'Finanze, contabilità ed ERP', systems: 'bexio · Klara · Proffix · Abacus · Banana Contabilità · Sage 50 · SAP Business One · Microsoft Dynamics 365 · Odoo' },
    { title: 'E-mail, calendario e collaborazione', systems: 'Microsoft Outlook · Microsoft Exchange · Microsoft Teams · Gmail · Google Calendar · Slack' },
    { title: 'Documenti e file', systems: 'Microsoft SharePoint · Microsoft OneDrive · Google Drive · Dropbox · unità di rete' },
    { title: 'CRM e vendite', systems: 'Salesforce · HubSpot · Microsoft Dynamics 365 Sales' },
    { title: 'CAD e BIM', systems: 'Autodesk AutoCAD · Autodesk Revit · Graphisoft ArchiCAD · Allplan · Vectorworks · Bentley MicroStation · Trimble Tekla Structures' },
    { title: 'Modellazione 3D e visualizzazione', systems: 'Rhino · SketchUp · Autodesk 3ds Max · Cinema 4D · Blender · Twinmotion · Lumion' },
    { title: 'Ingegneria e progettazione di prodotti', systems: 'SolidWorks · Autodesk Inventor · Autodesk Fusion · Siemens NX · PTC Creo' },
    { title: 'Costruzione e gestione dei progetti', systems: 'Messerli · Sorba · Procore · Microsoft Project' },
    { title: 'Amministrazione immobiliare', systems: 'ImmoTop2 · Rimo R5 · GARAIO REM · Abacus Immobilien' },
    { title: 'Mappe e GIS', systems: 'ArcGIS · QGIS' },
    { title: 'I vostri sistemi', systems: 'API · banche dati · strumenti interni' },
  ],

};

export const copyIntegrations = {
  de: {
    metaTitle: 'Integrationen | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      heading: 'Arbeitet mit den Systemen, die Schweizer KMU wirklich nutzen.',
      sub: 'Ihr Team arbeitet weiter in den Werkzeugen, die es kennt: von bexio und Klara über Microsoft 365 bis zu Revit und ArchiCAD. Zuraio verbindet sich damit, so ist Ihr Wissen an einem Ort, ohne dass Sie es verschieben.',
    },
    swissBand: {
      heading: 'In Tagen verbunden, nicht in Monaten.',
      intro: 'Bei der Schweizer Software, mit der die meisten KMU arbeiten, ist die Verbindung schnell eingerichtet.',
    },
    allHeading: 'Womit sich Zuraio verbindet.',
    groups: GROUPS.de,
    groupsNote:
      'Fehlt Ihre Software? Hat sie eine Schnittstelle oder einen Export, können wir sie meist anbinden. Fragen Sie uns.',
    connect: {
      heading: 'Wie Zuraio sich verbindet.',
      cards: [
        { title: 'Fertige Connectoren', body: 'für verbreitete Systeme.' },
        { title: 'APIs', body: 'für Geschäftssoftware mit Standardschnittstelle.' },
        { title: 'MCP', body: 'der offene Standard, um KI mit Werkzeugen zu verbinden.' },
        {
          title: 'Eigene Connectoren',
          body: 'für Ihre eigenen oder branchenspezifischen Systeme.',
        },
      ],
      note: 'Zuraio ersetzt Ihre Systeme nicht. Ihre Daten bleiben dort, wo sie heute sind.',
    },
    cta: {
      heading: 'Sagen Sie uns, welche Systeme für Ihre erste Aufgabe wichtig sind.',
      body: 'Wir zeigen Ihnen in einer 30-Minuten-Demo, wie Zuraio sich damit verbindet.',
      demo: '30-Minuten-Demo buchen',
      itLink: 'Für Ihren IT-Partner →',
      itHref: 'technical-architecture.html',
    },
    trademark:
      'Alle Produktnamen sind Marken ihrer jeweiligen Inhaber. Ihre Nennung bedeutet keine Empfehlung oder Partnerschaft.',
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
  en: {
    metaTitle: 'Integrations | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      heading: 'Works with the systems Swiss SMEs actually use.',
      sub: 'Your team keeps working in the tools it knows: from bexio and Klara to Microsoft 365, Revit and ArchiCAD. Zuraio connects to them, so your knowledge is in one place without moving it anywhere.',
    },
    swissBand: {
      heading: 'Connected in days, not months.',
      intro: 'For the Swiss software most SMEs run on, the connection is quick to set up.',
    },
    allHeading: 'Everything Zuraio connects to.',
    groups: GROUPS.en,
    groupsNote:
      "Don't see your software? If it has an interface or an export, we can usually connect it. Ask us.",
    connect: {
      heading: 'How Zuraio connects.',
      cards: [
        { title: 'Ready connectors', body: 'for common systems.' },
        { title: 'APIs', body: 'for business software with a standard interface.' },
        { title: 'MCP', body: 'the open standard for connecting AI to tools.' },
        { title: 'Custom connectors', body: 'for your own or industry-specific systems.' },
      ],
      note: "Zuraio doesn't replace your systems. Your data stays where it lives today.",
    },
    cta: {
      heading: 'Tell us which systems matter for your first task.',
      body: "We'll show you how Zuraio connects to them, in a 30-minute demo.",
      demo: 'Book a 30-minute demo',
      itLink: 'For your IT partner →',
      itHref: 'technical-architecture.html',
    },
    trademark:
      'All product names are trademarks of their respective owners. Their use does not imply endorsement or partnership.',
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  fr: {
    metaTitle: 'Intégrations | Zuraio',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      heading: 'Fonctionne avec les systèmes que les PME suisses utilisent vraiment.',
      sub: 'Votre équipe continue de travailler avec les outils qu’elle connaît : de bexio et Klara à Microsoft 365, Revit et ArchiCAD. Zuraio s’y connecte, pour que vos connaissances soient réunies sans rien déplacer.',
    },
    swissBand: {
      heading: 'Connecté en quelques jours, pas en quelques mois.',
      intro: 'Pour les logiciels suisses qu’utilisent la plupart des PME, la connexion se met en place rapidement.',
    },
    allHeading: 'Tout ce à quoi Zuraio se connecte.',
    groups: GROUPS.fr,
    groupsNote:
      'Votre logiciel n’y figure pas? S’il dispose d’une interface ou d’un export, nous pouvons en général le connecter. Demandez-nous.',
    connect: {
      heading: 'Comment Zuraio se connecte.',
      cards: [
        { title: 'Connecteurs prêts à l’emploi', body: 'pour les systèmes courants.' },
        { title: 'API', body: 'pour les logiciels de gestion dotés d’une interface standard.' },
        { title: 'MCP', body: 'le standard ouvert pour connecter l’IA aux outils.' },
        { title: 'Connecteurs sur mesure', body: 'pour vos propres systèmes ou ceux de votre branche.' },
      ],
      note: 'Zuraio ne remplace pas vos systèmes. Vos données restent là où elles se trouvent aujourd’hui.',
    },
    cta: {
      heading: 'Dites-nous quels systèmes comptent pour votre première tâche.',
      body: 'Nous vous montrons comment Zuraio s’y connecte, lors d’une démo de 30 minutes.',
      demo: 'Réserver une démo de 30 minutes',
      itLink: 'Pour votre partenaire informatique →',
      itHref: 'technical-architecture.html',
    },
    trademark:
      'Tous les noms de produits sont des marques de leurs propriétaires respectifs. Leur utilisation n’implique ni recommandation ni partenariat.',
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },
  it: {
    metaTitle: 'Integrazioni | Zuraio',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      heading: 'Funziona con i sistemi che le PMI svizzere usano davvero.',
      sub: 'Il vostro team continua a lavorare con gli strumenti che conosce: da bexio e Klara a Microsoft 365, Revit e ArchiCAD. Zuraio si collega a questi strumenti, così le vostre conoscenze sono riunite senza spostarle.',
    },
    swissBand: {
      heading: 'Collegato in pochi giorni, non in mesi.',
      intro: 'Per i software svizzeri usati dalla maggior parte delle PMI, il collegamento si configura in fretta.',
    },
    allHeading: 'Tutto ciò a cui Zuraio si collega.',
    groups: GROUPS.it,
    groupsNote:
      'Il vostro software non c’è? Se ha un’interfaccia o un’esportazione, di solito possiamo collegarlo. Chiedeteci.',
    connect: {
      heading: 'Come si collega Zuraio.',
      cards: [
        { title: 'Connettori pronti', body: 'per i sistemi più diffusi.' },
        { title: 'API', body: 'per i software gestionali con un’interfaccia standard.' },
        { title: 'MCP', body: 'lo standard aperto per collegare l’IA agli strumenti.' },
        { title: 'Connettori su misura', body: 'per i vostri sistemi o quelli del vostro settore.' },
      ],
      note: 'Zuraio non sostituisce i vostri sistemi. I vostri dati restano dove si trovano oggi.',
    },
    cta: {
      heading: 'Diteci quali sistemi contano per il vostro primo compito.',
      body: 'Vi mostriamo come Zuraio si collega, in una demo di 30 minuti.',
      demo: 'Prenotare una demo di 30 minuti',
      itLink: 'Per il vostro partner informatico →',
      itHref: 'technical-architecture.html',
    },
    trademark:
      'Tutti i nomi di prodotti sono marchi dei rispettivi titolari. Il loro uso non implica approvazione né partenariato.',
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },

};

export function getIntegrationsCopy(locale) {
  return copyIntegrations[locale] ?? copyIntegrations.en;
}

export const SWISS_WORDMARK_CARDS = [
  {
    id: 'bexio',
    logo: 'assets/integrations/official/zuraio-logo-bexio.svg',
    alt: 'bexio',
    width: 96,
    height: 22,
  },
  {
    id: 'klara',
    logo: 'assets/integrations/official/zuraio-logo-klara.svg',
    alt: 'Klara',
    width: 95,
    height: 26,
  },
  {
    id: 'proffix',
    logo: 'assets/integrations/official/zuraio-logo-proffix.png',
    alt: 'Proffix',
    width: 99,
    height: 28,
  },
  {
    id: 'abacus',
    logo: 'assets/integrations/official/zuraio-logo-abacus.svg',
    alt: 'Abacus',
    width: 127,
    height: 22,
  },
];
