import type { Metadata } from 'next';
import SpiritualIcon, { type SpiritualIconName } from "@/components/icons/SpiritualIcons";
import SacredBackground from "@/components/background/SacredBackground";
import Link from 'next/link';
import { ArrowRight, MapPin, Sparkles, CalendarDays, Wifi } from 'lucide-react';
import { getUpcomingEvents } from '@/data/events';

export const metadata: Metadata = {
  title: 'Community | DEVAMRUTAM SANNIDHYAM',
  description:
    'Devotional gatherings, festival celebrations, workshops, webinars, and cultural activities for children and families.',
};

export default function CommunityPage() {
  const upcomingEvents = getUpcomingEvents();

  const categories = [
    {
      title: 'UTSAVA AMṚTAM',
      sanskrit: 'उत्सवामृतम्',
      headline: 'Festival Celebrations',
      desc: 'Online and community celebrations for auspicious festivals such as Karthika Deepam, Janmashtami, and Rama Navami.',
      icon: 'diya' as SpiritualIconName,
    },
    {
      title: 'JÑĀNA VĒDIKA',
      sanskrit: 'ज्ञानवेदिका',
      headline: 'Knowledge & Discourses',
      desc: 'Special lectures, guest speaker interactions, webinars, and guided spiritual discussions on scripture and value-based living.',
      icon: 'conch' as SpiritualIconName,
    },
    {
      title: 'BHAKTI UTSAVAM',
      sanskrit: 'भक्तिउत्सवम्',
      headline: 'Devotional Programmes',
      desc: 'Bhajan gatherings, devotional recitation, kirtan sessions, and cultural celebrations celebrating the beauty of Indian heritage.',
      icon: 'mala' as SpiritualIconName,
    },
    {
      title: 'BĀLA UTSAVAM',
      sanskrit: 'बालोत्सवम्',
      headline: "Children's Cultural Activities",
      desc: 'Shloka recitation contests, Bhagavad Gita quizzes, creative storytelling, art activities, and traditional games for kids.',
      icon: 'flower' as SpiritualIconName,
    },
  ];

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-16 pb-14 border-b border-[#E7DFD0]">
        <SacredBackground variant="community" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM SANNIDHYAM
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Come Together. Celebrate. Learn. Experience.
          </h1>
          <p className="text-[#77756D] text-[1.05rem] leading-relaxed mb-8">
            Discover opportunities to connect through devotional celebrations, cultural programmes, workshops, and meaningful learning experiences for families.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/community/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-white text-sm font-medium rounded-lg hover:bg-[#102D25] transition-colors"
            >
              Browse Events
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/community/workshops"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#173D32] text-[#173D32] text-sm font-medium rounded-lg hover:bg-[#F5EBD9] transition-colors"
            >
              Workshops &amp; Webinars
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Community Divisions */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-3">
            Our Community Initiatives
          </h2>
          <p className="text-sm text-[#77756D]">
            DEVAMRUTAM Sannidhyam is structured into four experiential initiatives connecting traditional culture with modern families.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7DFD0] p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="w-12 h-12 rounded-xl bg-[#F5EBD9] text-[#B68A42] flex items-center justify-center mb-4">
                  <SpiritualIcon name={cat.icon} size={28} />
                </span>
                <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
                  {cat.sanskrit}
                </span>
                <h3 className="font-cormorant font-bold text-lg text-[#173D32] mb-1">
                  {cat.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#77756D] uppercase tracking-wider mb-3">
                  {cat.headline}
                </h4>
                <p className="text-xs text-[#373A35] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming / Upcoming Empty state */}
      <section className="bg-[#F5EBD9]/60 border-y border-[#E7DFD0] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B68A42] font-semibold block mb-1">
                Calendar &amp; Gatherings
              </span>
              <h2 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32]">
                Scheduled Experiences
              </h2>
            </div>
            <Link
              href="/community/events"
              className="text-xs font-semibold text-[#173D32] hover:text-[#B68A42] transition-colors mt-2 sm:mt-0 flex items-center gap-1"
            >
              View Full Events Directory &rarr;
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((evt) => (
                <div key={evt.id} className="bg-white rounded-xl border border-[#E7DFD0] p-6 flex flex-col hover:border-[#D8BC83] hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF4F0] text-[#173D32] uppercase">
                      {evt.category}
                    </span>
                    {evt.isOnline && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#77756D]">
                        <Wifi size={12} className="text-[#B68A42]" /> Online
                      </span>
                    )}
                  </div>
                  <h3 className="font-cormorant font-bold text-lg text-[#173D32] mt-3 mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#77756D] mb-4">{evt.description}</p>
                  <p className="text-xs text-[#373A35]">
                    <strong>Audience:</strong> {evt.audience}
                  </p>
                  {(evt.date || evt.location) && (
                    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#373A35] mt-2">
                      {evt.date && (
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={13} className="text-[#B68A42]" />
                          {new Date(evt.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                          {evt.time ? `, ${evt.time}` : ""}
                        </span>
                      )}
                      {evt.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} className="text-[#B68A42]" /> {evt.location}
                        </span>
                      )}
                    </p>
                  )}
                  <a
                    href={evt.registrationUrl ?? `/contact?category=community`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#173D32] hover:text-[#B68A42] transition-colors"
                  >
                    {evt.registrationUrl ? "Register" : "Enquire"} <ArrowRight size={13} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E7DFD0] p-10 text-center max-w-xl mx-auto">
              <SpiritualIcon name="diya" size={44} className="text-[#B68A42] mx-auto mb-3" />
              <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
                New Experiences are Coming Soon
              </h3>
              <p className="text-sm text-[#77756D] leading-relaxed mb-6">
                Stay connected with DEVAMRUTAM as we prepare our festival programmes, Bhagavad Gita quizzes, and guest-speaker interactions.
              </p>
              <Link
                href="/contact?category=community"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
              >
                Express Community Interest
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Community Collaboration CTA */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <SpiritualIcon name="people" size={38} className="text-[#B68A42] mx-auto mb-3" />
          <h2 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-3">
            Interested in Collaborating?
          </h2>
          <p className="text-sm text-[#77756D] leading-relaxed mb-6">
            If you represent a cultural committee, educational group, or are a devotional practitioner interested in conducting a workshop or guest talk for children, we would love to hear from you.
          </p>
          <Link
            href="/contact?category=workshop"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#173D32] text-[#173D32] text-sm font-medium rounded-lg hover:bg-[#173D32] hover:text-white transition-colors"
          >
            Submit Collaboration Proposal
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
