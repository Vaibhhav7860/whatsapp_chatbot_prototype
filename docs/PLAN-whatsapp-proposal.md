# WhatsApp Event Chatbot — Vendor Proposal

> **Prepared by:** [Your Name / Brand]
> **Date:** February 23, 2026
> **Version:** 2.0
> **Status:** Draft for Review
> **Validity:** This proposal is valid for 30 days from the date above.

---

## Executive Summary

This proposal responds to the **WhatsApp Event Chatbot — Requirement Brief** and provides a detailed assessment across all three requested sections: Feature Scope, White Labelling & Multi-Event Scalability, and Hosting & WhatsApp Business Account Options.

The proposed solution is a **hybrid conversational assistant** built on the **WhatsApp Cloud API**, designed to support large-scale events (5,000–50,000+ attendees) across the entire event lifecycle — before, during, and after.

### Key Highlights

| Metric | Value |
|--------|-------|
| **Overall Timeline** | 6 weeks |
| **Total Project Cost** | ₹1,25,000 (~$1,500 USD) |
| **Recurring Monthly Cost** | $150 – $800+ (varies by volume) |
| **Event App Feature Coverage** | ~70–75% achievable in WhatsApp |

---

## Table of Contents

1. [Section 1: Feature Scope & Capability Assessment](#section-1-feature-scope--capability-assessment)
2. [Section 2: White Labelling & Multi-Event Scalability](#section-2-white-labelling--multi-event-scalability)
3. [Section 3: Hosting & WhatsApp Business Account Options](#section-3-hosting--whatsapp-business-account-options)
4. [Consolidated Pricing & Timeline Summary](#consolidated-pricing--timeline-summary)
5. [Appendices](#appendices)

---

## Section 1: Feature Scope & Capability Assessment

### 1.1 Feature Mapping — Event App vs. WhatsApp Chatbot

The following table maps the **core event features** to their WhatsApp chatbot equivalents:

| # | Event App Feature | WhatsApp Implementation | Feasibility |
|---|-------------------|------------------------|-------------|
| 1 | **Event Registration** | Conversational form flow → collect name, email, company, etc. QR code / link-based ticket delivery. | ✅ High |
| 2 | **Digital Tickets / E-Pass** | Auto-generated QR code sent as image message. QR scanned at venue for check-in. | ✅ High |
| 3 | **Agenda / Schedule** | Interactive list messages with session details; day/track filters. (Max 10 items per list.) | ✅ High |
| 4 | **Speaker Profiles** | Rich text cards with image, bio, and session links. Sent as media messages with CTA buttons. | ✅ High |
| 5 | **Session Reminders** | Scheduled template messages before sessions. Requires pre-approved utility templates. | ✅ High |
| 6 | **Push Notifications / Announcements** | Template messages for broadcast announcements. Subject to Meta's template approval & pricing. | ✅ High |
| 7 | **FAQs & Information** | Keyword-based or menu-driven FAQ flows with pre-configured responses. | ✅ High |
| 8 | **Venue Map** | Static map images or PDF; pin-drop location sharing. (No interactive maps.) | ✅ High |
| 9 | **Document Sharing** | PDF/image attachments — brochures, presentations, guidelines. Max 100 MB per document. | ✅ High |
| 10 | **Exhibitor Directory** | Searchable list via keyword; bot returns exhibitor cards with contact info. | ✅ High |
| 11 | **Feedback & Surveys** | Conversational survey flows post-session/event with multi-step Q&A and rating buttons. | ✅ High |
| 12 | **Multi-language Support** | Language detection + localized response templates. Requires translated content per language. | ✅ High |
| 13 | **Emergency Alerts** | Broadcast utility template messages to all registered users. Rate-limited by Meta. | ✅ High |
| 14 | **Post-Event Content** | Automated follow-up messages with recordings, slides, and certificates. | ✅ High |

### 1.2 Feature Coverage Assessment

| Category | Coverage |
|----------|----------|
| **Information Delivery** (agenda, speakers, maps, FAQs) | **~90%** |
| **Transactional** (registration, tickets) | **~80%** |
| **Communication** (notifications, reminders, broadcasts) | **~95%** |
| **Overall Weighted Average** | **~70–75%** |

### 1.3 WhatsApp Platform Limitations

> [!IMPORTANT]
> These limitations are inherent to the WhatsApp platform and cannot be worked around architecturally.

| Limitation | Impact | Mitigation |
|------------|--------|------------|
| **No rich UI components** (no carousels, tabs, grids) | Visual experience is text/image-based only | Use structured messages, rich media cards, and CTA buttons |
| **Interactive message constraints** (max 3 reply buttons, max 10 list items) | Multi-option interactions are cumbersome | Paginate results; use keyword search for large datasets |
| **24-hour messaging window** | Cannot proactively message without pre-approved templates | Use utility/marketing templates for outbound messages |
| **Template approval latency** (1–48 hours) | Last-minute content changes can be delayed | Pre-approve template variants; use dynamic variables |
| **Rate limits** (tier-based, starting at 250 msgs/day) | High-volume broadcasts may be throttled | Request Tier 4 in advance; stagger broadcasts |
| **No persistent UI state** | User can lose context in long conversations | Implement "main menu" keyword; session-aware conversation management |
| **Media file limits** (images 5 MB, video 16 MB, docs 100 MB) | Large files may exceed limits | Compress media; use download links for large files |

### 1.4 Recommended Architecture

We recommend a **Hybrid Architecture** combining rule-based flows with AI-powered natural language understanding:

- **Rule-Based Engine** — Handles structured, predictable flows (80% of interactions): menu navigation, registration, session browsing, templates, and quick replies.
- **AI/NLP Engine** — Handles the remaining 20%: free-text queries, intent recognition, entity extraction, contextual responses, and multi-language understanding.
- **Backend** — Node.js (Express/Fastify) or Python (FastAPI) for high async webhook throughput.
- **Database** — PostgreSQL for relational event data + Redis for session state & caching.
- **Message Queue** — Bull/BullMQ or Celery to handle message spikes during event peaks (50K+ concurrent users).
- **Media Storage** — AWS S3 / GCP Cloud Storage for QR codes, venue maps, and documents.
- **NLP Provider** — OpenAI GPT-4o-mini for cost-effective intent classification and contextual responses; alternatively Dialogflow CX.

### 1.5 Section 1 — Feasibility, Cost & Timeline

| Deliverable | Feasibility | Cost Estimate | Timeline |
|-------------|-------------|---------------|----------|
| **MVP — Core Event Chatbot** | ✅ Highly Feasible | **₹70,000 (~$840)** | **4–5 weeks** |
| — Registration flow + Digital ticket / QR pass | ✅ | Included | Weeks 1–2 |
| — Agenda, speaker profiles & FAQ | ✅ | Included | Weeks 2–3 |
| — Notifications, reminders & announcements | ✅ | Included | Weeks 3–4 |
| — Feedback, post-event content & emergency alerts | ✅ | Included | Week 4 |
| — Admin dashboard (basic) | ✅ | Included | Weeks 4–5 |
| — Testing & deployment | ✅ | Included | Weeks 5–6 |
| **Scaled Solution — Full Platform** | ✅ Feasible | **₹1,25,000 (~$1,500)** | **6 weeks (parallel tracks)** |
| — Multi-tenant backend (parallel with MVP, Weeks 3–6) | ✅ | +₹25,000 (~$300) | Weeks 3–6 |
| — White-label admin panel (parallel, Weeks 4–6) | ✅ | +₹18,000 (~$215) | Weeks 4–6 |
| — Hosting model setup + client onboarding (Week 6) | ✅ | +₹12,000 (~$145) | Week 5–6 |

> [!NOTE]
> The 6-week timeline is achieved by running multi-tenant and white-label development **in parallel** with the core MVP build (Weeks 3–6), rather than sequentially.

---

## Section 2: White Labelling & Multi-Event Scalability

### 2.1 White-Label Architecture — Feasibility

> **Verdict: ✅ Fully Feasible**

A single chatbot backend can be white-labelled and deployed across multiple events and brands. The architecture uses a **multi-tenant design pattern** where each client/event is an isolated "tenant" with its own configuration, branding, and data space — all running on shared infrastructure.

**How it works:** A shared platform core (webhook router, message processor, NLP engine) feeds into a **Tenant Router** that directs each incoming message to the correct tenant context. Each tenant (e.g., Event 1, Event 2, Event 3) has its own isolated configuration, branding, data, and WhatsApp number.

### 2.2 Multi-Event Simultaneous Support

| Question | Answer |
|----------|--------|
| Can the same backend support multiple events simultaneously? | **Yes.** Each event operates as an isolated tenant with its own database partition, content, schedule, and user base. |
| Is there a limit on concurrent events? | **No hard limit.** Limited only by infrastructure capacity. Horizontal scaling handles growth. |
| How are events isolated? | Via **tenant_id** scoping across all database queries, message queues, and API routes. Data never leaks between tenants. |
| Can events share attendee data? | **Optional.** Cross-event attendee profiles can be enabled with explicit opt-in, useful for recurring conferences. |

### 2.3 WhatsApp Business Number Requirements

> [!WARNING]
> This is a critical cost and compliance consideration.

| Setup Model | Description | Recommended For |
|-------------|-------------|-----------------|
| **One number per client/brand** | Each client gets their own dedicated WhatsApp Business Number registered under their WABA. | ✅ **Recommended.** Best for brand identity, trust, and compliance. |
| **One number per event** | Each event gets a unique WhatsApp number. Numbers can be recycled after events. | Suitable for short-lived events with no brand continuity. |
| **Shared number with routing** | Single WhatsApp number handles multiple events; bot routes by keyword/link. | ⚠️ **Not recommended.** Confusing UX; Meta policy risks; no brand isolation. |

**Meta's Rules:**
- Each WhatsApp Business Account (WABA) can hold **up to 20 phone numbers**
- Each phone number is linked to **one WhatsApp Business Profile** (name, logo, description)
- **Different brands must use different numbers** — you cannot dynamically change the business profile per conversation
- Numbers require **phone verification** (SMS or voice call)

**Recommendation:** Use **separate WhatsApp Business Numbers per client/brand**, all managed under a parent WABA (yours or the client's, depending on hosting model — see Section 3).

### 2.4 White-Label Branding Capabilities

| Element | Customizable? | Details |
|---------|---------------|---------|
| **WhatsApp Business Profile** (name, logo, description, address) | ✅ Yes | Configured per phone number in Meta Business Manager |
| **Greeting Message** | ✅ Yes | Unique per tenant, set via API |
| **Menu Structure & Flows** | ✅ Yes | Fully configurable per event via admin panel |
| **Message Templates** | ✅ Yes | Each WABA submits its own templates for Meta approval |
| **Bot Personality & Tone** | ✅ Yes | AI prompt customization per tenant |
| **Admin Dashboard Branding** | ✅ Yes | White-labeled admin panel with client logo, colors, domain |
| **Chat Bubble / Widget Color** | ❌ No | WhatsApp UI is controlled by WhatsApp — cannot be customized |
| **Chat Background** | ❌ No | User-controlled on their WhatsApp app |
| **Message Font / Typography** | ❌ No | Fixed by WhatsApp; supports bold, italic, strikethrough, monospace |

### 2.5 Section 2 — Feasibility, Cost & Timeline

| Deliverable | Feasibility | Incremental Cost | Incremental Timeline |
|-------------|-------------|------------------|----------------------|
| **Multi-tenant architecture** | ✅ Highly Feasible | **₹25,000 (~$300)** | **Weeks 3–6** (parallel with MVP) |
| — Tenant isolation & routing | ✅ | Included | Week 3–4 |
| — Per-tenant configuration engine | ✅ | Included | Week 4–5 |
| — Tenant provisioning API | ✅ | Included | Week 5–6 |
| **White-label admin panel** | ✅ Feasible | **₹18,000 (~$215)** | **Weeks 4–6** (parallel) |
| — Branded dashboard per client | ✅ | Included | Week 4–5 |
| — Self-service event config UI | ✅ | Included | Week 5–6 |
| **Per-client WhatsApp number setup** | ✅ Feasible | **₹5,000 – ₹10,000 per client** (~$60–$120, one-time) | **1–3 days per client** |

**Recurring Cost for Multi-Tenant Operations:**

| Component | Monthly Cost |
|-----------|-------------|
| Additional server resources per 5 active tenants | +$30 – $60/mo |
| Database scaling (managed PostgreSQL) | +$20 – $50/mo per tier |
| BSP platform fee (if using third-party BSP) | $50 – $200/mo per WABA |

---

## Section 3: Hosting & WhatsApp Business Account Options

### 3.1 Deployment Model Overview

We support **both deployment models**, and they can coexist within the same platform:

| Model | Description | Control | Billing |
|-------|-------------|---------|---------|
| **Model A: Your WABA** (Platform-hosted) | Chatbot infrastructure AND WhatsApp Business Account are under YOUR Meta Business account. Clients' phone numbers are added to your WABA. | You manage everything — infrastructure, API, compliance, billing. | You pay Meta for API usage → Bill clients with markup. |
| **Model B: Client's WABA** (Client-hosted) | Chatbot infrastructure is yours, but the WhatsApp Business Account is under the CLIENT's Meta Business account. | Client owns their WABA and data. You provide the bot platform. | Client pays Meta directly. You charge platform fees. |
| **Model C: Hybrid** | Support both models depending on client preference. | Flexible per client. | Mixed billing. |

### 3.2 Model A — Platform-Hosted WABA (Recommended for Simplicity)

**How it works:**
1. You register your own Meta Business Account
2. You apply for WhatsApp Business API access (via Cloud API)
3. You add client phone numbers under your WABA
4. All API calls, template management, and message handling are under your control
5. Clients interact with your admin panel — no direct Meta access needed

**Compliance & Verification Requirements:**

| Requirement | Details |
|-------------|---------|
| Meta Business Verification | ✅ Required — submit business documents (registration, website, utility bill) |
| Official Business Website | ✅ Required — must be live and match business name |
| WhatsApp Commerce Policy | ✅ Must comply — no prohibited content categories |
| Two-Factor Authentication | ✅ Required on Business Manager |
| Display Name Approval | ✅ Meta reviews the business display name (1–3 business days) |
| Phone Number Verification | ✅ SMS or voice call verification per number |
| Facebook Business Page | ✅ Required — linked to your Meta Business account |

**Operational Requirements:**

| Aspect | Detail |
|--------|--------|
| Messaging Tier | Start at Tier 1 (1K customers/day) → Request upgrade to Tier 4 (100K/day) for large events |
| Quality Rating | Must maintain "Green" quality — too many user blocks/reports drops rating |
| Template Library Management | You manage templates for all clients — plan for organized naming conventions |
| Data Controller Status | You are the data controller — must have DPA with clients and privacy policy |

### 3.3 Model B — Client-Hosted WABA

**How it works:**
1. Client registers their own Meta Business Account
2. Client applies for and gets verified for WhatsApp Business API
3. Client generates a **System User Token** and shares it with you (securely)
4. Your platform uses the client's token to send/receive messages on their behalf
5. Client retains full ownership of their WABA, templates, and message history

**Compliance & Verification Requirements (Client's Responsibility):**

| Requirement | Who Does It |
|-------------|-------------|
| Meta Business Verification | Client |
| Phone Number Provision | Client |
| Display Name Approval | Client (with your guidance) |
| Template Submission | Client (or you, via their System User Token) |
| Commerce Policy Compliance | Client |
| Messaging Tier Management | Client (with your guidance) |

**Your Platform Requirements:**

| Requirement | Details |
|-------------|---------|
| Secure Token Storage | Encrypted at rest (AES-256) and in transit (TLS 1.3) |
| Webhook Configuration | Client sets your webhook URL in their Meta App dashboard |
| Multi-WABA Support | Your platform must route messages based on which WABA sent the webhook |
| SLA / Support | You provide technical support for platform; client handles Meta relationship |

### 3.4 Comparison Matrix

| Factor | Model A (Your WABA) | Model B (Client's WABA) |
|--------|---------------------|------------------------|
| **Setup Speed** | ✅ Faster (you control everything) | ⚠️ Slower (client must complete Meta verification: 1–7 days) |
| **Client Effort** | ✅ Minimal — client only provides content | ⚠️ Moderate — client must register, verify, share token |
| **Data Ownership** | ⚠️ You are data controller | ✅ Client owns all data |
| **Brand Trust** | ⚠️ Business profile shows YOUR company | ✅ Shows CLIENT's brand — better trust |
| **Billing Control** | ✅ You consolidate billing, markup API costs | ⚠️ Client pays Meta directly; you only bill platform fees |
| **Compliance Burden** | ⚠️ Higher — you're responsible for all client data | ✅ Lower — each client handles their own compliance |
| **Scalability** | ⚠️ 20 numbers per WABA limit (can request increase) | ✅ No limit — each client is independent |
| **Client Portability** | ⚠️ Client is locked to your WABA | ✅ Client can switch platforms without losing their number |

> [!TIP]
> **Our Recommendation:** Start with **Model A** for rapid deployment and simplicity. Offer **Model B** as a premium option for enterprise clients who need data ownership and brand control. The platform supports both from Day 1.

### 3.5 Section 3 — Feasibility, Cost & Timeline

| Deliverable | Feasibility | Cost (USD) | Timeline |
|-------------|-------------|------------|----------|
| **Model A Setup (Your WABA)** | ✅ Highly Feasible | | |
| — Meta Business Verification | ✅ | Free (your effort) | 1–7 business days |
| — WhatsApp Cloud API Registration | ✅ | Free | 1–2 days |
| — Phone Number Registration | ✅ | $0 (if existing number) or carrier cost | 1 day |
| — Webhook + Bot Connection | ✅ | Included in MVP dev cost | Part of Week 1–2 |
| **Model B Setup (Client's WABA)** | ✅ Feasible | | |
| — Client onboarding flow + documentation | ✅ | $1,000 – $1,500 (one-time dev) | Week 5–6 |
| — Multi-WABA token management system | ✅ | $1,500 – $2,500 (one-time dev) | Week 5–6 |
| — Client setup assistance (per client) | ✅ | $200 – $400 per client | 2–5 days |
| **Hybrid Support (Both Models)** | ✅ Feasible | $2,000 – $3,000 total | Weeks 5–6 |

**Recurring API Costs (WhatsApp Messaging — Per Event):**

> [!IMPORTANT]
> WhatsApp shifted to **per-message billing** (effective July 2025). The following estimates are for a single large event with 10,000–30,000 attendees.

| Cost Component | Rate (India, Jan 2026) | Estimated Volume Per Event | Cost Range |
|----------------|----------------------|---------------------------|------------|
| **Marketing messages** (promotions, invites) | ~₹1.09 / $0.013 per msg | 20,000 – 50,000 msgs | $260 – $650 |
| **Utility messages** (confirmations, reminders, tickets) | ~₹0.145 / $0.0017 per msg | 30,000 – 100,000 msgs | $51 – $170 |
| **Service messages** (user-initiated Q&A, within 24h window) | Free | Unlimited within 24h | $0 |
| **Authentication messages** (OTPs if applicable) | ~₹0.145 / $0.0017 per msg | 10,000 – 30,000 msgs | $17 – $51 |
| **BSP Markup** (if using a BSP instead of direct Cloud API) | $0.005 – $0.025/msg | All messages | $300 – $4,500 |
| **BSP Platform Fee** | $50 – $200/mo | — | $50 – $200 |

**Estimated Total API Cost Per Event (India-based attendees):**

| Scenario | Without BSP (Direct Cloud API) | With BSP |
|----------|-------------------------------|----------|
| Small event (5,000 attendees) | **$150 – $400** | **$400 – $1,200** |
| Medium event (15,000 attendees) | **$350 – $800** | **$900 – $3,000** |
| Large event (30,000+ attendees) | **$600 – $1,500** | **$1,500 – $5,000** |

> **Note:** International rates are 3–10x higher. For events with international attendees, costs scale accordingly based on the recipient's country code. US/Europe marketing messages cost ~$0.025–$0.14 per message.

**Recurring Infrastructure Costs:**

| Component | Monthly Cost |
|-----------|-------------|
| Cloud hosting (VPS / AWS / GCP) | $50 – $150/mo (baseline); $200 – $500 during event peaks |
| Managed PostgreSQL (Supabase / RDS) | $25 – $75/mo |
| Redis (managed) | $15 – $30/mo |
| Object storage (S3 — QR codes, media) | $5 – $20/mo |
| AI/NLP API costs (OpenAI GPT-4o-mini) | $20 – $100/mo (depends on query volume) |
| Monitoring & logging (Sentry, Datadog) | $0 – $30/mo (free tiers available) |
| Domain & SSL | $15 – $30/yr |
| **Total Recurring (Off-Event)** | **$130 – $400/mo** |
| **Total Recurring (During Event Peak)** | **$350 – $800/mo** |

---

## Consolidated Pricing & Timeline Summary

### Development Costs

| Phase | Scope | Cost | Timeline |
|-------|-------|------|----------|
| **MVP (Core Chatbot)** | Registration, tickets, agenda, reminders, feedback, FAQ, basic admin | **₹70,000 (~$840)** | **Weeks 1–5** |
| **Multi-Tenant Backend** | Tenant isolation, routing, per-event config, multi-WABA *(parallel)* | **+₹25,000 (~$300)** | **Weeks 3–6** |
| **White-Label Admin** | Admin panel branding, self-service config, client onboarding *(parallel)* | **+₹18,000 (~$215)** | **Weeks 4–6** |
| **Hosting Setup** | Both WABA models, client onboarding docs *(parallel)* | **+₹12,000 (~$145)** | **Weeks 5–6** |
| **Total — Full Scalable Platform** | End-to-end white-labeled, multi-tenant event chatbot | **₹1,25,000 (~$1,500 USD)** | **6 weeks** |

### Recurring Operational Costs

| Component | Monthly (Off-Event) | Monthly (During Event) | Per Event (API) |
|-----------|--------------------|-----------------------|-----------------|
| Infrastructure | $130 – $400 | $350 – $800 | — |
| WhatsApp API (Direct, India) | — | — | $150 – $1,500 |
| WhatsApp API (Via BSP, India) | $50 – $200 platform | — | $400 – $5,000 |
| AI/NLP costs | $20 – $100 | $50 – $200 | — |
| **Total (Direct API, India)** | **$150 – $500** | **$400 – $1,000** | **$150 – $1,500/event** |
| **Total (BSP-hosted, India)** | **$200 – $700** | **$500 – $1,200** | **$400 – $5,000/event** |

### 6-Week Timeline Overview

| Week | MVP (Core Chatbot) | Multi-Tenant | White-Label | Hosting Setup |
|------|-------------------|-------------|-------------|---------------|
| **Week 1** | ✅ Registration + Tickets | — | — | — |
| **Week 2** | ✅ Agenda + Speakers + FAQ | — | — | — |
| **Week 3** | ✅ Notifications + Reminders | 🔄 Tenant isolation | — | — |
| **Week 4** | ✅ Feedback + Alerts + Post-event | 🔄 Config engine | 🔄 Admin branding | — |
| **Week 5** | ✅ Admin dashboard + Testing | 🔄 Provisioning API | 🔄 Self-service UI | 🔄 WABA setup |
| **Week 6** | ✅ Deployment & QA | ✅ Complete | ✅ Complete | ✅ Complete |

---

## Appendices

### Appendix A: Technology Stack Summary

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **API Gateway** | Node.js (Express/Fastify) or Python (FastAPI) | High async performance for webhooks |
| **Database** | PostgreSQL (Supabase or AWS RDS) | Relational data with tenant isolation |
| **Cache/Sessions** | Redis (Upstash or ElastiCache) | User conversation state; rate limiting |
| **Message Queue** | BullMQ (Node) or Celery (Python) | Handle burst traffic during events |
| **AI/NLP** | OpenAI GPT-4o-mini + custom intent classifier | Cost-efficient; handles multilingual queries |
| **Media Storage** | AWS S3 / GCP Cloud Storage | QR codes, venue maps, documents |
| **Admin Panel** | Next.js / React | White-label dashboard for event configuration |
| **WhatsApp API** | Meta Cloud API (Direct) | No BSP dependency; lower per-message cost |
| **Monitoring** | Sentry + Grafana | Error tracking + performance dashboards |
| **Hosting** | AWS EC2 / GCP Cloud Run / DigitalOcean | Auto-scaling during event peaks |

### Appendix B: WhatsApp Messaging Tier Progression

| Tier | Daily Unique Customers | How to Reach |
|------|----------------------|--------------|
| Tier 1 (Starting) | 1,000 | Default upon API registration |
| Tier 2 | 10,000 | Maintain "Green" quality + send 2x current tier in 7 days |
| Tier 3 | 100,000 | Same escalation criteria |
| Tier 4 (Unlimited) | Unlimited | Same escalation criteria |

> For large events (30K+ attendees), plan to reach **Tier 3–4** at least 2 weeks before the event by progressively growing message volume during the pre-event phase.

### Appendix C: Assumptions & Exclusions

**Assumptions:**
- Client provides event content (agenda, speakers, maps, FAQs) in digital format
- Phone numbers for WABA are provisioned and verified before project starts
- A server/hosting environment is available or will be provisioned during Week 1
- Pricing is based on February 2026 WhatsApp API rates (subject to Meta's pricing changes)

**Exclusions:**
- Third-party event platform integrations (Eventbrite, Cvent, etc.) — quoted separately
- Custom chatbot training datasets or domain-specific ML models
- Physical event hardware (QR scanners, kiosks)
- WhatsApp API message costs (pass-through to client)
- Ongoing content management and template updates post-handover
- Legal/compliance advisory services


### Appendix D: Payment Terms (Proposed)

| Milestone | % of Total | Amount | Trigger |
|-----------|-----------|--------|--------|
| Project Kickoff | 30% | ₹37,500 (~$450) | Upon contract signing |
| MVP Delivery (Week 5) | 30% | ₹37,500 (~$450) | Upon successful MVP demo |
| Full Platform Delivery (Week 6) | 30% | ₹37,500 (~$450) | Upon delivery of scalable solution |
| Post-Launch Support (30 days) | 10% | ₹12,500 (~$150) | 30 days after go-live |

---

> **Next Steps:** Upon acceptance of this proposal, we will schedule a kickoff call to finalize scope, access credentials (Meta Business Manager), event content requirements, and sprint planning.
>
> For questions or clarifications, please reach out to **[Your Email]** or **[Your Phone]**.

---

*This document is confidential and intended solely for the recipient. The pricing estimates are indicative and subject to detailed discovery.*
