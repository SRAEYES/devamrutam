import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Sparkles, Users } from 'lucide-react';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events & Celebrations | DEVAMRUTAM SANNIDHYAM',
  description:
    'Upcoming devotional celebrations, festival programmes, Bhagavad Gita quizzes, and cultural activities for children and families.',
};

export default function EventsDirectoryPage() {
  const festivalEvents = events.filter((e) => e.category === 'festival');
  const childrenEvents = events.filter((e) => e.category === 'children');

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
              उत्सवामृतम् एवं बालोत्सवम्
            </span>
            <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-3">
              Devotional Events &amp; Celebrations
            </h1>
            <p className="text-[#77756D] text-sm sm:text-base leading-relaxed">
              Join DEVAMRUTAM in celebrating sacred festivals and encouraging children through recitation competitions, quizzes, and traditional cultural activities.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 space-y-16">
        {/* Festival Events */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🪔</span>
            <div>
              <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
                Festival Celebrations (Utsava Amṛtam)
              </h2>
              <p className="text-xs text-[#77756D]">
                Devotional celebrations bringing families together for sacred occasions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {festivalEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5EBD9] text-[#77756D] uppercase">
                      Coming Soon
                    </span>
                    <span className="text-xs text-[#77756D] flex items-center gap-1">
                      <MapPin size={13} className="text-[#B68A42]" />
                      {evt.isOnline ? 'Online Gathering' : evt.location || 'TBD'}
                    </span>
                  </div>

                  {evt.titleSanskrit && (
                    <span className="font-devanagari text-xs text-[#B68A42] block mb-1">
                      {evt.titleSanskrit}
                    </span>
                  )}
                  <h3 className="font-cormorant font-bold text-xl text-[#173D32] mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#373A35] leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DFD0] flex items-center justify-between">
                  <span className="text-xs text-[#77756D]">
                    <strong>Audience:</strong> {evt.audience}
                  </span>
                  <Link
                    href={`/contact?category=community&event=${encodeURIComponent(evt.title)}`}
                    className="text-xs font-semibold text-[#173D32] hover:text-[#B68A42] transition-colors"
                  >
                    Express Interest &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Children's Competitions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🌸</span>
            <div>
              <h2 className="font-cormorant font-bold text-2xl text-[#173D32]">
                Children&apos;s Activities &amp; Competitions (Bāla Utsavam)
              </h2>
              <p className="text-xs text-[#77756D]">
                Inspiring recitation competitions and educational quizzes for children.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {childrenEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5EBD9] text-[#77756D] uppercase">
                      Coming Soon
                    </span>
                    <span className="text-xs text-[#77756D] flex items-center gap-1">
                      <MapPin size={13} className="text-[#B68A42]" />
                      {evt.isOnline ? 'Online Format' : evt.location || 'TBD'}
                    </span>
                  </div>

                  <h3 className="font-cormorant font-bold text-xl text-[#173D32] mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#373A35] leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DFD0] flex items-center justify-between">
                  <span className="text-xs text-[#77756D]">
                    <strong>Audience:</strong> {evt.audience}
                  </span>
                  <Link
                    href={`/contact?category=community&event=${encodeURIComponent(evt.title)}`}
                    className="text-xs font-semibold text-[#173D32] hover:text-[#B68A42] transition-colors"
                  >
                    Stay Notified &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notification Box */}
        <div className="bg-[#F5EBD9] border border-[#E7DFD0] rounded-2xl p-8 text-center max-w-xl mx-auto">
          <Calendar size={28} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
            Want Early Notification for Upcoming Dates?
          </h3>
          <p className="text-xs text-[#77756D] leading-relaxed mb-5">
            Leave us a note via our contact form to receive priority registration details for all festival celebrations and children&apos;s competitions.
          </p>
          <Link
            href="/contact?category=community"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
          >
            Notify Me of Event Dates
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
