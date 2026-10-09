// Add to copyTechnical in copy-technical.js (same keys as `en`).

  fr: {
    metaTitle: 'Pour votre partenaire informatique | Zuraio',
    metaDescription:
      'Comment Zuraio gère l’identité, les connaissances, les modèles et la traçabilité, et où il fonctionne. Architecture technique pour votre partenaire informatique.',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      eyebrow: 'POUR VOTRE PARTENAIRE INFORMATIQUE',
      heading: 'Les détails techniques, réunis au même endroit.',
      sub: 'Comment Zuraio gère l’identité, les connaissances, les modèles et la traçabilité, et où il fonctionne. Si quelque chose n’est pas clair, écrivez-nous. Nous répondons en quelques jours, pas en quelques semaines.',
      cta: 'Réserver un entretien technique',
    },
    architecture: {
      heading: 'Une plateforme, sept couches.',
      layers: [
        { title: 'Accès', body: 'Les utilisateurs travaillent dans l’interface Zuraio ou dans des applications connectées.' },
        {
          title: 'Identité et autorisations',
          body: 'Identités et groupes Microsoft ou Google, plus des rôles Zuraio optionnels. Vérifiés avant toute utilisation de connaissances ou toute action.',
        },
        {
          title: 'Orchestration',
          body: 'Comprend la tâche, choisit le déroulement et coordonne connaissances, outils et modèles.',
        },
        {
          title: 'Skills et connaissances de l’entreprise',
          body: 'Des skills versionnés avec modèles et règles de qualité, gérés en dehors du modèle d’IA.',
        },
        {
          title: 'Assistants et intégrations',
          body: 'Des assistants spécialisés, connectés via MCP, API, webhooks et connecteurs.',
        },
        {
          title: 'Passerelle de modèles',
          body: 'Choisit un modèle autorisé par tâche, selon la classe de données, le lieu, la qualité et le coût.',
        },
        {
          title: 'Traçabilité et exploitation',
          body: 'Demandes, sources, actions et validations sont journalisées selon la configuration d’audit convenue.',
        },
      ],
      diagramCaption:
        'Architecture de plateforme à titre d’illustration. Les limites des composants et les lieux d’exploitation varient selon le déploiement client.',
      diagramLabels: [
        'Accès',
        'Identité et autorisations',
        'Orchestration',
        'Skills et connaissances',
        'Assistants et intégrations',
        'Passerelle de modèles',
        'Traçabilité et exploitation',
      ],
      diagramTitle: 'Architecture de la plateforme Zuraio, sept couches',
      diagramDesc:
        'Flux vertical illustratif, de l’accès à la traçabilité, en passant par l’identité, l’orchestration, les skills, les intégrations et la passerelle de modèles.',
    },
    requestFlow: {
      heading: 'De la demande au résultat.',
      steps: [
        'Une personne pose une question ou lance une tâche.',
        'Zuraio vérifie qui elle est et à quoi elle a accès.',
        'Le bon skill fournit les étapes, les modèles et les règles.',
        'Zuraio choisit les assistants, les sources et un modèle autorisé.',
        'Il prépare une réponse, un brouillon ou une action proposée.',
        'Tout ce qui modifie des données ou sort de l’entreprise attend le feu vert d’une personne.',
        'Sources, versions et validations sont enregistrées.',
      ],
    },
    lifecycle: {
      heading: 'Comment les skills restent sous contrôle.',
      body: 'Les skills nouveaux ou modifiés sont vérifiés avant toute utilisation. Les anciennes versions sont conservées, pour savoir à tout moment ce qui s’appliquait quand.',
      stages: ['Brouillon', 'En vérification', 'Validé', 'Publié', 'Remplacé', 'Archivé'],
      highlightIndex: 3,
    },
    hosting: {
      heading: 'Trois façons d’héberger, côte à côte.',
      columns: [
        { title: 'Hébergement suisse', tag: 'Standard', tagKind: 'standard' },
        { title: 'Hybride', tag: 'Sur demande', tagKind: 'request' },
        { title: 'Propres serveurs', tag: 'Sur demande', tagKind: 'request' },
      ],
      rowLabels: ['Où se trouvent les données', 'Effort pour votre informatique', 'Modèles d’IA', 'Qui l’exploite'],
      rows: [
        ['En Suisse chez Infomaniak', 'Réparties par système et classe de données', 'Dans votre infrastructure'],
        ['Faible', 'Moyen', 'Plus élevé'],
        ['Suisse par défaut, autres au choix', 'Selon la tâche et les règles', 'Modèles locaux et autorisés'],
        ['Zuraio', 'Partagé', 'Surtout vous, avec notre soutien'],
      ],
      moreLink: 'En savoir plus sur l’hébergement',
    },
    recorded: {
      heading: 'Ce qui est enregistré.',
      intro: 'Chaque réponse laisse une trace que votre partenaire informatique peut vérifier.',
      items: [
        { label: 'La demande', text: 'qui a demandé quoi, et quand.' },
        { label: 'Les sources', text: 'quels documents et systèmes ont été utilisés.' },
        { label: 'Le skill', text: 'quel skill, dans quelle version.' },
        { label: 'Le résultat', text: 'ce que Zuraio a produit.' },
        { label: 'La validation', text: 'qui l’a vérifié et libéré.' },
      ],
    },
    deployment: {
      heading: 'Ce que nous documentons pour chaque mise en place.',
      items: [
        'Exploitant et responsabilités',
        'Lieux de traitement et de stockage',
        'Fournisseurs de modèles d’IA',
        'Fournisseur d’identité',
        'Séparation des données',
        'Sauvegarde et restauration',
        'Surveillance et support',
        'Mises à jour et correctifs',
        'Conservation et suppression',
        'Services externes autorisés',
      ],
    },
    cta: {
      heading: 'Parcourons-le ensemble.',
      body: 'Un entretien technique avec l’un de nos fondateurs, avec votre partenaire informatique si vous le souhaitez.',
      button: 'Réserver un entretien technique',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },

  it: {
    metaTitle: 'Per il vostro partner informatico | Zuraio',
    metaDescription:
      'Come Zuraio gestisce identità, conoscenze, modelli e tracciabilità, e dove funziona. Architettura tecnica per il vostro partner informatico.',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      eyebrow: 'PER IL VOSTRO PARTNER INFORMATICO',
      heading: 'I dettagli tecnici, tutti in un unico posto.',
      sub: 'Come Zuraio gestisce identità, conoscenze, modelli e tracciabilità, e dove funziona. Se qualcosa non è chiaro, scriveteci. Rispondiamo in pochi giorni, non in settimane.',
      cta: 'Prenotare un colloquio tecnico',
    },
    architecture: {
      heading: 'Una piattaforma, sette livelli.',
      layers: [
        { title: 'Accesso', body: 'Le persone lavorano nell’interfaccia di Zuraio o in applicazioni collegate.' },
        {
          title: 'Identità e autorizzazioni',
          body: 'Identità e gruppi Microsoft o Google, più ruoli Zuraio opzionali. Verificati prima di usare qualsiasi conoscenza o azione.',
        },
        {
          title: 'Orchestrazione',
          body: 'Capisce il compito, sceglie il flusso di lavoro e coordina conoscenze, strumenti e modelli.',
        },
        {
          title: 'Skill e conoscenze aziendali',
          body: 'Skill con versioni, modelli e regole di qualità, gestite al di fuori del modello di IA.',
        },
        {
          title: 'Assistenti e integrazioni',
          body: 'Assistenti specializzati, collegati tramite MCP, API, webhook e connettori.',
        },
        {
          title: 'Gateway dei modelli',
          body: 'Sceglie un modello approvato per ogni compito, in base a classe di dati, luogo, qualità e costo.',
        },
        {
          title: 'Tracciabilità ed esercizio',
          body: 'Richieste, fonti, azioni e approvazioni vengono registrate secondo la configurazione di audit concordata.',
        },
      ],
      diagramCaption:
        'Architettura della piattaforma a titolo illustrativo. I confini dei componenti e i luoghi di esercizio variano secondo l’installazione presso il cliente.',
      diagramLabels: [
        'Accesso',
        'Identità e autorizzazioni',
        'Orchestrazione',
        'Skill e conoscenze',
        'Assistenti e integrazioni',
        'Gateway dei modelli',
        'Tracciabilità ed esercizio',
      ],
      diagramTitle: 'Architettura della piattaforma Zuraio, sette livelli',
      diagramDesc:
        'Flusso verticale illustrativo dall’accesso alla tracciabilità, passando per identità, orchestrazione, skill, integrazioni e gateway dei modelli.',
    },
    requestFlow: {
      heading: 'Dalla richiesta al risultato.',
      steps: [
        'Una persona fa una domanda o avvia un compito.',
        'Zuraio verifica chi è e a cosa può accedere.',
        'La skill giusta fornisce i passi, i modelli e le regole.',
        'Zuraio sceglie gli assistenti, le fonti e un modello approvato.',
        'Prepara una risposta, una bozza o un’azione proposta.',
        'Tutto ciò che modifica dati o esce dall’azienda attende il via libera di una persona.',
        'Fonti, versioni e approvazioni vengono registrate.',
      ],
    },
    lifecycle: {
      heading: 'Come le skill restano sotto controllo.',
      body: 'Le skill nuove o modificate vengono verificate prima che qualcuno le usi. Le versioni precedenti vengono conservate, così si vede sempre cosa valeva e quando.',
      stages: ['Bozza', 'In verifica', 'Approvata', 'Pubblicata', 'Sostituita', 'Archiviata'],
      highlightIndex: 3,
    },
    hosting: {
      heading: 'Tre modi di hosting, a confronto.',
      columns: [
        { title: 'Hosting svizzero', tag: 'Standard', tagKind: 'standard' },
        { title: 'Ibrido', tag: 'Su richiesta', tagKind: 'request' },
        { title: 'Server propri', tag: 'Su richiesta', tagKind: 'request' },
      ],
      rowLabels: ['Dove si trovano i dati', 'Impegno per la vostra informatica', 'Modelli di IA', 'Chi lo gestisce'],
      rows: [
        ['In Svizzera presso Infomaniak', 'Suddivisi per sistema e classe di dati', 'Nella vostra infrastruttura'],
        ['Basso', 'Medio', 'Più alto'],
        ['Svizzera di base, altri a scelta', 'Secondo compito e regole', 'Modelli locali e approvati'],
        ['Zuraio', 'Condiviso', 'Soprattutto voi, con il nostro supporto'],
      ],
      moreLink: 'Di più sull’hosting',
    },
    recorded: {
      heading: 'Cosa viene registrato.',
      intro: 'Ogni risposta lascia una traccia che il vostro partner informatico può verificare.',
      items: [
        { label: 'La richiesta', text: 'chi ha chiesto cosa, e quando.' },
        { label: 'Le fonti', text: 'quali documenti e sistemi sono stati usati.' },
        { label: 'La skill', text: 'quale skill, in quale versione.' },
        { label: 'Il risultato', text: 'cosa ha prodotto Zuraio.' },
        { label: 'L’approvazione', text: 'chi l’ha verificato e rilasciato.' },
      ],
    },
    deployment: {
      heading: 'Cosa documentiamo per ogni configurazione.',
      items: [
        'Gestore e responsabilità',
        'Luoghi di elaborazione e archiviazione',
        'Fornitori di modelli di IA',
        'Fornitore di identità',
        'Separazione dei dati',
        'Backup e ripristino',
        'Monitoraggio e supporto',
        'Aggiornamenti e patch',
        'Conservazione e cancellazione',
        'Servizi esterni approvati',
      ],
    },
    cta: {
      heading: 'Esaminiamolo insieme.',
      body: 'Un colloquio tecnico con uno dei nostri fondatori, se volete anche con il vostro partner informatico.',
      button: 'Prenotare un colloquio tecnico',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },
