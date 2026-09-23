import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useInView, useReducedMotion } from "framer-motion";
import { createBlobs, drawBlobs, type Blob, type Palette } from "./blobs";

function readPalette(): Palette {
  const css = getComputedStyle(document.documentElement);
  const v = (name: string) => css.getPropertyValue(name).trim();
  return { blush: v("--blush"), blushDeep: v("--blush-deep"), paper2: v("--paper-2"), accent: v("--accent"), ink: v("--ink") };
}

/** Slow, drifting organic shapes behind the hero. Decorative only. */
export function HeroCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const blobsRef = useRef<Blob[]>([]);
  const size = useRef({ w: 0, h: 0 });
  const clock = useRef(0);
  const inView = useInView(canvasRef);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctxRef.current = ctx;
    blobsRef.current = createBlobs(readPalette());

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size.current = { w: width, h: height };
      drawBlobs(ctx, blobsRef.current, width, height, clock.current);
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // Accumulate only active time, so pausing off-screen doesn't make the shapes jump.
  useAnimationFrame((_, delta) => {
    const ctx = ctxRef.current;
    if (reduce || !inView || !ctx || !size.current.w) return;
    clock.current += Math.min(delta, 50) / 1000;
    drawBlobs(ctx, blobsRef.current, size.current.w, size.current.h, clock.current);
  });

  return (
    <motion.canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    />
  );
}
