import type { CaseStudy } from "../lib/content";

/** The long wall label beside a case study: facts first, then the numbers as plain lines. */
export function CaseMeta({ study }: { study: CaseStudy }) {
  return (
    <div className="case-meta-panel">
      <dl className="case-facts">
        {study.meta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      {study.stats && (
        <ul className="case-stats">
          {study.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      )}
      {study.note && <p className="case-note">{study.note}</p>}
    </div>
  );
}
