import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Refund Policy (Placeholder) | DEVAMRUTAM',
  description: 'Policy outline regarding cancellations and fee adjustments for upcoming paid modules.',
};

export default function RefundPolicyPage() {
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
            प्रतिदाय नीति
          </span>
          <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-2">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-[#77756D]">
            Structured placeholder framework to be officially enacted prior to transactional commerce.
          </p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl border border-[#E7DFD0] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#373A35] leading-relaxed">
          <div className="p-4 bg-[#FFF8E8] border border-[#E8D5A0] rounded-xl flex items-start gap-3 text-xs text-[#8A6A00]">
            <Clock size={18} className="flex-shrink-0 mt-0.5" />
            <span>
              <strong>Launch Status:</strong> In Version 1, DEVAMRUTAM operates exclusively through an enquiry-first system without online payment gateways or direct digital fees. This policy outlines the principles that will govern paid batches and store purchases once online payment is formally enabled.
            </span>
          </div>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              1. Gurukulam Educational Programmes
            </h2>
            <p>
              When structured batch fees are instituted, our proposed policy will guarantee:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#77756D]">
              <li><strong>Pre-Batch Cancellation:</strong> Full refund or cohort transfer available if requested at least 48 hours prior to the first live scheduled class.</li>
              <li><strong>Satisfaction Guarantee:</strong> If after the first introductory session a parent feels the cohort pace is unsuitable for their child, a prorated credit or refund option will be provided.</li>
              <li><strong>Rescheduling:</strong> Sessions cancelled by DEVAMRUTAM due to technical or instructor exigencies will always be compensated via makeup sessions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              2. Physical Devotional Products (Bhāṇḍāram)
            </h2>
            <p>
              For physical devotional items (Bhakti Packs, Tulasi malas, books):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#77756D]">
              <li>Items received in damaged or compromised condition during transit will be replaced promptly with photographic confirmation.</li>
              <li>Sacred consecrated items or devotional Japa malas that have been unpacked and used for chanting cannot be returned for hygiene and sanctity considerations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              3. Enquiries
            </h2>
            <p>
              For any questions regarding billing or prospective payment policies, reach out to{' '}
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
