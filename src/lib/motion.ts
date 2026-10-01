import { useReducedMotion, type Transition, type Variants } from "framer-motion";

/** Ease for hand-drawn strokes and handwriting drawing themselves in. */
export const EASE_DRAW: Transition["ease"] = [0.55, 0.1, 0.35, 1];

/** Ease for things settling into place. */
export const EASE_OUT: Transition["ease"] = [0.2, 0.8, 0.2, 1];

/** Fade and rise, used for page entrances and scroll reveals. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  shown: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT, delay } }),
};

/** Handwriting: a left-to-right wipe, like a pen moving across the page. `custom` is the delay. */
export const write: Variants = {
  hidden: { clipPath: "inset(-20% 100% -20% 0)" },
  shown: (delay = 0) => ({
    clipPath: "inset(-20% -5% -20% 0)",
    transition: { duration: 1.6, ease: EASE_DRAW, delay },
  }),
};

/** Viewport settings shared by every scroll reveal. */
export const inView = { once: true, amount: 0.3 } as const;

/** Initial variant for an entrance: skipped entirely when the visitor asks for less motion. */
export function useEntrance(): "hidden" | false {
  return useReducedMotion() ? false : "hidden";
}
