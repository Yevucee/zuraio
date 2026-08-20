/** French body copy for technical pages — exact source: Zuraio-technical-copy-FR_f6d4.md */

export const statusLabels = {
  available: "Disponible aujourd'hui",
  validation: "En validation",
  specified: "Spécifié / en développement",
};

export const deployStatusLabels = {
  local: "Disponible sur la base d'un projet – périmètre à confirmer",
  hybrid: "Disponible selon l'architecture – composants à confirmer",
  swiss: "Option d'hébergement – périmètre technique et commercial requis",
};

export const technicalArchitecture = {
  tocTitle: "Sur cette page",
  toc: [
    {
      href: "#overview",
      label: "Architecture technique",
    },
    {
      href: "#request-flow",
      label: "Parcours de la demande au résultat",
    },
    {
      href: "#maturity",
      label: "Niveau de maturité actuel",
    },
    {
      href: "#models",
      label: "Choix des modèles",
    },
    {
      href: "#integration-layer",
      label: "Couche d'intégration",
    },
    {
      href: "#rollout",
      label: "Déploiement contrôlé",
    }
  ],
  heroNote: "L'architecture précise dépend du mode de déploiement, des systèmes connectés et des modèles autorisés.",
  primaryCta: "Discuter de vos exigences techniques",
  secondaryCta: "Comparer les modes de déploiement",
  overview: {
    marker: "Architecture technique",
    heading: "Une plateforme. Sept couches contrôlées.",
    lede: "Zuraio dissocie l'expérience des collaborateurs de la complexité technique sous-jacente. Chaque couche remplit un rôle défini dans la gestion des accès, du contexte, de l'exécution et du contrôle.",
    layers: [
      {
        title: "1. Accès et interfaces utilisateur",
        body: "Les collaborateurs utilisent l'interface Zuraio ou des applications et clients connectés et approuvés. Les fonctions disponibles peuvent varier selon le rôle, le déploiement et le terminal utilisé.",
      },
      {
        title: "2. Identités, autorisations et règles",
        body: "Avant de rendre disponibles des connaissances, des outils ou des actions, Zuraio vérifie l'identité, le rôle et les autorisations. Les structures d'identité Microsoft ou Google peuvent être intégrées et complétées, si nécessaire, par des rôles propres à Zuraio.",
      },
      {
        title: "3. Orchestration",
        body: "La couche d'orchestration interprète la tâche, détermine le processus approprié et coordonne les connaissances, assistants, outils et modèles autorisés. Elle peut décomposer un travail complexe en étapes contrôlées, puis réunir les résultats.",
      },
      {
        title: "4. SkillOS et connaissances de l'entreprise",
        body: "SkillOS fournit les processus approuvés, le contexte pertinent, les modèles de documents et les règles de qualité. Les Skills sont versionnés en dehors du modèle d'IA, ce qui permet de les contrôler, de les actualiser et d'en gérer le cycle de vie.",
      },
      {
        title: "5. Assistants spécialisés et intégrations",
        body: "Des assistants spécialisés proposent des capacités clairement délimitées pour la communication, les connaissances, les documents et les besoins propres à chaque client. MCP, les API, les webhooks et les connecteurs donnent un accès contrôlé aux systèmes autorisés.",
      },
      {
        title: "6. Passerelle de modèles",
        body: "Différents modèles d'IA autorisés peuvent être sélectionnés selon la tâche, la classification des données, le lieu de traitement admis, la qualité requise et le coût. Les modèles disponibles dépendent du déploiement et des fournisseurs approuvés.",
      },
      {
        title: "7. Journalisation, contrôle et exploitation",
        body: "Les demandes, sources, actions et événements techniques pertinents peuvent être conservés selon les capacités des composants sélectionnés et le modèle d'audit convenu. Les contrôles opérationnels varient selon le déploiement et le degré de maturité.",
      }
    ],
    diagramTitle: "Les sept couches de l'architecture Zuraio : accès, identités et règles, orchestration, SkillOS, assistants et intégrations, passerelle de modèles, contrôle et exploitation.",
    diagramDesc: "accès, identités et règles, orchestration, SkillOS, assistants et intégrations, passerelle de modèles, contrôle et exploitation.",
    diagramCaption: "Architecture de plateforme à titre illustratif. Les limites des composants et leurs lieux d'exploitation varient selon l'environnement du client.",
    diagramLayers: [
      "Accès",
      "Identités et règles",
      "Orchestration",
      "SkillOS",
      "Assistants et intégrations",
      "Passerelle de modèles",
      "Contrôle et exploitation"
    ],
  },
  requestFlow: {
    marker: "Parcours de la demande au résultat",
    heading: "Un parcours contrôlé de la demande au résultat.",
    lede: "Zuraio est conçu pour appliquer le contexte de l'entreprise, les autorisations et les règles pendant toute l'exécution d'une tâche, et non uniquement lors d'un contrôle final.",
    steps: [
      {
        title: "Recevoir la demande",
        body: "Un collaborateur pose une question ou lance un processus depuis Zuraio ou une application approuvée.",
      },
      {
        title: "Vérifier l'identité et les autorisations",
        body: "Zuraio identifie l'utilisateur, le tenant, le rôle ainsi que les sources et actions autorisées.",
      },
      {
        title: "Déterminer le processus et le contexte",
        body: "SkillOS peut fournir les connaissances approuvées, les étapes du processus, les modèles et les critères de qualité.",
      },
      {
        title: "Coordonner les capacités nécessaires",
        body: "La couche d'orchestration sélectionne les assistants, outils, sources de données et modèles autorisés appropriés.",
      },
      {
        title: "Préparer le résultat",
        body: "Les informations provenant de sources autorisées sont réunies dans une réponse, un projet ou une action proposée.",
      },
      {
        title: "Contrôler les actions critiques",
        body: "Les actions d'écriture ou ayant un effet externe peuvent être présentées sous forme de projet ou de proposition avant confirmation.",
      },
      {
        title: "Conserver les éléments pertinents",
        body: "Les sources, versions, actions et événements techniques sont documentés lorsque le composant et la configuration d'audit le permettent.",
      }
    ],
  },
  maturity: {
    marker: "Niveau de maturité actuel",
    heading: "Niveau de maturité actuel.",
    lede: "Zuraio est constitué de plusieurs composants. Les statuts ci-dessous distinguent les fonctions disponibles, celles encore en validation de production et celles qui restent spécifiées ou en développement.",
    panels: [
      {
        status: "available",
        title: "SkillOS",
        items: [
          "Connaissances et Skills de processus versionnés",
          "Cycle de gouvernance et rôles",
          "Recherche hybride et relations entre connaissances",
          "Accès MCP fondé sur les rôles",
          "Sauvegarde, restauration, maintenance et contrôles d'état",
          "Cœur testé par des tests unitaires et d'intégration"
        ],
        qualification: null,
      },
      {
        status: "validation",
        title: "EmailAI",
        items: [
          "Recherche, consultation et classification des e-mails",
          "Préparation de projets de réponse",
          "Tâches, rendez-vous, contacts et mémos",
          "Graphe des connaissances liées aux communications",
          "Principe « projet avant exécution » pour les actions d'écriture",
          "Accès web, mobile et vocal"
        ],
        qualification: "L'exploitation complète avec Microsoft 365, la supervision centralisée, les sauvegardes automatisées ainsi que la séparation complète des utilisateurs et des tenants restent en validation ou en développement.",
      },
      {
        status: "specified",
        title: "MSConnector et automatisation Office",
        items: [
          "Modifications contrôlées dans Word, Excel et PowerPoint",
          "Compléments Office",
          "Document Twin et ancrages sémantiques",
          "Living Documents",
          "Cohérence entre plusieurs documents",
          "Contrôle visuel des documents",
          "Déploiement sous forme d'appliance dédiée au tenant"
        ],
        qualification: "Ces capacités font partie de l'architecture cible spécifiée. Elles ne doivent pas être présentées comme généralement disponibles avant la fin de leur implémentation et de leur validation pilote.",
      }
    ],
  },
  models: {
    marker: "Choix des modèles",
    heading: "Utiliser un modèle adapté à chaque tâche.",
    lede: "Zuraio sépare les processus, les Skills et les intégrations du modèle d'IA utilisé. L'architecture peut ainsi tenir compte de la tâche, de la qualité attendue, de la classification des données, du lieu de traitement autorisé, de la disponibilité et du coût avant de sélectionner un modèle approuvé.",
    items: [
      "Modèles locaux pour certaines tâches confidentielles ou contrôlées",
      "Services de modèles suisses lorsqu'ils font partie du déploiement convenu",
      "Modèles approuvés dans des clouds privés ou publics",
      "Modèles plus performants pour les raisonnements complexes ou les exigences linguistiques élevées",
      "Modèles plus légers pour les processus de routine clairement définis",
      "Règles déterminant quelles données peuvent être transmises à chaque modèle"
    ],
    qualification: "Les modèles et fournisseurs disponibles dépendent du déploiement convenu, de la validation technique et des conditions commerciales.",
    link: "Comparer les modes de déploiement →",
    linkHref: "deployment-models.html",
  },
  integrationLayer: {
    marker: "Couche d'intégration",
    heading: "Conçu pour s'intégrer, pas pour créer un nouveau silo.",
    lede: "Zuraio est conçu comme une couche d'orchestration au-dessus des systèmes existants. Il ne remplace pas les systèmes qui restent les sources de référence. Des capacités autorisées peuvent être consommées ou exposées via MCP, des API, des webhooks et des connecteurs spécifiques.",
    items: [
      "Environnements d'identité et de données Microsoft et Google",
      "Répertoires de documents et de fichiers",
      "Systèmes de messagerie, de calendrier et de communication",
      "CRM, ERP, DMS et applications métier",
      "Bases de données et API internes",
      "Assistants et outils propres au client"
    ],
    qualification: "La disponibilité et le degré de maturité de chaque intégration doivent être confirmés séparément.",
    link: "Voir les catégories d'intégration →",
    linkHref: "integrations.html",
  },
  rollout: {
    marker: "Déploiement contrôlé",
    heading: "Commencer de manière contrôlée. Étendre sur la base de résultats.",
    steps: [
      "Sélectionner les premiers cas d'usage.",
      "Examiner les systèmes, les identités et les sources de données.",
      "Définir le déploiement et les limites applicables aux modèles.",
      "Configurer les autorisations et les exigences de contrôle.",
      "Lancer un pilote avec des utilisateurs sélectionnés.",
      "Évaluer les résultats, les risques et la capacité opérationnelle.",
      "Étendre les usages lorsque la valeur est démontrée."
    ],
  },
  cta: {
    heading: "Parlons de votre architecture technique.",
    button: "Planifier un entretien technique",
  },
};

export const knowledge = {
  skillos: {
    marker: "SkillOS",
    heading: "De l'information stockée à une connaissance d'entreprise gouvernée.",
    ledes: [
      "SkillOS gère les connaissances et consignes de processus approuvées sous forme de Skills versionnés et réutilisables. Un Skill peut définir les informations à utiliser, le processus à suivre, les rôles responsables, les outils autorisés et le résultat attendu.",
      "Zuraio ne se limite donc pas à rechercher des documents. Un assistant spécialisé peut recevoir les connaissances et la méthode de travail approuvées pour une tâche précise."
    ],
    cards: [
      {
        title: "Connaissances versionnées",
        body: "Les Skills possèdent des versions et des statuts de cycle de vie définis. Les règles approuvées peuvent ainsi être contrôlées et mises à jour en dehors du modèle d'IA.",
      },
      {
        title: "Contexte relié",
        body: "La recherche peut combiner mots-clés, métadonnées structurées, similarité sémantique et relations entre Skills associés.",
      },
      {
        title: "Modifications gouvernées",
        body: "Un Skill nouveau ou modifié peut être soumis à un processus de contrôle et d'approbation avant son utilisation opérationnelle.",
      }
    ],
  },
  skills: {
    marker: "Skills",
    heading: "Les connaissances de l'entreprise comprennent aussi la manière de travailler.",
    lede: "Un Skill Zuraio peut contenir davantage que des documents de référence. Il peut décrire le processus approuvé et les conditions dans lesquelles celui-ci doit être appliqué.",
    items: [
      "Étapes obligatoires du processus",
      "Rôles et responsabilités",
      "Entrées, dépendances et résultats attendus",
      "Modèles et règles de mise en forme",
      "Contrôles qualité et points de validation",
      "Sources, assistants et outils autorisés",
      "Version, validité et remplacement d'anciennes règles"
    ],
  },
  sources: {
    marker: "Sources approuvées",
    heading: "Des sources approuvées pour des réponses propres à l'entreprise.",
    lede: "Les sources connectées dépendent de l'organisation, des autorisations et du périmètre d'intégration convenu. Zuraio est conçu pour utiliser des informations sélectionnées de l'entreprise, plutôt que de s'appuyer uniquement sur les connaissances publiques d'un modèle.",
    cards: [
      {
        title: "Documents et fichiers",
        body: "Politiques, normes, offres, dossiers de projet, modèles et espaces partagés approuvés.",
      },
      {
        title: "E-mail et calendrier",
        body: "Communications, contexte de réunions et correspondance lorsque les autorisations et le statut de l'intégration le permettent.",
      },
      {
        title: "Systèmes métier",
        body: "CRM, ERP, outils de projet et applications spécialisées contenant un contexte opérationnel.",
      },
      {
        title: "Connaissances de processus",
        body: "Skills SkillOS publiés contenant les processus, modèles et règles de qualité approuvés.",
      },
      {
        title: "Sources spécifiques",
        body: "Informations supplémentaires accessibles via des API approuvées ou des connecteurs propres au client.",
      }
    ],
    qualification: "Les sources précises et leur statut d'intégration sont confirmés pour chaque environnement client.",
  },
  traceability: {
    marker: "Traçabilité",
    heading: "Des réponses vérifiables à partir de leurs sources.",
    lede: "Lorsque des connaissances d'entreprise fondées sur des sources sont utilisées, Zuraio peut conserver et présenter les informations d'origine selon le processus et l'interface choisis. Les collaborateurs peuvent ainsi vérifier les éléments importants avant de les utiliser.",
    items: [
      "Comparer les affirmations importantes aux informations d'origine",
      "Comprendre quels documents ou systèmes ont contribué",
      "Réduire la dépendance à la mémoire non vérifiée d'un modèle",
      "Soutenir les processus internes de contrôle et de gouvernance",
      "Identifier, lorsque disponible, la version ou la date pertinente"
    ],
    qualification: "La présentation des sources varie selon l'assistant, l'interface et le déploiement. Tous les résultats ne reposent pas nécessairement sur des sources.",
    link: "Découvrir l'architecture technique →",
    linkHref: "technical-architecture.html",
  },
  cta: {
    heading: "Découvrez comment relier les connaissances de votre entreprise.",
    lede: "Nous pouvons examiner vos sources actuelles, votre modèle d'autorisations et les premières questions auxquelles vos équipes souhaitent répondre.",
    button: "Réserver une démonstration privée",
  },
};

export const dataControl = {
  ownership: {
    marker: "Propriété des données",
    heading: "Vos données restent sous votre contrôle.",
    lede: "Zuraio est conçu pour traiter les informations de l'entreprise dans les limites du déploiement et du contrat convenus. La propriété, les usages autorisés, la conservation et les conditions de traitement doivent être documentés pour la solution et les fournisseurs de modèles sélectionnés.",
    cards: [
      {
        title: "L'entreprise conserve la propriété",
        body: "Vos documents, e-mails, dossiers commerciaux et connaissances internes restent votre propriété. Zuraio ne revendique aucun droit de propriété sur les contenus des clients.",
      },
      {
        title: "Les conditions des fournisseurs sont définies avant la connexion",
        body: "La conservation des informations ou leur éventuelle utilisation à des fins d'entraînement par un fournisseur externe dépend du modèle, du fournisseur et des conditions contractuelles. Ces éléments doivent être définis avant de connecter des informations d'entreprise.",
      }
    ],
  },
  identity: {
    marker: "Identité et autorisations",
    heading: "Les accès doivent respecter les règles existantes de l'entreprise.",
    lede: "Zuraio peut utiliser les identités, groupes et autorisations Microsoft ou Google déjà en place. Lorsque ces intégrations ne sont pas utilisées, des rôles et contrôles d'accès supplémentaires peuvent être gérés dans Zuraio.",
    cards: [
      {
        title: "Structures d'identité existantes",
        body: "Les informations d'identité Microsoft ou Google peuvent servir de base organisationnelle pour les utilisateurs, les groupes et les rôles.",
      },
      {
        title: "Vérification des autorisations",
        body: "Le contexte d'identité et d'autorisation peut être transmis à l'assistant et à la source de données concernés afin de vérifier l'accès au moment où une information est consultée ou une action demandée.",
      },
      {
        title: "Contrôles Zuraio supplémentaires",
        body: "Des règles Zuraio peuvent limiter les modèles, outils, classes de données et actions sans remplacer le système d'identité existant.",
      }
    ],
    qualification: "Le comportement précis dépend du système connecté, de la méthode d'intégration et du déploiement convenu.",
  },
  actions: {
    marker: "Actions contrôlées",
    heading: "Lire une information et la modifier ne sont pas la même chose.",
    lede: "Zuraio est conçu pour distinguer les opérations de lecture des actions qui modifient un document, un système ou une communication externe. Les actions critiques ou d'écriture peuvent être préparées sous forme de projet ou de proposition avant confirmation.",
    items: [
      "Lire des informations approuvées dans les limites des autorisations",
      "Préparer une réponse ou une modification proposée",
      "Présenter l'action prévue avant son exécution",
      "Exiger une confirmation lorsque cela est configuré",
      "Conserver les informations pertinentes sur l'action et l'approbation lorsque le composant le permet"
    ],
    qualification: "Le principe « projet avant exécution » est implémenté dans EmailAI. Les contrôles d'action plus larges dépendent du composant et de son degré de maturité.",
  },
  policies: {
    marker: "Règles de modèles et de localisation",
    heading: "Déterminer quelles données peuvent être transmises à quel modèle et dans quel lieu.",
    lede: "Les règles peuvent tenir compte de la tâche, de la classification des données, du lieu de traitement autorisé et du fournisseur de modèle approuvé. Elles permettent des architectures combinant des composants locaux, suisses et cloud autorisés.",
    link: "Comparer les modes de déploiement →",
    linkHref: "deployment-models.html",
  },
  security: {
    marker: "Sécurité",
    heading: "La sécurité dépend du déploiement choisi.",
    lede: "Les déploiements Zuraio sont conçus pour protéger les données en transit et au repos. Le chiffrement, la gestion des clés, le stockage, la journalisation, les sauvegardes et la restauration doivent être documentés pour les composants et le déploiement retenus.",
    cards: [
      {
        title: "Authentification et autorisation",
        body: "Les accès sont contrôlés par les identités, les rôles, les périmètres d'autorisation et les droits propres à chaque composant.",
      },
      {
        title: "Séparation des tenants et des données",
        body: "Le modèle d'isolation requis est défini pour le déploiement et les composants sélectionnés.",
      },
      {
        title: "Journalisation et contrôle",
        body: "Les demandes, sources et actions pertinentes peuvent être conservées selon le modèle d'audit convenu et la maturité de chaque composant.",
      },
      {
        title: "Mesures propres au déploiement",
        body: "Les contrôles réseau, stockage, sauvegarde et exploitation sont convenus dans le cadre de la conception du déploiement.",
      }
    ],
    qualification: "Toute affirmation concernant le droit suisse de la protection des données, le RGPD, la réglementation de l'IA, les certifications ou les sous-traitants nécessite une validation juridique et technique séparée.",
    link: "Gouvernance de l'IA →",
    linkHref: "ai-governance.html",
  },
  cta: {
    heading: "Parlons de vos exigences en matière de contrôle des données.",
    lede: "Nous pouvons examiner vos classes de données, systèmes d'identité, contraintes d'infrastructure et la limite de déploiement la plus appropriée.",
    primary: "Voir les modes de déploiement",
    primaryHref: "deployment-models.html",
    secondary: "Réserver une démonstration privée",
    secondaryHref: "contact.html",
  },
};

export const deploymentModels = {
  models: {
    marker: "Modes",
    heading: "Local, hybride ou hébergé en Suisse.",
    cards: [
      {
        status: "local",
        title: "Local ou contrôlé par le client",
        intro: "Certains composants, assistants ou modèles Zuraio peuvent être conçus pour fonctionner dans une infrastructure contrôlée par le client ou dans un cloud privé.",
        items: [
          "Maîtrise accrue des lieux de traitement et de stockage",
          "Adapté à certains usages confidentiels ou soumis à des règles internes",
          "Possibilité d'utiliser des modèles locaux et des modèles cloud approuvés",
          "Implication plus importante de l'équipe IT interne",
          "Répartition des responsabilités opérationnelles à convenir"
        ],
        qualification: "Un déploiement local n'est pas un produit standard unique. Les composants, le matériel, le support, les mises à jour, les sauvegardes et les exigences des modèles doivent être confirmés pour chaque projet.",
      },
      {
        status: "hybrid",
        title: "Hybride",
        intro: "Une architecture hybride peut répartir les sources, assistants et modèles entre plusieurs environnements approuvés, tout en les coordonnant au moyen d'une couche de contrôle commune.",
        items: [
          "Les connaissances sensibles peuvent rester dans les systèmes contrôlés par le client",
          "Certains traitements peuvent être réalisés dans des environnements gérés et approuvés",
          "Le choix du modèle peut varier selon la tâche et la classification des données",
          "Les assistants peuvent fonctionner à proximité des systèmes qu'ils utilisent",
          "Les flux de données et les responsabilités doivent être documentés"
        ],
        qualification: null,
      },
      {
        status: "swiss",
        title: "Hébergement en Suisse",
        intro: "Pour les entreprises ayant des exigences de localisation en Suisse, certains composants Zuraio et modèles adaptés peuvent être conçus pour fonctionner dans un environnement de serveurs suisse.",
        items: [
          "Options suisses de traitement et de stockage pour les composants convenus",
          "Charge d'infrastructure interne réduite par rapport à une exploitation entièrement locale",
          "Autorisations et règles de modèles configurables",
          "Possibilité de l'intégrer à une architecture hybride",
          "Sous réserve des fournisseurs, services et conditions contractuelles convenus"
        ],
        qualification: "L'opérateur, les lieux, les fournisseurs de modèles, les sous-traitants et les flux de données doivent être documentés pour l'offre retenue.",
      }
    ],
  },
  comparison: {
    marker: "Comparaison",
    heading: "Comparaison",
    headers: [
      "Aspect",
      "Local / contrôlé par le client",
      "Hybride",
      "Hébergement en Suisse"
    ],
    rows: [
      [
        "Maîtrise de la localisation",
        "Définie dans l'infrastructure contrôlée par le client",
        "Définie par composant et flux de données",
        "Définie pour les composants suisses convenus"
      ],
      [
        "Implication de l'IT interne",
        "Élevée",
        "Moyenne",
        "Faible à moyenne"
      ],
      [
        "Choix des modèles",
        "Modèles locaux et externes approuvés",
        "Selon la tâche et les règles",
        "Modèles disponibles dans l'architecture convenue"
      ],
      [
        "Responsabilité opérationnelle",
        "Principalement client ou partagée",
        "Partagée",
        "Principalement gérée, selon le contrat"
      ],
      [
        "Usage type",
        "Tâches confidentielles ou soumises à des règles internes",
        "Exigences variables selon les systèmes et les données",
        "Entreprises recherchant un hébergement suisse géré"
      ],
      [
        "Disponibilité",
        "À confirmer par projet",
        "À confirmer par architecture",
        "À confirmer par offre"
      ]
    ],
  },
  agreement: {
    marker: "Points à définir",
    heading: "Points à définir pour chaque déploiement.",
    items: [
      "Opérateur et responsabilités",
      "Lieux de traitement et de stockage",
      "Fournisseurs de modèles",
      "Connexions réseau",
      "Fournisseur d'identité",
      "Isolation des tenants et des données",
      "Sauvegarde et restauration",
      "Supervision et support",
      "Processus de mise à jour et de correction",
      "Règles de conservation et de suppression",
      "Services externes autorisés"
    ],
  },
  cta: {
    heading: "Quel mode de déploiement convient à votre entreprise ?",
    lede: "Nous pouvons examiner vos exigences de contrôle des données, votre infrastructure existante et le point de départ le plus réaliste.",
    primary: "Réserver une démonstration privée",
    primaryHref: "contact.html",
    secondary: "Voir l'architecture technique",
    secondaryHref: "technical-architecture.html",
  },
  heroQualification: "La disponibilité d'un modèle précis doit être confirmée dans le périmètre technique et commercial.",
};

export const aiGovernance = {
  governance: {
    marker: "Gouvernance",
    heading: "La gouvernance commence avant la génération d'une réponse.",
    lede: "Zuraio peut appliquer des règles aux sources, aux Skills, aux assistants spécialisés, aux modèles et aux actions. Les processus approuvés peuvent être versionnés dans SkillOS, tandis que les modifications critiques ou les actions externes peuvent être préparées pour validation humaine.",
    cards: [
      {
        title: "Connaissances approuvées",
        body: "Les versions publiées des Skills et règles de l'entreprise peuvent être mises à disposition pour un usage opérationnel.",
      },
      {
        title: "Accès définis",
        body: "L'identité, le rôle et les autorisations sur les sources déterminent quelles informations et capacités peuvent être utilisées.",
      },
      {
        title: "Exécution contrôlée",
        body: "Les paramètres des outils peuvent être validés, et les opérations de lecture distinguées des actions qui modifient des informations ou communiquent à l'extérieur.",
      },
      {
        title: "Validation humaine",
        body: "Les actions sensibles ou d'écriture peuvent être retenues sous forme de projet ou de proposition lorsque le composant prend en charge ce processus.",
      },
      {
        title: "Traces pertinentes",
        body: "Les demandes, sources, versions, actions et approbations peuvent être conservées lorsque le composant et le déploiement le permettent.",
      }
    ],
  },
  lifecycle: {
    marker: "Skill-Lifecycle",
    heading: "Maintenir les règles de l'entreprise à jour et sous contrôle.",
    lede: "SkillOS gère les Skills de connaissance et de processus selon un cycle défini. Les modifications proposées peuvent être contrôlées avant qu'une nouvelle version soit disponible pour l'exploitation.",
    stages: [
      "Brouillon",
      "En révision",
      "Approuvé",
      "Publié",
      "Obsolète",
      "Archivé"
    ],
    items: [
      "Contrôles qualité avant les changements de statut",
      "Étapes distinctes de proposition et d'approbation",
      "Protection des Skills publiés contre les modifications non contrôlées",
      "Historique des versions et instantanés",
      "Escalade lorsque des problèmes de qualité sont détectés"
    ],
  },
  draftFirst: {
    marker: "Draft-First",
    heading: "L'IA peut préparer. Les personnes restent responsables.",
    lede: "EmailAI applique un principe de projet préalable pour les actions qui modifient des informations ou communiquent à l'extérieur. Le système peut préparer une réponse ou une action, présenter le résultat prévu et attendre une confirmation lorsque celle-ci est requise.",
    qualification: "Les contrôles disponibles varient selon le composant. Les processus complets de modification de documents Office restent spécifiés ou en développement.",
  },
  review: {
    marker: 'Contrôle',
    heading: "Contrôler les éléments qui comptent.",
    cards: [
      {
        title: "La demande",
        body: "La question posée ou la tâche lancée.",
      },
      {
        title: "Les sources",
        body: "Les informations d'entreprise approuvées qui ont contribué, lorsque le suivi des sources est pris en charge.",
      },
      {
        title: "Le processus",
        body: "Le Skill publié, l'assistant ou l'outil utilisé, lorsque le composant le consigne.",
      },
      {
        title: "Le résultat",
        body: "La réponse, le projet ou l'action proposée qui a été produit.",
      },
      {
        title: "La validation",
        body: "La personne qui a contrôlé ou confirmé une action, lorsque le processus conserve les approbations.",
      }
    ],
    qualification: "Le contenu des journaux, la durée de conservation, les possibilités d'exportation et la visibilité dans l'interface dépendent du composant et de la configuration d'audit.",
    link: "Découvrir le contrôle des données →",
    linkHref: "data-control.html",
  },
  limitations: {
    marker: 'Limites',
    heading: 'Limites importantes.',
    paragraphs: [
      "Les résultats générés par l'IA peuvent contenir des erreurs, des omissions ou des informations obsolètes. Les informations importantes doivent être vérifiées à partir des sources d'origine avant d'être utilisées.",
      "Zuraio assiste le travail humain. Il ne remplace ni le jugement professionnel, ni les conseils juridiques ou financiers, ni toute autre expertise qualifiée.",
      "Les fonctions disponibles dépendent du déploiement, de la configuration, de la maturité des composants et du contrat.",
      "Cette page ne constitue pas un avis juridique, réglementaire ou de conformité."
    ],
  },
  cta: {
    heading: "Parlons de la gouvernance de l'IA dans votre entreprise.",
    lede: "Nous pouvons examiner votre modèle d'accès, vos exigences d'approbation et une démarche contrôlée vers une utilisation pratique de l'IA.",
    button: "Réserver une démonstration privée",
  },
};

export const integrations = {
  methods: {
    marker: "Méthodes",
    heading: "Une couche d'intégration flexible.",
    lede: "Zuraio peut connecter des systèmes et capacités approuvés via MCP, des API, des webhooks et des connecteurs spécifiques. Les intégrations disponibles dépendent du cas d'usage, du déploiement et du statut actuel du produit.",
    cards: [
      {
        title: "MCP",
        body: "Accès standardisé aux capacités approuvées des assistants et des outils.",
      },
      {
        title: "API",
        body: "Connexion aux applications métier, services internes et sources de données au moyen d'interfaces définies.",
      },
      {
        title: "Webhooks et événements",
        body: "Prise en charge de certains processus asynchrones et événements système.",
      },
      {
        title: "Connecteurs spécifiques",
        body: "Connexions réalisées dans le cadre d'un projet pour des systèmes métier et applications internes.",
      }
    ],
  },
  categories: {
    marker: "Catégories",
    heading: "Catégories d'intégration.",
    lede: null,
    cards: [
      {
        title: "E-mail et calendrier",
        body: "Outlook, Gmail et environnements de calendrier, selon le statut actuel de l'intégration.",
      },
      {
        title: "Productivité et documents",
        body: "Microsoft 365, SharePoint, OneDrive, Google Workspace et répertoires de documents approuvés, selon le statut actuel de l'intégration.",
      },
      {
        title: "Collaboration et communication",
        body: "Microsoft Teams, Slack et autres plateformes approuvées, selon le statut actuel de l'intégration.",
      },
      {
        title: "CRM, ERP et applications métier",
        body: "Systèmes clients, financiers, de projet et opérationnels via des interfaces prises en charge ou spécifiques.",
      },
      {
        title: "API et applications internes",
        body: "API REST, webhooks, bases de données, outils internes et services propres au client.",
      }
    ],
    qualification: "Contactez-nous pour confirmer le statut et le périmètre disponible d'une intégration précise.",
  },
  components: {
    marker: "Composants",
    heading: "Contexte actuel des intégrations.",
    panels: [
      {
        status: "validation",
        title: "EmailAI",
        body: "EmailAI comprend des fonctions de base implémentées pour les e-mails, le contexte de communication, les tâches, les rendez-vous, les contacts et les projets de réponse. L'exploitation complète avec Microsoft 365 reste en validation.",
      },
      {
        status: "specified",
        title: "MSConnector",
        body: "Le connecteur Microsoft 365 et Office fait partie de l'architecture cible spécifiée. L'automatisation complète de Word, Excel, PowerPoint, SharePoint et OneDrive ne doit pas être présentée comme généralement disponible avant la fin de l'implémentation et de la validation pilote.",
      },
      {
        status: null,
        title: "Intégrations spécifiques",
        body: "MCP, les API, les webhooks et les connecteurs spécifiques constituent la base technique des intégrations réalisées par projet. La disponibilité doit être évaluée système par système.",
      }
    ],
  },
  cta: {
    heading: "Parlons de vos besoins d'intégration.",
    lede: "Indiquez-nous les systèmes, identités et sources de données importants pour votre premier cas d'usage. Nous confirmerons le statut actuel et les travaux nécessaires.",
    primary: "Discuter de vos intégrations",
    primaryHref: "contact.html",
    secondary: "Voir l'architecture technique",
    secondaryHref: "technical-architecture.html#integration-layer",
  },
};

export const faqItems = [
  {
    question: "Qu'est-ce que Zuraio AI Hub ?",
    answer: "Zuraio AI Hub est une plateforme qui réunit les connaissances de l'entreprise, des assistants IA spécialisés, des modèles autorisés et des intégrations aux systèmes métier. Les collaborateurs utilisent un environnement commun, tandis que Zuraio applique les règles d'identité, d'autorisation et de processus pertinentes.",
  },
  {
    question: "À qui s'adresse Zuraio ?",
    answer: "Zuraio s'adresse en premier lieu aux PME suisses qui souhaitent utiliser l'IA de manière pratique tout en gardant le contrôle des connaissances, des accès et des possibilités de déploiement. Son architecture technique peut également répondre à des besoins organisationnels plus complexes.",
  },
  {
    question: "Où nos données sont-elles traitées ?",
    answer: "Le lieu de traitement dépend du déploiement retenu. Zuraio prend en charge des architectures utilisant une infrastructure contrôlée par le client, un cloud privé, un hébergement suisse ou une combinaison hybride. Les lieux précis, les fournisseurs de modèles et les flux de données sont documentés pour l'environnement convenu.",
  },
  {
    question: "Pouvons-nous choisir le modèle d'IA utilisé pour chaque tâche ?",
    answer: "Zuraio est conçu pour utiliser différents modèles approuvés selon la tâche, la classification des données, le lieu de traitement admis, la qualité requise et le coût. Les modèles disponibles dépendent du déploiement et des fournisseurs sélectionnés.",
  },
  {
    question: "Les utilisateurs n'accèdent-ils qu'aux informations autorisées ?",
    answer: "Zuraio peut utiliser les identités, groupes et autorisations Microsoft ou Google, complétés si nécessaire par des rôles Zuraio. Le comportement précis dépend du système connecté, de la méthode d'intégration et de la configuration convenue.",
  },
  {
    question: "Pouvons-nous voir les sources utilisées dans une réponse ?",
    answer: "Lorsque des connaissances d'entreprise fondées sur des sources sont utilisées, Zuraio peut conserver et présenter les informations d'origine selon l'assistant et l'interface. Tous les résultats ne reposent pas nécessairement sur des sources, et leur présentation varie selon le composant.",
  },
  {
    question: "Comment Zuraio se connecte-t-il à nos outils existants ?",
    answer: "Zuraio est conçu pour utiliser MCP, des API, des webhooks et des connecteurs spécifiques. Le périmètre disponible dépend du système, du cas d'usage et de la maturité actuelle de l'intégration.",
  },
  {
    question: "Nos données servent-elles à entraîner des modèles d'IA publics ?",
    answer: "Cela dépend du modèle, du fournisseur et des conditions contractuelles retenus. Les règles de conservation, de traitement et d'éventuelle utilisation pour l'entraînement doivent être définies avant de connecter des informations d'entreprise.",
  },
  {
    question: "Zuraio effectue-t-il automatiquement des modifications ?",
    answer: "Zuraio peut préparer des réponses, des projets et des actions proposées pour contrôle. Les actions pouvant être exécutées automatiquement dépendent du composant, des autorisations, des règles d'approbation et de la configuration choisie.",
  },
  {
    question: "Qu'est-ce qui est disponible aujourd'hui ?",
    answer: "SkillOS est le composant Zuraio le plus avancé et fournit des connaissances versionnées, des fonctions de recherche et de gouvernance. EmailAI comprend des fonctions de communication implémentées qui font encore l'objet d'une validation pour la production. L'automatisation complète de Microsoft 365 et d'Office reste spécifiée ou en développement.",
  },
  {
    question: "Comment démarrer ?",
    answer: "Nous commençons par des cas d'usage sélectionnés, les systèmes existants, les exigences d'identité et d'accès, les classes de données et la limite de déploiement souhaitée. Un pilote contrôlé permet ensuite de valider l'utilité, l'intégration et les exigences opérationnelles avant un déploiement plus large.",
  },
  {
    question: "Qu'est-ce qu'un Starter Partner ?",
    answer: "Un Starter Partner travaille avec Zuraio sur un premier cas d'usage clairement défini et fournit un retour structuré pendant la validation du produit. Le périmètre, les responsabilités, le support et les conditions commerciales sont convenus avant le début du projet.",
  }
];

export const faqItHeading = 'Les questions que votre équipe informatique posera';

export const faqItItems = [
  {
    question: 'Où nos données sont-elles stockées ?',
    answer:
      'Le lieu de traitement dépend du déploiement choisi. Zuraio prend en charge des architectures utilisant une infrastructure contrôlée par le client, un cloud privé, un hébergement suisse et des combinaisons hybrides. Les emplacements, fournisseurs de modèles et flux de données exacts sont documentés pour l’environnement client convenu. Voir <a href="deployment-models.html">modes de déploiement</a> pour un aperçu.',
  },
  {
    question: 'Les données de l’entreprise quittent-elles l’environnement choisi ?',
    answer:
      'Les politiques peuvent tenir compte de la tâche, de la classification des données, du lieu de traitement autorisé et du fournisseur de modèle approuvé. Les emplacements et flux de données exacts sont documentés pour l’environnement client convenu.',
  },
  {
    question: 'Peut-on désactiver les modèles d’IA cloud externes ?',
    answer:
      'Les modèles disponibles et les données pouvant être envoyées à chaque modèle sont définis dans le déploiement convenu et les politiques de modèles. La disponibilité d’un modèle précis doit être confirmée dans le cadre du périmètre technique et commercial.',
  },
  {
    question: 'Les requêtes des collaborateurs sont-elles conservées ?',
    answer:
      'Les demandes, sources et actions pertinentes peuvent être conservées selon le modèle d’audit convenu et la maturité de chaque composant. Le comportement exact de conservation dépend des composants sélectionnés et de la configuration convenue.',
  },
  {
    question: 'Des journaux d’audit sont-ils disponibles ?',
    answer:
      'Les demandes, sources et actions pertinentes peuvent être conservées selon le modèle d’audit convenu et la maturité de chaque composant. L’étendue exacte dépend des composants sélectionnés et de la configuration convenue.',
  },
  {
    question: 'Comment les droits d’accès existants sont-ils appliqués ?',
    answer:
      'Zuraio peut fonctionner avec les identités, groupes et autorisations Microsoft ou Google établis. Le contexte d’identité et d’autorisation peut être transmis à l’assistant et à la source de données concernés afin que l’accès soit vérifié lors de la récupération d’informations ou d’actions demandées. Le comportement exact des autorisations dépend du système connecté, de la méthode d’intégration et du déploiement convenu.',
  },
];

export const faqCta = {
  heading: "Encore des questions ?",
  lede: "Réservez une démonstration privée afin de discuter de vos systèmes, de vos exigences de contrôle des données et de vos premiers processus.",
  button: "Nous contacter",
};

export const technicalPages = {
  technicalArchitecture,
  knowledge,
  dataControl,
  deploymentModels,
  aiGovernance,
  integrations,
};
