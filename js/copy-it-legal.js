export const legalPages = {
  impressum: {
    banners: [
      {
        type: 'mono',
        text: 'DA COMPLETARE: Compilare tutti i campi seguenti con informazioni verificate sotto il profilo legale. Non pubblicare con contenuti provvisori.',
      },
    ],
    sections: [
      {
        heading: 'Azienda / soggetto giuridico',
        type: 'dl',
        items: [
          { dt: 'Ragione sociale', dd: '[Nome del soggetto giuridico]' },
          { dt: 'Forma giuridica', dd: '[ad es. Sagl, SA]' },
          { dt: 'Numero IDI / CHE', dd: '[CHE-xxx.xxx.xxx]' },
        ],
      },
      {
        heading: 'Sede legale',
        type: 'dl',
        items: [
          { dt: 'Via', dd: '[Via e numero civico]' },
          { dt: 'NPA e località', dd: '[NPA Località]' },
          { dt: 'Cantone / Paese', dd: '[Cantone, Svizzera]' },
        ],
      },
      {
        heading: 'Contatti',
        type: 'dl',
        items: [
          { dt: 'E-mail', dd: '', mailto: true },
          { dt: 'Telefono', dd: '[Numero di telefono oppure «non pubblicato»]' },
          { dt: 'Sito web', dd: '[https://zuraio.ch]' },
        ],
      },
      {
        heading: 'Rappresentata da',
        type: 'dl',
        items: [
          { dt: 'Direzione / persone con diritto di firma', dd: '[Nome/i della/e persona/e autorizzata/e a rappresentare l’azienda]' },
        ],
      },
      {
        heading: 'Registro di commercio',
        type: 'dl',
        items: [
          { dt: 'Registro', dd: '[Registro di commercio del Cantone di …]' },
          { dt: 'Numero d’iscrizione', dd: '[Numero d’iscrizione]' },
        ],
      },
      {
        heading: 'IVA / imposte',
        type: 'dl',
        items: [{ dt: 'Numero IVA', dd: '[Numero IVA oppure, se applicabile, «non assoggettata»]' }],
      },
      {
        heading: 'Responsabile dei contenuti',
        type: 'dl',
        items: [{ dt: 'Responsabilità editoriale', dd: '[Nome e indirizzo ai sensi della normativa applicabile]' }],
      },
      {
        heading: 'Esclusione di responsabilità',
        paragraphs: [
          'Testo provvisorio: i contenuti di questo sito web sono forniti esclusivamente a scopo informativo generale. Nonostante la cura prestata nella loro preparazione, non garantiamo l’esattezza, la completezza o l’attualità dei contenuti.',
        ],
        todo: 'DA COMPLETARE: Sostituire con un testo di esclusione della responsabilità approvato sotto il profilo legale.',
      },
      {
        heading: 'Risoluzione delle controversie',
        todo: 'DA CONFERMARE: Verificare se è necessaria un’informativa sulla risoluzione online delle controversie.',
      },
    ],
    lastUpdated: 'Ultimo aggiornamento: Da completare — inserire la data dopo l’approvazione delle note legali.',
  },

  privacy: {
    banners: [
      {
        type: 'status',
        label: 'TESTO PROVVISORIO — NON GIURIDICAMENTE VINCOLANTE',
        text: 'Questo contenuto è destinato esclusivamente alla fase di sviluppo. Nessun testo presente in questa pagina deve essere considerato un’informativa sulla privacy definitiva o vincolante. L’intero contenuto dovrà essere sostituito dopo la revisione legale.',
      },
      {
        type: 'mono',
        text: 'DA COMPLETARE: Sostituire l’intera pagina con un’informativa sulla privacy approvata da un consulente legale. Il testo provvisorio non è vincolante.',
      },
    ],
    sections: [
      {
        heading: '1. Titolare del trattamento',
        paragraphs: ['[Nome del soggetto giuridico]<br>[Sede legale]<br>[Indirizzo e-mail di contatto]'],
        todo: 'DA CONFERMARE: Verificare l’identità e i dati di contatto del titolare del trattamento.',
      },
      {
        heading: '2. Ambito di applicazione',
        paragraphs: [
          'La presente informativa descriverà come trattiamo i dati personali quando visitate questo sito web, inviate una richiesta, utilizzate Zuraio AI Hub o interagite con noi in altro modo.',
        ],
        todo: 'DA CONFERMARE: Definire i servizi interessati e le attività di trattamento dei dati.',
      },
      {
        heading: '3. Dati raccolti',
        paragraphs: ['Le categorie possono includere:'],
        list: [
          'Dati di contatto e identificazione (nome, indirizzo e-mail, azienda, ruolo)',
          'Dati relativi alle comunicazioni (richieste, corrispondenza con l’assistenza)',
          'Dati tecnici (indirizzo IP, tipo di browser, informazioni sul dispositivo)',
          'Dati di utilizzo (modalità di utilizzo del sito web o, se applicabile, del prodotto)',
          'Dati aziendali trattati tramite Zuraio AI Hub (oggetto di un accordo separato)',
        ],
        todo: 'DA CONFERMARE: Verificare con il consulente legale le categorie esatte di dati e le relative fonti.',
      },
      {
        heading: '4. Finalità e basi giuridiche',
        paragraphs: [
          'Le finalità del trattamento possono includere la risposta alle richieste, la fornitura del servizio, il miglioramento del prodotto, la sicurezza e l’adempimento degli obblighi legali.',
        ],
        todo: 'DA COMPLETARE: Specificare la base giuridica applicabile a ciascuna finalità (consenso, contratto, legittimo interesse, obbligo legale).',
      },
      {
        heading: '5. Condivisione dei dati e responsabili del trattamento',
        paragraphs: [
          'Possiamo condividere i dati con fornitori che ci assistono nella gestione del sito web e del prodotto, ad esempio per l’hosting, la posta elettronica, l’analisi e la fornitura di modelli di IA. Un elenco aggiornato dei sub-responsabili sarà pubblicato qui.',
        ],
        todo: 'DA COMPLETARE: Pubblicare l’elenco verificato dei sub-responsabili e i meccanismi applicabili ai trasferimenti dei dati.',
      },
      {
        heading: '6. Trasferimenti internazionali',
        paragraphs: [
          'Qualora i dati vengano trasferiti al di fuori della Svizzera o del SEE, saranno applicate garanzie adeguate.',
        ],
        todo: 'DA COMPLETARE: Specificare, dopo revisione legale, i meccanismi di trasferimento applicabili, come le clausole contrattuali standard o le decisioni di adeguatezza.',
      },
      {
        heading: '7. Conservazione',
        paragraphs: [
          'I dati personali saranno conservati soltanto per il tempo necessario alle finalità descritte o richiesto dalla legge.',
        ],
        todo: 'DA COMPLETARE: Specificare i periodi di conservazione per ciascuna categoria di dati.',
      },
      {
        heading: '8. I vostri diritti',
        paragraphs: [
          'In base alla normativa applicabile, potreste avere il diritto di accesso, rettifica, cancellazione, limitazione del trattamento, opposizione e portabilità dei dati. Potreste inoltre avere il diritto di presentare un reclamo a un’autorità di controllo.',
        ],
        todo: 'DA CONFERMARE: Verificare con il consulente legale i diritti applicabili e le procedure di reclamo.',
      },
      {
        heading: '9. Cookie e analisi',
        id: 'cookies',
        paragraphs: [
          'Questo sito web può utilizzare cookie essenziali e, con il consenso ove richiesto, cookie di analisi. Sarà messo a disposizione un sistema per la gestione delle preferenze relative ai cookie.',
        ],
        todo: 'DA COMPLETARE: Implementare il banner dei cookie e pubblicare l’inventario dei cookie.',
      },
      {
        heading: '10. Sicurezza',
        paragraphs: [
          'Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali. Le misure specifiche dipendono dal servizio e dal modello di implementazione.',
        ],
        todo: 'DA COMPLETARE: Aggiungere una descrizione verificata delle misure di sicurezza, senza formulazioni eccessive.',
      },
      {
        heading: '11. Modifiche alla presente informativa',
        paragraphs: [
          'La presente informativa potrà essere aggiornata periodicamente. La versione in vigore sarà pubblicata su questa pagina con la data aggiornata.',
        ],
        todo: 'Ultimo aggiornamento: Da completare — inserire la data dopo l’approvazione dell’informativa.',
      },
      {
        heading: '12. Contatti',
        paragraphs: [
          'Per domande relative alla protezione dei dati: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'DA CONFERMARE: Verificare l’indirizzo di contatto per la protezione dei dati e stabilire se sia necessaria la nomina di un responsabile della protezione dei dati.',
      },
    ],
  },

  terms: {
    banners: [
      {
        type: 'status',
        label: 'TESTO PROVVISORIO — NON GIURIDICAMENTE VINCOLANTE',
        text: 'Questo contenuto è destinato esclusivamente alla fase di sviluppo. Nessun testo presente in questa pagina deve essere considerato contrattuale, vincolante o definitivo. L’intero contenuto dovrà essere sostituito dopo la revisione legale.',
      },
    ],
    sections: [
      {
        heading: '1. Ambito di applicazione',
        paragraphs: [
          'Le presenti condizioni disciplineranno l’utilizzo del sito web di Zuraio e dei relativi materiali di marketing.',
        ],
        todo: 'DA CONFERMARE: È necessaria una revisione legale — definire l’ambito di applicazione e i servizi inclusi ed esclusi.',
      },
      {
        heading: '2. Utilizzo del sito web',
        paragraphs: [
          'Gli utilizzi consentiti, i comportamenti vietati e le regole di utilizzo accettabile saranno definiti qui.',
        ],
        todo: 'DA COMPLETARE: Inserire le condizioni d’uso approvate per il sito web.',
      },
      {
        heading: '3. Proprietà intellettuale',
        paragraphs: [
          'La proprietà dei contenuti del sito web e dei marchi, nonché le condizioni per il loro riutilizzo, saranno definite qui.',
        ],
        todo: 'DA CONFERMARE: Verificare le dichiarazioni relative alla proprietà intellettuale e alle licenze.',
      },
      {
        heading: '4. Avvertenze',
        paragraphs: [
          'Le descrizioni dei prodotti, le dimostrazioni e le sintesi tecniche presenti su questo sito web sono fornite esclusivamente a scopo informativo, salvo che siano oggetto di un accordo separato.',
        ],
        todo: 'DA CONFERMARE: Sottoporre a revisione legale le avvertenze relative al marketing e ai prodotti.',
      },
      {
        heading: '5. Limitazione di responsabilità',
        paragraphs: [
          'Le limitazioni di responsabilità applicabili all’utilizzo del sito web saranno definite qui.',
        ],
        todo: 'DA COMPLETARE: Inserire una clausola di limitazione della responsabilità approvata da un consulente legale.',
      },
      {
        heading: '6. Legge applicabile',
        paragraphs: ['La legge applicabile e il foro competente saranno specificati qui.'],
        todo: 'DA CONFERMARE: Verificare la legge applicabile e il foro competente con il consulente legale.',
      },
      {
        heading: '7. Contatti',
        paragraphs: [
          'Per domande relative alle presenti condizioni: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'DA CONFERMARE: Verificare l’indirizzo di contatto dopo l’approvazione delle condizioni.',
      },
    ],
  },

  cookies: {
    banners: [
      {
        type: 'status',
        label: 'TESTO PROVVISORIO — NESSUN BANNER DEI COOKIE ATTIVO',
        text: 'Questo contenuto è destinato esclusivamente alla fase di sviluppo. Nessun gestore del consenso ai cookie è ancora collegato all’ambiente di produzione. Le categorie e le opzioni riportate di seguito sono puramente illustrative fino al completamento della revisione legale e tecnica.',
      },
    ],
    sections: [
      {
        heading: '1. Che cosa sono i cookie?',
        paragraphs: [
          'I cookie e tecnologie simili possono essere utilizzati per garantire il funzionamento del sito web, memorizzare le preferenze, misurare l’utilizzo o supportare servizi integrati.',
        ],
        todo: 'DA COMPLETARE: Elencare le tecnologie effettivamente utilizzate dopo l’audit.',
      },
      {
        heading: '2. Categorie di cookie',
        paragraphs: ['Le seguenti categorie sono provvisorie fino al completamento di un audit dei cookie:'],
        list: [
          { strong: 'Strettamente necessari', text: ' — indispensabili per il funzionamento di base del sito' },
          { strong: 'Preferenze', text: ' — scelte relative alla lingua o all’interfaccia' },
          { strong: 'Analisi', text: ' — misurazione aggregata dell’utilizzo' },
          { strong: 'Marketing', text: ' — soltanto se espressamente approvato e implementato' },
        ],
        todo: 'DA COMPLETARE: Elencare le categorie di cookie e i fornitori effettivamente utilizzati.',
      },
      {
        heading: '3. Le vostre scelte',
        paragraphs: [
          'Un centro per la gestione delle preferenze consentirà ai visitatori di accettare o rifiutare i cookie non essenziali ove previsto dalla legge.',
        ],
        todoBlock:
          'DA COMPLETARE: Integrare un gestore del consenso approvato. Non mostrare un’azione fittizia «Salva preferenze» finché non sarà collegato uno strumento reale.',
      },
      {
        heading: '4. Ulteriori informazioni',
        paragraphs: [
          'Per maggiori informazioni sul trattamento dei dati, consultate anche la nostra <a href="privacy.html">informativa provvisoria sulla privacy</a>.',
        ],
        todo: 'DA COMPLETARE: Inserire il collegamento all’informativa definitiva sulla privacy dopo la sua approvazione.',
      },
      {
        heading: '5. Contatti',
        paragraphs: [
          'Per domande relative ai cookie e alla protezione dei dati: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'DA CONFERMARE: Verificare l’indirizzo di contatto.',
      },
    ],
  },
};
