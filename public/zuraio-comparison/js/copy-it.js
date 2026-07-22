export const heroOptions = [
  {
    headline: 'Un assistente digitale per ogni collaboratore.',
    emphasis: 'assistente',
    paragraph:
      'Zuraio offre a tutti i collaboratori della Sua azienda un assistente intelligente che trova informazioni, risponde a domande, prepara documenti e aiuta a portare avanti il lavoro.',
    cta: "Scopra l'assistente IA della Sua azienda",
    ctaHref: 'contact.html',
  },
  {
    headline: 'Dia a ogni collaboratore la capacità di un assistente personale.',
    emphasis: 'assistente personale',
    paragraph:
      'Zuraio collega le conoscenze e gli strumenti della Sua azienda, offrendo supporto immediato per ricerca, redazione, analisi e attività quotidiane.',
    cta: 'Scopra come funziona Zuraio',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'Un assistente IA che conosce la Sua azienda.',
    emphasis: 'assistente IA',
    paragraph:
      'Zuraio comprende documenti, riunioni, e-mail e know-how aziendale, così i Suoi collaboratori trovano risposte e completano il lavoro più rapidamente.',
    cta: 'Scopra lo Zuraio AI Hub',
    ctaHref: 'knowledge.html',
  },
  {
    headline: 'Lo spazio di lavoro intelligente per tutta la Sua azienda.',
    emphasis: 'spazio di lavoro',
    paragraph:
      'Cerchi nel know-how aziendale, crei documenti, analizzi informazioni e svolga il lavoro quotidiano attraverso un AI Hub sicuro.',
    cta: 'Veda cosa può fare',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'Un assistente IA per tutti. Alimentato dalla Sua azienda.',
    emphasis: 'assistente IA',
    paragraph:
      'Zuraio trasforma le conoscenze aziendali in supporto sicuro e pratico per ogni collaboratore.',
    cta: 'Esplori Zuraio',
    ctaHref: 'how-it-helps.html',
  },
];

export const problemOptions = [
  {
    heading: 'Lasci che Zuraio renda le conoscenze aziendali più facili da trovare e utilizzare.',
  },
  {
    heading: 'Lasci che Zuraio trovi le Sue informazioni e faccia avanzare il lavoro.',
  },
  {
    heading: 'Lasci che Zuraio colleghi le Sue conoscenze e semplifichi il lavoro.',
  },
  {
    heading: 'Lasci che Zuraio aiuti i Suoi collaboratori a trovare risposte e portare avanti il lavoro.',
  },
  {
    heading: 'Lasci che Zuraio renda le conoscenze aziendali più facili da trovare, comprendere e utilizzare.',
  },
];

export const trustSignals = [
  { label: 'Hosting in Svizzera', href: 'deployment-models.html' },
  { label: 'Fonti visibili', href: 'knowledge.html' },
  { label: 'Know-how aziendale connesso', href: 'knowledge.html' },
  { label: 'Lei mantiene il controllo', href: 'data-control.html' },
];

export const integrations = [
  'Outlook',
  'Gmail',
  'Microsoft 365',
  'Google Workspace',
  'Teams',
  'Slack',
  'Notion',
  'SharePoint',
  'OneDrive',
  'HubSpot',
  'Salesforce',
  'WhatsApp',
  'Note vocali',
];

export const nav = {
  main: [
    { label: 'Come aiuta', href: 'how-it-helps.html' },
    { label: 'Conoscenze', href: 'knowledge.html' },
    { label: 'Integrazioni', href: 'integrations.html' },
    { label: 'Controllo dei dati', href: 'data-control.html' },
  ],
  technical: [
    { label: 'Modelli di deployment', href: 'deployment-models.html' },
    { label: 'Architettura tecnica', href: 'technical-architecture.html' },
    { label: 'AI governance', href: 'ai-governance.html' },
    { label: 'Risorse', href: 'resources.html' },
    { label: 'FAQ', href: 'faq.html' },
  ],
  about: { label: 'Chi siamo', href: 'about.html' },
};

export const ui = {
  bookDemo: 'Prenoti una demo',
  technical: 'Tecnico',
  previous: '← Indietro',
  next: 'Avanti →',
  optionOf: (n) => `Opzione ${n} di 5`,
  optionLabel: (n) => `Opzione ${n}`,
  previousAria: 'Opzione hero precedente',
  nextAria: 'Opzione hero successiva',
  heroOptionsGroup: 'Opzioni di messaging hero',
  trustAria: 'Segnali di fiducia',
  langEn: 'EN',
  langDe: 'DE',
  langFr: 'FR',
  langIt: 'IT',
  languageLabel: 'Lingua',
  languageContact: 'Lingua / Contatto',
  languageActive: 'attivo',
  openMenu: 'Apri menu',
  closeMenu: 'Chiudi menu',
  zuraioHome: 'Home Zuraio',
};

export const home = {
  meta: {
    title: 'Zuraio — IA per aziende svizzere che vogliono mantenere il controllo dei propri dati',
  },
  problem: {
    marker: 'Le suona familiare?',
    heading: 'La Sua azienda ha già le risposte. Sono solo difficili da trovare.',
    body: 'Le conoscenze importanti sono distribuite tra e-mail, documenti, riunioni e sistemi aziendali. I collaboratori perdono tempo a cercare, preparare e ripetere lavoro già svolto.',
    cards: [
      { title: 'Le conoscenze sono disperse', body: 'Le informazioni importanti si trovano in caselle di posta, file, riunioni e sistemi aziendali.' },
      { title: 'L\'amministrazione prende il sopravvento', body: 'Sintesi, report, preparazione e follow-up sottraggono tempo al lavoro vero.' },
      { title: 'Le risposte mancano di contesto', body: 'Le decisioni rallentano quando non è possibile vedere la cronologia completa o la fonte.' },
      { title: 'L\'IA pubblica crea incertezza', body: 'Strumenti utili diventano rischiosi quando know-how aziendale sensibile viene utilizzato senza regole chiare.' },
    ],
    link: 'Veda casi d\'uso pratici →',
  },
  different: {
    marker: 'Più di un chatbot',
    heading: 'Le conoscenze aziendali al servizio dei Suoi collaboratori.',
    headingEmphasis: 'conoscenze aziendali',
    body: 'L\'IA generica conosce solo ciò che qualcuno fornisce manualmente. Zuraio si collega in modo sicuro al know-how aziendale approvato, comprende il contesto di chi chiede e prepara lavoro documentato per la revisione.',
    without: {
      title: 'Senza Zuraio',
      titleEmphasis: null,
      subtitle: 'Processo tipico: fino a 20 minuti',
      timeLabel: '~20 min',
      progressCompleting: 'Completamento...',
      progressCompleted: 'Completato',
      steps: [
        {
          title: 'Chiedere all\'IA generica',
          body: 'Avviare una nuova conversazione',
        },
        {
          title: 'Aggiungere contesto manualmente',
          body: 'Trovare e caricare file o spiegare la situazione',
        },
        {
          title: 'Verificare l\'output generico',
          body: 'Controllare e verificare le informazioni',
        },
        {
          title: 'Affinare e chiedere di nuovo',
          body: 'Aggiungere dettagli e chiarire',
        },
        {
          title: 'Verificare e compilare',
          body: 'Incrociare i dati e riunire le informazioni',
        },
        {
          title: 'Ripetere la prossima volta',
          body: 'Ricominciare con una nuova conversazione',
        },
      ],
    },
    with: {
      title: 'Con Zuraio',
      titleEmphasis: null,
      subtitle: 'Processo tipico: meno di 1 minuto',
      timeLabel: '<1 min',
      progressCompleting: 'Completamento...',
      progressCompleted: 'Completato.',
      steps: [
        {
          title: 'Chiedere a Zuraio',
          body: 'Porre la domanda in linguaggio naturale',
        },
        {
          title: 'Utilizza know-how approvato',
          body: 'Si collega automaticamente alle fonti aziendali',
        },
        {
          title: 'Crea lavoro documentato',
          body: 'Genera risposte e bozze con riferimenti',
        },
        {
          title: 'Revisionare e agire',
          body: 'Lei revisiona, verifica e agisce con sicurezza',
        },
      ],
    },
  },
  pillars: {
    heading: 'Tutto ciò di cui il Suo assistente ha bisogno per aiutare.',
    items: [
      { title: 'Conoscenze', body: 'Zuraio lavora con e-mail, documenti, contatti, note di riunione e sistemi aziendali approvati.', link: 'Esplori le conoscenze →', href: 'knowledge.html' },
      { title: 'Connessioni', body: 'Lavora accanto agli strumenti che il Suo team utilizza già, senza obbligare a sostituirli.', link: 'Veda le connessioni →', href: 'integrations.html' },
      { title: 'Sicurezza', body: 'Hosting, accesso, fonti e regole di revisione restano sotto controllo aziendale.', link: 'Scopra il controllo dei dati →', href: 'data-control.html' },
    ],
  },
  integrations: {
    heading: 'Funziona con gli strumenti che il Suo team utilizza già.',
    body: 'Zuraio è progettato per lavorare accanto alla Sua e-mail, ai documenti, alle riunioni, ai messaggi e ai sistemi aziendali esistenti.',
    clarify: 'Le connessioni dipendono dalla configurazione aziendale, dagli strumenti approvati e dall\'ambito del deployment.',
    link: 'Veda tutte le integrazioni →',
  },
  demo: {
    heading: 'Veda il Suo assistente al lavoro.',
    headingEmphasis: 'lavoro',
    body: 'Zuraio raccoglie il contesto aziendale giusto, prepara il lavoro e lo restituisce con le fonti per la Sua approvazione.',
    disclaimer: 'Dimostrazione simulata — le funzionalità dipendono dal deployment e dalle autorizzazioni concordate.',
    slides: [
      {
        id: 'mail',
        label: 'E-mail',
        heading: 'La risposta è già pronta.',
        emphasis: 'risposta',
        body: 'I thread lunghi possono essere riassunti e le risposte preparate con il contesto aziendale pertinente. Lei revisiona, modifica e decide cosa inviare.',
        alt: 'Assistente e-mail Zuraio — posta in arrivo con bozza di risposta e fonti.',
      },
      {
        id: 'project-summary',
        label: 'Sintesi di progetto',
        heading: 'Il quadro completo, già assemblato.',
        body: 'Zuraio riunisce il contesto di progetto da e-mail, documenti e note, così il Suo team vede lo stato senza dover cercare.',
        alt: 'Sintesi di progetto Zuraio — panoramica consolidata con dettagli chiave e fonti.',
      },
      {
        id: 'appointment-reply',
        label: 'Appuntamento e risposta',
        heading: 'Pianificazione gestita con contesto.',
        body: 'Una richiesta del cliente viene abbinata alla disponibilità del calendario, alla cronologia pertinente e a una bozza di risposta pronta per la Sua approvazione.',
        alt: 'Workflow appuntamenti Zuraio — orari suggeriti e bozza di risposta preparati dal contesto aziendale.',
      },
      {
        id: 'meeting-transcript',
        label: 'Trascrizione riunione',
        heading: 'Ogni riunione, registrata e utilizzabile.',
        body: 'Le trascrizioni vengono riassunte con decisioni, azioni e follow-up, così nulla dipende dalla sola memoria.',
        alt: 'Trascrizione riunione Zuraio — discussione riassunta con azioni e follow-up.',
      },
      {
        id: 'tasks',
        label: 'Attività',
        heading: 'Nulla sfugge.',
        body: 'Le azioni vengono estratte da e-mail, riunioni e messaggi, così i follow-up restano visibili prima di essere dimenticati.',
        alt: 'Vista attività Zuraio — azioni aperte raccolte dall\'attività aziendale recente.',
      },
      {
        id: 'briefing',
        label: 'Briefing',
        heading: 'Entri preparato.',
        body: 'E-mail, note, documenti, decisioni e azioni aperte pertinenti raccolti prima di sedersi.',
        alt: 'Briefing riunione Zuraio — cronologia cliente, file correlati e punti di discussione preparati.',
      },
    ],
  },
  outcomes: {
    heading: 'Meno amministrazione. Più lavoro di valore.',
    headingEmphasis: 'valore',
    body: 'Zuraio aiuta i collaboratori a dedicare meno tempo a cercare, riassumere e preparare, così possono concentrarsi su clienti, decisioni e il lavoro per cui sono stati assunti.',
    cards: [
      { tag: 'Riunioni', title: 'Entri preparato', body: 'Cronologia pertinente, decisioni e azioni aperte già preparate.' },
      { tag: 'E-mail', title: 'Bozze di risposta pronte', body: 'Bozze basate sull\'intero thread e sul contesto aziendale pertinente.' },
      { tag: 'Risposte', title: 'Chieda con evidenze', body: 'Interroghi il know-how approvato e veda le fonti dietro la risposta.' },
      { tag: 'Report', title: 'Prime bozze, più rapidamente', body: 'Trasformi le informazioni esistenti in prime bozze strutturate.' },
      { tag: 'Follow-up', title: 'Nulla sfugge', body: 'Catturi azioni e prossimi passi prima che vengano dimenticati.' },
    ],
  },
  dataControl: {
    marker: 'Controllo dei dati',
    heading: 'IA, senza consegnare le chiavi.',
    headingEmphasis: 'chiavi',
    body: 'Zuraio offre alle aziende il controllo su dove viene eseguito, quali informazioni può utilizzare, chi vi accede e come il suo lavoro viene revisionato.',
    cards: [
      { title: 'Hosting in Svizzera', body: 'Un\'opzione di hosting svizzero per le aziende che vogliono mantenere ambiente e dati aziendali in Svizzera.' },
      { title: 'L\'accesso segue le Sue regole', body: 'I collaboratori lavorano solo con le informazioni che hanno il permesso di utilizzare.' },
      { title: 'Le risposte mostrano le fonti', body: 'Gli utenti possono verificare l\'origine delle informazioni prima di fare affidamento su di esse.' },
      { title: 'Progettato per la revisione', body: 'Richieste, fonti e output possono essere tracciati più facilmente secondo la configurazione concordata.' },
    ],
    note: '<b>Le serve un controllo più rigoroso?</b> Opzioni on-premise e scelta del modello possono essere discusse per aziende con requisiti interni più stringenti.',
    link: 'Esplori controllo dei dati e sicurezza →',
  },
  reviewable: {
    marker: 'AI governance',
    heading: 'IA che può spiegare in seguito.',
    headingEmphasis: 'spiegare',
    bodyParagraphs: [
      'L\u2019uso dell\u2019IA diventa più facile da verificare. Clienti, revisori e regolatori si aspetteranno sempre più che le aziende spieghino da dove provengono le informazioni e come è stata usata l\u2019IA.',
      'Zuraio la aiuta a restare preparata con risposte basate sulle fonti e IA revisionabile.',
    ],
    steps: [
      { label: 'Cosa è stato chiesto', title: 'La richiesta', body: 'Conservi una traccia del prompt o del compito.' },
      { label: 'Cosa è stato utilizzato', title: 'Le fonti', body: 'Veda esattamente quali informazioni aziendali approvate sono state utilizzate.' },
      { label: 'Cosa è stato prodotto', title: 'L\'output', body: 'Esamini la risposta, la bozza o la sintesi creata.' },
      { label: 'Chi ha approvato', title: 'La revisione', body: 'Sappia chi ha revisionato, modificato o approvato il risultato finale.' },
    ],
    link: 'Scopra l\'AI governance →',
  },
  origin: {
    marker: 'Perché l\'abbiamo creato',
    heading: 'Creato per il lavoro che dovevamo svolgere noi stessi.',
    paragraphs: [
      'Zuraio è nato perché avevamo bisogno di un modo migliore per preparare, cercare, riassumere, redigere e fare follow-up nel nostro lavoro quotidiano.',
      'Gli strumenti di IA pubblici erano utili, ma non bastavano per un lavoro aziendale serio. Volevamo un\'IA collegata al know-how aziendale reale, con controllo chiaro su dati, accesso e scelta del modello.',
      'Da lì è nato Zuraio.',
    ],
    link: 'Conosca il team →',
    caption: 'Creato perché ne avevamo bisogno noi stessi.',
    imageAlt: 'Il team Zuraio al lavoro — laptop, quaderni e lavagna con preparare, cercare, riassumere, redigere e follow-up.',
  },
  final: {
    heading: 'Veda cosa il Suo assistente potrebbe togliere dalla Sua scrivania.',
    body: 'Esamineremo i Suoi strumenti attuali, il know-how aziendale e i requisiti di controllo dei dati, poi identificheremo dove Zuraio potrebbe aiutare per primo.',
    primaryCta: 'Prenoti una demo privata',
    secondaryCta: 'Veda l\'assistente al lavoro',
    supporting: 'La Sua azienda. Le Sue informazioni. La Sua approvazione.',
  },
};

export const pages = {
  howItHelps: {
    title: 'Come aiuta — Zuraio',
    hero: { marker: 'Come aiuta', heading: 'Meno amministrazione. Più lavoro di valore.', headingEmphasis: 'valore', lede: 'Zuraio aiuta i collaboratori a preparare, cercare, redigere, riassumere e fare follow-up utilizzando know-how aziendale approvato. Lavora accanto ai sistemi esistenti e riunisce il contesto pertinente quando serve.' },
  },
  knowledge: {
    title: 'Conoscenze — Zuraio',
    hero: { marker: 'Conoscenze', heading: 'Trasformi informazioni aziendali disperse in contesto utilizzabile.', headingEmphasis: 'utilizzabile', lede: 'Le conoscenze importanti sono spesso distribuite tra caselle di posta, drive condivisi, note di riunione, record CRM e sistemi aziendali. Zuraio è progettato per riunire le informazioni approvate, così i collaboratori possono trovarle, comprenderle e utilizzarle in modo più efficace.' },
  },
  integrations: {
    title: 'Integrazioni — Zuraio',
    hero: { marker: 'Integrazioni', heading: 'Lavora accanto ai sistemi che il Suo team utilizza già.', headingEmphasis: 'già', lede: 'Zuraio è progettato per collegare know-how aziendale e flussi di lavoro senza obbligare i team a sostituire sistemi che già funzionano.' },
  },
  dataControl: {
    title: 'Controllo dei dati e sicurezza — Zuraio',
    hero: { marker: 'Controllo dei dati e sicurezza', heading: 'I Suoi dati. Le Sue regole. Il Suo deployment.', headingEmphasis: 'regole', lede: 'Zuraio è progettato per aiutare le aziende a utilizzare l\'IA senza rinunciare al controllo su know-how aziendale, autorizzazioni o scelte infrastrutturali.' },
  },
  deploymentModels: {
    title: 'Modelli di deployment — Zuraio',
    hero: { marker: 'Modelli di deployment', heading: 'Locale, ibrido o cloud svizzero.', headingEmphasis: 'svizzero', lede: 'Le aziende hanno requisiti diversi per controllo, prestazioni, infrastruttura e costi. Zuraio può essere configurato intorno al modello di deployment concordato con il cliente.' },
  },
  technicalArchitecture: {
    title: 'Architettura tecnica — Zuraio',
    hero: { marker: 'Architettura tecnica', heading: 'Un percorso controllato dalla richiesta all\'output revisionato.', headingEmphasis: 'controllato', lede: 'Zuraio collega utenti, fonti aziendali approvate, strumenti di business e modelli IA attraverso un livello di esecuzione governato. L\'architettura esatta dipende dall\'ambiente del cliente e dal modello di deployment.' },
  },
  aiGovernance: {
    title: 'AI governance — Zuraio',
    hero: { marker: 'AI governance', heading: 'Utilizzo dell\'IA comprensibile e revisionabile.', lede: 'Un\'IA aziendale responsabile richiede più di un modello. Le organizzazioni necessitano di regole chiare per accesso, utilizzo dei dati, revisione umana, logging e responsabilità.' },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: { marker: 'FAQ', heading: 'Domande pratiche sull\'utilizzo di Zuraio al lavoro.', lede: 'Risposte alle domande più frequenti su deployment, autorizzazioni, controllo dei dati e utilizzo quotidiano.' },
  },
  about: {
    title: 'Chi siamo — Zuraio',
    hero: { marker: 'Su Zuraio', heading: 'Creato da persone che cercavano un modo migliore di lavorare.', headingEmphasis: 'migliore', lede: 'Zuraio è nato da un problema concreto. Gli strumenti di IA esistenti erano utili, ma non combinavano know-how aziendale, controllo dei dati e lavoro quotidiano nel modo di cui avevamo bisogno.' },
  },
  contact: {
    title: 'Contatto — Zuraio',
    hero: { marker: 'Contatto', heading: 'Trovi il primo caso d\'uso pratico per la Sua azienda.', headingEmphasis: 'pratico', lede: 'Esamineremo i Suoi strumenti attuali, il know-how aziendale e i requisiti di controllo dei dati, poi identificheremo dove Zuraio potrebbe aiutare per primo.' },
  },
  resources: {
    title: 'Risorse — Zuraio',
    hero: { marker: 'Risorse', heading: 'Informazioni tecniche e pratiche su Zuraio.', headingEmphasis: 'pratiche', lede: 'Guide, panoramiche e materiale di riferimento per i team che valutano o implementano Zuraio.' },
  },
  privacy: {
    title: 'Privacy — Zuraio',
    hero: { marker: 'Legale', heading: 'Informativa sulla privacy.', lede: 'Questa pagina è un segnaposto strutturato. Un\'informativa sulla privacy completa deve essere preparata e revisionata da consulenti legali qualificati prima della pubblicazione.' },
  },
  impressum: {
    title: 'Impressum — Zuraio',
    hero: { marker: 'Legale', heading: 'Impressum.', lede: 'Questa pagina è un segnaposto strutturato. Tutti i dati aziendali riportati di seguito devono essere verificati e inseriti prima della pubblicazione.' },
  },
  terms: {
    title: 'Condizioni d\'uso — Zuraio',
    hero: { marker: 'Legale', heading: 'Condizioni d\'uso.', lede: 'Questa pagina è un segnaposto strutturato. Condizioni d\'uso complete devono essere preparate e revisionate da consulenti legali qualificati prima della pubblicazione.' },
  },
  cookies: {
    title: 'Impostazioni cookie — Zuraio',
    hero: { marker: 'Legale', heading: 'Impostazioni cookie.', lede: 'Questa pagina è un segnaposto strutturato. Le categorie e i controlli cookie effettivi saranno pubblicati dopo revisione legale e tecnica.' },
  },
};

export const site = {
  tagline: 'IA per aziende svizzere che vogliono mantenere il controllo dei propri dati.',
};

export const footerGroups = [
  {
    title: 'Prodotto',
    links: [
      { label: 'Come aiuta Zuraio', href: 'how-it-helps.html' },
      { label: 'Conoscenze', href: 'knowledge.html' },
      { label: 'Integrazioni', href: 'integrations.html' },
      { label: 'Casi d\'uso', href: 'how-it-helps.html#use-cases' },
      { label: 'Prenoti una demo', href: 'contact.html' },
    ],
  },
  {
    title: 'Dati e sicurezza',
    links: [
      { label: 'Controllo dei dati', href: 'data-control.html' },
      { label: 'Hosting svizzero', href: 'deployment-models.html#swiss-hosted' },
      { label: 'Modelli di deployment', href: 'deployment-models.html' },
      { label: 'Architettura tecnica', href: 'technical-architecture.html' },
      { label: 'AI governance', href: 'ai-governance.html' },
    ],
  },
  {
    title: 'Azienda',
    links: [
      { label: 'Chi siamo', href: 'about.html' },
      { label: 'Contatto', href: 'contact.html' },
      { label: 'Risorse', href: 'resources.html' },
      { label: 'Partner', href: 'contact.html#partnerships' },
      { label: 'Sala stampa', href: 'resources.html#pressroom' },
    ],
  },
  {
    title: 'Legale',
    links: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Privacy', href: 'privacy.html' },
      { label: 'Impostazioni cookie', href: 'cookies.html' },
      { label: 'Condizioni d\'uso', href: 'terms.html' },
    ],
  },
];
