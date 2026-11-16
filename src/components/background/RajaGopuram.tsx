import type { ReactNode } from "react";

const GOLD = "#B68A42";
const LIGHT = "#F6D58E"; // festival light points
const SHADE = "#8A6A2E"; // sandstone shadow

const arr = (n: number) => Array.from({ length: n }, (_, i) => i);
const f = (n: number) => +n.toFixed(2);
const relief = { fill: GOLD, fillOpacity: 0.26 } as const; // bas-relief body
const stone = { fill: GOLD, fillOpacity: 0.04 } as const;

interface LampSpec {
  x: number;
  y: number;
  s: number;
}

/** Brass kuthu vilakku. No rings: soft glow, brass body, orange/golden flame.
 *  HeroTemple animates .lf/.lo/.lc/.lg from the lamp's own cursor distance. */
function Lamp({ x, y, s }: LampSpec) {
  return (
    <g data-lamp="" transform={`translate(${x} ${y}) scale(${s})`}>
      <circle className="lg" cy="-9" r="11" fill="url(#lamp-glow)" stroke="none" opacity="0.1" />
      <g stroke={GOLD} strokeWidth="0.6" fill={GOLD} fillOpacity="0.3" strokeOpacity="0.8">
        <path d="M-2.6,0 H2.6 L1.6,-2 H-1.6Z" />
        <path d="M0,-2 V-5" />
        <path d="M-2.8,-5.4 Q0,-3.2 2.8,-5.4Z" />
      </g>
      <g className="lf" stroke="none">
        <path
          className="lo"
          d="M0,-12.8 C0.5,-10.8 2.2,-9.3 2,-7.7 C1.9,-6.8 1,-6.3 0,-6.3 C-1,-6.3 -1.9,-6.8 -2,-7.7 C-2.2,-9.3 -0.5,-10.8 0,-12.8Z"
          fill="#E98A2E"
          opacity="0.5"
        />
        <path
          className="lc"
          d="M0,-10.6 C0.3,-9.4 1.1,-8.6 1,-7.6 C0.9,-6.9 0.5,-6.6 0,-6.6 C-0.5,-6.6 -0.9,-6.9 -1,-7.6 C-1.1,-8.6 -0.3,-9.4 0,-10.6Z"
          fill="#FBE08A"
          opacity="0.5"
        />
      </g>
    </g>
  );
}

/* ───────────────────────── sculpture vocabulary ─────────────────────────
 * Every figure is drawn at its own feet (origin) with y up = negative, about
 * 14 units tall at s=1, in a bas-relief style: filled silhouettes plus fine
 * linework. Stroke widths are divided by s so detail stays crisp at any size.
 */

/** Seated deity in padmāsana, crowned, inside a pointed prabhāvali. */
function Seated({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} strokeWidth={0.45 / s}>
      <path d="M0,-15.4 C3.8,-11.8 3.8,-4 0,-1.4 C-3.8,-4 -3.8,-11.8 0,-15.4Z" strokeWidth={0.28 / s} />
      <path d="M-4.2,0 H4.2 L3.3,-1.4 H-3.3Z" {...relief} />
      <path d="M-3.8,-1.4 L-2.3,-3.8 H2.3 L3.8,-1.4Z" {...relief} />
      <path d="M-1.5,-3.8 L-1,-8.2 H1 L1.5,-3.8Z" {...relief} />
      <path d="M-1.5,-7.6 L-3.4,-5.6 L-2.5,-3.9 M1.5,-7.6 L3.4,-5.6 L2.5,-3.9" />
      <path d="M-1,-6.2 H1 M-1.2,-7.2 H1.2" strokeWidth={0.25 / s} />
      <circle cy="-9.4" r="0.95" {...relief} />
      <path d="M-1.4,-10.1 L-1.1,-12.3 L0,-13.8 L1.1,-12.3 L1.4,-10.1Z" {...relief} />
    </g>
  );
}

/** Standing devatā. v0 abhaya-raised hand, v1 four-armed, v2 añjali, v3 dvārapāla with club. */
function Standing({ x, y, s, v = 0, flip = false }: { x: number; y: number; s: number; v?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`} strokeWidth={0.45 / s}>
      {v === 1 && <path d="M0,-15 C3.4,-11.6 3.4,-4.2 0,-1.6 C-3.4,-4.2 -3.4,-11.6 0,-15Z" strokeWidth={0.28 / s} />}
      <path d="M-3.2,0 H3.2 L2.5,-1.1 H-2.5Z" {...relief} />
      <path d="M-2.5,-1.1 L-1.8,-6 H1.8 L2.5,-1.1Z" {...relief} />
      <path d="M0,-1.1 V-5.6" strokeWidth={0.28 / s} />
      <path d="M-1.8,-6 H1.8" />
      <path d="M-1.5,-6 L-1,-9.3 H1 L1.5,-6Z" {...relief} />
      <circle cy="-10.2" r="0.95" {...relief} />
      <path d="M-1.3,-10.9 L-1,-12.8 L0,-14 L1,-12.8 L1.3,-10.9Z" {...relief} />
      {v === 0 && <path d="M-1.4,-8.8 L-3.1,-7 L-3,-5.4 M1.4,-8.8 L3.2,-10.2 L3.6,-11.6" />}
      {v === 1 && (
        <path d="M-1.4,-8.8 L-3.4,-10.2 M1.4,-8.8 L3.4,-10.2 M-1.4,-8 L-3.2,-6.2 L-2.8,-5 M1.4,-8 L3.2,-6.2 L2.8,-5" />
      )}
      {v === 2 && <path d="M-1.4,-8.8 L-0.5,-7.4 M1.4,-8.8 L0.5,-7.4" />}
      {v === 3 && (
        <>
          <path d="M-1.4,-8.8 L-3.4,-10.8 L-4.2,-12.2" />
          <path d="M1.4,-8.8 L3.4,-7.2 L3.8,-5.6" />
          <path d="M3.8,-5.8 L5.4,0.4" strokeWidth={0.7 / s} />
          <path d="M4.6,-1.6 L6.4,-1 L6,1 L4.2,0.4Z" {...relief} />
        </>
      )}
    </g>
  );
}

/** Śālabhañjikā / dancing figure in tribhaṅga. */
function Dancer({ x, y, s, flip = false }: { x: number; y: number; s: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`} strokeWidth={0.45 / s}>
      <path d="M-2.8,0 H2.8" />
      <path d="M0.4,0 L1.8,-3.6 L0.6,-6.4 M-0.6,0 L-0.8,-6.4" />
      <path d="M-2.4,-5 L-1,-7.4 H1.6 L3,-5Z" {...relief} />
      <path d="M0,-7.4 C-1.2,-8.8 1.4,-9.8 0.2,-11.2" strokeWidth={0.8 / s} />
      <circle cx="0.2" cy="-12" r="0.85" {...relief} />
      <path d="M-0.8,-12.6 L0.2,-14 L1.2,-12.6Z" {...relief} />
      <path d="M0.6,-10.6 C2.8,-11.8 3.6,-13.6 2.6,-14.6 M-0.2,-10.2 C-2.2,-9.8 -3,-8.2 -2.6,-6.8" />
    </g>
  );
}

/** Makara torana: gabled lintel with a kīrtimukha crest and curled makara ends. */
function Torana({ x, y, w }: { x: number; y: number; w: number }) {
  const h = w / 2;
  return (
    <g transform={`translate(${x} ${y})`} strokeWidth="0.4">
      <path d={`M${-h},0 H${h}`} />
      <path d={`M${-h + 1.2},0 L0,-${f(w * 0.2)} L${h - 1.2},0`} strokeWidth="0.35" />
      <path d={`M-0.9,-${f(w * 0.2)} L0,-${f(w * 0.2 + 1.2)} L0.9,-${f(w * 0.2)}Z`} {...relief} />
      {[-1, 1].map((sd) => (
        <path
          key={sd}
          d={`M${sd * h},0 c${sd * -0.6},-0.9 ${sd * 0.2},-2 ${sd * 1},-1.5 c${sd * 0.6},0.4 ${sd * 0.1},1.1 ${sd * -0.4},0.9`}
          strokeWidth="0.35"
        />
      ))}
    </g>
  );
}

/** Pilaster with base, shaft and bracketed capital. */
function Pilaster({ x, yb, h, w = 1.6 }: { x: number; yb: number; h: number; w?: number }) {
  return (
    <g strokeWidth="0.4">
      <rect x={x - w / 2} y={yb - h} width={w} height={h} {...stone} />
      <rect x={x - w * 0.85} y={yb - 0.9} width={w * 1.7} height="0.9" />
      <path d={`M${x - w * 1.2},${yb - h} H${x + w * 1.2} L${x + w * 0.8},${yb - h - 1} H${x - w * 0.8}Z`} />
    </g>
  );
}

/** Kūṭa: square miniature shrine with a stepped pyramidal roof. */
function Kuta({ x, y, w }: { x: number; y: number; w: number }) {
  const bh = w * 0.5;
  return (
    <g strokeWidth="0.45">
      <rect x={x - w / 2} y={y - bh} width={w} height={bh} {...stone} />
      <rect x={x - w * 0.46} y={y - bh - w * 0.2} width={w * 0.92} height={w * 0.2} />
      <rect x={x - w * 0.32} y={y - bh - w * 0.4} width={w * 0.64} height={w * 0.2} />
      <rect x={x - w * 0.18} y={y - bh - w * 0.58} width={w * 0.36} height={w * 0.18} />
      <path d={`M${x},${y - bh - w * 0.58} V${y - bh - w * 0.9}`} strokeWidth="0.35" />
    </g>
  );
}

/** Śālā: oblong miniature shrine with a stepped barrel roof and end finials. */
function Sala({ x, y, w }: { x: number; y: number; w: number }) {
  const bh = w * 0.34;
  return (
    <g strokeWidth="0.45">
      <rect x={x - w / 2} y={y - bh} width={w} height={bh} {...stone} />
      <path d={`M${x - w / 2 - 0.6},${y - bh} L${x - w * 0.36},${y - bh - w * 0.2} H${x + w * 0.36} L${x + w / 2 + 0.6},${y - bh}Z`} />
      <path d={`M${x - w * 0.3},${y - bh - w * 0.2} L${x - w * 0.22},${y - bh - w * 0.34} H${x + w * 0.22} L${x + w * 0.3},${y - bh - w * 0.2}`} strokeWidth="0.35" />
      <path d={`M${x - w * 0.36},${y - bh - w * 0.2} v-1.2 M${x + w * 0.36},${y - bh - w * 0.2} v-1.2 M${x},${y - bh - w * 0.34} v-1.2`} strokeWidth="0.35" />
      <path d={`M${x - 0.9},${y} V${y - bh * 0.7} H${x + 0.9} V${y}`} strokeWidth="0.3" />
    </g>
  );
}

/** Pañjara: tiny gabled shrine niche. */
function Panjara({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x - 2.6},${y} V${y - 2.2} L${x},${y - 5} L${x + 2.6},${y - 2.2} V${y} M${x - 1.1},${y} V${y - 2} H${x + 1.1} V${y}`}
      strokeWidth="0.4"
    />
  );
}

/** Horizontal ornamental band; kind varies by tier. */
function Band({ kind, x0, w, y }: { kind: number; x0: number; w: number; y: number }) {
  if (kind === 0) {
    const n = Math.floor(w / 2.4);
    return <path d={arr(n).map((k) => `M${f(x0 + 1.2 + k * 2.4)},${y} v1.6`).join(" ")} strokeWidth="0.35" />;
  }
  if (kind === 1) {
    const n = Math.floor(w / 5);
    return (
      <path
        d={arr(n)
          .map((k) => {
            const c = x0 + 2.5 + k * 5;
            return `M${f(c - 1.1)},${y + 0.8} L${f(c)},${y - 0.3} L${f(c + 1.1)},${y + 0.8} L${f(c)},${y + 1.9}Z`;
          })
          .join(" ")}
        strokeWidth="0.35"
      />
    );
  }
  const n = Math.floor(w / 4.8);
  return <path d={`M${x0 + 1},${y + 0.8} ` + arr(n).map(() => "q1.2,-1.6 2.4,0 t2.4,0").join(" ")} strokeWidth="0.35" />;
}

/** Angular (faceted) kalaśa finial: base, faceted pot, neck, lotus bud, pin. */
function Kalasa({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g strokeWidth="0.5">
      <path d={`M${x - 2.6 * s},${y} H${x + 2.6 * s} L${x + 2.2 * s},${y - 1.2 * s} H${x - 2.2 * s}Z`} {...relief} />
      <path
        d={`M${x - 2.2 * s},${y - 1.2 * s} L${x - 3 * s},${y - 3.6 * s} L${x - 2 * s},${y - 5.6 * s} H${x + 2 * s} L${x + 3 * s},${y - 3.6 * s} L${x + 2.2 * s},${y - 1.2 * s}Z`}
        fill={GOLD}
        fillOpacity="0.14"
      />
      <path d={`M${x - 1.2 * s},${y - 5.6 * s} V${y - 6.6 * s} H${x + 1.2 * s} V${y - 5.6 * s}`} />
      <path d={`M${x - 1.5 * s},${y - 6.6 * s} L${x},${y - 9.6 * s} L${x + 1.5 * s},${y - 6.6 * s}Z`} />
      <path d={`M${x},${y - 9.6 * s} V${y - 12.4 * s}`} />
    </g>
  );
}

/** Niche contents by distance from the tier's centre axis, varied per tier. */
function Sculpture({ d, tier, x, y, s, flip }: { d: number; tier: number; x: number; y: number; s: number; flip: boolean }) {
  if (d === 0) return <Seated x={x} y={y} s={s} />;
  if (d === 1) return <Standing x={x} y={y} s={s} v={tier % 3 === 0 ? 1 : tier % 3 === 1 ? 0 : 2} flip={flip} />;
  if (d === 2) return tier % 2 === 0 ? <Dancer x={x} y={y} s={s} flip={flip} /> : <Standing x={x} y={y} s={s} v={(tier + 1) % 3} flip={flip} />;
  return tier % 2 === 0 ? <Standing x={x} y={y} s={s} v={(tier + 2) % 3} flip={flip} /> : <Dancer x={x} y={y} s={s} flip={flip} />;
}

/**
 * Rāja gopuram (viewBox 0 0 240 392).
 * Ground: stepped plinth and a monumental gateway: tall door with stepped
 * jambs, lintels, makara torana, carved pilasters and empty framed
 * side niches. Above: eleven tapering talas, each with its
 * own character: lower tiers carry large niches (seated centre deity under a
 * makara torana, devatās, dancers); middle tiers smaller mixed
 * sculpture; upper tiers miniature pañjara shrines. Each tala has layered
 * cornices, a banded frieze and a parapet of kūṭa / śālā / pañjara shrines.
 * The crown is three receding blocks with a row of angular kalaśas.
 *
 * The engraving is drawn once (#gop-art) and shown twice (resting + brighter
 * amber layer revealed by a cursor spotlight mask). HeroTemple drives lamps,
 * mask and wash. Nothing here re-renders.
 */
export function RajaGopuram() {
  const cx = 120;
  const art: ReactNode[] = [];
  const dots: ReactNode[] = [];
  const lamps: LampSpec[] = [];
  const outlineL: string[] = [];
  const rightPts: string[] = [];

  // ───────── plinth + gateway ─────────
  const gwTop = 292;
  const gwBottom = 378;
  art.push(
    <g key="gw">
      <rect x="26" y="384" width="188" height="8" {...stone} />
      <rect x="34" y="378" width="172" height="6" {...stone} />
      <path d="M26,388 H214 M34,381 H206" strokeWidth="0.3" />
      <rect x="45" y={gwTop} width="150" height={gwBottom - gwTop} {...stone} />
      {/* door: stepped jambs, dark recess, leaves, three lintel beams */}
      <rect x="92" y="312" width="56" height="66" />
      <rect x="95" y="315" width="50" height="63" />
      <rect x="98" y="318" width="44" height="60" fill={SHADE} fillOpacity="0.16" />
      <path d="M120,318 V378" strokeWidth="0.3" />
      {[326, 336, 346, 356, 366].map((yy) => (
        <path key={yy} d={`M100,${yy} H118 M122,${yy} H140`} strokeWidth="0.25" />
      ))}
      <rect x="88" y="308" width="64" height="4" {...stone} />
      <rect x="92" y="304" width="56" height="4" {...stone} />
      <rect x="97" y="300" width="46" height="4" {...stone} />
      {arr(7).map((k) => (
        <Panjara key={k} x={101 + k * 6.3} y={300} />
      ))}
      <Torana x={cx} y={298.2} w={40} />
      {/* carved pilasters */}
      {[-1, 1].map((sd) => (
        <g key={sd}>
          <Pilaster x={cx + sd * 34} yb={378} h={60} w={4.4} />
          <path d={`M${cx + sd * 34},322 V374`} strokeWidth="0.25" />
        </g>
      ))}
      {/* dvārapāla niches */}
      {[-1, 1].map((sd) => {
        const nx = cx + sd * 62;
        return (
          <g key={sd}>
            <rect x={nx - 13} y="322" width="26" height="56" />
            <rect x={nx - 11} y="324" width="22" height="54" fill={SHADE} fillOpacity="0.14" />
            <path d={`M${nx - 15},322 H${nx + 15} L${nx + 11},316 H${nx - 11}Z`} {...stone} />
            <path d={`M${nx - 8},316 L${nx - 5},311 H${nx + 5} L${nx + 8},316`} />
            <Torana x={nx} y={321} w={20} />
            <Pilaster x={nx - 13} yb={378} h={54} w={2.2} />
            <Pilaster x={nx + 13} yb={378} h={54} w={2.2} />
          </g>
        );
      })}
      <Band kind={1} x0={45} w={150} y={293.5} />
    </g>,
  );
  arr(26).forEach((k) => dots.push(<circle key={`g${k}`} cx={42 + k * 6.3} cy="381" r="0.8" />));
  [52, 72, 168, 188].forEach((x) => lamps.push({ x, y: 378, s: 0.95 }));
  [84, 156].forEach((x) => lamps.push({ x, y: 378, s: 1.25 }));

  // ───────── eleven tapering talas ─────────
  let yb = gwTop;
  outlineL.push("45,378", "45,292");
  rightPts.push("195,292", "195,378");
  for (let i = 0; i < 11; i++) {
    const h = 27 - i * 0.9;
    const w = 140 - i * 8.2;
    const x0 = cx - w / 2;
    const top = yb - h;
    const parapetBase = top + 7;
    const wallH = h - 12.2;
    const wallTop = yb - 3 - wallH;
    const s = (wallH - 2) / 13.6;
    const figures = s >= 0.45;
    const nw = 4.6 + s * 6;
    const nn = Math.max(3, Math.floor((w - 22) / (nw + 9)) + 1) | 1;
    const mid = (nn - 1) / 2;
    const sp = (w - 22) / (nn - 1);
    const cnt = Math.floor((w - 9) / 9) | 1;
    const step = (w - 9) / (cnt - 1);
    const pmid = (cnt - 1) / 2;
    outlineL.push(`${f(x0 - 3)},${yb}`, `${f(x0 - 3)},${top}`);
    rightPts.unshift(`${f(x0 + w + 3)},${top}`, `${f(x0 + w + 3)},${yb}`);

    art.push(
      <g key={`t${i}`}>
        {/* body + layered cornice + banded frieze */}
        <rect x={x0} y={top} width={w} height={h - 3} {...stone} />
        <rect x={x0 - 3} y={yb - 3} width={w + 6} height="1.5" {...stone} />
        <rect x={x0 - 1.6} y={yb - 1.6} width={w + 3.2} height="1.6" {...stone} />
        <path d={`M${x0 - 3},${wallTop - 0.2} H${x0 + w + 3}`} strokeWidth="0.35" />
        <Band kind={i % 3} x0={x0} w={w} y={wallTop - 2.6} />

        {/* parapet (hāra): kūṭa at the ends, śālā at the centre, pañjara / kūṭa between */}
        {arr(cnt).map((k) => {
          const px = x0 + 4.5 + k * step;
          if (k === 0 || k === cnt - 1) return <Kuta key={k} x={px} y={parapetBase} w={8} />;
          if (k === pmid) return <Sala key={k} x={px} y={parapetBase} w={12} />;
          return i % 2 === 0 || k % 2 === 1 ? (
            <Panjara key={k} x={px} y={parapetBase} />
          ) : (
            <Kuta key={k} x={px} y={parapetBase} w={5.4} />
          );
        })}

        {/* wall: tier-specific sculpture */}
        {figures ? (
          <>
            {arr(nn).map((k) => {
              const d = Math.abs(k - mid);
              const nx = cx + (k - mid) * sp;
              const flip = k > mid;
              const lintel = d === 0 || (d + i) % 2 === 0 ? "torana" : "pediment";
              return (
                <g key={k}>
                  <rect x={nx - nw / 2} y={wallTop - 0.2} width={nw} height={wallH - 0.4} fill={SHADE} fillOpacity="0.1" strokeWidth="0.45" />
                  {lintel === "torana" ? (
                    <Torana x={nx} y={wallTop - 0.2} w={nw + 1.6} />
                  ) : (
                    <path d={`M${f(nx - nw / 2 - 0.8)},${wallTop - 0.2} L${f(nx)},${f(wallTop - 2.6)} L${f(nx + nw / 2 + 0.8)},${wallTop - 0.2}`} strokeWidth="0.45" />
                  )}
                  <g className="max-lg:hidden">
                    <Sculpture d={d} tier={i} x={nx} y={yb - 3.4} s={s} flip={flip} />
                  </g>
                  {k < nn - 1 && <Pilaster x={nx + sp / 2} yb={yb - 3} h={wallH - 0.4} w={1.2} />}
                </g>
              );
            })}
          </>
        ) : (
          <>
            {arr(nn + 2).map((k) => {
              const mx = cx + (k - (nn + 1) / 2) * ((w - 18) / (nn + 1));
              return (
                <g key={k}>
                  <Panjara x={mx} y={yb - 3} />
                  {k < nn + 1 && <Pilaster x={mx + (w - 18) / (nn + 1) / 2} yb={yb - 3} h={wallH - 1} w={1} />}
                </g>
              );
            })}
          </>
        )}
      </g>,
    );
    arr(Math.floor(w / 6)).forEach((k) => dots.push(<circle key={`d${i}-${k}`} cx={x0 + 1 + k * 6} cy={yb - 1.5} r="0.75" />));
    if (i % 2 === 0) lamps.push({ x: x0 - 2.5, y: yb - 3, s: 0.8 }, { x: x0 + w + 2.5, y: yb - 3, s: 0.8 });
    yb = top;
  }

  // ───────── stepped crown with a row of kalaśas ─────────
  const yT = yb;
  const steps = [
    { w: 46, h: 8 },
    { w: 34, h: 6 },
    { w: 22, h: 5 },
  ];
  const crown: ReactNode[] = [];
  const leftCrown: string[] = [];
  const rightCrown: string[] = [];
  let ys = yT;
  steps.forEach((st, k) => {
    const x0 = cx - st.w / 2;
    crown.push(
      <g key={k}>
        <rect x={x0} y={ys - st.h} width={st.w} height={st.h} {...stone} />
        <path d={`M${x0 - 2},${ys - st.h} H${x0 + st.w + 2}`} strokeWidth="0.6" />
        <path d={`M${x0},${ys - st.h + 1.6} H${x0 + st.w}`} strokeWidth="0.3" />
        {arr(Math.floor(st.w / 6) - 1).map((r) => (
          <path key={r} d={`M${x0 + 6 + r * 6},${ys} V${ys - st.h + 2}`} strokeWidth="0.3" />
        ))}
      </g>,
    );
    leftCrown.push(`${x0 - 2},${ys}`, `${x0 - 2},${ys - st.h}`);
    rightCrown.unshift(`${x0 + st.w + 2},${ys - st.h}`, `${x0 + st.w + 2},${ys}`);
    ys -= st.h;
  });
  art.push(
    <g key="crown">
      {crown}
      {[-1, 1].map((sd) => (
        <g key={sd}>
          <Kalasa x={cx + sd * 20} y={yT - 8} s={0.7} />
          <Kalasa x={cx + sd * 14} y={yT - 14} s={0.75} />
        </g>
      ))}
      {[
        [-9.5, 0.65],
        [-4.8, 0.78],
        [0, 1.05],
        [4.8, 0.78],
        [9.5, 0.65],
      ].map(([dx, ks]) => (
        <Kalasa key={dx} x={cx + dx} y={ys} s={ks} />
      ))}
    </g>,
  );
  // silhouette used to keep the warm wash inside the tower
  const clip = `M26,392 L26,384 L34,384 L34,378 ${outlineL.map((p) => "L" + p).join(" ")} ${leftCrown.map((p) => "L" + p).join(" ")} ${rightCrown.map((p) => "L" + p).join(" ")} ${rightPts.map((p) => "L" + p).join(" ")} L206,378 L206,384 L214,384 L214,392 Z`;

  return (
    <svg
      viewBox="0 0 240 392"
      className="h-full w-full"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <radialGradient id="lamp-glow">
          <stop offset="0" stopColor="#F7C66A" stopOpacity="0.55" />
          <stop offset="0.3" stopColor="#F2B552" stopOpacity="0.26" />
          <stop offset="0.6" stopColor="#EFAE4C" stopOpacity="0.07" />
          <stop offset="1" stopColor="#EFAE4C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="spot-white">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="spot-warm">
          <stop offset="0" stopColor="#F0B24E" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#F0B24E" stopOpacity="0.14" />
          <stop offset="1" stopColor="#F0B24E" stopOpacity="0" />
        </radialGradient>
        <clipPath id="tower-clip">
          <path d={clip} />
        </clipPath>
        <mask id="spot-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="392">
          <circle id="spot-m" cx="120" cy="200" r="64" fill="url(#spot-white)" opacity="0" />
        </mask>
        <g id="gop-art">{art}</g>
        <g id="gop-dots">{dots}</g>
      </defs>

      {/* resting engraving */}
      <g stroke={GOLD} strokeWidth="0.7" opacity="0.5">
        <use href="#gop-art" />
      </g>

      {/* brighter amber engraving + festival light points, only where the spotlight reaches */}
      <g mask="url(#spot-mask)" className="[@media(hover:none)]:hidden">
        <g stroke="#D58E22" strokeWidth="0.8" opacity="0.95">
          <use href="#gop-art" />
        </g>
        <g fill={LIGHT} stroke="none">
          <use href="#gop-dots" />
        </g>
      </g>

      {/* warm wash that travels with the cursor, kept inside the tower */}
      <g clipPath="url(#tower-clip)">
        <circle id="spot-w" cx="120" cy="200" r="74" fill="url(#spot-warm)" stroke="none" opacity="0" />
      </g>

      {lamps.map((l, k) => (
        <Lamp key={k} {...l} />
      ))}
    </svg>
  );
}
