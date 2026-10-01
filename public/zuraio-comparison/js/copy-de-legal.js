export const legalPages = {
  impressum: {
    banners: [
      {
        type: 'mono',
        text: 'NOCH ZU ERGÄNZEN: Alle nachstehenden Felder mit rechtlich geprüften Angaben vervollständigen. Nicht mit Platzhalterinhalten veröffentlichen.',
      },
    ],
    sections: [
      {
        heading: 'Unternehmen / Rechtsträger',
        type: 'dl',
        items: [
          { dt: 'Rechtlicher Name', dd: '—' },
          { dt: 'Rechtsform', dd: '—' },
          { dt: 'UID-/CHE-Nummer', dd: '—' },
        ],
      },
      {
        heading: 'Sitzadresse',
        type: 'dl',
        items: [
          { dt: 'Strasse', dd: '—' },
          { dt: 'PLZ und Ort', dd: '—' },
          { dt: 'Kanton / Land', dd: '—' },
        ],
      },
      {
        heading: 'Kontakt',
        type: 'dl',
        items: [
          { dt: 'E-Mail', dd: '', mailto: true },
          { dt: 'Telefon', dd: '—' },
          { dt: 'Website', dd: '—' },
        ],
      },
      {
        heading: 'Vertreten durch',
        type: 'dl',
        items: [
          { dt: 'Geschäftsführung / Zeichnungsberechtigte', dd: '—' },
        ],
      },
      {
        heading: 'Handelsregister',
        type: 'dl',
        items: [
          { dt: 'Register', dd: '—' },
          { dt: 'Eintragsnummer', dd: '—' },
        ],
      },
      {
        heading: 'MWST / Steuern',
        type: 'dl',
        items: [{ dt: 'MWST-Nummer', dd: '—' }],
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        type: 'dl',
        items: [{ dt: 'Inhaltliche Verantwortung', dd: '—' }],
      },
      {
        heading: 'Haftungsausschluss',
        paragraphs: [
          'Die Inhalte dieser Website dienen ausschliesslich der allgemeinen Information. Trotz sorgfältiger Erstellung übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der Inhalte.',
        ],
      },
      {
        heading: 'Streitbeilegung',
      },
    ],
  },

  privacy: {
    banners: [
      {
        type: 'status',
        label: 'PLATZHALTER — NICHT RECHTSVERBINDLICH',
        text: 'Dies ist ausschliesslich ein Platzhalter für die Entwicklungsphase. Kein Text auf dieser Seite ist als endgültige oder verbindliche Datenschutzerklärung zu verstehen. Nach der rechtlichen Prüfung ist der gesamte Inhalt zu ersetzen.',
      },
      {
        type: 'mono',
        text: 'NOCH ZU ERGÄNZEN: Die gesamte Seite durch eine rechtlich geprüfte Datenschutzerklärung ersetzen. Der Platzhaltertext ist nicht verbindlich.',
      },
    ],
    sections: [
      {
        heading: '1. Verantwortlicher',
        paragraphs: ['—<br>—<br><a href=\"mailto:michael.wili@zuraio.ch\">michael.wili@zuraio.ch</a>'],
      },
      {
        heading: '2. Geltungsbereich',
        paragraphs: [
          'Diese Datenschutzerklärung wird beschreiben, wie wir Personendaten bearbeiten, wenn Sie diese Website besuchen, eine Anfrage senden, den Zuraio AI Hub nutzen oder auf andere Weise mit uns interagieren.',
        ],
      },
      {
        heading: '3. Von uns erhobene Daten',
        paragraphs: ['Zu den Kategorien können gehören:'],
        list: [
          'Kontakt- und Identitätsdaten (Name, E-Mail-Adresse, Unternehmen, Funktion)',
          'Kommunikationsdaten (Anfragen, Supportkorrespondenz)',
          'Technische Daten (IP-Adresse, Browsertyp, Geräteinformationen)',
          'Nutzungsdaten (wie Sie die Website oder gegebenenfalls das Produkt nutzen)',
          'Unternehmensdaten, die über den Zuraio AI Hub bearbeitet werden (Gegenstand einer separaten Vereinbarung)',
        ],
      },
      {
        heading: '4. Zwecke und Rechtsgrundlagen',
        paragraphs: [
          'Zu den Bearbeitungszwecken können die Beantwortung von Anfragen, die Erbringung der Dienstleistung, die Verbesserung des Produkts, die Sicherheit und die Erfüllung gesetzlicher Pflichten gehören.',
        ],
      },
      {
        heading: '5. Weitergabe von Daten und Auftragsbearbeiter',
        paragraphs: [
          'Wir können Daten an Dienstleister weitergeben, die uns beim Betrieb der Website und des Produkts unterstützen, beispielsweise in den Bereichen Hosting, E-Mail, Analyse und KI-Modelle. Eine aktuelle Liste der Unterauftragsbearbeiter wird hier veröffentlicht.',
        ],
      },
      {
        heading: '6. Internationale Datenübermittlungen',
        paragraphs: [
          'Werden Daten ausserhalb der Schweiz oder des EWR übermittelt, kommen angemessene Schutzmassnahmen zur Anwendung.',
        ],
      },
      {
        heading: '7. Aufbewahrung',
        paragraphs: [
          'Personendaten werden nur so lange aufbewahrt, wie es für die beschriebenen Zwecke erforderlich oder gesetzlich vorgeschrieben ist.',
        ],
      },
      {
        heading: '8. Ihre Rechte',
        paragraphs: [
          'Je nach anwendbarem Recht können Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Bearbeitung, Widerspruch und Datenübertragbarkeit haben. Sie können zudem berechtigt sein, bei einer Aufsichtsbehörde Beschwerde einzureichen.',
        ],
      },
      {
        heading: '9. Cookies und Analyse',
        id: 'cookies',
        paragraphs: [
          'Diese Website kann notwendige Cookies und, sofern erforderlich und mit Ihrer Einwilligung, Analyse-Cookies verwenden. Eine Möglichkeit zur Verwaltung der Cookie-Einstellungen wird bereitgestellt.',
        ],
      },
      {
        heading: '10. Sicherheit',
        paragraphs: [
          'Wir setzen angemessene technische und organisatorische Massnahmen zum Schutz von Personendaten ein. Die konkreten Massnahmen richten sich nach der Dienstleistung und dem Bereitstellungsmodell.',
        ],
      },
      {
        heading: '11. Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die jeweils aktuelle Version wird mit einem aktualisierten Datum auf dieser Seite veröffentlicht.',
        ],
      },
      {
        heading: '12. Kontakt',
        paragraphs: [
          'Für Datenschutzanfragen: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
      },
    ],
  },

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
