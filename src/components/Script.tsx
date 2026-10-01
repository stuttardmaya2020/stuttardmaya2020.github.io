import { motion } from "framer-motion";
import { inView, useEntrance, write } from "../lib/motion";

/**
 * A handwritten note in the margin. It writes itself in, left to right,
 * on load or when scrolled into view. Decorative: the same words never carry meaning alone.
 */
export function Script({
  text,
  className = "",
  delay = 0,
  onLoad = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  onLoad?: boolean;
}) {
  const initial = useEntrance();
  const trigger = onLoad ? { animate: "shown" } : { whileInView: "shown", viewport: inView };

  return (
    <motion.span
      aria-hidden="true"
      className={`script ${className}`}
      variants={write}
      initial={initial}
      custom={delay}
      {...trigger}>
      {text}
    </motion.span>
  );
}
