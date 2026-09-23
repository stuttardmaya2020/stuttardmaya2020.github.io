import { motion, useReducedMotion } from "framer-motion";
import { EASE_DRAW } from "../lib/motion";

interface ScribbleProps {
  d: string;
  viewBox: string;
  className?: string;
  /** "mount" draws on load; "inView" draws when scrolled into view. */
  trigger?: "mount" | "inView";
  delay?: number;
  duration?: number;
}

/** A hand-drawn stroke that draws itself in. Always decorative. */
export function Scribble({
  d,
  viewBox,
  className,
  trigger = "inView",
  delay = 0,
  duration = 0.9,
}: ScribbleProps) {
  const reduce = useReducedMotion();
  const drawn = { pathLength: 1, opacity: 1 };
  const animateProps = reduce
    ? { initial: drawn }
    : trigger === "mount"
      ? { initial: { pathLength: 0, opacity: 0 }, animate: drawn }
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: drawn,
          viewport: { once: true, amount: 0.8 },
        };

  return (
    <svg
      className={className}
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false">
      <motion.path
        d={d}
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        transition={{
          pathLength: { duration, delay, ease: EASE_DRAW },
          opacity: { duration: 0.01, delay },
        }}
        {...animateProps}
      />
    </svg>
  );
}
