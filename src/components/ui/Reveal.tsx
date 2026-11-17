"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger in ms */
  delay?: number;
  as?: ElementType;
}

/**
 * Scroll reveal. Content is visible by default (SSR / no JS / reduced motion).
 * On mount, elements that start below the fold are hidden and then eased in
 * once when they scroll into view (see [data-reveal] rules in globals.css).
 */
export default function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already on screen

    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "shown";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} style={delay ? ({ "--rd": `${delay}ms` } as React.CSSProperties) : undefined}>
      {children}
    </Tag>
  );
}
