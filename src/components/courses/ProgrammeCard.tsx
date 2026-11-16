import Link from "next/link";
import { MessageCircle, Check } from "lucide-react";
import SpiritualIcon, { type SpiritualIconName } from "@/components/icons/SpiritualIcons";
import type { Course } from "@/types";

interface ProgrammeCardProps {
  course: Course;
  icon: SpiritualIconName;
  statusLabel: string;
  whatsappUrl: string;
}

/** "To be confirmed — estimated 6 weeks" -> "Estimated 6 weeks (to be confirmed)"; bare "To be confirmed" -> null */
function summariseDuration(duration: string): string | null {
  const m = duration.match(/estimated\s+(.+)$/i);
  if (m) return `Estimated ${m[1]} (to be confirmed)`;
  return /to be confirmed/i.test(duration) ? null : duration;
}

export default function ProgrammeCard({ course, icon, statusLabel, whatsappUrl }: ProgrammeCardProps) {
  const duration = summariseDuration(course.duration);
  const sessionFormat = course.teachingFormat.split(" with ")[0];

  return (
    <article
      className="scroll-mt-28 bg-white rounded-2xl border border-[#E7DFD0] p-5 sm:p-7 shadow-xs"
      aria-labelledby={`title-${course.slug}`}
    >
      <div className="grid lg:grid-cols-[minmax(0,13fr)_minmax(0,7fr)] gap-6 lg:gap-8 items-start">
        {/* Overview (≈65%) */}
        <div>
          <div className="flex items-center gap-3.5 mb-3">
            <span className="w-11 h-11 rounded-xl bg-[#F5EBD9] text-[#B68A42] flex items-center justify-center flex-shrink-0">
              <SpiritualIcon name={icon} size={26} />
            </span>
            <div>
              <span className="font-devanagari text-[#B68A42] text-[0.95rem] block font-medium leading-tight">
                {course.nameSanskrit}
              </span>
              <h2
                id={`title-${course.slug}`}
                className="font-cormorant font-bold text-2xl sm:text-[1.9rem] text-[#173D32] leading-tight"
              >
                {course.nameDisplay}
              </h2>
            </div>
          </div>

          <p className="font-cormorant italic text-[#B68A42] text-[1.1rem] mb-2">
            &ldquo;{course.positioningTagline}&rdquo;
          </p>
          <p className="text-[#373A35] text-[0.92rem] leading-relaxed mb-4 max-w-[62ch]">
            {course.shortDescription}
          </p>

          <dl className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-[#77756D] mb-4">
            <div className="flex gap-1.5">
              <dt className="font-semibold text-[#373A35]">Age:</dt>
              <dd>{course.ageGroupDisplay}</dd>
            </div>
            {duration && (
              <div className="flex gap-1.5">
                <dt className="font-semibold text-[#373A35]">Duration:</dt>
                <dd>{duration}</dd>
              </div>
            )}
            <div className="flex gap-1.5">
              <dt className="font-semibold text-[#373A35]">Languages:</dt>
              <dd>{course.teachingLanguages.join(", ")}</dd>
            </div>
          </dl>

          <ul className="space-y-1.5">
            {course.topics.slice(0, 3).map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-[#373A35]">
                <Check size={16} className="text-[#B68A42] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Admission panel (≈35%) — height follows content */}
        <aside
          aria-label={`Admission for ${course.nameDisplay}`}
          className="bg-[#FAF8F2] rounded-2xl border border-[#D8BC83]/70 p-5"
        >
          <span className="inline-block text-[0.68rem] font-semibold uppercase tracking-wider text-[#173D32] bg-[#EBF4F0] border border-[#B8D5C9] rounded-full px-2.5 py-0.5 mb-3">
            {statusLabel}
          </span>
          <h3 className="font-cormorant font-bold text-[1.4rem] text-[#173D32] leading-tight mb-1.5">
            Begin Your Child&apos;s Journey
          </h3>
          <p className="text-xs text-[#77756D] leading-relaxed mb-3">
            Small, interactive online batches designed to make spiritual learning joyful and meaningful.
          </p>
          <dl className="text-xs text-[#373A35] space-y-1 mb-4 pb-4 border-b border-[#E7DFD0]">
            <div className="flex gap-1.5">
              <dt className="font-semibold">Age:</dt>
              <dd>{course.ageGroupDisplay}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="font-semibold">Format:</dt>
              <dd>{sessionFormat}</dd>
            </div>
          </dl>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#173D32] text-white text-sm font-semibold rounded-xl hover:bg-[#102D25] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
          >
            <MessageCircle size={16} className="text-[#D8BC83]" aria-hidden="true" />
            Enquire for Admission
          </a>
          <Link
            href={`/learn/${course.slug}`}
            className="mt-2.5 w-full inline-flex items-center justify-center px-5 py-2.5 border border-[#173D32] text-[#173D32] text-sm font-medium rounded-xl hover:bg-[#F5EBD9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
          >
            View Programme Details
          </Link>
        </aside>
      </div>

    </article>
  );
}
