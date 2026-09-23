import { Reveal, RevealItem } from "./Reveal";
import { about } from "../lib/content";

export function Values() {
  return (
    <Reveal className="values">
      <RevealItem>
        <h3 className="label">{about.valuesTitle}</h3>
      </RevealItem>
      <ol className="values-list">
        {about.values.map((value, i) => (
          <RevealItem as="li" key={value.title}>
            <span className="values-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="values-title">{value.title}</p>
              <p className="values-body">{value.body}</p>
            </div>
          </RevealItem>
        ))}
      </ol>
    </Reveal>
  );
}
