"use client";

import { useEffect, useRef } from "react";
import SacredBackground from "./SacredBackground";
import { Medallion } from "./SacredArt";

const GOLD = "#D8BC83";

/** One carved mandapa pillar: stepped plinth, banded shaft, bracketed capital. */
function Pillar({ x, w, h, o }: { x: number; w: number; h: number; o: number }) {
  const top = 600 - h;
  const fill = { fill: GOLD, fillOpacity: 0.05 } as const;
  return (
    <g opacity={o} stroke={GOLD} strokeWidth="1" fill="none">
      <rect x={x - w * 0.64} y={586} width={w * 1.28} height="14" {...fill} />
      <rect x={x - w * 0.54} y={574} width={w * 1.08} height="12" {...fill} />
      <rect x={x - w / 2} y={top + 46} width={w} height={h - 120} {...fill} />
      <path d={`M${x - w * 0.2},${top + 52} V${574}  M${x + w * 0.2},${top + 52} V${574}`} strokeOpacity="0.45" strokeWidth="0.8" />
      {[0.3, 0.52, 0.74].map((k) => (
        <rect key={k} x={x - w * 0.58} y={top + 46 + (h - 120) * k} width={w * 1.16} height="7" {...fill} />
      ))}
      {/* capital: abacus and double corbel brackets */}
      <rect x={x - w * 0.62} y={top + 36} width={w * 1.24} height="10" {...fill} />
      <rect x={x - w * 0.82} y={top + 22} width={w * 1.64} height="14" {...fill} />
      <path d={`M${x - w * 0.82},${top + 22} L${x - w * 1.55},${top + 22} L${x - w * 1.55},${top + 8} L${x - w * 0.82},${top + 14} Z`} {...fill} />
      <path d={`M${x + w * 0.82},${top + 22} L${x + w * 1.55},${top + 22} L${x + w * 1.55},${top + 8} L${x + w * 0.82},${top + 14} Z`} {...fill} />
      <rect x={x - w * 0.9} y={top} width={w * 1.8} height="14" {...fill} />
    </g>
  );
}

/**
 * About-page opening: a softly lit temple mandapa interior. Carved pillars in
 * receding rows (SVG), a lotus ceiling medallion, slow warm light rays, and
 * the existing lazy Three.js layer for a few drifting dust motes. Parallax is
 * tiny and off under reduced motion; nothing depends on the music player.
 */
export default function AboutHero() {
  const lotus = useRef<HTMLDivElement>(null);
  const rays = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = Math.min(window.scrollY, 700);
        if (lotus.current) lotus.current.style.transform = `translate3d(-50%, ${(y * 0.18).toFixed(1)}px, 0)`;
        if (rays.current) rays.current.style.transform = `translate3d(0, ${(y * 0.1).toFixed(1)}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#0E2A22] via-[#173D32] to-[#173D32] text-center"
      aria-labelledby="about-heading"
    >
      {/* temple interior: pillars + ceiling beams (tablet and up) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
      >
        <g stroke={GOLD} fill="none" strokeWidth="1">
          <rect x="0" y="28" width="1200" height="24" fill={GOLD} fillOpacity="0.05" opacity="0.5" />
          <path d={Array.from({ length: 60 }, (_, i) => `M${i * 20 + 10},52 v6`).join(" ")} strokeOpacity="0.25" />
          <rect x="230" y="150" width="740" height="16" fill={GOLD} fillOpacity="0.04" opacity="0.32" />
          <rect x="360" y="226" width="480" height="10" fill={GOLD} fillOpacity="0.04" opacity="0.2" />
        </g>
        <Pillar x={70} w={56} h={560} o={0.5} />
        <Pillar x={1130} w={56} h={560} o={0.5} />
        <Pillar x={232} w={40} h={450} o={0.32} />
        <Pillar x={968} w={40} h={450} o={0.32} />
        <Pillar x={362} w={28} h={370} o={0.2} />
        <Pillar x={838} w={28} h={370} o={0.2} />
        <rect x="0" y="560" width="1200" height="40" fill="url(#hero-floor)" />
        <defs>
          <linearGradient id="hero-floor" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#D8BC83" stopOpacity="0" />
            <stop offset="1" stopColor="#D8BC83" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* slow warm light rays falling from the ceiling lotus */}
      <div ref={rays} aria-hidden="true" className="pointer-events-none absolute inset-0 will-change-transform">
        <div
          className="about-rays absolute inset-0"
          style={{
            background:
              "conic-gradient(from 168deg at 50% -4%, transparent 0 3deg, rgba(216,188,131,0.16) 5deg, transparent 8deg, transparent 12deg, rgba(216,188,131,0.1) 14.5deg, transparent 17deg, transparent 21deg, rgba(216,188,131,0.13) 23deg, transparent 26deg, transparent 30deg, rgba(216,188,131,0.09) 32deg, transparent 35deg, transparent 360deg)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 90% at 50% 0%, #000 20%, transparent 75%)",
            maskImage: "radial-gradient(ellipse 70% 90% at 50% 0%, #000 20%, transparent 75%)",
          }}
        />
      </div>

      {/* ceiling lotus medallion with soft warm light */}
      <div
        ref={lotus}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[min(460px,92vw)] w-[min(460px,92vw)] will-change-transform sm:top-[-150px]"
        style={{ transform: "translate3d(-50%, 0, 0)" }}
      >
        <div
          className="absolute -inset-[25%] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(216,188,131,0.28), transparent 70%)" }}
        />
        <div className="relative h-full w-full opacity-[0.55]" style={{ filter: "drop-shadow(0 0 1px rgba(216,188,131,0.4))" }}>
          <Medallion />
        </div>
      </div>

      {/* a few drifting dust motes (existing lazy Three.js layer) */}
      <SacredBackground variant="aboutHero" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 pt-[210px] sm:px-6 sm:pb-20 sm:pt-[270px] lg:px-8">
        <p className="font-devanagari text-[0.95rem] tracking-wide text-[#D8BC83]">देवामृतम्</p>
        <h1
          id="about-heading"
          className="mx-auto mt-3 max-w-4xl font-cormorant text-[1.9rem] font-semibold uppercase leading-[1.15] tracking-[0.14em] text-[#F5EBD9] sm:text-5xl lg:text-[3.4rem]"
        >
          The Spirit Behind DEVAMRUTAM
        </h1>
        <div className="mx-auto mt-5 h-px w-16 bg-[#B68A42]" aria-hidden="true" />
        <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-[#D8BC83] sm:text-[1.05rem]">
          Preserving timeless wisdom. Inspiring meaningful living.
        </p>
        <a
          href="#founder-journey"
          className="mt-8 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#D8BC83]/80 transition-colors hover:text-[#F5EBD9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
        >
          The Founder&apos;s Journey ↓
        </a>
      </div>
    </section>
  );
}
