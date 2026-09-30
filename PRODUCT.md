# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Everyone who might hire or headhunt Maya, weighted equally. No single reader wins a trade-off:

- **Design leads and hiring managers** read case studies in depth to judge process, craft and judgement.
- **Recruiters and headhunters** skim for about 30 seconds. They want title, location, current role and a few headline numbers.
- **Startups, agencies and freelance clients** look for range and for someone who can build as well as design.

Maya's current employer (Accenture) and colleagues are also likely readers, and that shapes the discretion rule below.

## Product Purpose

A personal portfolio and brand site for Maya Stuttard. It exists so that opportunities come to her: full-time product design roles (London, or remote anywhere), freelance work and inbound approaches from headhunters. Success looks like qualified people reaching out by email or LinkedIn. It should never look like she is actively searching.

## Positioning

**Product designer and creative engineer.** Maya is a computer scientist by training (BSc Computer Science, Royal Holloway) and now a senior interaction designer working on national-scale digital health products. What sets her apart is that she can both design and build, and the site proves it: it is hand-coded (React, TypeScript, Framer Motion, generative canvas art), and her paintings show the artist's eye the hero copy claims.

She is a product designer with a lot of healthcare experience, not a "healthcare designer". Healthcare is evidence of skill with high-stakes, complex, systems-level design, not the limit of what she does.

## Operating Context

- Readers arrive from LinkedIn, recruiter outreach, applications and word of mouth, on both desktop and mobile.
- The home page is a single scroll with sections (Hero, About, Work, Why me, Contact). Each case study has its own page at `#/work/<slug>`.
- Contact is by email (maya.stuttard@gmail.com) and LinkedIn. There is no form and no backend.

## Capabilities and Constraints

- Static SPA: Vite + React 18 + TypeScript. Deployed to GitHub Pages by `.github/workflows/deploy.yml`, with a custom domain (`public/CNAME`).
- All copy lives in `src/content/*.md` (YAML frontmatter plus body). Components never hardcode copy.
- **Discretion (binding):** it's fine to name the current employer, Accenture. The site must not say or imply that Maya is looking for a new role or leaving. Headhunter-friendly signals (clear current role, location, easy contact) are fine. Explicit job-search language ("open to new roles", "looking for", "what role are you looking for") is not.
- **Client confidentiality (binding):** client names and client screens are withheld. Case studies describe work without identifying the client or showing its UI.
- Location: based in London. Open to London, hybrid and remote anywhere, plus freelance.
- Open decision: how the site invites freelance enquiries without reading as a job-search signal.

## Brand Commitments

- Name: Maya Stuttard. Short name: Maya.
- Voice (from CLAUDE.md): minimalist and playful, short sentences, storytelling over listing, slightly technical where it adds credibility. Written like talking to a smart friend, not a recruiter. Avoid "passionate", "results-driven", "synergy" and other corporate buzzwords.
- Core line: "I design products people actually need, shaped by an engineer's brain and an artist's eye."
- Maya's own paintings and personal photos are part of the identity.

## Evidence on Hand

- **Case studies** (`src/content/case-studies/`): appointment and referral management (featured; 100+ participants, 5 research rounds, 500+ regional trusts), mental health questionnaires (69+ participants), rescheduling uplift (25 participants), patient-led booking standard (in iteration), and an HCI dissertation (3 interfaces, 100/100 Lighthouse accessibility).
- **Testimonials** (`src/content/why-me.md`): four quotes from real colleagues, attributed by role and practice only.
- **Paintings**: `public/images/painting-*.jpg` (sunflowers, pond ducks, bird on branch, sailboat, cherry blossom).
- **Photos**: `public/images/photo-*.jpg` (hikes, coast, camping, wakeboarding, graduation, boat, chalk cliff).
- **Experience** (`src/content/about.md`): current Senior Interaction Designer role (2025 to now), Accenture year in industry, Morgan Stanley insight programme, Zaelab internship.
- **Absent, never fabricate:** client screens, client names, named testimonial authors, extra metrics, press, awards, client logos.

## Product Principles

1. **Let opportunity come to her.** Make Maya easy to find, judge and contact, without ever signalling a job search.
2. **The site is the proof.** The engineering half of the positioning is shown in how the site is built, not just claimed in copy.
3. **Evidence over adjectives.** Real research numbers, real decisions and real trade-offs carry the argument. Never invent any of them.
4. **Serve the skimmer and the deep reader.** Headline facts are visible in seconds, and depth rewards anyone who stays.
5. **Confidentiality is part of the craft.** Telling a strong story without client screens shows judgement, not a gap.

## Accessibility & Inclusion

WCAG AA at all times: 4.5:1 body contrast, 3:1 large text, full keyboard navigation with visible focus, `prefers-reduced-motion` fallbacks for every animation, and meaningful alt text (or `aria-hidden` for decorative art). Accessibility is also part of Maya's professional story (inclusive health design, the dissertation), so failures here undermine the pitch.
