import type { Metadata } from 'next';
import SpiritualIcon, { type SpiritualIconName } from "@/components/icons/SpiritualIcons";
import AboutHero from "@/components/background/AboutHero";
import { certificates } from '@/data/certificates';
import FounderJourney from "@/components/founder/FounderJourney";
import CertificateArchive from "@/components/founder/CertificateArchive";
import AboutClosing from "@/components/founder/AboutClosing";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: 'About Us & Founder | DEVAMRUTAM',
  description:
    'Learn about the vision and mission of DEVAMRUTAM and its founder, Chakka Sraeyes, and how the initiative makes India\'s spiritual wisdom accessible to children and families.',
};

const pillars: { sanskrit: string; label: string; text: string; icon: SpiritualIconName }[] = [
  { sanskrit: "ज्ञानम्", label: "Knowledge", text: "Authentic understanding of shlokas, stories and scripture, taught clearly and at a child's pace.", icon: "book" },
  { sanskrit: "भक्ति", label: "Devotion", text: "Daily devotional practice and recitation that builds discipline and heartfelt connection.", icon: "diya" },
  { sanskrit: "संस्कार", label: "Values", text: "Kindness, gratitude and humility carried from learning into everyday life.", icon: "lotus" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <AboutHero />

      {/* Main Narrative */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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
              <SpiritualIcon name="lotus" size={32} className="text-[#B68A42] mb-3" />
              <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
                &ldquo;To make India&apos;s timeless spiritual wisdom accessible to children through meaningful learning experiences, devotional practices and cultural activities.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-8 shadow-xs">
              <SpiritualIcon name="diya" size={32} className="text-[#B68A42] mb-3" />
              <h3 className="font-cormorant font-bold text-2xl text-[#173D32] mb-2">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
                &ldquo;To nurture a generation that grows with knowledge, values, devotion and an appreciation of its cultural roots.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <FounderJourney />

      {/* Learning philosophy */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-18" aria-labelledby="philosophy-heading">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">हमारा दृष्टिकोण</span>
          <h2 id="philosophy-heading" className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32]">Our Learning Philosophy</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pl) => (
            <div key={pl.label} className="bg-white rounded-2xl border border-[#E7DFD0] p-6 text-center hover:border-[#D8BC83] transition-colors">
              <span className="w-12 h-12 rounded-xl bg-[#F5EBD9] text-[#B68A42] flex items-center justify-center mx-auto mb-3">
                <SpiritualIcon name={pl.icon} size={28} />
              </span>
              <p className="font-devanagari text-[#B68A42] text-sm font-medium">{pl.sanskrit}</p>
              <h3 className="font-cormorant font-bold text-xl text-[#173D32] mb-1.5">{pl.label}</h3>
              <p className="text-xs text-[#77756D] leading-relaxed">{pl.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CertificateArchive certificates={certificates} />
      <AboutClosing />
    </div>
  );
}
