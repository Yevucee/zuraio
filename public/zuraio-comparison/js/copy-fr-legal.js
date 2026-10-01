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
          { dt: 'Raison sociale', dd: '—' },
          { dt: 'Forme juridique', dd: '—' },
          { dt: 'Numéro IDE / CHE', dd: '—' },
        ],
      },
      {
        heading: 'Adresse du siège',
        type: 'dl',
        items: [
          { dt: 'Rue', dd: '—' },
          { dt: 'Code postal et localité', dd: '—' },
          { dt: 'Canton / pays', dd: '—' },
        ],
      },
      {
        heading: 'Contact',
        type: 'dl',
        items: [
          { dt: 'E-mail', dd: '', mailto: true },
          { dt: 'Téléphone', dd: '—' },
          { dt: 'Site internet', dd: '—' },
        ],
      },
      {
        heading: 'Représentation',
        type: 'dl',
        items: [
          { dt: 'Direction / personnes habilitées à signer', dd: '—' },
        ],
      },
      {
        heading: 'Registre du commerce',
        type: 'dl',
        items: [
          { dt: 'Registre', dd: '—' },
          { dt: 'Numéro d’inscription', dd: '—' },
        ],
      },
      {
        heading: 'TVA / fiscalité',
        type: 'dl',
        items: [{ dt: 'Numéro de TVA', dd: '—' }],
      },
      {
        heading: 'Responsable du contenu',
        type: 'dl',
        items: [{ dt: 'Responsabilité éditoriale', dd: '—' }],
      },
      {
        heading: 'Clause de non-responsabilité',
        paragraphs: [
          'Texte provisoire : le contenu de ce site internet est fourni uniquement à titre d’information générale. Malgré le soin apporté à sa préparation, nous ne garantissons pas son exactitude, son exhaustivité ni son actualité.',
        ],
      },
      {
        heading: 'Règlement des litiges',
      },
    ],
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
        paragraphs: ['—<br>—<br><a href=\"mailto:michael.wili@zuraio.ch\">michael.wili@zuraio.ch</a>'],
      },
      {
        heading: '2. Champ d’application',
        paragraphs: [
          'La présente politique décrira la manière dont nous traitons les données personnelles lorsque vous consultez ce site internet, envoyez une demande, utilisez Zuraio AI Hub ou interagissez avec nous d’une autre manière.',
        ],
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
      },
      {
        heading: '4. Finalités et bases juridiques',
        paragraphs: [
          'Les finalités du traitement peuvent notamment comprendre la réponse aux demandes, la fourniture du service, l’amélioration du produit, la sécurité et le respect des obligations légales.',
        ],
      },
      {
        heading: '5. Partage des données et sous-traitants',
        paragraphs: [
          'Nous pouvons partager des données avec des prestataires qui nous aident à exploiter le site internet et le produit, notamment pour l’hébergement, la messagerie électronique, l’analyse et les fournisseurs de modèles d’IA. Une liste actualisée des sous-traitants sera publiée ici.',
        ],
      },
      {
        heading: '6. Transferts internationaux',
        paragraphs: [
          'Lorsque des données sont transférées hors de Suisse ou de l’EEE, des garanties appropriées s’appliquent.',
        ],
      },
      {
        heading: '7. Conservation',
        paragraphs: [
          'Les données personnelles sont conservées uniquement aussi longtemps que nécessaire aux finalités décrites ou que l’exige la loi.',
        ],
      },
      {
        heading: '8. Vos droits',
        paragraphs: [
          'Selon le droit applicable, vous pouvez disposer de droits d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition et de portabilité des données. Vous pouvez également avoir le droit de déposer une réclamation auprès d’une autorité de contrôle.',
        ],
      },
      {
        heading: '9. Cookies et analyse',
        id: 'cookies',
        paragraphs: [
          'Ce site internet peut utiliser des cookies essentiels et, avec votre consentement lorsque celui-ci est requis, des cookies d’analyse. Un mécanisme de gestion des préférences en matière de cookies sera mis à disposition.',
        ],
      },
      {
        heading: '10. Sécurité',
        paragraphs: [
          'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de protéger les données personnelles. Les mesures précises dépendent du service et du modèle de déploiement.',
        ],
      },
      {
        heading: '11. Modifications de la présente politique',
        paragraphs: [
          'Nous pouvons mettre à jour cette politique de temps à autre. La version en vigueur sera publiée sur cette page avec une date actualisée.',
        ],
      },
      {
        heading: '12. Contact',
        paragraphs: [
          'Pour toute question relative à la protection des données : <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
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
      },
      {
        heading: '2. Utilisation du site internet',
        paragraphs: [
          'Les utilisations autorisées, les comportements interdits et les règles d’utilisation acceptable seront définis ici.',
        ],
      },
      {
        heading: '3. Propriété intellectuelle',
        paragraphs: [
          'La propriété des contenus du site internet et des marques, ainsi que les conditions de leur réutilisation, seront définies ici.',
        ],
      },
      {
        heading: '4. Réserves',
        paragraphs: [
          'Les descriptions de produits, les démonstrations et les résumés techniques figurant sur ce site internet sont fournis uniquement à titre informatif, sauf s’ils font l’objet d’un accord distinct.',
        ],
      },
      {
        heading: '5. Limitation de responsabilité',
        paragraphs: [
          'Les limitations de responsabilité applicables à l’utilisation du site internet seront définies ici.',
        ],
      },
      {
        heading: '6. Droit applicable',
        paragraphs: ['Le droit applicable et le for seront précisés ici.'],
      },
      {
        heading: '7. Contact',
        paragraphs: [
          'Pour toute question concernant les présentes conditions : <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
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
      },
      {
        heading: '3. Vos choix',
        paragraphs: [
          'Un centre de préférences permettra aux visiteurs d’accepter ou de refuser les cookies non essentiels lorsque la loi l’exige.',
        ],
      },
      {
        heading: '4. Informations complémentaires',
        paragraphs: [
          'Consultez également notre <a href="privacy.html">politique de confidentialité provisoire</a> pour de plus amples informations sur le traitement des données.',
        ],
      },
      {
        heading: '5. Contact',
        paragraphs: [
          'Pour toute question relative aux cookies et à la protection des données : <a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>',
        ],
      },
    ],
  },
};
