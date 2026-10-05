# Zuraio: full site rewrite (EN + DE) and Cursor brief

Swiss High German throughout: "ss" instead of "ß", «» for quotes, formal "Sie", Swiss terms (Offerte, Betrieb, Sitzung, Mitarbeitende, Liegenschaftsverwaltung), CHF 1'490. No dashes (– or —) in any copy.

**All facts are confirmed by the team.** There are no placeholders in this copy. Founder roles are left out on purpose (names, photos and emails only).

---

# PART A: COPY

## New site structure

| Page | File | Replaces |
|---|---|---|
| How it helps | how-it-helps.html | how-it-helps + knowledge |
| Security | security.html (new) | data-control + deployment-models + ai-governance |
| Integrations | integrations.html | integrations |
| For your IT partner | technical-architecture.html | technical-architecture |
| About | about.html | about |
| FAQ | faq.html | faq |
| Contact | contact.html | contact |
| Hidden until ready | — | resources, pricing (EN + DE), new-in-zuraio |
| Legal (not rewritten here; needs a lawyer) | impressum, privacy, cookies, terms | — |

Navigation (all pages): **How it helps · Skills · Security · About** + button **Book a 30-minute demo** / **30-Minuten-Demo buchen**.
DE nav: **So hilft Zuraio · Skills · Sicherheit · Über uns**.

---

## 0. Homepage preview (en/homepage-preview.html, de/homepage-preview.html)

### Hero
**Eyebrow**
- EN: AI assistant for Swiss SMEs
- DE: KI-Assistent für Schweizer KMU

**H1** (two lines on desktop)
- EN: AI that knows your company. / Your data stays in Switzerland.
- DE: KI, die Ihr Unternehmen kennt. / Ihre Daten bleiben in der Schweiz.

**Sub**
- EN: Zuraio answers emails, prepares meetings and finds what you need in your company knowledge, always with sources.
- DE: Zuraio beantwortet E-Mails, bereitet Sitzungen vor und findet, was Sie im Wissen Ihres Unternehmens brauchen, immer mit Quellen.

### Section: Skills (id="skills"; after Demo, before Integrations)

**Eyebrow**
- EN: BUILT FOR ARCHITECTS, FIDUCIARIES AND PROPERTY MANAGERS
- DE: FÜR ARCHITEKTEN, TREUHÄNDER UND VERWALTUNGEN (full eyebrow in copy-alt-home: FÜR ARCHITEKTUR- UND INGENIEURBÜROS, TREUHÄNDER UND IMMOBILIENVERWALTUNGEN)

**H2**
- EN: Useful from day one. Then set up the way you work.
- DE: Ab dem ersten Tag nützlich. Dann so eingerichtet, wie Sie arbeiten.

**Intro**
- EN: Zuraio works with skills: tasks it knows how to do. Some are ready from the start. Others we build with your team, from your templates, rules and tone.
- DE: Zuraio arbeitet mit Skills: Aufgaben, die Zuraio erledigen kann. Einige sind von Anfang an bereit. Andere bauen wir mit Ihrem Team, aus Ihren Vorlagen, Regeln und Ihrem Ton.

**Sector tabs (3)**  
Tablist: EN *Choose your sector* · DE *Branche wählen*  
Tabs (default first): EN *Architecture & engineering* · *Fiduciary* · *Property management* · DE *Architektur & Ingenieurwesen* · *Treuhand* · *Liegenschaftsverwaltung*  
Optional deep links: `#skills-architecture`, `#skills-fiduciary`, `#skills-property` (same on DE).

Each tab panel: left copy (title, one sentence, Uses chips, **legend** «What's yours» / «Was Ihres ist» with three numbered rows, workshop line) + right **example document** (HTML/CSS, invented data; olive tint highlights with inline numbered markers; legend explains each marker). Caption under document: EN *Example with invented data* · DE *Beispiel mit erfundenen Daten*.

| Tab | EN title | DE title |
|---|---|---|
| Architecture | Quote in your house format | Offerte in Ihrem Hausformat |
| Fiduciary | Monthly client report, the way your partners like it | Monatsreport für Mandanten, so wie Ihre Partner ihn wollen |
| Property | Replies to tenants in your tone | Antworten an Mieter in Ihrem Ton |

Workshop line (every panel): EN *Ready-made to start. Set up with your team in a workshop.* · DE *Fertig zum Start. Mit Ihrem Team in einem Workshop eingerichtet.*

**Footer / link**
- EN: We start with one task that matters to you. · See all skills → (how-it-helps.html#skills)
- DE: Wir beginnen mit einer Aufgabe, die Ihnen wichtig ist. · Alle Skills ansehen →

The six ready-made skill cards and the «Built with you» chip box live on **how-it-helps.html#skills**, not on the homepage preview.

### Section: Same question (id="same-question"; after Integrations, before Data control)
**Eyebrow**
- EN: YOUR COMPANY'S KNOWLEDGE
- DE: DAS WISSEN IHRES UNTERNEHMENS

**H2**
- EN: Same question. Different answer.
- DE: Gleiche Frage. Andere Antwort.

**Intro**
- EN: General AI tools are smart. But they only know what they can see.
- DE: Allgemeine KI-Tools sind klug. Aber sie wissen nur, was sie sehen.

**Question label / Question**
- EN: The question / Has Muster AG paid the last invoice, and what did we agree about the year-end close?
- DE: Die Frage / Hat die Muster AG die letzte Rechnung bezahlt, und was haben wir zum Jahresabschluss vereinbart?

**Left label / answer**
- EN: Without access to your systems / I don't have access to your invoices or your agreements with Muster AG.
- DE: Ohne Zugriff auf Ihre Systeme / Ich habe keinen Zugriff auf Ihre Rechnungen oder Ihre Vereinbarungen mit der Muster AG.

**Right label / answer**
- EN: Zuraio / The invoice from 30 September is open in bexio (due 30 October). Year-end close by 30 April, at a fixed fee; payroll is billed separately.
- DE: Zuraio / Die Rechnung vom 30. September ist in bexio offen (fällig am 30. Oktober). Jahresabschluss bis 30. April, zum Pauschalpreis; die Lohnbuchhaltung wird separat verrechnet.

**Sources**
- EN label: Sources · chips: bexio · Invoice 2026-118 | Engagement letter · 12 March
- DE label: Quellen · chips: bexio · Rechnung 2026-118 | Mandatsvertrag · 12. März

**Closing**
- EN: The difference isn't the AI. It's what the AI knows about your company.
- DE: Der Unterschied ist nicht die KI. Sondern was sie über Ihr Unternehmen weiss.

**Link** (to homepage FAQ item id="chatgpt-copilot")
- EN: See how we compare to ChatGPT and Copilot →
- DE: So unterscheiden wir uns von ChatGPT und Copilot →

**AI trademark line** (above final CTA band)
- EN: ChatGPT is a trademark of OpenAI. Copilot and Microsoft 365 are trademarks of Microsoft. Claude is a trademark of Anthropic.
- DE: ChatGPT ist eine Marke von OpenAI. Copilot und Microsoft 365 sind Marken von Microsoft. Claude ist eine Marke von Anthropic.

### Homepage FAQ (first visible item, id="chatgpt-copilot")
**Q / A EN**
- Why not just use ChatGPT or Copilot?
- You don't have to choose. ChatGPT only knows your company if someone shares the context each time. Copilot knows your Microsoft 365 world well, and reaching other systems usually needs connectors your IT builds. Zuraio comes connected to the systems Swiss SMEs use, like bexio, Abacus and Proffix, with skills we build with your team. It is model neutral: Swiss models by default, and GPT or Claude for tasks your company approves.

**Q / A DE**
- Warum nicht einfach ChatGPT oder Copilot?
- Sie müssen sich nicht entscheiden. ChatGPT kennt Ihr Unternehmen nur, wenn jemand den Kontext jedes Mal teilt. Copilot kennt Ihre Microsoft-365-Welt gut; für andere Systeme braucht es meist Konnektoren, die Ihre IT aufbaut. Zuraio ist bereits mit den Systemen verbunden, die Schweizer KMU nutzen, etwa bexio, Abacus und Proffix, und mit Skills, die wir mit Ihrem Team aufbauen. Zuraio ist modellneutral: standardmässig Schweizer Modelle, GPT oder Claude für Aufgaben, die Ihr Unternehmen freigibt.

---

## 1. How it helps (how-it-helps.html)

### Hero
**Eyebrow**
- EN: HOW IT HELPS
- DE: SO HILFT ZURAIO

**H1**
- EN: Less admin. More time for the work that matters.
- DE: Weniger Administration. Mehr Zeit für die Arbeit, die zählt.

**Sub**
- EN: Zuraio prepares meetings, drafts replies and finds answers in your own emails, documents and systems. Every answer shows its source, and your team decides what happens next.
- DE: Zuraio bereitet Sitzungen vor, entwirft Antworten und findet Antworten in Ihren eigenen E-Mails, Dokumenten und Systemen. Jede Antwort zeigt ihre Quelle, und Ihr Team entscheidet, was weiter passiert.

**CTA:** Book a 30-minute demo / 30-Minuten-Demo buchen

### Section: Everyday work (use cases, 6 cards)
**H2**
- EN: Where Zuraio helps every day.
- DE: Wo Zuraio jeden Tag hilft.

**Intro**
- EN: Practical work your team already does, done faster. No experiments, no new tools to learn.
- DE: Arbeit, die Ihr Team heute schon macht, nur schneller. Keine Experimente, keine neuen Werkzeuge.

| # | EN title | EN body | EN examples | DE title | DE body | DE examples |
|---|---|---|---|---|---|---|
| 1 | Meeting preparation | A one-page briefing before every meeting: recent emails, open points, documents and earlier notes. | Client meeting · Supplier negotiation · Board meeting | Sitzungsvorbereitung | Ein einseitiges Briefing vor jeder Sitzung: letzte E-Mails, offene Punkte, Dokumente und frühere Notizen. | Kundensitzung · Lieferantengespräch · Verwaltungsratssitzung |
| 2 | Email and follow-up | Long threads summarised, replies drafted in your tone, open actions flagged. | "What did the client ask for?" · "What do we still owe them?" | E-Mail und Nachfassen | Lange Verläufe zusammengefasst, Antworten in Ihrem Ton entworfen, offene Punkte markiert. | «Was wollte der Kunde?» · «Was sind wir ihm noch schuldig?» |
| 3 | Reports and summaries | Monthly summaries, project updates and decision notes from your approved documents. | Management summary · Project update · Client report | Berichte und Zusammenfassungen | Monatsberichte, Projekt-Updates und Entscheidungsnotizen aus Ihren freigegebenen Dokumenten. | Management-Zusammenfassung · Projekt-Update · Kundenbericht |
| 4 | Find it in your knowledge | Ask a question and get the answer from your policies, offers and project folders, with the source. | "What do we usually include in this offer?" · "What did we agree on this project?" | Im Firmenwissen finden | Stellen Sie eine Frage und erhalten Sie die Antwort aus Ihren Richtlinien, Offerten und Projektordnern, mit Quelle. | «Was gehört bei uns in diese Offerte?» · «Was haben wir bei diesem Projekt vereinbart?» |
| 5 | Tasks and reminders | Emails, notes and voice memos turned into tasks with owners and dates. | Meeting actions · Client follow-ups · Handover notes | Aufgaben und Erinnerungen | E-Mails, Notizen und Sprachmemos werden zu Aufgaben mit Verantwortlichen und Terminen. | Pendenzen aus Sitzungen · Nachfassen bei Kunden · Übergabenotizen |
| 6 | Same steps, every time | Checklists and templates your team follows the same way, so fewer things slip. | Offer checklist · Client onboarding · Report template | Jedes Mal dieselben Schritte | Checklisten und Vorlagen, die Ihr Team immer gleich anwendet, damit weniger vergessen geht. | Offert-Checkliste · Kunden-Onboarding · Berichtsvorlage |

### Section: Skills (id="skills"; replaces the Knowledge page)
**Eyebrow**
- EN: SKILLS
- DE: SKILLS

**H2**
- EN: Ready from day one. Then made for you.
- DE: Ab dem ersten Tag bereit. Danach für Sie gemacht.

**Intro**
- EN: A skill is a task Zuraio knows how to do your way: which information to use, which steps to follow and what the result should look like. Start with ready-made skills. Then we build the ones only your company has, together with your team.
- DE: Ein Skill ist eine Aufgabe, die Zuraio auf Ihre Art erledigt: welche Informationen es nutzt, welche Schritte es befolgt und wie das Ergebnis aussehen soll. Sie starten mit fertigen Skills. Danach entwickeln wir mit Ihrem Team die Skills, die nur Ihr Betrieb hat.

**Three cards**

| EN title | EN body | DE title | DE body |
|---|---|---|---|
| Your way of working | Steps, templates, tone and quality checks are part of the skill, not something people have to remember. | Ihre Arbeitsweise | Schritte, Vorlagen, Ton und Qualitätsprüfungen sind Teil des Skills, statt dass man sie sich merken muss. |
| Reviewed before use | New or changed skills are checked and approved before your team uses them. | Geprüft vor dem Einsatz | Neue oder geänderte Skills werden geprüft und freigegeben, bevor Ihr Team sie nutzt. |
| Kept up to date | Each skill has a version. When your process changes, you update the skill, not the AI. | Immer aktuell | Jeder Skill hat eine Version. Ändert sich Ihr Ablauf, passen Sie den Skill an, nicht die KI. |

**"Built with you" box** (same component as on the homepage)
- EN label: Built with you
- DE label: Mit Ihnen entwickelt
- Pills EN: Quote in our house format with our discount rules · Reply to tenants in our tone, with our standard clauses · Monthly client report the way our partners like it
- Pills DE: Offerte in unserem Hausformat mit unseren Rabattregeln · Antworten an Mieter in unserem Ton, mit unseren Standardklauseln · Monatlicher Kundenbericht so, wie ihn unsere Partner mögen

### Section: By role (4 compact columns)
**H2**
- EN: Useful for every team.
- DE: Nützlich für jedes Team.

| EN role | EN items | DE role | DE items |
|---|---|---|---|
| Owners and management | Meeting briefings · Decision summaries · Company-wide search | Geschäftsleitung | Sitzungsbriefings · Entscheidungsnotizen · Suche im ganzen Betrieb |
| Projects and operations | Project status · Handovers · Checklists | Projekte und Betrieb | Projektstand · Übergaben · Checklisten |
| Administration | Email summaries · Document search · Reminders | Administration | E-Mail-Zusammenfassungen · Dokumentensuche · Erinnerungen |
| Sales and clients | Client briefs · Offer drafts · Follow-ups | Verkauf und Kunden | Kundenbriefings · Offertentwürfe · Nachfassen |

### Section: People stay in charge (tinted band, 3 items in reasons-strip style)
**H2**
- EN: AI that supports your people, not replaces them.
- DE: KI, die Ihre Mitarbeitenden unterstützt, nicht ersetzt.

| EN title | EN body | DE title | DE body |
|---|---|---|---|
| Your team decides | Zuraio drafts and summarises. Nothing is sent, shared or changed without someone's OK. | Ihr Team entscheidet | Zuraio entwirft und fasst zusammen. Nichts wird ohne das OK einer Person versendet, geteilt oder geändert. |
| Sources you can check | Answers from your company knowledge show where they came from. | Prüfbare Quellen | Antworten aus Ihrem Firmenwissen zeigen, woher sie stammen. |
| Fits how you work | Zuraio connects to the tools your team already uses, instead of adding another one. | Passt zu Ihrer Arbeitsweise | Zuraio verbindet sich mit den Werkzeugen, die Ihr Team schon nutzt, statt ein weiteres hinzuzufügen. |

### Closing CTA band
- EN H2: Show us one task that takes too long.
- EN body: In 30 minutes we'll show you how Zuraio would handle it, with your own example.
- DE H2: Zeigen Sie uns eine Aufgabe, die zu lange dauert.
- DE body: In 30 Minuten zeigen wir Ihnen, wie Zuraio sie erledigen würde, mit Ihrem eigenen Beispiel.
- Button: Book a 30-minute demo / 30-Minuten-Demo buchen

---

## 2. Security (security.html, new; merges three pages)

### Hero (tinted band)
**Eyebrow**
- EN: SECURITY AND DATA CONTROL
- DE: SICHERHEIT UND DATENKONTROLLE

**H1**
- EN: Your data stays yours. You decide where it goes.
- DE: Ihre Daten bleiben Ihre. Sie entscheiden, wohin sie gehen.

**Sub**
- EN: Hosted by Infomaniak in Switzerland. Access follows your existing permissions, and nothing is sent without your OK.
- DE: Gehostet bei Infomaniak in der Schweiz. Der Zugriff folgt Ihren bestehenden Berechtigungen, und nichts wird ohne Ihr OK versendet.

**Trust list** (3 lines with ticks, the homepage component)
- EN: Hosted by Infomaniak in Switzerland / ISO 27001:2022 / Your data is never used to train AI models
- DE: Gehostet bei Infomaniak in der Schweiz / ISO 27001:2022 / Ihre Daten werden nie zum Trainieren von KI-Modellen verwendet

### Section: Five promises (cards with icons, 3 + 2 grid)
**H2**
- EN: What you can rely on.
- DE: Worauf Sie sich verlassen können.

| EN title | EN body | DE title | DE body |
|---|---|---|---|
| Your data stays yours | Your documents, emails and knowledge remain your property. We make no claim to them. | Ihre Daten bleiben Ihre | Ihre Dokumente, E-Mails und Ihr Wissen bleiben Ihr Eigentum. Wir erheben keinen Anspruch darauf. |
| Swiss by default | Zuraio runs in Switzerland. Other AI models are labelled, and only that task's content goes to them, when you choose. | Standardmässig Schweiz | Zuraio läuft in der Schweiz. Andere KI-Modelle sind gekennzeichnet, und nur der Inhalt dieser Aufgabe geht dorthin, wenn Sie es wählen. |
| Access follows your rules | Zuraio uses your existing Microsoft or Google users and groups. People only see what they're already allowed to see. | Zugriff nach Ihren Regeln | Zuraio nutzt Ihre bestehenden Microsoft- oder Google-Benutzer und -Gruppen. Mitarbeitende sehen nur, was sie heute schon sehen dürfen. |
| Nothing goes out without your OK | Zuraio prepares replies and changes as drafts. A person checks and sends. | Nichts geht ohne Ihr OK hinaus | Zuraio bereitet Antworten und Änderungen als Entwurf vor. Eine Person prüft und versendet. |
| A clear record | Who asked, which sources were used and who approved the result. | Klar nachvollziehbar | Wer gefragt hat, welche Quellen genutzt wurden und wer das Ergebnis freigegeben hat. |

### Section: Your choice of AI (dark section, same component as the homepage control section)
**Eyebrow**
- EN: AI MODELS
- DE: KI-MODELLE

**H2**
- EN: Never locked into a single AI provider.
- DE: Nie an einen einzigen KI-Anbieter gebunden.

**Body**
- EN: Zuraio chooses a suitable model for each task: Swiss-hosted by default, others only when you allow them. If a provider changes its prices, terms or availability, you switch models. Your data and your skills stay with you.
- DE: Zuraio wählt für jede Aufgabe ein passendes Modell: standardmässig in der Schweiz gehostet, andere nur, wenn Sie es zulassen. Ändert ein Anbieter Preise, Bedingungen oder Verfügbarkeit, wechseln Sie das Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen.

**Three cards**

| EN | DE |
|---|---|
| **Swiss default.** Everyday tasks run on a Swiss-hosted model. | **Schweizer Standard.** Alltägliche Aufgaben laufen auf einem Modell mit Schweizer Hosting. |
| **Your rules.** You decide which data may go to which model, or switch external models off completely. | **Ihre Regeln.** Sie legen fest, welche Daten an welches Modell dürfen, oder schalten externe Modelle ganz ab. |
| **Clearly labelled.** Every model shows where it runs before you use it. | **Klar gekennzeichnet.** Jedes Modell zeigt vor der Nutzung, wo es läuft. |

### Section: Where Zuraio runs (3 columns)
**H2**
- EN: Hosted in Switzerland, or closer still.
- DE: In der Schweiz gehostet, oder noch näher.

**Intro**
- EN: Most companies use our Swiss hosting. If you have stricter requirements, we design the set-up with your IT partner.
- DE: Die meisten Betriebe nutzen unser Schweizer Hosting. Haben Sie strengere Anforderungen, planen wir die Lösung mit Ihrem IT-Partner.

| EN title | EN body | EN tag | DE title | DE body | DE tag |
|---|---|---|---|---|---|
| Swiss hosting | Run by us at Infomaniak in Switzerland. The least effort for your IT. | Standard | Schweizer Hosting | Von uns bei Infomaniak in der Schweiz betrieben. Am wenigsten Aufwand für Ihre IT. | Standard |
| Hybrid | Sensitive knowledge stays on your own systems; the rest runs in Swiss hosting. | On request | Hybrid | Sensibles Wissen bleibt auf Ihren eigenen Systemen, der Rest läuft im Schweizer Hosting. | Auf Anfrage |
| On your own servers | Selected parts of Zuraio run in your infrastructure or private cloud. | On request | Auf eigenen Servern | Ausgewählte Teile von Zuraio laufen in Ihrer Infrastruktur oder Private Cloud. | Auf Anfrage |

### Section: Good to know (small print, 3 lines)
- EN: AI can make mistakes. Check important information against the source before you use it. Zuraio supports professional judgement; it doesn't replace legal, financial or other expert advice. Contract details, sub-processors and data flows are documented for each customer.
- DE: KI kann Fehler machen. Prüfen Sie wichtige Angaben anhand der Quelle, bevor Sie sie verwenden. Zuraio unterstützt fachliches Urteil, ersetzt aber keine rechtliche, finanzielle oder andere Fachberatung. Vertragsdetails, Unterauftragsbearbeiter und Datenflüsse werden für jeden Kunden dokumentiert.

### CTA band
- EN H2: Working with an IT partner?
- EN body: We involve them from the first call. They'll find the technical details here.
- EN buttons: For your IT partner → (technical-architecture.html) · Book a 30-minute demo
- DE H2: Sie arbeiten mit einem IT-Partner?
- DE body: Wir beziehen ihn ab dem ersten Gespräch ein. Die technischen Details findet er hier.
- DE buttons: Für Ihren IT-Partner → · 30-Minuten-Demo buchen

---

## 3. Integrations (integrations.html)

### Hero
**H1**
- EN: Works with the systems Swiss SMEs actually use.
- DE: Arbeitet mit den Systemen, die Schweizer KMU wirklich nutzen.

**Sub**
- EN: Your team keeps working in the tools it knows: from bexio and Klara to Microsoft 365, Revit and ArchiCAD. Zuraio connects to them, so your knowledge is in one place without moving it anywhere.
- DE: Ihr Team arbeitet weiter in den Werkzeugen, die es kennt: von bexio und Klara über Microsoft 365 bis zu Revit und ArchiCAD. Zuraio verbindet sich damit, so ist Ihr Wissen an einem Ort, ohne dass Sie es verschieben.

**Logo marquee:** the same component as the homepage.

### Section: Swiss business software (highlight band, tint)
**H2**
- EN: Connected in days, not months.
- DE: In Tagen verbunden, nicht in Monaten.

**Intro**
- EN: For the Swiss software most SMEs run on, the connection is quick to set up.
- DE: Bei der Schweizer Software, mit der die meisten KMU arbeiten, ist die Verbindung schnell eingerichtet.

**Four wordmark cards:** bexio · Klara · Proffix · Abacus (official logos, same files as the marquee)

### Section: All integrations (grouped list; system names as text, no logos except the four above and those already in the marquee)
**H2**
- EN: Everything Zuraio connects to.
- DE: Womit sich Zuraio verbindet.

| Group EN | Group DE | Systems |
|---|---|---|
| Finance, accounting and ERP | Finanzen, Buchhaltung und ERP | bexio · Klara · Proffix · Abacus · Banana Buchhaltung · Sage 50 · SAP Business One · Microsoft Dynamics 365 · Odoo |
| Email, calendar and collaboration | E-Mail, Kalender und Zusammenarbeit | Microsoft Outlook · Microsoft Exchange · Microsoft Teams · Gmail · Google Calendar · Slack |
| Documents and files | Dokumente und Dateien | Microsoft SharePoint · Microsoft OneDrive · Google Drive · Dropbox · network drives |
| CRM and sales | CRM und Verkauf | Salesforce · HubSpot · Microsoft Dynamics 365 Sales |
| CAD and BIM | CAD und BIM | Autodesk AutoCAD · Autodesk Revit · Graphisoft ArchiCAD · Allplan · Vectorworks · Bentley MicroStation · Trimble Tekla Structures |
| 3D modelling and visualisation | 3D-Modellierung und Visualisierung | Rhino · SketchUp · Autodesk 3ds Max · Cinema 4D · Blender · Twinmotion · Lumion |
| Engineering and product design | Engineering und Produktentwicklung | SolidWorks · Autodesk Inventor · Autodesk Fusion · Siemens NX · PTC Creo |
| Construction and project management | Bau- und Projektmanagement | Messerli · Sorba · Procore · Microsoft Project |
| Property management | Liegenschaftsverwaltung | ImmoTop2 · Rimo R5 · GARAIO REM · Abacus Immobilien |
| Maps and GIS | Karten und GIS | ArcGIS · QGIS |
| Your own systems | Eigene Systeme | APIs · databases · internal tools |

**Note under the table**
- EN: Don't see your software? If it has an interface or an export, we can usually connect it. Ask us.
- DE: Fehlt Ihre Software? Hat sie eine Schnittstelle oder einen Export, können wir sie meist anbinden. Fragen Sie uns.

**Trademark line** (footer of this page, small secondary text)
- EN: All product names are trademarks of their respective owners. Their use does not imply endorsement or partnership.
- DE: Alle Produktnamen sind Marken ihrer jeweiligen Inhaber. Ihre Nennung bedeutet keine Empfehlung oder Partnerschaft.

### Section: How we connect (4 small cards, plain language)
**H2**
- EN: How Zuraio connects.
- DE: Wie Zuraio sich verbindet.

| EN | DE |
|---|---|
| **Ready connectors** for common systems. | **Fertige Connectoren** für verbreitete Systeme. |
| **APIs** for business software with a standard interface. | **APIs** für Geschäftssoftware mit Standardschnittstelle. |
| **MCP**, the open standard for connecting AI to tools. | **MCP**, der offene Standard, um KI mit Werkzeugen zu verbinden. |
| **Custom connectors** for your own or industry-specific systems. | **Eigene Connectoren** für Ihre eigenen oder branchenspezifischen Systeme. |

**Note** (small text)
- EN: Zuraio doesn't replace your systems. Your data stays where it lives today.
- DE: Zuraio ersetzt Ihre Systeme nicht. Ihre Daten bleiben dort, wo sie heute sind.

### CTA band
- EN H2: Tell us which systems matter for your first task.
- EN body: We'll show you how Zuraio connects to them, in a 30-minute demo.
- DE H2: Sagen Sie uns, welche Systeme für Ihre erste Aufgabe wichtig sind.
- DE body: Wir zeigen Ihnen in einer 30-Minuten-Demo, wie Zuraio sich damit verbindet.
- Buttons: Book a 30-minute demo · For your IT partner →

---

## 4. For your IT partner (technical-architecture.html)

### Hero
**Eyebrow**
- EN: FOR YOUR IT PARTNER
- DE: FÜR IHREN IT-PARTNER

**H1**
- EN: The technical details, in one place.
- DE: Die technischen Details, an einem Ort.

**Sub**
- EN: How Zuraio handles identity, knowledge, models and records, and where it runs. If something here is unclear, write to us and we'll answer within one working day.
- DE: Wie Zuraio mit Identitäten, Wissen, Modellen und Protokollen umgeht, und wo es läuft. Ist etwas unklar, schreiben Sie uns. Wir antworten innerhalb eines Arbeitstags.

**Button:** Book a technical call / Technisches Gespräch vereinbaren

### Section: Architecture (keep the existing 7-layer diagram, translated)
**H2**
- EN: One platform, seven layers.
- DE: Eine Plattform, sieben Ebenen.

| # | EN | DE |
|---|---|---|
| 1 | **Access.** People work in the Zuraio interface or in connected apps. | **Zugang.** Mitarbeitende arbeiten in der Zuraio-Oberfläche oder in angebundenen Anwendungen. |
| 2 | **Identity and permissions.** Microsoft or Google identities and groups, plus optional Zuraio roles. Checked before any knowledge or action is used. | **Identität und Berechtigungen.** Identitäten und Gruppen von Microsoft oder Google, ergänzt durch optionale Zuraio-Rollen. Geprüft, bevor Wissen oder Aktionen genutzt werden. |
| 3 | **Orchestration.** Understands the task, picks the workflow, and coordinates knowledge, tools and models. | **Orchestrierung.** Versteht die Aufgabe, wählt den Ablauf und koordiniert Wissen, Werkzeuge und Modelle. |
| 4 | **Skills and company knowledge.** Versioned skills with templates and quality rules, managed outside the AI model. | **Skills und Firmenwissen.** Versionierte Skills mit Vorlagen und Qualitätsregeln, verwaltet ausserhalb des KI-Modells. |
| 5 | **Assistants and integrations.** Specialised assistants, connected via MCP, APIs, webhooks and connectors. | **Assistenten und Integrationen.** Spezialisierte Assistenten, angebunden über MCP, APIs, Webhooks und Connectoren. |
| 6 | **Model gateway.** Chooses an approved model per task, based on data class, location, quality and cost. | **Modell-Gateway.** Wählt pro Aufgabe ein freigegebenes Modell nach Datenklasse, Standort, Qualität und Kosten. |
| 7 | **Records and operations.** Requests, sources, actions and approvals are logged according to the agreed audit set-up. | **Protokolle und Betrieb.** Anfragen, Quellen, Aktionen und Freigaben werden gemäss der vereinbarten Audit-Konfiguration festgehalten. |

### Section: From request to result (numbered flow, 7 steps)
| EN | DE |
|---|---|
| A person asks a question or starts a task. | Eine Person stellt eine Frage oder startet eine Aufgabe. |
| Zuraio checks who they are and what they may access. | Zuraio prüft, wer sie ist und worauf sie zugreifen darf. |
| The right skill supplies the steps, templates and rules. | Der passende Skill liefert Schritte, Vorlagen und Regeln. |
| Zuraio picks the assistants, sources and an approved model. | Zuraio wählt Assistenten, Quellen und ein freigegebenes Modell. |
| It prepares an answer, a draft or a proposed action. | Es bereitet eine Antwort, einen Entwurf oder eine vorgeschlagene Aktion vor. |
| Anything that changes data or goes out waits for a person's OK. | Alles, was Daten ändert oder nach aussen geht, wartet auf das OK einer Person. |
| Sources, versions and approvals are recorded. | Quellen, Versionen und Freigaben werden festgehalten. |

### Section: Deployment, what we agree per customer (2-column checklist)
- EN H2: What we document for every set-up.
- DE H2: Was wir bei jeder Lösung dokumentieren.
- Items EN: Operator and responsibilities · Processing and storage locations · AI model providers · Identity provider · Data separation · Backup and recovery · Monitoring and support · Updates and patches · Retention and deletion · Approved external services
- Items DE: Betreiber und Verantwortlichkeiten · Verarbeitungs- und Speicherorte · KI-Modellanbieter · Identity Provider · Datentrennung · Backup und Wiederherstellung · Monitoring und Support · Updates und Patches · Aufbewahrung und Löschung · Zulässige externe Dienste

### CTA band
- EN H2: Let's go through it together.
- EN body: A technical call with one of our founders, with your IT partner if you like.
- EN button: Book a technical call
- DE H2: Gehen wir es gemeinsam durch.
- DE body: Ein technisches Gespräch mit einem unserer Gründer, gerne mit Ihrem IT-Partner.
- DE button: Technisches Gespräch vereinbaren

---

## 5. About (about.html)

### Hero
**Eyebrow**
- EN: ABOUT US
- DE: ÜBER UNS

**H1**
- EN: Four people in Switzerland, building the AI we wanted ourselves.
- DE: Vier Menschen in der Schweiz, die die KI bauen, die sie selbst wollten.

**Sub**
- EN: We kept losing hours to meeting prep, email and searching for the right document. Public AI tools helped, but they didn't know our company or respect our access rules. So we built Zuraio.
- DE: Wir haben Stunden mit Sitzungsvorbereitung, E-Mails und der Suche nach dem richtigen Dokument verloren. Öffentliche KI-Tools halfen, kannten aber weder unseren Betrieb noch unsere Zugriffsregeln. Also haben wir Zuraio gebaut.

### Section: Team (the homepage founders component: photo, name, role, email)
- EN H2: The people you'll talk to.
- DE H2: Die Menschen, mit denen Sie sprechen.
- Each: photo · name · email (no roles)
- Line below, EN: Write to us directly. You'll get a reply from one of us.
- Line below, DE: Schreiben Sie uns direkt. Sie erhalten eine Antwort von einem von uns.

### Section: What we believe (5 items, reasons-strip style with icons)

| EN | DE |
|---|---|
| **People decide.** AI prepares, your team judges and approves. | **Menschen entscheiden.** KI bereitet vor, Ihr Team beurteilt und gibt frei. |
| **Your data stays yours.** Swiss by default, and you choose what goes elsewhere. | **Ihre Daten bleiben Ihre.** Standardmässig in der Schweiz, und Sie entscheiden, was anderswohin geht. |
| **Start with real work.** One task that matters, not a big AI project. | **Mit echter Arbeit beginnen.** Eine Aufgabe, die zählt, statt eines grossen KI-Projekts. |
| **Show the source.** So people can check before they rely on it. | **Die Quelle zeigen.** Damit man prüfen kann, bevor man sich darauf verlässt. |
| **Built with you.** Your skills, your tone, your way of working. | **Mit Ihnen entwickelt.** Ihre Skills, Ihr Ton, Ihre Arbeitsweise. |

### Section: Starter partners (tinted box)
- EN H2: We're working with our first starter partners.
- EN body: Swiss companies that shape Zuraio with us, work directly with the founders and influence what we build next.
- EN link: Become a starter partner → (contact.html?interest=starter)
- DE H2: Wir arbeiten mit unseren ersten Starter-Partnern.
- DE body: Schweizer Betriebe, die Zuraio mitgestalten, direkt mit den Gründern arbeiten und beeinflussen, was wir als Nächstes bauen.
- DE link: Starter-Partner werden →

### CTA band
- EN H2: Let's talk about your company.
- DE H2: Sprechen wir über Ihren Betrieb.
- Button: Book a 30-minute demo / 30-Minuten-Demo buchen

---

## 6. FAQ (faq.html): one FAQ, the homepage questions included

**H1**
- EN: Questions we're often asked.
- DE: Fragen, die man uns oft stellt.

**Sub**
- EN: Short, honest answers. If yours isn't here, write to us.
- DE: Kurze, ehrliche Antworten. Fehlt Ihre Frage, schreiben Sie uns.

### Group 1: About Zuraio / Über Zuraio

**Why not just use ChatGPT or Copilot? / Warum nicht einfach ChatGPT oder Copilot?** (homepage item id="chatgpt-copilot")
- EN: You don't have to choose. ChatGPT only knows your company if someone shares the context each time. Copilot knows your Microsoft 365 world well, and reaching other systems usually needs connectors your IT builds. Zuraio comes connected to the systems Swiss SMEs use, like bexio, Abacus and Proffix, with skills we build with your team. It is model neutral: Swiss models by default, and GPT or Claude for tasks your company approves.
- DE: Sie müssen sich nicht entscheiden. ChatGPT kennt Ihr Unternehmen nur, wenn jemand den Kontext jedes Mal teilt. Copilot kennt Ihre Microsoft-365-Welt gut; für andere Systeme braucht es meist Konnektoren, die Ihre IT aufbaut. Zuraio ist bereits mit den Systemen verbunden, die Schweizer KMU nutzen, etwa bexio, Abacus und Proffix, und mit Skills, die wir mit Ihrem Team aufbauen. Zuraio ist modellneutral: standardmässig Schweizer Modelle, GPT oder Claude für Aufgaben, die Ihr Unternehmen freigibt.

**What is Zuraio? / Was ist Zuraio?**
- EN: An AI assistant for Swiss SMEs. It answers emails, prepares meetings and finds information in your company knowledge, with sources, hosted in Switzerland. It works with skills: tasks it knows how to do your way.
- DE: Ein KI-Assistent für Schweizer KMU. Er beantwortet E-Mails, bereitet Sitzungen vor und findet Informationen in Ihrem Firmenwissen, mit Quellen und in der Schweiz gehostet. Er arbeitet mit Skills: Aufgaben, die er auf Ihre Art erledigt.

**Who is Zuraio for? / Für wen ist Zuraio?**
- EN: Swiss companies with roughly 5 to 250 employees whose knowledge is spread across email, documents and business software. Many of our first conversations are with architecture and engineering offices, fiduciaries and property managers.
- DE: Für Schweizer Betriebe mit rund 5 bis 250 Mitarbeitenden, deren Wissen in E-Mails, Dokumenten und Geschäftssoftware verteilt ist. Viele unserer ersten Gespräche führen wir mit Architektur- und Ingenieurbüros, Treuhänderinnen und Treuhändern sowie Liegenschaftsverwaltungen.

**Which software does Zuraio work with? / Mit welcher Software arbeitet Zuraio?**
- EN: Swiss business software such as bexio, Klara, Proffix and Abacus, Microsoft 365 and Google Workspace, CRM systems, and technical software such as AutoCAD, Revit, ArchiCAD and Rhino. The full list is on our Integrations page.
- DE: Mit Schweizer Geschäftssoftware wie bexio, Klara, Proffix und Abacus, mit Microsoft 365 und Google Workspace, mit CRM-Systemen und mit technischer Software wie AutoCAD, Revit, ArchiCAD und Rhino. Die vollständige Liste finden Sie auf unserer Seite Integrationen.

**How do we get started? / Wie fangen wir an?**
- EN: With a 30-minute talk where we pick one task worth improving. Then a set-up workshop where we build your first skill with your team, a check-in after two weeks, and you decide whether to continue.
- DE: Mit einem 30-minütigen Gespräch, in dem wir eine Aufgabe auswählen, die sich lohnt. Danach folgen ein Einrichtungs-Workshop, in dem wir mit Ihrem Team den ersten Skill entwickeln, und nach zwei Wochen eine Zwischenbilanz. Dann entscheiden Sie, ob es weitergeht.

**What is a starter partner? / Was ist ein Starter-Partner?**
- EN: One of our first customers. Starter partners work directly with the founders, get early access and help decide what we build next. Commercial terms are agreed individually.
- DE: Einer unserer ersten Kunden. Starter-Partner arbeiten direkt mit den Gründern, erhalten frühen Zugang und bestimmen mit, was wir als Nächstes bauen. Die kommerziellen Bedingungen vereinbaren wir individuell.

### Group 2: Data and control / Daten und Kontrolle

**Is our data kept in Switzerland? / Bleiben unsere Daten in der Schweiz?**
- EN: Yes, by default. Zuraio and your company data are hosted by Infomaniak in Switzerland, and the default AI model runs in Switzerland too. For individual tasks you can choose another model; each one is labelled with where it runs, and only that task's content is sent.
- DE: Ja, standardmässig. Zuraio und Ihre Firmendaten werden bei Infomaniak in der Schweiz gehostet, und auch das Standardmodell läuft in der Schweiz. Für einzelne Aufgaben können Sie ein anderes Modell wählen. Jedes ist gekennzeichnet, damit Sie sehen, wo es arbeitet, und nur der Inhalt dieser Aufgabe wird übermittelt.

**Is our data used to train AI models? / Werden unsere Daten zum Trainieren von KI-Modellen verwendet?**
- EN: No. Your data is never used to train AI models.
- DE: Nein. Ihre Daten werden nie zum Trainieren von KI-Modellen verwendet.

**Can employees see information they shouldn't? / Sehen Mitarbeitende Informationen, die sie nicht sehen dürfen?**
- EN: No. Zuraio uses your existing permissions from Microsoft or Google. People only see what they're already allowed to see.
- DE: Nein. Zuraio übernimmt Ihre bestehenden Berechtigungen von Microsoft oder Google. Mitarbeitende sehen nur, was sie heute schon sehen dürfen.

**Does Zuraio send anything automatically? / Versendet Zuraio etwas automatisch?**
- EN: No. Replies and changes are prepared as drafts. A person checks them and decides.
- DE: Nein. Antworten und Änderungen werden als Entwurf vorbereitet. Eine Person prüft sie und entscheidet.

**What happens if an AI provider changes its prices or terms? / Was passiert, wenn ein KI-Anbieter Preise oder Bedingungen ändert?**
- EN: You switch to another model. Your data and your skills stay with you, because they're kept separate from the model.
- DE: Sie wechseln zu einem anderen Modell. Ihre Daten und Ihre Skills bleiben bei Ihnen, weil sie vom Modell getrennt sind.

**Can we see which sources were used? / Sehen wir, welche Quellen verwendet wurden?**
- EN: Yes. Answers based on your company knowledge show the documents or systems they came from.
- DE: Ja. Antworten aus Ihrem Firmenwissen zeigen die Dokumente oder Systeme, aus denen sie stammen.

### Group 3: For your IT team / Für Ihr IT-Team

**Where is our data stored? / Wo werden unsere Daten gespeichert?**
- EN: In Swiss hosting at Infomaniak (ISO 27001:2022). Hybrid and on-premise set-ups are possible on request.
- DE: Im Schweizer Hosting bei Infomaniak (ISO 27001:2022). Hybride Lösungen oder der Betrieb auf eigenen Servern sind auf Anfrage möglich.

**Can external AI models be switched off? / Lassen sich externe KI-Modelle abschalten?**
- EN: Yes. You decide which models are allowed, and you can limit Zuraio to Swiss-hosted models only.
- DE: Ja. Sie legen fest, welche Modelle erlaubt sind, und können Zuraio auf Modelle mit Schweizer Hosting beschränken.

**Are our chats with Zuraio saved? / Werden unsere Chats mit Zuraio gespeichert?**
- EN: Yes, inside your company's Zuraio, so people can come back to earlier work. Chats belong to the employee and to your company. They aren't shared outside your company and are never used to train AI models.
- DE: Ja, in der Zuraio-Umgebung Ihres Betriebs, damit man auf frühere Arbeit zurückgreifen kann. Chats gehören der jeweiligen Person und Ihrem Betrieb. Sie werden nicht ausserhalb Ihres Betriebs geteilt und nie zum Trainieren von KI-Modellen verwendet.

**Are there audit records? / Gibt es Audit-Protokolle?**
- EN: Yes. Requests, sources, actions and approvals are recorded according to the audit set-up we agree with you.
- DE: Ja. Anfragen, Quellen, Aktionen und Freigaben werden gemäss der mit Ihnen vereinbarten Audit-Konfiguration festgehalten.

**How do you connect to our systems? / Wie verbinden Sie sich mit unseren Systemen?**
- EN: Through ready connectors, APIs, MCP or custom connectors. The Integrations page lists the systems we connect to.
- DE: Über fertige Connectoren, APIs, MCP oder eigene Connectoren. Die Seite Integrationen listet die Systeme auf, mit denen wir uns verbinden.

**Closing line**
- EN: Still have a question? Write to us directly, and one of the founders will reply.
- DE: Noch eine Frage? Schreiben Sie uns direkt, einer unserer Gründer antwortet Ihnen.

---

## 7. Contact (contact.html)

### Hero
**H1**
- EN: Let's find your first task.
- DE: Finden wir Ihre erste Aufgabe.

**Sub**
- EN: Tell us a little about your company. One of the founders will get back to you within one working day.
- DE: Erzählen Sie uns kurz von Ihrem Betrieb. Einer unserer Gründer meldet sich innerhalb eines Arbeitstags.
- (Use the same promise as the homepage, or drop it everywhere.)

### Form (shorter; fewer fields = less hesitation)

| Field | EN | DE |
|---|---|---|
| Name * | Name | Name |
| Company * | Company | Firma |
| Email * | Email | E-Mail |
| Company size (optional, select) | 1-9 · 10-49 · 50-249 · 250+ | 1-9 · 10-49 · 50-249 · 250+ |
| What would you like to improve? (optional, textarea) | Placeholder: "For example: answering client emails, preparing meetings, quotes" | Platzhalter: «Zum Beispiel: Kunden-E-Mails beantworten, Sitzungen vorbereiten, Offerten» |
| Checkbox | I'm interested in becoming a starter partner | Ich interessiere mich für eine Starter-Partnerschaft |

- Button: Send / Senden
- Under the button, EN: Your message goes straight to the founders, nowhere else.
- Under the button, DE: Ihre Nachricht geht direkt an die Gründer, sonst nirgendwohin.
- Remove the fields: Role, Phone, Website, Main interest dropdown.

### Section: Or write to us directly
Show the four founders (photo, name, email; no roles), the same component as the homepage.

### Section: Starter partners
Same box and copy as on the About page.

---

# PART B: CURSOR PROMPT

Paste everything below into Cursor, together with this file.

```
Site redesign and copy (all pages except the homepage preview). EN + DE.

Copy source: zuraio-site-rewrite.md (attached), Part A. Use the copy exactly as written. Swiss High German in DE ("ss", «», "Sie"). The dash guard must pass on every copy file.

0. Ground rules
- Same design system as the alt homepage: tokens, --alt-section-y spacing, 1120px container, type scale, card style (white, 1px hairline, radius, icon in a light-olive circle), reasons-strip component, dark control section, tinted chapter bands, FAQ accordion, CTA band, footer. No new visual styles.
- Put all copy in copy files (EN and DE), not in HTML. Extend scripts/check-alt-home-copy-dashes.mjs to every copy file and make the build fail on – or —.
- The copy has no placeholders. Founder roles are intentionally omitted everywhere (homepage included): show photo, name and email only.
- There is no security factsheet PDF. Change the homepage link text to EN "For your IT partner: technical details →" / DE "Für Ihren IT-Partner: technische Details →" (link to technical-architecture.html). Remove any other factsheet mention.
- Homepage founders section: add the line EN "We reply within one working day." / DE "Wir antworten innerhalb eines Arbeitstags." if it isn't there yet.
- No visible TODOs, internal notes or team instructions anywhere. Remove all of them.
- Use one CTA label everywhere: "Book a 30-minute demo" / "30-Minuten-Demo buchen" (the technical page also has "Book a technical call" / "Technisches Gespräch vereinbaren").
- Remove the internal product names from all customer-facing copy: "Zuraio AI Hub" becomes "Zuraio"; drop "SkillOS", "EmailAI" and "MSConnector" (the technical page may say "skills platform" instead).
- Same nav and footer as the alt homepage. Nav: How it helps · Skills (how-it-helps.html#skills) · Security (security.html) · About. Footer also links Integrations, For your IT partner, FAQ, Contact and the legal pages.

1. Structure and redirects
- Build: how-it-helps, security (new), integrations, technical-architecture, about, faq, contact (EN + DE).
- Merge knowledge into how-it-helps#skills. Merge data-control, deployment-models and ai-governance into security. Keep the old URLs as redirect pages (meta refresh + canonical) to the new location and anchor: data-control → security.html, deployment-models → security.html#hosting, ai-governance → security.html#today, knowledge → how-it-helps.html#skills.
- Unpublish from nav, footer and sitemap (keep the files): resources, pricing (EN + DE), new-in-zuraio. Remove every link to them, including the "See all prices" link on the homepage FAQ.

2. Page layouts (sections in this order; chapter colours paper/tint/dark as on the homepage)
how-it-helps: hero (tint) → use cases, 6 cards 3x2 (paper) → skills section id="skills" with 3 cards + "Built with you" box (tint) → by role, 4 columns (paper) → "AI that supports your people", reasons-strip style (tint) → CTA band (paper).
security: hero with 3-line trust list (tint) → five promises, cards 3+2 (paper) → AI models, dark control section with 3 cards (dark) → hosting options, 3 columns with tag pills, id="hosting" (tint) → good-to-know small print (paper) → IT partner CTA band (paper).
integrations: hero + logo marquee (paper, the homepage marquee component) → "Connected in days" band with 4 wordmark cards bexio, Klara, Proffix, Abacus (tint) → all integrations, grouped list (paper) → how we connect, 4 small cards (tint) → CTA band (paper) → trademark line above the footer.
technical-architecture: hero (tint) → 7-layer diagram, translated, keeping the existing diagram but restyled with tokens (paper) → request-to-result numbered flow (tint) → "What we document" 2-column checklist (paper) → CTA band (tint).
about: hero (tint) → team, the homepage founders component (paper) → what we believe, reasons-strip style with 5 items (tint) → starter partners box (paper) → CTA band.
faq: hero (tint) → three accordion groups with group headings (paper) → closing line + CTA.
contact: hero (tint) → short form + founders column side by side on desktop, stacked on mobile (paper) → starter partners box (tint).

3. New components (reuse tokens)
- Wordmark card: white card, 1px hairline, official logo centred at the marquee wordmark height, no text. Four in a row on desktop, 2x2 on mobile.
- Grouped integrations list: group name as a row heading (eyebrow style, small caps), systems as plain text separated by " · " (16px, secondary colour). No logos and no status labels. On mobile each group stacks.
- Hosting tag pill: "Standard" = olive tint with dark olive text; "On request" / "Auf Anfrage" = neutral grey. 12.5px, 600.
- Trademark line on the integrations page: small secondary text above the footer, copy as given.
- Remove any status-table, status-pill or "today and next" code from earlier builds.

4. Contact form
- Fields exactly as in the copy (Name*, Company*, Email*, Company size optional, textarea optional, starter-partner checkbox). Remove Role, Phone, Website and the Main interest dropdown.
- contact.html?interest=starter pre-ticks the checkbox.
- Keep the existing submission handling. Don't add tracking.

5. Mobile (390px)
- Same rules as the homepage: no text below 15px (except 14px small lines), 56px section padding, cards stacked, integration groups stack, wordmark cards 2x2, diagram stacks vertically.

6. Report back
- Deployed URLs (EN + DE) with the cache key for every page.
- Screenshots of each page at 1280 and 390 (EN + DE).
- Confirmation that the redirects work and that no page links to resources, pricing or new-in-zuraio.
```
