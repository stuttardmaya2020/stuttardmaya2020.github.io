import { Faq } from "../components/Faq";
import { Note } from "../components/Note";
import { Reveal, RevealItem } from "../components/Reveal";
import { whyMe } from "../lib/content";
import "../styles/why-me.css";

export function WhyMe() {
  return (
    <section id="why-me" className="section why" aria-labelledby="why-title">
      <div className="wrap">
        <Reveal>
          <RevealItem as="p" className="label">
            {whyMe.label}
          </RevealItem>
          <RevealItem>
            <h2 id="why-title" className="section-title">
              {whyMe.title}
            </h2>
          </RevealItem>
        </Reveal>

        <h3 className="why-subhead">{whyMe.notesTitle}</h3>
        <ul className="notes">
          {whyMe.testimonials.map((note, i) => (
            <Note key={note.role} note={note} index={i} />
          ))}
        </ul>

        <h3 className="why-subhead">{whyMe.faqTitle}</h3>
        <Faq items={whyMe.faq} />
      </div>
    </section>
  );
}
