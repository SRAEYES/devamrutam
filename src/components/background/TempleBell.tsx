"use client";

import { useEffect, useRef } from "react";

/** Path of the supplied temple-bell recording. */
const BELL_AUDIO = "/audio/temple-ghanta.mp3";

/**
 * Where the bell hangs, in the gopuram's own SVG units (viewBox 240×392):
 * the underside of the gateway's lowest lintel beam, centred over the door.
 * Change HOOK to move it; change SIZE_BOOST to make it larger or smaller.
 */
const HOOK = { x: 120, y: 312 };
const SIZE_BOOST = 1.15;
/** Smallest bell scale (screen px per SVG unit) on small screens, where the
 *  corner gopuram is tiny, so the bell stays visible and tappable. */
const MIN_SCALE = 0.7;

// pendulum tuning
const PERIOD = 1.7; // seconds per swing at small angles
const OMEGA0 = (2 * Math.PI) / PERIOD;
const ZETA = 0.11; // damping ratio: settles in roughly 8–10 s
const MAX_AMP = 0.34; // rad (~19°) – repeated rings can't exceed this
const RING_AMP = 0.27; // rad (~15°) added by one ring

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

/**
 * Antique-brass temple ghanta hanging on a cord from the gopuram's gateway.
 * SVG + a damped-pendulum simulation (bell about the hook, clapper as a
 * second damped pendulum driven by the bell's acceleration, rope curving
 * against the motion). Light comes from cursor proximity and the click.
 * All animation writes SVG attributes directly: no React re-renders.
 */
export default function TempleBell() {
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const swingG = useRef<SVGGElement>(null);
  const ropeBase = useRef<SVGPathElement>(null);
  const ropeLight = useRef<SVGPathElement>(null);
  const clapperG = useRef<SVGGElement>(null);
  const glint = useRef<SVGRectElement>(null);
  const warm = useRef<SVGPathElement>(null);
  const ring = useRef<() => void>(() => {});

  useEffect(() => {
    const wrapEl = wrap.current;
    const btnEl = btn.current;
    const svg = svgRef.current;
    const swing = swingG.current;
    const r1 = ropeBase.current;
    const r2 = ropeLight.current;
    const clap = clapperG.current;
    const gl = glint.current;
    const wm = warm.current;
    if (!wrapEl || !btnEl || !svg || !swing || !r1 || !r2 || !clap || !gl || !wm) return;

    const section = wrapEl.parentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ───────────── placement on the gopuram ───────────── */
    let kb = 1; // screen px per SVG unit for the bell
    const place = () => {
      const gop = document.querySelector<SVGSVGElement>(".hero-gopuram svg");
      if (!gop || !section) return;
      const g = gop.getBoundingClientRect();
      const s = section.getBoundingClientRect();
      const ku = g.width / 240;
      kb = Math.max(ku * SIZE_BOOST, MIN_SCALE);
      const hx = g.left + HOOK.x * ku - s.left;
      const hy = g.top + HOOK.y * ku - s.top;
      const w = Math.max(40, 26 * kb);
      wrapEl.style.left = `${(hx - w / 2).toFixed(1)}px`;
      wrapEl.style.top = `${(hy - 2 * kb).toFixed(1)}px`;
      btnEl.style.width = `${w.toFixed(1)}px`;
      btnEl.style.minHeight = `${Math.max(34, 42 * kb).toFixed(1)}px`;
      svg.style.width = `${(24 * kb).toFixed(1)}px`;
      svg.style.height = `${(42 * kb).toFixed(1)}px`;
    };
    place();
    const ro = new ResizeObserver(place);
    if (section) ro.observe(section);
    window.addEventListener("resize", place);

    /* ───────────── audio (one element, restarted cleanly) ───────────── */
    let audio: HTMLAudioElement | null = null;
    let audioFailed = false;
    const getAudio = () => {
      if (audio || audioFailed) return audio;
      try {
        audio = new Audio(BELL_AUDIO);
        audio.preload = "auto";
        audio.loop = false;
        audio.addEventListener("error", () => {
          audioFailed = true; // missing/undecodable file: stay silent, keep the swing
        });
      } catch {
        audioFailed = true;
      }
      return audio;
    };
    const playSound = () => {
      const a = getAudio();
      if (!a) return;
      try {
        a.currentTime = 0;
        const p = a.play();
        if (p && typeof p.catch === "function") p.catch(() => {}); // autoplay policy etc.
      } catch {
        /* ignore */
      }
    };

    /* ───────────── pendulum state ───────────── */
    let th = 0; // bell angle (rad)
    let om = 0; // bell angular velocity
    let ph = 0; // clapper angle relative to bell
    let phv = 0;
    let acc = 0; // bell angular acceleration (drives the clapper)
    let hover = 0; // eased proximity 0..1
    let hoverGoal = 0;
    let reflect = 0; // click glint 1 -> 0
    let lastDir = 1;
    let raf = 0;
    let last = 0;
    let swingingNow = false;

    const apply = () => {
      const deg = (th * 180) / Math.PI;
      swing.setAttribute("transform", `rotate(${deg.toFixed(3)} 0 2.2)`);
      // rope bows against the motion of the bell and relaxes at rest
      const bow = clamp(-om * 0.55, -1.6, 1.6) + 0.45;
      const d = `M0,3.1 C${(bow).toFixed(2)},5 ${(-bow * 0.6).toFixed(2)},6.6 0,8.9`;
      r1.setAttribute("d", d);
      r2.setAttribute("d", d);
      clap.setAttribute("transform", `rotate(${((ph * 180) / Math.PI).toFixed(3)} 0 12.5)`);
      // glint sweeps across the body after a ring; hover adds a soft warm light
      const sweep = 1 - reflect;
      gl.setAttribute("x", (-10.5 + sweep * 18).toFixed(2));
      gl.setAttribute("opacity", (reflect * 0.5 + hover * 0.14).toFixed(3));
      wm.setAttribute("opacity", (hover * 0.2 + reflect * 0.12).toFixed(3));
      svg.style.setProperty("--bh", hover.toFixed(3));
    };

    const step = (dt: number) => {
      // damped pendulum: θ'' = -ω0² sinθ - 2ζω0 θ'
      let z = ZETA;
      if (Math.abs(th) < 0.01 && Math.abs(om) < 0.06) z = 0.6; // settles softly at rest
      const a = -OMEGA0 * OMEGA0 * Math.sin(th) - 2 * z * OMEGA0 * om;
      acc = a;
      om += a * dt;
      th += om * dt;
      // clapper: own damped pendulum, pushed by the bell's acceleration
      const w2 = OMEGA0 * 1.9;
      const pa = -w2 * w2 * ph - 2 * 0.16 * w2 * phv - 0.9 * acc;
      phv += pa * dt;
      ph += phv * dt;
      if (Math.abs(ph) > 0.42) {
        ph = Math.sign(ph) * 0.42; // meets the inner wall
        phv *= -0.25;
      }
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!reduced) {
        const n = Math.max(1, Math.ceil(dt / (1 / 120)));
        for (let i = 0; i < n; i++) step(dt / n);
      }
      hover += (hoverGoal - hover) * (1 - Math.exp(-dt / 0.18));
      reflect = Math.max(0, reflect - dt / 1.1);
      swingingNow = !reduced && (Math.abs(th) > 0.0004 || Math.abs(om) > 0.004 || Math.abs(ph) > 0.001);
      if (!swingingNow && !reduced) {
        th = om = ph = phv = 0;
      }
      apply();
      if (swingingNow || reflect > 0.002 || Math.abs(hoverGoal - hover) > 0.003) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = 0;
      }
    };
    const kick = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    ring.current = () => {
      playSound();
      reflect = 1;
      if (!reduced) {
        const dir = Math.abs(om) > 0.05 ? Math.sign(om) : -lastDir;
        lastDir = dir;
        om += dir * RING_AMP * OMEGA0;
        const amp = Math.hypot(th, om / OMEGA0);
        if (amp > MAX_AMP) {
          om *= MAX_AMP / amp;
          th *= MAX_AMP / amp;
        }
      }
      kick();
    };

    /* cursor proximity -> understated brass highlight */
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.55;
      const d = Math.hypot(e.clientX - cx, e.clientY - cy);
      const t = clamp(1 - (d - 14) / 110, 0, 1);
      hoverGoal = t * t * (3 - 2 * t);
      kick();
    };
    const onLeave = () => {
      hoverGoal = 0;
      kick();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    apply();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", place);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      ring.current = () => {};
      if (audio) {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
        audio = null;
      }
    };
  }, []);

  const body =
    "M2.2,9.6 C2.6,12 3.6,13.5 4.4,16 C5.6,19.6 6.2,23 7.2,26.5 C7.8,28.5 9,29.6 9.6,31 V32.4 H-9.6 V31 C-9,29.6 -7.8,28.5 -7.2,26.5 C-6.2,23 -5.6,19.6 -4.4,16 C-3.6,13.5 -2.6,12 -2.2,9.6 Z";

  return (
    <div ref={wrap} className="absolute z-20" style={{ left: -9999, top: 0 }}>
      <button
        ref={btn}
        type="button"
        aria-label="Ring temple bell"
        onClick={() => ring.current()}
        className="flex cursor-pointer items-start justify-center rounded-md bg-transparent p-0 outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-[#B68A42]"
      >
        <svg
          ref={svgRef}
          viewBox="-12 -2 24 42"
          overflow="visible"
          aria-hidden="true"
          className="block"
          style={{ filter: "brightness(calc(1 + var(--bh, 0) * 0.14))" }}
        >
          <defs>
            <linearGradient id="bell-brass" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#5B4425" />
              <stop offset="0.16" stopColor="#76501F" />
              <stop offset="0.36" stopColor="#E6C47A" />
              <stop offset="0.5" stopColor="#C79A4E" />
              <stop offset="0.74" stopColor="#B68A42" />
              <stop offset="0.92" stopColor="#76501F" />
              <stop offset="1" stopColor="#5B4425" />
            </linearGradient>
            <linearGradient id="bell-neck" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#5B4425" />
              <stop offset="0.4" stopColor="#D9B565" />
              <stop offset="1" stopColor="#6A4A1E" />
            </linearGradient>
            <radialGradient id="bell-ball" cx="0.35" cy="0.3" r="0.8">
              <stop offset="0" stopColor="#E6C47A" />
              <stop offset="0.6" stopColor="#B68A42" />
              <stop offset="1" stopColor="#5B4425" />
            </radialGradient>
            <clipPath id="bell-clip">
              <path d={body} />
            </clipPath>
          </defs>

          {/* fixed mount on the lintel: plate and eye */}
          <path d="M-3,-0.2 H3 V1 H-3Z" fill="#5B4425" stroke="#3E2E14" strokeWidth="0.3" />
          <path d="M-0.9,1 V2.2 M0.9,1 V2.2" stroke="#3E2E14" strokeWidth="0.5" />

          {/* everything below swings about the eye at (0, 2.2) */}
          <g ref={swingG}>
            <circle cx="0" cy="2.2" r="1.05" fill="none" stroke="#5B4425" strokeWidth="0.7" />
            {/* cord: twisted look, attached at both ends */}
            <path ref={ropeBase} d="M0,3.1 C0.45,5 -0.3,6.6 0,8.9" fill="none" stroke="#6E532B" strokeWidth="1.25" strokeLinecap="round" />
            <path ref={ropeLight} d="M0,3.1 C0.45,5 -0.3,6.6 0,8.9" fill="none" stroke="#D2B676" strokeWidth="1.25" strokeDasharray="0.55 0.8" strokeLinecap="round" opacity="0.75" />
            {/* crown: knop, collar and suspension loop */}
            <path d="M-1.5,8.9 H1.5 L1.1,7.8 H-1.1Z" fill="#76501F" stroke="#3E2E14" strokeWidth="0.3" />
            <path d="M-2.6,10 C-2.6,9.2 -1.8,8.9 0,8.9 C1.8,8.9 2.6,9.2 2.6,10 Z" fill="url(#bell-neck)" stroke="#4A3618" strokeWidth="0.35" />

            {/* mouth (seen slightly from below), then the clapper, then the body */}
            <ellipse cx="0" cy="32.4" rx="9.6" ry="1.9" fill="#2B2010" stroke="#5B4425" strokeWidth="0.4" />
            <g ref={clapperG}>
              <path d="M0,12.5 V35.2" stroke="#4A3618" strokeWidth="0.9" strokeLinecap="round" />
              <circle cx="0" cy="36.2" r="1.9" fill="url(#bell-ball)" stroke="#3E2E14" strokeWidth="0.35" />
            </g>
            <path d={body} fill="url(#bell-brass)" stroke="#4A3618" strokeWidth="0.45" strokeLinejoin="round" />

            {/* engraved bands and lotus-petal frieze (follow the curve of the body) */}
            <g fill="none" stroke="#4A3618" strokeWidth="0.4" opacity="0.7" clipPath="url(#bell-clip)">
              <path d="M-4.2,13.4 Q0,14.6 4.2,13.4" />
              <path d="M-4.9,17.2 Q0,18.4 4.9,17.2" />
              <path d="M-6.4,22.6 Q0,24 6.4,22.6" />
              <path d="M-7.2,26.6 Q0,28 7.2,26.6" />
              <path d="M-9,30 Q0,31.5 9,30" strokeWidth="0.6" />
              {[-60, -30, 0, 30, 60].map((a) => {
                const x = 5.4 * Math.sin((a * Math.PI) / 180);
                const w = 0.9 * Math.cos((a * Math.PI) / 180);
                return <path key={a} d={`M${x.toFixed(2)},22.3 q${w.toFixed(2)},-1.9 0,-3.8 q${(-w).toFixed(2)},1.9 0,3.8`} />;
              })}
              {[-4.6, -2.3, 0, 2.3, 4.6].map((x) => (
                <path key={x} d={`M${x},28.6 v0.01`} strokeWidth="0.8" strokeLinecap="round" />
              ))}
            </g>
            {/* lip band */}
            <path d="M-9.6,31 H9.6 V32.4 H-9.6Z" fill="#5B4425" opacity="0.55" />

            {/* light: warm hover wash + a glint that sweeps after a ring */}
            <path ref={warm} d={body} fill="#E6C47A" opacity="0" />
            <g clipPath="url(#bell-clip)">
              <rect ref={glint} x="-10.5" y="9" width="3.2" height="24" fill="#FFF1C2" opacity="0" transform="skewX(-12)" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
