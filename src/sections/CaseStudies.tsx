import { Script } from "../components/Script";
import { WorkCard } from "../components/WorkCard";
import { caseStudies, work } from "../lib/content";
import "../styles/work.css";

/** Featured project full width, client projects in pairs, research last and wide. An unpaired card goes wide too. */
function layoutFor(index: number, total: number) {
  const unpaired = (total - 2) % 2 === 1 && index === total - 2;
  return index === 0 || index === total - 1 || unpaired ? "wide" : "half";
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
