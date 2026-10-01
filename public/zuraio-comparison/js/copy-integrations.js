/** Integrations page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §3 */

export const INTEGRATIONS_LOCALES = ['de', 'en'];

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
};

export function getIntegrationsCopy(locale) {
  return copyIntegrations[locale === 'de' ? 'de' : 'en'];
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
    logo: 'assets/integrations/proffix.svg',
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
