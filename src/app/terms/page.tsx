import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Use | DEVAMRUTAM',
  description: 'Terms and conditions governing the use of the DEVAMRUTAM website and educational resources.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <div className="bg-gradient-to-b from-[#F5EBD9] to-[#FAF8F2] py-14 border-b border-[#E7DFD0]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#77756D] hover:text-[#173D32] transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
            नियम एवं शर्तें
          </span>
          <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#77756D]">
            Last updated: November 2026 · Initial Launch Terms
          </p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl border border-[#E7DFD0] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#373A35] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website ({siteConfig.name}), you agree to be bound by these Terms and Conditions. DEVAMRUTAM provides educational resources, devotional community announcements, and product showcases subject to the guidelines stated herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              2. Educational Purpose
            </h2>
            <p>
              DEVAMRUTAM is an educational and cultural initiative. Course content, shloka recitations, and spiritual stories are provided for moral, devotional, and cultural enrichment. Age categories specified on the site are recommendations for parents rather than legal boundaries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              3. Intellectual Property &amp; Trademarks
            </h2>
            <p>
              All proprietary brand graphics, custom curriculum outlines, website text, and designs are the intellectual property of DEVAMRUTAM and its founder. Sacred scripture verses and traditional Sanskrit stotras belong to the timeless public heritage of Sanatana Dharma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              4. Enquiry &amp; Registration Basis
            </h2>
            <p>
              In Version 1, submitting an enquiry does not constitute a guaranteed enrolment contract. Admittance to Gurukulam cohorts depends on instructor availability and mutual parent confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              5. Governing Law &amp; Inquiries
            </h2>
            <p>
              These terms are governed by the laws of India. For any legal or operational queries, please reach us at{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#173D32] underline font-medium">
                {siteConfig.contactEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
