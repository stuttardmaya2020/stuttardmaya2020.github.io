import { howIWork } from "../lib/content";
import "../styles/sections.css";

export function Process() {
  return (
    <section className="wrap section" aria-labelledby="process-title">
      <h2 id="process-title" className="kicker">
        {howIWork.title}
      </h2>
      <ol className="process">
        {howIWork.steps.map((step) => (
          <li key={step.name}>
            <span className="process-name">{step.name}</span>
            <span className="process-body">{step.body}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
