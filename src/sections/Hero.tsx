import { useState } from "react";
import { FlowCanvas } from "../art/FlowCanvas";
import type { PieceStyle } from "../art/flowField";
import { PiecePreview } from "../components/PiecePreview";
import { Arrow } from "../components/Arrow";
import { hero } from "../lib/content";
import "../styles/hero.css";

/** First viewport: one live piece hung on a white wall, with its wall label. */
export function Hero() {
  const [clearKey, setClearKey] = useState(0);
  const [pieceStyle, setPieceStyle] = useState<PieceStyle>("drift");

  return (
    <header id="top" className="wrap hero" aria-labelledby="hero-title">
      <figure className="piece">
        <FlowCanvas clearKey={clearKey} pieceStyle={pieceStyle} />
      </figure>
      <div className="wall-label hero-label">
        <h1 id="hero-title" className="hero-name">
          {hero.name}
        </h1>
        <p className="hero-role">{hero.role}</p>
        <p className="hero-work">
          <em>{hero.pieceTitle}</em>, {hero.pieceYear}
        </p>
        <p className="wall-label-body">{hero.medium}</p>
        <p className="hero-hint">
          {hero.hint}{" "}
          <button type="button" className="hero-clear" onClick={() => setClearKey((k) => k + 1)}>
            {hero.clear}
          </button>
        </p>
        <a href={hero.cta.href} className="arrow-link hero-cta">
          {hero.cta.label} <Arrow dir="down" />
        </a>
      </div>
      {import.meta.env.DEV && <PiecePreview value={pieceStyle} onChange={setPieceStyle} />}
    </header>
  );
}
