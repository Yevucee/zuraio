/** Homepage #skills sector tabs (EN + DE). Documents are rendered in alt-skills-sector.js */

export const SKILLS_TAB_IDS = ['architecture', 'fiduciary', 'property'];

export const skillsTabsMeta = {
  en: {
    tablistLabel: 'Choose your sector',
    docCaption: 'Example with invented data',
    workshopLine: 'Ready-made to start. Set up with your team in a workshop.',
    tabs: [
      { id: 'architecture', label: 'Architecture & engineering', hash: 'skills-architecture' },
      { id: 'fiduciary', label: 'Fiduciary', hash: 'skills-fiduciary' },
      { id: 'property', label: 'Property management', hash: 'skills-property' },
    ],
    panels: {
      architecture: {
        title: 'Quote in your house format',
        body:
          'Zuraio drafts the quote from the enquiry, with your fee structure, discount rules and terms. You check it and send it.',
        usesLabel: 'Uses:',
        sources: ['Enquiry', 'Price list', 'bexio'],
        badge: 'Draft',
        highlights: [
          { n: 1, label: 'Your house format' },
          { n: 2, label: 'Your discount rule' },
          { n: 3, label: 'Your standard terms' },
        ],
      },
      fiduciary: {
        title: 'Monthly client report, the way your partners like it',
        body:
          'Figures from Abacus and open points from your emails, in the structure your partners expect.',
        usesLabel: 'Uses:',
        sources: ['Abacus', 'Emails', 'Last report'],
        badge: 'Draft',
        highlights: [
          { n: 1, label: "Your partners' structure" },
          { n: 2, label: 'From Abacus' },
          { n: 3, label: 'Your wording' },
        ],
      },
      property: {
        title: 'Replies to tenants in your tone',
        body:
          "Answers from the tenant's message, the house rules and your standard clauses. Nothing goes out without your OK.",
        usesLabel: 'Uses:',
        sources: ['Tenant email', 'House rules', 'Your templates'],
        badge: 'Draft · not sent',
        highlights: [
          { n: 1, label: 'Your tone' },
          { n: 2, label: 'Your standard clause' },
          { n: 3, label: 'Waits for your OK' },
        ],
      },
    },
  },
  de: {
    tablistLabel: 'Branche wählen',
    docCaption: 'Beispiel mit erfundenen Daten',
    workshopLine: 'Fertig zum Start. Mit Ihrem Team in einem Workshop eingerichtet.',
    tabs: [
      { id: 'architecture', label: 'Architektur & Ingenieurwesen', hash: 'skills-architecture' },
      { id: 'fiduciary', label: 'Treuhand', hash: 'skills-fiduciary' },
      { id: 'property', label: 'Liegenschaftsverwaltung', hash: 'skills-property' },
    ],
    panels: {
      architecture: {
        title: 'Offerte in Ihrem Hausformat',
        body:
          'Zuraio entwirft die Offerte aus der Anfrage, mit Ihrer Honorarstruktur, Ihren Rabattregeln und Ihren Bedingungen. Sie prüfen und versenden sie.',
        usesLabel: 'Nutzt:',
        sources: ['Anfrage', 'Preisliste', 'bexio'],
        badge: 'Entwurf',
        highlights: [
          { n: 1, label: 'Ihr Hausformat' },
          { n: 2, label: 'Ihre Rabattregel' },
          { n: 3, label: 'Ihre Standardbedingungen' },
        ],
      },
      fiduciary: {
        title: 'Monatsreport für Mandanten, so wie Ihre Partner ihn wollen',
        body:
          'Zahlen aus Abacus und offene Punkte aus Ihren E-Mails, in der Struktur, die Ihre Partner erwarten.',
        usesLabel: 'Nutzt:',
        sources: ['Abacus', 'E-Mails', 'Letzter Report'],
        badge: 'Entwurf',
        highlights: [
          { n: 1, label: 'Struktur Ihrer Partner' },
          { n: 2, label: 'Aus Abacus' },
          { n: 3, label: 'Ihre Formulierung' },
        ],
      },
      property: {
        title: 'Antworten an Mieter in Ihrem Ton',
        body:
          'Antworten aus der Nachricht, der Hausordnung und Ihren Standardklauseln. Nichts geht ohne Ihre Freigabe raus.',
        usesLabel: 'Nutzt:',
        sources: ['Mieter-E-Mail', 'Hausordnung', 'Ihre Vorlagen'],
        badge: 'Entwurf · nicht gesendet',
        highlights: [
          { n: 1, label: 'Ihr Ton' },
          { n: 2, label: 'Ihre Standardklausel' },
          { n: 3, label: 'Wartet auf Ihre Freigabe' },
        ],
      },
    },
  },
};

export function getSkillsTabsMeta(locale) {
  return locale === 'de' ? skillsTabsMeta.de : skillsTabsMeta.en;
}
