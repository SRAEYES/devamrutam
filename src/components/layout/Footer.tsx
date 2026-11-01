import Link from 'next/link';
import { InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { footerNavGroups } from '@/data/navigation';
import { siteConfig } from '@/config/site';
import { socialLinks } from '@/config/social';

export default function Footer() {
  const year = siteConfig.copyrightYear;

  return (
    <footer className="bg-[#102D25] text-[#D8BC83]" role="contentinfo">
      {/* Top tagline bar */}
      <div className="border-b border-[#173D32] py-5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <p className="font-cormorant text-[1.1rem] tracking-[0.15em] text-[#D8BC83]/80 uppercase">
            {siteConfig.taglineSupporting}
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column — takes 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded">
              <span className="font-cormorant font-semibold text-[1.5rem] tracking-wide text-[#D8BC83] leading-none block">
                DEVĀMṚTAM
              </span>
              <span className="font-devanagari text-[1rem] text-[#B68A42] leading-tight block mt-1">
                देवामृतम्
              </span>
            </Link>
            <p className="text-[#D8BC83]/70 text-[0.875rem] leading-relaxed mb-5 max-w-xs">
              A spiritual learning and cultural initiative dedicated to making India's timeless wisdom accessible to children and families.
            </p>
            <p className="text-[#D8BC83]/60 text-[0.8rem] font-cormorant italic mb-5">
              "{siteConfig.taglinePrimary}"
            </p>

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

        {/* Software Prabhuji identity */}
        <div className="mt-12 pt-8 border-t border-[#173D32]">
          <div className="bg-[#173D32]/40 rounded-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[#D8BC83] text-[0.8rem] uppercase tracking-[0.1em] font-semibold mb-1">
                Content Creator Identity
              </p>
              <p className="text-[#D8BC83]/80 text-[0.9rem] font-cormorant">
                Software Prabhuji —{' '}
                <span className="text-[#D8BC83]/60 text-[0.85rem] font-inter">
                  Devotional content in Telugu, English & Hindi · Bhagavad Gita · Sanskrit Shlokas
                </span>
              </p>
              <p className="text-[#D8BC83]/50 text-[0.75rem] mt-1">
                Founded by {siteConfig.founderName} · {siteConfig.founderRole}
              </p>
            </div>
            {socialLinks.softwarePrabhuji.url && (
              <a
                href={socialLinks.softwarePrabhuji.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#173D32] text-[#D8BC83] text-[0.8rem] rounded hover:bg-[#1F4D3E] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
              >
                <YoutubeIcon size={14} />
                YouTube Channel
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#173D32] py-5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#D8BC83]/50 text-[0.8rem]">
            © {year} DEVAMRUTAM. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-4">
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
