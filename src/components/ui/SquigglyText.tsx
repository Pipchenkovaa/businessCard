import { useEffect, useId, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Squiggly text — wraps inline text in an animated SVG turbulence +
 * displacement filter so the glyphs wobble like a hand-drawn squiggle.
 * Re-implemented from the aceternity component idea: pre-bake N filter
 * variants (different turbulence seeds / displacement scales) and cycle the
 * applied filter on an interval.
 *
 * Reduced motion → renders plain (no filter).
 */

type SquigglyTextProps = {
  children: ReactNode;
  className?: string;
  steps?: number;
  stepDuration?: number;
  scale?: number | [number, number];
  baseFrequency?: number;
  numOctaves?: number;
};

export function SquigglyText({
  children,
  className,
  steps = 5,
  stepDuration = 90,
  scale = [5, 7],
  baseFrequency = 0.022,
  numOctaves = 3,
}: SquigglyTextProps) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/[:]/g, "");
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setStep((s) => (s + 1) % steps),
      stepDuration
    );
    return () => window.clearInterval(id);
  }, [reduce, steps, stepDuration]);

  const scaleAt = (i: number) =>
    Array.isArray(scale) ? scale[i % scale.length] : scale;

  return (
    <span
      className={cn("relative inline-block", className)}
      style={reduce ? undefined : { filter: `url(#squiggle-${uid}-${step})` }}
    >
      {children}
      {!reduce && (
        <svg
          aria-hidden
          width="0"
          height="0"
          className="absolute"
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          <defs>
            {Array.from({ length: steps }).map((_, i) => (
              <filter id={`squiggle-${uid}-${i}`} key={i}>
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency={baseFrequency}
                  numOctaves={numOctaves}
                  seed={i + 1}
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale={scaleAt(i)}
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            ))}
          </defs>
        </svg>
      )}
    </span>
  );
}
