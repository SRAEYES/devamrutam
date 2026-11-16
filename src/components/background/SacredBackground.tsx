"use client";

import { useEffect, useRef } from "react";
import { SACRED_CONFIG, type SacredVariant } from "./config";
import { Gopuram, Medallion } from "./SacredArt";
import HeroTemple from "./HeroTemple";

function Lotus() {
  return (
    <svg
      viewBox="-100 -100 200 110"
      className="h-full w-full"
      fill="none"
      stroke="#B68A42"
      strokeWidth="0.5"
    >
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d="M0,0 Q22,-40 0,-90 Q-22,-40 0,0Z"
          transform={`rotate(${-80 + i * 20})`}
        />
      ))}
      <path d="M-70,6 Q0,-8 70,6" />
    </svg>
  );
}

const TEMPLE_MASK = "linear-gradient(to top, black 55%, transparent 100%)";

/**
 * Decorative "Sacred Universe" layer. Place as the first child of a
 * `relative overflow-hidden` section; give content `relative z-10`.
 * Static SVG artwork (gopuram + lotus medallion) always renders as the
 * SSR-safe fallback; a Three.js layer (light motes, orbiting beads) is
 * lazy-loaded on idle and skipped for reduced-motion or without WebGL.
 */
export default function SacredBackground({
  variant = "home",
}: {
  variant?: SacredVariant;
}) {
  const cfg = SACRED_CONFIG[variant];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !cfg.webgl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;
    const w = window.innerWidth;
    const tier = w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop";

    const load = () => {
      import("./SacredScene")
        .then(({ mountSacredScene }) => {
          if (cancelled) return;
          try {
            cleanup = mountSacredScene(el, cfg, tier);
          } catch {
            // WebGL unavailable: static SVG artwork remains as the fallback.
          }
        })
        .catch(() => {});
    };
    const useIdle = typeof window.requestIdleCallback === "function";
    const handle = useIdle
      ? window.requestIdleCallback(load, { timeout: 2000 })
      : window.setTimeout(load, 600);

    return () => {
      cancelled = true;
      if (useIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
      cleanup?.();
    };
  }, [cfg]);

  const m = cfg.medallion;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {cfg.glow && (m || cfg.hero) && (
        <div
          className="absolute inset-0"
          style={{
            background: cfg.hero
              ? "radial-gradient(circle at 75% 50%, rgba(216,188,131,0.22), transparent 45%)"
              : `radial-gradient(circle at ${m!.cx * 100}% ${m!.cy * 100}%, rgba(216,188,131,0.2), transparent 40%)`,
          }}
        />
      )}

      {/* Lotus medallion: small corner ornament on phones, positioned in
          free space (clamped inside the section) from tablet / wide up. */}
      {m && (
        <div
          className="absolute right-2 top-2 h-24 w-24 sm:h-28 sm:w-28 xl:left-[var(--l)] xl:right-auto xl:top-[var(--t)] xl:h-[var(--s)] xl:w-[var(--s)] xl:-translate-x-1/2 xl:-translate-y-1/2"
          style={
            {
              "--s": `${m.size}px`,
              "--l": `clamp(calc(${m.size}px / 2 + 12px), ${m.cx * 100}%, calc(100% - ${m.size}px / 2 - 12px))`,
              "--t": `clamp(calc(${m.size}px / 2 + 12px), ${m.cy * 100}%, calc(100% - ${m.size}px / 2 - 12px))`,
              opacity: m.opacity * 0.7,
            } as React.CSSProperties
          }
        >
          <Medallion />
        </div>
      )}

      {/* HOME HERO: interactive rāja gopuram + rotating chakra (beneath hero content) */}
      {cfg.hero && <HeroTemple />}

      {/* Gopuram in the side margin on wide screens (inner pages) */}
      {(cfg.temple === "left" || cfg.temple === "right") && (
        <div
          className={`absolute bottom-0 hidden aspect-[200/276] h-[88%] opacity-[0.2] xl:block ${
            cfg.temple === "left" ? "left-[4%]" : "right-[4%]"
          }`}
          style={{ maskImage: TEMPLE_MASK, WebkitMaskImage: TEMPLE_MASK }}
        >
          <Gopuram />
        </div>
      )}

      {cfg.lotus && (
        <div className="absolute bottom-0 left-4 h-20 w-36 opacity-[0.16] sm:h-28 sm:w-52">
          <Lotus />
        </div>
      )}
    </div>
  );
}
