export const legalPages = {
  impressum: {
    banners: [
      {
        type: 'mono',
        text: 'À COMPLÉTER : Renseigner tous les champs ci-dessous avec des informations vérifiées sur le plan juridique. Ne pas publier avec des contenus provisoires.',
      },
    ],
    sections: [
      {
        heading: 'Entreprise / entité juridique',
        type: 'dl',
        items: [
          { dt: 'Raison sociale', dd: '[Nom de l’entité juridique]' },
          { dt: 'Forme juridique', dd: '[p. ex. Sàrl, SA]' },
          { dt: 'Numéro IDE / CHE', dd: '[CHE-xxx.xxx.xxx]' },
        ],
      },
      {
        heading: 'Adresse du siège',
        type: 'dl',
        items: [
          { dt: 'Rue', dd: '[Rue et numéro]' },
          { dt: 'Code postal et localité', dd: '[Code postal Localité]' },
          { dt: 'Canton / pays', dd: '[Canton, Suisse]' },
        ],
      },
      {
        heading: 'Contact',
        type: 'dl',
        items: [
          { dt: 'E-mail', dd: '', mailto: true },
          { dt: 'Téléphone', dd: '[Numéro de téléphone ou « non publié »]' },
          { dt: 'Site internet', dd: '[https://zuraio.ch]' },
        ],
      },
      {
        heading: 'Représentation',
        type: 'dl',
        items: [
          { dt: 'Direction / personnes habilitées à signer', dd: '[Nom(s) de la ou des personnes habilitées à représenter l’entreprise]' },
        ],
      },
      {
        heading: 'Registre du commerce',
        type: 'dl',
        items: [
          { dt: 'Registre', dd: '[Registre du commerce du canton de …]' },
          { dt: 'Numéro d’inscription', dd: '[Numéro d’inscription]' },
        ],
      },
      {
        heading: 'TVA / fiscalité',
        type: 'dl',
        items: [{ dt: 'Numéro de TVA', dd: '[Numéro de TVA ou, le cas échéant, « non assujetti »]' }],
      },
      {
        heading: 'Responsable du contenu',
        type: 'dl',
        items: [{ dt: 'Responsabilité éditoriale', dd: '[Nom et adresse conformément au droit applicable]' }],
      },
      {
        heading: 'Clause de non-responsabilité',
        paragraphs: [
          'Texte provisoire : le contenu de ce site internet est fourni uniquement à titre d’information générale. Malgré le soin apporté à sa préparation, nous ne garantissons pas son exactitude, son exhaustivité ni son actualité.',
        ],
        todo: 'À COMPLÉTER : Remplacer par une clause de non-responsabilité approuvée sur le plan juridique.',
      },
      {
        heading: 'Règlement des litiges',
        todo: 'À CONFIRMER : Vérifier si une mention relative au règlement en ligne des litiges est nécessaire.',
      },
    ],
    lastUpdated: 'Dernière mise à jour : À compléter — ajouter la date après validation des mentions légales.',
  },

  privacy: {
    banners: [
      {
        type: 'status',
        label: 'TEXTE PROVISOIRE — SANS VALEUR JURIDIQUE',
        text: 'Ce contenu est uniquement destiné à la phase de développement. Aucun texte figurant sur cette page ne doit être considéré comme une politique de confidentialité définitive ou contraignante. L’ensemble du contenu devra être remplacé après examen juridique.',
      },
      {
        type: 'mono',
        text: 'À COMPLÉTER : Remplacer toute la page par une politique de confidentialité approuvée par un conseil juridique. Le texte provisoire n’a aucune valeur contraignante.',
      },
    ],
    sections: [
      {
        heading: '1. Responsable du traitement',
        paragraphs: ['[Nom de l’entité juridique]<br>[Adresse du siège]<br>[Adresse e-mail de contact]'],
        todo: 'À CONFIRMER : Vérifier l’identité et les coordonnées du responsable du traitement.',
      },
      {
        heading: '2. Champ d’application',
        paragraphs: [
          'La présente politique décrira la manière dont nous traitons les données personnelles lorsque vous consultez ce site internet, envoyez une demande, utilisez Zuraio AI Hub ou interagissez avec nous d’une autre manière.',
        ],
        todo: 'À CONFIRMER : Définir les services concernés et les activités de traitement des données.',
      },
      {
        heading: '3. Données collectées',
        paragraphs: ['Les catégories peuvent notamment comprendre :'],
        list: [
          'Données de contact et d’identification (nom, adresse e-mail, entreprise, fonction)',
          'Données de communication (demandes, échanges avec le support)',
          'Données techniques (adresse IP, type de navigateur, informations sur l’appareil)',
          'Données d’utilisation (manière dont vous utilisez le site internet ou, le cas échéant, le produit)',
          'Données d’entreprise traitées par Zuraio AI Hub (faisant l’objet d’un accord distinct)',
        ],
        todo: 'À CONFIRMER : Vérifier avec le conseil juridique les catégories exactes de données et leurs sources.',
      },
      {
        heading: '4. Finalités et bases juridiques',
        paragraphs: [
          'Les finalités du traitement peuvent notamment comprendre la réponse aux demandes, la fourniture du service, l’amélioration du produit, la sécurité et le respect des obligations légales.',
        ],
        todo: 'À COMPLÉTER : Préciser la base juridique applicable à chaque finalité (consentement, contrat, intérêt légitime, obligation légale).',
      },
      {
        heading: '5. Partage des données et sous-traitants',
        paragraphs: [
          'Nous pouvons partager des données avec des prestataires qui nous aident à exploiter le site internet et le produit, notamment pour l’hébergement, la messagerie électronique, l’analyse et les fournisseurs de modèles d’IA. Une liste actualisée des sous-traitants sera publiée ici.',
        ],
        todo: 'À COMPLÉTER : Publier la liste vérifiée des sous-traitants et les mécanismes applicables aux transferts de données.',
      },
      {
        heading: '6. Transferts internationaux',
        paragraphs: [
          'Lorsque des données sont transférées hors de Suisse ou de l’EEE, des garanties appropriées s’appliquent.',
        ],
        todo: 'À COMPLÉTER : Préciser, après examen juridique, les mécanismes de transfert applicables, tels que les clauses contractuelles types ou les décisions d’adéquation.',
      },
      {
        heading: '7. Conservation',
        paragraphs: [
          'Les données personnelles sont conservées uniquement aussi longtemps que nécessaire aux finalités décrites ou que l’exige la loi.',
        ],
        todo: 'À COMPLÉTER : Préciser les durées de conservation pour chaque catégorie de données.',
      },
      {
        heading: '8. Vos droits',
        paragraphs: [
          'Selon le droit applicable, vous pouvez disposer de droits d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition et de portabilité des données. Vous pouvez également avoir le droit de déposer une réclamation auprès d’une autorité de contrôle.',
        ],
        todo: 'À CONFIRMER : Vérifier avec le conseil juridique les droits applicables et les procédures de réclamation.',
      },
      {
        heading: '9. Cookies et analyse',
        id: 'cookies',
        paragraphs: [
          'Ce site internet peut utiliser des cookies essentiels et, avec votre consentement lorsque celui-ci est requis, des cookies d’analyse. Un mécanisme de gestion des préférences en matière de cookies sera mis à disposition.',
        ],
        todo: 'À COMPLÉTER : Mettre en place une bannière de cookies et publier l’inventaire des cookies.',
      },
      {
        heading: '10. Sécurité',
        paragraphs: [
          'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de protéger les données personnelles. Les mesures précises dépendent du service et du modèle de déploiement.',
        ],
        todo: 'À COMPLÉTER : Ajouter une description vérifiée des mesures de sécurité, sans formulation excessive.',
      },
      {
        heading: '11. Modifications de la présente politique',
        paragraphs: [
          'Nous pouvons mettre à jour cette politique de temps à autre. La version en vigueur sera publiée sur cette page avec une date actualisée.',
        ],
        todo: 'Dernière mise à jour : À compléter — ajouter la date après validation de la politique.',
      },
      {
        heading: '12. Contact',
        paragraphs: [
          'Pour toute question relative à la protection des données : <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'À CONFIRMER : Vérifier l’adresse de contact pour la protection des données et déterminer si la désignation d’un délégué à la protection des données est nécessaire.',
      },
    ],
  },

  terms: {
    banners: [
      {
        type: 'status',
        label: 'TEXTE PROVISOIRE — SANS VALEUR JURIDIQUE',
        text: 'Ce contenu est uniquement destiné à la phase de développement. Aucun texte figurant sur cette page ne doit être considéré comme contractuel, contraignant ou définitif. L’ensemble du contenu devra être remplacé après examen juridique.',
      },
    ],
    sections: [
      {
        heading: '1. Champ d’application',
        paragraphs: [
          'Les présentes conditions régiront l’utilisation du site internet de Zuraio et des supports marketing associés.',
        ],
        todo: 'À CONFIRMER : Examen juridique requis — définir le champ d’application ainsi que les services inclus et exclus.',
      },
      {
        heading: '2. Utilisation du site internet',
        paragraphs: [
          'Les utilisations autorisées, les comportements interdits et les règles d’utilisation acceptable seront définis ici.',
        ],
        todo: 'À COMPLÉTER : Insérer les conditions d’utilisation approuvées du site internet.',
      },
      {
        heading: '3. Propriété intellectuelle',
        paragraphs: [
          'La propriété des contenus du site internet et des marques, ainsi que les conditions de leur réutilisation, seront définies ici.',
        ],
        todo: 'À CONFIRMER : Vérifier les mentions relatives à la propriété intellectuelle et aux licences.',
      },
      {
        heading: '4. Réserves',
        paragraphs: [
          'Les descriptions de produits, les démonstrations et les résumés techniques figurant sur ce site internet sont fournis uniquement à titre informatif, sauf s’ils font l’objet d’un accord distinct.',
        ],
        todo: 'À CONFIRMER : Faire examiner les réserves relatives au marketing et aux produits par un conseil juridique.',
      },
      {
        heading: '5. Limitation de responsabilité',
        paragraphs: [
          'Les limitations de responsabilité applicables à l’utilisation du site internet seront définies ici.',
        ],
        todo: 'À COMPLÉTER : Insérer une clause de limitation de responsabilité approuvée par un conseil juridique.',
      },
      {
        heading: '6. Droit applicable',
        paragraphs: ['Le droit applicable et le for seront précisés ici.'],
        todo: 'À CONFIRMER : Vérifier le droit applicable et le for avec le conseil juridique.',
      },
      {
        heading: '7. Contact',
        paragraphs: [
          'Pour toute question concernant les présentes conditions : <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'À CONFIRMER : Vérifier l’adresse de contact après validation des conditions.',
      },
    ],
  },

  cookies: {
    banners: [
      {
        type: 'status',
        label: 'TEXTE PROVISOIRE — AUCUNE BANNIÈRE DE COOKIES ACTIVE',
        text: 'Ce contenu est uniquement destiné à la phase de développement. Aucun gestionnaire de consentement aux cookies n’est encore connecté à l’environnement de production. Les catégories et les options ci-dessous sont fournies à titre d’illustration jusqu’à la fin de l’examen juridique et technique.',
      },
    ],
    sections: [
      {
        heading: '1. Que sont les cookies ?',
        paragraphs: [
          'Les cookies et technologies similaires peuvent être utilisés pour faire fonctionner le site internet, mémoriser les préférences, mesurer l’utilisation ou prendre en charge des services intégrés.',
        ],
        todo: 'À COMPLÉTER : Répertorier les technologies réellement utilisées après l’audit.',
      },
      {
        heading: '2. Catégories de cookies',
        paragraphs: ['Les catégories suivantes sont provisoires jusqu’à la réalisation d’un audit des cookies :'],
        list: [
          { strong: 'Strictement nécessaires', text: ' — indispensables au fonctionnement de base du site' },
          { strong: 'Préférences', text: ' — choix de langue ou d’interface' },
          { strong: 'Analyse', text: ' — mesure agrégée de l’utilisation' },
          { strong: 'Marketing', text: ' — uniquement si cette catégorie est expressément approuvée et mise en œuvre' },
        ],
        todo: 'À COMPLÉTER : Répertorier les catégories de cookies et les fournisseurs réellement utilisés.',
      },
      {
        heading: '3. Vos choix',
        paragraphs: [
          'Un centre de préférences permettra aux visiteurs d’accepter ou de refuser les cookies non essentiels lorsque la loi l’exige.',
        ],
        todoBlock:
          'À COMPLÉTER : Intégrer un gestionnaire de consentement approuvé. Aucune fausse action « Enregistrer les préférences » ne doit être affichée tant qu’un véritable outil n’est pas connecté.',
      },
      {
        heading: '4. Informations complémentaires',
        paragraphs: [
          'Consultez également notre <a href="privacy.html">politique de confidentialité provisoire</a> pour de plus amples informations sur le traitement des données.',
        ],
        todo: 'À COMPLÉTER : Ajouter un lien vers la politique de confidentialité définitive après sa validation.',
      },
      {
        heading: '5. Contact',
        paragraphs: [
          'Pour toute question relative aux cookies et à la protection des données : <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
        todo: 'À CONFIRMER : Vérifier l’adresse de contact.',
      },
    ],
  },
};
