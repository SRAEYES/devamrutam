import type { Metadata } from 'next';
import SpiritualIcon, { type SpiritualIconName } from "@/components/icons/SpiritualIcons";
import ProgrammeCard from "@/components/courses/ProgrammeCard";
import SacredBackground from "@/components/background/SacredBackground";
import Link from 'next/link';
import { Users, Sparkles } from 'lucide-react';
import { courses, getStatusLabel } from '@/data/courses';
import { getCourseWhatsAppUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Gurukulam Learning Programmes | DEVAMRUTAM GURUKULAM',
  description:
    'Structured online spiritual education programmes for children. Learn Sanskrit shlokas, Bhagavad Gita wisdom, devotional stories, and traditional values.',
};

const courseIcons: Record<string, SpiritualIconName> = {
  "bala-amrutam": "lotus",
  "shloka-saurabham": "mala",
  "gita-bodham": "book",
  "katha-amrutam": "scroll",
  "nitya-aradhana": "diya",
};

const enquirySteps = [
  { title: "Choose a programme", text: "Browse the programmes below and find the age band that fits your child.", icon: "book" as SpiritualIconName },
  { title: "Get in touch", text: "Share your child's age, language preference and background.", icon: "flower" as SpiritualIconName },
  { title: "Get a suitable batch", text: "We personally review readiness and suggest the right small batch.", icon: "lotus" as SpiritualIconName },
];

export default function LearnCataloguePage() {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <SacredBackground variant="learn" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
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
              <Users size={16} className="text-[#B68A42]" /> Interactive Small Batches
            </span>
          </div>
        </div>
      </section>

      {/* How enquiry works */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 pt-10 sm:pt-12" aria-labelledby="how-enquiry-heading">
        <h2 id="how-enquiry-heading" className="sr-only">How enquiry works</h2>
        <ol className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {enquirySteps.map((step, i) => (
            <li key={step.title} className="flex gap-4 bg-white border border-[#E7DFD0] rounded-2xl p-5">
              <span className="w-11 h-11 rounded-xl bg-[#F5EBD9] text-[#B68A42] flex items-center justify-center flex-shrink-0">
                <SpiritualIcon name={step.icon} size={26} />
              </span>
              <div>
                <p className="font-cormorant font-bold text-[1.15rem] text-[#173D32] leading-tight">
                  {i + 1}. {step.title}
                </p>
                <p className="text-xs text-[#77756D] leading-relaxed mt-1">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Catalogue List */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          {courses.map((course) => (
            <ProgrammeCard
              key={course.slug}
              course={course}
              icon={courseIcons[course.slug] ?? "lotus"}
              statusLabel={getStatusLabel(course.status)}
              whatsappUrl={getCourseWhatsAppUrl(course.nameDisplay, course.nameSanskrit)}
            />
          ))}
        </div>

        {/* Know more about us */}
        <div className="mt-12 sm:mt-16 bg-[#F5EBD9] border border-[#E7DFD0] rounded-3xl p-7 sm:p-10 text-center max-w-2xl mx-auto shadow-xs">
          <SpiritualIcon name="lotus" size={34} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
            Know More About DEVAMRUTAM
          </h3>
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed mb-6 max-w-md mx-auto">
            Learn about our vision, our founder and the journey behind these programmes.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#173D32] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#102D25] transition-colors shadow-sm"
          >
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
