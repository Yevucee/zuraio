/** Security page copy (EN + DE). Source: docs/zuraio-site-rewrite.md §2 */

export const SECURITY_LOCALES = ['de', 'en', 'fr', 'it'];

export const copySecurity = {
  de: {
    metaTitle: 'Sicherheit und Datenkontrolle | Zuraio',
    nav: {
      howItWorks: 'So hilft Zuraio',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: '30-Minuten-Demo buchen',
    },
    hero: {
      eyebrow: 'SICHERHEIT UND DATENKONTROLLE',
      headingLines: ['Ihre Daten bleiben Ihre.', 'Sie entscheiden, wohin sie gehen.'],
      sub: 'Gehostet bei Infomaniak in der Schweiz. Der Zugriff folgt Ihren bestehenden Berechtigungen, und nichts wird ohne Ihr OK versendet.',
      trust: [
        'Gehostet bei Infomaniak in der Schweiz',
        'ISO 27001:2022',
        'Ihre Daten werden nie zum Trainieren von KI-Modellen verwendet',
      ],
    },
    promises: {
      heading: 'Worauf Sie sich verlassen können.',
      cards: [
        {
          title: 'Ihre Daten bleiben Ihre',
          body: 'Ihre Dokumente, E-Mails und Ihr Wissen bleiben Ihr Eigentum. Wir erheben keinen Anspruch darauf.',
        },
        {
          title: 'Standardmässig Schweiz',
          body: 'Zuraio läuft in der Schweiz. Andere KI-Modelle sind gekennzeichnet, und nur der Inhalt dieser Aufgabe geht dorthin, wenn Sie es wählen.',
        },
        {
          title: 'Zugriff nach Ihren Regeln',
          body: 'Zuraio nutzt Ihre bestehenden Microsoft- oder Google-Benutzer und -Gruppen. Mitarbeitende sehen nur, was sie heute schon sehen dürfen.',
        },
        {
          title: 'Nichts geht ohne Ihr OK hinaus',
          body: 'Zuraio bereitet Antworten und Änderungen als Entwurf vor. Eine Person prüft und versendet.',
        },
        {
          title: 'Klar nachvollziehbar',
          body: 'Wer gefragt hat, welche Quellen genutzt wurden und wer das Ergebnis freigegeben hat.',
        },
      ],
    },
    models: {
      eyebrow: 'KI-MODELLE',
      heading: 'Nie an einen einzigen KI-Anbieter gebunden.',
      body: 'Zuraio wählt für jede Aufgabe ein passendes Modell: standardmässig in der Schweiz gehostet, andere nur, wenn Sie es zulassen. Ändert ein Anbieter Preise, Bedingungen oder Verfügbarkeit, wechseln Sie das Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen.',
      cards: [
        {
          title: 'Schweizer Standard.',
          body: 'Alltägliche Aufgaben laufen auf einem Modell mit Schweizer Hosting.',
        },
        {
          title: 'Ihre Regeln.',
          body: 'Sie legen fest, welche Daten an welches Modell dürfen, oder schalten externe Modelle ganz ab.',
        },
        {
          title: 'Klar gekennzeichnet.',
          body: 'Jedes Modell zeigt vor der Nutzung, wo es läuft.',
        },
      ],
    },
    hosting: {
      heading: 'In der Schweiz gehostet, oder noch näher.',
      intro:
        'Die meisten Betriebe nutzen unser Schweizer Hosting. Haben Sie strengere Anforderungen, planen wir die Lösung mit Ihrem IT-Partner.',
      options: [
        {
          title: 'Schweizer Hosting',
          body: 'Von uns bei Infomaniak in der Schweiz betrieben. Am wenigsten Aufwand für Ihre IT.',
          tag: 'Standard',
          tagKind: 'standard',
        },
        {
          title: 'Hybrid',
          body: 'Sensibles Wissen bleibt auf Ihren eigenen Systemen, der Rest läuft im Schweizer Hosting.',
          tag: 'Auf Anfrage',
          tagKind: 'request',
        },
        {
          title: 'Auf eigenen Servern',
          body: 'Ausgewählte Teile von Zuraio laufen in Ihrer Infrastruktur oder Private Cloud.',
          tag: 'Auf Anfrage',
          tagKind: 'request',
        },
      ],
    },
    finePrint:
      'KI kann Fehler machen. Prüfen Sie wichtige Angaben anhand der Quelle, bevor Sie sie verwenden. Zuraio unterstützt fachliches Urteil, ersetzt aber keine rechtliche, finanzielle oder andere Fachberatung. Vertragsdetails, Unterauftragsbearbeiter und Datenflüsse werden für jeden Kunden dokumentiert.',
    cta: {
      heading: 'Sie arbeiten mit einem IT-Partner?',
      body: 'Wir beziehen ihn ab dem ersten Gespräch ein. Die technischen Details findet er hier.',
      itLink: 'Für Ihren IT-Partner →',
      itHref: 'technical-architecture.html',
      demo: '30-Minuten-Demo buchen',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange und Dynamics 365 sind Marken der Microsoft-Unternehmensgruppe. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo und Sage sind Marken ihrer jeweiligen Inhaber.',
  },
  en: {
    metaTitle: 'Security and data control | Zuraio',
    nav: {
      howItWorks: 'How it helps',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a 30-minute demo',
    },
    hero: {
      eyebrow: 'SECURITY AND DATA CONTROL',
      headingLines: ['Your data stays yours.', 'You decide where it goes.'],
      sub: 'Hosted by Infomaniak in Switzerland. Access follows your existing permissions, and nothing is sent without your OK.',
      trust: [
        'Hosted by Infomaniak in Switzerland',
        'ISO 27001:2022',
        'Your data is never used to train AI models',
      ],
    },
    promises: {
      heading: 'What you can rely on.',
      cards: [
        {
          title: 'Your data stays yours',
          body: 'Your documents, emails and knowledge remain your property. We make no claim to them.',
        },
        {
          title: 'Swiss by default',
          body: 'Zuraio runs in Switzerland. Other AI models are labelled, and only that task\'s content goes to them, when you choose.',
        },
        {
          title: 'Access follows your rules',
          body: 'Zuraio uses your existing Microsoft or Google users and groups. People only see what they\'re already allowed to see.',
        },
        {
          title: 'Nothing goes out without your OK',
          body: 'Zuraio prepares replies and changes as drafts. A person checks and sends.',
        },
        {
          title: 'A clear record',
          body: 'Who asked, which sources were used and who approved the result.',
        },
      ],
    },
    models: {
      eyebrow: 'AI MODELS',
      heading: 'Never locked into a single AI provider.',
      body: 'Zuraio chooses a suitable model for each task: Swiss-hosted by default, others only when you allow them. If a provider changes its prices, terms or availability, you switch models. Your data and your skills stay with you.',
      cards: [
        {
          title: 'Swiss default.',
          body: 'Everyday tasks run on a Swiss-hosted model.',
        },
        {
          title: 'Your rules.',
          body: 'You decide which data may go to which model, or switch external models off completely.',
        },
        {
          title: 'Clearly labelled.',
          body: 'Every model shows where it runs before you use it.',
        },
      ],
    },
    hosting: {
      heading: 'Hosted in Switzerland, or closer still.',
      intro:
        'Most companies use our Swiss hosting. If you have stricter requirements, we design the set-up with your IT partner.',
      options: [
        {
          title: 'Swiss hosting',
          body: 'Run by us at Infomaniak in Switzerland. The least effort for your IT.',
          tag: 'Standard',
          tagKind: 'standard',
        },
        {
          title: 'Hybrid',
          body: 'Sensitive knowledge stays on your own systems; the rest runs in Swiss hosting.',
          tag: 'On request',
          tagKind: 'request',
        },
        {
          title: 'On your own servers',
          body: 'Selected parts of Zuraio run in your infrastructure or private cloud.',
          tag: 'On request',
          tagKind: 'request',
        },
      ],
    },
    finePrint:
      'AI can make mistakes. Check important information against the source before you use it. Zuraio supports professional judgement; it doesn\'t replace legal, financial or other expert advice. Contract details, sub-processors and data flows are documented for each customer.',
    cta: {
      heading: 'Working with an IT partner?',
      body: 'We involve them from the first call. They\'ll find the technical details here.',
      itLink: 'For your IT partner →',
      itHref: 'technical-architecture.html',
      demo: 'Book a 30-minute demo',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange and Dynamics 365 are trademarks of the Microsoft group of companies. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo and Sage are trademarks of their respective owners.',
  },
  fr: {
    metaTitle: 'Sécurité et contrôle des données | Zuraio',
    nav: {
      howItWorks: 'Comment Zuraio aide',
      skills: 'Skills',
      security: 'Sécurité',
      about: 'À propos',
      bookDemo: 'Réserver une démo de 30 minutes',
    },
    hero: {
      eyebrow: 'SÉCURITÉ ET CONTRÔLE DES DONNÉES',
      headingLines: ['Vos données restent les vôtres.', 'Vous décidez où elles vont.'],
      sub: 'Hébergé par Infomaniak en Suisse. L’accès suit vos autorisations existantes, et rien n’est envoyé sans votre feu vert.',
      trust: [
        'Hébergé par Infomaniak en Suisse',
        'ISO 27001:2022',
        'Vos données ne servent jamais à entraîner des modèles d’IA',
      ],
    },
    promises: {
      heading: 'Ce sur quoi vous pouvez compter.',
      cards: [
        {
          title: 'Vos données restent les vôtres',
          body: 'Vos documents, e-mails et connaissances restent votre propriété. Nous n’y prétendons aucun droit.',
        },
        {
          title: 'Suisse par défaut',
          body: 'Zuraio fonctionne en Suisse. Les autres modèles d’IA sont signalés, et seul le contenu de la tâche concernée leur est transmis, si vous le choisissez.',
        },
        {
          title: 'L’accès suit vos règles',
          body: 'Zuraio utilise vos utilisateurs et groupes Microsoft ou Google existants. Chacun ne voit que ce qu’il a déjà le droit de voir.',
        },
        {
          title: 'Rien ne part sans votre feu vert',
          body: 'Zuraio prépare réponses et modifications sous forme de brouillons. Une personne vérifie et envoie.',
        },
        {
          title: 'Une traçabilité claire',
          body: 'Qui a posé la question, quelles sources ont été utilisées et qui a validé le résultat.',
        },
      ],
    },
    models: {
      eyebrow: 'MODÈLES D’IA',
      heading: 'Jamais dépendant d’un seul fournisseur d’IA.',
      body: 'Zuraio choisit un modèle adapté à chaque tâche : hébergé en Suisse par défaut, d’autres seulement si vous les autorisez. Si un fournisseur modifie ses prix, ses conditions ou sa disponibilité, vous changez de modèle. Vos données et vos skills restent chez vous.',
      cards: [
        {
          title: 'Suisse par défaut.',
          body: 'Les tâches courantes s’exécutent sur un modèle hébergé en Suisse.',
        },
        {
          title: 'Vos règles.',
          body: 'Vous décidez quelles données peuvent aller vers quel modèle, ou vous désactivez complètement les modèles externes.',
        },
        {
          title: 'Clairement signalés.',
          body: 'Chaque modèle indique où il fonctionne avant que vous l’utilisiez.',
        },
      ],
    },
    hosting: {
      heading: 'Hébergé en Suisse, ou encore plus près.',
      intro:
        'La plupart des entreprises utilisent notre hébergement suisse. Si vos exigences sont plus strictes, nous concevons la solution avec votre partenaire informatique.',
      options: [
        {
          title: 'Hébergement suisse',
          body: 'Exploité par nous chez Infomaniak en Suisse. Le moins d’effort pour votre informatique.',
          tag: 'Standard',
          tagKind: 'standard',
        },
        {
          title: 'Hybride',
          body: 'Les connaissances sensibles restent sur vos propres systèmes; le reste fonctionne dans l’hébergement suisse.',
          tag: 'Sur demande',
          tagKind: 'request',
        },
        {
          title: 'Sur vos propres serveurs',
          body: 'Certaines parties de Zuraio fonctionnent dans votre infrastructure ou votre cloud privé.',
          tag: 'Sur demande',
          tagKind: 'request',
        },
      ],
    },
    finePrint:
      'L’IA peut se tromper. Vérifiez les informations importantes à la source avant de les utiliser. Zuraio soutient le jugement professionnel; il ne remplace pas un conseil juridique, financier ou d’expert. Les détails contractuels, les sous-traitants et les flux de données sont documentés pour chaque client.',
    cta: {
      heading: 'Vous travaillez avec un partenaire informatique?',
      body: 'Nous l’impliquons dès le premier entretien. Il trouvera ici les détails techniques.',
      itLink: 'Pour votre partenaire informatique →',
      itHref: 'technical-architecture.html',
      demo: 'Réserver une démo de 30 minutes',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange et Dynamics 365 sont des marques du groupe Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo et Sage sont des marques de leurs propriétaires respectifs.',
  },
  it: {
    metaTitle: 'Sicurezza e controllo dei dati | Zuraio',
    nav: {
      howItWorks: 'Come aiuta Zuraio',
      skills: 'Skill',
      security: 'Sicurezza',
      about: 'Chi siamo',
      bookDemo: 'Prenotare una demo di 30 minuti',
    },
    hero: {
      eyebrow: 'SICUREZZA E CONTROLLO DEI DATI',
      headingLines: ['I vostri dati restano vostri.', 'Decidete voi dove vanno.'],
      sub: 'Hosting presso Infomaniak in Svizzera. L’accesso segue le vostre autorizzazioni esistenti, e nulla viene inviato senza il vostro via libera.',
      trust: [
        'Hosting presso Infomaniak in Svizzera',
        'ISO 27001:2022',
        'I vostri dati non vengono mai usati per addestrare modelli di IA',
      ],
    },
    promises: {
      heading: 'Su cosa potete contare.',
      cards: [
        {
          title: 'I vostri dati restano vostri',
          body: 'I vostri documenti, e-mail e conoscenze restano di vostra proprietà. Non rivendichiamo alcun diritto su di essi.',
        },
        {
          title: 'Svizzera per impostazione predefinita',
          body: 'Zuraio funziona in Svizzera. Gli altri modelli di IA sono contrassegnati, e ricevono solo il contenuto del compito in questione, se lo scegliete voi.',
        },
        {
          title: 'L’accesso segue le vostre regole',
          body: 'Zuraio usa i vostri utenti e gruppi Microsoft o Google esistenti. Ognuno vede solo ciò che ha già il permesso di vedere.',
        },
        {
          title: 'Nulla parte senza il vostro via libera',
          body: 'Zuraio prepara risposte e modifiche come bozze. Una persona controlla e invia.',
        },
        {
          title: 'Una tracciabilità chiara',
          body: 'Chi ha chiesto, quali fonti sono state usate e chi ha approvato il risultato.',
        },
      ],
    },
    models: {
      eyebrow: 'MODELLI DI IA',
      heading: 'Mai vincolati a un solo fornitore di IA.',
      body: 'Zuraio sceglie un modello adatto a ogni compito: con hosting in Svizzera per impostazione predefinita, altri solo se li autorizzate. Se un fornitore cambia prezzi, condizioni o disponibilità, cambiate modello. I vostri dati e le vostre skill restano da voi.',
      cards: [
        {
          title: 'Svizzera di base.',
          body: 'I compiti quotidiani girano su un modello con hosting in Svizzera.',
        },
        {
          title: 'Le vostre regole.',
          body: 'Decidete voi quali dati possono andare a quale modello, oppure disattivate del tutto i modelli esterni.',
        },
        {
          title: 'Chiaramente contrassegnati.',
          body: 'Ogni modello mostra dove funziona prima che lo usiate.',
        },
      ],
    },
    hosting: {
      heading: 'Hosting in Svizzera, o ancora più vicino.',
      intro:
        'La maggior parte delle aziende usa il nostro hosting svizzero. Se avete requisiti più severi, progettiamo la soluzione con il vostro partner informatico.',
      options: [
        {
          title: 'Hosting svizzero',
          body: 'Gestito da noi presso Infomaniak in Svizzera. Il minimo sforzo per la vostra informatica.',
          tag: 'Standard',
          tagKind: 'standard',
        },
        {
          title: 'Ibrido',
          body: 'Le conoscenze sensibili restano sui vostri sistemi; il resto funziona nell’hosting svizzero.',
          tag: 'Su richiesta',
          tagKind: 'request',
        },
        {
          title: 'Sui vostri server',
          body: 'Alcune parti di Zuraio funzionano nella vostra infrastruttura o nel vostro cloud privato.',
          tag: 'Su richiesta',
          tagKind: 'request',
        },
      ],
    },
    finePrint:
      'L’IA può sbagliare. Verificate le informazioni importanti alla fonte prima di usarle. Zuraio sostiene il giudizio professionale; non sostituisce una consulenza legale, finanziaria o specialistica. Dettagli contrattuali, subfornitori e flussi di dati sono documentati per ogni cliente.',
    cta: {
      heading: 'Lavorate con un partner informatico?',
      body: 'Lo coinvolgiamo fin dal primo colloquio. Qui trova i dettagli tecnici.',
      itLink: 'Per il vostro partner informatico →',
      itHref: 'technical-architecture.html',
      demo: 'Prenotare una demo di 30 minuti',
    },
    footerTrademark:
      'Microsoft, Microsoft 365, Outlook, SharePoint, Teams, Exchange e Dynamics 365 sono marchi del gruppo Microsoft. bexio, Abacus, Klara, Proffix, SAP, Salesforce, HubSpot, Odoo e Sage sono marchi dei rispettivi titolari.',
  },

};

export function getSecurityCopy(locale) {
  return copySecurity[locale] ?? copySecurity.en;
}
