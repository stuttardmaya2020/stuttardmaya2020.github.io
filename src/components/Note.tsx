import { motion, type Variants } from "framer-motion";
import type { WhyMe } from "../lib/content";

// Each note sits at its own slight angle, like it was pinned up by hand.
const TILTS = [-2.2, 1.6, -1.2, 2.4];
const SPRING = { type: "spring", stiffness: 180, damping: 16 } as const;

const noteVariants = (tilt: number, delay: number): Variants => ({
  hidden: { opacity: 0, y: 40, rotate: tilt * 3 },
  shown: { opacity: 1, y: 0, rotate: tilt, transition: { ...SPRING, delay } },
  hover: { y: -6, rotate: 0, transition: SPRING },
});

export function Note({ note, index }: { note: WhyMe["testimonials"][number]; index: number }) {
  const tilt = TILTS[index % TILTS.length] ?? 0;
  return (
    // whileHover makes this a variant parent, so it runs its own in-view entrance.
    <motion.li
      className="note"
      variants={noteVariants(tilt, (index % 2) * 0.12)}
      initial="hidden"
      whileInView="shown"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}>
      <figure>
        <span className="note-mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote>
          <p>{note.quote}</p>
        </blockquote>
        <figcaption>
          <strong>{note.role}</strong>, {note.org}
        </figcaption>
      </figure>
    </motion.li>
  );
}
