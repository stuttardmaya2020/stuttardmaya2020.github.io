import { motion } from "framer-motion";
import { Script } from "../components/Script";
import { hero } from "../lib/content";
import { EASE_DRAW, rise, useEntrance } from "../lib/motion";
import "../styles/hero.css";

/** A loose pen circle around one word, drawn after the headline lands. */
function Circle() {
  const initial = useEntrance();
  return (
    <svg className="hero-circle" viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <motion.path
        d="M30 18 C 80 2, 170 4, 190 30 C 205 56, 140 76, 80 72 C 20 68, 2 46, 18 26 C 28 14, 60 8, 90 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={initial && { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: EASE_DRAW, delay: 1.3 }}
      />
    </svg>
  );
}

export function Hero() {
  const initial = useEntrance();

  return (
    <section id="top" className="wrap hero" aria-labelledby="hero-title">
      <motion.p className="eyebrow" variants={rise} initial={initial} animate="shown">
        {hero.eyebrow}
      </motion.p>
      <div className="hero-headline">
        <motion.h1 id="hero-title" className="hero-title" variants={rise} initial={initial} animate="shown" custom={0.1}>
          {hero.headlineBefore}{" "}
          <span className="hero-circled">
            <em>{hero.headlineCircled}</em>
            <Circle />
          </span>
          {hero.headlineAfter}
        </motion.h1>
        <Script text={hero.script} className="hero-script" delay={0.7} onLoad />
      </div>
      <motion.p className="hero-sub" variants={rise} initial={initial} animate="shown" custom={0.25}>
        {hero.sub}
      </motion.p>
      <motion.div className="hero-actions" variants={rise} initial={initial} animate="shown" custom={0.35}>
        <a href={hero.cta.href} className="btn">
          {hero.cta.label}
        </a>
        <a href={hero.secondary.href} className="ulink">
          {hero.secondary.label}
        </a>
      </motion.div>
      <a href={hero.cta.href} className="hero-cue">
        <svg className="hero-mouse" width="22" height="32" viewBox="0 0 22 32" fill="none" aria-hidden="true" focusable="false">
          <rect x="1" y="1" width="20" height="30" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 8v12M7.5 16.5 11 20l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {hero.scrollCue}
      </a>
    </section>
  );
}
