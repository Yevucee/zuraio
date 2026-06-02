export const homeV6En = {
  hero: {
    eyebrow: 'AI for Swiss companies that need control of their data.',
    title: 'Your work, ready before you are.',
    body: 'Zuraio helps teams prepare for meetings, draft replies, find answers with sources, create reports and keep follow-ups moving, with Swiss hosting and access controls suited to your company.',
    trustLine: 'Swiss hosting · On-premise options · Source-backed answers · Personal setup support',
    imageAlt: 'Zuraio AI Workspace showing prepared work with sources and access controls',
    pills: ['Sources attached', 'Access checked', 'Swiss hosting'],
    seeInAction: 'See it in action',
  },
  toolStrip: {
    title: 'Fits into the tools you already use.',
    body1:
      'Zuraio is designed to connect with the tools your team already uses, from email and documents to meetings, messages, notes and company systems.',
    body2: 'Start with the work that matters most: email, meetings, documents, reports, internal search and follow-ups.',
    footnote: 'Specific connections depend on your company setup, approved tools and pilot scope.',
    tools: [
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
    ],
  },
  dailyWork: {
    title: 'Less searching. More doing.',
    body: 'Zuraio helps teams move faster through the work they already do every day, with more context and fewer missed details.',
    cards: [
      {
        title: 'Meetings',
        body: 'Walk in prepared with relevant emails, documents, notes and open actions already gathered.',
        label: 'Meeting brief prepared',
      },
      {
        title: 'Email',
        body: 'Summarise long threads and prepare replies your team can review before sending.',
        label: 'Draft reply ready',
      },
      {
        title: 'Answers',
        body: 'Ask questions across company knowledge and see the sources behind the answer.',
        label: 'Answer with sources',
      },
      {
        title: 'Reports',
        body: 'Turn existing information into first drafts of updates, summaries and reports.',
        label: 'Report draft created',
      },
      {
        title: 'Follow-ups',
        body: 'Capture actions from emails, meetings, notes and messages so fewer things are missed.',
        label: 'Follow-up list captured',
      },
    ],
  },
  productExamples: {
    title: 'Watch the work take shape.',
    body: 'Short examples show how Zuraio helps teams prepare, reply and find answers from approved company knowledge.',
    tablistLabel: 'Product examples',
    tabs: [
      {
        id: 'email' as const,
        label: 'Email',
        heading: 'The reply is already waiting.',
        copy: 'Long email threads slow people down. Zuraio helps summarise the conversation, identify what matters and prepare a reply in your tone. You review, edit and decide what gets sent.',
      },
      {
        id: 'meetings' as const,
        label: 'Meetings',
        heading: 'Walk in prepared.',
        copy: 'Before a meeting, Zuraio can bring together relevant emails, notes, documents, decisions and open actions. Your team starts with a clear brief instead of searching through folders and inboxes.',
      },
      {
        id: 'knowledge' as const,
        label: 'Knowledge',
        heading: 'Find the answer. See the proof.',
        copy: 'Ask questions across approved company knowledge and see where the answer came from. This makes answers easier to check, share and trust.',
      },
    ],
    emailPanel: {
      label: 'Email Assistant',
      subject: 'Re: Q3 contract renewal — thread summary',
      summary: 'Key points: pricing alignment needed, delivery timeline open, legal review pending.',
      draftLabel: 'Draft reply',
      draftBody:
        'Thank you for the update. We reviewed the terms and can confirm alignment with our guidelines. Please find our proposed adjustments attached for your review.',
      sources: 'Sources: thread history, prior agreement',
      reviewDraft: 'Review draft',
      editBeforeSend: 'Edit before send',
    },
    meetingsPanel: {
      label: 'Meeting brief',
      title: 'Acme AG — Tuesday 10:00',
      items: [
        'Client context from recent emails',
        'Open follow-up: confirm delivery timeline',
        'Decision: approve revised contract terms',
        'Suggested talking points for review',
      ],
      sources: ['Email thread', 'Last notes', 'Q3 proposal'],
    },
    knowledgePanel: {
      label: 'Knowledge search',
      question: 'What is our remote work policy for new hires?',
      answer:
        'New hires may work remotely up to two days per week after onboarding. Manager approval is required for additional remote days.',
      sourcesLabel: 'Sources attached',
      sources: ['HR Policy 2024.pdf', 'Onboarding guide'],
    },
  },
  control: {
    label: 'Controlled company AI',
    title: 'AI, without handing over the keys.',
    body1: 'AI should not mean losing control of company data.',
    body2:
      'Zuraio gives companies control over where it runs, what it can use, who can access it and how outputs can be reviewed.',
    cards: [
      {
        title: 'Hosted in Switzerland',
        body: 'For Swiss companies that want their Zuraio environment hosted in Switzerland.',
      },
      {
        title: 'Access follows your rules',
        body: 'People only work with the sources and information they are allowed to use.',
      },
      {
        title: 'Answers show their sources',
        body: 'Your team can check where information came from before relying on it.',
      },
      {
        title: 'Built to be reviewed',
        body: 'Prompts, sources and outputs can be easier to trace according to the agreed setup.',
      },
    ],
    strongerTitle: 'Need stronger control?',
    strongerBody:
      'On-premise options and model choice can be discussed for companies with stricter internal requirements.',
  },
  audit: {
    label: 'REVIEWABLE AI USE',
    title: 'AI you can explain later.',
    body1:
      'As AI becomes part of daily work, companies will need to understand how answers, drafts and summaries were produced.',
    body2:
      'Zuraio is designed to make prompts, sources, outputs and review steps easier to trace, so your team can use AI with more confidence.',
    footnote:
      'This helps companies prepare for future AI governance, internal review and audit expectations.',
    proofCards: [
      { title: 'What was asked', body: 'See the prompt or request that started the work.' },
      { title: 'What was used', body: 'Show the approved company sources behind the answer.' },
      { title: 'What was produced', body: 'Keep a reviewable record of the draft, answer or summary.' },
    ],
    trailAria: 'Example audit trail showing prompt, sources, output and review',
    steps: {
      prompt: { label: 'Prompt', content: '“What changed in the Q3 contract thread?”' },
      sources: { label: 'Sources used' },
      output: { label: 'Output', content: 'Draft reply prepared' },
      review: { label: 'Review', content: 'Hans Peter Meyer · Saved for review' },
    },
    sourceTags: ['Email thread', 'Contract draft', 'Policy note'],
  },
  founder: {
    title: 'Made for the work we had to do ourselves.',
    body1:
      'Zuraio started because we needed a better way to prepare, search, summarise, draft and follow up in our own work.',
    body2:
      'Public AI tools were useful, but they were not enough for serious company work. We wanted AI connected to real business knowledge, with clear control over data, access and model choice.',
    body3: 'That is what became Zuraio.',
    photoAria: 'Founder or team photo placeholder',
    photoPlaceholder: 'Founder or team photo placeholder — calm, documentary-style image preferred',
  },
  finalCta: {
    title: 'Find your first Zuraio use case.',
    body1:
      'We will walk through your current tools, your data-control needs and the first practical ways Zuraio could help your team.',
    body2: 'Private demo. Your company setup. Your questions.',
  },
} as const;

export const homeV6De = {
  hero: {
    eyebrow: 'KI für Schweizer Unternehmen, die die Kontrolle über ihre Daten behalten müssen.',
    title: 'Ihre Arbeit – vorbereitet, bevor Sie es sind.',
    body: 'Zuraio hilft Teams, Meetings vorzubereiten, Antworten zu entwerfen, Antworten mit Quellen zu finden, Berichte zu erstellen und Follow-ups am Laufen zu halten – mit Schweizer Hosting und Zugriffskontrollen, die zu Ihrem Unternehmen passen.',
    trustLine:
      'Schweizer Hosting · On-Premise-Optionen · Antworten mit Quellen · Persönliche Einrichtungsunterstützung',
    imageAlt: 'Zuraio AI Workspace mit vorbereiteter Arbeit, Quellen und Zugriffskontrollen',
    pills: ['Quellen verknüpft', 'Zugriff geprüft', 'Schweizer Hosting'],
    seeInAction: 'In Aktion ansehen',
  },
  toolStrip: {
    title: 'Passt zu den Tools, die Sie bereits nutzen.',
    body1:
      'Zuraio ist darauf ausgelegt, sich mit den Tools zu verbinden, die Ihr Team bereits nutzt – von E-Mail und Dokumenten bis zu Meetings, Nachrichten, Notizen und Unternehmenssystemen.',
    body2:
      'Beginnen Sie mit der Arbeit, die am wichtigsten ist: E-Mail, Meetings, Dokumente, Berichte, interne Suche und Follow-ups.',
    footnote:
      'Konkrete Anbindungen hängen von Ihrer Unternehmenskonfiguration, genehmigten Tools und dem Pilotumfang ab.',
    tools: [
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
      'Sprachnotizen',
    ],
  },
  dailyWork: {
    title: 'Weniger suchen. Mehr erledigen.',
    body: 'Zuraio hilft Teams, die tägliche Arbeit schneller zu bewältigen – mit mehr Kontext und weniger übersehenen Details.',
    cards: [
      {
        title: 'Meetings',
        body: 'Gut vorbereitet ins Meeting – mit relevanten E-Mails, Dokumenten, Notizen und offenen Aufgaben.',
        label: 'Meeting-Briefing erstellt',
      },
      {
        title: 'E-Mail',
        body: 'Lange Threads zusammenfassen und Antworten vorbereiten, die Ihr Team vor dem Versand prüfen kann.',
        label: 'Antwortentwurf bereit',
      },
      {
        title: 'Antworten',
        body: 'Fragen an Unternehmenswissen stellen und die Quellen hinter der Antwort sehen.',
        label: 'Antwort mit Quellen',
      },
      {
        title: 'Berichte',
        body: 'Bestehende Informationen in erste Entwürfe von Updates, Zusammenfassungen und Berichten verwandeln.',
        label: 'Berichtsentwurf erstellt',
      },
      {
        title: 'Follow-ups',
        body: 'Aufgaben aus E-Mails, Meetings, Notizen und Nachrichten erfassen, damit weniger verloren geht.',
        label: 'Follow-up-Liste erfasst',
      },
    ],
  },
  productExamples: {
    title: 'Sehen Sie, wie die Arbeit entsteht.',
    body: 'Kurze Beispiele zeigen, wie Zuraio Teams bei Vorbereitung, Antworten und Antworten aus genehmigtem Unternehmenswissen unterstützt.',
    tablistLabel: 'Produktbeispiele',
    tabs: [
      {
        id: 'email' as const,
        label: 'E-Mail',
        heading: 'Die Antwort wartet bereits.',
        copy: 'Lange E-Mail-Threads bremsen Teams aus. Zuraio hilft, das Gespräch zusammenzufassen, das Wesentliche zu erkennen und eine Antwort in Ihrem Ton vorzubereiten. Sie prüfen, bearbeiten und entscheiden, was versendet wird.',
      },
      {
        id: 'meetings' as const,
        label: 'Meetings',
        heading: 'Gut vorbereitet ins Meeting.',
        copy: 'Vor einem Meeting kann Zuraio relevante E-Mails, Notizen, Dokumente, Entscheidungen und offene Aufgaben zusammenführen. Ihr Team startet mit einem klaren Briefing statt mit Suche in Ordnern und Postfächern.',
      },
      {
        id: 'knowledge' as const,
        label: 'Wissen',
        heading: 'Antwort finden. Nachweis sehen.',
        copy: 'Stellen Sie Fragen an genehmigtes Unternehmenswissen und sehen Sie, woher die Antwort stammt. So lassen sich Antworten leichter prüfen, teilen und vertrauen.',
      },
    ],
    emailPanel: {
      label: 'E-Mail-Assistent',
      subject: 'Re: Q3-Vertragsverlängerung — Thread-Zusammenfassung',
      summary: 'Kernpunkte: Preisausrichtung nötig, Lieferzeitplan offen, rechtliche Prüfung ausstehend.',
      draftLabel: 'Antwortentwurf',
      draftBody:
        'Vielen Dank für die Aktualisierung. Wir haben die Bedingungen geprüft und können die Übereinstimmung mit unseren Richtlinien bestätigen. Anbei finden Sie unsere vorgeschlagenen Anpassungen zur Prüfung.',
      sources: 'Quellen: Thread-Verlauf, frühere Vereinbarung',
      reviewDraft: 'Entwurf prüfen',
      editBeforeSend: 'Vor Versand bearbeiten',
    },
    meetingsPanel: {
      label: 'Meeting-Briefing',
      title: 'Acme AG — Dienstag 10:00',
      items: [
        'Kundenkontext aus aktuellen E-Mails',
        'Offenes Follow-up: Lieferzeitplan bestätigen',
        'Entscheidung: überarbeitete Vertragsbedingungen freigeben',
        'Vorgeschlagene Gesprächspunkte zur Prüfung',
      ],
      sources: ['E-Mail-Thread', 'Letzte Notizen', 'Q3-Angebot'],
    },
    knowledgePanel: {
      label: 'Wissenssuche',
      question: 'Wie lautet unsere Remote-Work-Richtlinie für neue Mitarbeitende?',
      answer:
        'Neue Mitarbeitende können nach dem Onboarding bis zu zwei Tage pro Woche remote arbeiten. Für zusätzliche Remote-Tage ist die Genehmigung der Führungskraft erforderlich.',
      sourcesLabel: 'Quellen verknüpft',
      sources: ['HR-Richtlinie 2024.pdf', 'Onboarding-Leitfaden'],
    },
  },
  control: {
    label: 'Kontrollierte Unternehmens-KI',
    title: 'KI, ohne die Kontrolle abzugeben.',
    body1: 'KI darf nicht bedeuten, die Kontrolle über Unternehmensdaten zu verlieren.',
    body2:
      'Zuraio gibt Unternehmen Kontrolle darüber, wo es läuft, was es nutzen darf, wer Zugriff hat und wie Ergebnisse überprüft werden können.',
    cards: [
      {
        title: 'Gehostet in der Schweiz',
        body: 'Für Schweizer Unternehmen, die ihre Zuraio-Umgebung in der Schweiz hosten möchten.',
      },
      {
        title: 'Zugriff nach Ihren Regeln',
        body: 'Personen arbeiten nur mit Quellen und Informationen, die sie nutzen dürfen.',
      },
      {
        title: 'Antworten zeigen ihre Quellen',
        body: 'Ihr Team kann prüfen, woher Informationen stammen, bevor es sich darauf verlässt.',
      },
      {
        title: 'Für Überprüfung gebaut',
        body: 'Prompts, Quellen und Ergebnisse können je nach vereinbarter Einrichtung leichter nachvollzogen werden.',
      },
    ],
    strongerTitle: 'Brauchen Sie stärkere Kontrolle?',
    strongerBody:
      'On-Premise-Optionen und Modellwahl können für Unternehmen mit strengeren internen Anforderungen besprochen werden.',
  },
  audit: {
    label: 'NACHVOLLZIEHBARE KI-NUTZUNG',
    title: 'KI, die Sie später erklären können.',
    body1:
      'Wenn KI Teil der täglichen Arbeit wird, müssen Unternehmen verstehen können, wie Antworten, Entwürfe und Zusammenfassungen entstanden sind.',
    body2:
      'Zuraio ist darauf ausgelegt, Prompts, Quellen, Ergebnisse und Prüfschritte leichter nachzuverfolgen – damit Ihr Team KI mit mehr Vertrauen nutzen kann.',
    footnote:
      'Das hilft Unternehmen, sich auf künftige KI-Governance, interne Prüfungen und Audit-Erwartungen vorzubereiten.',
    proofCards: [
      { title: 'Was gefragt wurde', body: 'Den Prompt oder die Anfrage sehen, die die Arbeit ausgelöst hat.' },
      { title: 'Was genutzt wurde', body: 'Die genehmigten Unternehmensquellen hinter der Antwort anzeigen.' },
      { title: 'Was erstellt wurde', body: 'Einen überprüfbaren Nachweis des Entwurfs, der Antwort oder der Zusammenfassung behalten.' },
    ],
    trailAria: 'Beispiel-Audit-Trail mit Prompt, Quellen, Ergebnis und Prüfung',
    steps: {
      prompt: { label: 'Prompt', content: '«Was hat sich im Q3-Vertrags-Thread geändert?»' },
      sources: { label: 'Genutzte Quellen' },
      output: { label: 'Ergebnis', content: 'Antwortentwurf vorbereitet' },
      review: { label: 'Prüfung', content: 'Hans Peter Meyer · Zur Prüfung gespeichert' },
    },
    sourceTags: ['E-Mail-Thread', 'Vertragsentwurf', 'Richtliniennotiz'],
  },
  founder: {
    title: 'Gemacht für die Arbeit, die wir selbst erledigen mussten.',
    body1:
      'Zuraio entstand, weil wir einen besseren Weg brauchten, um in unserer eigenen Arbeit vorzubereiten, zu suchen, zusammenzufassen, zu entwerfen und Follow-ups zu verfolgen.',
    body2:
      'Öffentliche KI-Tools waren nützlich, reichten aber für ernsthafte Unternehmensarbeit nicht aus. Wir wollten KI, verbunden mit echtem Geschäftswissen und klarer Kontrolle über Daten, Zugriff und Modellwahl.',
    body3: 'Daraus wurde Zuraio.',
    photoAria: 'Platzhalter für Gründer- oder Teamfoto',
    photoPlaceholder: 'Platzhalter Gründer- oder Teamfoto — ruhiges, dokumentarisches Bild bevorzugt',
  },
  finalCta: {
    title: 'Finden Sie Ihren ersten Zuraio-Anwendungsfall.',
    body1:
      'Wir gehen Ihre aktuellen Tools, Ihre Anforderungen an Datenkontrolle und die ersten praktischen Wege durch, wie Zuraio Ihrem Team helfen könnte.',
    body2: 'Private Demo. Ihre Unternehmenskonfiguration. Ihre Fragen.',
  },
} as const;
