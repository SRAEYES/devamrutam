"use client";

import { useEffect, useState } from "react";
import { Award, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { Certificate } from "@/types";

interface CertificateViewerProps {
  certificates: Certificate[];
}

export default function CertificateViewer({
  certificates,
}: CertificateViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const selectedCert =
    selectedIndex !== null ? certificates[selectedIndex] : null;

  // Close modal using Escape key and support arrow-key navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % certificates.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + certificates.length) % certificates.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, certificates.length]);

  const markImageFailed = (imagePath: string) => {
    setFailedImages((previous) =>
      previous.includes(imagePath) ? previous : [...previous, imagePath],
    );
  };

  return (
    <div>
      {/* Certificate Gallery */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => {
          const imageFailed = failedImages.includes(cert.imagePath);

          return (
            <button
              type="button"
              key={cert.id}
              onClick={() => setSelectedIndex(index)}
              className="group text-left bg-white rounded-2xl border border-[#E7DFD0] p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-[#B68A42]/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B68A42]"
              aria-label={`View certificate: ${cert.achievement}`}
            >
              {/* Actual Certificate Image */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F5EBD9] border border-[#E7DFD0] mb-4 flex items-center justify-center">
                {!imageFailed ? (
                  <img
                    src={cert.imagePath}
                    alt={cert.imageAlt}
                    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={() => markImageFailed(cert.imagePath)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-5">
                    <Award size={38} className="text-[#B68A42] mb-3" />
                    <p className="text-sm font-semibold text-[#173D32]">
                      Certificate image unavailable
                    </p>
                    <p className="text-xs text-[#77756D] mt-2 break-all">
                      {cert.imagePath}
                    </p>
                  </div>
                )}

                {/* Enlarge indicator */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/95 text-[#173D32] px-3 py-1.5 rounded-lg shadow-sm text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                  Enlarge
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-2">
                <span className="text-[0.7rem] uppercase font-semibold text-[#B68A42] tracking-wider block">
                  {cert.organisation}
                </span>

                {cert.programme && (
                  <p className="text-xs font-semibold text-[#173D32]">
                    Programme: {cert.programme}
                  </p>
                )}

                <h4 className="font-cormorant font-bold text-lg text-[#173D32] leading-snug">
                  {cert.achievement}
                </h4>

                {cert.guidance && (
                  <p className="text-xs text-[#77756D] italic pt-3 border-t border-[#E7DFD0]">
                    Guidance: {cert.guidance}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Certificate Full-Size Modal */}
      {selectedCert && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#102D25]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate image viewer"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative bg-[#FAF8F2] rounded-2xl w-full max-w-6xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 p-4 sm:p-5 border-b border-[#E7DFD0]">
              <div className="min-w-0">
                <p className="text-[0.65rem] uppercase tracking-widest text-[#B68A42] font-bold">
                  Original Certificate
                </p>

                <h3 className="font-cormorant font-bold text-xl sm:text-2xl text-[#173D32] mt-1">
                  {selectedCert.achievement}
                </h3>

                <p className="text-xs text-[#77756D] mt-1">
                  {selectedCert.organisation}
                  {selectedCert.programme && ` · ${selectedCert.programme}`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="shrink-0 p-2 rounded-full bg-white border border-[#E7DFD0] text-[#173D32] hover:bg-[#F5EBD9] transition-colors"
                aria-label="Close certificate viewer"
              >
                <X size={21} />
              </button>
            </div>

            {/* Full Certificate Image */}
            <div className="flex-1 min-h-0 overflow-auto bg-[#EDE8DD] p-3 sm:p-6 flex items-center justify-center">
              {failedImages.includes(selectedCert.imagePath) ? (
                <div className="text-center p-8">
                  <Award size={48} className="mx-auto text-[#B68A42] mb-3" />
                  <p className="text-[#173D32] font-semibold">
                    Unable to load this certificate
                  </p>
                  <p className="text-xs text-[#77756D] mt-2 break-all">
                    {selectedCert.imagePath}
                  </p>
                </div>
              ) : (
                <img
                  src={selectedCert.imagePath}
                  alt={selectedCert.imageAlt}
                  className="max-w-full max-h-[68vh] w-auto h-auto object-contain rounded-lg shadow-md"
                  onError={() => markImageFailed(selectedCert.imagePath)}
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-3 p-3 sm:p-4 border-t border-[#E7DFD0] bg-[#FAF8F2]">
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + certificates.length) %
                      certificates.length,
                  )
                }
                className="flex items-center gap-1 px-3 py-2 text-xs sm:text-sm font-semibold text-[#173D32] rounded-lg hover:bg-[#F5EBD9] transition-colors"
              >
                <ChevronLeft size={17} />
                Previous
              </button>

              <span className="text-xs text-[#77756D] font-medium">
                {selectedIndex + 1} / {certificates.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % certificates.length)
                }
                className="flex items-center gap-1 px-3 py-2 text-xs sm:text-sm font-semibold text-[#173D32] rounded-lg hover:bg-[#F5EBD9] transition-colors"
              >
                Next
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
