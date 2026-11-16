import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, ShoppingBag, Star, Heart, Lightbulb, BookMarked, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { courses, getStatusLabel } from '@/data/courses';
import { events, getUpcomingEvents } from '@/data/events';
import { products } from '@/data/products';
import { getWhatsAppUrl, getCourseWhatsAppUrl, getProductWhatsAppUrl } from '@/lib/utils/whatsapp';
import ThreeMandala from '@/components/ui/ThreeMandala';

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
        className="relative min-h-[90vh] flex items-center bg-[#FAF8F2] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Modern 3D Three.js Sacred Mandala Particle Background */}
        <ThreeMandala />

        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5EBD9]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8BC83]/12 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Hero text */}
            <div className="max-w-xl text-left">
              {/* Sanskrit ornament */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 sm:w-10 bg-[#B68A42]" aria-hidden="true" />
                <span className="font-devanagari text-[#B68A42] text-[0.85rem] sm:text-[0.95rem] tracking-wide font-medium">
                  देवामृतम् गुरुकुलम्
                </span>
                <div className="h-px w-8 sm:w-10 bg-[#B68A42]" aria-hidden="true" />
              </div>

              <h1
                id="hero-heading"
                className="font-cormorant font-semibold text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] leading-[1.12] text-[#173D32] mb-5 sm:mb-6"
              >
                Nurturing Young Hearts with{' '}
                <em className="not-italic text-[#B68A42]">Timeless Wisdom.</em>
              </h1>

              <p className="text-[0.95rem] sm:text-[1.05rem] text-[#77756D] leading-relaxed mb-7 sm:mb-8 max-w-[48ch]">
                Discover a joyful journey of shlokas, sacred stories, Bhagavad Gita wisdom and devotional
                practices — designed to introduce children to India&apos;s spiritual heritage.
              </p>

              {/* CTAs with instant WhatsApp admission access */}
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                <a
                  href={getWhatsAppUrl('Hare Krishna! I would like to enquire about DEVAMRUTAM Gurukulam admission for my child.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#173D32] text-white font-medium rounded-xl hover:bg-[#102D25] transition-all duration-200 text-[0.95rem] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
                >
                  <MessageCircle size={17} className="text-[#D8BC83]" />
                  <span>Enquire for Admission</span>
                  <ArrowRight size={15} />
                </a>
                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 border border-[#173D32] text-[#173D32] font-medium rounded-xl hover:bg-[#173D32] hover:text-white transition-all duration-200 text-[0.95rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
                >
                  Explore Programmes
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-6 mt-9 pt-7 border-t border-[#E7DFD0]">
                <div className="text-left sm:text-center">
                  <p className="font-cormorant font-semibold text-[1.4rem] sm:text-[1.5rem] text-[#173D32]">5</p>
                  <p className="text-[0.7rem] sm:text-[0.75rem] text-[#77756D] uppercase tracking-wide">Programmes</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-[#E7DFD0]" aria-hidden="true" />
                <div className="text-left sm:text-center">
                  <p className="font-cormorant font-semibold text-[1.4rem] sm:text-[1.5rem] text-[#173D32]">5+</p>
                  <p className="text-[0.7rem] sm:text-[0.75rem] text-[#77756D] uppercase tracking-wide">Languages</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-[#E7DFD0]" aria-hidden="true" />
                <div className="text-left sm:text-center">
                  <p className="font-cormorant font-semibold text-[1.4rem] sm:text-[1.5rem] text-[#173D32]">Ages 5+</p>
                  <p className="text-[0.7rem] sm:text-[0.75rem] text-[#77756D] uppercase tracking-wide">Learners</p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mt-4 lg:mt-0" aria-hidden="true">
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                {/* Decorative layered cards */}
                <div className="absolute inset-0 bg-[#F5EBD9] rounded-3xl rotate-3 opacity-60" />
                <div className="absolute inset-0 bg-[#FAF8F2] rounded-3xl border border-[#E7DFD0] overflow-hidden shadow-sm">
                  {/* Decorative devotional composition */}
                  <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] p-8 sm:p-10">
                    <div className="text-center">
                      <div className="font-devanagari text-[4.5rem] sm:text-[5.5rem] leading-none text-[#B68A42]/50 mb-3 select-none">
                        ॐ
                      </div>
                      <p className="font-cormorant text-[1.3rem] sm:text-[1.4rem] text-[#173D32]/80 italic">
                        The Nectar of Divine Wisdom
                      </p>
                      <p className="font-devanagari text-[#B68A42] text-[0.95rem] sm:text-[1rem] mt-1.5 font-medium">
                        देवामृतम्
                      </p>
                    </div>

                    {/* Course preview chips */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {['Sanskrit Shlokas', 'Bhagavad Gita', 'Devotional Stories', 'Sacred Practices'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/80 border border-[#E7DFD0] text-[#173D32] text-[0.75rem] rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-2xl border border-[#E7DFD0] shadow-md px-4 sm:px-5 py-3 sm:py-4 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-[#F5EBD9] rounded-full flex items-center justify-center text-xs">🌸</div>
                    <span className="text-[0.65rem] font-bold text-[#173D32] uppercase tracking-wider">Admissions Open</span>
                  </div>
                  <p className="font-cormorant font-bold text-[0.95rem] text-[#173D32]">Bāla Amṛtam</p>
                  <p className="text-[0.7rem] text-[#77756D] mt-0.5">Ages 5–9 · 1-on-1 &amp; Small Batches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BRAND INTRODUCTION ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#173D32]" aria-labelledby="brand-intro-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <p className="font-devanagari text-[#B68A42] text-[0.85rem] sm:text-[0.9rem] tracking-wide mb-2 sm:mb-3">
              Our Philosophy
            </p>
            <h2
              id="brand-intro-heading"
              className="font-cormorant font-semibold text-[2rem] sm:text-[2.6rem] text-[#F5EBD9] leading-tight mb-3 sm:mb-4"
            >
              A Little Wisdom Today.{' '}
              <span className="text-[#D8BC83]">A Lifetime of Values Tomorrow.</span>
            </h2>
            <p className="text-[#D8BC83]/75 text-[0.95rem] sm:text-[1rem] leading-relaxed">
              DEVAMRUTAM brings traditional spiritual learning into a modern and engaging environment for children.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
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
                className="bg-[#1F4D3E] border border-[#D8BC83]/20 rounded-2xl p-6 sm:p-8 text-center group hover:border-[#D8BC83]/40 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#D8BC83]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-[#D8BC83]/20 transition-colors">
                  <item.icon size={22} className="text-[#D8BC83]" />
                </div>
                <p className="font-devanagari text-[#D8BC83]/60 text-[0.85rem] mb-1">{item.devanagari}</p>
                <h3 className="font-inter font-semibold tracking-[0.15em] text-[#D8BC83] text-[0.95rem] sm:text-[1rem] mb-2 sm:mb-3">
                  {item.word}
                </h3>
                <p className="text-[#D8BC83]/70 text-[0.85rem] sm:text-[0.875rem] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: EXPLORE PROGRAMMES (Mobile / iPad Swipeable Carousel + Desktop Grid) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F2]" aria-labelledby="programmes-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-12">
            <div>
              <p className="font-devanagari text-[#B68A42] text-[0.85rem] sm:text-[0.9rem] tracking-wide mb-1 sm:mb-2 font-medium">
                DEVAMRUTAM GURUKULAM
              </p>
              <h2
                id="programmes-heading"
                className="font-cormorant font-semibold text-[2rem] sm:text-[2.6rem] text-[#173D32] leading-tight"
              >
                Explore Our Learning Programmes
              </h2>
            </div>
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 text-[#173D32] text-[0.85rem] font-semibold hover:text-[#B68A42] transition-colors whitespace-nowrap"
            >
              View All 5 Programmes <ChevronRight size={16} />
            </Link>
          </div>

          {/* Swipe indicator for mobile/iPad */}
          <div className="flex items-center justify-between text-xs text-[#77756D] mb-4 lg:hidden">
            <span>Swipe horizontally to browse &rarr;</span>
          </div>

          {/* Responsive Layout: Smooth swipe snap carousel on mobile/iPad, grid on laptop */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 pb-4 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {courses.map((course) => {
              const whatsappUrl = getCourseWhatsAppUrl(course.nameDisplay, course.nameSanskrit);
              return (
                <article
                  key={course.slug}
                  className="min-w-[280px] sm:min-w-[340px] lg:min-w-0 snap-start bg-white border border-[#E7DFD0] rounded-2xl overflow-hidden hover:border-[#D8BC83] hover:shadow-md transition-all duration-200 flex flex-col justify-between flex-shrink-0 lg:flex-shrink"
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#F5EBD9] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {courseIcons[course.slug] || '📚'}
                      </div>
                      <span
                        className={`text-[0.7rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          course.status === 'enquiry-open'
                            ? 'bg-[#EBF4F0] text-[#173D32] border border-[#B8D5C9]'
                            : 'bg-[#F5EBD9] text-[#77756D] border border-[#E7DFD0]'
                        }`}
                      >
                        {getStatusLabel(course.status)}
                      </span>
                    </div>

                    <div className="mb-1">
                      <p className="font-devanagari text-[#B68A42] text-[0.8rem] mb-0.5">{course.nameSanskrit}</p>
                      <h3 className="font-cormorant font-bold text-[1.25rem] text-[#173D32] leading-tight">
                        {course.nameDisplay}
                      </h3>
                    </div>

                    <p className="text-[0.75rem] text-[#77756D] mb-2 font-medium">Ages {course.ageGroupDisplay}</p>

                    <p className="font-cormorant italic text-[#B68A42] text-[0.95rem] mb-3">
                      &ldquo;{course.positioningTagline}&rdquo;
                    </p>

                    <p className="text-[#77756D] text-[0.85rem] leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Actions: View Details and Direct WhatsApp Enquire */}
                  <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href={`/learn/${course.slug}`}
                      className="flex-1 text-center px-3 py-2.5 border border-[#173D32] text-[#173D32] text-[0.8rem] font-semibold rounded-lg hover:bg-[#F5EBD9] transition-colors"
                    >
                      Curriculum
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#173D32] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#102D25] transition-colors shadow-xs"
                    >
                      <MessageCircle size={14} className="text-[#D8BC83]" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY DEVAMRUTAM ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F5EBD9]" aria-labelledby="why-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
            <p className="font-devanagari text-[#B68A42] text-[0.85rem] sm:text-[0.9rem] tracking-wide mb-1 font-medium">Our Approach</p>
            <h2
              id="why-heading"
              className="font-cormorant font-semibold text-[2rem] sm:text-[2.6rem] text-[#173D32] leading-tight"
            >
              Why DEVAMRUTAM?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                title: 'Rooted in Timeless Traditions',
                description:
                  'Our programmes draw directly from India\'s sacred scriptures, authentic recitation practices, and devotional learning — ensuring children connect with genuine wisdom.',
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
                className="bg-white rounded-2xl border border-[#E7DFD0] p-6 sm:p-8 flex gap-4 sm:gap-5 shadow-xs"
              >
                <div className="text-3xl sm:text-4xl flex-shrink-0 mt-0.5">{feature.icon}</div>
                <div>
                  <h3 className="font-cormorant font-bold text-[1.15rem] sm:text-[1.25rem] text-[#173D32] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#77756D] text-[0.85rem] sm:text-[0.875rem] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: COMMUNITY PREVIEW ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF8F2]" aria-labelledby="community-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="font-devanagari text-[#B68A42] text-[0.85rem] sm:text-[0.9rem] tracking-wide mb-1 font-medium">
                DEVAMRUTAM SANNIDHYAM
              </p>
              <h2
                id="community-heading"
                className="font-cormorant font-semibold text-[2rem] sm:text-[2.6rem] text-[#173D32] leading-tight mb-4"
              >
                More Than Learning.{' '}
                <span className="text-[#B68A42]">A Community to Grow With.</span>
              </h2>
              <p className="text-[#77756D] text-[0.95rem] sm:text-[1rem] leading-relaxed mb-6 sm:mb-8">
                Discover opportunities to connect through devotional celebrations, cultural programmes, workshops and meaningful learning experiences.
              </p>

              <div className="grid grid-cols-2 gap-3.5 mb-7">
                {[
                  { label: 'Festival Celebrations', icon: '🪔' },
                  { label: 'Workshops & Webinars', icon: '🎓' },
                  { label: 'Special Lectures', icon: '🎙️' },
                  { label: 'Children\'s Activities', icon: '🌟' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-[0.85rem] text-[#373A35] font-medium">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#173D32] text-[#173D32] text-[0.875rem] font-semibold rounded-xl hover:bg-[#173D32] hover:text-white transition-colors"
              >
                Explore Community
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Upcoming experiences list or empty state */}
            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#77756D] mb-4">
                Upcoming Experiences
              </h3>
              <div className="bg-[#F5EBD9] border border-[#E7DFD0] rounded-2xl p-7 sm:p-8 text-center shadow-xs">
                <div className="text-4xl mb-3">🪔</div>
                <p className="font-cormorant font-bold text-[1.25rem] text-[#173D32] mb-1.5">
                  New experiences are coming soon.
                </p>
                <p className="text-[#77756D] text-[0.85rem] leading-relaxed mb-5 max-w-md mx-auto">
                  Stay connected with DEVAMRUTAM for upcoming festival celebrations, Gita quizzes, and guest-speaker interactions.
                </p>
                <a
                  href={getWhatsAppUrl('Hare Krishna! Please keep me notified of upcoming DEVAMRUTAM community programmes and festival celebrations.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173D32] text-white text-xs font-semibold rounded-lg hover:bg-[#102D25] transition-colors"
                >
                  <MessageCircle size={15} className="text-[#D8BC83]" />
                  <span>Notify Me on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: STORE PREVIEW (With Real Prices & WhatsApp Direct Enquire) ── */}
      <section className="py-16 sm:py-20 bg-[#173D32]" aria-labelledby="store-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <p className="font-devanagari text-[#D8BC83] text-[0.85rem] sm:text-[0.9rem] tracking-wide mb-1 font-medium">
              DEVAMRUTAM BHĀṆḌĀRAM
            </p>
            <h2
              id="store-heading"
              className="font-cormorant font-semibold text-[2rem] sm:text-[2.6rem] text-[#F5EBD9] leading-tight mb-3"
            >
              Thoughtful Gifts.{' '}
              <span className="text-[#D8BC83]">Meaningful Practices.</span>
            </h2>
            <p className="text-[#D8BC83]/75 text-[0.95rem] leading-relaxed">
              Carefully curated devotional products with confirmed introductory pricing and direct WhatsApp ordering.
            </p>
          </div>

          {/* Swipeable on mobile / iPad, grid on desktop */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-5">
            {[
              {
                slug: 'bhakti-pack-mini',
                name: 'Bhakti Pack Mini',
                price: '₹199 + shipping',
                emoji: '🎁',
                desc: 'With Tulasi Japa Mala, bag, counter & shloka cards',
              },
              {
                slug: 'bhakti-pack-advanced',
                name: 'Bhakti Pack Advanced',
                price: '₹249',
                emoji: '📿',
                desc: 'Full Mala, embroidered bag, Stotra scripture & journal',
              },
              {
                slug: 'tulasi-japa-mala',
                name: 'Tulasi Japa Mala',
                price: '₹59',
                emoji: '📿',
                desc: '108+1 genuine Tulasi beads for chanting',
              },
              {
                slug: 'japa-bag',
                name: 'Traditional Japa Bag',
                price: '₹59',
                emoji: '👜',
                desc: 'Pure cotton chanting bag with finger loop',
              },
            ].map((item) => (
              <div
                key={item.slug}
                className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-start bg-[#1F4D3E] border border-[#D8BC83]/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#D8BC83]/40 hover:bg-[#234F40] transition-all duration-200 group flex-shrink-0 lg:flex-shrink"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl">{item.emoji}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#D8BC83]/15 text-[#F5EBD9] border border-[#D8BC83]/30">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="font-cormorant font-bold text-[1.15rem] text-[#F5EBD9] mb-1.5">{item.name}</h3>
                  <p className="text-[#D8BC83]/70 text-[0.8rem] leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={getProductWhatsAppUrl(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FAF8F2] text-[#173D32] hover:bg-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                  >
                    <MessageCircle size={14} className="text-[#173D32]" />
                    <span>Order on WhatsApp</span>
                  </a>
                  <Link
                    href={`/store/${item.slug}`}
                    className="text-center text-[0.75rem] text-[#D8BC83]/80 hover:text-white transition-colors py-1"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-9 sm:mt-11">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D8BC83]/50 text-[#D8BC83] text-[0.9rem] font-semibold rounded-xl hover:bg-[#D8BC83]/15 transition-colors"
            >
              Browse All Store Items
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FOUNDER INTRODUCTION (Polyglot Highlight) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F2]" aria-labelledby="founder-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Founder Visual */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-xs sm:max-w-sm mx-auto lg:mx-0 bg-[#F5EBD9] rounded-3xl border border-[#E7DFD0] overflow-hidden flex items-center justify-center relative shadow-sm">
                <div className="text-center p-8">
                  <div className="w-28 h-28 bg-[#FAF8F2] rounded-full border-2 border-[#B68A42]/50 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-cormorant font-bold text-[#173D32]">CS</span>
                  </div>
                  <p className="font-cormorant font-bold text-[1.25rem] text-[#173D32]">Chakka Sraeyes</p>
                  <p className="text-[#B68A42] font-semibold text-[0.75rem] uppercase tracking-wider mt-0.5">
                    Founder, DEVAMRUTAM
                  </p>
                  <p className="text-[#77756D] text-[0.75rem] mt-1.5">
                    SRM Institute of Science &amp; Technology
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                    {['English', 'Hindi', 'Telugu', 'Tamil', 'Odia'].map((lang) => (
                      <span key={lang} className="text-[0.65rem] font-semibold px-2 py-0.5 bg-[#173D32] text-white rounded-md">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div>
              <p className="font-devanagari text-[#B68A42] text-[0.85rem] sm:text-[0.9rem] tracking-wide mb-2 font-medium">
                The Journey
              </p>
              <h2
                id="founder-heading"
                className="font-cormorant font-semibold text-[2rem] sm:text-[2.6rem] text-[#173D32] leading-tight mb-4"
              >
                The Journey Behind DEVAMRUTAM.
              </h2>

              <div className="space-y-4 text-[#77756D] text-[0.92rem] sm:text-[0.98rem] leading-relaxed mb-6">
                <p>
                  DEVAMRUTAM is founded by <strong className="text-[#373A35]">Chakka Sraeyes</strong>, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology.
                </p>
                <p className="bg-[#F5EBD9]/60 p-4 rounded-xl border border-[#E7DFD0] text-[#173D32]">
                  <strong>Multilingual Spiritual Educator:</strong> He is a passionate polyglot fluent in <strong>English, Hindi, Telugu, Tamil, and Odia</strong>. His multilingual command allows him to converse effortlessly with children and families across regional traditions, explaining nuanced Sanskrit shlokas and philosophical teachings with natural warmth, clarity, and cultural resonance.
                </p>
                <p>
                  His personal spiritual journey includes devotional service at ISKCON Chennai, Gita recitation examination achievements through Geeta Pariwar, and Gurukulam training associated with Bhadrachadri Sri Rama Temple of USA.
                </p>
              </div>

              {/* Founder quote */}
              <blockquote className="border-l-3 border-[#B68A42] pl-4 sm:pl-5 mb-7 bg-white p-3 sm:p-4 rounded-r-xl border border-l-0 border-[#E7DFD0]">
                <p className="font-cormorant italic text-[1.05rem] sm:text-[1.1rem] text-[#173D32] leading-relaxed">
                  &ldquo;Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.&rdquo;
                </p>
                <footer className="mt-1.5 text-[0.75rem] text-[#77756D] font-medium">— Chakka Sraeyes</footer>
              </blockquote>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-white text-[0.875rem] font-medium rounded-xl hover:bg-[#102D25] transition-colors"
              >
                Read Full Story &amp; Certificates
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#F5EBD9] to-[#FAF8F2] border-t border-[#E7DFD0]" aria-labelledby="final-cta-heading">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              id="final-cta-heading"
              className="font-cormorant font-semibold text-[2.2rem] sm:text-[3rem] text-[#173D32] leading-tight mb-4"
            >
              Begin Your Child&apos;s Journey of Timeless Wisdom.
            </h2>
            <p className="text-[#77756D] text-[0.95rem] sm:text-[1rem] leading-relaxed mb-7 sm:mb-8">
              Explore our learning programmes and connect directly with our founder via WhatsApp to find the ideal learning path for your child.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <a
                href={getWhatsAppUrl('Hare Krishna! I would like to enquire about admission and batches at DEVAMRUTAM Gurukulam.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#173D32] text-white text-[0.95rem] font-semibold rounded-xl hover:bg-[#102D25] transition-colors shadow-sm"
              >
                <MessageCircle size={18} className="text-[#D8BC83]" />
                <span>Enquire via WhatsApp (+91 7205645789)</span>
              </a>
              <Link
                href="/parent-enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#173D32] text-[#173D32] text-[0.95rem] font-semibold rounded-xl hover:bg-[#173D32] hover:text-white transition-colors"
              >
                Submit Online Form
              </Link>
            </div>

            <p className="mt-7 font-devanagari text-[#B68A42] text-[0.9rem] font-medium">
              देवामृतम् — Timeless Wisdom. Devotional Living.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
