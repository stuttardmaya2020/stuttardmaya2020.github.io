# Portfolio — Product Design / Creative Engineer

Personal portfolio for landing a Product Design / Creative Engineer role (remote or London).
Audience: design leads, engineering managers, startups, agencies.
Purpose: land a job, attract freelance clients, build personal brand.

## Stack

- Vite + React 18 + TypeScript (strict)
- Framer Motion (scroll animations, micro-interactions)
- Three.js / React Three Fiber (3D elements, used sparingly)
- Canvas API or p5.js (generative art / hand-drawn animations)
- Plain CSS with custom properties (no CSS framework)
- Hosting: GitHub Pages, built and deployed by `.github/workflows/deploy.yml`. This is a user site with a custom domain (`public/CNAME`), so Vite `base` is `/`.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally

## Architecture

- `src/content/` — all copy and case study content as `.md` files. `markdownContent.ts` turns each import into `{ data, html }` (YAML frontmatter + rendered body); `src/lib/content.ts` types them.
- `src/components/` — reusable UI components
- `src/sections/` — page sections (Hero, About, CaseStudies, WhyMe, Contact)
- `src/art/` — generative art, 3D scenes, canvas animations
- `src/pages/` — Home and the case study page (hash routes: `#/work/<slug>`)
- `src/lib/` — content loader, router, shared motion presets
- `src/styles/` — global CSS, design tokens as custom properties
- `public/` — static assets (images, fonts, favicons)

## Design Direction

- Aesthetic: artsy, fun, modern, minimalist. Think hand-drawn meets clean layout.
- Whitespace is a feature. Don't fill it.
- Animations should feel playful and organic, not corporate.
- Generative art and small drawings add personality without clutter.
- 3D is an accent, not the main event.

## Tone of Voice (for all copy)

- Minimalist and playful. Short sentences. Storytelling over listing.
- Slightly technical where it adds credibility, never jargon-heavy.
- Write like you're talking to a smart friend, not a recruiter.
- Avoid: "passionate", "results-driven", "synergy", corporate buzzwords.

## Accessibility

- WCAG AA compliance at all times.
- Respect `prefers-reduced-motion` — provide static fallbacks for all animations.
- All interactive elements must be keyboard-navigable with visible focus states.
- Colour contrast ratios must meet 4.5:1 for body text, 3:1 for large text.
- All images and generative art need meaningful `alt` text (or `aria-hidden` if decorative).

## Adding New Case Studies

When asked to add a new project/case study:

1. Ask these questions first:
   - Project name and one-line description
   - Your role (design, engineering, both?)
   - Timeline and team size
   - The problem you solved
   - Key decisions and trade-offs
   - Outcome / impact (quantified if possible)
   - Tools/technologies used
   - Images or links to the final product
2. Generate the markdown file in `src/content/case-studies/` following the existing template.
3. Update the case studies section to include the new entry.

## Conventions

- Functional components with hooks. No class components.
- Named exports over default exports.
- Keep components under ~100 lines; split when they grow.
- Animations: use Framer Motion's `useScroll`, `useTransform`, `useInView` for scroll-driven effects.
- Generative art: encapsulate in self-contained components under `src/art/`.
- Content is never hardcoded in components — always pull from `src/content/`.
