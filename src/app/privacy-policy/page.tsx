import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | DEVAMRUTAM',
  description:
    'Our commitment to privacy, data protection, and child safety at DEVAMRUTAM.',
};

export default function PrivacyPolicyPage() {
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
            गोपनीयता नीति
          </span>
          <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-2">
            Privacy Policy &amp; Child Safety Notice
          </h1>
          <p className="text-xs text-[#77756D]">
            Last updated: November 2026 · Initial Launch Draft (Pending Formal Legal Review)
          </p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl border border-[#E7DFD0] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#373A35] leading-relaxed">
          <div className="p-4 bg-[#F5EBD9]/60 rounded-xl border border-[#E7DFD0] text-xs text-[#173D32]">
            <strong>Important Legal Notice:</strong> This privacy policy sets out how DEVAMRUTAM handles personal information. As an initiative serving children and families, our core principle is minimal data collection and respectful engagement. This draft is subject to formal legal review before digital transactions go live.
          </div>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              1. Child Privacy &amp; Parental Consent
            </h2>
            <p>
              DEVAMRUTAM is dedicated to spiritual and cultural education for children. We adhere strictly to responsible data principles:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#77756D]">
              <li>We do not create individual student/child accounts in Version 1.</li>
              <li>We never request or collect a child&apos;s direct personal telephone number, personal email address, or home address.</li>
              <li>All admission enquiries and programme communications are directed strictly through parents or verified adult guardians.</li>
              <li>We do not publish child recordings, photographs, or names on public digital channels without explicit parental consent.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              2. Information We Collect
            </h2>
            <p>
              When a parent or guardian interacts with our platform via our enquiry or contact forms, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#77756D]">
              <li><strong>Contact Information:</strong> Parent full name, email address, and optional phone/WhatsApp number.</li>
              <li><strong>Academic Preferences:</strong> Selected course of interest, child age band (e.g. 5–7 years), preferred teaching language (Telugu, English, Hindi), and optional parent notes.</li>
              <li><strong>Technical Metadata:</strong> Standard anonymised access logs (browser type, timestamp) for website performance and spam prevention.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              3. Purpose of Processing
            </h2>
            <p>We process information solely for the following legitimate purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#77756D]">
              <li>Responding to parent enquiries and discussing course schedules.</li>
              <li>Communicating webinar details, cultural competition announcements, or store product updates upon request.</li>
              <li>Ensuring security, preventing form abuse, and safeguarding our web infrastructure.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              4. Data Retention &amp; Security
            </h2>
            <p>
              Submitted enquiries are stored securely using encrypted server connections and Row Level Security on trusted database infrastructure. We do not sell, rent, or lease personal data to any third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you wish to update or delete your enquiry details, or have questions regarding our privacy practices, please contact our administrator at{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#173D32] font-semibold underline">
                {siteConfig.contactEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
