/** Italian body copy for technical pages — exact source: Zuraio-technical-copy-IT_0517.md */

export const statusLabels = {
  available: 'Disponibile oggi',
  validation: 'In validazione',
  specified: 'Specificato / in sviluppo',
};

export const deployStatusLabels = {
  local: 'Disponibile su progetto – ambito da confermare',
  hybrid: 'Disponibile in base all’architettura – componenti da confermare',
  swiss: 'Opzione di hosting – richiede un ambito tecnico e commerciale',
};

export const technicalArchitecture = {
  tocTitle: 'In questa pagina',
  toc: [
    {
      href: '#overview',
      label: 'Architettura tecnica',
    },
    {
      href: '#request-flow',
      label: 'Percorso dalla richiesta al risultato',
    },
    {
      href: '#maturity',
      label: 'Livello di maturità attuale',
    },
    {
      href: '#models',
      label: 'Scelta dei modelli',
    },
    {
      href: '#integration-layer',
      label: 'Livello di integrazione',
    },
    {
      href: '#rollout',
      label: 'Implementazione controllata',
    },
  ],
  heroNote:
    'L’architettura concreta dipende dalla modalità di implementazione, dai sistemi collegati e dai modelli autorizzati.',
  primaryCta: 'Discutere i requisiti tecnici',
  secondaryCta: 'Confrontare le modalità di implementazione',
  overview: {
    marker: 'Architettura tecnica',
    heading: 'Una piattaforma. Sette livelli controllati.',
    lede: 'Zuraio separa l’esperienza dei collaboratori dalla complessità tecnica sottostante. Ogni livello svolge un ruolo definito nel controllo degli accessi, del contesto, dell’esecuzione e della verifica.',
    layers: [
      {
        title: '1. Accessi e interfacce utente',
        body: 'I collaboratori utilizzano l’interfaccia Zuraio oppure applicazioni e client collegati e approvati. Le funzioni disponibili possono variare in base al ruolo, all’implementazione e al dispositivo.',
      },
      {
        title: '2. Identità, autorizzazioni e regole',
        body: 'Prima di rendere disponibili conoscenze aziendali, strumenti o azioni, Zuraio verifica identità, ruolo e autorizzazioni. Le strutture di identità Microsoft o Google possono essere integrate e, se necessario, completate con ruoli specifici di Zuraio.',
      },
      {
        title: '3. Orchestrazione',
        body: 'Il livello di orchestrazione interpreta l’attività, individua il processo appropriato e coordina conoscenze, assistenti, strumenti e modelli autorizzati. Può suddividere le attività più complesse in passaggi controllati e riunire successivamente i risultati.',
      },
      {
        title: '4. SkillOS e conoscenza aziendale',
        body: 'SkillOS fornisce processi approvati, contesto aziendale pertinente, modelli di documenti e regole di qualità. Gli Skill vengono versionati al di fuori del modello IA, in modo da poter essere verificati, aggiornati e gestiti in modo controllato.',
      },
      {
        title: '5. Assistenti specializzati e integrazioni',
        body: 'Gli assistenti specializzati offrono capacità chiaramente delimitate per comunicazione, conoscenza, documenti e attività specifiche del cliente. MCP, API, webhook e connettori forniscono accesso controllato ai sistemi aziendali approvati.',
      },
      {
        title: '6. Gateway dei modelli',
        body: 'È possibile selezionare diversi modelli IA autorizzati in funzione dell’attività, della classificazione dei dati, del luogo di elaborazione consentito, della qualità richiesta e dei costi. I modelli disponibili dipendono dall’implementazione e dai fornitori approvati.',
      },
      {
        title: '7. Registrazione, verifica e gestione operativa',
        body: 'Richieste, fonti, azioni ed eventi tecnici pertinenti possono essere conservati in base alle capacità dei componenti scelti e al modello di audit concordato. I controlli operativi variano in funzione dell’implementazione e del livello di maturità.',
      },
    ],
    diagramTitle:
      'I sette livelli dell’architettura Zuraio: accessi, identità e regole, orchestrazione, SkillOS, assistenti e integrazioni, gateway dei modelli, verifica e gestione operativa.',
    diagramDesc:
      'Flusso verticale illustrativo: utente o applicazione collegata, identità e regole, orchestrazione, SkillOS, assistenti e integrazioni, gateway dei modelli, risultato e fonti, verifica e gestione operativa.',
    diagramCaption:
      'Architettura della piattaforma a scopo illustrativo. I confini dei componenti e i relativi luoghi di esecuzione variano in base all’ambiente del cliente.',
    diagramLayers: [
      'Utente o applicazione collegata',
      'Identità e regole',
      'Orchestrazione',
      'SkillOS / assistenti / integrazioni',
      'Gateway dei modelli',
      'Risultato e fonti',
      'Verifica e gestione operativa',
    ],
  },
  requestFlow: {
    marker: 'Percorso dalla richiesta al risultato',
    heading: 'Un percorso controllato dalla richiesta al risultato.',
    lede: 'Zuraio è progettato per applicare il contesto aziendale, le autorizzazioni e le regole durante l’intero svolgimento di un’attività, non soltanto durante una verifica finale.',
    steps: [
      {
        title: 'Ricevere la richiesta',
        body: 'Un collaboratore pone una domanda o avvia un processo tramite Zuraio o un’applicazione approvata.',
      },
      {
        title: 'Verificare identità e autorizzazioni',
        body: 'Zuraio identifica l’utente, il tenant, il ruolo e le fonti o azioni consentite.',
      },
      {
        title: 'Determinare processo e contesto',
        body: 'SkillOS può fornire conoscenze approvate, fasi del processo, modelli e requisiti di qualità.',
      },
      {
        title: 'Coordinare le capacità necessarie',
        body: 'Il livello di orchestrazione seleziona gli assistenti, gli strumenti, le fonti di dati e il modello autorizzato più adatti.',
      },
      {
        title: 'Preparare il risultato',
        body: 'Le informazioni provenienti da fonti autorizzate vengono riunite in una risposta, una bozza o un’azione proposta.',
      },
      {
        title: 'Verificare le azioni critiche',
        body: 'Le azioni di scrittura o con effetto esterno possono essere presentate come bozze o proposte prima della conferma.',
      },
      {
        title: 'Conservare le informazioni pertinenti',
        body: 'Fonti, versioni, azioni ed eventi tecnici vengono documentati quando il componente e la configurazione di audit lo consentono.',
      },
    ],
  },
  maturity: {
    marker: 'Livello di maturità attuale',
    heading: 'Livello di maturità attuale.',
    lede: 'Zuraio è composto da più componenti. Gli stati seguenti distinguono le funzioni disponibili da quelle ancora in validazione produttiva o tuttora specificate e in fase di sviluppo.',
    panels: [
      {
        status: 'available',
        title: 'SkillOS',
        items: [
          'Conoscenze e Skill di processo versionati',
          'Ciclo di governance e ruoli',
          'Ricerca ibrida e relazioni tra conoscenze',
          'Accesso MCP basato sui ruoli',
          'Funzioni di backup, ripristino, manutenzione e controllo dello stato',
          'Nucleo verificato con test unitari e di integrazione',
        ],
        qualification: null,
      },
      {
        status: 'validation',
        title: 'EmailAI',
        items: [
          'Ricerca, consultazione e classificazione delle e-mail',
          'Preparazione di bozze di risposta',
          'Attività, appuntamenti, contatti e memo',
          'Grafo della conoscenza delle comunicazioni',
          'Principio «prima la bozza» per le azioni di scrittura',
          'Accesso web, mobile e vocale',
        ],
        qualification:
          'La piena operatività con Microsoft 365, il monitoraggio centralizzato, i backup automatici e la separazione completa di utenti e tenant restano in validazione o in fase di sviluppo.',
      },
      {
        status: 'specified',
        title: 'MSConnector e automazione Office',
        items: [
          'Modifiche controllate in Word, Excel e PowerPoint',
          'Componenti aggiuntivi Office',
          'Document Twin e ancoraggi semantici',
          'Living Documents',
          'Coerenza tra più documenti',
          'Verifica visiva dei documenti',
          'Implementazione come appliance dedicata al tenant',
        ],
        qualification:
          'Queste capacità fanno parte dell’architettura di destinazione specificata. Non devono essere presentate come generalmente disponibili prima del completamento dell’implementazione e della validazione pilota.',
      },
    ],
  },
  models: {
    marker: 'Scelta dei modelli',
    heading: 'Utilizzare il modello adatto a ogni attività.',
    lede: 'Zuraio separa i processi aziendali, gli Skill e le integrazioni dal singolo modello IA. L’architettura può quindi considerare l’attività, la qualità richiesta, la classificazione dei dati, il luogo di elaborazione consentito, la disponibilità e i costi prima di selezionare un modello approvato.',
    items: [
      'Modelli locali per determinate attività riservate o controllate',
      'Servizi di modelli svizzeri quando inclusi nell’implementazione concordata',
      'Modelli approvati in cloud privati o pubblici',
      'Modelli più potenti per ragionamenti complessi o requisiti linguistici elevati',
      'Modelli più contenuti per processi di routine chiaramente definiti',
      'Regole che stabiliscono quali dati possono essere trasmessi a ciascun modello',
    ],
    qualification:
      'I modelli e i fornitori disponibili dipendono dall’implementazione concordata, dalla validazione tecnica e dalle condizioni commerciali.',
    link: 'Confrontare le modalità di implementazione →',
    linkHref: 'deployment-models.html',
  },
  integrationLayer: {
    marker: 'Livello di integrazione',
    heading: 'Progettato per integrarsi, non per creare un nuovo silo.',
    lede: 'Zuraio è progettato come livello di orchestrazione sopra i sistemi esistenti e non sostituisce i sistemi che restano le fonti di riferimento. Le capacità approvate possono essere utilizzate o esposte tramite MCP, API, webhook e connettori specifici.',
    items: [
      'Ambienti di identità e dati Microsoft e Google',
      'Archivi di documenti e file',
      'Sistemi di posta elettronica, calendario e comunicazione',
      'CRM, ERP, DMS e applicazioni specialistiche',
      'Database e API interni',
      'Assistenti e strumenti specifici del cliente',
    ],
    qualification:
      'La disponibilità e il grado di maturità di ogni integrazione devono essere confermati separatamente.',
    link: 'Visualizzare le categorie di integrazione →',
    linkHref: 'integrations.html',
  },
  rollout: {
    marker: 'Implementazione controllata',
    heading: 'Iniziare in modo controllato. Ampliare sulla base dei risultati.',
    steps: [
      'Selezionare i primi casi d’uso.',
      'Esaminare sistemi, identità e fonti di dati.',
      'Definire l’implementazione e i limiti applicabili ai modelli.',
      'Configurare autorizzazioni e requisiti di verifica.',
      'Avviare un progetto pilota con utenti selezionati.',
      'Valutare risultati, rischi e preparazione operativa.',
      'Ampliare l’uso quando il valore è stato dimostrato.',
    ],
  },
  cta: {
    heading: 'Parliamo della vostra architettura tecnica.',
    button: 'Fissare un colloquio tecnico',
  },
};

export const knowledge = {
  skillos: {
    marker: 'SkillOS',
    heading: 'Dalle informazioni archiviate alla conoscenza aziendale governata.',
    ledes: [
      'SkillOS gestisce conoscenze e istruzioni di processo approvate sotto forma di Skill versionati e riutilizzabili. Uno Skill può definire le informazioni da utilizzare, il processo da seguire, i ruoli responsabili, gli strumenti consentiti e il risultato atteso.',
      'Zuraio non si limita quindi a cercare documenti. Un assistente specializzato può ricevere le conoscenze e il metodo di lavoro approvati per una determinata attività aziendale.',
    ],
    cards: [
      {
        title: 'Conoscenza versionata',
        body: 'Gli Skill dispongono di versioni e stati del ciclo di vita definiti. Le indicazioni approvate possono quindi essere controllate e aggiornate al di fuori del modello IA.',
      },
      {
        title: 'Contesto collegato',
        body: 'La ricerca può combinare parole chiave, metadati strutturati, somiglianza semantica e relazioni tra Skill correlati.',
      },
      {
        title: 'Modifiche governate',
        body: 'Uno Skill nuovo o modificato può essere sottoposto a revisione e approvazione prima di essere reso disponibile per l’uso operativo.',
      },
    ],
  },
  skills: {
    marker: 'Skills',
    heading: 'La conoscenza aziendale comprende anche il modo in cui il lavoro deve essere svolto.',
    lede: 'Uno Skill Zuraio può contenere più di semplice materiale di riferimento. Può descrivere il processo approvato e le condizioni in cui deve essere applicato.',
    items: [
      'Fasi obbligatorie del processo',
      'Ruoli e responsabilità',
      'Input, dipendenze e risultati attesi',
      'Modelli e regole di formattazione',
      'Controlli di qualità e punti di verifica',
      'Fonti, assistenti e strumenti consentiti',
      'Versione, validità e sostituzione di indicazioni precedenti',
    ],
  },
  sources: {
    marker: 'Fonti approvate',
    heading: 'Fonti approvate per risposte specifiche dell’azienda.',
    lede: 'Le fonti collegate dipendono dall’organizzazione, dalle autorizzazioni e dall’ambito di integrazione concordato. Zuraio è progettato per utilizzare informazioni aziendali selezionate, anziché basarsi esclusivamente sulla conoscenza pubblica del modello.',
    cards: [
      {
        title: 'Documenti e file',
        body: 'Direttive, standard, offerte, file di progetto, modelli e archivi condivisi approvati.',
      },
      {
        title: 'E-mail e calendario',
        body: 'Comunicazioni pertinenti, contesto delle riunioni e corrispondenza, quando le autorizzazioni e lo stato dell’integrazione lo consentono.',
      },
      {
        title: 'Sistemi aziendali',
        body: 'CRM, ERP, strumenti di progetto e applicazioni specialistiche con informazioni operative.',
      },
      {
        title: 'Conoscenza dei processi',
        body: 'Skill SkillOS pubblicati contenenti procedure, modelli e regole di qualità approvati.',
      },
      {
        title: 'Fonti specifiche',
        body: 'Informazioni aggiuntive accessibili tramite API approvate o connettori specifici del cliente.',
      },
    ],
    qualification:
      'Le fonti concrete e il relativo stato di integrazione vengono confermati per ogni ambiente cliente.',
  },
  traceability: {
    marker: 'Tracciabilità',
    heading: 'Risposte verificabili rispetto alle fonti.',
    lede: 'Quando viene utilizzata conoscenza aziendale basata su fonti, Zuraio può conservare e presentare le informazioni di origine secondo il processo e l’interfaccia scelti. I collaboratori possono così verificare gli elementi importanti prima di utilizzarli.',
    items: [
      'Confrontare le affermazioni importanti con le informazioni originali',
      'Comprendere quali documenti o sistemi hanno contribuito',
      'Ridurre la dipendenza dalla memoria non verificata di un modello',
      'Sostenere i processi interni di verifica e governance',
      'Identificare, quando disponibile, la versione o la data pertinente',
    ],
    qualification:
      'La presentazione delle fonti varia in base all’assistente, all’interfaccia e all’implementazione. Non tutti i risultati sono necessariamente basati su fonti.',
    link: 'Scoprire l’architettura tecnica →',
    linkHref: 'technical-architecture.html',
  },
  cta: {
    heading: 'Scoprite come collegare le conoscenze della vostra azienda.',
    lede: 'Possiamo esaminare le fonti attuali, il modello di autorizzazione e le prime domande a cui i vostri team desiderano rispondere.',
    button: 'Prenotare una demo privata',
  },
};

export const dataControl = {
  ownership: {
    marker: 'Proprietà dei dati',
    heading: 'I vostri dati restano sotto il vostro controllo.',
    lede: 'Zuraio è progettato per trattare le informazioni aziendali entro i limiti dell’implementazione e del contratto concordati. Proprietà, usi consentiti, conservazione e condizioni di elaborazione devono essere documentati per la soluzione e i fornitori di modelli selezionati.',
    cards: [
      {
        title: 'L’azienda mantiene la proprietà',
        body: 'Documenti, e-mail, dati aziendali e conoscenze interne restano di proprietà del cliente. Zuraio non rivendica alcun diritto di proprietà sui contenuti del cliente.',
      },
      {
        title: 'Le condizioni dei fornitori vengono definite prima del collegamento',
        body: 'L’eventuale conservazione delle informazioni o il loro utilizzo per l’addestramento da parte di un fornitore esterno dipendono dal modello, dal fornitore e dalle condizioni contrattuali. Questi aspetti devono essere definiti prima di collegare informazioni aziendali.',
      },
    ],
  },
  identity: {
    marker: 'Identità e autorizzazioni',
    heading: 'Gli accessi devono rispettare le regole esistenti dell’azienda.',
    lede: 'Zuraio può utilizzare identità, gruppi e autorizzazioni Microsoft o Google già presenti. Quando tali integrazioni non vengono utilizzate, Zuraio può fornire ruoli e controlli di accesso aggiuntivi.',
    cards: [
      {
        title: 'Strutture di identità esistenti',
        body: 'Le informazioni di identità Microsoft o Google possono costituire la base organizzativa per utenti, gruppi e ruoli.',
      },
      {
        title: 'Verifica delle autorizzazioni',
        body: 'Il contesto di identità e autorizzazione può essere trasmesso all’assistente e alla fonte di dati interessati, affinché l’accesso venga verificato quando si consulta un’informazione o si richiede un’azione.',
      },
      {
        title: 'Controlli Zuraio aggiuntivi',
        body: 'Le regole Zuraio possono limitare modelli, strumenti, classi di dati e azioni senza sostituire il sistema di identità esistente.',
      },
    ],
    qualification:
      'Il comportamento concreto dipende dal sistema collegato, dal metodo di integrazione e dall’implementazione concordata.',
  },
  actions: {
    marker: 'Azioni controllate',
    heading: 'Leggere un’informazione e modificarla non sono la stessa cosa.',
    lede: 'Zuraio è progettato per distinguere le operazioni di sola lettura dalle azioni che modificano documenti, sistemi o comunicazioni esterne. Le azioni critiche o di scrittura possono essere preparate come bozze o proposte prima della conferma.',
    items: [
      'Leggere informazioni approvate entro i limiti delle autorizzazioni',
      'Preparare una risposta o una modifica proposta',
      'Mostrare l’azione prevista prima dell’esecuzione',
      'Richiedere una conferma quando configurato',
      'Conservare le informazioni pertinenti sull’azione e sull’approvazione quando supportato',
    ],
    qualification:
      'Il principio «prima la bozza» è implementato in EmailAI. Controlli più ampi dipendono dal componente e dal relativo livello di maturità.',
  },
  policies: {
    marker: 'Regole dei modelli e della localizzazione',
    heading: 'Stabilire quali dati possono essere inviati a quale modello e in quale luogo.',
    lede: 'Le regole possono considerare l’attività, la classificazione dei dati, il luogo di elaborazione consentito e il fornitore approvato. Ciò consente architetture che combinano componenti locali, svizzeri e cloud autorizzati.',
    link: 'Confrontare le modalità di implementazione →',
    linkHref: 'deployment-models.html',
  },
  security: {
    marker: 'Sicurezza',
    heading: 'La sicurezza dipende dall’implementazione scelta.',
    lede: 'Le implementazioni Zuraio sono progettate per proteggere i dati durante il trasferimento e l’archiviazione. Cifratura, gestione delle chiavi, archiviazione, registrazione, backup e ripristino devono essere documentati per i componenti e l’implementazione scelti.',
    cards: [
      {
        title: 'Autenticazione e autorizzazione',
        body: 'Gli accessi sono controllati tramite identità, ruoli, ambiti di autorizzazione e permessi specifici dei componenti.',
      },
      {
        title: 'Separazione di tenant e dati',
        body: 'Il modello di isolamento richiesto viene definito per l’implementazione e i componenti selezionati.',
      },
      {
        title: 'Registrazione e verifica',
        body: 'Richieste, fonti e azioni pertinenti possono essere conservate secondo il modello di audit concordato e la maturità di ciascun componente.',
      },
      {
        title: 'Misure specifiche dell’implementazione',
        body: 'I controlli relativi a rete, archiviazione, backup e gestione operativa vengono concordati come parte della progettazione dell’implementazione.',
      },
    ],
    qualification:
      'Qualsiasi affermazione sulla normativa svizzera in materia di protezione dei dati, sul GDPR, sulla regolamentazione dell’IA, sulle certificazioni o sui subfornitori richiede una verifica giuridica e tecnica separata.',
    link: 'Governance dell’IA →',
    linkHref: 'ai-governance.html',
  },
  cta: {
    heading: 'Parliamo dei vostri requisiti di controllo dei dati.',
    lede: 'Possiamo esaminare le classi di dati, i sistemi di identità esistenti, i requisiti infrastrutturali e il confine di implementazione più adeguato.',
    primary: 'Visualizzare le modalità di implementazione',
    primaryHref: 'deployment-models.html',
    secondary: 'Prenotare una demo privata',
    secondaryHref: 'contact.html',
  },
};

export const deploymentModels = {
  models: {
    marker: 'Modalità',
    heading: 'Locale, ibrida o con hosting in Svizzera.',
    cards: [
      {
        status: 'local',
        title: 'Locale o sotto il controllo del cliente',
        intro:
          'Determinati componenti, assistenti o modelli Zuraio possono essere progettati per funzionare in un’infrastruttura controllata dal cliente o in un cloud privato.',
        items: [
          'Maggiore controllo sui luoghi di elaborazione e archiviazione',
          'Adatto a determinati carichi di lavoro riservati o soggetti a regole interne',
          'Possibilità di utilizzare modelli locali e modelli cloud approvati',
          'Maggiore coinvolgimento dell’IT interno',
          'Responsabilità operative da concordare',
        ],
        qualification:
          'Un’implementazione locale non è un unico pacchetto standard. Componenti, hardware, supporto, aggiornamenti, backup e requisiti dei modelli devono essere confermati per ogni progetto.',
      },
      {
        status: 'hybrid',
        title: 'Ibrida',
        intro:
          'Un’architettura ibrida può distribuire fonti, assistenti e modelli tra diversi ambienti approvati, coordinandoli attraverso un livello di controllo comune.',
        items: [
          'Le conoscenze sensibili possono rimanere nei sistemi controllati dal cliente',
          'Determinate elaborazioni possono avvenire in ambienti gestiti e approvati',
          'La scelta del modello può variare in base all’attività e alla classificazione dei dati',
          'Gli assistenti possono operare vicino ai sistemi che utilizzano',
          'Flussi di dati e responsabilità devono essere documentati',
        ],
        qualification: null,
      },
      {
        status: 'swiss',
        title: 'Hosting in Svizzera',
        intro:
          'Per le aziende con requisiti di ubicazione dei dati in Svizzera, determinati componenti Zuraio e modelli adeguati possono essere progettati per funzionare in un ambiente server svizzero.',
        items: [
          'Opzioni svizzere di elaborazione e archiviazione per i componenti concordati',
          'Minore onere infrastrutturale interno rispetto a un esercizio interamente locale',
          'Autorizzazioni e regole dei modelli configurabili',
          'Possibilità di inserirlo in un’architettura ibrida',
          'Soggetto a fornitori, servizi e condizioni contrattuali concordati',
        ],
        qualification:
          'Operatore, ubicazioni, fornitori di modelli, subfornitori e flussi di dati devono essere documentati per l’offerta scelta.',
      },
    ],
  },
  comparison: {
    marker: 'Confronto',
    heading: 'Confronto',
    headers: [
      'Aspetto',
      'Locale / controllata dal cliente',
      'Ibrida',
      'Hosting in Svizzera',
    ],
    rows: [
      [
        'Controllo dell’ubicazione',
        'Definito nell’infrastruttura controllata dal cliente',
        'Definito per componente e flusso di dati',
        'Definito per i componenti svizzeri concordati',
      ],
      [
        'Coinvolgimento dell’IT interno',
        'Elevato',
        'Medio',
        'Da basso a medio',
      ],
      [
        'Scelta dei modelli',
        'Modelli locali ed esterni approvati',
        'Secondo attività e regole',
        'Modelli disponibili nell’architettura concordata',
      ],
      [
        'Responsabilità operativa',
        'Principalmente cliente o condivisa',
        'Condivisa',
        'Principalmente gestita, secondo contratto',
      ],
      [
        'Impiego tipico',
        'Attività riservate o soggette a regole interne',
        'Requisiti diversi secondo sistemi e dati',
        'Aziende che cercano un hosting svizzero gestito',
      ],
      [
        'Disponibilità',
        'Da confermare per progetto',
        'Da confermare per architettura',
        'Da confermare per offerta',
      ],
    ],
  },
  agreement: {
    marker: 'Elementi da definire',
    heading: 'Elementi da definire per ogni implementazione.',
    items: [
      'Operatore e responsabilità',
      'Luoghi di elaborazione e archiviazione',
      'Fornitori di modelli',
      'Connessioni di rete',
      'Identity provider',
      'Isolamento di tenant e dati',
      'Backup e ripristino',
      'Monitoraggio e supporto',
      'Processo di aggiornamento e applicazione delle correzioni',
      'Regole di conservazione e cancellazione',
      'Servizi esterni autorizzati',
    ],
  },
  cta: {
    heading: 'Quale modalità è adatta alla vostra azienda?',
    lede: 'Possiamo esaminare i requisiti di controllo dei dati, l’infrastruttura esistente e il punto di partenza più realistico.',
    primary: 'Prenotare una demo privata',
    primaryHref: 'contact.html',
    secondary: 'Visualizzare l’architettura tecnica',
    secondaryHref: 'technical-architecture.html',
  },
  heroQualification:
    'La disponibilità di un modello specifico deve essere confermata nell’ambito tecnico e commerciale.',
};

export const aiGovernance = {
  governance: {
    marker: 'Governance',
    heading: 'La governance inizia prima che venga generata una risposta.',
    lede: 'Zuraio può applicare regole a fonti, Skill, assistenti specializzati, modelli e azioni. I processi approvati possono essere versionati in SkillOS, mentre modifiche critiche o azioni esterne possono essere preparate per la conferma umana.',
    cards: [
      {
        title: 'Conoscenza approvata',
        body: 'Le versioni pubblicate di Skill e direttive aziendali possono essere messe a disposizione per l’uso operativo.',
      },
      {
        title: 'Accessi definiti',
        body: 'Identità, ruolo e autorizzazioni sulle fonti determinano quali informazioni e capacità possono essere utilizzate.',
      },
      {
        title: 'Esecuzione controllata',
        body: 'I parametri degli strumenti possono essere convalidati e le operazioni di lettura possono essere trattate diversamente dalle azioni che modificano informazioni o comunicano all’esterno.',
      },
      {
        title: 'Conferma umana',
        body: 'Le azioni sensibili o di scrittura possono essere trattenute come bozze o proposte quando il componente supporta questo processo.',
      },
      {
        title: 'Registrazioni pertinenti',
        body: 'Richieste, fonti, versioni, azioni e approvazioni possono essere conservate quando il componente e l’implementazione lo consentono.',
      },
    ],
  },
  lifecycle: {
    marker: 'Skill-Lifecycle',
    heading: 'Mantenere aggiornate e sotto controllo le direttive aziendali.',
    lede: 'SkillOS gestisce gli Skill di conoscenza e di processo secondo un ciclo definito. Le modifiche proposte possono essere verificate prima che una nuova versione diventi disponibile per l’uso operativo.',
    stages: [
      'Bozza',
      'In revisione',
      'Approvato',
      'Pubblicato',
      'Obsoleto',
      'Archiviato',
    ],
    items: [
      'Controlli di qualità prima dei cambi di stato',
      'Fasi distinte di proposta e approvazione',
      'Protezione degli Skill pubblicati da modifiche non controllate',
      'Cronologia delle versioni e snapshot',
      'Escalation quando vengono rilevati problemi di qualità',
    ],
  },
  draftFirst: {
    marker: 'Draft-First',
    heading: 'L’IA può preparare. Le persone restano responsabili.',
    lede: 'EmailAI applica il principio «prima la bozza» alle azioni che modificano informazioni o comunicano all’esterno. Il sistema può preparare una risposta o un’azione, mostrare il risultato previsto e attendere una conferma quando necessario.',
    qualification:
      'I controlli disponibili variano in base al componente. I processi completi di modifica dei documenti Office restano specificati o in fase di sviluppo.',
  },
  review: {
    marker: 'Verifica',
    heading: 'Verificare gli elementi rilevanti.',
    cards: [
      {
        title: 'La richiesta',
        body: 'La domanda posta o l’attività avviata.',
      },
      {
        title: 'Le fonti',
        body: 'Le informazioni aziendali approvate che hanno contribuito, quando il tracciamento delle fonti è supportato.',
      },
      {
        title: 'Il processo',
        body: 'Lo Skill pubblicato, l’assistente o lo strumento utilizzato, quando il componente lo registra.',
      },
      {
        title: 'Il risultato',
        body: 'La risposta, la bozza o l’azione proposta che è stata prodotta.',
      },
      {
        title: 'La verifica',
        body: 'La persona che ha verificato o confermato un’azione, quando il processo conserva le approvazioni.',
      },
    ],
    qualification:
      'Il contenuto dei log, la durata della conservazione, le possibilità di esportazione e la visibilità nell’interfaccia dipendono dal componente e dalla configurazione di audit.',
    link: 'Scoprire il controllo dei dati →',
    linkHref: 'data-control.html',
  },
  limitations: {
    marker: 'Limitazioni',
    heading: 'Limitazioni importanti.',
    paragraphs: [
      'I risultati generati dall’IA possono contenere errori, omissioni o informazioni non aggiornate. Le informazioni importanti devono essere confrontate con le fonti originali prima di essere utilizzate.',
      'Zuraio assiste il lavoro umano. Non sostituisce il giudizio professionale, la consulenza legale o finanziaria né altre competenze qualificate.',
      'Le funzioni disponibili dipendono dall’implementazione, dalla configurazione, dalla maturità dei componenti e dal contratto.',
      'Questa pagina non costituisce consulenza legale, normativa o di conformità.',
    ],
  },
  cta: {
    heading: 'Parliamo della governance dell’IA nella vostra azienda.',
    lede: 'Possiamo esaminare il modello di accesso, i requisiti di approvazione e un percorso controllato verso un utilizzo pratico dell’IA.',
    button: 'Prenotare una demo privata',
  },
};

export const integrations = {
  methods: {
    marker: 'Metodi',
    heading: 'Un livello di integrazione flessibile.',
    lede: 'Zuraio può collegare sistemi e capacità approvati tramite MCP, API, webhook e connettori specifici. Le integrazioni disponibili dipendono dal caso d’uso, dall’implementazione e dallo stato attuale del prodotto.',
    cards: [
      {
        title: 'MCP',
        body: 'Accesso standardizzato alle capacità approvate di assistenti e strumenti.',
      },
      {
        title: 'API',
        body: 'Collegamento ad applicazioni aziendali, servizi interni e fonti di dati mediante interfacce definite.',
      },
      {
        title: 'Webhook ed eventi',
        body: 'Supporto per determinati processi asincroni ed eventi di sistema.',
      },
      {
        title: 'Connettori specifici',
        body: 'Collegamenti realizzati nell’ambito di un progetto per sistemi specialistici e applicazioni interne.',
      },
    ],
  },
  categories: {
    marker: 'Categorie',
    heading: 'Categorie di integrazione.',
    lede: null,
    cards: [
      {
        title: 'E-mail e calendario',
        body: 'Outlook, Gmail e ambienti di calendario, in base allo stato attuale dell’integrazione.',
      },
      {
        title: 'Produttività e documenti',
        body: 'Microsoft 365, SharePoint, OneDrive, Google Workspace e archivi documentali approvati, in base allo stato attuale dell’integrazione.',
      },
      {
        title: 'Collaborazione e comunicazione',
        body: 'Microsoft Teams, Slack e altre piattaforme approvate, in base allo stato attuale dell’integrazione.',
      },
      {
        title: 'CRM, ERP e applicazioni specialistiche',
        body: 'Sistemi per clienti, finanze, progetti e attività operative tramite interfacce supportate o specifiche.',
      },
      {
        title: 'API e applicazioni interne',
        body: 'API REST, webhook, database, strumenti interni e servizi specifici del cliente.',
      },
    ],
    qualification:
      'Contattateci per confermare lo stato e l’ambito disponibile di una determinata integrazione.',
  },
  components: {
    marker: 'Componenti',
    heading: 'Contesto attuale delle integrazioni.',
    panels: [
      {
        status: 'validation',
        title: 'EmailAI',
        body: 'EmailAI comprende funzioni di base implementate per e-mail, contesto delle comunicazioni, attività, appuntamenti, contatti e bozze di risposta. La piena operatività con Microsoft 365 resta in validazione.',
      },
      {
        status: 'specified',
        title: 'MSConnector',
        body: 'Il connettore Microsoft 365 e Office fa parte dell’architettura di destinazione specificata. L’automazione completa di Word, Excel, PowerPoint, SharePoint e OneDrive non deve essere presentata come generalmente disponibile prima del completamento dell’implementazione e della validazione pilota.',
      },
      {
        status: null,
        title: 'Integrazioni specifiche',
        body: 'MCP, API, webhook e connettori specifici costituiscono la base tecnica per integrazioni realizzate su progetto. La disponibilità deve essere valutata per ogni sistema.',
      },
    ],
  },
  cta: {
    heading: 'Parliamo dei vostri requisiti di integrazione.',
    lede: 'Indicateci i sistemi, le identità e le fonti di dati importanti per il vostro primo caso d’uso. Confermeremo lo stato attuale e le attività necessarie.',
    primary: 'Discutere le integrazioni',
    primaryHref: 'contact.html',
    secondary: 'Visualizzare l’architettura tecnica',
    secondaryHref: 'technical-architecture.html#integration-layer',
  },
};

export const faqItems = [
  {
    question: 'Che cos’è Zuraio AI Hub?',
    answer:
      'Zuraio AI Hub è una piattaforma che riunisce conoscenza aziendale, assistenti IA specializzati, modelli autorizzati e integrazioni con i sistemi aziendali. I collaboratori utilizzano un ambiente comune, mentre Zuraio applica le regole pertinenti in materia di identità, autorizzazioni e processi.',
  },
  {
    question: 'A chi si rivolge Zuraio?',
    answer:
      'Zuraio si rivolge inizialmente alle PMI svizzere che desiderano utilizzare l’IA in modo pratico mantenendo il controllo su conoscenza aziendale, accessi e possibilità di implementazione. L’architettura tecnica può inoltre sostenere esigenze organizzative più complesse.',
  },
  {
    question: 'Dove vengono elaborati i nostri dati?',
    answer:
      'Il luogo di elaborazione dipende dall’implementazione scelta. Zuraio supporta architetture con infrastrutture controllate dal cliente, cloud privati, hosting in Svizzera e combinazioni ibride. Luoghi concreti, fornitori di modelli e flussi di dati vengono documentati per l’ambiente concordato.',
  },
  {
    question: 'Possiamo scegliere quale modello IA gestisce una determinata attività?',
    answer:
      'Zuraio è progettato per utilizzare diversi modelli approvati in base all’attività, alla classificazione dei dati, al luogo di elaborazione consentito, alla qualità richiesta e ai costi. I modelli disponibili dipendono dall’implementazione e dai fornitori selezionati.',
  },
  {
    question: 'Gli utenti accedono soltanto alle informazioni autorizzate?',
    answer:
      'Zuraio può utilizzare identità, gruppi e autorizzazioni Microsoft o Google, completati quando necessario da ruoli Zuraio. Il comportamento concreto dipende dal sistema collegato, dal metodo di integrazione e dalla configurazione concordata.',
  },
  {
    question: 'Possiamo vedere quali fonti sono state utilizzate per una risposta?',
    answer:
      'Quando viene utilizzata conoscenza aziendale basata su fonti, Zuraio può conservare e presentare le informazioni di origine in base all’assistente e all’interfaccia. Non tutti i risultati sono necessariamente basati su fonti e la relativa presentazione varia secondo il componente.',
  },
  {
    question: 'Come si collega Zuraio ai nostri strumenti esistenti?',
    answer:
      'Zuraio è progettato per utilizzare MCP, API, webhook e connettori specifici. L’ambito disponibile dipende dal sistema, dal caso d’uso e dall’attuale maturità dell’integrazione.',
  },
  {
    question: 'I nostri dati vengono utilizzati per addestrare modelli IA pubblici?',
    answer:
      'Ciò dipende dal modello, dal fornitore e dalle condizioni contrattuali scelti. Le regole di conservazione, elaborazione ed eventuale utilizzo per l’addestramento devono essere definite prima di collegare informazioni aziendali.',
  },
  {
    question: 'Zuraio apporta modifiche automaticamente?',
    answer:
      'Zuraio può preparare risposte, bozze e azioni proposte da sottoporre a verifica. Le azioni che possono essere eseguite automaticamente dipendono dal componente, dalle autorizzazioni, dalle regole di approvazione e dalla configurazione scelta.',
  },
  {
    question: 'Che cosa è disponibile oggi?',
    answer:
      'SkillOS è il componente Zuraio più avanzato e fornisce conoscenze versionate, ricerca e funzioni di governance. EmailAI comprende funzioni di comunicazione implementate che sono ancora in validazione per l’esercizio produttivo. L’automazione completa di Microsoft 365 e Office resta specificata o in fase di sviluppo.',
  },
  {
    question: 'Come iniziamo?',
    answer:
      'Iniziamo da casi d’uso selezionati, sistemi esistenti, requisiti di identità e accesso, classi di dati e confine di implementazione desiderato. Un progetto pilota controllato può quindi convalidare utilità, integrazione e requisiti operativi prima di un’estensione più ampia.',
  },
  {
    question: 'Che cos’è uno Starter Partner?',
    answer:
      'Uno Starter Partner collabora con Zuraio su un primo caso d’uso chiaramente definito e fornisce feedback strutturato durante la validazione del prodotto. Ambito, responsabilità, supporto e condizioni commerciali vengono concordati prima dell’avvio del progetto.',
  },
];

export const faqItHeading = 'Le domande che il vostro team IT farà';

export const faqItItems = [
  {
    question: 'Dove vengono archiviati i nostri dati?',
    answer:
      'Le ubicazioni di archiviazione e di elaborazione dipendono dall’implementazione scelta. Zuraio supporta infrastrutture controllate dal cliente, cloud privato, hosting in Svizzera e combinazioni ibride. Le ubicazioni e i flussi di dati esatti sono documentati per l’ambiente concordato. Consultate <a href="deployment-models.html">modalità di implementazione</a> per una panoramica.',
  },
  {
    question: 'I dati aziendali escono dall’ambiente scelto?',
    answer:
      'Zuraio è progettato per applicare restrizioni basate su policy su quali dati possono essere inviati a ciascun modello approvato. Nelle implementazioni ibride, componenti e modelli diversi possono operare in ambienti approvati diversi secondo la configurazione concordata.',
  },
  {
    question: 'È possibile disattivare i modelli di IA cloud esterni?',
    answer:
      'I modelli disponibili per un cliente dipendono dall’implementazione concordata, dalla validazione tecnica e dalle condizioni commerciali. Le architetture possono combinare modelli locali, servizi con hosting in Svizzera e modelli cloud approvati, con policy che definiscono quali dati possono essere inviati a ciascuno.',
  },
  {
    question: 'Le richieste dei collaboratori vengono conservate?',
    answer:
      'Richieste, fonti, azioni ed eventi tecnici pertinenti possono essere conservati secondo le capacità e il modello di audit dei componenti selezionati. Il comportamento esatto di conservazione dipende dall’implementazione, dal componente e dalla configurazione concordata.',
  },
  {
    question: 'Sono disponibili registri di audit?',
    answer:
      'Zuraio è progettato per supportare un utilizzo verificabile dell’IA. Richieste, fonti e azioni pertinenti possono essere conservate quando supportato dal componente selezionato e dalla configurazione di audit. L’ambito esatto varia in base all’implementazione e alla maturità del componente.',
  },
  {
    question: 'Come vengono applicati i diritti di accesso esistenti?',
    answer:
      'Zuraio può integrare identità, gruppi e autorizzazioni Microsoft o Google, con ruoli Zuraio aggiuntivi se necessario. Il contesto di identità e autorizzazione può essere trasmesso all’assistente e alla fonte dati pertinenti, così l’accesso viene verificato al momento del recupero delle informazioni o delle azioni richieste.',
  },
];

export const faqCta = {
  heading: 'Avete altre domande?',
  lede: 'Prenotate una demo privata per discutere i vostri sistemi, i requisiti di controllo dei dati e i primi processi.',
  button: 'Contattarci',
};

export const technicalPages = {
  technicalArchitecture,
  knowledge,
  dataControl,
  deploymentModels,
  aiGovernance,
  integrations,
};
