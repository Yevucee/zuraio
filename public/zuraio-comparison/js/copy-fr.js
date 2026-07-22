export const heroOptions = [
  {
    headline: 'Un assistant de direction numérique pour chaque collaborateur.',
    emphasis: 'assistant',
    paragraph:
      'Zuraio offre à chaque personne de votre entreprise un assistant intelligent capable de trouver des informations, répondre aux questions, préparer des documents et faciliter le travail au quotidien.',
    cta: 'Découvrez l\u2019assistant IA de votre entreprise',
    ctaHref: 'contact.html',
  },
  {
    headline: 'Donnez à chaque collaborateur la puissance d\u2019un assistant de direction.',
    emphasis: 'assistant de direction',
    paragraph:
      'Zuraio connecte les connaissances et les outils de votre entreprise, offrant à vos équipes un soutien immédiat pour la recherche, la rédaction, l\u2019analyse et les tâches quotidiennes.',
    cta: 'Découvrez le fonctionnement de Zuraio',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'Un assistant IA qui connaît votre entreprise.',
    emphasis: 'assistant IA',
    paragraph:
      'Zuraio comprend vos documents, réunions, e-mails et connaissances métier, afin que vos collaborateurs trouvent des réponses et accomplissent leur travail plus rapidement.',
    cta: 'Découvrez le Zuraio AI Hub',
    ctaHref: 'knowledge.html',
  },
  {
    headline: 'L\u2019espace de travail intelligent pour toute votre entreprise.',
    emphasis: 'espace de travail',
    paragraph:
      'Recherchez les connaissances de l\u2019entreprise, créez des documents, analysez des informations et accomplissez le travail quotidien via un AI Hub sécurisé.',
    cta: 'Découvrez ce qu\u2019il peut faire',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'Un assistant IA pour tous. Alimenté par votre entreprise.',
    emphasis: 'assistant IA',
    paragraph:
      'Zuraio transforme vos connaissances métier en un soutien sécurisé et concret pour chaque collaborateur.',
    cta: 'Explorer Zuraio',
    ctaHref: 'how-it-helps.html',
  },
];

export const problemOptions = [
  {
    heading: 'Laissez Zuraio rendre les connaissances de votre entreprise plus faciles à trouver et à utiliser.',
  },
  {
    heading: 'Laissez Zuraio retrouver vos informations et faire avancer le travail.',
  },
  {
    heading: 'Laissez Zuraio connecter vos connaissances et simplifier le travail.',
  },
  {
    heading: 'Laissez Zuraio aider vos collaborateurs à trouver des réponses et à accomplir leur travail.',
  },
  {
    heading: 'Laissez Zuraio rendre les connaissances de votre entreprise plus faciles à trouver, à comprendre et à utiliser.',
  },
];

export const trustSignals = [
  { label: 'Hébergé en Suisse', href: 'deployment-models.html' },
  { label: 'Sources affichées', href: 'knowledge.html' },
  { label: 'Connaissances d\u2019entreprise connectées', href: 'knowledge.html' },
  { label: 'Vous gardez le contrôle', href: 'data-control.html' },
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
  'Notes vocales',
];

export const nav = {
  main: [
    { label: 'Comment ça aide', href: 'how-it-helps.html' },
    { label: 'Connaissances', href: 'knowledge.html' },
    { label: 'Intégrations', href: 'integrations.html' },
    { label: 'Contrôle des données', href: 'data-control.html' },
  ],
  technical: [
    { label: 'Modèles de déploiement', href: 'deployment-models.html' },
    { label: 'Architecture technique', href: 'technical-architecture.html' },
    { label: 'Gouvernance IA', href: 'ai-governance.html' },
    { label: 'Ressources', href: 'resources.html' },
    { label: 'FAQ', href: 'faq.html' },
  ],
  about: { label: 'À propos', href: 'about.html' },
};

export const ui = {
  bookDemo: 'Réserver une démo',
  technical: 'Technique',
  previous: '← Précédent',
  next: 'Suivant →',
  optionOf: (n) => `Option ${n} sur 5`,
  optionLabel: (n) => `Option ${n}`,
  previousAria: 'Option hero précédente',
  nextAria: 'Option hero suivante',
  heroOptionsGroup: 'Options de message hero',
  trustAria: 'Signaux de confiance',
  langEn: 'EN',
  langDe: 'DE',
  langFr: 'FR',
  langIt: 'IT',
  languageLabel: 'Langue',
  languageContact: 'Langue / Contact',
  languageActive: 'actif',
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer le menu',
  zuraioHome: 'Accueil Zuraio',
};

export const home = {
  meta: {
    title: 'Zuraio — IA pour les entreprises suisses qui veulent garder le contrôle de leurs données',
  },
  problem: {
    marker: 'Vous reconnaissez cela ?',
    headingHtml: 'Vos collaborateurs passent trop de temps<br>à chercher des informations.',
    body: 'Les connaissances importantes sont dispersées entre e-mails, documents, réunions et systèmes métier. Les collaborateurs perdent du temps à chercher, préparer et refaire un travail déjà accompli.',
    cards: [
      { title: 'Les connaissances sont dispersées', body: 'Les informations importantes se trouvent dans les boîtes de réception, les fichiers, les réunions et les systèmes de l\u2019entreprise.' },
      { title: 'L\u2019administration prend le dessus', body: 'Les synthèses, rapports, préparations et relances détournent du temps consacré au travail à valeur ajoutée.' },
      { title: 'Les réponses manquent de contexte', body: 'Les décisions prennent plus de temps lorsque l\u2019on ne dispose pas de l\u2019historique complet ou de la source.' },
      { title: 'L\u2019IA publique crée de l\u2019incertitude', body: 'Des outils utiles deviennent risqués lorsque des connaissances sensibles de l\u2019entreprise sont utilisées sans règles claires.' },
    ],
    link: 'Voir les cas d\u2019usage concrets →',
    illustration: {
      labels: {
        whereIsIt: 'Où est-ce ?',
        whoKnows: 'Qui sait ?',
        latestVersion: 'Dernière version ?',
        alreadyDone: 'Déjà fait ?',
        whichDocument: 'Quel document ?',
        whoHasAccess: 'Qui a accès ?',
        wasUpdated: 'Est-ce à jour ?',
        whoHasContext: 'Qui a le contexte ?',
        howLong: 'Combien de temps ?',
        doneBefore: 'Quelqu\u2019un l\u2019a déjà fait ?',
      },
    },
  },
  different: {
    marker: 'Plus qu\u2019un chatbot',
    heading: 'Les connaissances de votre entreprise, au service de vos équipes.',
    headingEmphasis: 'connaissances de votre entreprise',
    body: 'Une IA générique ne connaît que ce qu\u2019on lui fournit manuellement. Zuraio se connecte de manière sécurisée aux connaissances approuvées de l\u2019entreprise, comprend le contexte de la personne qui pose la question et prépare un travail sourcé pour validation.',
    without: {
      title: 'Sans Zuraio',
      titleEmphasis: null,
      subtitle: 'Processus typique : jusqu\u2019à 20 minutes',
      timeLabel: '~20 min',
      progressCompleting: 'En cours...',
      progressCompleted: 'Terminé',
      steps: [
        {
          title: 'Interroger une IA générique',
          body: 'Démarrer une nouvelle conversation',
        },
        {
          title: 'Ajouter le contexte manuellement',
          body: 'Trouver et téléverser des fichiers ou expliquer la situation',
        },
        {
          title: 'Vérifier le résultat générique',
          body: 'Examiner et vérifier les informations',
        },
        {
          title: 'Affiner et redemander',
          body: 'Ajouter des détails et préciser',
        },
        {
          title: 'Vérifier et compiler',
          body: 'Recouper et rassembler les informations',
        },
        {
          title: 'Recommencer la prochaine fois',
          body: 'Repartir de zéro avec une nouvelle conversation',
        },
      ],
    },
    with: {
      title: 'Avec Zuraio',
      titleEmphasis: null,
      subtitle: 'Processus typique : moins d\u2019une minute',
      timeLabel: '<1 min',
      progressCompleting: 'En cours...',
      progressCompleted: 'Terminé.',
      steps: [
        {
          title: 'Interroger Zuraio',
          body: 'Posez votre question en langage naturel',
        },
        {
          title: 'Utilise les connaissances approuvées',
          body: 'Se connecte automatiquement à vos sources d\u2019entreprise',
        },
        {
          title: 'Crée un travail sourcé',
          body: 'Génère des réponses et des brouillons avec références',
        },
        {
          title: 'Examiner et agir',
          body: 'Vous examinez, vérifiez et agissez en toute confiance',
        },
      ],
    },
  },
  pillars: {
    heading: 'Tout ce dont votre assistant a besoin pour vous aider.',
    items: [
      { title: 'Connaissances', body: 'Zuraio travaille avec les e-mails, documents, contacts, notes de réunion et systèmes approuvés de l\u2019entreprise.', link: 'Explorer les connaissances →', href: 'knowledge.html' },
      { title: 'Connexions', body: 'Il s\u2019intègre aux outils que votre équipe utilise déjà, sans imposer de les remplacer.', link: 'Voir les connexions →', href: 'integrations.html' },
      { title: 'Sécurité', body: 'L\u2019hébergement, l\u2019accès, les sources et les règles de validation restent sous le contrôle de l\u2019entreprise.', link: 'En savoir plus sur le contrôle des données →', href: 'data-control.html' },
    ],
  },
  integrations: {
    heading: 'Fonctionne avec les outils que votre équipe utilise déjà.',
    body: 'Zuraio est conçu pour fonctionner aux côtés de votre e-mail, de vos documents, réunions, messages et systèmes métier existants.',
    clarify: 'Les connexions dépendent de la configuration de votre entreprise, des outils approuvés et du périmètre de déploiement.',
    link: 'Voir toutes les intégrations →',
  },
  demo: {
    heading: 'Voyez votre assistant à l\u2019œuvre.',
    headingEmphasis: 'œuvre',
    body: 'Zuraio rassemble le bon contexte d\u2019entreprise, prépare le travail et le restitue avec les sources pour votre validation.',
    disclaimer: 'Démonstration scénarisée — les fonctionnalités dépendent du déploiement et des autorisations convenus.',
    slides: [
      {
        id: 'mail',
        label: 'E-mail',
        heading: 'La réponse est déjà prête.',
        emphasis: 'réponse',
        body: 'Les longs fils de discussion peuvent être synthétisés et les réponses préparées à partir du contexte pertinent de l\u2019entreprise. Vous examinez, modifiez et décidez de ce qui est envoyé.',
        alt: 'Assistant e-mail Zuraio — message entrant avec brouillon de réponse et sources.',
      },
      {
        id: 'project-summary',
        label: 'Synthèse de projet',
        heading: 'La vue d\u2019ensemble, déjà assemblée.',
        body: 'Zuraio rassemble le contexte du projet à partir des e-mails, documents et notes, afin que votre équipe voie l\u2019état d\u2019avancement sans chercher.',
        alt: 'Synthèse de projet Zuraio — aperçu consolidé du projet avec détails clés et sources.',
      },
      {
        id: 'appointment-reply',
        label: 'Rendez-vous et réponse',
        heading: 'La planification, gérée avec le contexte.',
        body: 'Une demande client est associée aux disponibilités du calendrier, à l\u2019historique pertinent et à un brouillon de réponse prêt pour votre validation.',
        alt: 'Flux rendez-vous Zuraio — créneaux suggérés et brouillon de réponse préparés à partir du contexte d\u2019entreprise.',
      },
      {
        id: 'meeting-transcript',
        label: 'Transcription de réunion',
        heading: 'Chaque réunion, capturée et exploitable.',
        body: 'Les transcriptions sont synthétisées avec décisions, actions et relances, afin que rien ne repose sur la seule mémoire.',
        alt: 'Transcription de réunion Zuraio — discussion synthétisée avec actions et relances.',
      },
      {
        id: 'tasks',
        label: 'Tâches',
        heading: 'Rien ne passe entre les mailles.',
        body: 'Les actions sont extraites des e-mails, réunions et messages, afin que les relances soient visibles avant d\u2019être oubliées.',
        alt: 'Vue tâches Zuraio — actions ouvertes rassemblées à partir de l\u2019activité récente de l\u2019entreprise.',
      },
      {
        id: 'briefing',
        label: 'Briefing',
        heading: 'Arrivez préparé.',
        body: 'E-mails, notes, documents, décisions et actions ouvertes pertinents rassemblés avant de vous asseoir.',
        alt: 'Brief de réunion Zuraio — historique client, fichiers associés et points de discussion préparés.',
      },
    ],
  },
  outcomes: {
    heading: 'Moins d\u2019administration. Plus de travail à valeur ajoutée.',
    headingEmphasis: 'valeur',
    body: 'Zuraio aide les collaborateurs à consacrer moins de temps à chercher, synthétiser et préparer, afin qu\u2019ils puissent se concentrer sur les clients, les décisions et le travail pour lequel ils sont engagés.',
    cards: [
      { tag: 'Réunions', title: 'Arrivez préparé', body: 'Historique pertinent, décisions et actions ouvertes déjà préparés.' },
      { tag: 'E-mail', title: 'Brouillons de réponse prêts', body: 'Brouillons basés sur le fil complet et le contexte pertinent de l\u2019entreprise.' },
      { tag: 'Réponses', title: 'Interrogez avec preuves', body: 'Interrogez les connaissances approuvées et consultez les sources derrière la réponse.' },
      { tag: 'Rapports', title: 'Premiers brouillons, plus rapidement', body: 'Transformez les informations existantes en premiers brouillons structurés.' },
      { tag: 'Relances', title: 'Rien ne passe entre les mailles', body: 'Capturez les actions et prochaines étapes avant qu\u2019elles ne soient oubliées.' },
    ],
  },
  dataControl: {
    marker: 'Contrôle des données',
    heading: 'L\u2019IA, sans lui remettre les clés.',
    headingEmphasis: 'clés',
    body: 'Zuraio permet aux entreprises de contrôler où il s\u2019exécute, quelles informations il peut utiliser, qui y a accès et comment son travail est validé.',
    cards: [
      { title: 'Hébergé en Suisse', body: 'Une option hébergée en Suisse pour les entreprises qui souhaitent conserver leur environnement et leurs données d\u2019entreprise en Suisse.' },
      { title: 'L\u2019accès suit vos règles', body: 'Les collaborateurs ne travaillent qu\u2019avec les informations qu\u2019ils sont autorisés à utiliser.' },
      { title: 'Les réponses affichent leurs sources', body: 'Les utilisateurs peuvent vérifier d\u2019où proviennent les informations avant de s\u2019y fier.' },
      { title: 'Conçu pour être examiné', body: 'Les demandes, sources et résultats peuvent être plus facilement traçables selon la configuration convenue.' },
    ],
    note: '<b>Besoin d\u2019un contrôle renforcé ?</b> Des options on-premise et le choix du modèle peuvent être discutés pour les entreprises aux exigences internes plus strictes.',
    link: 'Explorer le contrôle des données et la sécurité →',
  },
  reviewable: {
    marker: 'Gouvernance IA',
    heading: 'Une IA que vous pourrez expliquer plus tard.',
    headingEmphasis: 'expliquer',
    bodyParagraphs: [
      'L\u2019utilisation de l\u2019IA devient plus facile à examiner. Clients, auditeurs et régulateurs attendront de plus en plus que les entreprises expliquent d\u2019où viennent les informations et comment l\u2019IA a été utilisée.',
      'Zuraio vous aide à rester prêt avec des réponses sourcées et une IA révisable.',
    ],
    steps: [
      { label: 'Ce qui a été demandé', title: 'La demande', body: 'Conservez une trace de l\u2019invite ou de la tâche.' },
      { label: 'Ce qui a été utilisé', title: 'Les sources', body: 'Voyez exactement quelles informations d\u2019entreprise approuvées ont été utilisées.' },
      { label: 'Ce qui a été produit', title: 'Le résultat', body: 'Examinez la réponse, le brouillon ou la synthèse créée.' },
      { label: 'Qui a validé', title: 'La révision', body: 'Sachez qui a révisé, modifié ou approuvé le résultat final.' },
    ],
    link: 'En savoir plus sur la gouvernance IA →',
  },
  origin: {
    marker: 'Pourquoi nous l\u2019avons créé',
    heading: 'Conçu pour le travail que nous devions faire nous-mêmes.',
    paragraphs: [
      'Zuraio est né parce que nous avions besoin d\u2019une meilleure façon de préparer, rechercher, synthétiser, rédiger et assurer le suivi dans notre propre travail.',
      'Les outils d\u2019IA publics étaient utiles, mais insuffisants pour un travail d\u2019entreprise sérieux. Nous voulions une IA connectée aux connaissances métier réelles, avec un contrôle clair sur les données, l\u2019accès et le choix du modèle.',
      'C\u2019est ainsi qu\u2019est né Zuraio.',
    ],
    link: 'Rencontrer l\u2019équipe →',
    caption: 'Créé parce que nous en avions nous-mêmes besoin.',
    imageAlt: 'L\u2019équipe Zuraio au travail — ordinateur portable, carnets et tableau blanc avec préparer, rechercher, synthétiser, rédiger et assurer le suivi.',
  },
  final: {
    heading: 'Découvrez ce que votre propre assistant pourrait retirer de votre bureau.',
    body: 'Nous examinerons vos outils actuels, vos connaissances d\u2019entreprise et vos exigences en matière de contrôle des données, puis identifierons où Zuraio pourrait vous aider en premier.',
    primaryCta: 'Réserver une démo privée',
    secondaryCta: 'Voir l\u2019assistant à l\u2019œuvre',
    supporting: 'Votre entreprise. Vos informations. Votre validation.',
  },
};

export const pages = {
  howItHelps: {
    title: 'Comment ça aide — Zuraio',
    hero: { marker: 'Comment ça aide', heading: 'Moins d\u2019administration. Plus de travail à valeur ajoutée.', headingEmphasis: 'valeur', lede: 'Zuraio aide les collaborateurs à préparer, rechercher, rédiger, synthétiser et assurer le suivi à partir des connaissances approuvées de l\u2019entreprise. Il fonctionne aux côtés des systèmes existants et rassemble le contexte pertinent au moment où il est nécessaire.' },
  },
  knowledge: {
    title: 'Connaissances — Zuraio',
    hero: { marker: 'Connaissances', heading: 'Transformez les informations dispersées de l\u2019entreprise en contexte exploitable.', headingEmphasis: 'exploitable', lede: 'Les connaissances importantes sont souvent dispersées entre boîtes de réception, lecteurs partagés, notes de réunion, enregistrements CRM et systèmes métier. Zuraio est conçu pour rassembler les informations approuvées afin que les collaborateurs puissent les trouver, les comprendre et les utiliser plus efficacement.' },
  },
  integrations: {
    title: 'Intégrations — Zuraio',
    hero: { marker: 'Intégrations', heading: 'Fonctionne aux côtés des systèmes que votre équipe utilise déjà.', headingEmphasis: 'déjà', lede: 'Zuraio est conçu pour connecter les connaissances et les flux de travail de l\u2019entreprise sans imposer aux équipes de remplacer les systèmes qui fonctionnent déjà.' },
  },
  dataControl: {
    title: 'Contrôle des données et sécurité — Zuraio',
    hero: { marker: 'Contrôle des données et sécurité', heading: 'Vos données. Vos règles. Votre déploiement.', headingEmphasis: 'règles', lede: 'Zuraio est conçu pour aider les entreprises à utiliser l\u2019IA sans renoncer au contrôle de leurs connaissances, de leurs autorisations ou de leurs choix d\u2019infrastructure.' },
  },
  deploymentModels: {
    title: 'Modèles de déploiement — Zuraio',
    hero: { marker: 'Modèles de déploiement', heading: 'Local, hybride ou cloud hébergé en Suisse.', headingEmphasis: 'Suisse', lede: 'Chaque entreprise a des exigences différentes en matière de contrôle, de performance, d\u2019infrastructure et de coûts. Zuraio peut être configuré selon le modèle de déploiement convenu avec le client.' },
  },
  technicalArchitecture: {
    title: 'Architecture technique — Zuraio',
    hero: { marker: 'Architecture technique', heading: 'Un parcours contrôlé de la demande au résultat validé.', headingEmphasis: 'contrôlé', lede: 'Zuraio connecte les utilisateurs, les sources d\u2019entreprise approuvées, les outils métier et les modèles IA via une couche d\u2019exécution gouvernée. L\u2019architecture exacte dépend de l\u2019environnement client et du modèle de déploiement.' },
  },
  aiGovernance: {
    title: 'Gouvernance IA — Zuraio',
    hero: { marker: 'Gouvernance IA', heading: 'Une utilisation de l\u2019IA qui peut être comprise et examinée.', lede: 'Une IA responsable en entreprise exige plus qu\u2019un modèle. Les organisations ont besoin de règles claires pour l\u2019accès, l\u2019utilisation des données, la validation humaine, la journalisation et la responsabilité.' },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: { marker: 'FAQ', heading: 'Questions pratiques sur l\u2019utilisation de Zuraio au travail.', headingEmphasis: 'pratiques', lede: 'Réponses aux questions fréquentes sur le déploiement, les autorisations, le contrôle des données et l\u2019utilisation quotidienne.' },
  },
  about: {
    title: 'À propos — Zuraio',
    hero: { marker: 'À propos de Zuraio', heading: 'Créé par des personnes qui avaient besoin d\u2019une meilleure façon de travailler.', headingEmphasis: 'meilleure', lede: 'Zuraio est né d\u2019un problème concret. Les outils d\u2019IA existants étaient utiles, mais ils ne combinaient pas connaissances d\u2019entreprise, contrôle des données et travail quotidien de la manière dont nous en avions besoin.' },
  },
  contact: {
    title: 'Contact — Zuraio',
    hero: { marker: 'Contact', heading: 'Identifiez le premier cas d\u2019usage concret pour votre entreprise.', lede: 'Nous examinerons vos outils actuels, vos connaissances d\u2019entreprise et vos exigences en matière de contrôle des données, puis identifierons où Zuraio pourrait vous aider en premier.' },
  },
  resources: {
    title: 'Ressources — Zuraio',
    hero: { marker: 'Ressources', heading: 'Informations techniques et pratiques sur Zuraio.', headingEmphasis: 'pratiques', lede: 'Guides, aperçus et documentation de référence pour les équipes qui évaluent ou déploient Zuraio.' },
  },
  privacy: {
    title: 'Confidentialité — Zuraio',
    hero: { marker: 'Mentions légales', heading: 'Politique de confidentialité.', lede: 'Cette page est un espace réservé structuré. Une politique de confidentialité complète doit être préparée et examinée par un conseil juridique qualifié avant publication.' },
  },
  impressum: {
    title: 'Impressum — Zuraio',
    hero: { marker: 'Mentions légales', heading: 'Impressum.', lede: 'Cette page est un espace réservé structuré. Toutes les informations de l\u2019entreprise ci-dessous doivent être vérifiées et insérées avant publication.' },
  },
  terms: {
    title: 'Conditions d\u2019utilisation — Zuraio',
    hero: { marker: 'Mentions légales', heading: 'Conditions d\u2019utilisation.', lede: 'Cette page est un espace réservé structuré. Des conditions complètes doivent être préparées et examinées par un conseil juridique qualifié avant publication.' },
  },
  cookies: {
    title: 'Paramètres des cookies — Zuraio',
    hero: { marker: 'Mentions légales', heading: 'Paramètres des cookies.', lede: 'Cette page est un espace réservé structuré. Les catégories et contrôles de cookies réels seront publiés après examen juridique et technique.' },
  },
};

export const site = {
  tagline: 'IA pour les entreprises suisses qui veulent garder le contrôle de leurs données.',
};

export const footerGroups = [
  {
    title: 'Produit',
    links: [
      { label: 'Comment Zuraio aide', href: 'how-it-helps.html' },
      { label: 'Connaissances', href: 'knowledge.html' },
      { label: 'Intégrations', href: 'integrations.html' },
      { label: 'Cas d\u2019usage', href: 'how-it-helps.html#use-cases' },
      { label: 'Réserver une démo', href: 'contact.html' },
    ],
  },
  {
    title: 'Données et sécurité',
    links: [
      { label: 'Contrôle des données', href: 'data-control.html' },
      { label: 'Hébergement suisse', href: 'deployment-models.html#swiss-hosted' },
      { label: 'Modèles de déploiement', href: 'deployment-models.html' },
      { label: 'Architecture technique', href: 'technical-architecture.html' },
      { label: 'Gouvernance IA', href: 'ai-governance.html' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: 'about.html' },
      { label: 'Contact', href: 'contact.html' },
      { label: 'Ressources', href: 'resources.html' },
      { label: 'Partenaires', href: 'contact.html#partnerships' },
      { label: 'Espace presse', href: 'resources.html#pressroom' },
    ],
  },
  {
    title: 'Mentions légales',
    links: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Confidentialité', href: 'privacy.html' },
      { label: 'Paramètres des cookies', href: 'cookies.html' },
      { label: 'Conditions d\u2019utilisation', href: 'terms.html' },
    ],
  },
];
