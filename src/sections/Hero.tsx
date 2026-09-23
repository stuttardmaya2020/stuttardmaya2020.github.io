import { motion, useReducedMotion } from "framer-motion";
import { HeroCanvas } from "../art/HeroCanvas";
import { Scribble } from "../components/Scribble";
import { hero } from "../lib/content";
import { EASE_DRAW, rise, stagger } from "../lib/motion";
import "../styles/hero.css";

const BRUSH = "M3 8.5C38 3.5 74 10 110 6.5S176 2.5 197 7";
const RULE_FROM = "0% 0.07em";
const RULE_TO = "100% 0.07em";

export function Hero() {
  const reduce = useReducedMotion();
  const { headline: h } = hero;

  return (
    <header id="top" className="hero" aria-labelledby="hero-title">
      <HeroCanvas className="hero-art" />
      <motion.div className="wrap hero-inner" variants={stagger(0.09, 0.1)} initial="hidden" animate="shown">
        <motion.p className="hero-eyebrow label" variants={rise}>
          <span>{hero.eyebrow}</span>
          <span className="hero-status">
            <span className="live-dot" aria-hidden="true" />
            {hero.status}
          </span>
        </motion.p>
        <motion.h1 id="hero-title" className="hero-title" variants={rise}>
          {h.before}{" "}
          {/* Engineer's brain: a ruled line. Artist's eye: a brush stroke. */}
          <motion.span
            className="hl-rule"
            initial={{ backgroundSize: reduce ? RULE_TO : RULE_FROM }}
            animate={{ backgroundSize: RULE_TO }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE_DRAW }}>
            {h.rule}
          </motion.span>{" "}
          {h.middle}{" "}
          <span className="hl-brush">
            {h.brush}
            <Scribble className="hl-brush-mark" d={BRUSH} viewBox="0 0 200 12" trigger="mount" delay={1.2} />
          </span>
          {h.after}
        </motion.h1>
        <motion.p className="hero-lede" variants={rise}>
          {hero.lede}
        </motion.p>
        <motion.div className="hero-actions" variants={rise}>
          <motion.a href={hero.primary.href} className="button" whileHover="hover" whileFocus="hover">
            {hero.primary.label}
            <motion.span aria-hidden="true" variants={{ hover: { y: 3 } }}>
              ↓
            </motion.span>
          </motion.a>
          <motion.a href={hero.secondary.href} className="text-link" whileHover="hover" whileFocus="hover">
            {hero.secondary.label}
            <motion.span aria-hidden="true" variants={{ hover: { x: 3 } }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}
