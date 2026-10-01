import type { ReactNode } from "react";
import type { CaseStudy } from "../lib/content";

/** One numbered section of a case study: heading on the left, content on the right. */
export function CaseSection({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  const id = `section-${n}`;
  return (
    <section className="case-section" aria-labelledby={id}>
      <div className="case-section-head">
        <span className="case-num" aria-hidden="true">
          {String(n).padStart(2, "0")}
        </span>
        <h2 id={id}>{title}</h2>
      </div>
      <div className="case-section-body">{children}</div>
    </section>
  );
}

/** Research rounds as one bar, each segment sized by how many people took part. */
export function ResearchBar({ research }: { research: NonNullable<CaseStudy["research"]> }) {
  return (
    <figure className="research">
      <figcaption className="research-head">
        <span>{research.label}</span>
        <span>{research.total}</span>
      </figcaption>
      <ol className="research-bar">
        {research.rounds.map((round, i) => (
          <li
            key={round.method}
            style={{ flexGrow: Math.max(round.people, 9) }}
            className={i >= research.rounds.length - 2 ? "research-seg research-seg--deep" : "research-seg"}>
            <strong>{round.people}</strong>
            <span>{round.method}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function Decisions({ decisions }: { decisions: CaseStudy["decisions"] }) {
  return (
    <ul className="decisions">
      {decisions.map((d) => (
        <li key={d.title} className="decision">
          <h3>{d.title}</h3>
          <p>{d.body}</p>
          {d.chips && (
            <ul className="chips" aria-label="Variants">
              {d.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Stats({ stats }: { stats: CaseStudy["stats"] }) {
  return (
    <dl className="stats">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
