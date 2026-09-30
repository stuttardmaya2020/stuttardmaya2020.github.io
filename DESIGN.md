---
name: Maya Stuttard
description: Product designer and creative engineer. Work and paintings hung on one white wall.
colors:
  wall: "#ffffff"
  mount: "#f6f3fd"
  mount-deep: "#ece5fb"
  ink: "#17141f"
  ink-soft: "#4d4566"
  lilac-ink: "#5b3fb3"
  lilac-mid: "#8b72d6"
  lilac: "#b8a4ec"
  rule: "rgba(23, 20, 31, 0.12)"
  nav-bg: "rgba(255, 255, 255, 0.9)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.8rem + 5.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.8vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  label-title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  wall-label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.45
  caption:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  2xs: "0.25rem"
  xs: "0.5rem"
  s: "1rem"
  m: "1.5rem"
  l: "2.5rem"
  xl: "clamp(3rem, 2.4rem + 3vw, 5rem)"
  2xl: "clamp(5rem, 3.5rem + 7vw, 10rem)"
  gutter: "clamp(1rem, 0.5rem + 3vw, 2.5rem)"
  max: "80rem"
  measure: "38rem"
  label: "19rem"
  nav-h: "4rem"
components:
  arrow-link:
    textColor: "{colors.lilac-ink}"
    typography: "{typography.body}"
    height: "2.75rem"
  exhibit-mount:
    backgroundColor: "{colors.mount}"
    rounded: "{rounded.none}"
  exhibit-mount-hover:
    backgroundColor: "{colors.mount-deep}"
  wall-label:
    textColor: "{colors.ink}"
    typography: "{typography.wall-label}"
    width: "{spacing.label}"
  salon-frame:
    backgroundColor: "{colors.mount}"
    rounded: "{rounded.none}"
    padding: "clamp(0.5rem, 1.2vw, 0.875rem)"
  nav:
    backgroundColor: "{colors.nav-bg}"
    textColor: "{colors.ink}"
    height: "{spacing.nav-h}"
  nav-link-hover:
    textColor: "{colors.lilac-ink}"
  contact-email:
    textColor: "{colors.lilac-ink}"
    typography: "{typography.title}"
  pull-quote:
    backgroundColor: "{colors.mount}"
    textColor: "{colors.ink}"
    padding: "{spacing.m}"
    rounded: "{rounded.none}"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.wall}"
    padding: "0.5rem 1rem"
---

# Design System: Maya Stuttard

## Overview

**Creative North Star: "The White Wall"**

The site is a white-walled exhibition. Product work and paintings hang on the same wall, each on its own flat lilac mount, each with a small wall label beside or beneath it. Nothing is a card, nothing is a section of prose; a visitor walks the wall. The first viewport is almost empty: one large hung canvas running a live generative flow-line drawing, and its wall label (who Maya is, in four short lines) bottom-aligned to its right.

Density is gallery-low. Whitespace is the wall itself, so it is never filled. Hierarchy comes from one grotesk family at different sizes, weights and cases, and from lilac used like vinyl lettering: the colour of links, drawn lines and paint, never of surfaces other than the pale mounts. Depth is absent by design; pieces sit flat on the wall and hover answers with a deeper mount, not a lift.

Confirmed rejections: no terracotta or warm paper; no hand-drawn scribbles or loops circled around things; no second typeface; no wordy resume sections; no client screens (case studies are shown through abstract line drawings, a binding confidentiality constraint).

**Key Characteristics:**
- Pure white wall, pale lilac mounts behind every hung piece.
- One typeface, Schibsted Grotesk; hierarchy from size, weight and case only.
- Wall labels: small, left-aligned, bold title then a quieter line or two.
- Lilac for links, drawn lines and paint; ink and ink-soft for all other text.
- Flat: no shadows, no radius, hairline rules only.
- One live piece (the hero flow field) as the signature interaction.

## Colors

A white wall with lilac mounts and ink labels; the palette is one cool violet family plus ink.

### Primary
- **Vinyl Lilac** (lilac-ink): the only coloured text. Links, arrow links, the contact email, hover state of nav links and the next-exhibit link, focus rings, caret, the drawn accent stroke in cover drawings, and the paint a visitor lays on the hero canvas. Meets 6.1:1 on the deepest mount.

### Secondary
- **Drawn Lilac** (lilac): hairline drawing colour. Hero flow lines at rest, link underlines at rest, the takeaway rule, the scrollbar thumb.
- **Bloom Lilac** (lilac-mid): the heavier line colour. Cover-drawing linework and flow lines blooming near the pointer.

### Neutral
- **Wall** (wall): the page ground everywhere, and the ground under case study screenshots.
- **Mount** (mount): the flat lilac tint behind every hung piece: hero canvas, case covers, painting and photo frames, pull quotes.
- **Deep Mount** (mount-deep): the mount on hover or focus, and the text selection colour.
- **Ink** (ink): headings, wall-label titles, body text inside labels and quotes. 18:1 on wall.
- **Soft Ink** (ink-soft): secondary lines of wall labels, section subtitles, case prose, captions, footer. At least 7.3:1 on every surface it sits on.
- **Rule** (rule): 1px hairlines: footer top, case stats, tables, figure borders, next-exhibit divider.
- **Frosted Wall** (nav-bg): the sticky nav, with an 8px backdrop blur.

### Named Rules
**The No-Grey Rule.** Text is ink, soft ink or vinyl lilac. There is no third grey; quieter means smaller or lighter weight, not paler.

**The Lines-Only Lilac Rule.** Drawn Lilac and Bloom Lilac are for strokes and underlines only, never text. If it has to be read, it is Vinyl Lilac or ink.

**The Mount Rule.** Every hung piece sits on the Mount tint and only the Mount tint. The mount deepens on hover; it never gains a border, shadow or radius.

## Typography

**Display Font:** Schibsted Grotesk (with system-ui, sans-serif)
**Body Font:** Schibsted Grotesk
**Label Font:** Schibsted Grotesk

**Character:** One confident grotesk doing every job. Headings are bold and tightly tracked so they sit on the wall like cut vinyl; labels are small and plain like a museum card.

### Hierarchy
- **Display** (700, clamp 3rem to 6rem, 0.95): the contact heading only. The loudest words on the site are the invitation to say hello.
- **Headline** (700, clamp 2.25rem to 4rem, 1.02, -0.03em; -0.04em on the hero name and case heading): the hero name, section titles, and the case study heading (capped at 20ch).
- **Title** (600 to 700, clamp 1.5rem to 2rem): the next-exhibit link, the takeaway line, subsection titles in case prose, the contact email.
- **Label Title** (700, clamp 1.1875rem to 1.375rem, 1.2): the bold first line of every wall label; also the hero role line at weight 500.
- **Body** (400, 1.0625rem, 1.6): reading text, capped at a 38rem measure.
- **Wall Label** (500, 0.9375rem, 1.45): the lines under a label title, capped at 19rem. Also the nav links.
- **Caption** (400, 0.875rem): painting and photo labels, figure captions, hero hint, footer.
- **Label** (600, 0.8125rem, 0.06em, uppercase, Vinyl Lilac): tags on paired case study figures ("Sketch", "Built") and table headers (in soft ink). Nowhere else.

### Named Rules
**The One Voice Rule.** One family, Schibsted Grotesk, weights 400 to 800. Never introduce a second face, a serif, or a mono to add character; character comes from size and weight.

**The Artwork Title Rule.** Italic is reserved for the title of an artwork, as on a gallery label ("Untitled (you)").

## Layout

A centred wall of up to 80rem with a fluid gutter (1rem to 2.5rem). Sections open with a large top gap (5rem to 10rem) and no background changes; the wall is continuous.

The hang is the grid. On wide screens (60rem and up) a hung piece and its wall label sit side by side: the piece takes the flexible column, the 19rem label takes the other, bottom-aligned to the piece. The hero, the featured case study, and the case study header all use this piece-plus-label pairing. Below that, the label drops under the piece.

Case studies hang as one full-width featured piece followed by pairs; from 45rem up the right-hand piece of each pair hangs lower by the 2xl gap, giving a staggered salon line. Paintings and photos hang as a salon of small framed pieces: two columns on phones, three from 40rem, five from 60rem with every other piece dropped by the xl gap.

Case study pages use a sticky facts column (min 14rem) beside the prose (ratio about 1 : 2.6) from 60rem; prose is held to the 38rem measure.

Breakpoints in use: 40rem, 45rem, 60rem.

## Elevation & Depth

The system is flat. There are no shadows anywhere. Depth is conveyed only by the pale lilac mount against the white wall, and state is conveyed by the mount deepening, never by lifting. The sticky nav is the one layered surface, separated by a translucent white ground and an 8px blur rather than a shadow or border.

### Named Rules
**The Flat Wall Rule.** Pieces hang flat. If something needs emphasis, give it a mount or more space, never a shadow.

## Shapes

Square corners everywhere (0 radius): mounts, frames, the nav, quotes, figures. Lines are 1px hairlines in Rule; the only heavier rule is a 2px Drawn Lilac line above a case study takeaway. Hung pieces keep fixed proportions: 4:3 for the hero canvas and case covers (4:5 for the hero on phones), 16:9 for the case study header mount, square for life photos.

The site has one icon: a single-stroke arrow (1.75px, round caps), rotated for right, down, left and up-right. It inherits the text colour.

## Components

### Arrow Link
The site's one action style, used for "Walk the wall", back to work, and outbound links.
- **Style:** Vinyl Lilac text at weight 600, with a 2px Drawn Lilac underline offset 0.3em, and the arrow icon trailing. Minimum 2.75rem tall.
- **Hover:** the underline darkens to the text colour (0.2s).
- **Focus:** 2px Vinyl Lilac outline, 3px offset (the global focus ring).
- There is no filled button in the system.

### Exhibit (case study)
- **Mount:** flat 4:3 Mount panel, square corners, holding a line drawing at 72% width.
- **Drawing:** abstract linework in Bloom Lilac (1.25px) plus one Vinyl Lilac accent stroke (2.75px, round caps). No client UI.
- **Label:** Label Title in ink, then a soft-ink meta line (role and years) and a one-line description.
- **Hover / Focus:** mount deepens to Deep Mount (0.3s), the title gains a Drawn Lilac 2px underline, the linework lifts 4px on a spring (stiffness 300, damping 18), and the accent stroke redraws itself (0.7s, draw ease). With reduced motion the accent stroke stays static. Focus ring sits 10px out.

### Wall Label
The shared typographic object for every piece. Max 19rem, left-aligned, bold title first, then one or two quieter lines in soft ink. Painting and photo labels use the Caption size: bold title, then medium in soft ink.

### Salon Frame
Paintings and photos sit inside a Mount frame with a thin fluid mat (0.5rem to 0.875rem padding). Photos are cropped square; paintings keep their own proportions.

### Navigation
Sticky, 4rem tall, on the Frosted Wall. Name on the left in bold ink; links on the right (Work, Paintings, Contact) at Wall Label size, weight 500, in ink. Hover turns a link Vinyl Lilac with a 2px Drawn Lilac underline. The same layout holds on phones; there is no menu toggle.

### Contact
Display-size heading, then the email as a Title-size Vinyl Lilac link with a 3px Drawn Lilac underline that darkens on hover, then arrow links for profiles.

### Case Study Page
Header: Headline-size heading, then the case hung on a 16:9 Mount with its label and intro beside it. Body: a facts column (bold terms, soft-ink values, hairline-topped stats) beside soft-ink prose with ink subheadings. Pull quotes sit on a Mount panel in ink. Screenshots and sketches get a 1px Rule border on white. A takeaway closes the case under a 2px Drawn Lilac rule in Title size. A next-exhibit link (Title size, bold, arrow) leads to the next piece in order.

### Hero Piece (signature)
A generative flow-line drawing on a Mount-coloured canvas. At rest, Drawn Lilac lines drift slowly. Near the pointer, lines thicken (0.9px up to about 3px) and switch to Bloom Lilac. Press or drag lays Vinyl Lilac paint whose width follows speed (3px to 14px), and the flow lines route around it. A "Clear the canvas" text button in Vinyl Lilac resets it. Vertical swipes still scroll on touch. The canvas is decorative; the wall label carries the meaning. With reduced motion it renders one still frame and painting still works on press. It pauses when off screen or when the tab is hidden.

## Do's and Don'ts

### Do:
- **Do** hang every new piece of work on a flat Mount panel with a wall label, using the piece-plus-label pairing on wide screens.
- **Do** keep all text in ink, soft ink or Vinyl Lilac, and check any new surface keeps soft ink at 7.3:1 or better.
- **Do** use the Arrow Link for actions, with the single-stroke arrow rotated for direction.
- **Do** keep words few: a label title and one or two lines, not paragraphs.
- **Do** give every animation a reduced-motion state: static strokes, a still hero frame.
- **Do** show confidential work through abstract lilac line drawings on a mount.

### Don't:
- **Don't** use terracotta, warm paper or any warm accent.
- **Don't** draw hand-drawn scribbles, loops or circles around words or pictures.
- **Don't** add a second typeface, or style type with grey text.
- **Don't** use Drawn Lilac or Bloom Lilac for text.
- **Don't** add shadows, rounded corners or borders to mounts.
- **Don't** add uppercase eyebrows or kickers above headings.
- **Don't** fill the white wall with backgrounds, bands or extra sections.
- **Don't** show client screens or client names.
