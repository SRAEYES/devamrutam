import type { ReactNode } from "react";

const GOLD = "#B68A42";
const arr = (n: number) => Array.from({ length: n }, (_, i) => i);

/**
 * Lotus-petal ceiling medallion (viewBox -100..100).
 * Layered rings: outer 24-petal lotus, offset inner petal tier, beaded band,
 * 16-petal rosette and a small eight-petal lotus centre. Decorative only;
 * it does not claim to be any specific yantra.
 */
export function Medallion() {
  const petal = "stroke-[0.45]";
  return (
    <svg
      viewBox="-100 -100 200 200"
      className="h-full w-full"
      fill="none"
      stroke={GOLD}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* frame */}
      <circle r="98" strokeWidth="0.55" />
      <circle r="95.6" strokeWidth="0.25" />
      <circle r="93.6" strokeWidth="1.3" strokeDasharray="0.01 3.12" />

      {/* outer lotus tier (slow drift) */}
      <g className="origin-center [transform-box:fill-box] animate-[spin_420s_linear_infinite] motion-reduce:animate-none">
        {arr(24).map((i) => (
          <g key={i} transform={`rotate(${i * 15})`}>
            <path
              d="M0,-64 C7.5,-72 7,-84 0,-91 C-7,-84 -7.5,-72 0,-64Z"
              className={petal}
              fill={GOLD}
              fillOpacity="0.06"
            />
            <path d="M0,-68 L0,-86" strokeWidth="0.25" />
          </g>
        ))}
      </g>
      <circle r="62.6" strokeWidth="0.45" />
      <circle r="60.6" strokeWidth="0.2" />

      {/* inner petal tier, offset half a step (counter drift) */}
      <g className="origin-center [transform-box:fill-box] animate-[spin_520s_linear_infinite_reverse] motion-reduce:animate-none">
        {arr(24).map((i) => (
          <path
            key={i}
            transform={`rotate(${i * 15 + 7.5})`}
            d="M0,-52 C5,-58 5,-66 0,-71 C-5,-66 -5,-58 0,-52Z"
            strokeWidth="0.35"
            fill={GOLD}
            fillOpacity="0.05"
          />
        ))}
      </g>

      {/* beaded double band */}
      <circle r="50" strokeWidth="0.45" />
      <circle r="48.4" strokeWidth="1" strokeDasharray="0.01 2.55" />
      <circle r="46.6" strokeWidth="0.3" />

      {/* sixteen-petal rosette */}
      {arr(16).map((i) => (
        <g key={i} transform={`rotate(${i * 22.5})`}>
          <path
            d="M0,-20 C10,-27 10,-35 0,-41 C-10,-35 -10,-27 0,-20Z"
            strokeWidth="0.4"
            fill={GOLD}
            fillOpacity="0.07"
          />
          <path d="M0,-24 L0,-37" strokeWidth="0.22" />
          <circle cy="-44" r="0.8" fill={GOLD} stroke="none" />
        </g>
      ))}

      {/* inner ring and eight-petal lotus centre */}
      <circle r="18.6" strokeWidth="0.45" />
      <circle r="16.2" strokeWidth="0.22" />
      {arr(8).map((i) => (
        <path
          key={i}
          transform={`rotate(${i * 45})`}
          d="M0,-3.4 C5,-6 5,-11 0,-14.2 C-5,-11 -5,-6 0,-3.4Z"
          strokeWidth="0.35"
          fill={GOLD}
          fillOpacity="0.08"
        />
      ))}
      <circle r="3.6" strokeWidth="0.3" />
      <circle r="1.7" fill={GOLD} fillOpacity="0.55" stroke="none" />
    </svg>
  );
}

function Kalasha({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g>
      <path d={`M${x - 2.2 * s},${y - 2.2 * s} H${x + 2.2 * s}`} />
      <ellipse cx={x} cy={y - 5.8 * s} rx={3 * s} ry={3.5 * s} fill={GOLD} fillOpacity="0.07" />
      <path d={`M${x - 1.2 * s},${y - 9.3 * s} H${x + 1.2 * s}`} />
      <path d={`M${x - 1.1 * s},${y - 9.3 * s} Q${x},${y - 13.5 * s} ${x + 1.1 * s},${y - 9.3 * s}`} />
      <path d={`M${x},${y - 12.2 * s} V${y - 17 * s}`} />
    </g>
  );
}

/**
 * South Indian (Dravidian) gopuram: stepped plinth, pilastered entrance
 * storey with arched portal, seven tapering tiers each with a cornice,
 * central panjara niche and miniature corner shrines, a barrel-vaulted
 * crown (shalā) and three kalasha finials. Single-stroke engraving style.
 * viewBox 0 24 200 276.
 */
export function Gopuram() {
  const cx = 100;
  const nodes: ReactNode[] = [];
  const stone = { fill: GOLD, fillOpacity: 0.035 };

  // plinth steps
  nodes.push(
    <rect key="p1" x="12" y="291" width="176" height="7" {...stone} />,
    <rect key="p2" x="20" y="284" width="160" height="7" {...stone} />,
  );

  // entrance storey
  nodes.push(<rect key="g" x="36" y="213" width="128" height="71" {...stone} />);
  nodes.push(
    <path key="door1" d="M84,284 V241 a16,16 0 0 1 32,0 V284" />,
    <path key="door2" d="M89,284 V242 a11,11 0 0 1 22,0 V284" strokeWidth="0.35" />,
    <path key="torana" d="M78,230 Q100,212 122,230" strokeWidth="0.4" />,
  );
  for (const s of [-1, 1]) {
    // pilasters with capitals
    nodes.push(
      <rect key={`pil${s}`} x={cx + s * 27 - 3} y="234" width="6" height="50" />,
      <rect key={`cap${s}`} x={cx + s * 27 - 5} y="230" width="10" height="4" />,
      <path key={`pilr${s}`} d={`M${cx + s * 27},236 V282`} strokeWidth="0.25" />,
    );
    // niche with pediment
    const nx = cx + s * 41;
    nodes.push(
      <rect key={`n${s}`} x={nx - 6} y="250" width="12" height="28" />,
      <path key={`np${s}`} d={`M${nx - 7.5},250 L${nx},242.5 L${nx + 7.5},250`} />,
      <path key={`na${s}`} d={`M${nx - 3.2},276 V258 a3.2,3.2 0 0 1 6.4,0 V276`} strokeWidth="0.35" />,
    );
    // corner shrine
    const kx = cx + s * 55.5;
    nodes.push(
      <rect key={`k${s}`} x={kx - 5.5} y="252" width="11" height="32" />,
      <path key={`kr${s}`} d={`M${kx - 7},252 L${kx - 3.8},246.5 H${kx + 3.8} L${kx + 7},252`} />,
      <path key={`kf${s}`} d={`M${kx},246.5 V241`} />,
    );
  }
  nodes.push(<rect key="gc" x="32" y="209" width="136" height="4" {...stone} />);
  nodes.push(<path key="gl" d="M36,222 H164" strokeWidth="0.25" strokeDasharray="1.2 1.8" />);

  // tapering tiers
  const heights = [24, 21, 19, 17, 15, 13, 11];
  let yb = 209;
  heights.forEach((h, i) => {
    const w = 120 - i * 10.5;
    const yt = yb - h;
    const hh = h * 0.58;
    const nw = 10 - i * 0.55;
    nodes.push(
      <rect key={`t${i}`} x={cx - w / 2} y={yt + 3} width={w} height={h - 3} {...stone} />,
      <rect key={`c${i}`} x={cx - w / 2 - 4} y={yt} width={w + 8} height="3" {...stone} />,
      <path key={`pa${i}`} d={`M${cx - nw / 2},${yb} V${yb - hh} a${nw / 2},${nw / 2} 0 0 1 ${nw},0 V${yb}`} />,
      <path
        key={`pi${i}`}
        d={`M${cx - nw / 2 + 1.4},${yb} V${yb - hh} a${nw / 2 - 1.4},${nw / 2 - 1.4} 0 0 1 ${nw - 2.8},0 V${yb}`}
        strokeWidth="0.3"
      />,
    );
    for (const s of [-1, 1]) {
      const kx = cx + s * (w / 2 - 6.5);
      const kh = h * 0.5;
      nodes.push(
        <rect key={`ks${i}${s}`} x={kx - 4.5} y={yb - kh} width="9" height={kh} />,
        <path key={`kr${i}${s}`} d={`M${kx - 5.6},${yb - kh} L${kx - 3},${yb - kh - 3.6} H${kx + 3} L${kx + 5.6},${yb - kh}`} />,
        <path key={`kf${i}${s}`} d={`M${kx},${yb - kh - 3.6} V${yb - kh - 6}`} strokeWidth="0.4" />,
      );
      if (i < 4) {
        const mx = cx + s * w * 0.25;
        nodes.push(
          <path key={`m${i}${s}`} d={`M${mx - 3},${yb} V${yb - hh * 0.6} a3,3 0 0 1 6,0 V${yb}`} strokeWidth="0.4" />,
        );
      }
    }
    yb = yt;
  });

  // barrel-vaulted crown (shalā)
  const yT = yb;
  const hw = 30;
  const ry = 25;
  nodes.push(
    <path key="vault" d={`M${cx - hw},${yT} A${hw},${ry} 0 0 1 ${cx + hw},${yT} Z`} {...stone} />,
    <path key="vault2" d={`M${cx - hw + 4},${yT} A${hw - 4},${ry - 4} 0 0 1 ${cx + hw - 4},${yT}`} strokeWidth="0.3" />,
  );
  for (const dx of [-20, -10, 0, 10, 20]) {
    const y = yT - ry * Math.sqrt(1 - (dx / hw) ** 2);
    nodes.push(<path key={`rib${dx}`} d={`M${cx + dx},${yT} V${y + 0.6}`} strokeWidth="0.3" />);
  }
  for (const s of [-1, 1]) {
    nodes.push(<circle key={`gab${s}`} cx={cx + s * hw} cy={yT - 4} r="3.6" strokeWidth="0.45" />);
  }
  [-17, 0, 17].forEach((dx) => {
    const y = yT - ry * Math.sqrt(1 - (dx / hw) ** 2);
    nodes.push(<Kalasha key={`kal${dx}`} x={cx + dx} y={y + 1} s={dx === 0 ? 1.3 : 1} />);
  });

  return (
    <svg
      viewBox="0 24 200 276"
      className="h-full w-full"
      fill="none"
      stroke={GOLD}
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {nodes}
    </svg>
  );
}
