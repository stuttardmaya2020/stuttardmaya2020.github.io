/** Organic blob shapes for the hero canvas: a circle whose radius wobbles with a few sine harmonics. */

interface Harmonic {
  k: number;
  amp: number;
  phase: number;
  speed: number;
}

export interface Blob {
  x: number; // 0..1 of width
  y: number; // 0..1 of height
  r: number; // fraction of the shorter side
  fill?: string;
  stroke?: string;
  lineWidth?: number;
  /** Offset for outline strokes, so they sit slightly off-register like a print. */
  shift?: [number, number];
  harmonics: Harmonic[];
  drift: number;
}

export interface Palette {
  blush: string;
  blushDeep: string;
  paper2: string;
  accent: string;
  ink: string;
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function harmonics(rand: () => number): Harmonic[] {
  return [2, 3, 5].map((k) => ({
    k,
    amp: (0.05 + rand() * 0.06) / (k * 0.5),
    phase: rand() * Math.PI * 2,
    speed: (0.06 + rand() * 0.08) * (rand() > 0.5 ? 1 : -1),
  }));
}

export function createBlobs(p: Palette, seed = 11): Blob[] {
  const rand = mulberry32(seed);
  const h = () => harmonics(rand);
  const main = h();
  return [
    { x: 0.84, y: 0.2, r: 0.34, fill: p.blush, harmonics: main, drift: 0.012 },
    { x: 0.64, y: 0.5, r: 0.13, fill: p.blushDeep, harmonics: h(), drift: 0.018 },
    { x: 0.98, y: 0.78, r: 0.2, fill: p.paper2, harmonics: h(), drift: 0.01 },
    { x: 0.04, y: 1.02, r: 0.2, fill: p.blush, harmonics: h(), drift: 0.01 },
    { x: 0.84, y: 0.2, r: 0.36, stroke: p.accent, lineWidth: 1.4, shift: [10, -8], harmonics: main.map((m) => ({ ...m, phase: m.phase + 0.7 })), drift: 0.012 },
    { x: 0.64, y: 0.5, r: 0.155, stroke: p.ink, lineWidth: 0.8, shift: [-6, 5], harmonics: h(), drift: 0.018 },
  ];
}

const POINTS = 72;

function tracePath(ctx: CanvasRenderingContext2D, b: Blob, w: number, h: number, t: number) {
  const base = Math.min(w, h) * b.r * (w < 640 ? 0.8 : 1);
  const [sx, sy] = b.shift ?? [0, 0];
  const cx = b.x * w + sx + Math.sin(t * 0.13 + b.r * 10) * b.drift * w;
  const cy = b.y * h + sy + Math.cos(t * 0.11 + b.r * 7) * b.drift * h;
  const pts: [number, number][] = [];
  for (let i = 0; i < POINTS; i++) {
    const a = (i / POINTS) * Math.PI * 2;
    const wobble = b.harmonics.reduce((sum, hm) => sum + hm.amp * Math.sin(hm.k * a + hm.phase + hm.speed * t), 0);
    const r = base * (1 + wobble);
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  // Quadratic curves through midpoints give a smooth closed outline.
  const mid = (i: number) => {
    const [ax, ay] = pts[i % POINTS]!;
    const [bx, by] = pts[(i + 1) % POINTS]!;
    return [(ax + bx) / 2, (ay + by) / 2] as const;
  };
  ctx.beginPath();
  ctx.moveTo(...mid(POINTS - 1));
  for (let i = 0; i < POINTS; i++) ctx.quadraticCurveTo(pts[i]![0], pts[i]![1], ...mid(i));
  ctx.closePath();
}

export function drawBlobs(ctx: CanvasRenderingContext2D, blobs: Blob[], w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h);
  for (const b of blobs) {
    tracePath(ctx, b, w, h, t);
    if (b.fill) {
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = b.fill;
      ctx.fill();
    }
    if (b.stroke) {
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = b.stroke;
      ctx.lineWidth = b.lineWidth ?? 1;
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}
