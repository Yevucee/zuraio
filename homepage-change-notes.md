# Homepage change notes

## Implemented

- Correct localized content and metadata (EN, DE, FR, IT) including page title, meta description, Open Graph title and description
- Updated contact email to `michael.wili@zuraio.ch` across visible text, mailto links, config and footer
- Swiss SME positioning eyebrow above the hero headline (all four languages)
- Fifth hero trust-bar item: choice of AI model, linked to `#models` on the technical architecture page
- Revised homepage section order: Hero → Recognise this? → More than a Chatbot → Data Control → See Your Assistant Working → Integrations → AI Governance → FAQ → Why We Built It → Final CTA
- ChatGPT / Microsoft Copilot / Zuraio three-column comparison beneath the animated routes diagram
- Infomaniak hosting information in the Data Control section (ISO 27001:2022 certification attributed to Infomaniak, not Zuraio)
- Three concrete example questions in See Your Assistant Working
- Named integration categories: Microsoft 365, SharePoint, Exchange, Teams, CRM, ERP, MCP, REST API
- Clearer AI Governance heading: “A clear record from request to approval” (localized)
- IT FAQ subsection on the full FAQ page with homepage link
- Legal page bodies localized in German, French and Italian (Impressum, Privacy, Terms, Cookies) using approved translations

## Deliberate decisions

- SkillOS, EmailAI and MSConnector remain on technical pages because the homepage prioritises ease of understanding for business visitors. Internal product and architecture terminology remains on the technical pages, where visitors are actively looking for that detail.
- Recognise this? remains a problem-recognition section. Concrete Zuraio questions appear later in See Your Assistant Working.
- Data Control remains early because control of company data is a central Zuraio selling point.
- AI Governance remains separate from Data Control because it explains reviewability and audit history rather than deployment and access control.
- The `?lang=` URL structure remains until a planned SEO migration is undertaken.
- Legal page translations preserve placeholder status and provisional warnings. They are not a legal review or approval.

## Outstanding before launch

- Replace Impressum registered-address TODO fields with the complete legal address (visible `[[LEGAL ADDRESS – CONFIRM BEFORE LAUNCH]]` removed in pre-merge review; TODO fields remain).
- Confirm that `michael.wili@zuraio.ch` receives mail (mailbox testing required — not performed in this implementation).
- Select and approve a new genuine team photograph.
- Confirm any FAQ answers not fully supported by approved technical documentation (see Technical confirmation required below).
- Qualified legal review still required for all legal page content (Impressum, Privacy, Terms, Cookies). Localized bodies remain provisional placeholders.

## Technical confirmation required

All IT FAQ answers were composed from existing approved technical pages (deployment models, data control, technical architecture). No fabricated retention periods or guarantees were added. Review recommended before publication:

- Exact query retention behaviour by deployment and component
- Scope of audit records by component maturity
- Policy enforcement details for disabling external cloud models
