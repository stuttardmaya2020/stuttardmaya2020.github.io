import { motion } from "framer-motion";
import { Reveal, RevealItem } from "../components/Reveal";
import { contact } from "../lib/content";
import "../styles/contact.css";

const underline = { shown: { scaleX: 0 }, hover: { scaleX: 1, transition: { duration: 0.35 } } };

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <Reveal className="wrap">
        <RevealItem as="p" className="label">
          {contact.label}
        </RevealItem>
        <RevealItem>
          <h2 id="contact-title" className="contact-heading">
            {contact.heading}
          </h2>
        </RevealItem>
        <RevealItem as="p" className="contact-sub">
          {contact.sub}
        </RevealItem>
        <RevealItem>
          <motion.a href={`mailto:${contact.email}`} className="contact-email"
            initial="shown"
            animate="shown"
            whileHover="hover"
            whileFocus="hover">
            {contact.email}
            <motion.span className="contact-email-rule" variants={underline} aria-hidden="true" />
          </motion.a>
        </RevealItem>
        <RevealItem as="p" className="contact-links">
          {contact.links.map((link) => (
            <a key={link.href} href={link.href} className="text-link">
              {link.label}
            </a>
          ))}
        </RevealItem>
      </Reveal>
    </section>
  );
}
