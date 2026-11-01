import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Users, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { courses, getStatusLabel } from '@/data/courses';

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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM GURUKULAM
          </div>
          <h1 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#173D32] leading-tight mb-4">
            Structured Spiritual Education for Young Hearts
          </h1>
          <p className="text-[#77756D] text-[1.05rem] leading-relaxed mb-6">
            Rooted in India&apos;s sacred traditions, our learning programmes are crafted with care to offer children an authentic, joyful, and foundational spiritual learning experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[0.85rem] text-[#373A35] pt-2">
            <span className="flex items-center gap-1.5">
              <Globe2 size={16} className="text-[#B68A42]" /> Teaching in Telugu, English &amp; Hindi
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={16} className="text-[#B68A42]" /> Interactive Small Batches
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-[#B68A42]" /> Flexible Parent Enquiries
            </span>
          </div>
        </div>
      </section>

      {/* Catalogue List */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {courses.map((course, idx) => {
            const isEnquiryOpen = course.status === 'enquiry-open';
            return (
              <div
                key={course.slug}
                className="bg-white rounded-2xl border border-[#E7DFD0] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
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

                    <p className="font-cormorant italic text-[#B68A42] text-[1.1rem] mb-4">
                      &ldquo;{course.positioningTagline}&rdquo;
                    </p>

                    <p className="text-[#373A35] text-[0.95rem] leading-relaxed mb-6">
                      {course.fullDescription}
                    </p>

                    {/* Topics covered */}
                    <div className="mb-6">
                      <h4 className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#77756D] mb-3">
                        Key Areas of Focus:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {course.topics.slice(0, 4).map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[#373A35]">
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
                        <strong className="text-[#373A35]">Languages:</strong> {course.teachingLanguages.join(', ')}
                      </div>
                      <div>
                        <strong className="text-[#373A35]">Duration:</strong> {course.duration}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: CTA card */}
                  <div className="lg:col-span-4 bg-[#FAF8F2] rounded-xl border border-[#E7DFD0] p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-cormorant font-semibold text-lg text-[#173D32] mb-2">
                        Admission &amp; Enquiries
                      </h3>
                      <p className="text-xs text-[#77756D] leading-relaxed mb-4">
                        Admissions for DEVAMRUTAM Gurukulam are currently accepted on an enquiry basis. Batches are kept small to give personalised attention to each young learner.
                      </p>
                      <div className="p-3 bg-[#F5EBD9]/60 rounded-lg border border-[#E7DFD0] text-xs text-[#173D32] mb-6">
                        <strong>Note:</strong> Suggested age ranges are guidelines. Parents are invited to discuss readiness during enquiry.
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link
                        href={`/learn/${course.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#173D32] text-[#173D32] text-sm font-medium rounded hover:bg-[#173D32] hover:text-white transition-colors duration-200"
                      >
                        View Full Curriculum
                      </Link>
                      <Link
                        href={`/parent-enquiry?course=${course.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#173D32] text-white text-sm font-medium rounded hover:bg-[#102D25] transition-colors duration-200"
                      >
                        Enquire for Admission
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Guidance Box */}
        <div className="mt-14 bg-[#F5EBD9] border border-[#E7DFD0] rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <BookOpen size={28} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-semibold text-2xl text-[#173D32] mb-2">
            Have Questions About Which Programme Fits Your Child?
          </h3>
          <p className="text-sm text-[#77756D] leading-relaxed mb-6 max-w-xl mx-auto">
            Our team is happy to speak with parents regarding syllabus content, pronunciation guidance, and teaching pace.
          </p>
          <Link
            href="/parent-enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-white text-sm font-medium rounded hover:bg-[#102D25] transition-colors duration-200"
          >
            Submit a Parent Enquiry
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
