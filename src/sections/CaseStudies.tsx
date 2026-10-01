import { Script } from "../components/Script";
import { WorkCard } from "../components/WorkCard";
import { caseStudies, work } from "../lib/content";
import "../styles/work.css";

/** Featured project full width, the two client projects side by side, research last and wide. */
function layoutFor(index: number, total: number) {
  return index === 0 || index === total - 1 ? "wide" : "half";
}

export function CaseStudies() {
  return (
    <section id="work" className="wrap section" aria-labelledby="work-title">
      <div className="section-head">
        <div className="section-titled">
          <h2 id="work-title" className="section-title">
            {work.title}
          </h2>
          <Script text={work.script} className="section-script" />
        </div>
        <p className="section-sub">{work.sub}</p>
      </div>
      <ul className="cards">
        {caseStudies.map((study, i) => (
          <WorkCard key={study.slug} study={study} layout={layoutFor(i, caseStudies.length)} />
        ))}
      </ul>
    </section>
  );
}
