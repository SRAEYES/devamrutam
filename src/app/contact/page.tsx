import type { Metadata } from 'next';
import SpiritualIcon, { type SpiritualIconName } from "@/components/icons/SpiritualIcons";
import SacredBackground from "@/components/background/SacredBackground";
import Link from 'next/link';
import { Mail, MessageCircle, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { socialLinks } from '@/config/social';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | DEVAMRUTAM',
  description:
    'Get in touch with the DEVAMRUTAM team via WhatsApp (+91 7205645789) or email (devamrutam27@gmail.com) for admissions, community collaborations, and spiritual store queries.',
};

const topics: { label: string; hint: string; category: string; icon: SpiritualIconName }[] = [
  { label: "Programmes", hint: "Admissions & batches", category: "course", icon: "book" },
  { label: "Community", hint: "Events & celebrations", category: "community", icon: "people" },
  { label: "Store", hint: "Products & gifting", category: "product", icon: "gift" },
  { label: "Workshops", hint: "Talks & collaborations", category: "workshop", icon: "diya" },
];

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl('Hare Krishna! I would like to get in touch with DEVAMRUTAM.');

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <SacredBackground variant="contact" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM · सम्पर्क
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Connect With DEVAMRUTAM
          </h1>
          <p className="text-[#77756D] text-[1rem] sm:text-[1.05rem] leading-relaxed">
            Whether you have questions about child admissions, cultural workshops, or custom devotional gifting, we are here to assist.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav aria-label="Choose an enquiry topic" className="mb-8 sm:mb-10">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topics.map((t) => (
              <li key={t.category}>
                <Link
                  href={`/contact?category=${t.category}`}
                  scroll={false}
                  className="flex items-center gap-3 bg-white border border-[#E7DFD0] rounded-2xl p-3.5 sm:p-4 hover:border-[#D8BC83] hover:bg-[#F5EBD9]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#F5EBD9] text-[#B68A42] flex items-center justify-center flex-shrink-0">
                    <SpiritualIcon name={t.icon} size={24} />
                  </span>
                  <span>
                    <span className="block font-cormorant font-bold text-[1.05rem] text-[#173D32] leading-tight">{t.label}</span>
                    <span className="block text-[0.7rem] text-[#77756D]">{t.hint}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-10 shadow-xs">
            <div className="mb-6 sm:mb-8 pb-4 border-b border-[#E7DFD0]">
              <h2 className="font-cormorant font-bold text-2xl text-[#173D32] mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#77756D]">
                Fill out the details below or message us directly on WhatsApp for an immediate response.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Direct Channels & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Official Contact Points */}
            <div className="bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-7 space-y-4 shadow-xs">
              <h3 className="font-cormorant font-bold text-xl text-[#173D32]">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-[#77756D] leading-relaxed">
                Connect directly with our team through our official WhatsApp hotline or business email.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#373A35]">
                {/* Phone & WhatsApp (single entry, number shown once) */}
                <div className="flex items-start gap-3 p-4 bg-[#EBF4F0] border border-[#B8D5C9] rounded-2xl">
                  <MessageCircle size={20} className="text-[#173D32] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#173D32] text-sm">Phone &amp; WhatsApp</strong>
                    <span className="text-sm font-bold text-[#173D32] block mt-0.5">+91 7205645789</span>
                    <span className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[0.75rem] font-semibold text-[#173D32]">
                      <a href="tel:+917205645789" className="underline hover:text-[#B68A42] max-lg:inline-block max-lg:py-2.5">Call</a>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#B68A42] max-lg:inline-block max-lg:py-2.5">Chat on WhatsApp</a>
                    </span>
                  </div>
                </div>

                {/* Business Email */}
                <div className="flex items-start gap-3 p-3.5 bg-[#FAF8F2] rounded-2xl border border-[#E7DFD0]">
                  <Mail size={17} className="text-[#B68A42] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#173D32]">Official Business Email</strong>
                    <a href="mailto:devamrutam27@gmail.com" className="hover:underline font-semibold text-[#173D32] max-lg:inline-block max-lg:py-2">
                      devamrutam27@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-7">
              <h4 className="font-cormorant font-bold text-lg text-[#173D32] mb-3">
                Follow DEVAMRUTAM Online
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#E7DFD0] text-xs font-semibold text-[#373A35] hover:text-[#173D32] hover:border-[#B68A42] transition-colors"
                >
                  <InstagramIcon size={14} className="text-[#B68A42]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={socialLinks.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#E7DFD0] text-xs font-semibold text-[#373A35] hover:text-[#173D32] hover:border-[#B68A42] transition-colors"
                >
                  <YoutubeIcon size={14} className="text-[#B68A42]" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
