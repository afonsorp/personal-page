# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Tech recruiters and engineering managers / CTOs arriving in equal measure, typically by searching Pedro's name or following a link from LinkedIn or an email signature. Recruiters scan quickly for role fit; hiring managers evaluate depth and credibility before deciding whether to reach out.

## Product Purpose

A permanent credibility signal for Pedro Afonso — a senior frontend developer and team lead based in Porto, Portugal, with 17 years of continuous practice. The page exists to be found and to hold up under scrutiny. Success means a visitor leaves with an accurate, confident picture of who Pedro is, with no friction reaching him if they want to.

## Positioning

17 years of frontend craft ending in team leadership, with hands still in the code. Not a generalist who drifted into management, not a pure lead who stopped shipping: someone who grew people and kept writing pull requests at the same time.

## Operating Context

Viewed on desktop by recruiters at a desk and on mobile for a quick check after a referral or LinkedIn browse. The page is never the first touch — it confirms what someone already suspects. It competes with a LinkedIn profile, so it must justify its existence with something LinkedIn cannot do as well: a distinct, authored point of view on Pedro's own career.

## Capabilities and Constraints

- Bilingual: English (default) and Portuguese, switchable in-session
- Content: CV data only — experience, education, contact. No projects, no blog, no case studies.
- Minimal surface, intentionally permanent. Scope will not expand.
- Deployed on Vercel via GitHub; every push to main ships.
- Stack: Next.js 14, Tailwind CSS, Framer Motion, TypeScript.

## Brand Commitments

- Name: Pedro Afonso
- Location: Porto, Portugal
- Email: afonsorpl@gmail.com
- LinkedIn: linkedin.com/in/afonsorp
- No hard CTA. No "hire me" language. The tone is matter-of-fact.

## Evidence on Hand

- `resume.pdf` — source document
- `src/data/resume.ts` — structured CV data extracted from the PDF
- `src/data/i18n.ts` — EN/PT translations for all display text

No testimonials, case studies, or project assets exist. Future work must not fabricate them.

## Product Principles

1. **Credibility over persuasion.** The page tells, not sells. Every word earns its place by being true and useful to someone evaluating a hire.
2. **One contact path.** Email and LinkedIn are the only exits. No forms, no calendars, no social links beyond what's on the CV.
3. **Permanent minimal surface.** The design and scope are final. Resist every impulse to add sections, animate more, or chase trends.
4. **Language parity.** English and Portuguese carry identical information. Neither is a degraded version of the other.
5. **The CV is the content.** Design serves legibility and distinction, not decoration. If it doesn't help a recruiter read faster or trust more, it doesn't belong.
