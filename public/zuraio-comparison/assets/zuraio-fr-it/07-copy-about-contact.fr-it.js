// PART A: add to copyAbout in copy-about.js (same keys as `en`; people: CONTACT_FOUNDERS).

  fr: {
    metaTitle: 'À propos | Zuraio',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      eyebrow: 'À PROPOS',
      heading: 'Quatre personnes en Suisse, qui créent l’IA qu’elles voulaient pour elles-mêmes.',
      sub: 'Nous perdions des heures à préparer des séances, à traiter des e-mails et à chercher le bon document. Les outils d’IA publics aidaient, mais ils ne connaissaient pas notre entreprise et ne respectaient pas nos règles d’accès. Alors nous avons créé Zuraio.',
    },
    team: {
      heading: 'Les personnes à qui vous parlerez.',
      contactLine: 'Écrivez-nous directement. L’un de nous vous répondra.',
      people: CONTACT_FOUNDERS,
    },
    beliefs: {
      heading: 'Ce en quoi nous croyons',
      items: [
        { lead: 'Les personnes décident.', body: 'L’IA prépare, votre équipe juge et valide.' },
        { lead: 'Vos données restent les vôtres.', body: 'Suisse par défaut, et vous choisissez ce qui va ailleurs.' },
        { lead: 'Commencer par du vrai travail.', body: 'Une tâche qui compte, pas un grand projet d’IA.' },
        { lead: 'Montrer la source.', body: 'Pour pouvoir vérifier avant de s’y fier.' },
        { lead: 'Développé avec vous.', body: 'Vos skills, votre ton, votre façon de travailler.' },
      ],
    },
    starter: {
      heading: 'Nous travaillons avec nos premiers partenaires de lancement.',
      body: 'Des entreprises suisses qui façonnent Zuraio avec nous, travaillent directement avec les fondateurs et influencent ce que nous développons ensuite.',
      link: 'Devenir partenaire de lancement →',
    },
    cta: {
      heading: 'Parlons de votre entreprise.',
      body: '',
      button: 'Réserver une démo de 30 minutes',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },

  it: {
    metaTitle: 'Chi siamo | Zuraio',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      eyebrow: 'CHI SIAMO',
      heading: 'Quattro persone in Svizzera, che costruiscono l’IA che volevano per sé.',
      sub: 'Perdevamo ore a preparare riunioni, a gestire e-mail e a cercare il documento giusto. Gli strumenti di IA pubblici aiutavano, ma non conoscevano la nostra azienda né rispettavano le nostre regole di accesso. Così abbiamo creato Zuraio.',
    },
    team: {
      heading: 'Le persone con cui parlerete.',
      contactLine: 'Scriveteci direttamente. Vi risponderà uno di noi.',
      people: CONTACT_FOUNDERS,
    },
    beliefs: {
      heading: 'In cosa crediamo',
      items: [
        { lead: 'Decidono le persone.', body: 'L’IA prepara, il vostro team valuta e approva.' },
        { lead: 'I vostri dati restano vostri.', body: 'Svizzera di base, e siete voi a scegliere cosa va altrove.' },
        { lead: 'Partire dal lavoro vero.', body: 'Un compito che conta, non un grande progetto di IA.' },
        { lead: 'Mostrare la fonte.', body: 'Così si può verificare prima di fidarsi.' },
        { lead: 'Sviluppato con voi.', body: 'Le vostre skill, il vostro tono, il vostro modo di lavorare.' },
      ],
    },
    starter: {
      heading: 'Lavoriamo con i nostri primi partner di lancio.',
      body: 'Aziende svizzere che danno forma a Zuraio con noi, lavorano direttamente con i fondatori e influenzano ciò che sviluppiamo dopo.',
      link: 'Diventare partner di lancio →',
    },
    cta: {
      heading: 'Parliamo della vostra azienda.',
      body: '',
      button: 'Prenotare una demo di 30 minuti',
      buttonRoute: 'contact',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },


// PART B: add to copyContact in copy-contact.js (same keys as `en`).
// Option values (1-9 etc.) stay unchanged; labels are numbers so they stay too.

  fr: {
    metaTitle: 'Contact | Zuraio',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      heading: 'Trouvons votre première tâche.',
      sub: 'Parlez-nous un peu de votre entreprise. L’un des fondateurs vous répondra en quelques jours, pas en quelques semaines.',
    },
    form: {
      name: 'Nom',
      company: 'Entreprise',
      email: 'E-mail',
      companySize: 'Taille de l’entreprise',
      companySizePlaceholder: 'Choisir (facultatif)',
      companySizeOptions: [
        { value: '1-9', label: '1-9' },
        { value: '10-49', label: '10-49' },
        { value: '50-249', label: '50-249' },
        { value: '250+', label: '250+' },
      ],
      message: 'Que souhaitez-vous améliorer?',
      messagePlaceholder: 'Par exemple : répondre aux e-mails des clients, préparer les séances, les offres',
      starterLabel: 'Je souhaite devenir partenaire de lancement',
      submit: 'Envoyer',
      trust: 'Votre message va directement aux fondateurs, nulle part ailleurs.',
      sending: 'Envoi en cours…',
      success: 'Merci. Nous avons bien reçu votre message. L’un des fondateurs vous répondra en quelques jours, pas en quelques semaines.',
      error: 'Une erreur s’est produite. Veuillez réessayer ou nous écrire directement à',
      errorNetwork: 'Impossible de joindre le serveur. Veuillez vérifier votre connexion ou nous écrire à',
      fallback: 'Ce formulaire n’est pas encore connecté. Veuillez nous écrire à',
      validationEmail: 'Veuillez saisir une adresse e-mail valide.',
      validationRequired: 'Veuillez indiquer votre nom, votre entreprise et votre e-mail.',
      starterInterestLabel: 'Partenaire de lancement',
      websiteEnquiryLabel: 'Contact via le site',
    },
    founders: {
      heading: 'Ou écrivez-nous directement',
      reply: 'Nous répondons en quelques jours, pas en quelques semaines.',
    },
    starter: {
      heading: 'Nous travaillons avec nos premiers partenaires de lancement.',
      body: 'Des entreprises suisses qui façonnent Zuraio avec nous, travaillent directement avec les fondateurs et influencent ce que nous développons ensuite.',
      link: 'Devenir partenaire de lancement →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },

  it: {
    metaTitle: 'Contatti | Zuraio',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      heading: 'Troviamo il vostro primo compito.',
      sub: 'Raccontateci qualcosa della vostra azienda. Uno dei fondatori vi risponderà in pochi giorni, non in settimane.',
    },
    form: {
      name: 'Nome',
      company: 'Azienda',
      email: 'E-mail',
      companySize: 'Dimensione dell’azienda',
      companySizePlaceholder: 'Selezionare (facoltativo)',
      companySizeOptions: [
        { value: '1-9', label: '1-9' },
        { value: '10-49', label: '10-49' },
        { value: '50-249', label: '50-249' },
        { value: '250+', label: '250+' },
      ],
      message: 'Cosa vorreste migliorare?',
      messagePlaceholder: 'Per esempio: rispondere alle e-mail dei clienti, preparare le riunioni, le offerte',
      starterLabel: 'Mi interessa diventare partner di lancio',
      submit: 'Inviare',
      trust: 'Il vostro messaggio arriva direttamente ai fondatori, a nessun altro.',
      sending: 'Invio in corso…',
      success: 'Grazie. Abbiamo ricevuto il vostro messaggio. Uno dei fondatori vi risponderà in pochi giorni, non in settimane.',
      error: 'Qualcosa è andato storto. Riprovate o scriveteci direttamente a',
      errorNetwork: 'Non è stato possibile raggiungere il server. Controllate la connessione o scriveteci a',
      fallback: 'Questo modulo non è ancora collegato. Scriveteci a',
      validationEmail: 'Inserite un indirizzo e-mail valido.',
      validationRequired: 'Inserite nome, azienda ed e-mail.',
      starterInterestLabel: 'Partner di lancio',
      websiteEnquiryLabel: 'Contatto dal sito',
    },
    founders: {
      heading: 'Oppure scriveteci direttamente',
      reply: 'Rispondiamo in pochi giorni, non in settimane.',
    },
    starter: {
      heading: 'Lavoriamo con i nostri primi partner di lancio.',
      body: 'Aziende svizzere che danno forma a Zuraio con noi, lavorano direttamente con i fondatori e influenzano ciò che sviluppiamo dopo.',
      link: 'Diventare partner di lancio →',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },
