import { CaseCard } from "../components/CaseCard";
import { Reveal, RevealItem } from "../components/Reveal";
import { caseStudies, work } from "../lib/content";
import "../styles/work.css";

export function CaseStudies() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal className="work-head">
          <RevealItem as="p" className="label">
            {work.label}
          </RevealItem>
          <RevealItem>
            <h2 id="work-title" className="section-title">
              {work.title}
            </h2>
          </RevealItem>
          <RevealItem as="p" className="work-sub">
            {work.sub}
          </RevealItem>
        </Reveal>
        <Reveal as="ul" className="case-grid" step={0.1}>
          {caseStudies.map((study, i) => (
            <CaseCard key={study.slug} study={study} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
