import { motion } from "framer-motion";
import { CoverArt } from "../art/CoverArt";
import type { CaseStudy } from "../lib/content";
import { caseHref } from "../lib/useHashRoute";

/** One case study hung on the wall: a lilac mount with its line drawing, and a wall label. */
export function Exhibit({ study }: { study: CaseStudy }) {
  const titleId = `exhibit-${study.slug}`;

  return (
    <li className={study.featured ? "exhibit exhibit--featured" : "exhibit"}>
      <motion.a
        href={caseHref(study.slug)}
        className="exhibit-link"
        aria-labelledby={titleId}
        initial="shown"
        animate="shown"
        whileHover="hover"
        whileFocus="hover">
        <div className="exhibit-mount">
          <CoverArt motif={study.cover} />
        </div>
        <div className="wall-label exhibit-label">
          <h3 id={titleId} className="wall-label-title">
            {study.title}
          </h3>
          <p className="wall-label-line">{study.wallMeta}</p>
          <p className="wall-label-body">{study.wallLine}</p>
        </div>
      </motion.a>
    </li>
  );
}
