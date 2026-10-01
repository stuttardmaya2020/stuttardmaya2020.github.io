import { motion } from "framer-motion";
import { CaseVisual } from "../art/CaseVisual";
import { Arrow } from "./Arrow";
import { work, type CaseStudy } from "../lib/content";
import { inView, rise, useEntrance } from "../lib/motion";
import { caseHref } from "../lib/useHashRoute";

/** One project on the home page. Featured and wide cards sit side by side; the rest stack. */
export function WorkCard({ study, layout }: { study: CaseStudy; layout: "wide" | "half" }) {
  const initial = useEntrance();
  const titleId = `card-${study.slug}`;

  return (
    <motion.li className={`card card--${layout} card--${study.visual}`} variants={rise} initial={initial} whileInView="shown" viewport={inView}>
      <a href={caseHref(study.slug)} className="card-link" aria-labelledby={titleId}>
        <div className="card-visual">
          <CaseVisual visual={study.visual} />
        </div>
        <div className="card-body">
          <p className="kicker">{study.cardMeta}</p>
          <h3 id={titleId} className="card-title">
            {study.cardTitle}
          </h3>
          <p className="card-line">{study.cardLine}</p>
          {study.cardStats && (
            <dl className="card-stats">
              {study.cardStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <span className="card-cta" aria-hidden="true">
            {work.cta} <Arrow />
          </span>
        </div>
      </a>
    </motion.li>
  );
}
