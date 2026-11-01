import type { Metadata } from 'next';
import { BookOpen, CheckCircle, Clock, Heart, Shield, Sparkles } from 'lucide-react';
import ParentEnquiryForm from '@/components/forms/ParentEnquiryForm';

export const metadata: Metadata = {
  title: 'Parent Enquiry | DEVAMRUTAM GURUKULAM',
  description:
    'Enquire for admission to DEVAMRUTAM Gurukulam spiritual learning programmes for children. Share your preferences for batch timings, age bands, and regional languages.',
};

export default function ParentEnquiryPage() {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM GURUKULAM
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Parent &amp; Guardian Admission Enquiry
          </h1>
          <p className="text-[#77756D] text-[1.05rem] leading-relaxed">
            Take the first step toward introducing your child to the joy of shlokas, sacred scripture stories, and timeless values.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-10 shadow-sm">
            <div className="mb-8 pb-4 border-b border-[#E7DFD0]">
              <h2 className="font-cormorant font-bold text-2xl text-[#173D32] mb-1">
                Programme Enquiry Form
              </h2>
              <p className="text-xs text-[#77756D]">
                Please provide your contact preferences below. All programmes are conducted with utmost care and respectful interaction.
              </p>
            </div>

            <ParentEnquiryForm />
          </div>

          {/* Right Column: Information & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F5EBD9]/60 rounded-2xl border border-[#E7DFD0] p-6 space-y-4">
              <h3 className="font-cormorant font-bold text-xl text-[#173D32]">
                Our Admissions Process
              </h3>
              <div className="space-y-3.5 text-xs text-[#373A35] leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#173D32] text-white flex items-center justify-center font-bold text-[0.7rem] flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="block text-[#173D32]">Submit Parent Form</strong>
                    Share your preferred language, programme, and convenient batch timings.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#173D32] text-white flex items-center justify-center font-bold text-[0.7rem] flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="block text-[#173D32]">Personalised Coordination</strong>
                    Our academic coordinator contacts you to review readiness and available peer groups.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#173D32] text-white flex items-center justify-center font-bold text-[0.7rem] flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="block text-[#173D32]">Begin the Journey</strong>
                    Receive access materials, orientation notes, and join live interactive sessions.
                  </div>
                </div>
              </div>
            </div>

            {/* Child Safety & Data Dignity */}
            <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#173D32] font-semibold text-sm">
                <Shield size={18} className="text-[#B68A42]" />
                Commitment to Child Privacy
              </div>
              <p className="text-[#77756D] leading-relaxed">
                We operate with strict child safety standards. We do not ask for children&apos;s direct phone numbers, personal emails, home addresses, or private documentation. Communications are held directly with the parent or legal guardian.
              </p>
            </div>

            {/* Teaching Languages note */}
            <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#173D32] font-semibold text-sm">
                <BookOpen size={18} className="text-[#B68A42]" />
                Multi-lingual Instruction
              </div>
              <p className="text-[#77756D] leading-relaxed">
                Classes can be facilitated in Telugu, English, and Hindi. While learning Sanskrit shlokas, explanations and values are communicated in the tongue the child feels most at home with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
