// Small crayon-scribble doodles for decoration. Use one or two per page at most.
import { useId } from "react";

export type DoodleKind = "squiggle" | "burst" | "loop";

const paths: Record<DoodleKind, { viewBox: string; d: string }> = {
  squiggle: {
    viewBox: "0 0 200 30",
    d: "M4 18 C 20 4, 32 4, 44 16 S 70 28, 84 14 S 112 2, 126 16 S 152 28, 166 14 S 188 6, 196 14",
  },
  burst: {
    viewBox: "0 0 60 60",
    d: "M30 4 L30 18 M30 42 L30 56 M4 30 L18 30 M42 30 L56 30 M12 12 L21 21 M39 39 L48 48 M48 12 L39 21 M21 39 L12 48",
  },
  loop: {
    viewBox: "0 0 120 60",
    d: "M6 40 C 20 10, 40 10, 36 32 C 32 52, 14 44, 26 26 C 38 8, 64 8, 60 32 C 56 52, 38 44, 50 26 C 62 8, 90 8, 86 32 C 82 50, 66 44, 76 28 C 86 12, 108 16, 114 30",
  },
};

const strokes = {
  tomato: "stroke-tomato",
  cobalt: "stroke-cobalt",
  bubblegum: "stroke-bubblegum",
  forest: "stroke-forest",
};

type DoodleProps = {
  kind: DoodleKind;
  color?: keyof typeof strokes;
  className?: string;
};

export default function Doodle({ kind, color = "tomato", className = "" }: DoodleProps) {
  const filterId = useId();
  const { viewBox, d } = paths[kind];

  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" fill="none">
      {/* Roughens the edges so the line looks drawn with a crayon. */}
      <filter id={filterId}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
        <feDisplacementMap in="SourceGraphic" scale="2.5" />
      </filter>
      <path d={d} className={strokes[color]} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${filterId})`} />
    </svg>
  );
}
