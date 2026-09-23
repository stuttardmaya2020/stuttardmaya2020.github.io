import { Reveal, RevealItem } from "../components/Reveal";
import { Scribble } from "../components/Scribble";
import { Values } from "../components/Values";
import { Timeline } from "../components/Timeline";
import { Paintings } from "../components/Paintings";
import { about } from "../lib/content";
import "../styles/about.css";

// A wobbly vertical margin stroke, like a pen mark beside the line that matters.
const MARGIN_MARK = "M6 2 C3 20 9 38 5 56 C2 72 8 86 6 98";

export function About() {
  const [before = "", after = ""] = about.html.split("<!-- highlight -->");

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap">
        <Reveal>
          <RevealItem>
            <h2 id="about-title" className="label">
              {about.label}
            </h2>
          </RevealItem>
          <RevealItem as="p" className="about-intro">
            {about.intro}
          </RevealItem>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-story">
            <RevealItem className="prose">
              <div dangerouslySetInnerHTML={{ __html: before }} />
            </RevealItem>
            <RevealItem as="p" className="about-highlight">
              <Scribble className="about-highlight-mark" d={MARGIN_MARK} viewBox="0 0 12 100" delay={0.3} />
              {about.highlight}
            </RevealItem>
            <RevealItem className="prose">
              <div dangerouslySetInnerHTML={{ __html: after }} />
            </RevealItem>
          </Reveal>
          <Values />
        </div>

        <div className="about-grid about-grid--even">
          <Timeline />
          <Reveal>
            <RevealItem>
              <h3 className="label">{about.factsTitle}</h3>
            </RevealItem>
            <ul className="facts">
              {about.facts.map((fact) => (
                <RevealItem as="li" key={fact}>
                  {fact}
                </RevealItem>
              ))}
            </ul>
          </Reveal>
        </div>

        <Paintings />
      </div>
    </section>
  );
}
