import { Reveal, RevealItem } from "./Reveal";
import { about } from "../lib/content";

const SIZES = "(min-width: 60rem) 20vw, (min-width: 40rem) 33vw, 50vw";

export function Paintings() {
  return (
    <figure className="paintings">
      <Reveal as="ul" className="paintings-grid" step={0.07}>
        {about.paintings.map((painting) => (
          <RevealItem as="li" key={painting.src}>
            <img
              src={`/images/${painting.src}-800.jpg`}
              srcSet={`/images/${painting.src}-800.jpg 800w, /images/${painting.src}.jpg 1400w`}
              sizes={SIZES}
              width={600}
              height={800}
              loading="lazy"
              decoding="async"
              alt={painting.alt}
              style={{
                transform: painting.zoom ? `scale(${painting.zoom})` : undefined,
                transformOrigin: painting.focus,
                objectPosition: painting.focus,
              }}
            />
          </RevealItem>
        ))}
      </Reveal>
      <figcaption className="paintings-caption">{about.paintingsCaption}</figcaption>
    </figure>
  );
}
