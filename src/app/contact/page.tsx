import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';
import { socialLinks } from '@/config/social';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | DEVAMRUTAM',
  description:
    'Get in touch with the DEVAMRUTAM team via WhatsApp (+91 7205645789) or email (devamrutam27@gmail.com) for admissions, community collaborations, and spiritual store queries.',
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl('Hare Krishna! I would like to get in touch with DEVAMRUTAM.');

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM · सम्पर्क
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Connect With DEVAMRUTAM
          </h1>
          <p className="text-[#77756D] text-[1rem] sm:text-[1.05rem] leading-relaxed">
            Whether you have questions about child admissions, cultural workshops, custom devotional gifting, or creator collaborations, we are here to assist.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
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
                {/* Direct WhatsApp Callout */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 bg-[#EBF4F0] border border-[#B8D5C9] rounded-2xl hover:bg-[#E2F0EA] transition-colors group"
                >
                  <MessageCircle size={20} className="text-[#173D32] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <strong className="block text-[#173D32] text-sm">Direct WhatsApp Hotline</strong>
                    <span className="text-sm font-bold text-[#173D32] block mt-0.5">+91 7205645789</span>
                    <span className="text-[0.7rem] text-[#173D32]/80 mt-1 block">Tap to chat instantly with pre-filled message &rarr;</span>
                  </div>
                </a>

                {/* Direct Phone */}
                <div className="flex items-start gap-3 p-3.5 bg-[#FAF8F2] rounded-2xl border border-[#E7DFD0]">
                  <Phone size={17} className="text-[#B68A42] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#173D32]">Phone Number</strong>
                    <a href="tel:+917205645789" className="hover:underline font-semibold text-[#373A35]">
                      +91 7205645789
                    </a>
                  </div>
                </div>

                {/* Business Email */}
                <div className="flex items-start gap-3 p-3.5 bg-[#FAF8F2] rounded-2xl border border-[#E7DFD0]">
                  <Mail size={17} className="text-[#B68A42] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#173D32]">Official Business Email</strong>
                    <a href="mailto:devamrutam27@gmail.com" className="hover:underline font-semibold text-[#173D32]">
                      devamrutam27@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Creator Identity */}
            <div className="bg-[#F5EBD9]/70 rounded-3xl border border-[#E7DFD0] p-6 sm:p-7 space-y-3">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#B68A42] block">
                Digital Media &amp; Discourses
              </span>
              <h3 className="font-cormorant font-bold text-xl text-[#173D32]">
                Software Prabhuji on YouTube
              </h3>
              <p className="text-xs text-[#77756D] leading-relaxed">
                Follow our founder&apos;s digital channel for Bhagavad Gita shloka explanations, spiritual talks in Telugu, English &amp; Hindi, and moral stories for young families.
              </p>

              <div className="pt-2">
                <a
                  href={siteConfig.softwarePrabhujiYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#173D32] text-white text-xs font-semibold rounded-xl hover:bg-[#102D25] transition-colors"
                >
                  <YoutubeIcon size={14} className="text-red-400" />
                  <span>Visit Software Prabhuji Channel</span>
                </a>
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
