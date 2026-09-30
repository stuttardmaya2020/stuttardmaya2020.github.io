import { drawStar, gaussian } from "./stars";

/**
 * Particles that drift through a flow field, bloom around the pointer and route
 * around painted strokes. Drawn as flow lines or as dancing stars.
 * Pure drawing logic; FlowCanvas owns the React side.
 */
export type PieceStyle = "lines" | "drift" | "wake" | "dance";

export interface FlowPalette {
  mount: string;
  line: string;
  bloom: string;
  paint: string;
}

interface Particle {
  x: number;
  y: number;
  hx: number; // home, for dance
  hy: number;
  age: number;
  life: number;
  r: number; // star radius
  phase: number; // twinkle offset
}

const CELL = 8; // paint occupancy grid resolution, in CSS px
const REACH = 150; // pointer influence radius

export class FlowField {
  private particles: Particle[] = [];
  private grid = new Uint8Array(0);
  private cols = 0;
  private rows = 0;
  private paint: HTMLCanvasElement;
  private pctx: CanvasRenderingContext2D;
  private last: { x: number; y: number } | null = null;
  pointer = { x: 0, y: 0, strength: 0, target: 0 };
  w = 0;
  h = 0;

  constructor(
    private ctx: CanvasRenderingContext2D,
    private palette: FlowPalette,
    private dpr: number,
    private style: PieceStyle = "lines",
  ) {
    this.paint = document.createElement("canvas");
    this.pctx = this.paint.getContext("2d")!;
  }

  resize(w: number, h: number) {
    const old = this.paint.width ? this.paint : null;
    const copy = old ? Object.assign(document.createElement("canvas"), { width: old.width, height: old.height }) : null;
    if (copy && old) copy.getContext("2d")!.drawImage(old, 0, 0);
    this.w = w;
    this.h = h;
    this.paint.width = Math.round(w * this.dpr);
    this.paint.height = Math.round(h * this.dpr);
    this.pctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (copy) this.pctx.drawImage(copy, 0, 0, w, h);
    const cols = Math.ceil(w / CELL);
    const rows = Math.ceil(h / CELL);
    if (cols !== this.cols || rows !== this.rows) {
      this.cols = cols;
      this.rows = rows;
      this.grid = new Uint8Array(cols * rows);
    }
    const density = this.style === "lines" ? 900 : 1700;
    const count = Math.round(Math.min(this.style === "lines" ? 520 : 280, (w * h) / density));
    this.clusters = Array.from({ length: 5 }, () => ({ x: (0.1 + Math.random() * 0.8) * w, y: (0.15 + Math.random() * 0.7) * h }));
    this.particles = Array.from({ length: count }, () => this.spawn());
    this.ctx.fillStyle = this.palette.mount;
    this.ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 140; i++) this.step(i * 0.01); // open on a drawn frame, not a blank one
  }

  private clusters: { x: number; y: number }[] = [];

  private spawn(): Particle {
    let x = Math.random() * this.w;
    let y = Math.random() * this.h;
    if (this.style === "dance" && this.clusters.length) {
      // Dance: stars gather in soft Gaussian clusters rather than an even scatter.
      const c = this.clusters[Math.floor(Math.random() * this.clusters.length)]!;
      x = Math.min(this.w, Math.max(0, gaussian(c.x, this.w * 0.09)));
      y = Math.min(this.h, Math.max(0, gaussian(c.y, this.h * 0.11)));
    }
    const r = Math.min(10, Math.max(1.6, gaussian(3.6, 1.6)));
    return { x, y, hx: x, hy: y, age: 0, life: 120 + Math.random() * 240, r, phase: Math.random() * Math.PI * 2 };
  }

  private angle(x: number, y: number, t: number) {
    return (
      Math.sin(x * 0.0042 + t * 0.21) * 1.4 +
      Math.cos(y * 0.0051 - t * 0.17) * 1.2 +
      Math.sin((x + y) * 0.0019 + t * 0.09) * 0.9
    );
  }

  private blocked(x: number, y: number) {
    const c = Math.floor(x / CELL);
    const r = Math.floor(y / CELL);
    return c >= 0 && r >= 0 && c < this.cols && r < this.rows && this.grid[r * this.cols + c] === 1;
  }

  step(t: number, fade = 0.018) {
    if (this.style !== "lines") return this.stepStars(t);
    const { ctx, pointer: p } = this;
    p.strength += (p.target - p.strength) * 0.06;
    ctx.globalAlpha = fade;
    ctx.fillStyle = this.palette.mount;
    ctx.fillRect(0, 0, this.w, this.h);
    ctx.globalAlpha = 1;
    ctx.lineCap = "round";

    for (const q of this.particles) {
      let a = this.angle(q.x, q.y, t);
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const d = Math.hypot(dx, dy);
      const near = p.strength * Math.max(0, 1 - d / REACH);
      if (near > 0) a = a * (1 - near) + (Math.atan2(dy, dx) + Math.PI / 2) * near; // swirl
      let nx = q.x + Math.cos(a) * (1.1 + near * 1.6);
      let ny = q.y + Math.sin(a) * (1.1 + near * 1.6);
      if (this.blocked(nx, ny)) {
        nx = q.x + Math.cos(a + Math.PI / 2) * 1.4; // route around paint
        ny = q.y + Math.sin(a + Math.PI / 2) * 1.4;
      }
      ctx.strokeStyle = near > 0.15 ? this.palette.bloom : this.palette.line;
      ctx.lineWidth = 0.9 + near * 2.2;
      ctx.beginPath();
      ctx.moveTo(q.x, q.y);
      ctx.lineTo(nx, ny);
      ctx.stroke();
      q.x = nx;
      q.y = ny;
      if (++q.age > q.life || nx < 0 || ny < 0 || nx > this.w || ny > this.h) Object.assign(q, this.spawn());
    }
    ctx.drawImage(this.paint, 0, 0, this.w, this.h);
  }

  private stepStars(t: number) {
    const { ctx, pointer: p, style } = this;
    p.strength += (p.target - p.strength) * 0.06;
    ctx.globalAlpha = style === "wake" ? 0.14 : 1; // wake leaves soft comet tails
    ctx.fillStyle = this.palette.mount;
    ctx.fillRect(0, 0, this.w, this.h);
    ctx.globalAlpha = 1;

    for (const q of this.particles) {
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const d = Math.hypot(dx, dy) || 1;
      const near = p.strength * Math.max(0, 1 - d / REACH);
      let nx: number;
      let ny: number;
      if (style === "dance") {
        // Bob around home; near the pointer, swirl around it and get pushed out.
        const bob = t * 1.6 + q.phase;
        const tx = q.hx + Math.cos(bob) * 6 + Math.sin(bob * 0.7) * 4;
        const ty = q.hy + Math.sin(bob * 1.3) * 6;
        nx = q.x + (tx - q.x) * 0.08 + (-dy / d) * near * 3 + (dx / d) * near * 2;
        ny = q.y + (ty - q.y) * 0.08 + (dx / d) * near * 3 + (dy / d) * near * 2;
      } else {
        let a = this.angle(q.x, q.y, t);
        if (near > 0) a = a * (1 - near) + (Math.atan2(dy, dx) + Math.PI / 2) * near;
        const speed = 0.7 + near * 2;
        nx = q.x + Math.cos(a) * speed;
        ny = q.y + Math.sin(a) * speed;
      }
      if (this.blocked(nx, ny)) {
        nx = q.x + (q.x - nx);
        ny = q.y + (q.y - ny);
      }
      q.x = nx;
      q.y = ny;

      const twinkle = 0.55 + 0.45 * Math.sin(t * 3 + q.phase);
      const r = q.r * (0.7 + 0.3 * twinkle) * (1 + near * 1.2);
      ctx.fillStyle = near > 0.15 || q.r > 5 ? this.palette.bloom : this.palette.line;
      ctx.globalAlpha = 0.45 + 0.55 * twinkle;
      drawStar(ctx, nx, ny, r, t * 0.6 + q.phase);

      const lost = nx < -10 || ny < -10 || nx > this.w + 10 || ny > this.h + 10;
      if (style !== "dance" && (++q.age > q.life || lost)) Object.assign(q, this.spawn());
    }
    ctx.globalAlpha = 1;
    ctx.drawImage(this.paint, 0, 0, this.w, this.h);
  }

  /** Lay paint from the last point to this one; width follows speed like a brush. */
  brush(x: number, y: number) {
    const from = this.last ?? { x, y };
    const speed = Math.hypot(x - from.x, y - from.y);
    const pc = this.pctx;
    pc.strokeStyle = this.palette.paint;
    pc.lineCap = "round";
    pc.lineJoin = "round";
    pc.lineWidth = Math.max(3, 14 - speed * 0.35);
    pc.beginPath();
    pc.moveTo(from.x, from.y);
    pc.lineTo(x, y);
    pc.stroke();
    const r = Math.ceil(pc.lineWidth / 2 / CELL);
    const steps = Math.max(1, Math.ceil(speed / CELL));
    for (let i = 0; i <= steps; i++) {
      const cx = Math.floor((from.x + ((x - from.x) * i) / steps) / CELL);
      const cy = Math.floor((from.y + ((y - from.y) * i) / steps) / CELL);
      for (let oy = -r; oy <= r; oy++)
        for (let ox = -r; ox <= r; ox++) {
          const c = cx + ox;
          const rr = cy + oy;
          if (c >= 0 && rr >= 0 && c < this.cols && rr < this.rows) this.grid[rr * this.cols + c] = 1;
        }
    }
    this.last = { x, y };
  }

  lift() {
    this.last = null;
  }

  /** Still frame for reduced motion: settle the lines once, then only paint redraws. */
  settle(t: number) {
    for (let i = 0; i < 120; i++) this.step(t + i * 0.01);
  }

  composite() {
    this.ctx.drawImage(this.paint, 0, 0, this.w, this.h);
  }

  clear() {
    this.pctx.clearRect(0, 0, this.w, this.h);
    this.grid.fill(0);
    this.ctx.fillStyle = this.palette.mount;
    this.ctx.fillRect(0, 0, this.w, this.h);
  }
}
