// A little blob character with eyes, drawn as inline SVG. Used instead of profile photos.

export type BlobShape = "flower" | "cloud" | "spiky" | "star" | "round" | "arch";
export type BlobColor = "tomato" | "cobalt" | "bubblegum" | "forest";
export type BlobEyes = "wide" | "dots" | "sleepy";

const fills: Record<BlobColor, string> = {
  tomato: "fill-tomato",
  cobalt: "fill-cobalt",
  bubblegum: "fill-bubblegum",
  forest: "fill-forest",
};

// Points around a circle, used to draw the wiggly outlines.
function pointAt(angle: number, radius: number) {
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return `${x.toFixed(1)} ${y.toFixed(1)}`;
}

// Round bumps all the way round (flower petals or a cloud).
function bumpy(bumps: number, inner: number, outer: number) {
  const step = (Math.PI * 2) / bumps;
  let d = `M ${pointAt(-Math.PI / 2, inner)}`;
  for (let i = 0; i < bumps; i++) {
    const a = -Math.PI / 2 + i * step;
    d += ` C ${pointAt(a + step * 0.1, outer)} ${pointAt(a + step * 0.9, outer)} ${pointAt(a + step, inner)}`;
  }
  return d + " Z";
}

// Pointy spikes all the way round (a star or a spiky sun).
function pointy(points: number, inner: number, outer: number) {
  const step = Math.PI / points;
  let d = "";
  for (let i = 0; i < points * 2; i++) {
    const a = -Math.PI / 2 + i * step;
    d += `${i === 0 ? "M" : " L"} ${pointAt(a, i % 2 === 0 ? outer : inner)}`;
  }
  return d + " Z";
}

const shapes: Record<BlobShape, string> = {
  flower: bumpy(6, 30, 62),
  cloud: bumpy(9, 38, 52),
  spiky: pointy(11, 34, 48),
  star: pointy(5, 26, 50),
  round: "M50 6 C76 4 95 24 94 50 C93 76 74 95 48 94 C22 93 5 74 6 48 C7 24 26 7 50 6 Z",
  arch: "M14 94 L14 46 C14 22 30 6 50 6 C70 6 86 22 86 46 L86 94 L62 94 L62 74 C62 66 57 62 50 62 C43 62 38 66 38 74 L38 94 Z",
};

// Where the eyes sit on each shape (the arch is taller, so its eyes sit higher).
const eyeY: Record<BlobShape, number> = { flower: 48, cloud: 48, spiky: 50, star: 52, round: 46, arch: 36 };

function Eyes({ style, y }: { style: BlobEyes; y: number }) {
  return (
    <g>
      {[38, 62].map((x) => {
        if (style === "dots") {
          return (
            <g key={x}>
              <ellipse cx={x} cy={y} rx="5.5" ry="7.5" className="fill-ink" />
              <circle cx={x + 1.8} cy={y - 3} r="1.8" fill="white" />
            </g>
          );
        }
        if (style === "sleepy") {
          return (
            <g key={x}>
              <ellipse cx={x} cy={y} rx="8" ry="7" fill="white" />
              <path d={`M ${x - 8.5} ${y} A 8.5 7 0 0 1 ${x + 8.5} ${y} Z`} className="fill-ink" />
              <circle cx={x} cy={y + 2.5} r="3" className="fill-ink" />
            </g>
          );
        }
        return (
          <g key={x}>
            <ellipse cx={x} cy={y} rx="8" ry="10" fill="white" />
            <ellipse cx={x + 2} cy={y + 1} rx="4.5" ry="6" className="fill-ink" />
          </g>
        );
      })}
    </g>
  );
}

type BlobAvatarProps = {
  shape: BlobShape;
  color: BlobColor;
  eyes?: BlobEyes;
  size?: number;
  className?: string;
};

export default function BlobAvatar({ shape, color, eyes = "wide", size = 80, className = "" }: BlobAvatarProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      <path
        d={shapes[shape]}
        className={fills[color]}
        stroke="currentColor"
        strokeWidth={shape === "spiky" || shape === "star" ? 4 : 0}
        strokeLinejoin="round"
        style={{ color: `var(--${color})` }}
      />
      <Eyes style={eyes} y={eyeY[shape]} />
    </svg>
  );
}
