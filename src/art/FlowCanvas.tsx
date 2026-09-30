import { useEffect, useRef, type PointerEvent } from "react";
import { useAnimationFrame, useInView, useReducedMotion } from "framer-motion";
import { FlowField, type PieceStyle } from "./flowField";

function readPalette() {
  const css = getComputedStyle(document.documentElement);
  const v = (name: string) => css.getPropertyValue(name).trim();
  return { mount: v("--mount"), line: v("--lilac"), bloom: v("--lilac-mid"), paint: v("--lilac-ink") };
}

/**
 * The hero piece. Flow lines drift, bloom under the pointer, and route around
 * whatever the visitor paints. Decorative: the wall label carries the meaning.
 */
export function FlowCanvas({ clearKey, pieceStyle = "lines" }: { clearKey: number; pieceStyle?: PieceStyle }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const field = useRef<FlowField | null>(null);
  const clock = useRef(0);
  const down = useRef(false);
  const inView = useInView(ref);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const f = new FlowField(ctx, readPalette(), dpr, pieceStyle);
    field.current = f;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width, height } = entry.contentRect;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      f.resize(width, height);
      if (reduce) f.settle(clock.current);
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [reduce, pieceStyle]);

  useEffect(() => {
    if (!clearKey || !field.current) return;
    field.current.clear();
    if (reduce) field.current.settle(clock.current);
  }, [clearKey, reduce]);

  useAnimationFrame((_, delta) => {
    const f = field.current;
    if (reduce || !inView || !f || !f.w || document.hidden) return;
    clock.current += Math.min(delta, 50) / 1000;
    f.step(clock.current);
  });

  const local = (e: PointerEvent<HTMLCanvasElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - box.left, y: e.clientY - box.top };
  };

  const onMove = (e: PointerEvent<HTMLCanvasElement>) => {
    const f = field.current;
    if (!f) return;
    const { x, y } = local(e);
    Object.assign(f.pointer, { x, y, target: 1 });
    if (down.current) {
      f.brush(x, y);
      if (reduce) f.composite();
    }
  };

  const onDown = (e: PointerEvent<HTMLCanvasElement>) => {
    down.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    onMove(e);
  };

  const onUp = () => {
    down.current = false;
    field.current?.lift();
  };

  const onLeave = () => {
    onUp();
    if (field.current) field.current.pointer.target = 0;
  };

  return (
    <canvas
      ref={ref}
      className="piece-canvas"
      aria-hidden="true"
      onPointerMove={onMove}
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerCancel={onLeave}
      onPointerLeave={onLeave}
    />
  );
}
