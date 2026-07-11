/** Structured internal review data — rendered when INTERNAL_REVIEW_MODE is true. */

export const STATUS_LABELS = {
  approved: 'APPROVED',
  draft: 'DRAFT',
  placeholder: 'PLACEHOLDER',
  'needs-verification': 'VERIFY WITH MICKEY',
  'missing-asset': 'ASSET NEEDED',
  'legal-review': 'LEGAL REVIEW',
  'technical-verification': 'NEEDS TECHNICAL VERIFICATION',
  'commercial-verification': 'NEEDS COMMERCIAL AND TECHNICAL VERIFICATION',
  'under-review': 'UNDER REVIEW',
  'technical-debt': 'TECHNICAL DEBT',
  'open-decision': 'OPEN DECISION',
  'product-vision': 'PRODUCT VISION / VERIFY',
  'currently-accepted': 'CURRENTLY ACCEPTED',
  'not-connected': 'NOT CONNECTED',
  missing: 'MISSING',
  'language-review': 'NEEDS LANGUAGE REVIEW',
  'not-active': 'NOT ACTIVE',
};

export const statusLegend = [
  { status: 'approved', definition: 'Copy or design has been agreed and may remain.' },
  { status: 'draft', definition: 'Suitable for review but not final.' },
  { status: 'placeholder', definition: 'Shows intended structure but must be replaced.' },
  { status: 'needs-verification', definition: 'Requires confirmation from Mickey or the technical team.' },
  { status: 'legal-review', definition: 'Must not be published as a legal or compliance claim yet.' },
  { status: 'missing-asset', definition: 'The layout is ready but the final image, logo or file is absent.' },
];

export const globalTodos = [
  {
    id: 'hero-finalisation',
    title: 'HERO FINALISATION',
    owner: 'Samuel / Roland',
    body:
      'The current hero image contains baked-in text, trust points and button graphics. Once the final hero wording and image treatment are approved, rebuild the headline, body, CTA and trust points as real HTML and use the image only as the background or visual layer.',
  },
  {
    id: 'integration-logos',
    title: 'INTEGRATION LOGOS',
    owner: 'Mickey / Roland',
    body: 'Supply approved official logo assets and confirm permitted use.',
  },
  {
    id: 'integration-availability',
    title: 'INTEGRATION AVAILABILITY',
    owner: 'Mickey',
    body:
      'Confirm whether each named integration is available, in pilot, planned or subject to custom assessment. Do not publicly display availability statuses until confirmed.',
  },
];

export const dataControlCardReview = [
  {
    key: 'swiss-hosting',
    title: 'HOSTED IN SWITZERLAND',
    status: 'draft',
    owner: 'Mickey / Roland',
    note: 'Check exact hosting arrangement and whether “kept in Switzerland” is correct for all offered deployment models.',
  },
  {
    key: 'access-rules',
    title: 'ACCESS FOLLOWS YOUR RULES',
    status: 'needs-verification',
    owner: 'Mickey',
    note: 'Confirm the exact relationship between user identity, source permissions and connected-system permissions.',
  },
  {
    key: 'sources',
    title: 'ANSWERS SHOW THEIR SOURCES',
    status: 'needs-verification',
    owner: 'Mickey',
    note: 'Confirm which outputs show sources by default and which depend on configuration.',
  },
  {
    key: 'reviewed',
    title: 'BUILT TO BE REVIEWED',
    status: 'needs-verification',
    owner: 'Mickey',
    note: 'Confirm what prompts, sources, outputs and review events are actually retained.',
  },
  {
    key: 'on-premise',
    title: 'ON-PREMISE AND MODEL CHOICE',
    status: 'commercial-verification',
    owner: 'Mickey / Roland',
    note: 'Confirm supported deployment patterns and how model choice is presented commercially.',
  },
];

export const footerReviewItems = [
  {
    label: 'IMPRESSUM',
    status: 'placeholder',
    owner: 'Roland',
    action:
      'Needs verified company name, legal form, address, authorised representatives, registration details and UID/VAT information.',
  },
  {
    label: 'PRIVACY',
    status: 'legal-review',
    owner: 'Roland / legal reviewer',
    action:
      'Needs verified website-hosting, analytics, cookies, form-processing and retention information.',
  },
  {
    label: 'COOKIE SETTINGS',
    status: 'placeholder',
    owner: 'Samuel / Roland',
    action: 'Requires a decision on whether analytics or non-essential cookies are used.',
  },
  {
    label: 'OFFICE / MAP',
    status: 'missing-asset',
    owner: 'Roland',
    action: 'Add only after the official address is confirmed.',
  },
  {
    label: 'CONTACT DETAILS',
    status: 'needs-verification',
    owner: 'Roland',
    action: 'Confirm email, telephone and address before publication.',
  },
];

export const languageReview = [
  { label: 'ENGLISH COPY', owner: 'Samuel', status: 'draft', action: 'Draft / review in progress.' },
  {
    label: 'GERMAN COPY',
    owner: 'Roland / German reviewer',
    status: 'language-review',
    action: 'Needs language review before publication.',
  },
  { label: 'PORTUGUESE', owner: 'Future', status: 'not-active', action: 'Not active — do not enable.' },
];

const pageReviewById = {
  homepage: {
    page: 'Homepage',
    items: [
      {
        area: 'Hero copy',
        status: 'under-review',
        owner: 'Samuel / Group',
        action: 'Compare the five options and select one final headline, paragraph and CTA.',
      },
      {
        area: 'Hero image',
        status: 'placeholder',
        owner: 'Roland / Samuel',
        action: 'Compare the floating product interface with the laptop-screen treatment and select the final image.',
      },
      {
        area: 'Hero baked-in text',
        status: 'technical-debt',
        owner: 'Cursor implementation after approval',
        action: 'Replace text and links baked into the image with semantic HTML.',
      },
      {
        area: 'Green line',
        status: 'open-decision',
        owner: 'Group / Mickey / Roland',
        action: 'Decide whether to retain it; if retained, use Mickey’s hand-drawn route and ensure the page works without it.',
      },
      {
        area: 'Integration logos',
        status: 'missing-asset',
        owner: 'Mickey / Roland',
        action: 'Supply official logo files.',
      },
      {
        area: 'Integration list',
        status: 'needs-verification',
        owner: 'Mickey',
        action: 'Confirm available, pilot, planned and custom-assessment integrations.',
      },
      {
        area: 'Proactive email demo',
        status: 'product-vision',
        owner: 'Mickey / Samuel',
        action: 'Confirm which parts are live, in pilot or future-facing.',
      },
      {
        area: 'Data-control copy',
        status: 'needs-verification',
        owner: 'Mickey',
        action:
          'Confirm hosting, permissions, source display, review records, on-premise and model-choice wording.',
      },
      {
        area: 'Team image',
        status: 'currently-accepted',
        owner: 'Samuel',
        action: 'Confirm whether the generated team image remains or should later be replaced with a real team photograph.',
      },
      {
        area: 'Final CTA',
        status: 'draft',
        owner: 'Samuel / Roland',
        action: 'Confirm booking destination and form or calendar workflow.',
      },
    ],
  },
  about: {
    page: 'About',
    items: [
      {
        area: 'Team roles and biographies',
        status: 'placeholder',
        owner: 'Each team member / Samuel',
        action: 'Supply approved title, short biography, photograph and LinkedIn link.',
      },
      {
        area: 'Team image',
        status: 'currently-accepted',
        owner: 'Samuel',
        action: 'Confirm whether the generated team image remains or should later be replaced.',
      },
    ],
  },
  contact: {
    page: 'Contact',
    items: [
      {
        area: 'Form backend',
        status: 'not-connected',
        owner: 'Roland / developer',
        action: 'Connect the form to an approved email, CRM or form service.',
      },
      {
        area: 'Booking link',
        status: 'missing',
        owner: 'Samuel / Roland',
        action: 'Confirm calendar or demo-booking destination.',
      },
      {
        area: 'Privacy consent',
        status: 'legal-review',
        owner: 'Roland / legal reviewer',
        action: 'Confirm form-processing and privacy wording.',
      },
    ],
  },
  dataControl: {
    page: 'Data control',
    items: [
      {
        area: 'Data control page',
        status: 'needs-verification',
        owner: 'Mickey',
        action:
          'Review customer ownership language, model-training policy, access controls, tenant separation, encryption, key management, security logging, support access and data minimisation.',
      },
    ],
  },
  technicalArchitecture: {
    page: 'Technical architecture',
    items: [
      {
        area: 'Technical architecture',
        status: 'needs-verification',
        owner: 'Mickey',
        action:
          'Review identity-provider support, permission handling, connector architecture, model selection, tool selection, tenant boundaries, storage, retention, audit events, monitoring, support access and incident processes.',
      },
    ],
  },
  deploymentModels: {
    page: 'Deployment models',
    items: [
      {
        area: 'Deployment models',
        status: 'commercial-verification',
        owner: 'Mickey / Roland',
        action:
          'Review on-premise capability, hybrid-routing model, Swiss-hosted setup, infrastructure responsibility, operational responsibility, hardware requirements, model limitations and implementation effort.',
      },
    ],
  },
  aiGovernance: {
    page: 'AI governance',
    items: [
      {
        area: 'AI governance page',
        status: 'draft',
        owner: 'Samuel / Roland / legal reviewer',
        action:
          'Review governance language, human oversight, logging, transparency, responsibility, EU AI Act references and GDPR / DSG wording. Do not state compliance-ready claims.',
      },
    ],
  },
  impressum: {
    page: 'Impressum',
    items: [
      {
        area: 'Impressum',
        status: 'placeholder',
        owner: 'Roland',
        action: 'Insert verified company details before publication.',
      },
    ],
  },
  privacy: {
    page: 'Privacy',
    items: [
      {
        area: 'Privacy policy',
        status: 'legal-review',
        owner: 'Roland / legal reviewer',
        action: 'Complete and verify privacy policy before publication.',
      },
    ],
  },
  cookies: {
    page: 'Cookie settings',
    items: [
      {
        area: 'Cookie settings',
        status: 'placeholder',
        owner: 'Samuel / Roland',
        action: 'Publish actual cookie categories after legal and technical review.',
      },
    ],
  },
  terms: {
    page: 'Terms of use',
    items: [
      {
        area: 'Terms of use',
        status: 'legal-review',
        owner: 'Roland / legal reviewer',
        action: 'Complete terms with qualified legal counsel before publication.',
      },
    ],
  },
  integrations: {
    page: 'Integrations',
    items: [
      {
        area: 'Integration logos',
        status: 'missing-asset',
        owner: 'Mickey / Roland',
        action: 'Supply approved official logo assets.',
      },
      {
        area: 'Integration availability',
        status: 'needs-verification',
        owner: 'Mickey',
        action: 'Confirm which integrations are available, in pilot or planned.',
      },
    ],
  },
  howItHelps: {
    page: 'How it helps',
    items: [
      {
        area: 'Use cases',
        status: 'draft',
        owner: 'Samuel',
        action: 'Confirm use-case examples reflect agreed product scope.',
      },
    ],
  },
  knowledge: {
    page: 'Knowledge',
    items: [
      {
        area: 'Knowledge sources',
        status: 'needs-verification',
        owner: 'Mickey',
        action: 'Confirm supported knowledge source types and connectors.',
      },
    ],
  },
  resources: {
    page: 'Resources',
    items: [
      {
        area: 'Pressroom',
        status: 'placeholder',
        owner: 'Samuel / Roland',
        action: 'Add approved press materials when available.',
      },
    ],
  },
  faq: {
    page: 'FAQ',
    items: [
      {
        area: 'FAQ answers',
        status: 'draft',
        owner: 'Samuel / Mickey',
        action: 'Verify technical and commercial accuracy of FAQ content.',
      },
    ],
  },
};

export function getPageReviewStatus() {
  const pageId = document.body.dataset.page || 'homepage';
  const key = pageId === 'homepage' || !document.body.dataset.page ? 'homepage' : pageId;
  if (pageReviewById[key]) return pageReviewById[key];
  if (document.body.dataset.page && pageReviewById[document.body.dataset.page]) {
    return pageReviewById[document.body.dataset.page];
  }
  const path = location.pathname.split('/').pop()?.replace('.html', '') || 'homepage';
  const pathMap = {
    index: 'homepage',
    'data-control': 'dataControl',
    'technical-architecture': 'technicalArchitecture',
    'deployment-models': 'deploymentModels',
    'ai-governance': 'aiGovernance',
    'how-it-helps': 'howItHelps',
  };
  const mapped = pathMap[path] ?? path;
  return pageReviewById[mapped] ?? { page: 'Page', items: [] };
}
