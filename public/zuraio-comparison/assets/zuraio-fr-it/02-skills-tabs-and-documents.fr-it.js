// PART A: add to skillsTabsMeta in copy-alt-home-skills-tabs.js (same keys as `en`).

  fr: {
    tablistLabel: 'Choisir votre secteur',
    legendHeading: 'Ce qui vous est propre',
    docCaption: 'Exemple avec des données fictives',
    workshopLine: 'Prêt à l’emploi au départ. Configuré avec votre équipe lors d’un atelier.',
    tabs: [
      { id: 'architecture', label: 'Architecture et ingénierie', hash: 'skills-architecture' },
      { id: 'fiduciary', label: 'Fiduciaire', hash: 'skills-fiduciary' },
      { id: 'property', label: 'Gérance immobilière', hash: 'skills-property' },
    ],
    panels: {
      architecture: {
        title: 'Une offre dans votre format maison',
        body:
          'Zuraio rédige l’offre à partir de la demande, avec votre structure d’honoraires, vos règles de rabais et vos conditions. Vous la vérifiez et l’envoyez.',
        usesLabel: 'Utilise :',
        sources: ['Demande', 'Liste de prix', 'bexio'],
        badge: 'Brouillon',
        highlights: [
          { n: 1, label: 'Votre format maison' },
          { n: 2, label: 'Votre règle de rabais' },
          { n: 3, label: 'Vos conditions standard' },
        ],
      },
      fiduciary: {
        title: 'Le rapport mensuel client, tel que vos associés l’aiment',
        body:
          'Les chiffres d’Abacus et les points ouverts de vos e-mails, dans la structure qu’attendent vos associés.',
        usesLabel: 'Utilise :',
        sources: ['Abacus', 'E-mails', 'Dernier rapport'],
        badge: 'Brouillon',
        highlights: [
          { n: 1, label: 'La structure de vos associés' },
          { n: 2, label: 'Tiré d’Abacus' },
          { n: 3, label: 'Votre formulation' },
        ],
      },
      property: {
        title: 'Des réponses aux locataires dans votre ton',
        body:
          'Des réponses tirées du message du locataire, du règlement de maison et de vos clauses standard. Rien ne part sans votre feu vert.',
        usesLabel: 'Utilise :',
        sources: ['E-mail du locataire', 'Règlement de maison', 'Vos modèles'],
        badge: 'Brouillon · non envoyé',
        highlights: [
          { n: 1, label: 'Votre ton' },
          { n: 2, label: 'Votre clause standard' },
          { n: 3, label: 'Attend votre feu vert' },
        ],
      },
    },
  },

  it: {
    tablistLabel: 'Scegliete il vostro settore',
    legendHeading: 'Ciò che è vostro',
    docCaption: 'Esempio con dati inventati',
    workshopLine: 'Pronte per iniziare. Configurate con il vostro team in un workshop.',
    tabs: [
      { id: 'architecture', label: 'Architettura e ingegneria', hash: 'skills-architecture' },
      { id: 'fiduciary', label: 'Fiduciaria', hash: 'skills-fiduciary' },
      { id: 'property', label: 'Amministrazione immobiliare', hash: 'skills-property' },
    ],
    panels: {
      architecture: {
        title: 'Offerta nel vostro formato aziendale',
        body:
          'Zuraio prepara l’offerta partendo dalla richiesta, con la vostra struttura degli onorari, le vostre regole di sconto e le vostre condizioni. Voi la verificate e la inviate.',
        usesLabel: 'Usa:',
        sources: ['Richiesta', 'Listino prezzi', 'bexio'],
        badge: 'Bozza',
        highlights: [
          { n: 1, label: 'Il vostro formato aziendale' },
          { n: 2, label: 'La vostra regola di sconto' },
          { n: 3, label: 'Le vostre condizioni standard' },
        ],
      },
      fiduciary: {
        title: 'Il rapporto mensile per i clienti, come piace ai vostri soci',
        body:
          'Cifre da Abacus e punti aperti dalle vostre e-mail, nella struttura che i vostri soci si aspettano.',
        usesLabel: 'Usa:',
        sources: ['Abacus', 'E-mail', 'Ultimo rapporto'],
        badge: 'Bozza',
        highlights: [
          { n: 1, label: 'La struttura dei vostri soci' },
          { n: 2, label: 'Da Abacus' },
          { n: 3, label: 'La vostra formulazione' },
        ],
      },
      property: {
        title: 'Risposte agli inquilini con il vostro tono',
        body:
          'Risposte dal messaggio dell’inquilino, dal regolamento della casa e dalle vostre clausole standard. Nulla parte senza il vostro via libera.',
        usesLabel: 'Usa:',
        sources: ['E-mail dell’inquilino', 'Regolamento della casa', 'I vostri modelli'],
        badge: 'Bozza · non inviata',
        highlights: [
          { n: 1, label: 'Il vostro tono' },
          { n: 2, label: 'La vostra clausola standard' },
          { n: 3, label: 'Attende il vostro via libera' },
        ],
      },
    },
  },


// PART B: the three invented documents rendered in alt-skills-sector.js.
// Add fr/it branches that mirror the EN/DE templates exactly (same markup, same highlight numbers).
// [hlN] marks the text inside highlight N. Swiss number format with apostrophe in both languages.

/* ---------- FR · Architecture: quote ---------- */
// Letterhead: [hl1] Muster Architectes SA · Winterthour
// Title: Offre 2026-041
// Subtitle: Transformation d’une maison individuelle, Winterthour
// To: Famille Brunner
// Table header: Phase (SIA 102) | Honoraires
// 31 Avant-projet | CHF 8'400
// 32 Projet de l’ouvrage | CHF 12'600
// 33 Procédure de demande d’autorisation | CHF 4'200
// 41 Appel d’offres | CHF 6'300
// Sous-total | CHF 31'500
// [hl2] Rabais clients fidèles (5 %) | CHF 1'575
// Total hors TVA | CHF 29'925
// [hl3] Payable à 30 jours. Nos conditions générales s’appliquent.
// Badge: Brouillon

/* ---------- IT · Architecture: quote ---------- */
// Letterhead: [hl1] Muster Architetti SA · Winterthur
// Title: Offerta 2026-041
// Subtitle: Ristrutturazione di una casa unifamiliare, Winterthur
// To: Famiglia Brunner
// Table header: Fase (SIA 102) | Onorario
// 31 Progetto di massima | CHF 8'400
// 32 Progetto definitivo | CHF 12'600
// 33 Procedura di autorizzazione | CHF 4'200
// 41 Appalto | CHF 6'300
// Subtotale | CHF 31'500
// [hl2] Sconto clienti abituali (5 %) | CHF 1'575
// Totale IVA esclusa | CHF 29'925
// [hl3] Pagabile entro 30 giorni. Valgono le nostre condizioni generali.
// Badge: Bozza

/* ---------- FR · Fiduciary: monthly report ---------- */
// Title: Rapport mensuel septembre 2026
// Subtitle: Muster SA · pour la séance du conseil d’administration du 14 octobre
// [hl1] En bref
// Figures: Chiffre d’affaires | CHF 184'200 | +6 % par rapport à août
//          [hl2 on this block] Factures ouvertes | CHF 42'750 | 3 en retard
//          Liquidités | 2,4 mois | des frais fixes
// À discuter
// [hl3] Exemple Sàrl a 45 jours de retard (CHF 18'300). Nous proposons un rappel cette semaine.
// Décompte TVA du 3e trimestre dû le 30 novembre.
// Bouclement annuel : documents d’ici au 31 janvier.
// Badge: Brouillon

/* ---------- IT · Fiduciary: monthly report ---------- */
// Title: Rapporto mensile settembre 2026
// Subtitle: Muster SA · per la seduta del consiglio d’amministrazione del 14 ottobre
// [hl1] In sintesi
// Figures: Fatturato | CHF 184'200 | +6 % rispetto ad agosto
//          [hl2 on this block] Fatture aperte | CHF 42'750 | 3 scadute
//          Liquidità | 2,4 mesi | dei costi fissi
// Da discutere
// [hl3] Esempio Sagl è in ritardo di 45 giorni (CHF 18'300). Suggeriamo un sollecito questa settimana.
// Rendiconto IVA del 3° trimestre in scadenza il 30 novembre.
// Chiusura annuale: documenti entro il 31 gennaio.
// Badge: Bozza

/* ---------- FR · Property: email draft ---------- */
// À: Mme Baumann | Objet: RE: Machine à laver de la buanderie
// Bonjour Madame Baumann,
// [hl1] Merci de nous avoir prévenus. Notre partenaire de service contrôlera la machine à laver le jeudi 8 octobre, entre 8 h et 10 h. D’ici là, vous pouvez volontiers utiliser la machine de la maison B.
//   (highlight only the first sentence "Merci de nous avoir prévenus.")
// [hl2] Conformément au règlement de maison (ch. 5), nous vous prions de ne pas utiliser la machine avant son contrôle.
// Meilleures salutations
// Muster Gérances SA
// Badge: [hl3] Brouillon · non envoyé

/* ---------- IT · Property: email draft ---------- */
// A: Signora Baumann | Oggetto: R: Lavatrice nella lavanderia
// Gentile signora Baumann,
// [hl1] Grazie per la segnalazione. Il nostro partner di servizio controllerà la lavatrice giovedì 8 ottobre, tra le 8 e le 10. Nel frattempo può usare la lavatrice della casa B.
//   (highlight only the first sentence "Grazie per la segnalazione.")
// [hl2] Secondo il regolamento della casa (cifra 5), la preghiamo di non usare la lavatrice fino al controllo.
// Cordiali saluti
// Muster Amministrazioni SA
// Badge: [hl3] Bozza · non inviata
