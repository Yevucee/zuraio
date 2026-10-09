import { privacyPage } from './privacy-copy-de.js';

export const legalPages = {
  impressum: {
    sections: [
      {
        heading: 'Betreiber dieser Website',
        type: 'dl',
        items: [
          { dt: 'Rechtlicher Name und Rechtsform', dd: 'Noch zu bestätigen' },
          { dt: 'Postanschrift', dd: 'Noch zu bestätigen' },
        ],
      },
      {
        heading: 'Kontakt',
        type: 'dl',
        items: [{ dt: 'E-Mail', dd: '', mailto: true }],
      },
      {
        heading: 'Handelsregister',
        type: 'dl',
        items: [{ dt: 'Eintrag und Kanton', dd: 'Noch zu bestätigen' }],
      },
      {
        heading: 'Unternehmensidentifikation',
        type: 'dl',
        items: [{ dt: 'Unternehmens-Identifikationsnummer (UID)', dd: 'Noch zu bestätigen' }],
      },
      {
        heading: 'Mehrwertsteuer',
        type: 'dl',
        items: [{ dt: 'MWST-Status und MWST-Nummer', dd: 'Noch zu bestätigen' }],
      },
      {
        heading: 'Inhalte und externe Links',
        paragraphs: [
          'Wir erstellen die Inhalte dieser Website mit Sorgfalt. Sie dienen der allgemeinen Information und können geändert werden. Verlinkte Websites werden von Dritten betrieben; für deren Inhalte gelten die Angaben und Bedingungen der jeweiligen Betreiber.',
        ],
      },
      {
        heading: 'Urheberrechte',
        paragraphs: [
          'Die Inhalte dieser Website sind geschützt, soweit das anwendbare Recht dies vorsieht. Rechte Dritter bleiben vorbehalten. Für eine Nutzung ausserhalb der gesetzlich erlaubten Fälle ist die Zustimmung des jeweiligen Rechteinhabers erforderlich.',
        ],
      },
      {
        heading: 'Datenschutz',
        paragraphs: [
          'Informationen zur Bearbeitung von Personendaten finden Sie in unserer <a href="privacy.html">Datenschutzerklärung</a>.',
        ],
      },
    ],
  },

  privacy: privacyPage,

  terms: {
    banners: [
      {
        type: 'status',
        label: 'PLATZHALTER — NICHT RECHTSVERBINDLICH',
        text: 'Dies ist ausschliesslich ein Platzhalter für die Entwicklungsphase. Kein Text auf dieser Seite ist als vertraglich bindend oder endgültig zu verstehen. Nach der rechtlichen Prüfung ist der gesamte Inhalt zu ersetzen.',
      },
    ],
    sections: [
      {
        heading: '1. Geltungsbereich',
        paragraphs: [
          'Diese Bedingungen werden die Nutzung der Zuraio-Website und der zugehörigen Marketingmaterialien regeln.',
        ],
      },
      {
        heading: '2. Nutzung der Website',
        paragraphs: [
          'Die zulässige Nutzung, untersagte Handlungen und Regeln für eine akzeptable Nutzung werden hier festgelegt.',
        ],
      },
      {
        heading: '3. Geistiges Eigentum',
        paragraphs: [
          'Die Rechte an den Inhalten der Website und den Marken sowie die zulässige Weiterverwendung werden hier geregelt.',
        ],
      },
      {
        heading: '4. Hinweise und Vorbehalte',
        paragraphs: [
          'Produktbeschreibungen, Demonstrationen und technische Zusammenfassungen auf dieser Website dienen ausschliesslich der Information, sofern sie nicht Gegenstand einer separaten Vereinbarung sind.',
        ],
      },
      {
        heading: '5. Haftungsbeschränkung',
        paragraphs: [
          'Die für die Nutzung der Website geltenden Haftungsbeschränkungen werden hier festgelegt.',
        ],
      },
      {
        heading: '6. Anwendbares Recht',
        paragraphs: ['Das anwendbare Recht und der Gerichtsstand werden hier angegeben.'],
      },
      {
        heading: '7. Kontakt',
        paragraphs: [
          'Bei Fragen zu diesen Bedingungen: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
      },
    ],
  },

  cookies: {
    banners: [
      {
        type: 'status',
        label: 'PLATZHALTER — KEIN COOKIE-BANNER AKTIV',
        text: 'Dies ist ausschliesslich ein Platzhalter für die Entwicklungsphase. Es ist noch kein Cookie-Consent-Manager für den Produktivbetrieb eingebunden. Die nachstehenden Kategorien und Einstellungsmöglichkeiten dienen nur der Veranschaulichung, bis die rechtliche und technische Prüfung abgeschlossen ist.',
      },
    ],
    sections: [
      {
        heading: '1. Was sind Cookies?',
        paragraphs: [
          'Cookies und ähnliche Technologien können eingesetzt werden, um die Website zu betreiben, Einstellungen zu speichern, die Nutzung zu messen oder eingebettete Dienste zu unterstützen.',
        ],
      },
      {
        heading: '2. Cookie-Kategorien',
        paragraphs: ['Cookie-Kategorien können umfassen:'],
        list: [
          { strong: 'Unbedingt erforderlich', text: ' — für den grundlegenden Betrieb der Website notwendig' },
          { strong: 'Einstellungen', text: ' — Sprach- oder Oberflächeneinstellungen' },
          { strong: 'Analyse', text: ' — aggregierte Messung der Nutzung' },
          { strong: 'Marketing', text: ' — nur, wenn ausdrücklich genehmigt und implementiert' },
        ],
      },
      {
        heading: '3. Ihre Auswahlmöglichkeiten',
        paragraphs: [
          'Ein Cookie-Einstellungscenter wird es Besucherinnen und Besuchern ermöglichen, nicht notwendige Cookies anzunehmen oder abzulehnen, sofern dies gesetzlich vorgeschrieben ist.',
        ],
      },
      {
        heading: '4. Weitere Informationen',
        paragraphs: [
          'Weitere Informationen zur Datenbearbeitung finden Sie auch in der vorläufigen <a href="privacy.html">Datenschutzerklärung</a>.',
        ],
      },
      {
        heading: '5. Kontakt',
        paragraphs: [
          'Für Fragen zu Cookies und Datenschutz: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
      },
    ],
  },
};
