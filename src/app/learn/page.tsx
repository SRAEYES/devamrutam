import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Users, Globe2, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { courses, getStatusLabel } from '@/data/courses';
import { getCourseWhatsAppUrl, getWhatsAppUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Gurukulam Learning Programmes | DEVAMRUTAM GURUKULAM',
  description:
    'Structured online spiritual education programmes for children. Learn Sanskrit shlokas, Bhagavad Gita wisdom, devotional stories, and traditional values.',
};

const courseIcons: Record<string, string> = {
  'bala-amrutam': '🌸',
  'shloka-saurabham': '📿',
  'gita-bodham': '📖',
  'katha-amrutam': '📜',
  'nitya-aradhana': '🪔',
};

export default function LearnCataloguePage() {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM GURUKULAM
          </div>
          <h1 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#173D32] leading-tight mb-4">
            Structured Spiritual Education for Young Hearts
          </h1>
          <p className="text-[#77756D] text-[1rem] sm:text-[1.05rem] leading-relaxed mb-6">
            Rooted in India&apos;s sacred traditions, our learning programmes are crafted with care to offer children an authentic, joyful, and foundational spiritual learning experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[0.85rem] text-[#373A35] pt-2">
            <span className="flex items-center gap-1.5">
              <Globe2 size={16} className="text-[#B68A42]" /> Multilingual: English, Telugu, Hindi, Tamil &amp; Odia
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={16} className="text-[#B68A42]" /> Interactive Small Batches
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-[#B68A42]" /> Direct WhatsApp Support
            </span>
          </div>
        </div>
      </section>

      {/* Catalogue List */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8 sm:space-y-10">
          {courses.map((course) => {
            const isEnquiryOpen = course.status === 'enquiry-open';
            const whatsappUrl = getCourseWhatsAppUrl(course.nameDisplay, course.nameSanskrit);

            return (
              <div
                key={course.slug}
                className="bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Course Info */}
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-3xl" aria-hidden="true">
                        {courseIcons[course.slug] || '🌸'}
                      </span>
                      <div>
                        <span className="font-devanagari text-[#B68A42] text-[0.95rem] block font-medium">
                          {course.nameSanskrit}
                        </span>
                        <h2 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] leading-snug">
                          {course.nameDisplay}
                        </h2>
                      </div>
                      <div className="ml-auto">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                            isEnquiryOpen
                              ? 'bg-[#EBF4F0] text-[#173D32] border border-[#B8D5C9]'
                              : 'bg-[#F5EBD9] text-[#77756D] border border-[#E7DFD0]'
                          }`}
                        >
                          {getStatusLabel(course.status)}
                        </span>
                      </div>
                    </div>

                    <p className="font-cormorant italic text-[#B68A42] text-[1.05rem] sm:text-[1.1rem] mb-4">
                      &ldquo;{course.positioningTagline}&rdquo;
                    </p>

                    <p className="text-[#373A35] text-[0.92rem] sm:text-[0.95rem] leading-relaxed mb-6">
                      {course.fullDescription}
                    </p>

                    {/* Topics covered */}
                    <div className="mb-6">
                      <h4 className="text-[0.75rem] font-bold uppercase tracking-wider text-[#77756D] mb-3">
                        Key Areas of Focus:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {course.topics.slice(0, 4).map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#373A35]">
                            <CheckCircle2 size={16} className="text-[#B68A42] mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-4 text-xs text-[#77756D] pt-4 border-t border-[#E7DFD0]">
                      <div>
                        <strong className="text-[#373A35]">Age Band:</strong> {course.ageGroupDisplay}
                      </div>
                      <div>
                        <strong className="text-[#373A35]">Languages:</strong> English, Telugu, Hindi, Tamil &amp; Odia
                      </div>
                      <div>
                        <strong className="text-[#373A35]">Duration:</strong> {course.duration}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: CTA card with WhatsApp Enquire */}
                  <div className="lg:col-span-4 bg-[#FAF8F2] rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-cormorant font-bold text-xl text-[#173D32] mb-2">
                        Admission &amp; Enquiries
                      </h3>
                      <p className="text-xs text-[#77756D] leading-relaxed mb-4">
                        Batches are kept small for personal guidance. Reach out directly on WhatsApp to discuss batch schedule and your child&apos;s background.
                      </p>
                      <div className="p-3 bg-[#F5EBD9]/70 rounded-xl border border-[#E7DFD0] text-xs text-[#173D32] mb-5">
                        <strong>WhatsApp Hotline:</strong> <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">+91 7205645789</a>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#173D32] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#102D25] transition-colors shadow-xs"
                      >
                        <MessageCircle size={16} className="text-[#D8BC83]" />
                        <span>Enquire for Admission</span>
                      </a>
                      <Link
                        href={`/learn/${course.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#173D32] text-[#173D32] text-xs sm:text-sm font-medium rounded-xl hover:bg-[#F5EBD9] transition-colors"
                      >
                        View Full Syllabus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Guidance Box */}
        <div className="mt-12 sm:mt-16 bg-[#F5EBD9] border border-[#E7DFD0] rounded-3xl p-7 sm:p-10 text-center max-w-2xl mx-auto shadow-xs">
          <BookOpen size={28} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
            Have Questions About Course Placement?
          </h3>
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed mb-6 max-w-md mx-auto">
            Our founder personally reviews each child&apos;s readiness, linguistic preference, and spiritual background to assign the most encouraging batch.
          </p>
          <a
            href={getWhatsAppUrl('Hare Krishna! I would like guidance on which DEVAMRUTAM programme is right for my child.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#173D32] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#102D25] transition-colors shadow-sm"
          >
            <MessageCircle size={16} className="text-[#D8BC83]" />
            <span>Chat on WhatsApp (+91 7205645789)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
