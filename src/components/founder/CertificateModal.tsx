'use client';

import { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';
import type { Certificate } from '@/types';

interface CertificateViewerProps {
  certificates: Certificate[];
}

export default function CertificateViewer({ certificates }: CertificateViewerProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between shadow-sm hover:border-[#B68A42]/60 hover:shadow-md transition-all cursor-pointer group"
            onClick={() => setSelectedCert(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedCert(cert);
              }
            }}
            aria-label={`View details for certificate: ${cert.achievement}`}
          >
            <div>
              {/* Document Certificate Preview Box */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#FAF8F2] via-[#F5EBD9] to-[#FAF8F2] rounded-xl border border-[#E7DFD0] mb-4 p-5 flex flex-col items-center justify-center text-center relative group-hover:bg-[#F5EBD9]/60 transition-colors">
                <Award size={36} className="text-[#B68A42] mb-2" />
                <span className="text-[0.65rem] uppercase font-bold text-[#173D32] tracking-wider block">
                  Original Document
                </span>
                <span className="text-[0.7rem] text-[#77756D] line-clamp-1 mt-1 font-medium">
                  {cert.organisation}
                </span>

                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[0.65rem] text-[#173D32] font-semibold bg-white/90 px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                    Enlarge <ExternalLink size={10} />
                  </span>
                </div>
              </div>

              <span className="text-[0.7rem] uppercase font-semibold text-[#B68A42] tracking-wider block mb-1">
                {cert.organisation}
              </span>

              {cert.programme && (
                <span className="text-xs font-semibold text-[#173D32] block mb-1">
                  Programme: {cert.programme}
                </span>
              )}

              <h4 className="font-cormorant font-bold text-base text-[#173D32] leading-snug mb-2">
                {cert.achievement}
              </h4>
            </div>

            {cert.guidance && (
              <p className="text-[0.75rem] text-[#77756D] italic pt-3 border-t border-[#E7DFD0]">
                Guidance: {cert.guidance}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#FAF8F2] rounded-2xl border border-[#E7DFD0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 text-[#77756D] hover:text-[#173D32] hover:bg-[#F5EBD9] rounded-full transition-colors"
              aria-label="Close certificate preview"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-[#B68A42]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B68A42]">
                Verified Devotional Certificate Record
              </span>
            </div>

            <h3 id="modal-cert-title" className="font-cormorant font-bold text-2xl text-[#173D32] mb-1">
              {selectedCert.achievement}
            </h3>

            <p className="text-sm font-semibold text-[#373A35] mb-4">
              Issued by: {selectedCert.organisation}
              {selectedCert.programme && ` · ${selectedCert.programme}`}
            </p>

            {/* Document Representation */}
            <div className="bg-white rounded-xl border border-[#E7DFD0] p-8 text-center my-6 space-y-4 shadow-inner">
              <Award size={48} className="text-[#B68A42] mx-auto" />
              <div className="space-y-1">
                <p className="font-cormorant font-bold text-xl text-[#173D32]">
                  {selectedCert.organisation}
                </p>
                {selectedCert.programme && (
                  <p className="text-xs uppercase tracking-wider text-[#77756D]">
                    {selectedCert.programme}
                  </p>
                )}
              </div>

              <div className="py-4 border-y border-[#E7DFD0]">
                <p className="font-cormorant text-lg text-[#373A35] italic">
                  &ldquo;{selectedCert.achievement}&rdquo;
                </p>
                {selectedCert.guidance && (
                  <p className="text-xs text-[#77756D] mt-2">
                    Under the divine guidance of: <strong>{selectedCert.guidance}</strong>
                  </p>
                )}
              </div>

              <p className="text-[0.7rem] text-[#77756D]">
                Asset reference: {selectedCert.imagePath}
                <br />
                Original archival scan stored in repository under <code className="bg-[#FAF8F2] px-1 py-0.5 rounded">public/images/certificates/</code>
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
