import { privacyPage } from './privacy-copy-fr.js';

export const legalPages = {
  impressum: {
    sections: [
      {
        heading: 'Exploitant de ce site',
        type: 'dl',
        items: [
          { dt: 'Raison sociale et forme juridique', dd: 'À confirmer' },
          { dt: 'Adresse postale', dd: 'À confirmer' },
        ],
      },
      {
        heading: 'Contact',
        type: 'dl',
        items: [{ dt: 'E-mail', dd: '', mailto: true }],
      },
      {
        heading: 'Registre du commerce',
        type: 'dl',
        items: [{ dt: 'Inscription et canton', dd: 'À confirmer' }],
      },
      {
        heading: 'Identification de l’entreprise',
        type: 'dl',
        items: [{ dt: 'Numéro d’identification des entreprises (IDE)', dd: 'À confirmer' }],
      },
      {
        heading: 'Taxe sur la valeur ajoutée',
        type: 'dl',
        items: [{ dt: 'Assujettissement à la TVA et numéro de TVA', dd: 'À confirmer' }],
      },
      {
        heading: 'Contenu et liens externes',
        paragraphs: [
          'Nous apportons le plus grand soin au contenu de ce site. Il est fourni à titre d’information générale et peut être modifié. Les sites accessibles par des liens sont exploités par des tiers ; leurs propres informations et conditions s’appliquent à leur contenu.',
        ],
      },
      {
        heading: 'Droits d’auteur',
        paragraphs: [
          'Le contenu de ce site est protégé dans la mesure prévue par le droit applicable. Les droits des tiers sont réservés. Toute utilisation au-delà de ce que la loi autorise nécessite l’accord du titulaire des droits concerné.',
        ],
      },
      {
        heading: 'Protection des données',
        paragraphs: [
          'Vous trouverez des informations sur notre traitement des données personnelles dans notre <a href="privacy.html">déclaration de protection des données</a>.',
        ],
      },
    ],
  },

  privacy: privacyPage,

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
