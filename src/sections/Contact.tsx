import { Script } from "../components/Script";
import { contact } from "../lib/content";
import "../styles/contact.css";

export function Contact() {
  return (
    <section id="contact" className="wrap section contact" aria-labelledby="contact-title">
      <div className="contact-titled">
        <h2 id="contact-title" className="contact-heading">
          {contact.heading}
        </h2>
        <Script text={contact.script} className="contact-script" />
      </div>
      <p className="contact-sub">{contact.sub}</p>
      <a href={`mailto:${contact.email}`} className="ulink contact-email">
        {contact.email}
      </a>
    </section>
  );
}
