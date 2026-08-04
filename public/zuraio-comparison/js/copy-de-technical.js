/** German body copy for technical pages — exact source: Zuraio-technical-copy-DE.md */

export const statusLabels = {
  available: 'Heute verfügbar',
  validation: 'In Validierung',
  specified: 'Spezifiziert / in Entwicklung',
};

export const deployStatusLabels = {
  local: 'Projektbezogen verfügbar – Umfang bestätigen',
  hybrid: 'Architekturbezogen verfügbar – Komponenten bestätigen',
  swiss: 'Hosting-Option – technischer und kommerzieller Umfang erforderlich',
};

export const technicalArchitecture = {
  tocTitle: 'Auf dieser Seite',
  toc: [
    { href: '#overview', label: 'Architekturüberblick' },
    { href: '#request-flow', label: 'Anfrage-zu-Ergebnis-Ablauf' },
    { href: '#maturity', label: 'Produktreifegrad' },
    { href: '#models', label: 'Modellwahl' },
    { href: '#integration-layer', label: 'Integrationsschicht' },
    { href: '#rollout', label: 'Kontrolliert starten' },
  ],
  heroNote:
    'Die konkrete Architektur richtet sich nach der gewählten Bereitstellung, den angebundenen Systemen und den freigegebenen Modellen.',
  primaryCta: 'Technische Anforderungen besprechen',
  secondaryCta: 'Bereitstellungsmodelle vergleichen',
  overview: {
    marker: 'Architekturüberblick',
    heading: 'Eine Plattform. Sieben kontrollierte Ebenen.',
    lede: 'Zuraio trennt die Arbeitsoberfläche für Mitarbeitende von der technischen Komplexität im Hintergrund. Jede Ebene übernimmt eine klar definierte Aufgabe bei der Steuerung von Zugriff, Kontext, Ausführung und Prüfung.',
    layers: [
      {
        title: '1. Zugänge und Benutzeroberflächen',
        body: 'Mitarbeitende greifen über die Zuraio-Oberfläche oder über freigegebene, angebundene Anwendungen und Clients auf die Plattform zu. Welche Funktionen verfügbar sind, kann je nach Rolle, Bereitstellung und Endgerät variieren.',
      },
      {
        title: '2. Identitäten, Berechtigungen und Richtlinien',
        body: 'Bevor Unternehmenswissen, Werkzeuge oder Aktionen verfügbar werden, prüft Zuraio Identität, Rolle und Berechtigungen. Bestehende Identitätsstrukturen von Microsoft oder Google können eingebunden und bei Bedarf durch zusätzliche Zuraio-Rollen ergänzt werden.',
      },
      {
        title: '3. Orchestrierung',
        body: 'Die Orchestrierungsschicht interpretiert die Aufgabe, ermittelt den passenden Arbeitsablauf und koordiniert zulässiges Wissen, Assistenten, Werkzeuge und Modelle. Komplexere Aufgaben können in kontrollierte Teilschritte zerlegt und die Ergebnisse anschliessend zusammengeführt werden.',
      },
      {
        title: '4. SkillOS und Unternehmenswissen',
        body: 'SkillOS stellt freigegebenes Prozesswissen, relevanten Unternehmenskontext, Vorlagen und Qualitätsregeln bereit. Skills werden ausserhalb des KI-Modells versioniert und können dadurch geprüft, aktualisiert und kontrolliert verwaltet werden.',
      },
      {
        title: '5. Spezialisierte Assistenten und Integrationen',
        body: 'Spezialisierte Assistenten stellen klar abgegrenzte Fähigkeiten für Kommunikation, Wissen, Dokumente und kundenspezifische Aufgaben bereit. MCP, APIs, Webhooks und Connectoren ermöglichen einen kontrollierten Zugriff auf freigegebene Geschäftssysteme.',
      },
      {
        title: '6. Modell-Gateway',
        body: 'Je nach Aufgabe, Datenklassifikation, zulässigem Verarbeitungsort, Qualitätsanforderung und Kosten können unterschiedliche freigegebene KI-Modelle eingesetzt werden. Welche Modelle verfügbar sind, hängt von der gewählten Bereitstellung und den zugelassenen Anbietern ab.',
      },
      {
        title: '7. Protokollierung, Prüfung und Betrieb',
        body: 'Relevante Anfragen, Quellen, Aktionen und technische Ereignisse können entsprechend den Fähigkeiten der eingesetzten Komponenten und dem vereinbarten Audit-Modell festgehalten werden. Die betrieblichen Kontrollmöglichkeiten unterscheiden sich je nach Bereitstellung und Reifegrad.',
      },
    ],
    diagramTitle: 'Sieben Ebenen der Zuraio-Architektur: Zugänge, Identitäten und Richtlinien, Orchestrierung, SkillOS, spezialisierte Assistenten und Integrationen, Modell-Gateway sowie Prüfung und Betrieb.',
    diagramDesc:
      'Schematischer Ablauf: Benutzer oder angebundene Anwendung, Identitäten und Richtlinien, Orchestrierung, SkillOS, Assistenten und Integrationen, Modell-Gateway, Ergebnis und Quellen, Prüfung und Betriebsnachweise.',
    diagramCaption:
      'Schematische Plattformarchitektur. Komponentengrenzen und Betriebsorte unterscheiden sich je nach Kundenumgebung.',
    diagramLayers: [
      'Benutzer oder angebundene Anwendung',
      'Identitäten und Richtlinien',
      'Orchestrierung',
      'SkillOS / Assistenten / Integrationen',
      'Modell-Gateway',
      'Ergebnis und Quellen',
      'Prüfung und Betriebsnachweise',
    ],
  },
  requestFlow: {
    marker: 'Anfrage-zu-Ergebnis-Ablauf',
    heading: 'Ein kontrollierter Weg von der Anfrage zum Ergebnis.',
    lede: 'Zuraio ist darauf ausgelegt, Unternehmenskontext, Berechtigungen und Richtlinien während des gesamten Ablaufs anzuwenden – nicht erst bei einer abschliessenden Kontrolle.',
    steps: [
      {
        title: 'Anfrage entgegennehmen',
        body: 'Ein Mitarbeitender stellt über Zuraio oder eine freigegebene Anwendung eine Frage oder startet einen Arbeitsablauf.',
      },
      {
        title: 'Identität und Berechtigungen prüfen',
        body: 'Zuraio ermittelt Benutzer, Mandant, Rolle sowie zulässige Quellen und Aktionen.',
      },
      {
        title: 'Prozess und Kontext bestimmen',
        body: 'SkillOS kann freigegebenes Unternehmenswissen, Prozessschritte, Vorlagen und Qualitätsanforderungen bereitstellen.',
      },
      {
        title: 'Benötigte Fähigkeiten koordinieren',
        body: 'Die Orchestrierungsschicht wählt geeignete spezialisierte Assistenten, Werkzeuge, Datenquellen und ein zulässiges Modell aus.',
      },
      {
        title: 'Ergebnis vorbereiten',
        body: 'Informationen aus berechtigten Quellen werden zu einer Antwort, einem Entwurf oder einer vorgeschlagenen Aktion zusammengeführt.',
      },
      {
        title: 'Kritische Aktionen prüfen',
        body: 'Schreibende oder nach aussen wirksame Aktionen können als Entwurf oder Vorschlag zur Bestätigung vorgelegt werden.',
      },
      {
        title: 'Relevante Nachweise festhalten',
        body: 'Quellen, Versionen, Aktionen und technische Ereignisse werden dort dokumentiert, wo dies von der jeweiligen Komponente und Audit-Konfiguration unterstützt wird.',
      },
    ],
  },
  maturity: {
    marker: 'Aktueller Produktreifegrad',
    heading: 'Aktueller Produktreifegrad.',
    lede: 'Zuraio wird aus mehreren Komponenten aufgebaut. Die folgenden Statusangaben unterscheiden zwischen implementierten Funktionen, laufender Produktionsvalidierung und noch in Entwicklung befindlichen Fähigkeiten.',
    panels: [
      {
        status: 'available',
        title: 'SkillOS',
        items: [
          'Versioniertes Wissen und versionierte Prozess-Skills',
          'Governance-Lifecycle und Rollenmodell',
          'Hybrides Retrieval und Wissensbeziehungen',
          'Rollenbasierter MCP-Zugriff',
          'Backup-, Restore-, Wartungs- und Health-Funktionen',
          'Getesteter Kern mit Unit- und Integrationstests',
        ],
        qualification: null,
      },
      {
        status: 'validation',
        title: 'EmailAI',
        items: [
          'E-Mails suchen, abrufen und klassifizieren',
          'Antwortentwürfe vorbereiten',
          'Aufgaben, Termine, Kontakte und Memos verknüpfen',
          'Kommunikations-Wissensgraph',
          'Draft-First-Prinzip für schreibende Aktionen',
          'Web-, Mobile- und Voice-Zugänge',
        ],
        qualification:
          'Der vollständige Microsoft-365-Produktivbetrieb, zentrales Monitoring, automatisierte Backups sowie die vollständige Mehrbenutzer- und Mandantentrennung befinden sich weiterhin in Validierung oder Entwicklung.',
      },
      {
        status: 'specified',
        title: 'MSConnector und Office-Automatisierung',
        items: [
          'Kontrollierte Änderungen in Word, Excel und PowerPoint',
          'Office Add-ins',
          'Document Twin und semantische Anker',
          'Living Documents',
          'Dokumentenübergreifende Konsistenz',
          'Visuelle Dokumentenprüfung',
          'Tenant-Appliance-Bereitstellung',
        ],
        qualification:
          'Diese Fähigkeiten gehören zur spezifizierten Zielarchitektur. Bis zum Abschluss von Implementierung und Pilotvalidierung dürfen sie nicht als allgemein verfügbar dargestellt werden.',
      },
    ],
  },
  models: {
    marker: 'Modellwahl',
    heading: 'Für jede Aufgabe ein geeignetes Modell.',
    lede: 'Zuraio trennt Unternehmensprozesse, Skills und Integrationen vom jeweils eingesetzten KI-Modell. Dadurch kann die Architektur vor der Modellwahl die Aufgabe, die geforderte Qualität, die Datenklassifikation, den zulässigen Verarbeitungsort, die Verfügbarkeit und die Kosten berücksichtigen.',
    items: [
      'Lokale Modelle für ausgewählte vertrauliche oder kontrollierte Aufgaben',
      'Schweizer Modellangebote, sofern sie Teil der vereinbarten Bereitstellung sind',
      'Freigegebene Modelle in Private oder Public Clouds',
      'Leistungsfähigere Modelle für komplexe Schlussfolgerungen und hohe sprachliche Anforderungen',
      'Kleinere Modelle für klar definierte Routineprozesse',
      'Richtlinien, die festlegen, welche Daten an welches Modell übermittelt werden dürfen',
    ],
    qualification:
      'Die für einen Kunden verfügbaren Modelle und Anbieter richten sich nach der vereinbarten Bereitstellung, der technischen Validierung und den kommerziellen Bedingungen.',
    link: 'Bereitstellungsmodelle vergleichen →',
    linkHref: 'deployment-models.html',
  },
  integrationLayer: {
    marker: 'Offene Integrationsschicht',
    heading: 'Für Integration konzipiert – nicht als neues Silo.',
    lede: 'Zuraio ist als Orchestrierungsebene über bestehenden Unternehmenssystemen konzipiert. Es ersetzt nicht die Systeme, die weiterhin die führenden Datenquellen bleiben. Freigegebene Funktionen können über MCP, APIs, Webhooks und kundenspezifische Connectoren genutzt oder bereitgestellt werden.',
    items: [
      'Microsoft- und Google-Identitäts- und Datenumgebungen',
      'Dokument- und Dateiablagen',
      'E-Mail-, Kalender- und Kommunikationssysteme',
      'CRM-, ERP-, DMS- und Fachanwendungen',
      'Interne Datenbanken und APIs',
      'Kundenspezifische Assistenten und Werkzeuge',
    ],
    qualification: 'Verfügbarkeit und Reifegrad einzelner Integrationen müssen separat bestätigt werden.',
    link: 'Integrationskategorien ansehen →',
    linkHref: 'integrations.html',
  },
  rollout: {
    marker: 'Kontrolliert starten',
    heading: 'Kontrolliert starten. Auf Basis von Ergebnissen ausbauen.',
    steps: [
      'Erste Anwendungsfälle auswählen.',
      'Systeme, Identitäten und Datenquellen prüfen.',
      'Bereitstellung und Modellgrenzen vereinbaren.',
      'Berechtigungen und Prüfanforderungen konfigurieren.',
      'Mit ausgewählten Benutzern pilotieren.',
      'Ergebnisse, Risiken und Betriebsbereitschaft prüfen.',
      'Nachgewiesenen Nutzen auf weitere Arbeitsabläufe übertragen.',
    ],
  },
  cta: {
    heading: 'Besprechen Sie die technische Architektur mit uns.',
    button: 'Technisches Gespräch vereinbaren',
  },
};

export const knowledge = {
  skillos: {
    marker: 'SkillOS',
    heading: 'Von gespeicherten Informationen zu kontrolliertem Unternehmenswissen.',
    ledes: [
      'SkillOS verwaltet freigegebenes Wissen und Prozessvorgaben als versionierte, wiederverwendbare Skills. Ein Skill kann festlegen, welche Informationen zu verwenden sind, welcher Ablauf einzuhalten ist, welche Rollen zuständig sind, welche Werkzeuge zulässig sind und welches Ergebnis erwartet wird.',
      'Damit sucht Zuraio nicht nur nach Dokumenten. Ein spezialisierter Assistent kann genau das freigegebene Wissen und die Arbeitsweise erhalten, die für eine bestimmte Unternehmensaufgabe erforderlich sind.',
    ],
    cards: [
      {
        title: 'Versioniertes Wissen',
        body: 'Skills besitzen definierte Versionen und Lifecycle-Status. Freigegebene Vorgaben können dadurch ausserhalb des KI-Modells geprüft und aktualisiert werden.',
      },
      {
        title: 'Vernetzter Kontext',
        body: 'Das Retrieval kann Schlüsselbegriffe, strukturierte Metadaten, semantische Ähnlichkeit und Beziehungen zwischen zusammengehörigen Skills kombinieren.',
      },
      {
        title: 'Kontrollierte Änderungen',
        body: 'Neue oder geänderte Skills können einen Prüf- und Freigabeprozess durchlaufen, bevor sie für den operativen Einsatz bereitstehen.',
      },
    ],
  },
  skills: {
    marker: 'Skills',
    heading: 'Unternehmenswissen umfasst auch die Art, wie gearbeitet werden soll.',
    lede: 'Ein Zuraio Skill kann mehr als Referenzmaterial enthalten. Er kann den freigegebenen Prozess und die Bedingungen beschreiben, unter denen dieser angewendet werden soll.',
    items: [
      'Verbindliche Prozessschritte',
      'Rollen und Verantwortlichkeiten',
      'Eingaben, Abhängigkeiten und erwartete Ergebnisse',
      'Vorlagen und Formatvorgaben',
      'Qualitätsprüfungen und Review-Punkte',
      'Zulässige Quellen, Assistenten und Werkzeuge',
      'Version, Gültigkeit und Ablösung früherer Vorgaben',
    ],
  },
  sources: {
    marker: 'Freigegebene Quellen',
    heading: 'Freigegebene Quellen für unternehmensspezifische Antworten.',
    lede: 'Welche Quellen angebunden werden, hängt von der Organisation, den Berechtigungen und dem vereinbarten Integrationsumfang ab. Zuraio ist darauf ausgelegt, ausgewählte Unternehmensinformationen zu nutzen, statt sich ausschliesslich auf öffentliches Modellwissen zu stützen.',
    cards: [
      {
        title: 'Dokumente und Dateien',
        body: 'Richtlinien, Standards, Offerten, Projektdateien, Vorlagen und freigegebene gemeinsame Ablagen.',
      },
      {
        title: 'E-Mail und Kalender',
        body: 'Relevante Kommunikation, Besprechungskontext und Korrespondenz, sofern Berechtigungen und Integrationsstatus dies zulassen.',
      },
      {
        title: 'Geschäftssysteme',
        body: 'CRM-, ERP-, Projekt- und Fachsysteme mit betrieblichem Kontext.',
      },
      {
        title: 'Prozesswissen',
        body: 'Freigegebene SkillOS Skills mit genehmigten Abläufen, Vorlagen und Qualitätsregeln.',
      },
      {
        title: 'Kundenspezifische Quellen',
        body: 'Zusätzliche Informationen über freigegebene APIs oder kundenspezifische Connectoren.',
      },
    ],
    qualification:
      'Die konkreten Quellen und der jeweilige Integrationsstatus werden für jede Kundenumgebung bestätigt.',
  },
  traceability: {
    marker: 'Nachvollziehbarkeit',
    heading: 'Antworten, die sich anhand ihrer Quellen prüfen lassen.',
    lede: 'Wenn quellenbasiertes Unternehmenswissen verwendet wird, kann Zuraio die Herkunftsinformationen entsprechend dem gewählten Arbeitsablauf und der jeweiligen Oberfläche festhalten und anzeigen. So können Mitarbeitende wichtige Angaben prüfen, bevor sie diese weiterverwenden.',
    items: [
      'Wichtige Aussagen mit Originalinformationen abgleichen',
      'Nachvollziehen, welche Dokumente oder Systeme beigetragen haben',
      'Die Abhängigkeit von unbelegtem Modellwissen reduzieren',
      'Interne Prüf- und Governance-Prozesse unterstützen',
      'Soweit verfügbar, relevante Version oder Datum erkennen',
    ],
    qualification:
      'Die Darstellung von Quellen unterscheidet sich je nach Assistent, Oberfläche und Bereitstellung. Nicht jedes Ergebnis ist zwingend quellenbasiert.',
    link: 'Technische Architektur entdecken →',
    linkHref: 'technical-architecture.html',
  },
  cta: {
    heading: 'Sehen Sie, wie sich das Wissen Ihres Unternehmens verbinden lässt.',
    lede: 'Wir prüfen gemeinsam Ihre heutigen Quellen, Ihr Berechtigungsmodell und die ersten Fragen, die Ihre Teams beantworten möchten.',
    button: 'Private Demo buchen',
  },
};

export const dataControl = {
  ownership: {
    marker: 'Dateneigentum',
    heading: 'Ihre Daten bleiben unter Ihrer Kontrolle.',
    lede: 'Zuraio ist darauf ausgelegt, Unternehmensinformationen innerhalb der Grenzen der vereinbarten Bereitstellung und des Vertrags zu verarbeiten. Eigentum, zulässige Nutzung, Aufbewahrung und Verarbeitungsbedingungen müssen für die gewählte Lösung und die eingesetzten Modellanbieter dokumentiert werden.',
    cards: [
      {
        title: 'Das Unternehmen bleibt Eigentümer',
        body: 'Ihre Dokumente, E-Mails, Geschäftsunterlagen und Ihr internes Wissen bleiben Ihr Eigentum. Zuraio erhebt keinen Eigentumsanspruch auf Kundeninhalte.',
      },
      {
        title: 'Bedingungen der Modellanbieter werden vor der Anbindung geklärt',
        body: 'Ob Informationen von einem externen Modellanbieter gespeichert oder für Trainingszwecke verwendet werden dürfen, hängt vom gewählten Modell, Anbieter und den vertraglichen Bedingungen ab. Diese Voraussetzungen müssen geklärt sein, bevor Unternehmensinformationen angebunden werden.',
      },
    ],
  },
  identity: {
    marker: 'Identität und Berechtigungen',
    heading: 'Zugriff nach bestehenden Unternehmensregeln.',
    lede: 'Zuraio kann bestehende Identitäten, Gruppen und Berechtigungen von Microsoft oder Google einbinden. Wo diese Integrationen nicht verwendet werden, kann Zuraio zusätzliche Plattformrollen und Zugriffskontrollen bereitstellen.',
    cards: [
      {
        title: 'Bestehende Identitätsstrukturen',
        body: 'Identitätsinformationen von Microsoft oder Google können die organisatorische Grundlage für Benutzer-, Gruppen- und Rollenzugriffe bilden.',
      },
      {
        title: 'Berechtigungsprüfung',
        body: 'Identitäts- und Berechtigungskontext kann an den zuständigen Assistenten und die Datenquelle weitergegeben werden, damit der Zugriff beim Abruf von Informationen oder bei einer Aktion geprüft werden kann.',
      },
      {
        title: 'Zusätzliche Zuraio-Kontrollen',
        body: 'Zuraio-Richtlinien können zusätzliche Einschränkungen für Modelle, Werkzeuge, Datenklassen und Aktionen definieren, ohne das bestehende Identitätssystem des Unternehmens zu ersetzen.',
      },
    ],
    qualification:
      'Das konkrete Berechtigungsverhalten hängt vom angebundenen System, der Integrationsmethode und der vereinbarten Bereitstellung ab.',
  },
  actions: {
    marker: 'Kontrollierte Aktionen',
    heading: 'Informationen lesen und Informationen verändern sind nicht dasselbe.',
    lede: 'Zuraio ist darauf ausgelegt, lesende Arbeit von Aktionen zu unterscheiden, die Dokumente, Systeme oder externe Kommunikation verändern. Kritische oder schreibende Aktionen können als Entwurf oder Vorschlag vorbereitet und zur Bestätigung vorgelegt werden.',
    items: [
      'Freigegebene Informationen im Rahmen der Benutzerberechtigungen lesen',
      'Vorgeschlagene Antwort oder Änderung vorbereiten',
      'Geplante Aktion vor der Ausführung anzeigen',
      'Wo konfiguriert, eine Bestätigung verlangen',
      'Relevante Aktions- und Freigabeinformationen festhalten, sofern unterstützt',
    ],
    qualification:
      'Das Draft-First-Prinzip ist in EmailAI implementiert. Weitergehende Aktionskontrollen hängen von der jeweiligen Komponente und deren Reifegrad ab.',
  },
  policies: {
    marker: 'Modell- und Standortrichtlinien',
    heading: 'Steuern, welche Daten an welches Modell und welchen Ort gelangen dürfen.',
    lede: 'Richtlinien können Aufgabe, Datenklassifikation, zulässigen Verarbeitungsort und freigegebenen Modellanbieter berücksichtigen. Damit lassen sich Architekturen unterstützen, die lokale, Schweizer und freigegebene Cloud-Komponenten kombinieren.',
    link: 'Bereitstellungsmodelle vergleichen →',
    linkHref: 'deployment-models.html',
  },
  security: {
    marker: 'Sicherheit',
    heading: 'Sicherheit richtet sich nach der gewählten Bereitstellung.',
    lede: 'Zuraio-Bereitstellungen sind darauf ausgelegt, Daten bei der Übertragung und Speicherung zu schützen. Verschlüsselung, Schlüsselverwaltung, Speicherung, Protokollierung, Backup und Wiederherstellung müssen für die eingesetzten Komponenten und die konkrete Bereitstellung dokumentiert werden.',
    cards: [
      {
        title: 'Authentifizierung und Autorisierung',
        body: 'Der Zugriff wird über Identitäten, Rollen, Scopes und komponentenspezifische Berechtigungen gesteuert.',
      },
      {
        title: 'Mandanten- und Datentrennung',
        body: 'Das erforderliche Isolationsmodell wird für die gewählte Bereitstellung und die eingesetzten Komponenten festgelegt.',
      },
      {
        title: 'Protokollierung und Prüfung',
        body: 'Relevante Anfragen, Quellen und Aktionen können gemäss dem vereinbarten Audit-Modell und dem Reifegrad der jeweiligen Komponente festgehalten werden.',
      },
      {
        title: 'Bereitstellungsspezifische Schutzmassnahmen',
        body: 'Netzwerk-, Speicher-, Backup- und Betriebskontrollen werden als Teil des Bereitstellungsdesigns vereinbart.',
      },
    ],
    qualification:
      'Konkrete Aussagen zum Schweizer Datenschutzrecht, zur DSGVO, zu KI-Regulierung, Zertifizierungen und Unterauftragsbearbeitern erfordern eine separate rechtliche und technische Prüfung.',
    link: 'Mehr zur KI-Governance →',
    linkHref: 'ai-governance.html',
  },
  cta: {
    heading: 'Besprechen Sie Ihre Anforderungen an die Datenkontrolle.',
    lede: 'Wir prüfen gemeinsam Ihre Datenklassen, bestehenden Identitätssysteme, Infrastrukturvorgaben und die sinnvollste Bereitstellungsgrenze.',
    primary: 'Bereitstellungsmodelle ansehen',
    primaryHref: 'deployment-models.html',
    secondary: 'Private Demo buchen',
    secondaryHref: 'contact.html',
  },
};

export const deploymentModels = {
  models: {
    marker: 'Drei Modelle',
    heading: 'Lokal, hybrid und Schweizer Hosting.',
    cards: [
      {
        status: 'local',
        title: 'Lokal oder kundenseitig kontrolliert',
        intro:
          'Ausgewählte Zuraio-Komponenten, Assistenten oder Modelle können für den Betrieb in kundenseitig kontrollierter Infrastruktur oder einer Private Cloud ausgelegt werden.',
        items: [
          'Mehr Kontrolle über Verarbeitungs- und Speicherorte',
          'Geeignet für ausgewählte vertrauliche oder intern regulierte Aufgaben',
          'Lokale und freigegebene Cloud-Modelle gemäss Richtlinie möglich',
          'Höherer Einbezug der internen IT',
          'Betriebliche Verantwortung muss vereinbart werden',
        ],
        qualification:
          'Eine lokale Bereitstellung ist kein einheitliches Standardpaket. Komponenten, Hardware, Support, Updates, Backups und Modellanforderungen müssen pro Projekt bestätigt werden.',
      },
      {
        status: 'hybrid',
        title: 'Hybrid',
        intro:
          'In einer hybriden Architektur können Datenquellen, Assistenten und Modelle in unterschiedlichen freigegebenen Umgebungen betrieben und über eine gemeinsame Kontrollschicht koordiniert werden.',
        items: [
          'Sensibles Wissen kann in kundenseitig kontrollierten Systemen verbleiben',
          'Ausgewählte Verarbeitung kann in freigegebenen, verwalteten Umgebungen stattfinden',
          'Modellwahl kann sich nach Aufgabe und Datenklassifikation richten',
          'Assistenten können nahe bei den verwendeten Systemen betrieben werden',
          'Datenflüsse und Verantwortlichkeiten müssen dokumentiert werden',
        ],
        qualification: null,
      },
      {
        status: 'swiss',
        title: 'Schweizer Hosting',
        intro:
          'Für Unternehmen mit Anforderungen an einen Schweizer Datenstandort können ausgewählte Zuraio-Komponenten und geeignete Modelle für den Betrieb in einer Schweizer Serverumgebung ausgelegt werden.',
        items: [
          'Schweizer Verarbeitungs- und Speicheroptionen für vereinbarte Komponenten',
          'Geringerer interner Infrastrukturaufwand als bei einem vollständig lokalen Betrieb',
          'Konfigurierbare Berechtigungen und Modellrichtlinien',
          'Als Bestandteil einer hybriden Architektur einsetzbar',
          'Abhängig von vereinbarten Anbietern, Leistungen und Vertragsbedingungen',
        ],
        qualification:
          'Betreiber, Standorte, Modellanbieter, Unterauftragsbearbeiter und Datenflüsse müssen für das gewählte Angebot dokumentiert werden.',
      },
    ],
  },
  comparison: {
    marker: 'Vergleich',
    heading: 'Vergleich',
    headers: ['Aspekt', 'Lokal / kundenseitig kontrolliert', 'Hybrid', 'Schweizer Hosting'],
    rows: [
      ['Kontrolle des Datenstandorts', 'Innerhalb der kundenseitig kontrollierten Infrastruktur definiert', 'Nach Komponente und Datenfluss definiert', 'Für vereinbarte Schweizer Komponenten definiert'],
      ['Einbezug der internen IT', 'Höher', 'Mittel', 'Gering bis mittel'],
      ['Modellwahl', 'Lokale und freigegebene externe Modelle', 'Je nach Aufgabe und Richtlinie', 'Im vereinbarten Design verfügbare Modelle'],
      ['Betriebsverantwortung', 'Überwiegend Kunde oder geteilt', 'Geteilt', 'Überwiegend verwaltet, gemäss Vertrag'],
      ['Typische Eignung', 'Vertrauliche oder intern regulierte Aufgaben', 'Unterschiedliche Anforderungen nach System und Datenklasse', 'Unternehmen mit Bedarf an verwaltetem Schweizer Hosting'],
      ['Verfügbarkeit', 'Pro Projekt bestätigen', 'Pro Architektur bestätigen', 'Pro Angebot bestätigen'],
    ],
  },
  agreement: {
    marker: 'Vereinbarung',
    heading: 'Was bei jeder Bereitstellung festgelegt werden muss.',
    items: [
      'Betreiber und Verantwortlichkeiten',
      'Verarbeitungs- und Speicherorte',
      'Modellanbieter',
      'Netzwerkverbindungen',
      'Identity Provider',
      'Mandanten- und Datenisolation',
      'Backup und Wiederherstellung',
      'Monitoring und Support',
      'Update- und Patchprozess',
      'Aufbewahrungs- und Löschregeln',
      'Zulässige externe Dienste',
    ],
  },
  cta: {
    heading: 'Welches Bereitstellungsmodell passt zu Ihrem Unternehmen?',
    lede: 'Wir prüfen gemeinsam Ihre Anforderungen an Datenkontrolle, bestehende Infrastruktur und den sinnvollsten Einstieg.',
    primary: 'Private Demo buchen',
    primaryHref: 'contact.html',
    secondary: 'Technische Architektur ansehen',
    secondaryHref: 'technical-architecture.html',
  },
  heroQualification:
    'Die Verfügbarkeit eines konkreten Modells muss im technischen und kommerziellen Umfang bestätigt werden.',
};

export const aiGovernance = {
  governance: {
    marker: 'Governance',
    heading: 'Governance beginnt, bevor eine Antwort erzeugt wird.',
    lede: 'Zuraio kann Regeln auf Quellen, Skills, spezialisierte Assistenten, Modelle und Aktionen anwenden. Freigegebenes Prozesswissen lässt sich in SkillOS versionieren; kritische Änderungen oder externe Aktionen können zur menschlichen Bestätigung vorbereitet werden.',
    cards: [
      {
        title: 'Freigegebenes Wissen',
        body: 'Veröffentlichte Versionen von Unternehmens-Skills und Vorgaben können für den operativen Einsatz bereitgestellt werden.',
      },
      {
        title: 'Definierte Zugriffe',
        body: 'Identität, Rolle und Quellenberechtigungen bestimmen, welche Informationen und Fähigkeiten genutzt werden dürfen.',
      },
      {
        title: 'Kontrollierte Ausführung',
        body: 'Werkzeugparameter können validiert und lesende Vorgänge anders behandelt werden als Aktionen, die Informationen verändern oder nach aussen kommunizieren.',
      },
      {
        title: 'Menschliche Bestätigung',
        body: 'Sensible oder schreibende Aktionen können als Entwurf oder Vorschlag zurückgehalten werden, sofern die jeweilige Komponente diesen Ablauf unterstützt.',
      },
      {
        title: 'Relevante Nachweise',
        body: 'Anfragen, Quellen, Versionen, Aktionen und Freigaben können dort festgehalten werden, wo die gewählte Komponente und Bereitstellung dies unterstützen.',
      },
    ],
  },
  lifecycle: {
    marker: 'Skill-Lifecycle',
    heading: 'Unternehmensvorgaben aktuell und kontrolliert halten.',
    lede: 'SkillOS verwaltet Wissens- und Prozess-Skills über einen definierten Lifecycle. Vorgeschlagene Änderungen können geprüft werden, bevor eine neue Version für den operativen Einsatz freigegeben wird.',
    stages: ['Entwurf', 'In Prüfung', 'Genehmigt', 'Veröffentlicht', 'Abgelöst', 'Archiviert'],
    items: [
      'Qualitätsprüfungen vor Statuswechseln',
      'Getrennte Vorschlags- und Freigabeschritte',
      'Schutz veröffentlichter Skills vor unkontrollierten Änderungen',
      'Versionshistorie und Snapshots',
      'Eskalation bei erkannten Qualitätsproblemen',
    ],
  },
  draftFirst: {
    marker: 'Draft-First',
    heading: 'KI kann vorbereiten. Menschen bleiben verantwortlich.',
    lede: 'EmailAI setzt bei Aktionen, die Informationen verändern oder nach aussen kommunizieren, ein Draft-First-Prinzip ein. Das System kann eine Antwort oder Aktion vorbereiten, das geplante Ergebnis anzeigen und – wo erforderlich – auf eine Bestätigung warten.',
    qualification:
      'Welche Freigabe- und Aktionskontrollen verfügbar sind, hängt von der Komponente ab. Vollständige Abläufe für Änderungen an Office-Dokumenten sind weiterhin spezifiziert oder in Entwicklung.',
  },
  review: {
    marker: 'Prüfung',
    heading: 'Prüfen, was für die Entscheidung relevant ist.',
    cards: [
      { title: 'Die Anfrage', body: 'Welche Frage gestellt oder welche Aufgabe gestartet wurde.' },
      {
        title: 'Die Quellen',
        body: 'Welche freigegebenen Unternehmensinformationen beigetragen haben, sofern die Komponente Quellen nachverfolgt.',
      },
      {
        title: 'Der Prozess',
        body: 'Welcher veröffentlichte Skill, Assistent oder welches Werkzeug verwendet wurde, sofern dies von der Komponente protokolliert wird.',
      },
      {
        title: 'Das Ergebnis',
        body: 'Welche Antwort, welcher Entwurf oder welche vorgeschlagene Aktion erstellt wurde.',
      },
      {
        title: 'Die Prüfung',
        body: 'Wer eine Aktion geprüft oder bestätigt hat, sofern der Arbeitsablauf Freigaben dokumentiert.',
      },
    ],
    qualification:
      'Protokollinhalte, Aufbewahrung, Exportmöglichkeiten und Sichtbarkeit in der Benutzeroberfläche hängen von Komponente und Audit-Konfiguration ab.',
    link: 'Datenkontrolle entdecken →',
    linkHref: 'data-control.html',
  },
  limitations: {
    marker: 'Einschränkungen',
    heading: 'Wichtige Einschränkungen.',
    paragraphs: [
      'KI-generierte Ergebnisse können Fehler, Auslassungen oder veraltete Informationen enthalten. Wichtige Angaben sollten vor der Verwendung anhand der Originalquellen geprüft werden.',
      'Zuraio unterstützt die menschliche Arbeit. Es ersetzt weder professionelles Urteilsvermögen noch rechtliche, finanzielle oder andere qualifizierte Fachberatung.',
      'Die verfügbaren Funktionen hängen von Bereitstellung, Konfiguration, Reifegrad der Komponenten und Vertrag ab.',
      'Die Inhalte dieser Seite stellen keine rechtliche, regulatorische oder Compliance-Beratung dar.',
    ],
  },
  cta: {
    heading: 'Besprechen Sie die KI-Governance Ihres Unternehmens.',
    lede: 'Wir prüfen gemeinsam Ihr Berechtigungsmodell, Ihre Freigabeanforderungen und einen kontrollierten Weg zur praktischen Nutzung von KI.',
    button: 'Private Demo buchen',
  },
};

export const integrations = {
  methods: {
    marker: 'Methoden',
    heading: 'Eine flexible Integrationsschicht.',
    lede: 'Zuraio kann freigegebene Systeme und Fähigkeiten über MCP, APIs, Webhooks und kundenspezifische Connectoren anbinden. Welche Integrationen verfügbar sind, hängt vom Anwendungsfall, der Bereitstellung und dem aktuellen Produktstatus ab.',
    cards: [
      {
        title: 'MCP',
        body: 'Standardisierter Zugriff auf freigegebene Fähigkeiten von Assistenten und Werkzeugen.',
      },
      {
        title: 'APIs',
        body: 'Anbindung von Geschäftsanwendungen, internen Diensten und Datenquellen über definierte Schnittstellen.',
      },
      {
        title: 'Webhooks und Ereignisse',
        body: 'Unterstützung ausgewählter asynchroner Arbeitsabläufe und Systemereignisse.',
      },
      {
        title: 'Kundenspezifische Connectoren',
        body: 'Projektbezogene Anbindungen für Fachsysteme und interne Anwendungen.',
      },
    ],
  },
  categories: {
    marker: 'Kategorien',
    heading: 'Integrationskategorien.',
    lede: null,
    cards: [
      {
        title: 'E-Mail und Kalender',
        body: 'Outlook, Gmail und Kalenderumgebungen – abhängig vom aktuellen Integrationsstatus.',
      },
      {
        title: 'Produktivität und Dokumente',
        body: 'Microsoft 365, SharePoint, OneDrive, Google Workspace und freigegebene Dokumentablagen – abhängig vom aktuellen Integrationsstatus.',
      },
      {
        title: 'Zusammenarbeit und Kommunikation',
        body: 'Microsoft Teams, Slack und weitere freigegebene Kommunikationsplattformen – abhängig vom aktuellen Integrationsstatus.',
      },
      {
        title: 'CRM, ERP und Fachsysteme',
        body: 'Kunden-, Finanz-, Projekt- und Betriebssysteme über unterstützte oder kundenspezifische Schnittstellen.',
      },
      {
        title: 'APIs und interne Anwendungen',
        body: 'REST-APIs, Webhooks, Datenbanken, interne Werkzeuge und kundenspezifische Dienste.',
      },
    ],
    qualification: 'Kontaktieren Sie uns, um Status und möglichen Umfang einer konkreten Integration zu klären.',
  },
  components: {
    marker: 'Komponenten',
    heading: 'Aktueller Integrationskontext.',
    panels: [
      {
        status: 'validation',
        title: 'EmailAI',
        body: 'EmailAI enthält implementierte Kernfunktionen für E-Mail, Kommunikationskontext, Aufgaben, Termine, Kontakte und Antwortentwürfe. Der vollständige Microsoft-365-Produktivbetrieb befindet sich weiterhin in Validierung.',
      },
      {
        status: 'specified',
        title: 'MSConnector',
        body: 'Der Microsoft-365- und Office-Connector ist Bestandteil der spezifizierten Zielarchitektur. Die vollständige Automatisierung von Word, Excel, PowerPoint, SharePoint und OneDrive darf bis zum Abschluss von Implementierung und Pilotvalidierung nicht als allgemein verfügbar dargestellt werden.',
      },
      {
        status: null,
        title: 'Kundenspezifische Integrationen',
        body: 'MCP, APIs, Webhooks und kundenspezifische Connectoren bilden die technische Grundlage für projektbezogene Integrationen. Die Verfügbarkeit muss für jedes System einzeln beurteilt werden.',
      },
    ],
  },
  cta: {
    heading: 'Besprechen Sie Ihre Integrationsanforderungen.',
    lede: 'Teilen Sie uns mit, welche Systeme, Identitäten und Datenquellen für Ihren ersten Anwendungsfall wichtig sind. Wir klären den aktuellen Integrationsstatus und den notwendigen Aufwand.',
    primary: 'Integrationen besprechen',
    primaryHref: 'contact.html',
    secondary: 'Technische Architektur ansehen',
    secondaryHref: 'technical-architecture.html#integration-layer',
  },
};

export const faqItems = [
  {
    question: 'Was ist Zuraio AI Hub?',
    answer:
      'Zuraio AI Hub ist eine Plattform, die Unternehmenswissen, spezialisierte KI-Assistenten, zulässige Modelle und Integrationen in Geschäftssysteme zusammenführt. Mitarbeitende arbeiten in einer einheitlichen Umgebung, während Zuraio die relevanten Identitäts-, Berechtigungs- und Prozessregeln anwendet.',
  },
  {
    question: 'Für wen ist Zuraio gedacht?',
    answer:
      'Zuraio richtet sich zunächst an Schweizer KMU, die KI praktisch nutzen und gleichzeitig die Kontrolle über Unternehmenswissen, Zugriffe und Bereitstellungsmöglichkeiten behalten möchten. Die technische Architektur kann auch komplexere organisatorische Anforderungen unterstützen.',
  },
  {
    question: 'Wo werden unsere Daten verarbeitet?',
    answer:
      'Der Verarbeitungsort hängt von der gewählten Bereitstellung ab. Zuraio unterstützt Architekturen mit kundenseitig kontrollierter Infrastruktur, Private Cloud, Schweizer Hosting und hybriden Kombinationen. Konkrete Standorte, Modellanbieter und Datenflüsse werden für die vereinbarte Kundenumgebung dokumentiert.',
  },
  {
    question: 'Können wir bestimmen, welches KI-Modell eine Aufgabe bearbeitet?',
    answer:
      'Zuraio ist darauf ausgelegt, unterschiedliche freigegebene Modelle anhand von Aufgabe, Datenklassifikation, zulässigem Verarbeitungsort, Qualitätsanforderungen und Kosten einzusetzen. Welche Modelle verfügbar sind, hängt von der gewählten Bereitstellung und den Anbietern ab.',
  },
  {
    question: 'Können Benutzer nur auf Informationen zugreifen, für die sie berechtigt sind?',
    answer:
      'Zuraio kann Identitäten, Gruppen und Berechtigungen von Microsoft oder Google einbinden und bei Bedarf durch zusätzliche Zuraio-Rollen ergänzen. Das konkrete Zugriffsverhalten hängt vom angebundenen System, der Integrationsmethode und der vereinbarten Konfiguration ab.',
  },
  {
    question: 'Können wir sehen, welche Quellen für eine Antwort verwendet wurden?',
    answer:
      'Wenn quellenbasiertes Unternehmenswissen eingesetzt wird, kann Zuraio die Herkunftsinformationen entsprechend dem gewählten Assistenten und der jeweiligen Oberfläche festhalten und anzeigen. Nicht jedes Ergebnis ist zwingend quellenbasiert; die konkrete Darstellung unterscheidet sich je nach Komponente.',
  },
  {
    question: 'Wie verbindet sich Zuraio mit unseren bestehenden Tools?',
    answer:
      'Zuraio ist für Anbindungen über MCP, APIs, Webhooks und kundenspezifische Connectoren ausgelegt. Der verfügbare Umfang richtet sich nach System, Anwendungsfall und aktuellem Reifegrad der Integration.',
  },
  {
    question: 'Werden unsere Daten zum Training öffentlicher KI-Modelle verwendet?',
    answer:
      'Das hängt vom gewählten Modell, Anbieter und den vertraglichen Bedingungen ab. Aufbewahrung, Verarbeitung und eine mögliche Trainingsnutzung müssen geklärt sein, bevor Unternehmensinformationen angebunden werden.',
  },
  {
    question: 'Nimmt Zuraio automatisch Änderungen vor?',
    answer:
      'Zuraio kann Antworten, Entwürfe und vorgeschlagene Aktionen zur Prüfung vorbereiten. Welche Aktionen automatisch ausgeführt werden dürfen, hängt von Komponente, Berechtigungen, Freigaberegeln und gewählter Konfiguration ab.',
  },
  {
    question: 'Was ist heute verfügbar?',
    answer:
      'SkillOS ist die am weitesten entwickelte Zuraio-Komponente und stellt versioniertes Wissen, Retrieval und Governance-Funktionen bereit. EmailAI enthält implementierte Kernfunktionen für Kommunikation, die weiter für den Produktivbetrieb validiert werden. Die vollständige Microsoft-365- und Office-Automatisierung ist weiterhin spezifiziert oder in Entwicklung.',
  },
  {
    question: 'Wie beginnen wir?',
    answer:
      'Wir starten mit ausgewählten Anwendungsfällen, bestehenden Systemen, Identitäts- und Zugriffsanforderungen, Datenklassen und der gewünschten Bereitstellungsgrenze. Ein kontrollierter Pilot kann Nutzen, Integration und Betriebsanforderungen prüfen, bevor die Nutzung ausgeweitet wird.',
  },
  {
    question: 'Was ist ein Starter Partner?',
    answer:
      'Ein Starter Partner arbeitet mit Zuraio an einem klar definierten ersten Anwendungsfall und gibt während der Produktvalidierung strukturiertes Feedback. Umfang, Verantwortlichkeiten, Support und kommerzielle Bedingungen werden vor Projektbeginn vereinbart.',
  },
];

export const faqCta = {
  heading: 'Noch Fragen?',
  lede: 'Buchen Sie eine private Demo. Gemeinsam besprechen wir Ihre Systeme, Anforderungen an die Datenkontrolle und erste Arbeitsabläufe.',
  button: 'Kontakt aufnehmen',
};

export const technicalPages = {
  technicalArchitecture,
  knowledge,
  dataControl,
  deploymentModels,
  aiGovernance,
  integrations,
};
