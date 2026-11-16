import Link from 'next/link';
import Image from 'next/image';
import { InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { footerNavGroups } from '@/data/navigation';
import { siteConfig } from '@/config/site';
import { socialLinks } from '@/config/social';
import { Mail } from 'lucide-react';

export default function Footer() {
  const year = siteConfig.copyrightYear;

  return (
    <footer className="bg-[#102D25] text-[#D8BC83]" role="contentinfo">
      {/* Top tagline bar */}
      <div className="border-b border-[#173D32] py-5">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant text-[1rem] sm:text-[1.1rem] tracking-[0.15em] text-[#D8BC83]/80 uppercase">
            {siteConfig.taglineSupporting}
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand column — takes 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded-lg">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#173D32] border border-[#B68A42]/60 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/brand/logo.svg"
                  alt="DEVAMRUTAM"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cormorant font-semibold text-[1.5rem] tracking-wide text-[#D8BC83] leading-none block">
                  DEVĀMṚTAM
                </span>
                <span className="font-devanagari text-[0.85rem] text-[#B68A42] leading-tight block mt-1">
                  देवामृतम्
                </span>
              </div>
            </Link>
            <p className="text-[#D8BC83]/70 text-[0.875rem] leading-relaxed mb-4 max-w-xs">
              A spiritual learning and cultural initiative dedicated to making India&apos;s timeless wisdom accessible to children and families.
            </p>

            {/* Direct Contact info in Footer */}
            <div className="space-y-2 mb-5 text-xs text-[#D8BC83]/80">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#B68A42]" />
                <a href="mailto:devamrutam27@gmail.com" className="hover:text-white transition-colors">
                  devamrutam27@gmail.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.instagram.url && (
                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVAMRUTAM on Instagram"
                  className="w-9 h-9 rounded-full bg-[#173D32] flex items-center justify-center text-[#D8BC83]/80 hover:text-[#D8BC83] hover:bg-[#1F4D3E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              {socialLinks.youtube.url && (
                <a
                  href={socialLinks.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVAMRUTAM on YouTube"
                  className="w-9 h-9 rounded-full bg-[#173D32] flex items-center justify-center text-[#D8BC83]/80 hover:text-[#D8BC83] hover:bg-[#1F4D3E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                >
                  <YoutubeIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Nav link groups */}
          {(Object.entries(footerNavGroups) as [string, { label: string; items: { label: string; href: string }[] }][]).map(
            ([key, group]) =>
              key !== 'legal' && (
                <div key={key}>
                  <h3 className="text-[#D8BC83] font-semibold text-[0.8rem] uppercase tracking-[0.12em] mb-4">
                    {group.label}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-[#D8BC83]/60 text-[0.875rem] hover:text-[#D8BC83] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#173D32] py-5">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#D8BC83]/50 text-[0.8rem]">
            © {year} DEVAMRUTAM. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-4 text-center justify-center">
              {footerNavGroups.legal.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#D8BC83]/50 text-[0.8rem] hover:text-[#D8BC83]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
