import { motion } from "framer-motion";
import { about } from "../lib/content";
import { inView, rise, useEntrance } from "../lib/motion";

export function About() {
  const initial = useEntrance();

  return (
    <section id="about" className="wrap section about" aria-labelledby="about-title">
      <motion.img
        className="about-photo"
        src={`/images/${about.photo.src}-800.jpg`}
        srcSet={`/images/${about.photo.src}-800.jpg 800w, /images/${about.photo.src}.jpg 1400w`}
        sizes="(min-width: 48rem) 33vw, 90vw"
        width={800}
        height={600}
        style={{ objectPosition: about.photo.focus }}
        loading="lazy"
        decoding="async"
        alt={about.photo.alt}
        variants={rise}
        initial={initial}
        whileInView="shown"
        viewport={inView}
      />
      <div className="about-text">
        <p className="kicker">{about.label}</p>
        <h2 id="about-title" className="about-heading">
          {about.heading}
        </h2>
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="about-links">
          {about.links.map((link) => (
            <a key={link.href} href={link.href} className="ulink">
              {link.label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
