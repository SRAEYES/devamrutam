"use client";

import { useEffect, useRef } from "react";
import { RajaGopuram } from "./RajaGopuram";
import { Chakra } from "./SacredHeroArt";

const AMBIENT = 0.15; // every lamp always keeps this much light
const SPOT_REACH = 300; // px beyond the gopuram over which the spotlight fades
const CHAKRA_REACH = 260;
const CHAKRA_MASK = "radial-gradient(circle 190px at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.5) 45%, transparent 100%)";

/** 1 at/inside `near`, 0 at/after `far`, smooth in between. */
const falloff = (d: number, near: number, far: number) => {
  const t = Math.min(Math.max((d - near) / (far - near), 0), 1);
  return 1 - t * t * (3 - 2 * t);
};

interface Lamp {
  g: SVGGElement;
  flame: SVGGElement;
  outer: SVGPathElement;
  core: SVGPathElement;
  glow: SVGCircleElement;
  ux: number; // glow centre in gopuram (SVG) units
  uy: number;
  us: number; // lamp scale in SVG units
  r: number; // this lamp's own interaction radius (px), refreshed each frame
  I: number; // current eased intensity 0..1
  a: number; // flame phases
  b: number;
  c: number;
}

/**
 * Home-hero scene: rāja gopuram + ornamental chakra. There is no global
 * "on" state and no timers. Every frame, each lamp measures its own distance
 * to the *current* pointer position and eases toward a brightness from that
 * distance (smooth falloff, small ambient floor). Flames sway continuously
 * on independent sine mixes whatever the pointer does. The pointer also
 * steers a soft spotlight over the gopuram and over the chakra, so only the
 * nearby architecture / petals brighten.
 */
export default function HeroTemple() {
  const root = useRef<HTMLDivElement>(null);
  const gop = useRef<HTMLDivElement>(null);
  const chakra = useRef<HTMLDivElement>(null);
  const bright = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootEl = root.current;
    const gopEl = gop.current;
    const chEl = chakra.current;
    const brEl = bright.current;
    const svg = gopEl?.querySelector("svg");
    if (!rootEl || !gopEl || !chEl || !brEl || !svg) return;

    const spotM = svg.querySelector<SVGCircleElement>("#spot-m");
    const spotW = svg.querySelector<SVGCircleElement>("#spot-w");
    const lamps: Lamp[] = Array.from(svg.querySelectorAll<SVGGElement>("[data-lamp]")).map((g, k) => ({
      g,
      flame: g.querySelector<SVGGElement>(".lf")!,
      outer: g.querySelector<SVGPathElement>(".lo")!,
      core: g.querySelector<SVGPathElement>(".lc")!,
      glow: g.querySelector<SVGCircleElement>(".lg")!,
      ...(() => {
        const m = /translate\(([-\d.]+) ([-\d.]+)\) scale\(([-\d.]+)\)/.exec(g.getAttribute("transform") ?? "");
        const [x, y, sc] = m ? [+m[1], +m[2], +m[3]] : [0, 0, 1];
        return { ux: x, uy: y - 9 * sc, us: sc };
      })(),
      r: 230,
      I: AMBIENT,
      a: k * 1.93 + 0.4,
      b: k * 2.71 + 1.1,
      c: k * 0.83 + 2.3,
    }));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // flame geometry is anchored at the flame base (0, -6.4) in lamp units
    const paint = (l: Lamp, t: number) => {
      const I = l.I;
      let lean = 0;
      let sy = 1;
      let flick = 1;
      if (!reduced) {
        lean = (Math.sin(t * 1.7 + l.a) * 0.6 + Math.sin(t * 2.9 + l.b) * 0.3 + Math.sin(t * 0.7 + l.c) * 0.4) * 6;
        sy = 1 + 0.07 * Math.sin(t * 2.3 + l.b) + 0.05 * Math.sin(t * 4.1 + l.c);
        flick = 1 + 0.07 * Math.sin(t * 3.3 + l.a) + 0.05 * Math.sin(t * 5.7 + l.b);
      }
      const k = 0.82 + 0.34 * I;
      l.flame.setAttribute(
        "transform",
        `translate(0 -6.4) skewX(${lean.toFixed(2)}) scale(${(k / Math.sqrt(sy)).toFixed(3)} ${(k * sy).toFixed(3)}) translate(0 6.4)`,
      );
      l.outer.setAttribute("opacity", Math.min((0.42 + 0.58 * I) * flick, 1).toFixed(3));
      l.core.setAttribute("opacity", Math.min((0.3 + 0.7 * I) * flick, 1).toFixed(3));
      l.glow.setAttribute("opacity", Math.min((0.1 + 0.9 * I * I) * flick, 1).toFixed(3));
      const gs = 0.85 + 0.45 * I;
      l.glow.setAttribute("r", (11 * gs).toFixed(2));
    };

    let pointer: { x: number; y: number } | null = null;

    let spotA = 0;
    let spotX = 120;
    let spotY = 200;
    let chA = 0;
    let chX = 0;
    let chY = 0;
    let raf = 0;
    let last = 0;

    const distToRect = (r: DOMRect, x: number, y: number) =>
      Math.hypot(Math.max(r.left - x, 0, x - r.right), Math.max(r.top - y, 0, y - r.bottom));

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const t = now / 1000;
      const gr = svg.getBoundingClientRect();
      const px = gr.width / 240; // screen px per SVG unit

      for (const l of lamps) {
        l.r = 190 + l.us * px * 24;
        const target = pointer
          ? AMBIENT +
            (1 - AMBIENT) *
              falloff(Math.hypot(pointer.x - (gr.left + l.ux * px), pointer.y - (gr.top + l.uy * px)), 26, l.r)
          : AMBIENT;
        const tau = target > l.I ? 0.18 : 0.45;
        l.I += (target - l.I) * (1 - Math.exp(-dt / tau));
        paint(l, t);
      }

      // spotlight over the gopuram
      const k = 1 / (px || 1);
      const targetA = pointer ? falloff(distToRect(gr, pointer.x, pointer.y), 0, SPOT_REACH) : 0;
      spotA += (targetA - spotA) * (1 - Math.exp(-dt / 0.25));
      if (pointer) {
        const kx = 1 - Math.exp(-dt / 0.09);
        spotX += ((pointer.x - gr.left) * k - spotX) * kx;
        spotY += ((pointer.y - gr.top) * k - spotY) * kx;
      }
      if (spotM && spotW) {
        const a = spotA < 0.004 ? 0 : spotA;
        spotM.setAttribute("cx", spotX.toFixed(1));
        spotM.setAttribute("cy", spotY.toFixed(1));
        spotM.setAttribute("opacity", a.toFixed(3));
        spotW.setAttribute("cx", spotX.toFixed(1));
        spotW.setAttribute("cy", spotY.toFixed(1));
        spotW.setAttribute("opacity", a.toFixed(3));
      }

      // local highlight on the chakra's petals and rings
      const cr = chEl.getBoundingClientRect();
      const targetC = pointer ? falloff(distToRect(cr, pointer.x, pointer.y), 0, CHAKRA_REACH) : 0;
      chA += (targetC - chA) * (1 - Math.exp(-dt / 0.25));
      if (pointer) {
        const kx = 1 - Math.exp(-dt / 0.09);
        chX += (pointer.x - cr.left - chX) * kx;
        chY += (pointer.y - cr.top - chY) * kx;
      }
      brEl.style.opacity = (chA < 0.004 ? 0 : chA).toFixed(3);
      brEl.style.setProperty("--mx", `${chX.toFixed(0)}px`);
      brEl.style.setProperty("--my", `${chY.toFixed(0)}px`);
    };

    const start = () => {
      if (!raf && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    lamps.forEach((l) => paint(l, 0));

    // pointer: the *current* position is the only input
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      pointer = { x: e.clientX, y: e.clientY };
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") pointer = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      pointer = null;
    };

    // keep the chakra centred on the hero photo whatever the layout does
    const wrapEl = wrap.current;
    const photo = document.querySelector<HTMLImageElement>('#hero-heading')?.closest('section')?.querySelector<HTMLImageElement>('img');
    const place = () => {
      if (!wrapEl) return;
      if (window.innerWidth < 1024 || !photo) {
        chEl.style.left = "";
        chEl.style.top = "";
        return;
      }
      const w = wrapEl.getBoundingClientRect();
      const p = photo.getBoundingClientRect();
      chEl.style.left = `${(p.left + p.width / 2 - w.left).toFixed(0)}px`;
      chEl.style.top = `${(p.top + p.height / 2 - w.top).toFixed(0)}px`;
    };
    place();
    const ro = new ResizeObserver(place);
    ro.observe(rootEl);
    photo?.addEventListener("load", place);
    window.addEventListener("resize", place);

    let io: IntersectionObserver | undefined;
    const onVis = () => (document.hidden ? stop() : start());

    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
      document.addEventListener("visibilitychange", onVis);
      io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
      io.observe(rootEl);
      start();
    }

    return () => {
      stop();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
      ro.disconnect();
      photo?.removeEventListener("load", place);
      window.removeEventListener("resize", place);
    };
  }, []);

  return (
    <div ref={root} className="absolute inset-0">
      {/* Gopuram: small corner piece below xl; on xl+ it has its own region in
          the left gutter the hero container reserves (see page.tsx), fully
          visible, bottom-anchored, never under the text column */}
      <div
        ref={gop}
        className="hero-gopuram absolute right-3 top-3 aspect-[240/392] h-[120px] sm:h-[170px] md:max-lg:h-[240px]"
      >
        <RajaGopuram />
      </div>

      <div ref={wrap} className="absolute inset-0 mx-auto max-w-[1200px]">
        {/* Chakra: small top-left on phones, behind the stacked photo on
            tablets, large behind the photo on desktop (centred on the photo) */}
        <div
          ref={chakra}
          className="absolute left-3 top-3 aspect-square h-16 sm:left-1/2 sm:top-auto sm:h-[min(520px,72vw)] sm:-translate-x-1/2 sm:bottom-[calc(267px-min(260px,36vw))] lg:bottom-auto lg:left-[75%] lg:top-1/2 lg:h-[min(640px,94%)] lg:-translate-y-1/2"
        >
          <div
            className="absolute -inset-[8%] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(233,169,60,0.2), transparent 70%)" }}
          />
          <div className="relative h-full w-full opacity-40 animate-[spin_120s_linear_infinite] will-change-transform motion-reduce:animate-none">
            <Chakra />
          </div>
          {/* brighter copy, revealed only around the pointer (same rotation) */}
          <div
            ref={bright}
            className="absolute inset-0 [@media(hover:none)]:hidden"
            style={{ opacity: 0, maskImage: CHAKRA_MASK, WebkitMaskImage: CHAKRA_MASK }}
          >
            <div className="h-full w-full animate-[spin_120s_linear_infinite] will-change-transform motion-reduce:animate-none">
              <Chakra tone="#D58E22" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
