import type { CaseStudy } from "../lib/content";

export function CaseMeta({ study }: { study: CaseStudy }) {
  return (
    <div className="case-meta-panel">
      <dl className="case-facts">
        {study.meta.map((item) => (
          <div key={item.label}>
            <dt className="label">{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      {study.stats && (
        <dl className="case-stats">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {study.note && <p className="case-note">{study.note}</p>}
    </div>
  );
}
