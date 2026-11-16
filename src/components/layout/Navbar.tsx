'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const whatsappNavUrl = getWhatsAppUrl('Hare Krishna! I would like to explore DEVAMRUTAM programmes.');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#E7DFD0] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo Lockup with Brand Mark Container */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded-lg group"
              aria-label={`${siteConfig.name} — Home`}
            >
              {/* Brand Logo Symbol / Placeholder Space */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded-full overflow-hidden bg-[#173D32] border border-[#B68A42]/50 shadow-xs flex items-center justify-center group-hover:border-[#B68A42] transition-colors">
                <Image
                  src="/images/brand/logo.svg"
                  alt="DEVAMRUTAM Emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <span className="font-cormorant font-semibold text-[1.25rem] sm:text-[1.4rem] tracking-wide text-[#173D32] leading-tight">
                  DEVĀMṚTAM
                </span>
                <span className="font-devanagari text-[0.75rem] sm:text-[0.85rem] text-[#B68A42] leading-tight tracking-wide">
                  देवामृतम्
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (kept exactly intact for laptop mode) */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded text-[0.9rem] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] ${
                    isActive(item.href)
                      ? 'text-[#173D32] bg-[#F5EBD9]'
                      : 'text-[#373A35] hover:text-[#173D32] hover:bg-[#F5EBD9]/70'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#173D32] border border-[#B68A42]/60 rounded-md hover:bg-[#F5EBD9] transition-colors"
                title="Direct WhatsApp"
              >
                <MessageCircle size={15} className="text-[#B68A42]" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173D32] text-white text-[0.875rem] font-medium rounded hover:bg-[#102D25] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
              >
                Explore Programmes
              </Link>
            </div>

            {/* Mobile & iPad Hamburger + Quick WhatsApp */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp"
                className="p-2 text-[#173D32] hover:bg-[#F5EBD9] rounded-lg transition-colors"
              >
                <MessageCircle size={21} className="text-[#B68A42]" />
              </a>

              <button
                type="button"
                className="p-2 rounded-lg text-[#173D32] hover:bg-[#F5EBD9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                onClick={() => setMobileOpen((o) => !o)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & iPad Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile & iPad Menu Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#FAF8F2] shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out border-l border-[#E7DFD0] ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E7DFD0] bg-[#F5EBD9]/40">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#173D32] border border-[#B68A42]/60 flex items-center justify-center">
              <Image
                src="/images/brand/logo.svg"
                alt="DEVAMRUTAM"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-cormorant font-semibold text-[1.25rem] text-[#173D32]">
              DEVĀMṚTAM
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-[#77756D] hover:text-[#173D32] hover:bg-[#F5EBD9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Mobile navigation">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3.5 rounded-xl text-[1rem] font-medium transition-colors duration-200 mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] ${
                isActive(item.href)
                  ? 'text-[#173D32] bg-[#F5EBD9] font-semibold'
                  : 'text-[#373A35] hover:text-[#173D32] hover:bg-[#F5EBD9]/60'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}

          {/* Quick WhatsApp Link inside menu */}
          <div className="pt-4 mt-4 border-t border-[#E7DFD0]">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#EBF4F0] text-[#173D32] border border-[#B8D5C9] text-sm font-semibold"
            >
              <MessageCircle size={18} className="text-[#173D32]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Mobile CTA */}
        <div className="p-5 border-t border-[#E7DFD0] bg-[#FAF8F2]">
          <Link
            href="/learn"
            className="flex items-center justify-center w-full px-5 py-3.5 bg-[#173D32] text-white text-[0.95rem] font-medium rounded-xl hover:bg-[#102D25] transition-colors duration-200 shadow-sm"
          >
            Explore Programmes
          </Link>
          <p className="text-center text-[0.75rem] text-[#77756D] mt-3 font-devanagari">
            देवामृतम् · Timeless Wisdom. Devotional Living.
          </p>
        </div>
      </div>
    </>
  );
}
