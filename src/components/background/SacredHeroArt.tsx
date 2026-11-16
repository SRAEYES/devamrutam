const GOLD = "#B68A42";
const arr = (n: number) => Array.from({ length: n }, (_, i) => i);
const rad = (deg: number) => (deg * Math.PI) / 180;

/**
 * Ornamental temple chakra (viewBox -100..100). A single static group meant
 * to be rotated as one object by its wrapper. Construction, outside in:
 * flame-lotus rim, beaded double rim, 32-petal padma band (two layers),
 * wheel rim, 16 spokes joined by trefoil arches, 16 short petals, hub
 * rosette and eight-petal centre. Abstract temple ornament, not a specific
 * iconographic yantra.
 */
export function Chakra({ tone = GOLD }: { tone?: string })  {
  const spokes = arr(16);
  return (
    <svg
      viewBox="-100 -100 200 200"
      className="h-full w-full"
      fill="none"
      stroke={tone}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* flame-lotus rim: 48 small pointed petals */}
      {arr(48).map((i) => (
        <path
          key={i}
          transform={`rotate(${i * 7.5})`}
          d="M-2.1,-92.6 C-2.8,-96 -1,-98.4 0,-99.6 C1,-98.4 2.8,-96 2.1,-92.6"
          strokeWidth="0.4"
          fill={tone}
          fillOpacity="0.1"
        />
      ))}
      <circle r="92.6" strokeWidth="0.6" />
      <circle r="90.4" strokeWidth="0.25" />
      <circle r="88.4" strokeWidth="1.3" strokeDasharray="0.01 2.9" />
      <circle r="86.2" strokeWidth="0.35" />

      {/* padma band: 32 broad petals with a smaller petal nested inside */}
      {arr(32).map((i) => (
        <g key={i} transform={`rotate(${i * 11.25})`}>
          <path
            d="M0,-67 C7.2,-72 7.4,-80 0,-85 C-7.4,-80 -7.2,-72 0,-67Z"
            strokeWidth="0.45"
            fill={tone}
            fillOpacity="0.07"
          />
          <path d="M0,-70.5 C3.4,-73.5 3.4,-78 0,-81 C-3.4,-78 -3.4,-73.5 0,-70.5Z" strokeWidth="0.3" />
        </g>
      ))}
      <circle r="65.6" strokeWidth="0.5" />
      <circle r="63.8" strokeWidth="0.25" />
      <circle r="62.2" strokeWidth="0.9" strokeDasharray="0.01 2.4" />
      <circle r="60.4" strokeWidth="0.5" />

      {/* sixteen spokes, each a slender lozenge with a centre line */}
      {spokes.map((i) => (
        <g key={i} transform={`rotate(${i * 22.5})`}>
          <path
            d="M0,-26 C3.6,-34 3.6,-48 0,-59 C-3.6,-48 -3.6,-34 0,-26Z"
            strokeWidth="0.5"
            fill={tone}
            fillOpacity="0.08"
          />
          <path d="M0,-30 L0,-55" strokeWidth="0.25" />
          <circle cy="-57.2" r="0.7" fill={tone} stroke="none" />
        </g>
      ))}
      {/* trefoil arches linking neighbouring spokes */}
      {spokes.map((i) => {
        const a1 = rad(i * 22.5 - 90 + 3.2);
        const a2 = rad((i + 1) * 22.5 - 90 - 3.2);
        const r = 43;
        const [x1, y1] = [Math.cos(a1) * r, Math.sin(a1) * r];
        const [x2, y2] = [Math.cos(a2) * r, Math.sin(a2) * r];
        return (
          <path key={i} d={`M${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 0 1 ${x2.toFixed(2)},${y2.toFixed(2)}`} strokeWidth="0.3" />
        );
      })}
      {/* short petals between spokes */}
      {spokes.map((i) => (
        <path
          key={i}
          transform={`rotate(${i * 22.5 + 11.25})`}
          d="M0,-30 C3,-35 3,-42 0,-48 C-3,-42 -3,-35 0,-30Z"
          strokeWidth="0.35"
          fill={tone}
          fillOpacity="0.06"
        />
      ))}

      {/* wheel hub */}
      <circle r="24.6" strokeWidth="0.55" />
      <circle r="22.6" strokeWidth="0.25" />
      {arr(16).map((i) => (
        <path
          key={i}
          transform={`rotate(${i * 22.5})`}
          d="M0,-10 C5,-13.5 5,-18.5 0,-21.4 C-5,-18.5 -5,-13.5 0,-10Z"
          strokeWidth="0.4"
          fill={tone}
          fillOpacity="0.08"
        />
      ))}
      <circle r="9.4" strokeWidth="0.45" />
      {arr(8).map((i) => (
        <path
          key={i}
          transform={`rotate(${i * 45})`}
          d="M0,-2.6 C3.4,-4.4 3.4,-7.4 0,-9 C-3.4,-7.4 -3.4,-4.4 0,-2.6Z"
          strokeWidth="0.3"
        />
      ))}
      <circle r="2.6" strokeWidth="0.35" />
      <circle r="1.1" fill={tone} fillOpacity="0.6" stroke="none" />
    </svg>
  );
}
