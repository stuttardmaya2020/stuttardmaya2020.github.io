import siteMd from "../content/site.md";
import heroMd from "../content/hero.md";
import aboutMd from "../content/about.md";
import workMd from "../content/work.md";
import whyMeMd from "../content/why-me.md";
import contactMd from "../content/contact.md";

export interface Link {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  shortName: string;
  title: string;
  nav: Link[];
  skipLink: string;
  navLabel: string;
  backToWork: string;
  readCaseStudy: string;
  takeawayLabel: string;
  footer: string;
}

export interface Hero {
  eyebrow: string;
  status: string;
  headline: { before: string; rule: string; middle: string; brush: string; after: string };
  lede: string;
  primary: Link;
  secondary: Link;
}

export interface About {
  label: string;
  intro: string;
  highlight: string;
  valuesTitle: string;
  values: { title: string; body: string }[];
  experienceTitle: string;
  experience: { years: string; title: string; detail: string }[];
  factsTitle: string;
  facts: string[];
  paintings: { src: string; alt: string; zoom?: number; focus?: string }[];
  paintingsCaption: string;
}

export interface Work {
  label: string;
  title: string;
  sub: string;
}

export interface WhyMe {
  label: string;
  title: string;
  notesTitle: string;
  testimonials: { quote: string; role: string; org: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
}

export interface Contact {
  label: string;
  heading: string;
  sub: string;
  email: string;
  links: Link[];
}

export interface CaseStudy {
  slug: string;
  order: number;
  featured?: boolean;
  cover: string;
  tag: string;
  title: string;
  summary: string;
  cardMeta?: string;
  linkLabel?: string;
  heading: string;
  intro: string;
  meta: { label: string; value: string }[];
  stats?: { value: string; label: string }[];
  takeaway?: string;
  note?: string;
  html: string;
}

export const site = siteMd.data as unknown as Site;
export const hero = heroMd.data as unknown as Hero;
export const about = { ...(aboutMd.data as unknown as About), html: aboutMd.html };
export const work = workMd.data as unknown as Work;
export const whyMe = whyMeMd.data as unknown as WhyMe;
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
