import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SpiritualIcon from "@/components/icons/SpiritualIcons";
import { Gopuram } from "@/components/background/SacredArt";

/** Closing quotation with faint temple silhouettes, warm light and a lotus. */
export default function AboutClosing() {
  return (
    <section
      aria-labelledby="closing-quote"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#173D32] to-[#0E2A22] py-20 text-center sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 60% at 50% 38%, rgba(216,188,131,0.2), transparent 70%)" }}
      />
      {[
        "left-[4%]",
        "right-[4%]",
      ].map((pos) => (
        <div
          key={pos}
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 hidden aspect-[200/276] h-[78%] opacity-[0.14] lg:block ${pos}`}
          style={{ maskImage: "linear-gradient(to top, #000 55%, transparent)", WebkitMaskImage: "linear-gradient(to top, #000 55%, transparent)" }}
        >
          <Gopuram />
        </div>
      ))}

      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6">
        <SpiritualIcon name="lotus" size={46} className="mx-auto text-[#D8BC83]" />
        <blockquote className="mt-6">
          <p id="closing-quote" className="font-cormorant text-[1.7rem] font-medium italic leading-snug text-[#F5EBD9] sm:text-[2.5rem]">
            &ldquo;Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.&rdquo;
          </p>
          <footer className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#D8BC83]">— DEVAMRUTAM</footer>
        </blockquote>
        <div className="mx-auto mt-8 h-px w-16 bg-[#B68A42]" aria-hidden="true" />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/learn"
            className="inline-flex items-center rounded-xl bg-[#B68A42] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#9E7432] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8BC83] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173D32]"
          >
            Explore Our Programmes
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#D8BC83] underline-offset-4 transition-colors hover:text-[#F5EBD9] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8BC83]"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
