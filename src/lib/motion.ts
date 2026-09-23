import type { Transition, Variants } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.2, 0.7, 0.2, 1];
export const EASE_DRAW: Transition["ease"] = [0.6, 0, 0.2, 1];

/** Fade-and-rise used for scroll and load entrances. Parent sets `staggerChildren`. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const stagger = (step = 0.09, delay = 0): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: step, delayChildren: delay } },
});
