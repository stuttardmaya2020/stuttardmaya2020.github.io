import { Arrow } from "../components/Arrow";
import { contact } from "../lib/content";
import "../styles/contact.css";

export function Contact() {
  return (
    <section id="contact" className="wrap section contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact-heading">
        {contact.heading}
      </h2>
      <a href={`mailto:${contact.email}`} className="contact-email">
        {contact.email}
      </a>
      <p className="contact-links">
        {contact.links.map((link) => (
          <a key={link.href} href={link.href} className="arrow-link">
            {link.label} <Arrow dir="up-right" />
          </a>
        ))}
      </p>
    </section>
  );
}
