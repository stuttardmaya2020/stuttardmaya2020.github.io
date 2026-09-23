import { motion, type Variants } from "framer-motion";
import { CoverArt } from "../art/CoverArt";
import { site, type CaseStudy } from "../lib/content";
import { rise } from "../lib/motion";
import { caseHref } from "../lib/useHashRoute";

const SPRING = { type: "spring", stiffness: 320, damping: 22 } as const;

const card: Variants = { ...rise, hover: {} };
const cover: Variants = { shown: { y: 0 }, hover: { y: -6, transition: SPRING } };
const rule: Variants = { shown: { scaleX: 0 }, hover: { scaleX: 1, transition: { duration: 0.35 } } };
const arrow: Variants = { shown: { x: 0 }, hover: { x: 6, transition: SPRING } };

export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const titleId = `card-${study.slug}`;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.li className={study.featured ? "case-item case-item--featured" : "case-item"} variants={card}>
      <motion.a
        href={caseHref(study.slug)}
        className="case-card"
        aria-labelledby={titleId}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        whileHover="hover"
        whileFocus="hover">
        <motion.div className="case-cover" variants={cover}>
          <CoverArt motif={study.cover} />
        </motion.div>
        <div className="case-text">
          <p className="case-kicker label">
            <span>{num}</span>
            <span>{study.tag}</span>
          </p>
          <h3 id={titleId} className="case-title">
            {study.title}
            <motion.span className="case-title-rule" variants={rule} aria-hidden="true" />
          </h3>
          <p className="case-summary">{study.summary}</p>
          {study.cardMeta && <p className="case-meta label">{study.cardMeta}</p>}
          <p className="case-link">
            {study.linkLabel ?? site.readCaseStudy}
            <motion.span aria-hidden="true" variants={arrow}>
              →
            </motion.span>
          </p>
        </div>
      </motion.a>
    </motion.li>
  );
}
