/** Copy for alternative homepage preview only (DE primary + EN). */

import * as copyEn from './copy-en.js';
import * as copyDeRoot from './copy-de.js';

const FAQ_DE = copyDeRoot.faq.items;
const FAQ_EN = copyEn.faq.items;

function faqAnswer(items, qIncludes) {
  const item = items.find((i) => i.question.toLowerCase().includes(qIncludes.toLowerCase()));
  return item?.answer ?? '';
}

export const ALT_HOME_LOCALES = ['de', 'en'];

export const copyAltHome = {
  de: {
    metaTitle: 'Zuraio – Alternative Startseite (Vorschau)',
    banner: 'Alternative Startseite – nur Vorschau, nicht die Live-Seite.',
    nav: {
      howItWorks: 'So funktioniert\'s',
      skills: 'Skills',
      security: 'Sicherheit',
      about: 'Über uns',
      bookDemo: 'Demo buchen',
    },
    hero: {
      eyebrow: 'KI-Assistent für Schweizer KMU',
      variants: {
        a: 'KI, ohne die Schlüssel aus der Hand zu geben.',
        c: 'Ihr Team nutzt KI längst. Wissen Sie, wo Ihre Daten landen?',
        h: 'Ein KI-Assistent, eingerichtet für Ihren Betrieb – von Menschen, die sich die Zeit nehmen, ihn zu verstehen.',
      },
      sub: 'Zuraio beantwortet E-Mails, bereitet Sitzungen vor und findet alles in Ihrem Firmenwissen – mit Quellenangabe und unter Schweizer Datenkontrolle.',
      cta: '30-Minuten-Demo buchen',
      ctaMicro: 'Mit Ihren eigenen Beispielen. Unverbindlich.',
      trust: 'In der Schweiz gehostet bei Infomaniak · ISO 27001:2022 · Arbeitet mit bexio, Abacus und Microsoft 365',
      sector: 'Für Architektur- und Ingenieurbüros, Treuhänder und Immobilienverwaltungen.',
      screenshotAlt: 'Zuraio entwirft eine Kundenantwort mit sichtbaren Quellen.',
    },
    reasons: {
      title: null,
      cards: [
        {
          title: 'Kennt Ihren Betrieb bereits.',
          body: 'Antworten kommen aus Ihren E-Mails, Dokumenten und Systemen – nicht aus dem Internet. Jede Antwort zeigt, woher sie stammt.',
        },
        {
          title: 'Ihre Daten bleiben unter Schweizer Kontrolle.',
          body: '[Genaue Hosting-Aussage] Zugriffe folgen Ihren bestehenden Berechtigungen.',
        },
        {
          title: 'Skills, gemeinsam mit Ihnen entwickelt.',
          body: 'Fertige Skills ab dem ersten Tag. Danach entwickeln wir mit Ihrem Team eigene Skills – so, wie Ihr Betrieb wirklich arbeitet.',
        },
      ],
    },
    demo: {
      heading: 'So beantwortet Zuraio eine Kundenanfrage.',
      caption:
        'Ein Kunde fragt nach seinem Projekt. Zuraio holt die letzte Korrespondenz, den Vertrag und die Zahlen aus [bexio], entwirft eine Antwort und zeigt jede Quelle. Ihr Team prüft den Entwurf und entscheidet, ob er versendet wird.',
      videoTodo: 'Video-Gruss nutzt derzeit «du» – mit Sie neu aufnehmen.',
    },
    skills: {
      heading: 'Skills, gemeinsam mit Ihnen entwickelt – für die Art, wie Ihr Betrieb arbeitet.',
      intro:
        'Starten Sie mit fertigen Skills, die ab dem ersten Tag funktionieren. Danach setzen wir uns mit Ihrem Team zusammen, lernen, wie Sie wirklich arbeiten, und entwickeln Skills, die nur Ihr Betrieb hat: Ihre Offerten, Ihr Ton, Ihre Abläufe. Zuraio übernimmt das Mühsame – das Urteil bleibt bei Ihrem Team.',
      readyMade: [
        ['Kundenanfrage beantworten', 'Entwirft eine Antwort aus Korrespondenz, Verträgen und Ihren Konditionen'],
        ['Sitzung vorbereiten', 'Einseitiges Briefing: letzte E-Mails, offene Punkte, Dokumente'],
        ['Projektstatus', 'Stand, offene Punkte und wer wartet – aus E-Mails und Dateien'],
        ['Verlauf zusammenfassen', 'Lange E-Mail-Verläufe in fünf Zeilen, Entscheide hervorgehoben'],
        ['Aufgaben erfassen', 'Macht aus Sitzung oder E-Mail Aufgaben mit Verantwortlichen'],
        ['Offerte vorbereiten', 'Entwurf aus Anfrage und Ihrer Produkt- oder Preisliste'],
      ],
      band:
        'Gemeinsam mit Ihnen entwickelt – Beispiele: «Offerte in unserem Format, mit unseren Rabattregeln» · «Antwort an Mieter in unserem Ton, mit unseren Standardklauseln» · «Monatsreport, so wie ihn unsere Partner mögen» [durch echte Pilot-Beispiele ersetzen]',
      link: 'Alle Skills ansehen →',
      linkHref: '../how-it-helps.html',
    },
    integrations: {
      heading: 'Arbeitet mit den Systemen, die Schweizer KMU wirklich nutzen.',
      line: '[Falls zutreffend: Ihr Team arbeitet dort, wo es schon arbeitet – in Outlook und Teams.]',
      link: 'Alle Integrationen →',
    },
    compare: {
      heading: 'Warum nicht einfach ChatGPT oder Copilot?',
      chatgpt:
        'Intelligent, kennt aber Ihren Betrieb nicht. Den Kontext muss jemand jedes Mal hineinkopieren – und es ist schwer nachzuvollziehen, welche Firmendaten wo landen.',
      copilot:
        'Kennt die Microsoft-Welt. Daten aus bexio, Abacus oder Ihrem CRM brauchen Zusatzaufwand, und der Nutzen hängt von Lizenzen und Einrichtung ab.',
      zuraio:
        'Kennt Ihren Betrieb über alle Systeme hinweg, startet mit fertigen Skills, entwickelt eigene mit Ihnen und hält Ihre Daten unter Schweizer Kontrolle.',
    },
    control: {
      heading: 'Nichts verlässt den Betrieb ohne Ihr OK.',
      points: [
        'Schweizer Hosting: [genaue Aussage], bei Infomaniak, ISO 27001:2022 und Swiss-Hosting-Label.',
        'Zugriff nach Ihren Regeln: Mitarbeitende sehen nur, was sie schon heute sehen dürfen.',
        'Jede Antwort zeigt ihre Quelle: prüfen, bevor man sich darauf verlässt.',
        'Klar nachvollziehbar: jede Anfrage, ihre Quellen und wer das Ergebnis freigegeben hat – so kann Ihr Team zeigen, wie eine Antwort zustande kam.',
      ],
      serversLine: 'Alles auf Ihren eigenen Servern oder ein bestimmtes KI-Modell? Sprechen wir darüber.',
      itLink: 'Für Ihren IT-Partner: technische Details und Sicherheits-Factsheet →',
      itHref: '../technical-architecture.html',
      partnerLine: '[Nur falls zutreffend: Sie arbeiten mit einem IT-Partner? Wir beziehen ihn ab dem ersten Gespräch ein.]',
    },
    start: {
      heading: 'Klein anfangen. Gemeinsam aufbauen.',
      steps: [
        'Gespräch (30 Minuten). Wir schauen uns Ihre Tools an und wählen eine Aufgabe, die sich lohnt.',
        'Gemeinsam aufbauen ([halbtägiger] Workshop). Wir setzen uns mit den Menschen zusammen, die die Arbeit machen, und entwickeln Ihren ersten eigenen Skill – mit Ihren Daten. Die fertigen Skills funktionieren ab dem ersten Tag.',
        'Nutzen, prüfen, verfeinern. Nach [2 Wochen] schauen wir gemeinsam, was angepasst werden soll.',
        'Entscheiden. Behalten, ausbauen oder stoppen. [Ausstiegsbedingungen]',
      ],
    },
    team: {
      heading: 'Entwickelt in der Schweiz – von Menschen, die Sie anrufen können.',
      body: 'Wir haben Zuraio gebaut, weil KI zwar Antworten schreiben konnte, aber unser Firmenwissen, unsere Zugriffsregeln und unsere Arbeitsweise nicht verstand.',
      contact: '[Telefon] · [allgemeine E-Mail] · [Standort]',
      people: [
        { name: 'Michael C. Wili', role: '[Rolle bestätigen]', img: 'Michael' },
        { name: 'Marcelo Zanette', role: '[Rolle bestätigen]', img: 'Marcelo' },
        { name: 'Samuel A. Polley', role: '[Rolle bestätigen]', img: 'Samuel' },
        { name: 'Roland Steiner', role: '[Rolle bestätigen]', img: 'Roland' },
      ],
    },
    faq: {
      items: [
        {
          q: 'Bleiben unsere Daten in der Schweiz?',
          a: faqAnswer(FAQ_DE, 'Schweiz'),
        },
        {
          q: 'Können Mitarbeitende Informationen sehen, die sie nicht sehen dürfen?',
          a: faqAnswer(FAQ_DE, 'Berechtigung'),
        },
        {
          q: 'Versendet Zuraio etwas automatisch?',
          a: faqAnswer(FAQ_DE, 'selbstständig') || faqAnswer(FAQ_DE, 'automatisch'),
        },
        {
          q: 'Was kostet der Einstieg?',
          a: '[Pilot ab CHF …]',
        },
      ],
      linkAll: 'Alle Fragen →',
      linkIt: 'Fragen, die Ihre IT stellen wird →',
      linkItHref: '../faq.html#it-questions',
    },
    closing: {
      heading: 'Was könnte Zuraio Ihnen abnehmen?',
      cta: '30-Minuten-Demo buchen',
      tagline: 'Ihr Betrieb. Ihre Informationen. Ihr OK.',
    },
    footerNewLink: { label: 'Neu bei Zuraio', href: 'neu-bei-zuraio.html' },
    placeholders: [],
  },
  en: {
    metaTitle: 'Zuraio – Alternative homepage (preview)',
    banner: 'Alternative homepage – preview only, not the live site.',
    nav: {
      howItWorks: 'How it works',
      skills: 'Skills',
      security: 'Security',
      about: 'About',
      bookDemo: 'Book a demo',
    },
    hero: {
      eyebrow: 'AI assistant for Swiss SMEs',
      variants: {
        a: 'AI, without handing over the keys.',
        c: 'Your team already uses AI. Do you know where your data goes?',
        h: 'An AI assistant set up around your business, by people who take the time to understand it.',
      },
      sub: 'Zuraio answers emails, prepares meetings and finds anything in your company knowledge, with sources shown and your data under Swiss control.',
      cta: 'Book a 30-minute demo',
      ctaMicro: 'With your own examples. No commitment.',
      trust: 'Hosted in Switzerland by Infomaniak · ISO 27001:2022 · Works with bexio, Abacus and Microsoft 365',
      sector: 'Built for architecture and engineering offices, fiduciaries and property managers.',
      screenshotAlt: 'Zuraio drafts a customer reply with sources listed.',
    },
    reasons: {
      cards: [
        {
          title: 'Already knows your business.',
          body: 'Answers come from your emails, documents and systems, not from the internet. Every answer shows where it came from.',
        },
        {
          title: 'Your data stays under Swiss control.',
          body: '[Exact hosting statement] Access follows your existing permissions.',
        },
        {
          title: 'Skills built with you.',
          body: 'Start with ready-made skills on day one. Then we build bespoke ones with your team, around the way your company actually works.',
        },
      ],
    },
    demo: {
      heading: 'Watch Zuraio answer a customer email.',
      caption:
        'A customer asks about their project. Zuraio pulls the latest correspondence, the contract and the figures from [bexio], drafts a reply and shows every source. Your employee checks it and decides whether to send.',
      videoTodo: 'Video greeting currently uses informal “you” — re-record with formal tone if needed.',
      subtitlesTodo: 'English subtitles: TODO — no subtitle file yet.',
    },
    skills: {
      heading: 'Skills built with you, for the way your company works.',
      intro:
        'Start with ready-made skills that work on day one. Then we sit down with your team, learn how you actually do the work, and build skills only your company has: your offers, your tone, your processes. Zuraio does the tedious part and your team keeps the judgement.',
      readyMade: [
        ['Reply to a client, tenant or customer', 'Drafts an answer using the correspondence, contracts and your terms'],
        ['Prepare a meeting', 'One-page briefing on the client: last emails, open points, documents'],
        ['Project status', 'Where things stand, what\'s open, who\'s waiting, from emails and files'],
        ['Summarise a thread', 'Long email chains in five lines, with the decisions highlighted'],
        ['Capture tasks', 'Turns a meeting or email into tasks with owners'],
        ['Prepare a quote', 'Draft offer from the enquiry and your product or price list'],
      ],
      band:
        'Built with you – examples: "Quote in our house format with our discount rules" · "Reply to tenants in our tone, with our standard clauses" · "Monthly client report the way our partners like it" [replace with real pilot examples]',
      link: 'See all skills →',
      linkHref: '../how-it-helps.html',
    },
    integrations: {
      heading: 'Works with the systems Swiss SMEs actually use.',
      line: '[If true: Your team works where it already works, in Outlook and Teams.]',
      link: 'All integrations →',
    },
    compare: {
      heading: 'Why not just ChatGPT or Copilot?',
      chatgpt:
        'Smart, but it doesn\'t know your company. Someone has to paste in the context each time, and it\'s hard to see which company data ends up where.',
      copilot:
        'Knows the Microsoft world. Your bexio, Abacus or CRM data needs extra work, and the value depends on licences and setup.',
      zuraio:
        'Knows your company across all of your systems, starts with ready-made skills, builds your own skills with you, and keeps data under Swiss control.',
    },
    control: {
      heading: 'Nothing leaves your company without your OK.',
      points: [
        'Swiss hosting: [precise statement], with Infomaniak, ISO 27001:2022 and the Swiss Hosting label.',
        'Access follows your rules: people only see what they\'re already allowed to see.',
        'Every answer shows its source: check before you rely on it.',
        'A clear record: each request, its sources and who approved the result, so your team can show how an answer was reached.',
      ],
      serversLine: 'Need everything on your own servers, or a specific AI model? Let\'s talk.',
      itLink: 'For your IT partner: technical details and security factsheet →',
      itHref: '../technical-architecture.html',
      partnerLine: '[Only if true: Working with an IT partner? We involve them from the first call.]',
    },
    start: {
      heading: 'Start small. Build it together.',
      steps: [
        'Talk (30 minutes). We look at your tools and pick one task worth improving.',
        'Build together ([half-day] workshop). We sit with the people who do the work and turn it into your first bespoke skill, on your own data. Ready-made skills work from day one.',
        'Use, review, refine. We check in after [2 weeks] and adjust with you.',
        'Decide. Keep it, expand it or stop. [Exit terms]',
      ],
    },
    team: {
      heading: 'Developed in Switzerland, by people you can call.',
      body: 'We built Zuraio because AI could write answers but didn\'t understand our company knowledge, access rules or the way we work.',
      contact: '[Phone] · [general email] · [office location]',
      people: [
        { name: 'Michael C. Wili', role: '[Role to confirm]', img: 'Michael' },
        { name: 'Marcelo Zanette', role: '[Role to confirm]', img: 'Marcelo' },
        { name: 'Samuel A. Polley', role: '[Role to confirm]', img: 'Samuel' },
        { name: 'Roland Steiner', role: '[Role to confirm]', img: 'Roland' },
      ],
    },
    faq: {
      items: [
        { q: 'Is our data kept in Switzerland?', a: faqAnswer(FAQ_EN, 'Switzerland') },
        { q: 'Can employees see information they shouldn\'t?', a: faqAnswer(FAQ_EN, 'permitted') },
        { q: 'Does Zuraio send anything automatically?', a: faqAnswer(FAQ_EN, 'automatically') },
        { q: 'What does it cost to start?', a: '[Pilot from CHF …]' },
      ],
      linkAll: 'View all questions →',
      linkIt: 'Questions your IT team will ask →',
      linkItHref: '../faq.html#it-questions',
    },
    closing: {
      heading: 'What could Zuraio take off your plate?',
      cta: 'Book a 30-minute demo',
      tagline: 'Your company. Your information. Your OK.',
    },
    footerNewLink: { label: 'New in Zuraio', href: 'new-in-zuraio.html' },
  },
};

export function getAltHomeCopy(locale) {
  return copyAltHome[locale === 'en' ? 'en' : 'de'];
}
