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
          { dt: 'Rechtlicher Name', dd: '[Name des Rechtsträgers]' },
          { dt: 'Rechtsform', dd: '[z. B. GmbH, AG]' },
          { dt: 'UID-/CHE-Nummer', dd: '[CHE-xxx.xxx.xxx]' },
        ],
      },
      {
        heading: 'Sitzadresse',
        type: 'dl',
        items: [
          { dt: 'Strasse', dd: '[Strasse und Hausnummer]' },
          { dt: 'PLZ und Ort', dd: '[PLZ Ort]' },
          { dt: 'Kanton / Land', dd: '[Kanton, Schweiz]' },
        ],
      },
      {
        heading: 'Kontakt',
        type: 'dl',
        items: [
          { dt: 'E-Mail', dd: '', mailto: true },
          { dt: 'Telefon', dd: '[Telefonnummer oder «nicht veröffentlicht»]' },
          { dt: 'Website', dd: '[https://zuraio.ch]' },
        ],
      },
      {
        heading: 'Vertreten durch',
        type: 'dl',
        items: [
          { dt: 'Geschäftsführung / Zeichnungsberechtigte', dd: '[Name(n) der vertretungsberechtigten Person(en)]' },
        ],
      },
      {
        heading: 'Handelsregister',
        type: 'dl',
        items: [
          { dt: 'Register', dd: '[Handelsregister des Kantons …]' },
          { dt: 'Eintragsnummer', dd: '[Eintragsnummer]' },
        ],
      },
      {
        heading: 'MWST / Steuern',
        type: 'dl',
        items: [{ dt: 'MWST-Nummer', dd: '[MWST-Nummer oder gegebenenfalls «nicht mehrwertsteuerpflichtig»]' }],
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        type: 'dl',
        items: [{ dt: 'Inhaltliche Verantwortung', dd: '[Name und Adresse gemäss anwendbarem Recht]' }],
      },
      {
        heading: 'Haftungsausschluss',
        paragraphs: [
          'Platzhalter: Die Inhalte dieser Website dienen ausschliesslich der allgemeinen Information. Trotz sorgfältiger Erstellung übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der Inhalte.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Durch einen rechtlich geprüften Haftungsausschluss ersetzen.',
      },
      {
        heading: 'Streitbeilegung',
        todo: 'NOCH ZU KLÄREN: Prüfen, ob ein Hinweis zur Online-Streitbeilegung erforderlich ist.',
      },
    ],
    lastUpdated: 'Letzte Aktualisierung: Noch zu ergänzen — Datum nach Freigabe des Impressums einsetzen.',
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
        paragraphs: ['[Name des Rechtsträgers]<br>[Sitzadresse]<br>[Kontakt-E-Mail]'],
        todo: 'NOCH ZU KLÄREN: Identität und Kontaktdaten des Verantwortlichen bestätigen.',
      },
      {
        heading: '2. Geltungsbereich',
        paragraphs: [
          'Diese Datenschutzerklärung wird beschreiben, wie wir Personendaten bearbeiten, wenn Sie diese Website besuchen, eine Anfrage senden, den Zuraio AI Hub nutzen oder auf andere Weise mit uns interagieren.',
        ],
        todo: 'NOCH ZU KLÄREN: Anwendbare Dienstleistungen und Bearbeitungstätigkeiten definieren.',
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
        todo: 'NOCH ZU KLÄREN: Genaue Datenkategorien und Datenquellen mit der Rechtsberatung bestätigen.',
      },
      {
        heading: '4. Zwecke und Rechtsgrundlagen',
        paragraphs: [
          'Zu den Bearbeitungszwecken können die Beantwortung von Anfragen, die Erbringung der Dienstleistung, die Verbesserung des Produkts, die Sicherheit und die Erfüllung gesetzlicher Pflichten gehören.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Für jeden Zweck die jeweilige Rechtsgrundlage angeben (Einwilligung, Vertrag, berechtigtes Interesse, gesetzliche Verpflichtung).',
      },
      {
        heading: '5. Weitergabe von Daten und Auftragsbearbeiter',
        paragraphs: [
          'Wir können Daten an Dienstleister weitergeben, die uns beim Betrieb der Website und des Produkts unterstützen, beispielsweise in den Bereichen Hosting, E-Mail, Analyse und KI-Modelle. Eine aktuelle Liste der Unterauftragsbearbeiter wird hier veröffentlicht.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Geprüfte Liste der Unterauftragsbearbeiter und Mechanismen für Datenübermittlungen veröffentlichen.',
      },
      {
        heading: '6. Internationale Datenübermittlungen',
        paragraphs: [
          'Werden Daten ausserhalb der Schweiz oder des EWR übermittelt, kommen angemessene Schutzmassnahmen zur Anwendung.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Mechanismen für Datenübermittlungen, beispielsweise Standardvertragsklauseln oder Angemessenheitsbeschlüsse, rechtlich prüfen und angeben.',
      },
      {
        heading: '7. Aufbewahrung',
        paragraphs: [
          'Personendaten werden nur so lange aufbewahrt, wie es für die beschriebenen Zwecke erforderlich oder gesetzlich vorgeschrieben ist.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Aufbewahrungsfristen für die einzelnen Datenkategorien angeben.',
      },
      {
        heading: '8. Ihre Rechte',
        paragraphs: [
          'Je nach anwendbarem Recht können Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Bearbeitung, Widerspruch und Datenübertragbarkeit haben. Sie können zudem berechtigt sein, bei einer Aufsichtsbehörde Beschwerde einzureichen.',
        ],
        todo: 'NOCH ZU KLÄREN: Anwendbare Rechte und Beschwerdeverfahren mit der Rechtsberatung bestätigen.',
      },
      {
        heading: '9. Cookies und Analyse',
        id: 'cookies',
        paragraphs: [
          'Diese Website kann notwendige Cookies und, sofern erforderlich und mit Ihrer Einwilligung, Analyse-Cookies verwenden. Eine Möglichkeit zur Verwaltung der Cookie-Einstellungen wird bereitgestellt.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Cookie-Banner implementieren und Cookie-Inventar veröffentlichen.',
      },
      {
        heading: '10. Sicherheit',
        paragraphs: [
          'Wir setzen angemessene technische und organisatorische Massnahmen zum Schutz von Personendaten ein. Die konkreten Massnahmen richten sich nach der Dienstleistung und dem Bereitstellungsmodell.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Geprüfte Sicherheitsbeschreibung ohne übertriebene Aussagen hinzufügen.',
      },
      {
        heading: '11. Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die jeweils aktuelle Version wird mit einem aktualisierten Datum auf dieser Seite veröffentlicht.',
        ],
        todo: 'Letzte Aktualisierung: Noch zu ergänzen — Datum nach Freigabe der Datenschutzerklärung einsetzen.',
      },
      {
        heading: '12. Kontakt',
        paragraphs: [
          'Für Datenschutzanfragen: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'NOCH ZU KLÄREN: Kontaktadresse für Datenschutzanfragen bestätigen und prüfen, ob ein Datenschutzbeauftragter erforderlich ist.',
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
        todo: 'NOCH ZU KLÄREN: Rechtliche Prüfung erforderlich — Geltungsbereich sowie einbezogene und ausgeschlossene Dienstleistungen definieren.',
      },
      {
        heading: '2. Nutzung der Website',
        paragraphs: [
          'Die zulässige Nutzung, untersagte Handlungen und Regeln für eine akzeptable Nutzung werden hier festgelegt.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Geprüfte Nutzungsbedingungen für die Website einsetzen.',
      },
      {
        heading: '3. Geistiges Eigentum',
        paragraphs: [
          'Die Rechte an den Inhalten der Website und den Marken sowie die zulässige Weiterverwendung werden hier geregelt.',
        ],
        todo: 'NOCH ZU KLÄREN: Aussagen zu Eigentums- und Nutzungsrechten bestätigen.',
      },
      {
        heading: '4. Hinweise und Vorbehalte',
        paragraphs: [
          'Produktbeschreibungen, Demonstrationen und technische Zusammenfassungen auf dieser Website dienen ausschliesslich der Information, sofern sie nicht Gegenstand einer separaten Vereinbarung sind.',
        ],
        todo: 'NOCH ZU KLÄREN: Rechtliche Prüfung der Hinweise zu Marketing- und Produktinformationen.',
      },
      {
        heading: '5. Haftungsbeschränkung',
        paragraphs: [
          'Die für die Nutzung der Website geltenden Haftungsbeschränkungen werden hier festgelegt.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Rechtlich geprüfte Haftungsbeschränkung einsetzen.',
      },
      {
        heading: '6. Anwendbares Recht',
        paragraphs: ['Das anwendbare Recht und der Gerichtsstand werden hier angegeben.'],
        todo: 'NOCH ZU KLÄREN: Anwendbares Recht und Gerichtsstand mit der Rechtsberatung bestätigen.',
      },
      {
        heading: '7. Kontakt',
        paragraphs: [
          'Bei Fragen zu diesen Bedingungen: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'NOCH ZU KLÄREN: Kontaktadresse nach Freigabe der Bedingungen bestätigen.',
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
        todo: 'NOCH ZU ERGÄNZEN: Nach Abschluss des Audits die tatsächlich verwendeten Technologien aufführen.',
      },
      {
        heading: '2. Cookie-Kategorien',
        paragraphs: ['Die folgenden Kategorien sind Platzhalter, bis ein Cookie-Audit abgeschlossen ist:'],
        list: [
          { strong: 'Unbedingt erforderlich', text: ' — für den grundlegenden Betrieb der Website notwendig' },
          { strong: 'Einstellungen', text: ' — Sprach- oder Oberflächeneinstellungen' },
          { strong: 'Analyse', text: ' — aggregierte Messung der Nutzung' },
          { strong: 'Marketing', text: ' — nur, wenn ausdrücklich genehmigt und implementiert' },
        ],
        todo: 'NOCH ZU ERGÄNZEN: Tatsächlich verwendete Cookie-Kategorien und Anbieter aufführen.',
      },
      {
        heading: '3. Ihre Auswahlmöglichkeiten',
        paragraphs: [
          'Ein Cookie-Einstellungscenter wird es Besucherinnen und Besuchern ermöglichen, nicht notwendige Cookies anzunehmen oder abzulehnen, sofern dies gesetzlich vorgeschrieben ist.',
        ],
        todoBlock:
          'NOCH ZU ERGÄNZEN: Genehmigten Consent-Manager integrieren. Solange kein tatsächliches Werkzeug verbunden ist, wird keine funktionslose Aktion «Einstellungen speichern» angezeigt.',
      },
      {
        heading: '4. Weitere Informationen',
        paragraphs: [
          'Weitere Informationen zur Datenbearbeitung finden Sie auch in der vorläufigen <a href="privacy.html">Datenschutzerklärung</a>.',
        ],
        todo: 'NOCH ZU ERGÄNZEN: Nach Freigabe auf die endgültige Datenschutzerklärung verlinken.',
      },
      {
        heading: '5. Kontakt',
        paragraphs: [
          'Für Fragen zu Cookies und Datenschutz: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'NOCH ZU KLÄREN: Kontaktadresse bestätigen.',
      },
    ],
  },
};
