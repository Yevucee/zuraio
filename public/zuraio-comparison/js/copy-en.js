export const heroOptions = [
  {
    headline: 'A digital executive assistant for every employee.',
    emphasis: 'assistant',
    paragraph:
      'Zuraio gives everyone in your company an intelligent assistant that can find information, answer questions, prepare documents and help get work done.',
    cta: "Meet your company's AI assistant",
    ctaHref: 'contact.html',
  },
  {
    headline: 'Give every employee the power of an executive assistant.',
    emphasis: 'executive assistant',
    paragraph:
      'Zuraio connects your company\u2019s knowledge and tools, giving your people instant support with research, writing, analysis and everyday tasks.',
    cta: 'See how Zuraio works',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'An AI assistant that knows your company.',
    emphasis: 'AI assistant',
    paragraph:
      'Zuraio understands your documents, meetings, emails and business knowledge, so your employees can find answers and complete work faster.',
    cta: 'Discover the Zuraio AI Hub',
    ctaHref: 'knowledge.html',
  },
  {
    headline: 'The intelligent workspace for your entire company.',
    emphasis: 'workspace',
    paragraph:
      'Search company knowledge, create documents, analyse information and complete everyday work through one secure AI Hub.',
    cta: 'See what it can do',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'An AI assistant for everyone. Powered by your company.',
    emphasis: 'AI assistant',
    paragraph:
      'Zuraio turns your business knowledge into secure, practical support for every employee.',
    cta: 'Explore Zuraio',
    ctaHref: 'how-it-helps.html',
  },
];

export const problemOptions = [
  {
    heading: 'Let Zuraio make your company knowledge easier to find and use.',
  },
  {
    heading: 'Let Zuraio find your information and move the work forward.',
  },
  {
    heading: 'Let Zuraio connect your knowledge and simplify the work.',
  },
  {
    heading: 'Let Zuraio help your employees find answers and get work done.',
  },
  {
    heading: 'Let Zuraio make your company knowledge easier to find, understand and use.',
  },
];

export const trustSignals = [
  { label: 'Swiss hosting available', href: 'deployment-models.html#swiss-hosted' },
  { label: 'Sources shown', href: 'knowledge.html' },
  { label: 'Approved company knowledge', href: 'knowledge.html' },
  { label: 'You remain in control', href: 'data-control.html' },
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
  'Voice notes',
];

export const nav = {
  main: [
    { label: 'How it helps', href: 'how-it-helps.html' },
    { label: 'Knowledge', href: 'knowledge.html' },
    { label: 'Integrations', href: 'integrations.html' },
    { label: 'Data control', href: 'data-control.html' },
  ],
  technical: [
    { label: 'Deployment models', href: 'deployment-models.html' },
    { label: 'Technical architecture', href: 'technical-architecture.html' },
    { label: 'AI governance', href: 'ai-governance.html' },
    { label: 'Resources', href: 'resources.html' },
    { label: 'FAQ', href: 'faq.html' },
  ],
  about: { label: 'About', href: 'about.html' },
};

export const ui = {
  bookDemo: 'Book a demo',
  technical: 'Technical',
  previous: '← Previous',
  next: 'Next →',
  optionOf: (n) => `Option ${n} of 5`,
  optionLabel: (n) => `Option ${n}`,
  previousAria: 'Previous hero option',
  nextAria: 'Next hero option',
  heroOptionsGroup: 'Hero messaging options',
  trustAria: 'Trust signals',
  primaryNavAria: 'Primary',
  logoAlt: 'Zuraio – own your data',
  langEn: 'EN',
  langDe: 'DE',
  langFr: 'FR',
  langIt: 'IT',
  languageLabel: 'Language',
  languageContact: 'Language / Contact',
  languageActive: 'active',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  zuraioHome: 'Zuraio home',
};

export const home = {
  meta: {
    title: 'Zuraio — AI for Swiss companies that need control of their data',
    description:
      'Zuraio — A digital executive assistant for every employee. AI for Swiss companies that need control of their data.',
  },
  problem: {
    marker: 'Recognise this?',
    headingHtml: 'Your employees spend too much time<br>searching for information.',
    body: 'Important knowledge is spread across emails, documents, meetings and business systems. People lose time searching, preparing and repeating work that has already been done.',
    cards: [
      {
        title: 'Knowledge is scattered',
        body: 'Information is spread across emails, documents, meetings and business systems.',
      },
      {
        title: 'Routine work takes time',
        body: 'Employees spend hours preparing summaries, reports and follow-ups.',
      },
      {
        title: 'Answers lack context',
        body: 'Without the right sources and history, answers are harder to find and trust.',
      },
    ],
    link: 'See practical use cases →',
    illustration: {
      labels: {
        whereIsIt: 'Where is it?',
        whichDocument: 'Which document?',
        latestVersion: 'Is this the latest version?',
        whoKnows: 'Who knows?',
        doneBefore: 'Has this been done before?',
        whoHasAccess: 'Who has access?',
      },
    },
  },
  different: {
    marker: 'More than a chatbot',
    heading: 'Your company knowledge, working for your people.',
    headingEmphasis: 'company knowledge',
    body: 'Generic AI only knows what someone manually provides. Zuraio securely connects to approved company knowledge, understands the context of the person asking and prepares sourced work for review.',
    bridge:
      'Behind the scenes, Zuraio can coordinate specialised AI assistants, suitable models and connected business systems. Employees work through one simple interface.',
    bridgeLink: 'Explore the technical architecture →',
    without: {
      title: 'Without Zuraio',
      titleEmphasis: null,
      subtitle: 'Multiple manual steps',
      steps: [
        {
          title: 'Start a new conversation',
          body: 'Ask a generic AI tool.',
        },
        {
          title: 'Find and add the relevant files',
          body: 'Search for documents and upload them manually.',
        },
        {
          title: 'Explain the company context',
          body: 'Provide the background the AI does not know.',
        },
        {
          title: 'Check the answer',
          body: 'Verify the information against the original sources.',
        },
        {
          title: 'Refine and compile',
          body: 'Correct the result and bring the information together.',
        },
        {
          title: 'Repeat next time',
          body: 'Start again when a new conversation begins.',
        },
      ],
    },
    with: {
      title: 'With Zuraio',
      titleEmphasis: null,
      subtitle: 'One connected workflow',
      steps: [
        {
          title: 'Ask Zuraio',
          body: 'Ask your question in natural language.',
        },
        {
          title: 'Uses permitted company knowledge',
          body: 'Connects to the information the employee is allowed to access.',
        },
        {
          title: 'Prepares an answer with sources',
          body: 'Creates an answer, document or summary and shows the sources used.',
        },
        {
          title: 'Review and decide',
          body: 'The employee checks the result and decides what happens next.',
        },
      ],
    },
  },
  integrations: {
    heading: 'Works with the tools your team already uses.',
    body: 'Zuraio works with the email, document, messaging and business tools your employees already use.',
    clarify: 'Connections are configured around your approved tools, permissions and deployment.',
    link: 'View all integrations →',
  },
  demo: {
    heading: 'See your assistant working.',
    body: 'Zuraio gathers relevant company context, prepares the work and shows its sources for your review.',
    caption:
      'Zuraio can prepare a customer reply using previous correspondence, current documents and relevant company information. The employee reviews the result and decides what happens next.',
    image: '../zuraio/assets/zuraio-demo-mail.png',
    imageAlt: 'Zuraio email assistant — draft reply prepared with company context and visible sources.',
    steps: [
      { title: 'Ask a question', body: null },
      { title: 'Zuraio gathers permitted company context', body: null },
      { title: 'Review the answer and its sources', body: null },
    ],
  },
  dataControl: {
    marker: 'Data control',
    positioning: 'Built for Swiss SMEs that want the benefits of AI without losing control of company data.',
    heading: 'AI, without handing over the keys.',
    headingEmphasis: 'keys',
    body: 'Zuraio gives companies control over where it runs, which information it can use, who can access it and how its work is reviewed.',
    cards: [
      { title: 'Swiss hosting available', body: 'A Swiss-hosted option for companies that want their environment and company data kept in Switzerland.' },
      { title: 'Access follows your rules', body: 'People work only with the information they are permitted to use.' },
      { title: 'Answers show their sources', body: 'Users can check where information came from before relying on it.' },
      { title: 'Built to be reviewed', body: 'Requests, sources and outputs can be easier to trace according to the agreed setup.' },
    ],
    note: '<b>Need stronger control?</b> On-premise options and model choice can be discussed for companies with stricter internal requirements.',
    link: 'Explore data control and security →',
  },
  reviewable: {
    marker: 'AI governance',
    heading: 'AI you can explain later.',
    headingEmphasis: 'explain',
    bodyParagraphs: [
      'AI use is becoming easier to scrutinise. Customers, auditors and regulators will increasingly expect companies to explain where information came from and how AI was used.',
      'Zuraio helps you stay prepared with source-backed answers and reviewable AI.',
    ],
    steps: [
      { label: 'What was asked', title: 'The request', body: 'Keep a record of the prompt or task.' },
      { label: 'What was used', title: 'The sources', body: 'See exactly which approved company information was used.' },
      { label: 'What was produced', title: 'The output', body: 'Review the answer, draft or summary that was created.' },
      { label: 'Who approved it', title: 'The review', body: 'Know who reviewed, edited or approved the final result.' },
    ],
    link: 'Learn about AI governance →',
  },
  origin: {
    marker: 'Why we built it',
    heading: 'Made for the work we had to do ourselves.',
    paragraphs: [
      'We built Zuraio because existing AI tools could generate answers, but they did not understand our company knowledge, access rules or working context.',
      'We wanted an assistant that could work with real business information while keeping people in control of what it uses and produces.',
      'That became Zuraio.',
    ],
    link: 'Meet the team →',
    caption: 'Built because we needed it ourselves.',
    imageAlt: 'The Zuraio team at work — a restrained supporting photograph.',
  },
  faq: {
    heading: 'Common questions',
    link: 'View all questions →',
    items: [
      {
        question: 'What is Zuraio?',
        answer:
          'Zuraio is designed as a controlled AI layer for companies — connecting approved internal knowledge and business systems to practical workflows for meetings, email, reports, search and follow-up. It is intended for companies that want AI benefits while keeping control of data, access and model choice.',
      },
      {
        question: 'Is our company data kept in Switzerland?',
        answer:
          'This depends on your chosen deployment model. Zuraio is designed to support local, hybrid and Swiss-hosted options with configurable data residency. See deployment models for an overview of what can be agreed for your setup.',
      },
      {
        question: 'Can employees access information they are not permitted to see?',
        answer:
          'Zuraio is designed around permissions, roles and approved data sources so that AI assistance reflects your company\u2019s access model, not a separate unrestricted layer. The exact behaviour depends on how sources and permissions are configured.',
      },
      {
        question: 'Can we see where an answer came from?',
        answer:
          'Where internal knowledge sources are connected, Zuraio is designed to show references to the documents or systems behind an answer. The exact display depends on your configuration and connected sources.',
      },
      {
        question: 'Does Zuraio make decisions or send things automatically?',
        answer:
          'Zuraio is designed to prepare work for review. What can be sent, approved or acted on automatically depends on your agreed setup, permissions and workflow rules.',
      },
      {
        question: 'Which tools can Zuraio connect to?',
        answer:
          'Zuraio is designed to integrate with email, document storage, collaboration tools, CRM, ERP and other business systems. Integration availability varies by tool and deployment. See integrations for category status.',
      },
      {
        question: 'Do we have to replace our existing systems?',
        answer:
          'No. Zuraio is designed to work alongside existing tools rather than replace them. Connections are configured around your approved systems, permissions and deployment scope.',
      },
      {
        question: 'How long does implementation take?',
        answer:
          'Implementation scope depends on your systems, data sources, permissions model and deployment choice. A typical path starts with selected use cases and expands carefully after review. Contact us to discuss your setup.',
      },
      {
        question: 'Do you provide training and ongoing support?',
        answer:
          'Training and support arrangements depend on your deployment and commercial agreement. These should be confirmed before publication as part of your setup plan.',
      },
      {
        question: 'Is Zuraio intended for Swiss SMEs?',
        answer:
          'Zuraio is designed for Swiss companies and mid-sized organisations that need control over data, access, AI model choice and internal knowledge — including owner-managed businesses and teams that want practical AI rather than abstract experiments.',
      },
    ],
  },
  final: {
    heading: 'See what your own assistant could take off your desk.',
    body: 'We will look at your current tools, company knowledge and data-control requirements, then identify where Zuraio could help first.',
    primaryCta: 'Book a private demo',
    secondaryCta: 'See the assistant working',
    supporting: 'Your company. Your information. Your approval.',
  },
};

export const pages = {
  howItHelps: {
    title: 'How it helps — Zuraio',
    hero: { marker: 'How it helps', heading: 'Less administration. More valuable work.', headingEmphasis: 'valuable', lede: 'Zuraio helps people prepare, search, draft, summarise and follow up using approved company knowledge. It works alongside existing systems and brings the relevant context together when it is needed.' },
  },
  knowledge: {
    title: 'Knowledge — Zuraio',
    hero: { marker: 'Knowledge', heading: 'Turn scattered company information into usable context.', headingEmphasis: 'usable', lede: 'Important knowledge is often spread across inboxes, shared drives, meeting notes, CRM records and business systems. Zuraio is designed to bring approved information together so people can find, understand and use it more effectively.' },
  },
  integrations: {
    title: 'Integrations — Zuraio',
    hero: { marker: 'Integrations', heading: 'Works alongside the systems your team already uses.', headingEmphasis: 'already', lede: 'Zuraio is designed to connect company knowledge and workflows without forcing teams to replace systems that already work.' },
  },
  dataControl: {
    title: 'Data control & security — Zuraio',
    hero: { marker: 'Data control & security', heading: 'Your data. Your rules. Your deployment.', headingEmphasis: 'rules', lede: 'Zuraio is designed to help companies use AI without giving up control over company knowledge, permissions or infrastructure choices.' },
  },
  deploymentModels: {
    title: 'Deployment models — Zuraio',
    hero: { marker: 'Deployment models', heading: 'Local, hybrid or Swiss-hosted cloud.', headingEmphasis: 'Swiss-hosted', lede: 'Different companies have different requirements for control, performance, infrastructure and cost. Zuraio can be configured around the deployment model agreed for the customer.' },
  },
  technicalArchitecture: {
    title: 'Technical architecture — Zuraio',
    hero: { marker: 'Technical architecture', heading: 'A controlled path from request to reviewed output.', headingEmphasis: 'controlled', lede: 'Zuraio connects users, approved company sources, business tools and AI models through a governed execution layer. The exact architecture depends on the customer environment and deployment model.' },
  },
  aiGovernance: {
    title: 'AI governance — Zuraio',
    hero: { marker: 'AI governance', heading: 'AI use that can be understood and reviewed.', headingEmphasis: 'reviewed', lede: 'Responsible company AI requires more than a model. Organisations need clear rules for access, data use, human review, logging and accountability.' },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: { marker: 'FAQ', heading: 'Practical questions about using Zuraio at work.', headingEmphasis: 'Practical', lede: 'Answers to common questions about deployment, permissions, data control and everyday use.' },
  },
  about: {
    title: 'About — Zuraio',
    hero: { marker: 'About Zuraio', heading: 'Built by people who needed a better way to work.', headingEmphasis: 'better', lede: 'Zuraio began with a practical problem. Existing AI tools were useful, but they did not combine company knowledge, data control and everyday work in the way we needed.' },
  },
  contact: {
    title: 'Contact — Zuraio',
    hero: { marker: 'Contact', heading: 'Find the first practical use case for your company.', headingEmphasis: 'practical', lede: 'We will look at your current tools, company knowledge and data-control requirements, then identify where Zuraio could help first.' },
  },
  resources: {
    title: 'Resources — Zuraio',
    hero: { marker: 'Resources', heading: 'Technical and practical information about Zuraio.', headingEmphasis: 'practical', lede: 'Guides, overviews and reference material for teams evaluating or deploying Zuraio.' },
  },
  privacy: {
    title: 'Privacy — Zuraio',
    hero: { marker: 'Legal', heading: 'Privacy policy.', lede: 'This page is a structured placeholder. A complete privacy policy must be prepared and reviewed by qualified legal counsel before publication.' },
  },
  impressum: {
    title: 'Impressum — Zuraio',
    hero: { marker: 'Legal', heading: 'Impressum.', lede: 'This page is a structured placeholder. All company details below must be verified and inserted before publication.' },
  },
  terms: {
    title: 'Terms of use — Zuraio',
    hero: { marker: 'Legal', heading: 'Terms of use.', lede: 'This page is a structured placeholder. Complete terms must be prepared and reviewed by qualified legal counsel before publication.' },
  },
  cookies: {
    title: 'Cookie settings — Zuraio',
    hero: { marker: 'Legal', heading: 'Cookie settings.', lede: 'This page is a structured placeholder. Actual cookie categories and controls will be published after legal and technical review.' },
  },
};

export const site = {
  tagline: 'AI for Swiss companies that need control of their data.',
};

export const footerGroups = [
  {
    title: 'Product',
    links: [
      { label: 'How Zuraio helps', href: 'how-it-helps.html' },
      { label: 'Knowledge', href: 'knowledge.html' },
      { label: 'Integrations', href: 'integrations.html' },
      { label: 'Use cases', href: 'how-it-helps.html#use-cases' },
      { label: 'Book a demo', href: 'contact.html' },
    ],
  },
  {
    title: 'Data & Security',
    links: [
      { label: 'Data control', href: 'data-control.html' },
      { label: 'Swiss hosting', href: 'deployment-models.html#swiss-hosted' },
      { label: 'Deployment models', href: 'deployment-models.html' },
      { label: 'Technical architecture', href: 'technical-architecture.html' },
      { label: 'AI governance', href: 'ai-governance.html' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: 'about.html' },
      { label: 'Contact', href: 'contact.html' },
      { label: 'Resources', href: 'resources.html' },
      { label: 'Partners', href: 'contact.html#partnerships' },
      { label: 'Pressroom', href: 'resources.html#pressroom' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Privacy', href: 'privacy.html' },
      { label: 'Cookie settings', href: 'cookies.html' },
      { label: 'Terms of use', href: 'terms.html' },
    ],
  },
];
