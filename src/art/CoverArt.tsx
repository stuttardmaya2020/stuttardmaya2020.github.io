import { motion, useReducedMotion, type Variants } from "framer-motion";
import { COVER_MOTIFS } from "./coverMotifs";
import { EASE_DRAW } from "../lib/motion";

// Variant labels come from the parent card: hidden → shown on scroll, hover on hover/focus.
const inkVariants: Variants = {
  shown: { y: 0 },
  hover: { y: -4, transition: { type: "spring", stiffness: 300, damping: 18 } },
};

const drawVariants: Variants = {
  hidden: { pathLength: 0 },
  shown: { pathLength: 1, transition: { duration: 1, delay: 0.35, ease: EASE_DRAW } },
  hover: { pathLength: [0, 1], transition: { duration: 0.7, ease: EASE_DRAW } },
};

/** Line-drawing cover for a case study card. Decorative. */
export function CoverArt({ motif }: { motif: string }) {
  const reduce = useReducedMotion();
  const art = COVER_MOTIFS[motif];
  if (!art) return null;

  return (
    <svg className="cover-art" viewBox="0 0 320 240" aria-hidden="true" focusable="false">
      <motion.g variants={inkVariants} fill="none" stroke="var(--ink)" strokeWidth={1.25} opacity={0.75}>
        {art.ink.map((d) => (
          <path key={d} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </motion.g>
      <motion.path
        d={art.accent}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        variants={reduce ? undefined : drawVariants}
      />
    </svg>
  );
}
