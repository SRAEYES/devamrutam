import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, Globe2, Heart, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { certificates } from '@/data/certificates';
import CertificateViewer from '@/components/founder/CertificateModal';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'About Us & Founder | DEVAMRUTAM',
  description:
    'Learn about the vision, mission, and multilingual founder of DEVAMRUTAM — Chakka Sraeyes, speaking English, Hindi, Telugu, Tamil, and Odia to make timeless spiritual wisdom accessible.',
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl('Hare Krishna! I would like to connect with Chakka Sraeyes regarding DEVAMRUTAM.');

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 sm:pt-16 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM · देवामृतम्
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Timeless Wisdom for Modern Generations
          </h1>
          <p className="text-[#77756D] text-[1rem] sm:text-[1.05rem] leading-relaxed">
            Nurturing young hearts with the eternal values of India&apos;s spiritual heritage through structured learning, community celebration, and authentic devotional practice.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-[#373A35] leading-relaxed text-sm sm:text-base">
            <div>
              <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
                हमारी प्रेरणा
              </span>
              <h2 className="font-cormorant font-bold text-2xl sm:text-4xl text-[#173D32] leading-tight">
                About DEVAMRUTAM
              </h2>
            </div>

            <p>
              DEVAMRUTAM is a spiritual learning and cultural initiative dedicated to making the timeless wisdom of India&apos;s spiritual traditions accessible to children, families and individuals across generations.
            </p>

            <p>
              Rooted in the teachings of sacred scriptures, the Bhagavad Gita, devotional literature and traditional practices, DEVAMRUTAM aims to create meaningful opportunities to learn, practise and experience spirituality in everyday life.
            </p>

            <p>
              Through structured online learning programmes, devotional community initiatives, cultural events and carefully curated spiritual products, we hope to make traditional wisdom approachable, engaging and relevant to the modern generation.
            </p>

            <p className="font-semibold text-[#173D32]">
              Our vision is to nurture a generation that understands its cultural roots, appreciates spiritual values and carries them forward with sincerity.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-8 shadow-xs">
              <Compass size={28} className="text-[#B68A42] mb-3" />
              <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
                &ldquo;To make India&apos;s timeless spiritual wisdom accessible to children through meaningful learning experiences, devotional practices and cultural activities.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-8 shadow-xs">
              <Heart size={28} className="text-[#B68A42] mb-3" />
              <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
                &ldquo;To nurture a generation that grows with knowledge, values, devotion and an appreciation of its cultural roots.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile (Polyglot Highlight) */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] border-y border-[#E7DFD0] py-14 sm:py-18">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual / Avatar Placeholder */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] max-w-xs sm:max-w-sm mx-auto lg:mx-0 bg-white rounded-3xl border border-[#E7DFD0] p-7 sm:p-8 flex flex-col items-center justify-center text-center shadow-xs relative overflow-hidden">
                <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-[#F5EBD9] border-2 border-[#B68A42]/50 flex items-center justify-center mb-4 text-3xl sm:text-4xl text-[#173D32] font-cormorant font-bold">
                  CS
                </div>
                <h3 className="font-cormorant font-bold text-2xl text-[#173D32]">
                  Chakka Sraeyes
                </h3>
                <p className="text-xs text-[#B68A42] font-bold uppercase tracking-wider mt-0.5">
                  Founder, DEVAMRUTAM
                </p>
                <p className="text-xs text-[#77756D] mt-1.5">
                  Final-year B.Tech CSE Student, SRM Institute of Science and Technology
                </p>

                {/* Polyglot badges */}
                <div className="mt-4 pt-4 border-t border-[#E7DFD0] w-full">
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#77756D] block mb-2">
                    Multilingual Educator (5 Languages)
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {['English', 'Hindi', 'Telugu', 'Tamil', 'Odia'].map((lang) => (
                      <span key={lang} className="text-[0.7rem] font-semibold px-2.5 py-0.5 bg-[#173D32] text-white rounded-md">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div>
                <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
                  संस्थापक परिचय
                </span>
                <h2 className="font-cormorant font-bold text-2xl sm:text-4xl text-[#173D32] leading-tight">
                  The Founder&apos;s Journey
                </h2>
              </div>

              <div className="text-sm text-[#373A35] leading-relaxed space-y-3.5">
                <p>
                  DEVAMRUTAM is founded by <strong>Chakka Sraeyes</strong>, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology. Alongside his academic journey in technology, he has developed a deep and sustained dedication to Indian spiritual traditions, devotional learning and cultural education.
                </p>

                {/* Polyglot feature card */}
                <div className="bg-white rounded-2xl border border-[#B68A42]/40 p-5 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-[#173D32] font-bold text-sm">
                    <Globe2 size={18} className="text-[#B68A42]" />
                    <span>Multilingual Proficiency &amp; Relatable Communication</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#373A35] leading-relaxed">
                    A passionate polyglot, he is fluent in <strong>English, Hindi, Telugu, Tamil, and Odia</strong>. This linguistic breadth enables him to connect seamlessly with students and families from diverse cultural regions across India and abroad. He explains complex scriptural verses, Sanskrit phonetics, and moral philosophy with natural clarity, relatable metaphors, and cultural depth in the tongue children understand best.
                  </p>
                </div>

                <p>
                  His spiritual learning journey includes devotional service activities at <strong>ISKCON Chennai</strong>, Bhagavad Gita recitation examination achievements through <strong>Geeta Pariwar</strong>, and traditional devotional programmes conducted through <strong>Vishnuchitta Gurukulam</strong> associated with <strong>Bhadrachadri Sri Rama Temple of USA</strong>.
                </p>

                <p>
                  His learning achievements include Bhagavad Gita recitation, Vishnu Sahasranama Stotra recitation, Nitya Pooja and Panchamrutha Abhishekam programmes.
                </p>
              </div>

              <blockquote className="border-l-3 border-[#B68A42] pl-4 sm:pl-5 py-3 my-5 bg-white rounded-r-xl border border-l-0 border-[#E7DFD0]">
                <p className="font-cormorant italic text-lg sm:text-xl text-[#173D32]">
                  &ldquo;Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.&rdquo;
                </p>
                <footer className="text-xs text-[#77756D] mt-1.5 font-medium">
                  — Chakka Sraeyes, Founder
                </footer>
              </blockquote>

              <p className="text-[0.72rem] text-[#77756D] italic">
                *Note of Integrity: The founder does not claim formal Acharya or certified guru status, but shares this platform out of dedicated devotional practice, verified scriptural study, and enthusiasm for educating young children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Achievements & Verified Certificates */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
            प्रमाणपत्र दीर्घा
          </span>
          <h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] mb-3">
            Learning Achievements &amp; Certificates
          </h2>
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
            The following original documents mark milestones in the founder&apos;s personal journey of scriptural recitation, Puja procedures, and sacred stotra examinations.
          </p>
        </div>

        {/* Interactive Certificate Viewer Component */}
        <CertificateViewer certificates={certificates} />

        <div className="mt-8 text-center text-xs text-[#77756D]">
          Click any certificate card to inspect complete program documentation and verified issuing institutions.
        </div>
      </section>

      {/* Direct WhatsApp Callout */}
      <section className="bg-[#173D32] text-white py-14 text-center">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 max-w-2xl">
          <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#F5EBD9] mb-3">
            Have Questions for the Founder?
          </h3>
          <p className="text-xs sm:text-sm text-[#D8BC83]/80 leading-relaxed mb-6">
            We are always delighted to connect with parents, devotees, and educators who share our passion for spiritual upbringing. Reach out directly on WhatsApp or email.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B68A42] text-white text-xs font-semibold rounded-xl hover:bg-[#9E7432] transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp (+91 7205645789)</span>
            </a>
            <a
              href="mailto:devamrutam27@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D8BC83]/50 text-[#F5EBD9] text-xs font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              devamrutam27@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
