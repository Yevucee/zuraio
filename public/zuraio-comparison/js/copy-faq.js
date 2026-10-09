/** FAQ page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §6 */

export const FAQ_LOCALES = ['de', 'en', 'fr', 'it'];

/** Homepage preview FAQ ids (shared text with faq.html). */
export const FAQ_HOME_PREVIEW_ITEM_IDS = [
  'chatgpt-copilot',
  'is-our-data-kept-in-switzerland',
  'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
  'can-employees-see-information-they-shouldnt',
  'does-zuraio-send-anything-automatically',
];

export const copyFaq = {
  en: {
    metaTitle: 'FAQ | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      heading: 'Questions we\'re often asked.',
      sub: 'Short, honest answers. If yours isn\'t here, write to us.',
    },
    groups: [
      {
        id: 'about-zuraio',
        heading: 'About Zuraio',
        items: [
          {
            id: 'chatgpt-copilot',
            q: 'Why not just use ChatGPT or Copilot?',
            a: 'You don\'t have to choose. ChatGPT only knows your company if someone shares the context each time. Copilot knows your Microsoft 365 world well, and reaching other systems usually needs connectors your IT builds. Zuraio comes connected to the systems Swiss SMEs use, like bexio, Abacus and Proffix, with skills we build with your team. It is model neutral: Swiss models by default, and GPT or Claude for tasks your company approves.',
          },
          {
            id: 'what-is-zuraio',
            q: 'What is Zuraio?',
            a: 'An AI assistant for Swiss SMEs. It answers emails, prepares meetings and finds information in your company knowledge, with sources, hosted in Switzerland. It works with skills: tasks it knows how to do your way.',
          },
          {
            id: 'who-is-zuraio-for',
            q: 'Who is Zuraio for?',
            a: 'Swiss companies with roughly 5 to 250 employees whose knowledge is spread across email, documents and business software. Many of our first conversations are with architecture and engineering offices, fiduciaries and property managers.',
          },
          {
            id: 'which-software-does-zuraio-work-with',
            q: 'Which software does Zuraio work with?',
            a: 'Swiss business software such as bexio, Klara, Proffix and Abacus, Microsoft 365 and Google Workspace, CRM systems, and technical software such as AutoCAD, Revit, ArchiCAD and Rhino. The full list is on our Integrations page.',
          },
          {
            id: 'how-do-we-get-started',
            q: 'How do we get started?',
            a: 'With a 30-minute talk where we pick one task worth improving. Then a set-up workshop where we build your first skill with your team, a check-in after two weeks, and you decide whether to continue.',
          },
          {
            id: 'what-is-a-starter-partner',
            q: 'What is a starter partner?',
            a: 'One of our first customers. Starter partners work directly with the founders, get early access and help decide what we build next. Commercial terms are agreed individually.',
          },
        ],
      },
      {
        id: 'data-and-control',
        heading: 'Data and control',
        items: [
          {
            id: 'is-our-data-kept-in-switzerland',
            q: 'Is our data kept in Switzerland?',
            a: 'Yes, by default. Zuraio and your company data are hosted by Infomaniak in Switzerland, and the default AI model runs in Switzerland too. For individual tasks you can choose another model; each one is labelled with where it runs, and only that task\'s content is sent.',
          },
          {
            id: 'is-our-data-used-to-train-ai-models',
            q: 'Is our data used to train AI models?',
            a: 'No. Your data is never used to train AI models.',
          },
          {
            id: 'can-employees-see-information-they-shouldnt',
            q: 'Can employees see information they shouldn\'t?',
            a: 'No. Zuraio uses your existing permissions from Microsoft or Google. People only see what they\'re already allowed to see.',
          },
          {
            id: 'does-zuraio-send-anything-automatically',
            q: 'Does Zuraio send anything automatically?',
            a: 'No. Replies and changes are prepared as drafts. A person checks them and decides.',
          },
          {
            id: 'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
            q: 'What happens if an AI provider changes its prices or terms?',
            a: 'You switch to another model. Your data and your skills stay with you, because they\'re kept separate from the model.',
          },
          {
            id: 'can-we-see-which-sources-were-used',
            q: 'Can we see which sources were used?',
            a: 'Yes. Answers based on your company knowledge show the documents or systems they came from.',
          },
        ],
      },
      {
        id: 'for-your-it-team',
        heading: 'For your IT team',
        items: [
          {
            id: 'where-is-our-data-stored',
            q: 'Where is our data stored?',
            a: 'In Swiss hosting at Infomaniak (ISO 27001:2022). Hybrid and on-premise set-ups are possible on request.',
          },
          {
            id: 'can-external-ai-models-be-switched-off',
            q: 'Can external AI models be switched off?',
            a: 'Yes. You decide which models are allowed, and you can limit Zuraio to Swiss-hosted models only.',
          },
          {
            id: 'are-our-chats-with-zuraio-saved',
            q: 'Are our chats with Zuraio saved?',
            a: 'Yes, inside your company\'s Zuraio, so people can come back to earlier work. Chats belong to the employee and to your company. They aren\'t shared outside your company and are never used to train AI models.',
          },
          {
            id: 'are-there-audit-records',
            q: 'Are there audit records?',
            a: 'Yes. Requests, sources, actions and approvals are recorded according to the audit set-up we agree with you.',
          },
          {
            id: 'how-do-you-connect-to-our-systems',
            q: 'How do you connect to our systems?',
            a: 'Through ready connectors, APIs, MCP or custom connectors. The Integrations page lists the systems we connect to.',
          },
        ],
      },
    ],
    itTeamLink: 'Questions for your IT team? See the technical details →',
    cta: {
      heading: 'Still have a question?',
      body: 'Write to us. One of the founders will get back to you in days, not weeks.',
      button: 'Contact us',
      buttonRoute: 'contact',
    },
    homePreview: {
      moreLabel: 'More questions',
      linkAll: 'View all questions →',
      linkIt: 'Questions your IT team will ask →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  de: {
    metaTitle: 'FAQ | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      heading: 'Fragen, die man uns oft stellt.',
      sub: 'Kurze, ehrliche Antworten. Fehlt Ihre Frage, schreiben Sie uns.',
    },
    groups: [
      {
        id: 'about-zuraio',
        heading: 'Über Zuraio',
        items: [
          {
            id: 'chatgpt-copilot',
            q: 'Warum nicht einfach ChatGPT oder Copilot?',
            a: 'Sie müssen sich nicht entscheiden. ChatGPT kennt Ihr Unternehmen nur, wenn jemand den Kontext jedes Mal teilt. Copilot kennt Ihre Microsoft-365-Welt gut; für andere Systeme braucht es meist Konnektoren, die Ihre IT aufbaut. Zuraio ist bereits mit den Systemen verbunden, die Schweizer KMU nutzen, etwa bexio, Abacus und Proffix, und mit Skills, die wir mit Ihrem Team aufbauen. Zuraio ist modellneutral: standardmässig Schweizer Modelle, GPT oder Claude für Aufgaben, die Ihr Unternehmen freigibt.',
          },
          {
            id: 'what-is-zuraio',
            q: 'Was ist Zuraio?',
            a: 'Ein KI-Assistent für Schweizer KMU. Er beantwortet E-Mails, bereitet Sitzungen vor und findet Informationen in Ihrem Firmenwissen, mit Quellen und in der Schweiz gehostet. Er arbeitet mit Skills: Aufgaben, die er auf Ihre Art erledigt.',
          },
          {
            id: 'who-is-zuraio-for',
            q: 'Für wen ist Zuraio?',
            a: 'Für Schweizer Betriebe mit rund 5 bis 250 Mitarbeitenden, deren Wissen in E-Mails, Dokumenten und Geschäftssoftware verteilt ist. Viele unserer ersten Gespräche führen wir mit Architektur- und Ingenieurbüros, Treuhänderinnen und Treuhändern sowie Liegenschaftsverwaltungen.',
          },
          {
            id: 'which-software-does-zuraio-work-with',
            q: 'Mit welcher Software arbeitet Zuraio?',
            a: 'Mit Schweizer Geschäftssoftware wie bexio, Klara, Proffix und Abacus, mit Microsoft 365 und Google Workspace, mit CRM-Systemen und mit technischer Software wie AutoCAD, Revit, ArchiCAD und Rhino. Die vollständige Liste finden Sie auf unserer Seite Integrationen.',
          },
          {
            id: 'how-do-we-get-started',
            q: 'Wie fangen wir an?',
            a: 'Mit einem 30-minütigen Gespräch, in dem wir eine Aufgabe auswählen, die sich lohnt. Danach folgen ein Einrichtungs-Workshop, in dem wir mit Ihrem Team den ersten Skill entwickeln, und nach zwei Wochen eine Zwischenbilanz. Dann entscheiden Sie, ob es weitergeht.',
          },
          {
            id: 'what-is-a-starter-partner',
            q: 'Was ist ein Starter-Partner?',
            a: 'Einer unserer ersten Kunden. Starter-Partner arbeiten direkt mit den Gründern, erhalten frühen Zugang und bestimmen mit, was wir als Nächstes bauen. Die kommerziellen Bedingungen vereinbaren wir individuell.',
          },
        ],
      },
      {
        id: 'data-and-control',
        heading: 'Daten und Kontrolle',
        items: [
          {
            id: 'is-our-data-kept-in-switzerland',
            q: 'Bleiben unsere Daten in der Schweiz?',
            a: 'Ja, standardmässig. Zuraio und Ihre Firmendaten werden bei Infomaniak in der Schweiz gehostet, und auch das Standardmodell läuft in der Schweiz. Für einzelne Aufgaben können Sie ein anderes Modell wählen. Jedes ist gekennzeichnet, damit Sie sehen, wo es arbeitet, und nur der Inhalt dieser Aufgabe wird übermittelt.',
          },
          {
            id: 'is-our-data-used-to-train-ai-models',
            q: 'Werden unsere Daten zum Trainieren von KI-Modellen verwendet?',
            a: 'Nein. Ihre Daten werden nie zum Trainieren von KI-Modellen verwendet.',
          },
          {
            id: 'can-employees-see-information-they-shouldnt',
            q: 'Sehen Mitarbeitende Informationen, die sie nicht sehen dürfen?',
            a: 'Nein. Zuraio übernimmt Ihre bestehenden Berechtigungen von Microsoft oder Google. Mitarbeitende sehen nur, was sie heute schon sehen dürfen.',
          },
          {
            id: 'does-zuraio-send-anything-automatically',
            q: 'Versendet Zuraio etwas automatisch?',
            a: 'Nein. Antworten und Änderungen werden als Entwurf vorbereitet. Eine Person prüft sie und entscheidet.',
          },
          {
            id: 'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
            q: 'Was passiert, wenn ein KI-Anbieter Preise oder Bedingungen ändert?',
            a: 'Sie wechseln zu einem anderen Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen, weil sie vom Modell getrennt sind.',
          },
          {
            id: 'can-we-see-which-sources-were-used',
            q: 'Sehen wir, welche Quellen verwendet wurden?',
            a: 'Ja. Antworten aus Ihrem Firmenwissen zeigen die Dokumente oder Systeme, aus denen sie stammen.',
          },
        ],
      },
      {
        id: 'for-your-it-team',
        heading: 'Für Ihr IT-Team',
        items: [
          {
            id: 'where-is-our-data-stored',
            q: 'Wo werden unsere Daten gespeichert?',
            a: 'Im Schweizer Hosting bei Infomaniak (ISO 27001:2022). Hybride Lösungen oder der Betrieb auf eigenen Servern sind auf Anfrage möglich.',
          },
          {
            id: 'can-external-ai-models-be-switched-off',
            q: 'Lassen sich externe KI-Modelle abschalten?',
            a: 'Ja. Sie legen fest, welche Modelle erlaubt sind, und können Zuraio auf Modelle mit Schweizer Hosting beschränken.',
          },
          {
            id: 'are-our-chats-with-zuraio-saved',
            q: 'Werden unsere Chats mit Zuraio gespeichert?',
            a: 'Ja, in der Zuraio-Umgebung Ihres Betriebs, damit man auf frühere Arbeit zurückgreifen kann. Chats gehören der jeweiligen Person und Ihrem Betrieb. Sie werden nicht ausserhalb Ihres Betriebs geteilt und nie zum Trainieren von KI-Modellen verwendet.',
          },
          {
            id: 'are-there-audit-records',
            q: 'Gibt es Audit-Protokolle?',
            a: 'Ja. Anfragen, Quellen, Aktionen und Freigaben werden gemäss der mit Ihnen vereinbarten Audit-Konfiguration festgehalten.',
          },
          {
            id: 'how-do-you-connect-to-our-systems',
            q: 'Wie verbinden Sie sich mit unseren Systemen?',
            a: 'Über fertige Connectoren, APIs, MCP oder eigene Connectoren. Die Seite Integrationen listet die Systeme auf, mit denen wir uns verbinden.',
          },
        ],
      },
    ],
    itTeamLink: 'Fragen für Ihr IT-Team? Technische Details ansehen →',
    cta: {
      heading: 'Noch eine Frage?',
      body: 'Schreiben Sie uns. Einer unserer Gründer meldet sich in Tagen, nicht in Wochen.',
      button: 'Kontakt',
      buttonRoute: 'contact',
    },
    homePreview: {
      moreLabel: 'Weitere Fragen',
      linkAll: 'Alle Fragen →',
      linkIt: 'Fragen, die Ihre IT stellen wird →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
  fr: {
    metaTitle: 'FAQ | Zuraio',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      heading: 'Les questions qu’on nous pose souvent.',
      sub: 'Des réponses courtes et franches. Si votre question n’y figure pas, écrivez-nous.',
    },
    groups: [
      {
        id: 'about-zuraio',
        heading: 'À propos de Zuraio',
        items: [
          {
            id: 'chatgpt-copilot',
            q: 'Pourquoi pas simplement ChatGPT ou Copilot?',
            a: 'Vous n’avez pas à choisir. ChatGPT ne connaît votre entreprise que si quelqu’un lui fournit le contexte à chaque fois. Copilot connaît bien votre univers Microsoft 365, et pour accéder à d’autres systèmes, il faut en général des connecteurs que votre informatique développe. Zuraio est déjà connecté aux systèmes qu’utilisent les PME suisses, comme bexio, Abacus et Proffix, avec des skills que nous développons avec votre équipe. Il est neutre vis-à-vis des modèles : des modèles suisses par défaut, et GPT ou Claude pour les tâches que votre entreprise autorise.',
          },
          {
            id: 'what-is-zuraio',
            q: 'Qu’est-ce que Zuraio?',
            a: 'Un assistant IA pour les PME suisses. Il répond aux e-mails, prépare les séances et trouve des informations dans les connaissances de votre entreprise, avec les sources, hébergé en Suisse. Il fonctionne avec des skills : des tâches qu’il sait accomplir à votre façon.',
          },
          {
            id: 'who-is-zuraio-for',
            q: 'À qui s’adresse Zuraio?',
            a: 'Aux entreprises suisses d’environ 5 à 250 collaborateurs, dont les connaissances sont réparties entre e-mails, documents et logiciels de gestion. Beaucoup de nos premiers échanges ont lieu avec des bureaux d’architecture et d’ingénieurs, des fiduciaires et des gérances immobilières.',
          },
          {
            id: 'which-software-does-zuraio-work-with',
            q: 'Avec quels logiciels Zuraio fonctionne-t-il?',
            a: 'Avec des logiciels de gestion suisses comme bexio, Klara, Proffix et Abacus, avec Microsoft 365 et Google Workspace, des systèmes CRM et des logiciels techniques comme AutoCAD, Revit, ArchiCAD et Rhino. La liste complète figure sur notre page Intégrations.',
          },
          {
            id: 'how-do-we-get-started',
            q: 'Comment commencer?',
            a: 'Par un entretien de 30 minutes, où nous choisissons une tâche qui vaut la peine d’être améliorée. Ensuite, un atelier de mise en place où nous développons votre premier skill avec votre équipe, un point après deux semaines, puis vous décidez de continuer ou non.',
          },
          {
            id: 'what-is-a-starter-partner',
            q: 'Qu’est-ce qu’un partenaire de lancement?',
            a: 'L’un de nos premiers clients. Les partenaires de lancement travaillent directement avec les fondateurs, bénéficient d’un accès anticipé et contribuent à décider de ce que nous développons ensuite. Les conditions commerciales sont convenues individuellement.',
          },
        ],
      },
      {
        id: 'data-and-control',
        heading: 'Données et contrôle',
        items: [
          {
            id: 'is-our-data-kept-in-switzerland',
            q: 'Nos données restent-elles en Suisse?',
            a: 'Oui, par défaut. Zuraio et les données de votre entreprise sont hébergés par Infomaniak en Suisse, et le modèle d’IA par défaut fonctionne lui aussi en Suisse. Pour certaines tâches, vous pouvez choisir un autre modèle; chacun indique où il fonctionne, et seul le contenu de la tâche concernée est transmis.',
          },
          {
            id: 'is-our-data-used-to-train-ai-models',
            q: 'Nos données servent-elles à entraîner des modèles d’IA?',
            a: 'Non. Vos données ne servent jamais à entraîner des modèles d’IA.',
          },
          {
            id: 'can-employees-see-information-they-shouldnt',
            q: 'Les collaborateurs peuvent-ils voir des informations qui ne leur sont pas destinées?',
            a: 'Non. Zuraio reprend vos autorisations existantes de Microsoft ou Google. Chacun ne voit que ce qu’il a déjà le droit de voir.',
          },
          {
            id: 'does-zuraio-send-anything-automatically',
            q: 'Zuraio envoie-t-il quelque chose automatiquement?',
            a: 'Non. Les réponses et les modifications sont préparées sous forme de brouillons. Une personne les vérifie et décide.',
          },
          {
            id: 'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
            q: 'Que se passe-t-il si un fournisseur d’IA modifie ses prix ou ses conditions?',
            a: 'Vous passez à un autre modèle. Vos données et vos skills restent chez vous, car ils sont séparés du modèle.',
          },
          {
            id: 'can-we-see-which-sources-were-used',
            q: 'Voyons-nous quelles sources ont été utilisées?',
            a: 'Oui. Les réponses fondées sur les connaissances de votre entreprise indiquent les documents ou systèmes dont elles proviennent.',
          },
        ],
      },
      {
        id: 'for-your-it-team',
        heading: 'Pour votre équipe informatique',
        items: [
          {
            id: 'where-is-our-data-stored',
            q: 'Où nos données sont-elles stockées?',
            a: 'Dans l’hébergement suisse d’Infomaniak (ISO 27001:2022). Des solutions hybrides ou sur vos propres serveurs sont possibles sur demande.',
          },
          {
            id: 'can-external-ai-models-be-switched-off',
            q: 'Peut-on désactiver les modèles d’IA externes?',
            a: 'Oui. Vous décidez quels modèles sont autorisés, et vous pouvez limiter Zuraio aux seuls modèles hébergés en Suisse.',
          },
          {
            id: 'are-our-chats-with-zuraio-saved',
            q: 'Nos conversations avec Zuraio sont-elles enregistrées?',
            a: 'Oui, dans l’espace Zuraio de votre entreprise, pour pouvoir revenir à un travail antérieur. Les conversations appartiennent au collaborateur et à votre entreprise. Elles ne sont pas partagées en dehors de votre entreprise et ne servent jamais à entraîner des modèles d’IA.',
          },
          {
            id: 'are-there-audit-records',
            q: 'Existe-t-il des journaux d’audit?',
            a: 'Oui. Demandes, sources, actions et validations sont enregistrées selon la configuration d’audit convenue avec vous.',
          },
          {
            id: 'how-do-you-connect-to-our-systems',
            q: 'Comment vous connectez-vous à nos systèmes?',
            a: 'Par des connecteurs prêts à l’emploi, des API, MCP ou des connecteurs sur mesure. La page Intégrations liste les systèmes auxquels nous nous connectons.',
          },
        ],
      },
    ],
    itTeamLink: 'Des questions pour votre équipe informatique? Voir les détails techniques →',
    cta: {
      heading: 'Encore une question?',
      body: 'Écrivez-nous. L’un des fondateurs vous répondra en quelques jours, pas en quelques semaines.',
      button: 'Nous contacter',
      buttonRoute: 'contact',
    },
    homePreview: {
      moreLabel: 'Plus de questions',
      linkAll: 'Voir toutes les questions →',
      linkIt: 'Les questions de votre équipe informatique →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },
  it: {
    metaTitle: 'FAQ | Zuraio',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      heading: 'Le domande che ci fanno spesso.',
      sub: 'Risposte brevi e sincere. Se la vostra domanda non c’è, scriveteci.',
    },
    groups: [
      {
        id: 'about-zuraio',
        heading: 'Su Zuraio',
        items: [
          {
            id: 'chatgpt-copilot',
            q: 'Perché non usare semplicemente ChatGPT o Copilot?',
            a: 'Non dovete scegliere. ChatGPT conosce la vostra azienda solo se qualcuno gli fornisce il contesto ogni volta. Copilot conosce bene il vostro mondo Microsoft 365, e per raggiungere altri sistemi servono di solito connettori che la vostra informatica deve sviluppare. Zuraio è già collegato ai sistemi usati dalle PMI svizzere, come bexio, Abacus e Proffix, con skill che sviluppiamo con il vostro team. È neutrale rispetto ai modelli: modelli svizzeri di base, e GPT o Claude per i compiti che la vostra azienda autorizza.',
          },
          {
            id: 'what-is-zuraio',
            q: 'Che cos’è Zuraio?',
            a: 'Un assistente IA per le PMI svizzere. Risponde alle e-mail, prepara le riunioni e trova informazioni nelle conoscenze della vostra azienda, con le fonti e con hosting in Svizzera. Lavora con le skill: compiti che sa svolgere a modo vostro.',
          },
          {
            id: 'who-is-zuraio-for',
            q: 'A chi si rivolge Zuraio?',
            a: 'Alle aziende svizzere da circa 5 a 250 collaboratori, le cui conoscenze sono distribuite tra e-mail, documenti e software gestionali. Molti dei nostri primi colloqui sono con studi di architettura e d’ingegneria, fiduciarie e amministrazioni immobiliari.',
          },
          {
            id: 'which-software-does-zuraio-work-with',
            q: 'Con quali software funziona Zuraio?',
            a: 'Con software gestionali svizzeri come bexio, Klara, Proffix e Abacus, con Microsoft 365 e Google Workspace, sistemi CRM e software tecnici come AutoCAD, Revit, ArchiCAD e Rhino. L’elenco completo è sulla nostra pagina Integrazioni.',
          },
          {
            id: 'how-do-we-get-started',
            q: 'Come si inizia?',
            a: 'Con un colloquio di 30 minuti in cui scegliamo un compito che vale la pena migliorare. Poi un workshop di configurazione in cui sviluppiamo la vostra prima skill con il vostro team, un punto della situazione dopo due settimane, e poi decidete voi se continuare.',
          },
          {
            id: 'what-is-a-starter-partner',
            q: 'Che cos’è un partner di lancio?',
            a: 'Uno dei nostri primi clienti. I partner di lancio lavorano direttamente con i fondatori, hanno accesso anticipato e contribuiscono a decidere cosa sviluppiamo dopo. Le condizioni commerciali vengono concordate individualmente.',
          },
        ],
      },
      {
        id: 'data-and-control',
        heading: 'Dati e controllo',
        items: [
          {
            id: 'is-our-data-kept-in-switzerland',
            q: 'I nostri dati restano in Svizzera?',
            a: 'Sì, per impostazione predefinita. Zuraio e i dati della vostra azienda sono ospitati da Infomaniak in Svizzera, e anche il modello di IA predefinito funziona in Svizzera. Per singoli compiti potete scegliere un altro modello; ognuno indica dove funziona, e viene trasmesso solo il contenuto di quel compito.',
          },
          {
            id: 'is-our-data-used-to-train-ai-models',
            q: 'I nostri dati vengono usati per addestrare modelli di IA?',
            a: 'No. I vostri dati non vengono mai usati per addestrare modelli di IA.',
          },
          {
            id: 'can-employees-see-information-they-shouldnt',
            q: 'I collaboratori possono vedere informazioni che non dovrebbero vedere?',
            a: 'No. Zuraio riprende le vostre autorizzazioni esistenti di Microsoft o Google. Ognuno vede solo ciò che ha già il permesso di vedere.',
          },
          {
            id: 'does-zuraio-send-anything-automatically',
            q: 'Zuraio invia qualcosa in automatico?',
            a: 'No. Risposte e modifiche vengono preparate come bozze. Una persona le controlla e decide.',
          },
          {
            id: 'what-happens-if-an-ai-provider-changes-its-prices-or-terms',
            q: 'Cosa succede se un fornitore di IA cambia prezzi o condizioni?',
            a: 'Passate a un altro modello. I vostri dati e le vostre skill restano da voi, perché sono separati dal modello.',
          },
          {
            id: 'can-we-see-which-sources-were-used',
            q: 'Possiamo vedere quali fonti sono state usate?',
            a: 'Sì. Le risposte basate sulle conoscenze della vostra azienda mostrano i documenti o i sistemi da cui provengono.',
          },
        ],
      },
      {
        id: 'for-your-it-team',
        heading: 'Per il vostro team informatico',
        items: [
          {
            id: 'where-is-our-data-stored',
            q: 'Dove vengono archiviati i nostri dati?',
            a: 'Nell’hosting svizzero di Infomaniak (ISO 27001:2022). Soluzioni ibride o sui vostri server sono possibili su richiesta.',
          },
          {
            id: 'can-external-ai-models-be-switched-off',
            q: 'Si possono disattivare i modelli di IA esterni?',
            a: 'Sì. Decidete voi quali modelli sono ammessi, e potete limitare Zuraio ai soli modelli con hosting in Svizzera.',
          },
          {
            id: 'are-our-chats-with-zuraio-saved',
            q: 'Le nostre conversazioni con Zuraio vengono salvate?',
            a: 'Sì, nell’ambiente Zuraio della vostra azienda, così si può tornare al lavoro precedente. Le conversazioni appartengono al collaboratore e alla vostra azienda. Non vengono condivise al di fuori dell’azienda e non vengono mai usate per addestrare modelli di IA.',
          },
          {
            id: 'are-there-audit-records',
            q: 'Ci sono registri di audit?',
            a: 'Sì. Richieste, fonti, azioni e approvazioni vengono registrate secondo la configurazione di audit concordata con voi.',
          },
          {
            id: 'how-do-you-connect-to-our-systems',
            q: 'Come vi collegate ai nostri sistemi?',
            a: 'Tramite connettori pronti, API, MCP o connettori su misura. La pagina Integrazioni elenca i sistemi a cui ci colleghiamo.',
          },
        ],
      },
    ],
    itTeamLink: 'Domande per il vostro team informatico? Vedere i dettagli tecnici →',
    cta: {
      heading: 'Avete ancora una domanda?',
      body: 'Scriveteci. Uno dei fondatori vi risponderà in pochi giorni, non in settimane.',
      button: 'Contattateci',
      buttonRoute: 'contact',
    },
    homePreview: {
      moreLabel: 'Altre domande',
      linkAll: 'Vedere tutte le domande →',
      linkIt: 'Le domande del vostro team informatico →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },

};

export function getFaqCopy(locale) {
  return copyFaq[locale] ?? copyFaq.en;
}

export function getAllFaqItems(locale) {
  const copy = getFaqCopy(locale);
  return copy.groups.flatMap((g) => g.items);
}

export function getHomePreviewFaqItems(locale) {
  const byId = new Map(getAllFaqItems(locale).map((item) => [item.id, item]));
  return FAQ_HOME_PREVIEW_ITEM_IDS.map((id) => byId.get(id)).filter(Boolean);
}
