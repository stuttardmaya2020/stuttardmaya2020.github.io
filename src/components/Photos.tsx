import { Reveal, RevealItem } from "./Reveal";
import { about } from "../lib/content";

const SIZES = "(min-width: 48rem) 16rem, 33vw";

/** Photos from outside work, as an even grid of square crops. */
export function Photos() {
  return (
    <figure className="photos">
      <h3 className="label">{about.photosTitle}</h3>
      <Reveal as="ul" className="photos-grid" step={0.06}>
        {about.photos.map(({ src, alt, focus }) => (
          <RevealItem as="li" key={src}>
            <img
              src={`/images/${src}-800.jpg`}
              srcSet={`/images/${src}-800.jpg 800w, /images/${src}.jpg 1400w`}
              sizes={SIZES}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              alt={alt}
              style={{ objectPosition: focus }}
            />
          </RevealItem>
        ))}
      </Reveal>
      <figcaption className="paintings-caption">{about.photosCaption}</figcaption>
    </figure>
  );
}
