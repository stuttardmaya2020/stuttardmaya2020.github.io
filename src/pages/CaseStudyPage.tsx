import { motion } from "framer-motion";
import { CaseMeta } from "../components/CaseMeta";
import { site, type CaseStudy } from "../lib/content";
import { rise, stagger } from "../lib/motion";
import "../styles/case-study.css";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      key={study.slug}
      className="wrap case-page"
      variants={stagger(0.08)}
      initial="hidden"
      animate="shown">
      <motion.p variants={rise}>
        <motion.a href="#work" className="text-link" whileHover="hover" whileFocus="hover">
          <motion.span aria-hidden="true" variants={{ hover: { x: -3 } }}>
            ←
          </motion.span>
          {site.backToWork}
        </motion.a>
      </motion.p>

      <motion.header className="case-header" variants={rise}>
        <p className="label">{study.tag}</p>
        <h1 id="main-heading" className="case-heading" tabIndex={-1}>
          {study.heading}
        </h1>
        <p className="case-intro">{study.intro}</p>
      </motion.header>

      <div className="case-layout">
        <motion.div variants={rise}>
          <CaseMeta study={study} />
        </motion.div>
        <motion.div className="case-body" variants={rise}>
          <div className="case-prose" dangerouslySetInnerHTML={{ __html: study.html }} />
          {study.takeaway && (
            <aside className="case-takeaway" aria-label={site.takeawayLabel}>
              <p className="label">{site.takeawayLabel}</p>
              <p className="case-takeaway-text">{study.takeaway}</p>
            </aside>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}
