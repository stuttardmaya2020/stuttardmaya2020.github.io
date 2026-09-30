import siteMd from "../content/site.md";
import heroMd from "../content/hero.md";
import workMd from "../content/work.md";
import artMd from "../content/art.md";
import contactMd from "../content/contact.md";

export interface Link {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  shortName: string;
  nav: Link[];
  skipLink: string;
  navLabel: string;
  backToWork: string;
  nextExhibit: string;
  takeawayLabel: string;
  footer: string;
}

export interface Hero {
  name: string;
  role: string;
  pieceTitle: string;
  pieceYear: string;
  medium: string;
  hint: string;
  clear: string;
  cta: Link;
}

export interface Work {
  title: string;
  sub: string;
}

export interface Art {
  title: string;
  sub: string;
  paintings: { src: string; size: [number, number]; title: string; medium: string; alt: string; zoom?: number; focus?: string }[];
  photosTitle: string;
  photosSub: string;
  photos: { src: string; title: string; alt: string; focus: string }[];
}

export interface Contact {
  heading: string;
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
  wallMeta: string;
  wallLine: string;
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
export const work = workMd.data as unknown as Work;
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
