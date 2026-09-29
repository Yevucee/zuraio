/** Preview pricing pages (DE/EN). */

export const copyAltPricing = {
  de: {
    title: 'Preise — Zuraio (Vorschau)',
    heading: 'Preise',
    intro: 'Überblick für die alternative Startseite. Alle Preise exkl. MWST.',
    companyHeading: 'Firmenpläne',
    companyIntro: 'Inklusive Konnektoren, Modell-Routing und gemeinsame Standard-KI-Nutzung. Bei jährlicher Zahlung zwei Monate gratis.',
    individualsHeading: 'Einzelpersonen und kleine Teams',
    /* Internal: Personal = Core (no second brain); Personal + Memory = Personal Brain; Team = Core Teams (no shared brain) */
    individualsNote: '[TODO: Kurzbeschreibung pro Plan — Personal, Personal + Memory, Team]',
    setupHeading: 'Einrichtung und eigene Skills',
    footnote: 'Alle Preise exkl. MWST.',
    employeeTodo: '[TODO: Was zählt als Mitarbeitende/r — alle Angestellten oder nur Nutzer/innen?]',
    backLink: '← Zurück zur Startseiten-Vorschau',
    backHref: 'homepage-preview.html',
    companyRows: [
      ['Bis 5', 'CHF 225', 'CHF 2\'250', 'CHF 37.50'],
      ['Bis 10', 'CHF 350', 'CHF 3\'500', 'CHF 29.17'],
      ['Bis 19', 'CHF 575', 'CHF 5\'750', 'CHF 25.22'],
      ['Bis 50', 'CHF 1\'190', 'CHF 11\'900', 'CHF 19.83'],
      ['Bis 100', 'CHF 1\'990', 'CHF 19\'900', 'CHF 16.58'],
      ['Bis 250', 'CHF 3\'950', 'CHF 39\'500', 'CHF 13.17'],
    ],
    individualRows: [
      ['Personal', 'CHF 19', 'CHF 190'],
      ['Personal + Memory', 'CHF 39', 'CHF 390'],
      ['Team', 'CHF 25 pro Sitz', 'CHF 250 pro Sitz'],
    ],
    setupRows: [
      [
        'Einrichtungs-Workshop',
        'CHF 1\'490',
        'Workshop 3 Stunden (vor Ort oder remote), Ihr erster eigener Skill, Check-in nach 2 Wochen. Hälfte wird angerechnet bei Jahresplan innert 30 Tagen.',
      ],
      [
        'Team-Workshop (ab 50 Mitarbeitende)',
        'CHF 2\'990',
        'Halbtages-Workshop mit zwei Zuraio-Mitarbeitenden, bis zu zwei eigene Skills, Check-in nach 2 Wochen. Hälfte wird angerechnet bei Jahresplan innert 30 Tagen.',
      ],
      ['Zusätzlicher eigener Skill', 'CHF 590 pro Stück', 'Mit Ihnen gebaut und getestet, mit Ihren Daten'],
    ],
    tableCompany: ['Mitarbeitende', 'Monatlich', 'Jährlich', 'Pro Person/Monat (Jahresplan)'],
    tableIndividual: ['Plan', 'Monatlich', 'Jährlich'],
    tableSetup: ['Leistung', 'Preis', 'Enthalten'],
  },
  en: {
    title: 'Pricing — Zuraio (preview)',
    heading: 'Pricing',
    intro: 'Overview for the alternative homepage preview. All prices excl. VAT.',
    companyHeading: 'Company plans',
    companyIntro: 'Includes connectors, model routing and pooled standard AI usage. Pay yearly and get two months free.',
    individualsHeading: 'Individuals and small teams',
    individualsNote: '[TODO: One-line description per plan — Personal, Personal + Memory, Team]',
    setupHeading: 'Set-up and bespoke skills',
    footnote: 'All prices excl. VAT.',
    employeeTodo: '[TODO: What counts as an employee — all staff or licensed users only?]',
    backLink: '← Back to homepage preview',
    backHref: 'homepage-preview.html',
    companyRows: [
      ['Up to 5', 'CHF 225', 'CHF 2,250', 'CHF 37.50'],
      ['Up to 10', 'CHF 350', 'CHF 3,500', 'CHF 29.17'],
      ['Up to 19', 'CHF 575', 'CHF 5,750', 'CHF 25.22'],
      ['Up to 50', 'CHF 1,190', 'CHF 11,900', 'CHF 19.83'],
      ['Up to 100', 'CHF 1,990', 'CHF 19,900', 'CHF 16.58'],
      ['Up to 250', 'CHF 3,950', 'CHF 39,500', 'CHF 13.17'],
    ],
    individualRows: [
      ['Personal', 'CHF 19', 'CHF 190'],
      ['Personal + Memory', 'CHF 39', 'CHF 390'],
      ['Team', 'CHF 25 per seat', 'CHF 250 per seat'],
    ],
    setupRows: [
      [
        'Set-up workshop',
        'CHF 1,490',
        '3-hour workshop (on site or remote), your first bespoke skill, check-in after 2 weeks. Half credited against an annual plan booked within 30 days.',
      ],
      [
        'Team workshop (from 50 employees)',
        'CHF 2,990',
        'Half-day workshop with two Zuraio people, up to two bespoke skills, check-in after 2 weeks. Half credited against an annual plan booked within 30 days.',
      ],
      ['Additional bespoke skill', 'CHF 590 each', 'Built and tested with you, using your own data'],
    ],
    tableCompany: ['Employees', 'Monthly', 'Yearly', 'Per employee per month (yearly plan)'],
    tableIndividual: ['Plan', 'Monthly', 'Yearly'],
    tableSetup: ['Service', 'Price', 'Includes'],
  },
};

export function getAltPricingCopy(locale) {
  return copyAltPricing[locale === 'en' ? 'en' : 'de'] ?? copyAltPricing.de;
}
