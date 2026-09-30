/** Four-point sparkle, the mark every particle is drawn with. */
export function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rot: number) {
  const inner = r * 0.32;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = rot + (i * Math.PI) / 4;
    const d = i % 2 === 0 ? r : inner;
    ctx.lineTo(x + Math.cos(a) * d, y + Math.sin(a) * d);
  }
  ctx.closePath();
  ctx.fill();
}

/** Normally distributed sample (Box-Muller): most stars small, a few large. */
export function gaussian(mean: number, sd: number) {
  const u = 1 - Math.random();
  const v = Math.random();
  return mean + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
