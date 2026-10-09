export const legalPages = {
  impressum: {
    sections: [
      {
        heading: 'Gestore di questo sito',
        type: 'dl',
        items: [
          { dt: 'Ragione sociale e forma giuridica', dd: 'Da confermare' },
          { dt: 'Indirizzo postale', dd: 'Da confermare' },
        ],
      },
      {
        heading: 'Contatto',
        type: 'dl',
        items: [{ dt: 'E-mail', dd: '', mailto: true }],
      },
      {
        heading: 'Registro di commercio',
        type: 'dl',
        items: [{ dt: 'Iscrizione e Cantone', dd: 'Da confermare' }],
      },
      {
        heading: 'Identificazione dell’impresa',
        type: 'dl',
        items: [{ dt: 'Numero d’identificazione delle imprese (IDI)', dd: 'Da confermare' }],
      },
      {
        heading: 'Imposta sul valore aggiunto',
        type: 'dl',
        items: [{ dt: 'Assoggettamento all’IVA e numero IVA', dd: 'Da confermare' }],
      },
      {
        heading: 'Contenuti e link esterni',
        paragraphs: [
          'Prepariamo con cura i contenuti di questo sito. Sono forniti a scopo informativo generale e possono essere modificati. I siti raggiungibili tramite link sono gestiti da terzi; ai loro contenuti si applicano le rispettive informazioni e condizioni.',
        ],
      },
      {
        heading: 'Diritti d’autore',
        paragraphs: [
          'I contenuti di questo sito sono protetti nella misura prevista dalla legge applicabile. Restano riservati i diritti di terzi. Per qualsiasi utilizzo che ecceda quanto consentito dalla legge è necessaria l’autorizzazione del relativo titolare dei diritti.',
        ],
      },
      {
        heading: 'Protezione dei dati',
        paragraphs: [
          'Il modo in cui trattiamo i dati personali è descritto nella nostra <a href="privacy.html">informativa sulla protezione dei dati</a>.',
        ],
      },
    ],
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
        paragraphs: ['—<br>—<br><a href=\"mailto:michael.wili@zuraio.ch\">michael.wili@zuraio.ch</a>'],
      },
      {
        heading: '2. Ambito di applicazione',
        paragraphs: [
          'La presente informativa descriverà come trattiamo i dati personali quando visitate questo sito web, inviate una richiesta, utilizzate Zuraio AI Hub o interagite con noi in altro modo.',
        ],
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
      },
      {
        heading: '4. Finalità e basi giuridiche',
        paragraphs: [
          'Le finalità del trattamento possono includere la risposta alle richieste, la fornitura del servizio, il miglioramento del prodotto, la sicurezza e l’adempimento degli obblighi legali.',
        ],
      },
      {
        heading: '5. Condivisione dei dati e responsabili del trattamento',
        paragraphs: [
          'Possiamo condividere i dati con fornitori che ci assistono nella gestione del sito web e del prodotto, ad esempio per l’hosting, la posta elettronica, l’analisi e la fornitura di modelli di IA. Un elenco aggiornato dei sub-responsabili sarà pubblicato qui.',
        ],
      },
      {
        heading: '6. Trasferimenti internazionali',
        paragraphs: [
          'Qualora i dati vengano trasferiti al di fuori della Svizzera o del SEE, saranno applicate garanzie adeguate.',
        ],
      },
      {
        heading: '7. Conservazione',
        paragraphs: [
          'I dati personali saranno conservati soltanto per il tempo necessario alle finalità descritte o richiesto dalla legge.',
        ],
      },
      {
        heading: '8. I vostri diritti',
        paragraphs: [
          'In base alla normativa applicabile, potreste avere il diritto di accesso, rettifica, cancellazione, limitazione del trattamento, opposizione e portabilità dei dati. Potreste inoltre avere il diritto di presentare un reclamo a un’autorità di controllo.',
        ],
      },
      {
        heading: '9. Cookie e analisi',
        id: 'cookies',
        paragraphs: [
          'Questo sito web può utilizzare cookie essenziali e, con il consenso ove richiesto, cookie di analisi. Sarà messo a disposizione un sistema per la gestione delle preferenze relative ai cookie.',
        ],
      },
      {
        heading: '10. Sicurezza',
        paragraphs: [
          'Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali. Le misure specifiche dipendono dal servizio e dal modello di implementazione.',
        ],
      },
      {
        heading: '11. Modifiche alla presente informativa',
        paragraphs: [
          'La presente informativa potrà essere aggiornata periodicamente. La versione in vigore sarà pubblicata su questa pagina con la data aggiornata.',
        ],
      },
      {
        heading: '12. Contatti',
        paragraphs: [
          'Per domande relative alla protezione dei dati: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
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
      },
      {
        heading: '2. Utilizzo del sito web',
        paragraphs: [
          'Gli utilizzi consentiti, i comportamenti vietati e le regole di utilizzo accettabile saranno definiti qui.',
        ],
      },
      {
        heading: '3. Proprietà intellettuale',
        paragraphs: [
          'La proprietà dei contenuti del sito web e dei marchi, nonché le condizioni per il loro riutilizzo, saranno definite qui.',
        ],
      },
      {
        heading: '4. Avvertenze',
        paragraphs: [
          'Le descrizioni dei prodotti, le dimostrazioni e le sintesi tecniche presenti su questo sito web sono fornite esclusivamente a scopo informativo, salvo che siano oggetto di un accordo separato.',
        ],
      },
      {
        heading: '5. Limitazione di responsabilità',
        paragraphs: [
          'Le limitazioni di responsabilità applicabili all’utilizzo del sito web saranno definite qui.',
        ],
      },
      {
        heading: '6. Legge applicabile',
        paragraphs: ['La legge applicabile e il foro competente saranno specificati qui.'],
      },
      {
        heading: '7. Contatti',
        paragraphs: [
          'Per domande relative alle presenti condizioni: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
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
      },
      {
        heading: '3. Le vostre scelte',
        paragraphs: [
          'Un centro per la gestione delle preferenze consentirà ai visitatori di accettare o rifiutare i cookie non essenziali ove previsto dalla legge.',
        ],
      },
      {
        heading: '4. Ulteriori informazioni',
        paragraphs: [
          'Per maggiori informazioni sul trattamento dei dati, consultate anche la nostra <a href="privacy.html">informativa provvisoria sulla privacy</a>.',
        ],
      },
      {
        heading: '5. Contatti',
        paragraphs: [
          'Per domande relative ai cookie e alla protezione dei dati: <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
      },
    ],
  },
};
