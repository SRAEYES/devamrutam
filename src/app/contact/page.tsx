import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';
import { socialLinks } from '@/config/social';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | DEVAMRUTAM',
  description:
    'Get in touch with the DEVAMRUTAM team for admissions, community collaborations, spiritual store queries, or speaker invitations.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM · सम्पर्क
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Connect With DEVAMRUTAM
          </h1>
          <p className="text-[#77756D] text-[1.05rem] leading-relaxed">
            Whether you have questions about child admissions, cultural workshops, custom devotional gifting, or creator collaborations, we are here to assist.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7DFD0] p-6 sm:p-10 shadow-sm">
            <div className="mb-8 pb-4 border-b border-[#E7DFD0]">
              <h2 className="font-cormorant font-bold text-2xl text-[#173D32] mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#77756D]">
                Fill out the details below and we will respond via email as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Points */}
            <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6 space-y-4">
              <h3 className="font-cormorant font-bold text-xl text-[#173D32]">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-[#77756D] leading-relaxed">
                You may also reach our team directly using any of our registered communication channels.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#373A35]">
                <div className="flex items-start gap-3 p-3 bg-[#FAF8F2] rounded-xl border border-[#E7DFD0]">
                  <Mail size={16} className="text-[#B68A42] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#173D32]">General Enquiries</strong>
                    <a href={`mailto:${siteConfig.contactEmail}`} className="hover:underline text-[#77756D]">
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAF8F2] rounded-xl border border-[#E7DFD0]">
                  <MessageCircle size={16} className="text-[#B68A42] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#173D32]">WhatsApp Community Desk</strong>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-[#77756D]"
                    >
                      Connect on WhatsApp (Official Support Desk)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Creator Identity */}
            <div className="bg-[#F5EBD9]/70 rounded-2xl border border-[#E7DFD0] p-6 space-y-3">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#B68A42] block">
                Digital Media &amp; Discourses
              </span>
              <h3 className="font-cormorant font-bold text-xl text-[#173D32]">
                Software Prabhuji on YouTube
              </h3>
              <p className="text-xs text-[#77756D] leading-relaxed">
                Follow our founder&apos;s digital channel for Bhagavad Gita shloka explanations, Telugu spiritual talks, and moral stories for young professionals and families.
              </p>

              <div className="pt-2">
                <a
                  href={siteConfig.softwarePrabhujiYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
                >
                  <YoutubeIcon size={14} className="text-red-400" />
                  Visit Software Prabhuji Channel
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6">
              <h4 className="font-cormorant font-bold text-lg text-[#173D32] mb-3">
                Follow DEVAMRUTAM Online
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FAF8F2] border border-[#E7DFD0] text-xs text-[#373A35] hover:text-[#173D32] hover:border-[#B68A42] transition-colors"
                >
                  <InstagramIcon size={14} className="text-[#B68A42]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={socialLinks.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FAF8F2] border border-[#E7DFD0] text-xs text-[#373A35] hover:text-[#173D32] hover:border-[#B68A42] transition-colors"
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
