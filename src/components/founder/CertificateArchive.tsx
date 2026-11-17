"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Certificate } from "@/types";

interface Group {
  key: string;
  organisation: string;
  programme?: string;
  guidance?: string;
  items: { cert: Certificate; index: number }[];
}

/** Group by actual issuing institution and programme, preserving data order. */
function group(certs: Certificate[]): Group[] {
  const out: Group[] = [];
  certs.forEach((cert, index) => {
    const key = `${cert.organisation}|${cert.programme ?? ""}`;
    let g = out.find((x) => x.key === key);
    if (!g) {
      g = { key, organisation: cert.organisation, programme: cert.programme, guidance: cert.guidance, items: [] };
      out.push(g);
    }
    g.items.push({ cert, index });
  });
  return out;
}

export default function CertificateArchive({ certificates }: { certificates: Certificate[] }) {
  const groups = group(certificates);
  const [open, setOpen] = useState<number | null>(null);
  const [failed, setFailed] = useState<string[]>([]);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const count = certificates.length;

  const markFailed = (p: string) => setFailed((f) => (f.includes(p) ? f : [...f, p]));
  const close = useCallback(() => {
    setOpen(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + count) % count)), [count]);

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const current = open !== null ? certificates[open] : null;

  return (
    <section aria-labelledby="archive-heading" className="relative bg-[#F5EBD9]/70">
      <div className="carved-band" aria-hidden="true" />
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="block font-devanagari text-xs font-semibold text-[#B68A42]">प्रमाणपत्र दीर्घा</span>
          <h2 id="archive-heading" className="mt-1 font-cormorant text-3xl font-bold text-[#173D32] sm:text-5xl">
            Milestones of Learning &amp; Devotion
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-[#B68A42]" aria-hidden="true" />
          <p className="mt-5 text-sm leading-relaxed text-[#77756D] sm:text-base">
            A personal journey of scriptural learning, recitation and devotional practice.
          </p>
        </Reveal>

        <div className="space-y-16 sm:space-y-20">
          {groups.map((g) => (
            <div key={g.key}>
              <Reveal className="mb-7 flex flex-col gap-1 border-b border-[#D8BC83]/70 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-cormorant text-2xl font-bold text-[#173D32] sm:text-3xl">{g.organisation}</h3>
                  {g.programme && <p className="text-sm font-semibold text-[#B68A42]">{g.programme}</p>}
                </div>
                {g.guidance && <p className="text-xs italic text-[#77756D]">Guidance: {g.guidance}</p>}
              </Reveal>

              <ul className={`grid gap-6 sm:gap-8 ${g.items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {g.items.map(({ cert, index }, i) => (
                  <Reveal as="li" key={cert.id} delay={i * 90}>
                    <button
                      type="button"
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setOpen(index);
                      }}
                      aria-label={`View certificate: ${cert.achievement}`}
                      className="group block w-full text-left outline-none transition duration-500 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      <span className="block border border-[#D8BC83]/80 bg-[#FAF8F2] p-2.5 shadow-[0_1px_2px_rgba(23,61,50,0.06),0_10px_24px_-14px_rgba(23,61,50,0.28)] transition-shadow duration-500 group-hover:shadow-[0_2px_4px_rgba(23,61,50,0.08),0_22px_36px_-16px_rgba(23,61,50,0.38)] group-focus-visible:ring-2 group-focus-visible:ring-[#B68A42]">
                        <span className="relative block aspect-[4/3] overflow-hidden bg-[#F5EBD9]">
                          {failed.includes(cert.imagePath) ? (
                            <span className="absolute inset-0 flex items-center justify-center p-4 text-center text-xs text-[#77756D]">
                              Certificate image unavailable
                            </span>
                          ) : (
                            <Image
                              src={cert.imagePath}
                              alt={cert.imageAlt}
                              fill
                              sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                              className="object-contain p-1.5"
                              onError={() => markFailed(cert.imagePath)}
                            />
                          )}
                        </span>
                      </span>
                      <span className="mt-4 block font-cormorant text-lg font-bold leading-snug text-[#173D32]">{cert.achievement}</span>
                      <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#B68A42] opacity-80 transition-opacity group-hover:opacity-100">
                        View certificate
                      </span>
                    </button>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="carved-band" aria-hidden="true" />

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.achievement}
          className="fixed inset-0 z-[80] flex flex-col bg-[#102D25]/92 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-start justify-between gap-4 p-4 sm:p-6">
            <div className="min-w-0 text-[#F5EBD9]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#D8BC83]">
                {current.organisation}
                {current.programme ? ` · ${current.programme}` : ""}
              </p>
              <p className="mt-1 font-cormorant text-xl font-bold leading-snug sm:text-2xl">{current.achievement}</p>
              {current.guidance && <p className="mt-1 text-xs italic text-[#D8BC83]/80">Guidance: {current.guidance}</p>}
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close certificate"
              className="shrink-0 rounded-full border border-[#D8BC83]/50 p-2 text-[#F5EBD9] transition-colors hover:bg-[#D8BC83]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8BC83]"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-12 pb-6 sm:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.imagePath}
              alt={current.imageAlt}
              className="max-h-full max-w-full bg-[#FAF8F2] object-contain shadow-2xl"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous certificate"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[#D8BC83]/50 p-2 text-[#F5EBD9] transition-colors hover:bg-[#D8BC83]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8BC83] sm:left-5"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next certificate"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[#D8BC83]/50 p-2 text-[#F5EBD9] transition-colors hover:bg-[#D8BC83]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8BC83] sm:right-5"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>
          <p className="pb-4 text-center text-xs text-[#D8BC83]/70">
            {open! + 1} / {count}
          </p>
        </div>
      )}
    </section>
  );
}
