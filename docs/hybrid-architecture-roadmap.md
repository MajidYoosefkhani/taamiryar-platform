# Taamiryar — Hybrid Platform Architecture & Product Roadmap

**Status:** Proposed product and technical direction  
**Product model:** AI repair assistant + technician marketplace + service-order lifecycle  
**Current priority:** Design system and end-to-end user experience  
**Architecture baseline:** Existing Next.js App Router + TypeScript, evolving as a modular monolith

## 1. Product promise

Taamiryar helps a customer move from an unclear device problem to a safe, informed next step:
1. Identify the device and describe the symptoms.
2. Receive an AI-assisted preliminary diagnosis with uncertainty and safety guidance.
3. Choose self-help guidance or request a qualified technician.
4. Compare relevant technicians and submit a service request.
5. Track the request and review the completed service.

AI must not present remote diagnosis as certainty, invent repair prices, or encourage hazardous repair work. Cost information is an estimate only when supported by a maintained pricing source and should show its assumptions.

## 2. Product principles

- **Design before feature sprawl:** establish navigation, typography, spacing, components, responsive behavior and interaction states before expanding modules.
- **Trust over inflated claims:** do not display unverified technician counts, diagnosis counts, ratings, response times or satisfaction percentages.
- **Progressive disclosure:** first ask only what is needed; reveal advanced details when relevant.
- **Safety by design:** prominent stop/seek-professional guidance for mains electricity, gas, refrigerants, high-voltage systems, damaged batteries and other hazardous cases.
- **Human choice:** AI recommendations are advisory; customers can request a technician or decline.
- **Localization from the foundation:** Persian (RTL), English (LTR), Arabic (RTL); locale controls language, direction, formatting and navigation.
- **Privacy and least privilege:** collect only necessary customer and location data; expose technician contact details only when appropriate to the service flow.

## 3. Experience architecture

### Public website
- Home: value proposition, device categories, how it works, AI demo, service areas, trust and safety, technician CTA, FAQ and footer.
- Diagnose: guided device selection, symptom input, optional supporting details, result and next-step choices.
- Device category/detail: common symptoms and direct start-diagnosis links.
- Find a technician: service type, location, availability and relevant technician cards.
- Technician profile: verified skills, service area, experience, transparent pricing basis and genuine reviews.
- How it works, safety, about, contact, terms and privacy.

### Customer area (later milestone)
- Sign-in and account recovery.
- New request and request history.
- Request detail, status timeline, appointment and communication.
- Saved addresses and preferences.
- Reviews after completed work.

### Technician area (later milestone)
- Application and identity/credential review.
- Profile, skills, service categories and coverage area.
- Availability and incoming requests.
- Quote, accept/decline workflow and job status updates.
- Service history.

### Admin area (later milestone)
- Technician verification and moderation.
- Device taxonomy and diagnostic knowledge review.
- Service categories, coverage and pricing references.
- Order dispute and support tools.
- Audit trail and operational metrics.

## 4. Technical architecture

Start with a **modular monolith** in the existing Next.js application. Do not introduce microservices until real scale or team boundaries justify them.

Suggested modules:
- identity: customer, technician and admin identities; roles and permissions.
- catalog: device categories, brands, models and common symptoms.
- diagnosis: input validation, AI provider adapter, prompt/version management, safety classification and diagnosis records.
- technicians: profiles, skills, verification status and service areas.
- matching: location-aware filtering and ranking of eligible technicians.
- orders: service request lifecycle, quotes, appointment and status history.
- reviews: post-service feedback with eligibility checks.
- notifications: email/SMS/push adapter, introduced when needed.
- billing: payment and platform fee abstraction, only after legal/payment-provider feasibility is established.
- admin: moderation, configuration and audit operations.

Keep UI components separate from domain logic. API route handlers should validate inputs and call module services rather than contain all business logic. External AI, maps, messaging and payment providers should be behind adapters so providers can be changed without rewriting the product.

### Initial domain entities

- User: id, role, display name, verified contact and locale.
- CustomerAddress: owner, structured address, coordinates, label and consent/retention metadata.
- TechnicianProfile: user, bio, verification state, skills and service coverage.
- DeviceCategory, DeviceModel and Symptom.
- Diagnosis: customer/session, device, symptom description, locale, provider/model, prompt version, structured result, safety flags and timestamp.
- ServiceRequest: customer, diagnosis reference, service category, address reference, status and timestamps.
- Quote: request, technician, amount/currency, inclusions and expiry.
- Appointment: request, agreed time window and status.
- Review: completed request, author, technician, rating and comment.
- AuditEvent: actor, action, entity reference and timestamp.

These are conceptual entities, not a mandate to create every table in the first release. Do not store raw sensitive data or precise location longer than necessary.

## 5. Design direction

### Visual identity
- Retain the existing dark navy + cyan/teal direction, but use it as a controlled design system rather than applying glow effects to every section.
- Use a clean, premium, technical visual language: strong hierarchy, generous whitespace, restrained gradients, subtle borders and consistent radii.
- Avoid emoji as the primary brand mark or as substitutes for product illustrations. Use a consistent icon set and purposeful illustrations.
- Use real, grounded proof only. Replace unsupported numeric counters with product benefits or clearly labeled demo content.

### Design tokens (initial proposal)
- Background: deep navy / near-black for the main experience, with light surfaces where readability benefits.
- Primary accent: cyan/teal for actions and focus states.
- Secondary accent: restrained indigo for AI-related visual cues.
- Typography: readable Persian-capable font plus compatible Latin/Arabic fallbacks; test Persian and Arabic shaping on iPad and mobile.
- Layout: responsive max-width containers, consistent spacing scale, keyboard-visible focus, accessible contrast and touch targets.
- Direction: direction-aware layouts; do not hard-code left/right alignment for localized UI.

### Homepage section order
1. Responsive navigation and locale switcher.
2. Hero with one clear promise and two actions: “تشخیص مشکل” and “پیدا کردن تعمیرکار”.
3. Device/service category grid.
4. “How it works” in three or four clear steps.
5. Interactive AI diagnosis preview, clearly labeled as a demo if it is not calling the live service.
6. Technician discovery / marketplace explanation.
7. Trust, safety and verification explanation without fabricated metrics.
8. FAQ and final CTA.
9. Footer with service, support, legal and language links.

## 6. Roadmap and release gates

### Phase 0 — Foundation and audit
- Confirm the active production branch, deployment root, environment-variable names and current deployment status.
- Resolve or explicitly close/rebase any outstanding draft pull request before overlapping changes.
- Run install, lint, type-check and production build in the actual app workspace.
- Record existing routes and identify duplicate or empty components.
**Exit gate:** reproducible build and a documented baseline; no unverified claims about production behavior.

### Phase 1 — Design system and public experience (current priority)
- Define tokens, typography, buttons, inputs, cards, badges, navigation, footer and responsive breakpoints.
- Build a polished responsive homepage using the section order above.
- Create consistent device and diagnosis entry points.
- Establish Persian RTL as the first-class experience and verify English/Arabic direction changes.
- Add accessible loading, empty, error, focus and disabled states.
**Exit gate:** all public pages visually consistent and usable on iPad, phone and desktop; no dead CTA links.

### Phase 2 — Reliable AI diagnosis
- Keep provider access server-side.
- Validate and bound all inputs; add abuse controls/rate limiting before public launch.
- Return a structured result: likely causes, confidence/uncertainty, safe checks, stop conditions and recommended next step.
- Store model/provider and prompt version with diagnosis records, subject to privacy policy.
- Add clear limitations and safety escalation language.
**Exit gate:** tested happy path, malformed input, provider failure, long input and hazardous-symptom cases.

### Phase 3 — Technician discovery MVP
- Create technician application/profile and manual admin verification.
- Add service categories, service areas and availability.
- Start with transparent location-based filtering; do not imply live availability unless confirmed.
- Allow a customer to submit a request with a diagnosis reference.
**Exit gate:** a real customer request can be routed to an eligible, reviewed technician.

### Phase 4 — Orders and operations
- Add request statuses, quote acceptance, appointment confirmation and customer notifications.
- Add admin support and audit trail.
- Add reviews only after a completed request.
**Exit gate:** one service request can be followed from creation through completion.

### Phase 5 — Monetization and expansion
- Validate legal, tax and payment-provider feasibility in the target launch markets.
- Introduce platform fees or lead fees only with clear disclosure.
- Add payments, refunds and dispute handling after operational workflows are stable.
- Expand languages, regions and device coverage based on measured demand.
**Exit gate:** documented unit economics and support process; payment is not a placeholder button.

## 7. Security, safety and quality requirements

- Never expose AI provider keys in client code or logs.
- Add rate limiting, request-size limits, schema validation and abuse monitoring before public access.
- Enforce role-based authorization server-side for all customer, technician and admin data.
- Validate uploaded files and use controlled storage if image diagnosis is introduced.
- Avoid storing exact coordinates unless the feature needs them; obtain consent and define retention.
- Do not treat AI output as a verified diagnosis or professional quote.
- Add tests for locale/direction, key user journeys, authorization and critical safety scenarios.
- Use real analytics with privacy-conscious event collection; do not invent activity counters.

## 8. Current repository observations

- The app is a Next.js App Router project under apps/web.
- The homepage currently renders only Navbar and Hero.
- Root metadata still contains the default “Create Next App” title and description; the root HTML language is currently English.
- Locale content files exist for Persian, English and Arabic, but the inspected files alone do not establish a complete runtime locale-switching system.
- The existing device and diagnosis routes are early-stage and need end-to-end verification.
- The current AI diagnosis route calls Anthropic directly; it should move behind a provider/service adapter as the diagnosis module matures.
- The homepage hero contains numerical social-proof claims that must be verified or removed before public release.
- Some section components are absent or empty; confirm exact file inventory before wiring them into the homepage.

## 9. Immediate next implementation sequence

1. Resolve the outstanding diagnosis PR and establish a clean integration baseline.
2. Fix root metadata, language/direction strategy and font fallback.
3. Implement the shared design tokens and core UI primitives.
4. Rebuild the public homepage sections and wire every CTA to a real route/section.
5. Make device-to-diagnosis navigation preserve selected device and symptom.
6. Verify responsive layout and locale direction on real device sizes.
7. Only then expand the AI and marketplace workflows.

**Non-goal for the first release:** full payments, complex chat, automated technician payouts, microservices and broad multi-country operations. Prove the core customer journey first.
