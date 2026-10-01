import { hero } from "../lib/content";

/** The everyday tools, set in a quiet strip under the hero. */
export function Toolkit() {
  return (
    <section className="toolkit" aria-labelledby="toolkit-title">
      <div className="wrap toolkit-inner">
        <h2 id="toolkit-title" className="kicker">
          {hero.toolkitLabel}
        </h2>
        <ul className="toolkit-list">
          {hero.toolkit.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
