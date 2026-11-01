import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, PackageCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy (Placeholder) | DEVAMRUTAM',
  description: 'Shipping timelines, dispatch guidelines, and logistics framework for devotional products.',
};

export default function ShippingPolicyPage() {
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
            प्रेषण नीति
          </span>
          <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-2">
            Shipping &amp; Delivery Policy
          </h1>
          <p className="text-xs text-[#77756D]">
            Structured placeholder framework to be finalised before physical product sales go live.
          </p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl border border-[#E7DFD0] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#373A35] leading-relaxed">
          <div className="p-4 bg-[#FFF8E8] border border-[#E8D5A0] rounded-xl flex items-start gap-3 text-xs text-[#8A6A00]">
            <Clock size={18} className="flex-shrink-0 mt-0.5" />
            <span>
              <strong>Showcase Phase:</strong> DEVAMRUTAM Bhāṇḍāram items are currently presented for preview and curated enquiries. Automated shipping dispatch will be activated with our verified logistics partners. The guidelines below reflect our delivery commitments.
            </span>
          </div>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              1. Domestic Shipping (India)
            </h2>
            <p>
              Once physical dispatch commences, shipments across India will be handled via reputable courier services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#77756D]">
              <li><strong>Processing Time:</strong> Orders are processed within 2–4 business days of confirmation.</li>
              <li><strong>Estimated Delivery:</strong> Metro cities typically receive delivery within 3–5 working days; non-metro locations within 5–7 working days.</li>
              <li><strong>Tracking:</strong> End-to-end tracking IDs will be shared via email and WhatsApp upon dispatch.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              2. Packaging &amp; Reverence
            </h2>
            <p>
              Devotional items (scriptures, Japa bags, Tulasi malas, and Puja articles) are packed with dignity, using eco-conscious and protective cushioning to ensure they arrive in pristine, reverent condition.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              3. International Shipping
            </h2>
            <p>
              International shipping options for diaspora families (USA, UK, Middle East, Singapore) are planned for subsequent phases. Inquiries for special international family hampers may be discussed directly via our contact form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              4. Logistics Assistance
            </h2>
            <p>
              For shipping status inquiries or specific delivery requests, please email us at{' '}
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
