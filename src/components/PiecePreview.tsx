import type { PieceStyle } from "../art/flowField";

const OPTIONS: { id: PieceStyle; label: string }[] = [
  { id: "lines", label: "Lines (current)" },
  { id: "drift", label: "Drift" },
  { id: "wake", label: "Wake" },
  { id: "dance", label: "Dance" },
];

/** Dev-only switcher for the hero piece's star explorations. */
export function PiecePreview({ value, onChange }: { value: PieceStyle; onChange: (v: PieceStyle) => void }) {
  return (
    <div className="piece-preview" role="group" aria-label="Hero piece style preview">
      {OPTIONS.map((o) => (
        <button key={o.id} type="button" aria-pressed={o.id === value} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}
