import { art } from "../lib/content";
import "../styles/art.css";

const PAINTING_SIZES = "(min-width: 60rem) 20vw, (min-width: 40rem) 33vw, 50vw";

/** Maya's paintings hung with wall labels, then photos from outside work, hung the same way. */
export function Paintings() {
  return (
    <section id="paintings" className="wrap section" aria-labelledby="paintings-title">
      <h2 id="paintings-title" className="section-title">
        {art.title}
      </h2>
      <p className="section-sub">{art.sub}</p>
      <ul className="salon">
        {art.paintings.map((p) => (
          <li key={p.src}>
            <div className="salon-frame">
              <img
                src={`/images/${p.src}-800.jpg`}
                srcSet={`/images/${p.src}-800.jpg 800w, /images/${p.src}.jpg 1400w`}
                sizes={PAINTING_SIZES}
                width={p.size[0]}
                height={p.size[1]}
                loading="lazy"
                decoding="async"
                alt={p.alt}
                style={{
                  transform: p.zoom ? `scale(${p.zoom})` : undefined,
                  transformOrigin: p.focus,
                  objectPosition: p.focus,
                }}
              />
            </div>
            <p className="wall-label salon-label">
              <strong>{p.title}</strong>
              <span>{p.medium}</span>
            </p>
          </li>
        ))}
      </ul>

      <h3 className="outside-title">{art.photosTitle}</h3>
      <p className="section-sub">{art.photosSub}</p>
      <ul className="salon salon--photos">
        {art.photos.map(({ src, title, alt, focus }) => (
          <li key={src}>
            <div className="salon-frame">
              <img
                src={`/images/${src}-800.jpg`}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                alt={alt}
                style={{ objectPosition: focus }}
              />
            </div>
            <p className="wall-label salon-label">
              <strong>{title}</strong>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
