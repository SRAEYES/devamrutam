import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, HelpCircle, MessageCircle } from 'lucide-react';
import SpiritualIcon, { type SpiritualIconName } from "@/components/icons/SpiritualIcons";
import { courses, getCourseBySlug, getStatusLabel } from '@/data/courses';
import { getCourseWhatsAppUrl } from '@/lib/utils/whatsapp';

const courseIcons: Record<string, SpiritualIconName> = {
  "bala-amrutam": "lotus",
  "shloka-saurabham": "mala",
  "gita-bodham": "book",
  "katha-amrutam": "scroll",
  "nitya-aradhana": "diya",
};

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Programme Not Found | DEVAMRUTAM',
    };
  }

  return {
    title: `${course.nameDisplay} (${course.nameSanskrit}) | DEVAMRUTAM GURUKULAM`,
    description: course.shortDescription,
  };
}

export default async function SingleCoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const isEnquiryOpen = course.status === 'enquiry-open';
  const whatsappUrl = getCourseWhatsAppUrl(course.nameDisplay, course.nameSanskrit);

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FAF8F2] border-b border-[#E7DFD0] py-3.5">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#77756D]" aria-label="Breadcrumb">
            <Link href="/" className="max-lg:inline-block max-lg:py-2 hover:text-[#173D32] transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/learn" className="max-lg:inline-block max-lg:py-2 hover:text-[#173D32] transition-colors">
              Gurukulam
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#173D32] font-medium" aria-current="page">
              {course.nameDisplay}
            </span>
          </nav>
        </div>
      </div>

      {/* Course Hero */}
      <section className="bg-gradient-to-b from-[#F5EBD9] to-[#FAF8F2] py-12 sm:py-16 lg:py-20 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 lg:gap-14 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-xl bg-white/80 border border-[#E7DFD0] text-[#B68A42] flex items-center justify-center">
                <SpiritualIcon name={courseIcons[course.slug] ?? "lotus"} size={26} />
              </span>
              <span className="font-devanagari text-[#B68A42] text-lg font-medium">
                {course.nameSanskrit}
              </span>
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

            <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
              {course.nameDisplay}
            </h1>

            <p className="font-cormorant italic text-[#B68A42] text-lg sm:text-xl mb-6">
              &ldquo;{course.positioningTagline}&rdquo;
            </p>

            <p className="text-[#373A35] text-base sm:text-lg leading-relaxed mb-8 max-w-[60ch]">
              {course.fullDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#173D32] text-white font-semibold rounded-xl hover:bg-[#102D25] transition-colors text-sm shadow-sm"
              >
                <MessageCircle size={18} className="text-[#D8BC83]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
              {/* Quick Specs */}
              <div className="grid gap-4 p-5 sm:p-6 bg-white/90 rounded-2xl border border-[#E7DFD0] shadow-xs">
                <div>
                  <span className="text-xs uppercase text-[#77756D] block font-medium">Suggested Age</span>
                  <span className="font-bold text-sm text-[#173D32]">{course.ageGroupDisplay}</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-[#77756D] block font-medium">Teaching Languages</span>
                  <span className="font-bold text-sm text-[#173D32]">{course.teachingLanguages.join(', ')}</span>
                </div>
                <div >
                  <span className="text-xs uppercase text-[#77756D] block font-medium">Estimated Duration</span>
                  <span className="font-bold text-sm text-[#173D32]">{course.duration}</span>
                </div>
              </div>
  
            </div>
        </div>
      </section>

      {/* Course Detail Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12 sm:space-y-14">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Who Should Join */}
            <section aria-labelledby="who-heading">
              <h2 id="who-heading" className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-4">
                Who Should Join?
              </h2>
              <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6 text-[#373A35] text-sm leading-relaxed space-y-3">
                <p>
                  This programme is thoughtfully structured for children in the suggested age bracket of <strong>{course.ageGroupDisplay}</strong>. However, spiritual interest and reading readiness vary for each child.
                </p>
                <p>
                  Whether your child is taking their first steps in Sanskrit recitation or seeking to connect with the timeless stories of India&apos;s scriptures, this programme provides a warm, respectful, and nurturing environment.
                </p>
              </div>
            </section>

            {/* Learning Objectives */}
            <section aria-labelledby="objectives-heading">
              <h2 id="objectives-heading" className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-4">
                Learning Objectives
              </h2>
              <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6">
                <ul className="space-y-3">
                  {course.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#373A35]">
                      <CheckCircle size={18} className="text-[#B68A42] flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            </div>

            {/* Topics Covered */}
            <section aria-labelledby="topics-heading">
              <h2 id="topics-heading" className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-4">
                What Children Will Learn
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {course.topics.map((topic, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-[#E7DFD0] p-4 flex items-start gap-3 shadow-2xs">
                    <span className="text-[#B68A42] font-bold text-sm">0{i + 1}.</span>
                    <span className="text-sm text-[#373A35] leading-snug">{topic}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum Timeline */}
            <section aria-labelledby="curriculum-heading">
              <div className="flex items-center justify-between mb-4">
                <h2 id="curriculum-heading" className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32]">
                  Structured Curriculum
                </h2>
                <span className="text-xs text-[#77756D] font-medium">Weekly Modules</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-3.5">
                {course.curriculum.map((weekItem) => (
                  <div
                    key={weekItem.week}
                    className="bg-white rounded-2xl border border-[#E7DFD0] p-5 flex items-start gap-4 shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F5EBD9] text-[#173D32] font-bold flex items-center justify-center text-xs flex-shrink-0">
                      W{weekItem.week}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-[#173D32] mb-1">
                        {weekItem.title}
                      </h3>
                      {weekItem.description && (
                        <p className="text-xs text-[#77756D] leading-relaxed">
                          {weekItem.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Frequently Asked Questions */}
            {course.faqs && course.faqs.length > 0 && (
              <section aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-4 flex items-center gap-2">
                  <HelpCircle size={22} className="text-[#B68A42]" />
                  Frequently Asked Questions
                </h2>

                <div className="grid lg:grid-cols-2 gap-3 items-start">
                  {course.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="bg-white rounded-2xl border border-[#E7DFD0] p-5 group open:border-[#B68A42]/50 transition-colors shadow-2xs"
                    >
                      <summary className="font-semibold text-sm text-[#173D32] cursor-pointer list-none flex items-center justify-between">
                        <span>{faq.question}</span>
                        <span className="text-lg text-[#B68A42] font-bold group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="text-xs text-[#77756D] leading-relaxed pt-3 mt-3 border-t border-[#E7DFD0]">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Parent enrolment (single place for the online form) */}
            <section
              aria-labelledby="enrol-heading"
              className="bg-white rounded-3xl border border-[#D8BC83]/70 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider text-[#B68A42] font-bold block mb-1">
                  Parent Enrolment
                </span>
                <h2 id="enrol-heading" className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-1.5">
                  Begin Your Child&apos;s Journey
                </h2>
                <p className="text-sm text-[#77756D] leading-relaxed">
                  Message our founder for batch scheduling and cohort recommendations. Prefer a form? You can also submit an online enquiry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2.5 flex-shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#173D32] text-white text-sm font-semibold rounded-xl hover:bg-[#102D25] transition-colors"
                >
                  <MessageCircle size={16} className="text-[#D8BC83]" />
                  <span>Enquire via WhatsApp</span>
                </a>
                <Link
                  href={`/parent-enquiry?course=${course.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#173D32] text-[#173D32] text-sm font-semibold rounded-xl hover:bg-[#F5EBD9] transition-colors"
                >
                  Fill Out Online Form
                </Link>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}
