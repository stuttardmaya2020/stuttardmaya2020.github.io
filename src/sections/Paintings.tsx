import { art } from "../lib/content";
import "../styles/play.css";

const PAINTING_SIZES = "(min-width: 60rem) 20vw, (min-width: 40rem) 33vw, 50vw";

/** Maya's paintings, in a quiet band of their own. */
export function Paintings() {
  return (
    <section id="play" className="play" aria-labelledby="play-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="play-title" className="section-title">
            {art.title} <em>{art.titleItalic}</em>
          </h2>
          <p className="section-sub">{art.sub}</p>
        </div>
        <ul className="paintings">
          {art.paintings.map((p) => (
            <li key={p.src}>
              <figure>
                <img
                  src={`/images/${p.src}-800.jpg`}
                  srcSet={`/images/${p.src}-800.jpg 800w, /images/${p.src}.jpg 1400w`}
                  sizes={PAINTING_SIZES}
                  width={p.size[0]}
                  height={p.size[1]}
                  loading="lazy"
                  decoding="async"
                  alt={p.alt}
                />
                <figcaption>
                  <span>{p.title}</span> · {p.medium}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
