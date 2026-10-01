import siteMd from "../content/site.md";
import heroMd from "../content/hero.md";
import workMd from "../content/work.md";
import processMd from "../content/process.md";
import aboutMd from "../content/about.md";
import artMd from "../content/art.md";
import contactMd from "../content/contact.md";

export interface Link {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  logo: string;
  nav: (Link & { icon: "work" | "play" | "about" })[];
  skipLink: string;
  navLabel: string;
  allWork: string;
  nextCase: string;
  takeawayScript: string;
  footer: string;
  backToTop: string;
}

export interface Hero {
  eyebrow: string;
  headlineBefore: string;
  headlineCircled: string;
  headlineAfter: string;
  script: string;
  sub: string;
  cta: Link;
  secondary: Link;
  scrollCue: string;
  toolkitLabel: string;
  toolkit: string[];
}

export interface Work {
  title: string;
  script: string;
  sub: string;
  cta: string;
}

export interface Process {
  title: string;
  steps: { name: string; body: string }[];
}

export interface About {
  label: string;
  heading: string;
  paragraphs: string[];
  photo: { src: string; alt: string };
  links: Link[];
}

export interface Art {
  title: string;
  titleItalic: string;
  sub: string;
  paintings: { src: string; size: [number, number]; title: string; medium: string; alt: string }[];
}

export interface Contact {
  heading: string;
  script: string;
  sub: string;
  email: string;
}

export type Visual = "notification" | "loop" | "paths" | "ages";

export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  order: number;
  featured?: boolean;
  visual: Visual;
  cardMeta: string;
  cardTitle: string;
  cardLine: string;
  cardStats?: Stat[];
  eyebrow: string;
  title: string;
  summary: string;
  overview: { label: string; value: string }[];
  visualCaption: string;
  research?: { label: string; total: string; rounds: { people: number; method: string }[] };
  decisions: { title: string; body: string; chips?: string[] }[];
  stats: Stat[];
  impactTitle?: string;
  impact: string;
  takeaway: string;
  /** The problem, as rendered markdown. */
  html: string;
}

export const site = siteMd.data as unknown as Site;
export const hero = heroMd.data as unknown as Hero;
export const work = workMd.data as unknown as Work;
export const howIWork = processMd.data as unknown as Process;
export const about = aboutMd.data as unknown as About;
export const art = artMd.data as unknown as Art;
export const contact = contactMd.data as unknown as Contact;

const caseFiles = import.meta.glob<{ data: Record<string, unknown>; html: string }>(
  "../content/case-studies/*.md",
  { eager: true, import: "default" },
);

export const caseStudies: CaseStudy[] = Object.entries(caseFiles)
  .map(([path, file]) => ({
    ...(file.data as unknown as Omit<CaseStudy, "slug" | "html">),
    slug: path.replace(/^.*\/\d+-/, "").replace(/\.md$/, ""),
    html: file.html,
  }))
  .sort((a, b) => a.order - b.order);
