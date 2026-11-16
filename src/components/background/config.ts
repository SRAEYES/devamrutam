export type SacredVariant =
  | "home"
  | "learn"
  | "community"
  | "store"
  | "about"
  | "contact";

export interface SacredConfig {
  /** Lotus medallion: centre as fraction of the section, size in px (desktop) */
  medallion: { cx: number; cy: number; size: number; opacity: number } | null;
  /**
   * Gopuram placement. "hero" rises behind the hero photo column (home only);
   * "left"/"right" sits in the side margin on wide screens only.
   */
  temple: "hero" | "left" | "right" | null;
  /** Home hero only: large rotating chakra behind the photo + vimana on the left */
  hero?: boolean;
  lotus: boolean;
  glow: boolean;
  /** WebGL layer: null = static only (no WebGL at all) */
  webgl: { particles: number; beads: boolean } | null;
}

export const SACRED_CONFIG: Record<SacredVariant, SacredConfig> = {
  home: {
    medallion: null,
    temple: null,
    hero: true,
    lotus: false,
    glow: true,
    webgl: { particles: 30, beads: false },
  },
  learn: {
    medallion: { cx: 0.92, cy: 0.5, size: 200, opacity: 0.22 },
    temple: null,
    lotus: true,
    glow: true,
    webgl: { particles: 14, beads: false },
  },
  community: {
    medallion: { cx: 0.08, cy: 0.5, size: 200, opacity: 0.22 },
    temple: "right",
    lotus: false,
    glow: true,
    webgl: { particles: 14, beads: false },
  },
  store: {
    medallion: { cx: 0.92, cy: 0.5, size: 180, opacity: 0.18 },
    temple: null,
    lotus: true,
    glow: false,
    webgl: null,
  },
  about: {
    medallion: { cx: 0.08, cy: 0.5, size: 200, opacity: 0.22 },
    temple: "right",
    lotus: false,
    glow: true,
    webgl: { particles: 12, beads: false },
  },
  contact: {
    medallion: { cx: 0.92, cy: 0.5, size: 160, opacity: 0.16 },
    temple: null,
    lotus: false,
    glow: false,
    webgl: null,
  },
};
