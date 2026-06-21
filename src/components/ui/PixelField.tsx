import { useEffect, useRef } from "react";

/**
 * Ambient "pixel field" behind the hero headline — a sparse grid of small
 * squares that softly breathe, with a halo that follows the pointer so cells
 * near the cursor light up (inspired by the 21st.dev sign-in-flow pixel bg,
 * re-implemented and toned right down so it never fights the type).
 *
 * Pure canvas, capped DPR, ~30fps, fades to nothing at the edges via a CSS
 * mask. Disabled entirely under prefers-reduced-motion.
 */
export function PixelField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GAP = 26; // px between cell centers
    const SIZE = 2.5; // base square size
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    const pointer = { x: -9999, y: -9999, on: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP) + 1;
      rows = Math.ceil(h / GAP) + 1;
    };
    resize();

    const onResize = () => resize();
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.on = true;
    };
    const onLeave = () => {
      pointer.on = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    const HALO = 150; // px radius of the cursor halo
    let raf = 0;
    let last = 0;
    let visible = true;

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && !raf) raf = requestAnimationFrame(draw);
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const draw = (t: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(draw);
      if (t - last < 33) return; // ~30fps
      last = t;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * GAP;
          const y = j * GAP;

          // slow ambient shimmer
          const wave = Math.sin(t * 0.0007 + i * 0.45 + j * 0.6);
          let a = 0.05 + wave * wave * 0.05; // 0.05–0.10

          // cursor halo lift
          let pink = 0;
          if (pointer.on) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            const d = Math.hypot(dx, dy);
            if (d < HALO) {
              const k = 1 - d / HALO;
              a += k * 0.55;
              pink = k;
            }
          }

          const s = SIZE + pink * 1.2;
          // accent #a3968d; cells just brighten near the cursor
          ctx.fillStyle = `rgba(163,150,141,${Math.min(a, 0.7)})`;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        WebkitMaskImage:
          "radial-gradient(120% 90% at 30% 35%, #000 0%, #000 45%, transparent 80%)",
        maskImage:
          "radial-gradient(120% 90% at 30% 35%, #000 0%, #000 45%, transparent 80%)",
      }}
    />
  );
}
