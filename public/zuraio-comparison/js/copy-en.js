export const heroOptions = [
  {
    headline: 'A digital executive assistant for every employee.',
    paragraph:
      'Zuraio gives everyone in your company an intelligent assistant that can find information, answer questions, prepare documents and help get work done.',
    cta: "Meet your company's AI assistant",
    ctaHref: 'contact.html',
  },
  {
    headline: 'Give every employee the power of an executive assistant.',
    paragraph:
      'Zuraio connects your company\u2019s knowledge and tools, giving your people instant support with research, writing, analysis and everyday tasks.',
    cta: 'See how Zuraio works',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'An AI assistant that knows your company.',
    paragraph:
      'Zuraio understands your documents, meetings, emails and business knowledge, so your employees can find answers and complete work faster.',
    cta: 'Discover the Zuraio AI Hub',
    ctaHref: 'knowledge.html',
  },
  {
    headline: 'The intelligent workspace for your entire company.',
    paragraph:
      'Search company knowledge, create documents, analyse information and complete everyday work through one secure AI Hub.',
    cta: 'See what it can do',
    ctaHref: '#assistant-demo',
  },
  {
    headline: 'An AI assistant for everyone. Powered by your company.',
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
  { label: 'Swiss hosted', href: 'deployment-models.html' },
  { label: 'Sources shown', href: 'knowledge.html' },
  { label: 'Company knowledge connected', href: 'knowledge.html' },
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
  },
  problem: {
    marker: 'Recognise this?',
    heading: 'Your company already has the answers. They are just hard to find.',
    body: 'Important knowledge is spread across emails, documents, meetings and business systems. People lose time searching, preparing and repeating work that has already been done.',
    cards: [
      { title: 'Knowledge is scattered', body: 'Important information sits across inboxes, files, meetings and company systems.' },
      { title: 'Administration takes over', body: 'Summaries, reports, preparation and follow-ups take time away from real work.' },
      { title: 'Answers lack context', body: 'People make slower decisions when they cannot see the full history or source.' },
      { title: 'Public AI creates uncertainty', body: 'Useful tools become risky when sensitive company knowledge is used without clear rules.' },
    ],
    link: 'See practical use cases →',
  },
  different: {
    marker: 'More than a chatbot',
    heading: 'Your company knowledge, working for your people.',
    body: 'Generic AI only knows what someone manually provides. Zuraio securely connects to approved company knowledge, understands the context of the person asking and prepares sourced work for review.',
    without: {
      title: 'Without Zuraio',
      subtitle: 'Typical process: up to 20 minutes',
      timeLabel: '~20 min',
      progressCompleting: 'Completing...',
      progressCompleted: 'Completed',
      steps: [
        {
          title: 'Ask generic AI',
          body: 'Start a new conversation',
        },
        {
          title: 'Add context manually',
          body: 'Find and upload files or explain the situation',
        },
        {
          title: 'Check generic output',
          body: 'Review and verify information',
        },
        {
          title: 'Refine and ask again',
          body: 'Add more details and clarify',
        },
        {
          title: 'Verify and compile',
          body: 'Cross-check and pull information together',
        },
        {
          title: 'Repeat next time',
          body: 'Start over with a new conversation',
        },
      ],
    },
    with: {
      title: 'With Zuraio',
      subtitle: 'Typical process: under 1 minute',
      timeLabel: '<1 min',
      progressCompleting: 'Completing...',
      progressCompleted: 'Completed.',
      steps: [
        {
          title: 'Ask Zuraio',
          body: 'Ask your question in natural language',
        },
        {
          title: 'Uses approved knowledge',
          body: 'Automatically connects to your company sources',
        },
        {
          title: 'Creates sourced work',
          body: 'Generates answers and drafts with references',
        },
        {
          title: 'Review and act',
          body: 'You review, verify and take action with confidence',
        },
      ],
    },
    integrationsStrip: {
      title: 'Works with the tools your team already uses.',
      link: 'View all integrations →',
      clarify: 'Connections depend on your company setup, approved tools and deployment scope.',
      tools: ['microsoft-365', 'google-workspace', 'outlook', 'sharepoint', 'hubspot', 'salesforce'],
    },
  },
  pillars: {
    heading: 'Everything your assistant needs to help.',
    items: [
      { title: 'Knowledge', body: 'Zuraio works with approved emails, documents, contacts, meeting notes and company systems.', link: 'Explore knowledge →', href: 'knowledge.html' },
      { title: 'Connections', body: 'It works alongside the tools your team already uses rather than forcing people to replace them.', link: 'View connections →', href: 'integrations.html' },
      { title: 'Safety', body: 'Hosting, access, sources and review rules remain under company control.', link: 'Read about data control →', href: 'data-control.html' },
    ],
  },
  integrations: {
    heading: 'Fits into the tools your team already uses.',
    body: 'Zuraio is designed to work alongside your existing email, documents, meetings, messages and business systems.',
    clarify: 'Specific connections depend on your company setup, approved tools and deployment scope.',
    link: 'View integrations →',
  },
  demo: {
    heading: 'See your assistant working.',
    body: 'Zuraio gathers the right company context, prepares the work and brings it back with sources for your approval.',
    disclaimer: 'Staged demonstration — capabilities depend on agreed deployment and permissions.',
    slides: [
      {
        id: 'mail',
        label: 'Email',
        heading: 'The reply is already waiting.',
        body: 'Long threads can be summarised and replies prepared using relevant company context. You review, edit and decide what gets sent.',
        alt: 'Zuraio email assistant — incoming mail with draft reply and sources.',
      },
      {
        id: 'project-summary',
        label: 'Project summary',
        heading: 'The full picture, already assembled.',
        body: 'Zuraio pulls together project context from emails, documents and notes so your team can see status without searching.',
        alt: 'Zuraio project summary — consolidated project overview with key details and sources.',
      },
      {
        id: 'appointment-reply',
        label: 'Appointment & reply',
        heading: 'Scheduling handled with context.',
        body: 'A client request is matched with calendar availability, relevant history and a draft reply ready for your approval.',
        alt: 'Zuraio appointment workflow — suggested times and draft reply prepared from company context.',
      },
      {
        id: 'meeting-transcript',
        label: 'Meeting transcript',
        heading: 'Every meeting, captured and usable.',
        body: 'Transcripts are summarised with decisions, actions and follow-ups so nothing depends on memory alone.',
        alt: 'Zuraio meeting transcript — summarised discussion with actions and follow-ups.',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        heading: 'Nothing slips through.',
        body: 'Actions are extracted from emails, meetings and messages so follow-ups are visible before they are forgotten.',
        alt: 'Zuraio tasks view — open actions gathered from recent company activity.',
      },
      {
        id: 'briefing',
        label: 'Briefing',
        heading: 'Walk in prepared.',
        body: 'Relevant emails, notes, documents, decisions and open actions gathered before you sit down.',
        alt: 'Zuraio meeting brief — client history, related files and talking points prepared.',
      },
    ],
  },
  outcomes: {
    heading: 'Less administration. More valuable work.',
    body: 'Zuraio helps people spend less time searching, summarising and preparing, so they can focus on clients, decisions and the work they are employed to do.',
    cards: [
      { tag: 'Meetings', title: 'Walk in prepared', body: 'Relevant history, decisions and open actions already prepared.' },
      { tag: 'Email', title: 'Draft replies ready', body: 'Drafts based on the full thread and relevant company context.' },
      { tag: 'Answers', title: 'Ask with evidence', body: 'Ask across approved knowledge and see the sources behind the response.' },
      { tag: 'Reports', title: 'First drafts, faster', body: 'Turn existing information into structured first drafts.' },
      { tag: 'Follow-ups', title: 'Nothing slips', body: 'Capture actions and next steps before they are forgotten.' },
    ],
  },
  dataControl: {
    marker: 'Data control',
    heading: 'AI, without handing over the keys.',
    body: 'Zuraio gives companies control over where it runs, what information it can use, who can access it and how its work is reviewed.',
    cards: [
      { title: 'Hosted in Switzerland', body: 'A Swiss-hosted option for companies that want their environment and company data kept in Switzerland.' },
      { title: 'Access follows your rules', body: 'People work only with the information they are permitted to use.' },
      { title: 'Answers show their sources', body: 'Users can check where information came from before relying on it.' },
      { title: 'Built to be reviewed', body: 'Requests, sources and outputs can be easier to trace according to the agreed setup.' },
    ],
    note: '<b>Need stronger control?</b> On-premise options and model choice can be discussed for companies with stricter internal requirements.',
    link: 'Explore data control and security →',
  },
  reviewable: {
    heading: 'AI you can explain later.',
    body: 'See what was asked, which approved sources were used and what was produced. This supports internal review and helps companies prepare for future AI-governance expectations.',
    steps: [
      { label: 'What was asked', title: 'The request', body: 'The prompt or request that started the work.' },
      { label: 'What was used', title: 'The sources', body: 'The approved company sources behind the answer.' },
      { label: 'What was produced', title: 'The output', body: 'The answer, draft or summary awaiting review.' },
    ],
    link: 'View the technical approach →',
  },
  origin: {
    marker: 'Why we built it',
    heading: 'Made for the work we had to do ourselves.',
    paragraphs: [
      'Zuraio started because we needed a better way to prepare, search, summarise, draft and follow up in our own work.',
      'Public AI tools were useful, but they were not enough for serious company work. We wanted AI connected to real business knowledge, with clear control over data, access and model choice.',
      'That became Zuraio.',
    ],
    link: 'Meet the team →',
    caption: 'Built because we needed it ourselves.',
    imageAlt: 'The Zuraio team working together — laptop, notebooks and whiteboard with prepare, search, summarise, draft and follow up.',
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
    hero: { marker: 'How it helps', heading: 'Less administration. More valuable work.', lede: 'Zuraio helps people prepare, search, draft, summarise and follow up using approved company knowledge. It works alongside existing systems and brings the relevant context together when it is needed.' },
  },
  knowledge: {
    title: 'Knowledge — Zuraio',
    hero: { marker: 'Knowledge', heading: 'Turn scattered company information into usable context.', lede: 'Important knowledge is often spread across inboxes, shared drives, meeting notes, CRM records and business systems. Zuraio is designed to bring approved information together so people can find, understand and use it more effectively.' },
  },
  integrations: {
    title: 'Integrations — Zuraio',
    hero: { marker: 'Integrations', heading: 'Works alongside the systems your team already uses.', lede: 'Zuraio is designed to connect company knowledge and workflows without forcing teams to replace systems that already work.' },
  },
  dataControl: {
    title: 'Data control & security — Zuraio',
    hero: { marker: 'Data control & security', heading: 'Your data. Your rules. Your deployment.', lede: 'Zuraio is designed to help companies use AI without giving up control over company knowledge, permissions or infrastructure choices.' },
  },
  deploymentModels: {
    title: 'Deployment models — Zuraio',
    hero: { marker: 'Deployment models', heading: 'Local, hybrid or Swiss-hosted cloud.', lede: 'Different companies have different requirements for control, performance, infrastructure and cost. Zuraio can be configured around the deployment model agreed for the customer.' },
  },
  technicalArchitecture: {
    title: 'Technical architecture — Zuraio',
    hero: { marker: 'Technical architecture', heading: 'A controlled path from request to reviewed output.', lede: 'Zuraio connects users, approved company sources, business tools and AI models through a governed execution layer. The exact architecture depends on the customer environment and deployment model.' },
  },
  aiGovernance: {
    title: 'AI governance — Zuraio',
    hero: { marker: 'AI governance', heading: 'AI use that can be understood and reviewed.', lede: 'Responsible company AI requires more than a model. Organisations need clear rules for access, data use, human review, logging and accountability.' },
  },
  faq: {
    title: 'FAQ — Zuraio',
    hero: { marker: 'FAQ', heading: 'Practical questions about using Zuraio at work.', lede: 'Answers to common questions about deployment, permissions, data control and everyday use.' },
  },
  about: {
    title: 'About — Zuraio',
    hero: { marker: 'About Zuraio', heading: 'Built by people who needed a better way to work.', lede: 'Zuraio began with a practical problem. Existing AI tools were useful, but they did not combine company knowledge, data control and everyday work in the way we needed.' },
  },
  contact: {
    title: 'Contact — Zuraio',
    hero: { marker: 'Contact', heading: 'Find the first practical use case for your company.', lede: 'We will look at your current tools, company knowledge and data-control requirements, then identify where Zuraio could help first.' },
  },
  resources: {
    title: 'Resources — Zuraio',
    hero: { marker: 'Resources', heading: 'Technical and practical information about Zuraio.', lede: 'Guides, overviews and reference material for teams evaluating or deploying Zuraio.' },
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
