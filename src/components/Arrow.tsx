const ROTATE = { right: 0, down: 90, left: 180, "up-right": -45 } as const;

/** The site's one arrow: a single 1.75px stroke, rotated for direction. Decorative. */
export function Arrow({ dir = "right" }: { dir?: keyof typeof ROTATE }) {
  return (
    <svg
      className="arrow"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${ROTATE[dir]}deg)` }}>
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
