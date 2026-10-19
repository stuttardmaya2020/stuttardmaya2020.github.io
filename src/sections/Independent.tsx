import { motion } from "framer-motion";
import { Script } from "../components/Script";
import { independent } from "../lib/content";
import { inView, rise, useEntrance } from "../lib/motion";
import { caseHref } from "../lib/useHashRoute";
import "../styles/independent.css";

const SHOT_SIZES = "(min-width: 52rem) 45vw, 100vw";

/** Freelance sites with real screens, since the client work can't show any. */
export function Independent() {
  const initial = useEntrance();
  return (
    <section id="independent" className="wrap section" aria-labelledby="independent-title">
      <div className="section-head">
        <div className="section-titled">
          <h2 id="independent-title" className="section-title">
            {independent.title}
          </h2>
          <Script text={independent.script} className="section-script" />
        </div>
        <p className="section-sub">{independent.sub}</p>
      </div>
      <ul className="sites">
        {independent.projects.map((p) => (
          <motion.li key={p.name} className="site" variants={rise} initial={initial} whileInView="shown" viewport={inView}>
            <figure className="site-shot">
              {p.before && (
                <span className="site-before">
                  <img src={`/images/${p.before.image}-800.jpg`} width={800} height={500} loading="lazy" decoding="async" alt={p.before.alt} />
                  <span className="site-before-label">{independent.beforeLabel}</span>
                </span>
              )}
              <img
                src={`/images/${p.image}-800.jpg`}
                srcSet={`/images/${p.image}-800.jpg 800w, /images/${p.image}.jpg 1440w`}
                sizes={SHOT_SIZES}
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                alt={p.alt}
              />
            </figure>
            <div className="site-body">
              <p className="kicker">{p.kind}</p>
              <h3 className="site-title">{p.name}</h3>
              <p className="site-line">{p.line}</p>
              <div className="site-foot">
                <span className="site-status">{p.status}</span>
                {p.caseSlug && (
                  <a className="site-visit" href={caseHref(p.caseSlug)}>
                    {independent.caseLink}
                  </a>
                )}
                {p.href && (
                  <a className="site-visit" href={p.href} target="_blank" rel="noreferrer">
                    {independent.visit}
                    <span className="visually-hidden">: {p.name} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
