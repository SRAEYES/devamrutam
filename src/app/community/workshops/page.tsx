import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Mic, Sparkles, Video } from 'lucide-react';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Workshops & Webinars | DEVAMRUTAM SANNIDHYAM',
  description:
    'Online workshops, parent guidance sessions, guest-speaker discourses, and webinars on spiritual practices and family values.',
};

export default function WorkshopsPage() {
  const workshopEvents = events.filter((e) => e.category === 'workshop' || e.category === 'lecture');

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#77756D] hover:text-[#173D32] transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Community Overview
          </Link>
          <div className="max-w-2xl">
            <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
              ज्ञानवेदिका कार्यशाला
            </span>
            <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-3">
              Workshops, Webinars &amp; Discourses
            </h1>
            <p className="text-[#77756D] text-sm sm:text-base leading-relaxed">
              Engaging learning sessions, parent orientation talks, and guest lectures exploring the application of timeless spiritual wisdom to modern daily life.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 space-y-12">
        {/* Workshop Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {workshopEvents.length > 0 ? (
            workshopEvents.map((w) => (
              <div
                key={w.id}
                className="bg-white rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EBF4F0] text-[#173D32] uppercase">
                      Webinar
                    </span>
                    <span className="text-xs text-[#77756D] flex items-center gap-1">
                      <Video size={13} className="text-[#B68A42]" /> Online
                    </span>
                  </div>

                  <h2 className="font-cormorant font-bold text-xl text-[#173D32] mb-2">
                    {w.title}
                  </h2>
                  <p className="text-xs text-[#373A35] leading-relaxed mb-4">
                    {w.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DFD0] flex items-center justify-between">
                  <span className="text-xs text-[#77756D]">
                    <strong>Target:</strong> {w.audience}
                  </span>
                  <Link
                    href={`/contact?category=workshop&title=${encodeURIComponent(w.title)}`}
                    className="text-xs font-semibold text-[#173D32] hover:text-[#B68A42] transition-colors"
                  >
                    Enquire / Register &rarr;
                  </Link>
                </div>
              </div>
            ))
          ) : null}

          {/* Planned topics preview */}
          <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5EBD9] text-[#77756D] uppercase">
                  Proposed Topic
                </span>
                <span className="text-xs text-[#77756D] flex items-center gap-1">
                  <Mic size={13} className="text-[#B68A42]" /> Guest Discourse
                </span>
              </div>
              <h2 className="font-cormorant font-bold text-xl text-[#173D32] mb-2">
                Nurturing Spiritual Habits at Home: A Guide for Parents
              </h2>
              <p className="text-xs text-[#373A35] leading-relaxed mb-4">
                Practical approaches for parents to seamlessly incorporate shloka recitation, gratitude, and moral storytelling into children&apos;s daily routines without pressure.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E7DFD0] flex items-center justify-between">
              <span className="text-xs text-[#77756D]">
                <strong>Audience:</strong> Parents &amp; Guardians
              </span>
              <Link
                href="/contact?category=workshop"
                className="text-xs font-semibold text-[#173D32] hover:text-[#B68A42] transition-colors"
              >
                Register Interest &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Propose a Workshop CTA */}
        <div className="bg-gradient-to-r from-[#F5EBD9] via-[#FAF8F2] to-[#F5EBD9] border border-[#E7DFD0] rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <GraduationCap size={32} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
            Propose a Lecture or Workshop Session
          </h3>
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed mb-6">
            Are you a speaker or educator who shares our vision for culturally grounded, spiritually inspiring children&apos;s education? We welcome meaningful collaboration proposals.
          </p>
          <Link
            href="/contact?category=workshop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
          >
            Submit Speaker Proposal
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
