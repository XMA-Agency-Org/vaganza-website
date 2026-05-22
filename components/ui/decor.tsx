/**
 * Decorative botanical artwork — hand-built SVG.
 * All shapes use `currentColor`, so callers control colour with text utilities.
 */

/** A single soft, almond-shaped leaf positioned + rotated within a sprig. */
function Leaf({
  x,
  y,
  rotate,
  scale = 1,
  opacity = 1,
}: {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
    >
      <path
        d="M0 0C16 -11 39 -8 52 13C34 27 9 24 0 0Z"
        fill="currentColor"
      />
    </g>
  );
}

/** A tall, gently curving leafy sprig. */
export function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 260"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M70 256C61 210 78 184 70 144C63 110 80 74 70 10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <Leaf x={70} y={206} rotate={28} scale={0.82} opacity={0.85} />
      <Leaf x={70} y={206} rotate={152} scale={0.7} opacity={0.6} />
      <Leaf x={73} y={158} rotate={-32} scale={0.95} opacity={0.95} />
      <Leaf x={67} y={120} rotate={210} scale={0.78} opacity={0.7} />
      <Leaf x={71} y={82} rotate={-26} scale={0.85} opacity={0.9} />
      <Leaf x={70} y={44} rotate={188} scale={0.62} opacity={0.55} />
      <Leaf x={70} y={20} rotate={-8} scale={0.5} opacity={0.8} />
    </svg>
  );
}

/** A horizontal leafy branch — used along section edges. */
export function LeafBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 60C70 52 140 64 210 50C238 44 258 50 274 60"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <Leaf x={58} y={58} rotate={-50} scale={0.7} opacity={0.85} />
      <Leaf x={58} y={58} rotate={70} scale={0.6} opacity={0.6} />
      <Leaf x={118} y={58} rotate={-38} scale={0.82} opacity={0.95} />
      <Leaf x={176} y={56} rotate={66} scale={0.66} opacity={0.7} />
      <Leaf x={224} y={50} rotate={-44} scale={0.74} opacity={0.88} />
    </svg>
  );
}

/** A single leaf — for scattered, floating accents. */
export function SingleLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M54 10C24 10 10 26 10 54C38 54 54 38 54 10Z"
        fill="currentColor"
      />
      <path
        d="M14 50C26 36 38 24 50 16"
        stroke="var(--color-cream)"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A soft, organic blob — used as a background shape behind content. */
export function OrganicBlob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M44.6 -57.7C56.3 -47.4 62.6 -31.2 65.9 -14.6C69.2 2 69.5 19 62.3 32.6C55.1 46.2 40.4 56.4 24.3 62.1C8.2 67.8 -9.3 69 -25.6 63.7C-41.9 58.4 -57 46.6 -64.6 31.4C-72.2 16.2 -72.3 -2.4 -66.4 -18.3C-60.5 -34.2 -48.6 -47.4 -35 -57C-21.4 -66.6 -6.1 -72.6 7.9 -71.4C21.9 -70.2 32.9 -68 44.6 -57.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** An organic wave divider for transitioning between section colours. */
export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 48C160 92 340 96 540 70C760 42 940 6 1140 14C1280 20 1380 44 1440 60V110H0Z"
      />
    </svg>
  );
}
