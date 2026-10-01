import type { Visual } from "../lib/content";
import "../styles/visuals.css";

/** Before and after: the ambiguous notification, then the one that can't be misread. */
function Notification() {
  return (
    <div className="viz-notes">
      <div className="viz-note viz-note--before">
        <span className="viz-kicker">Before</span>
        <strong>Virtual appointment booked</strong>
        <span>Tue 14 Oct, 10:30</span>
      </div>
      <div className="viz-note viz-note--after">
        <span className="viz-kicker">After</span>
        <strong>Telephone appointment</strong>
        <span>Tue 14 Oct, 10:30 · We'll call you</span>
        <span className="viz-tag">You do not need to travel</span>
      </div>
    </div>
  );
}

/** Five questions, and a path that doubles back on itself. */
function Loop() {
  return (
    <svg viewBox="0 0 320 120" className="viz-svg" fill="none" strokeLinecap="round">
      <path
        d="M30 70 C 50 10, 90 10, 100 70 C 108 110, 160 110, 165 70 C 170 20, 90 20, 100 70 M165 70 C 180 20, 225 20, 230 70 C 234 100, 200 100, 165 70 M230 70 C 245 20, 285 25, 290 70"
        stroke="var(--accent)"
        strokeWidth="1.8"
      />
      {[30, 100, 165, 230, 290].map((x, i) => (
        <circle key={x} cx={x} cy="70" r="9" className={i === 0 || i === 4 ? "viz-dot viz-dot--on" : "viz-dot"} />
      ))}
    </svg>
  );
}

/** One request, routed three ways depending on what the system behind it can do. */
function Paths() {
  return (
    <svg viewBox="0 0 300 130" className="viz-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 65 H 90 M90 65 C 130 65, 140 20, 190 20 H 270 M90 65 C 130 65, 140 110, 190 110 H 270" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M90 65 H 270" stroke="var(--accent)" strokeWidth="2.4" />
      <circle cx="20" cy="65" r="7" fill="var(--ink)" />
      <g className="viz-mono">
        <text x="200" y="12">LIVE SLOTS</text>
        <text x="200" y="57" fill="var(--accent)">PREFERENCES</text>
        <text x="200" y="102">REQUEST</text>
      </g>
    </svg>
  );
}

const AGES = [
  { age: "8", who: "learning to cook" },
  { age: "65", who: "sharing recipes" },
  { age: "30", who: "cooking without sight" },
];

/** The three people the dissertation was designed for, as type alone. */
function Ages() {
  return (
    <div className="viz-ages">
      {AGES.map((a) => (
        <div key={a.age}>
          <span className="viz-age">{a.age}</span>
          <span>{a.who}</span>
        </div>
      ))}
    </div>
  );
}

const VISUALS: Record<Visual, () => JSX.Element> = { notification: Notification, loop: Loop, paths: Paths, ages: Ages };

/** Illustrative stand-in for a case study's screens, which stay with the client. Decorative. */
export function CaseVisual({ visual }: { visual: Visual }) {
  const Drawing = VISUALS[visual];
  return (
    <div className={`viz viz--${visual}`} aria-hidden="true">
      <Drawing />
    </div>
  );
}
