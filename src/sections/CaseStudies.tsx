import { Exhibit } from "../components/Exhibit";
import { caseStudies, work } from "../lib/content";
import "../styles/work.css";

export function CaseStudies() {
  return (
    <section id="work" className="wrap section" aria-labelledby="work-title">
      <h2 id="work-title" className="section-title">
        {work.title}
      </h2>
      <p className="section-sub">{work.sub}</p>
      <ul className="hang">
        {caseStudies.map((study) => (
          <Exhibit key={study.slug} study={study} />
        ))}
      </ul>
    </section>
  );
}
