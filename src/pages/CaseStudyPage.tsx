import { motion } from "framer-motion";
import { CaseVisual } from "../art/CaseVisual";
import { Arrow } from "../components/Arrow";
import { CaseSection, Decisions, ResearchBar, Stats } from "../components/CaseParts";
import { Script } from "../components/Script";
import { caseStudies, site, type CaseStudy } from "../lib/content";
import { inView, rise, useEntrance } from "../lib/motion";
import { caseHref } from "../lib/useHashRoute";
import "../styles/case-study.css";

/** Overview, the problem, the decisions, the impact. Short enough to read in a few minutes. */
export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const initial = useEntrance();
  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <article key={study.slug} className="case">
      <header className="wrap case-header">
        <a href="#work" className="pill case-back">
          <Arrow dir="left" /> {site.allWork}
        </a>
        <motion.p className="eyebrow" variants={rise} initial={initial} animate="shown">
          {study.eyebrow}
        </motion.p>
        <motion.h1 id="main-heading" tabIndex={-1} className="case-title" variants={rise} initial={initial} animate="shown" custom={0.1}>
          {study.title}
        </motion.h1>
        <motion.p className="case-summary" variants={rise} initial={initial} animate="shown" custom={0.2}>
          {study.summary}
        </motion.p>
      </header>

      <div className="wrap">
        <dl className="overview" aria-label="Project overview">
          {study.overview.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <motion.figure className={`case-visual case-visual--${study.visual}`} variants={rise} initial={initial} whileInView="shown" viewport={inView}>
          <div className="case-visual-stage">
            <CaseVisual visual={study.visual} />
          </div>
          <figcaption>{study.visualCaption}</figcaption>
        </motion.figure>

        <CaseSection n={1} title="The problem">
          <div className="case-prose" dangerouslySetInnerHTML={{ __html: study.html }} />
          {study.research && <ResearchBar research={study.research} />}
        </CaseSection>
        <CaseSection n={2} title="Key decisions">
          <Decisions decisions={study.decisions} />
        </CaseSection>
        <CaseSection n={3} title={study.impactTitle ?? "Impact"}>
          <Stats stats={study.stats} />
          <p>{study.impact}</p>
        </CaseSection>

        <aside className="takeaway" aria-label={site.takeawayScript}>
          <Script text={site.takeawayScript} className="takeaway-script" />
          <p>{study.takeaway}</p>
        </aside>

        {next && next !== study && (
          <nav aria-label={site.nextCase}>
            <a href={caseHref(next.slug)} className="next-case">
              <span className="kicker">{site.nextCase}</span>
              <span className="next-case-title">{next.cardTitle}</span>
              <Arrow />
            </a>
          </nav>
        )}
      </div>
    </article>
  );
}
