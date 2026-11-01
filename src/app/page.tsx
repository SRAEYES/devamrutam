import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, ShoppingBag, Star, Heart, Lightbulb, BookMarked, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { courses, getStatusLabel } from '@/data/courses';
import { events, getUpcomingEvents } from '@/data/events';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.taglinePrimary}`,
  description: siteConfig.description,
};

const courseIcons: Record<string, string> = {
  'bala-amrutam': '🌸',
  'shloka-saurabham': '📿',
  'gita-bodham': '📖',
  'katha-amrutam': '📜',
  'nitya-aradhana': '🪔',
};

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents();
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* ── SECTION 2: HERO ─────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center bg-[#FAF8F2] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5EBD9]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8BC83]/8 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
          {/* Subtle mandala-inspired circle */}
          <div className="absolute top-1/4 right-[5%] w-80 h-80 border border-[#D8BC83]/20 rounded-full" />
          <div className="absolute top-1/4 right-[5%] w-64 h-64 border border-[#D8BC83]/15 rounded-full translate-x-8 translate-y-8" />
          <div className="absolute top-1/4 right-[5%] w-48 h-48 border border-[#D8BC83]/10 rounded-full translate-x-16 translate-y-16" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero text */}
            <div className="max-w-xl">
              {/* Sanskrit ornament */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#B68A42]" aria-hidden="true" />
                <span className="font-devanagari text-[#B68A42] text-[0.95rem] tracking-wide">
                  देवामृतम् गुरुकुलम्
                </span>
                <div className="h-px w-10 bg-[#B68A42]" aria-hidden="true" />
              </div>

              <h1
                id="hero-heading"
                className="font-cormorant font-semibold text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-[#173D32] mb-6"
              >
                Nurturing Young Hearts with{' '}
                <em className="not-italic text-[#B68A42]">Timeless Wisdom.</em>
              </h1>

              <p className="text-[1.05rem] text-[#77756D] leading-relaxed mb-8 max-w-[48ch]">
                Discover a joyful journey of shlokas, sacred stories, Bhagavad Gita wisdom and devotional
                practices — designed to introduce children to India&apos;s spiritual heritage.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#173D32] text-white font-medium rounded hover:bg-[#102D25] transition-colors duration-200 text-[0.95rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
                >
                  Explore Learning Programmes
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#173D32] text-[#173D32] font-medium rounded hover:bg-[#173D32] hover:text-white transition-colors duration-200 text-[0.95rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
                >
                  Discover Our Journey
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-[#E7DFD0]">
                <div className="text-center">
                  <p className="font-cormorant font-semibold text-[1.5rem] text-[#173D32]">5</p>
                  <p className="text-[0.75rem] text-[#77756D] uppercase tracking-wide">Programmes</p>
                </div>
                <div className="w-px h-8 bg-[#E7DFD0]" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-cormorant font-semibold text-[1.5rem] text-[#173D32]">3</p>
                  <p className="text-[0.75rem] text-[#77756D] uppercase tracking-wide">Languages</p>
                </div>
                <div className="w-px h-8 bg-[#E7DFD0]" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-cormorant font-semibold text-[1.5rem] text-[#173D32]">Ages 5+</p>
                  <p className="text-[0.75rem] text-[#77756D] uppercase tracking-wide">Audience</p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative cards */}
                <div className="absolute inset-0 bg-[#F5EBD9] rounded-2xl rotate-3 opacity-50" />
                <div className="absolute inset-0 bg-[#FAF8F2] rounded-2xl border border-[#E7DFD0] overflow-hidden">
                  {/* Placeholder illustration area */}
                  <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F5EBD9] to-[#FAF8F2] p-10">
                    <div className="text-center">
                      <div className="font-devanagari text-[5rem] leading-none text-[#B68A42]/40 mb-4 select-none">
                        ॐ
                      </div>
                      <p className="font-cormorant text-[1.4rem] text-[#173D32]/60 italic">
                        The Nectar of Divine Wisdom
                      </p>
                      <p className="font-devanagari text-[#B68A42]/60 text-[1rem] mt-2">
                        देवामृतम्
                      </p>
                    </div>
                    {/* Course preview chips */}
                    <div className="mt-8 flex flex-wrap gap-2 justify-center">
                      {['Sanskrit Shlokas', 'Bhagavad Gita', 'Devotional Stories', 'Sacred Practices'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/60 border border-[#E7DFD0] text-[#77756D] text-[0.75rem] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-4 -right-6 bg-white rounded-xl border border-[#E7DFD0] shadow-md px-5 py-4 max-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-[#F5EBD9] rounded-full flex items-center justify-center text-sm">🌸</div>
                    <span className="text-[0.7rem] text-[#77756D] uppercase tracking-wide">Now Open</span>
                  </div>
                  <p className="font-cormorant font-semibold text-[0.95rem] text-[#173D32]">Bāla Amṛtam</p>
                  <p className="text-[0.7rem] text-[#77756D] mt-0.5">Ages 5–9 · Enquiry Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BRAND INTRODUCTION ─────────────────────────────────────── */}
      <section className="py-20 bg-[#173D32]" aria-labelledby="brand-intro-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-devanagari text-[#B68A42] text-[0.9rem] tracking-wide mb-3">
              Our Philosophy
            </p>
            <h2
              id="brand-intro-heading"
              className="font-cormorant font-semibold text-[2.2rem] sm:text-[2.8rem] text-[#F5EBD9] leading-tight mb-4"
            >
              A Little Wisdom Today.{' '}
              <span className="text-[#D8BC83]">A Lifetime of Values Tomorrow.</span>
            </h2>
            <p className="text-[#D8BC83]/70 text-[1rem] leading-relaxed">
              DEVAMRUTAM brings traditional spiritual learning into a modern and engaging environment for children.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                word: 'LEARN',
                devanagari: 'अध्ययन',
                description: 'Discover sacred texts, shlokas and stories from India\'s timeless spiritual heritage.',
                icon: BookOpen,
              },
              {
                word: 'PRACTISE',
                devanagari: 'अभ्यास',
                description: 'Develop pronunciation, build devotional discipline and cultivate meaningful habits.',
                icon: Heart,
              },
              {
                word: 'GROW',
                devanagari: 'विकास',
                description: 'Understand values such as kindness, gratitude, humility and responsibility in everyday life.',
                icon: Lightbulb,
              },
            ].map((item) => (
              <div
                key={item.word}
                className="bg-[#1F4D3E] border border-[#D8BC83]/15 rounded-xl p-8 text-center group hover:border-[#D8BC83]/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#D8BC83]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D8BC83]/20 transition-colors">
                  <item.icon size={22} className="text-[#D8BC83]" />
                </div>
                <p className="font-devanagari text-[#D8BC83]/50 text-[0.85rem] mb-1">{item.devanagari}</p>
                <h3 className="font-inter font-semibold tracking-[0.15em] text-[#D8BC83] text-[1rem] mb-3">
                  {item.word}
                </h3>
                <p className="text-[#D8BC83]/60 text-[0.875rem] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: EXPLORE PROGRAMMES ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#FAF8F2]" aria-labelledby="programmes-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="font-devanagari text-[#B68A42] text-[0.9rem] tracking-wide mb-2">
                DEVAMRUTAM GURUKULAM
              </p>
              <h2
                id="programmes-heading"
                className="font-cormorant font-semibold text-[2.2rem] sm:text-[2.6rem] text-[#173D32] leading-tight"
              >
                Explore Our Learning Programmes
              </h2>
            </div>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-[#173D32] text-[0.875rem] font-medium hover:text-[#B68A42] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded"
            >
              View All Programmes <ChevronRight size={16} />
            </Link>
          </div>

          {/* Divider ornament */}
          <div className="flex items-center gap-4 mb-10" aria-hidden="true">
            <div className="h-px flex-1 bg-[#E7DFD0]" />
            <span className="font-devanagari text-[#B68A42]/60 text-lg">❖</span>
            <div className="h-px flex-1 bg-[#E7DFD0]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <article
                key={course.slug}
                className="bg-white border border-[#E7DFD0] rounded-xl overflow-hidden hover:border-[#D8BC83]/60 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Card header */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#F5EBD9] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {courseIcons[course.slug] || '📚'}
                    </div>
                    <span
                      className={`text-[0.7rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                        course.status === 'enquiry-open'
                          ? 'bg-[#EBF4F0] text-[#173D32] border border-[#B8D5C9]'
                          : course.status === 'enrolling-soon'
                          ? 'bg-[#FFF8E8] text-[#8A6A00] border border-[#E8D5A0]'
                          : 'bg-[#F5EBD9] text-[#77756D] border border-[#E7DFD0]'
                      }`}
                    >
                      {getStatusLabel(course.status)}
                    </span>
                  </div>

                  <div className="mb-1">
                    <p className="font-devanagari text-[#B68A42] text-[0.75rem] mb-1">{course.nameSanskrit}</p>
                    <h3 className="font-cormorant font-semibold text-[1.2rem] text-[#173D32] leading-tight">
                      {course.nameDisplay}
                    </h3>
                  </div>

                  <p className="text-[0.75rem] text-[#77756D] mb-3">Ages {course.ageGroupDisplay}</p>

                  <p className="font-cormorant italic text-[#B68A42] text-[0.9rem] mb-3">
                    {course.positioningTagline}
                  </p>

                  <p className="text-[#77756D] text-[0.85rem] leading-relaxed line-clamp-3">
                    {course.shortDescription}
                  </p>
                </div>

                {/* Card actions */}
                <div className="px-6 pb-6 flex gap-3">
                  <Link
                    href={`/learn/${course.slug}`}
                    className="flex-1 text-center px-4 py-2.5 border border-[#173D32] text-[#173D32] text-[0.8rem] font-medium rounded hover:bg-[#173D32] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                  >
                    View Programme
                  </Link>
                  <Link
                    href={`/parent-enquiry?course=${course.slug}`}
                    className="flex-1 text-center px-4 py-2.5 bg-[#173D32] text-white text-[0.8rem] font-medium rounded hover:bg-[#102D25] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                  >
                    Enquire Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY DEVAMRUTAM ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F5EBD9]" aria-labelledby="why-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="font-devanagari text-[#B68A42] text-[0.9rem] tracking-wide mb-2">Our Approach</p>
            <h2
              id="why-heading"
              className="font-cormorant font-semibold text-[2.2rem] sm:text-[2.6rem] text-[#173D32] leading-tight"
            >
              Why DEVAMRUTAM?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Rooted in Timeless Traditions',
                description:
                  'Our programmes draw directly from India\'s sacred scriptures, traditional recitation practices and devotional learning — ensuring children connect with authentic wisdom.',
                icon: '🪷',
              },
              {
                title: 'Structured Learning for Children',
                description:
                  'We design learning experiences that are age-appropriate, engaging and carefully sequenced — giving children a meaningful and joyful path into spiritual education.',
                icon: '📚',
              },
              {
                title: 'Learning Through Stories and Practice',
                description:
                  'Stories from the Bhagavatam, Ramayana and Mahabharata make wisdom memorable. Recitation practice builds discipline, confidence and a love for devotional expression.',
                icon: '📖',
              },
              {
                title: 'Encouraging Values for Everyday Life',
                description:
                  'Spiritual learning is most meaningful when it becomes part of daily life. We help children understand how values like kindness, gratitude and humility apply every day.',
                icon: '🌱',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#E7DFD0] p-8 flex gap-5"
              >
                <div className="text-3xl flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-cormorant font-semibold text-[1.15rem] text-[#173D32] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#77756D] text-[0.875rem] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: COMMUNITY PREVIEW ─────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF8F2]" aria-labelledby="community-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <div>
              <p className="font-devanagari text-[#B68A42] text-[0.9rem] tracking-wide mb-2">
                DEVAMRUTAM SANNIDHYAM
              </p>
              <h2
                id="community-heading"
                className="font-cormorant font-semibold text-[2.2rem] sm:text-[2.6rem] text-[#173D32] leading-tight mb-4"
              >
                More Than Learning.{' '}
                <span className="text-[#B68A42]">A Community to Grow With.</span>
              </h2>
              <p className="text-[#77756D] text-[1rem] leading-relaxed mb-8">
                Discover opportunities to connect through devotional celebrations, cultural programmes, workshops and meaningful learning experiences.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Festival Celebrations', icon: '🪔' },
                  { label: 'Workshops & Webinars', icon: '🎓' },
                  { label: 'Special Lectures', icon: '🎙️' },
                  { label: 'Children\'s Activities', icon: '🌟' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-[0.875rem] text-[#373A35]">
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#173D32] text-[#173D32] text-[0.875rem] font-medium rounded hover:bg-[#173D32] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
              >
                Explore Community
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Upcoming events */}
            <div>
              <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#77756D] mb-5">
                Upcoming Experiences
              </h3>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white border border-[#E7DFD0] rounded-lg px-5 py-4 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-[#F5EBD9] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                        {event.category === 'festival' ? '🪔' : event.category === 'children' ? '🌟' : '🎓'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#173D32] text-[0.9rem] truncate">{event.title}</p>
                        {event.date && (
                          <p className="text-[0.75rem] text-[#77756D] mt-0.5">{event.date}</p>
                        )}
                        <p className="text-[0.75rem] text-[#77756D]">
                          {event.isOnline ? 'Online' : event.location || 'TBD'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Empty state
                <div className="bg-[#F5EBD9] border border-[#E7DFD0] rounded-xl p-8 text-center">
                  <div className="text-4xl mb-3">🪔</div>
                  <p className="font-cormorant text-[1.1rem] text-[#173D32] mb-2">
                    New experiences are coming soon.
                  </p>
                  <p className="text-[#77756D] text-[0.875rem]">
                    Stay connected with DEVAMRUTAM for upcoming events, workshops and celebrations.
                  </p>
                  <Link
                    href="/community"
                    className="inline-flex items-center gap-2 mt-5 text-[#173D32] text-[0.875rem] font-medium hover:text-[#B68A42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded"
                  >
                    Learn more about community <ChevronRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: STORE PREVIEW ─────────────────────────────────────── */}
      <section className="py-20 bg-[#173D32]" aria-labelledby="store-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="font-devanagari text-[#D8BC83] text-[0.9rem] tracking-wide mb-2">
              DEVAMRUTAM BHĀṆḌĀRAM
            </p>
            <h2
              id="store-heading"
              className="font-cormorant font-semibold text-[2.2rem] sm:text-[2.6rem] text-[#F5EBD9] leading-tight mb-4"
            >
              Thoughtful Gifts.{' '}
              <span className="text-[#D8BC83]">Meaningful Practices.</span>
            </h2>
            <p className="text-[#D8BC83]/70 text-[0.95rem] leading-relaxed">
              Carefully curated devotional products, Bhakti Packs, spiritual books and gifting collections.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Bhakti Pack Mini', emoji: '🎁', desc: 'A starter pack for young devotees', status: 'Coming Soon', href: '/store/bhakti-pack-mini' },
              { name: 'Bhakti Pack Advanced', emoji: '📿', desc: 'A comprehensive devotional kit', status: 'Coming Soon', href: '/store/bhakti-pack-advanced' },
              { name: 'Spiritual Books', emoji: '📚', desc: 'Bhagavad Gita, shloka books & more', status: 'Coming Soon', href: '/store/books' },
              { name: 'Devotional Gifting', emoji: '🪷', desc: 'Meaningful gifts for every occasion', status: 'Coming Soon', href: '/store' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="bg-[#1F4D3E] border border-[#D8BC83]/15 rounded-xl p-6 hover:border-[#D8BC83]/35 hover:bg-[#234F40] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-cormorant font-semibold text-[1.05rem] text-[#F5EBD9] mb-1">{item.name}</h3>
                <p className="text-[#D8BC83]/60 text-[0.8rem] mb-3">{item.desc}</p>
                <span className="inline-block text-[0.7rem] font-medium px-2.5 py-1 bg-[#D8BC83]/10 text-[#D8BC83]/70 rounded-full">
                  {item.status}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D8BC83]/40 text-[#D8BC83] text-[0.9rem] font-medium rounded hover:bg-[#D8BC83]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
            >
              Browse All Products
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FOUNDER INTRODUCTION ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#FAF8F2]" aria-labelledby="founder-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder visual */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 bg-[#F5EBD9] rounded-2xl border border-[#E7DFD0] overflow-hidden flex items-center justify-center relative">
                {/* Placeholder for founder photograph */}
                <div className="text-center p-8">
                  <div className="w-28 h-28 bg-[#E7DFD0] rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-5xl text-[#D8BC83]/60">CS</span>
                  </div>
                  <p className="font-cormorant font-semibold text-[1.1rem] text-[#173D32]">Chakka Sraeyes</p>
                  <p className="text-[#77756D] text-[0.8rem] mt-1">Founder, DEVAMRUTAM</p>
                  <div className="mt-4 text-[0.7rem] text-[#B68A42] bg-[#B68A42]/10 px-3 py-1.5 rounded-full inline-block">
                    📸 Photograph to be added
                  </div>
                </div>

                {/* Decorative corner ornament */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#B68A42]/10 rounded-bl-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#173D32]/8 rounded-tr-3xl" aria-hidden="true" />
              </div>
            </div>

            {/* Founder content */}
            <div>
              <p className="font-devanagari text-[#B68A42] text-[0.9rem] tracking-wide mb-3">
                The Journey
              </p>
              <h2
                id="founder-heading"
                className="font-cormorant font-semibold text-[2.2rem] sm:text-[2.6rem] text-[#173D32] leading-tight mb-5"
              >
                The Journey Behind DEVAMRUTAM.
              </h2>

              <div className="space-y-4 text-[#77756D] text-[0.95rem] leading-relaxed mb-6">
                <p>
                  DEVAMRUTAM is founded by{' '}
                  <strong className="text-[#373A35]">Chakka Sraeyes</strong>, a final-year Computer Science and
                  Engineering student at SRM Institute of Science and Technology.
                </p>
                <p>
                  Alongside his academic journey in technology, he has developed a strong interest in Indian spiritual
                  traditions, devotional learning and cultural education. His learning journey includes devotional
                  service at ISKCON Chennai, Bhagavad Gita learning through Geeta Pariwar, and traditional devotional
                  programmes through Vishnuchitta Gurukulam.
                </p>
              </div>

              {/* Founder belief */}
              <blockquote className="border-l-3 border-[#B68A42] pl-5 mb-8 bg-[#F5EBD9]/60 py-3 pr-4 rounded-r-lg">
                <p className="font-cormorant italic text-[1.05rem] text-[#173D32] leading-relaxed">
                  &ldquo;Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.&rdquo;
                </p>
                <footer className="mt-2 text-[0.8rem] text-[#77756D]">— Chakka Sraeyes</footer>
              </blockquote>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-white text-[0.9rem] font-medium rounded hover:bg-[#102D25] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
              >
                Know Our Story
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ─────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#F5EBD9] to-[#FAF8F2] border-t border-[#E7DFD0]" aria-labelledby="final-cta-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Decorative ornament */}
            <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
              <div className="h-px w-16 bg-[#D8BC83]" />
              <span className="font-devanagari text-[#B68A42] text-xl">❖</span>
              <div className="h-px w-16 bg-[#D8BC83]" />
            </div>

            <h2
              id="final-cta-heading"
              className="font-cormorant font-semibold text-[2.5rem] sm:text-[3rem] text-[#173D32] leading-tight mb-5"
            >
              Begin Your Child&apos;s Journey of Timeless Wisdom.
            </h2>
            <p className="text-[#77756D] text-[1rem] leading-relaxed mb-8">
              Explore our learning programmes and discover meaningful ways to introduce spiritual values into everyday life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/parent-enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#173D32] text-white text-[0.95rem] font-medium rounded hover:bg-[#102D25] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
              >
                Enquire About Programmes
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#173D32] text-[#173D32] text-[0.95rem] font-medium rounded hover:bg-[#173D32] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
              >
                Browse Programmes
              </Link>
            </div>

            <p className="mt-8 font-devanagari text-[#B68A42]/60 text-[0.9rem]">
              देवामृतम् — Timeless Wisdom. Devotional Living.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
