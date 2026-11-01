'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/config/site';

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#E7DFD0] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] rounded"
              aria-label={`${siteConfig.name} — Home`}
            >
              <span className="font-cormorant font-semibold text-[1.4rem] tracking-wide text-[#173D32] leading-tight">
                DEVĀMṚTAM
              </span>
              <span className="font-devanagari text-[0.85rem] text-[#B68A42] leading-tight tracking-wide">
                देवामृतम्
              </span>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173D32] text-white text-[0.875rem] font-medium rounded hover:bg-[#102D25] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] focus-visible:ring-offset-2"
              >
                Explore Programmes
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded text-[#173D32] hover:bg-[#F5EBD9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-[#FAF8F2] shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E7DFD0]">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <span className="font-cormorant font-semibold text-[1.2rem] text-[#173D32]">
              DEVĀMṚTAM
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded text-[#77756D] hover:text-[#173D32] hover:bg-[#F5EBD9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-2" aria-label="Mobile navigation">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3.5 rounded-lg text-[1rem] font-medium transition-colors duration-200 mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42] ${
                isActive(item.href)
                  ? 'text-[#173D32] bg-[#F5EBD9]'
                  : 'text-[#373A35] hover:text-[#173D32] hover:bg-[#F5EBD9]/60'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="p-5 border-t border-[#E7DFD0]">
          <Link
            href="/learn"
            className="flex items-center justify-center w-full px-5 py-3 bg-[#173D32] text-white text-[0.9rem] font-medium rounded hover:bg-[#102D25] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
          >
            Explore Programmes
          </Link>
          <p className="text-center text-[0.75rem] text-[#77756D] mt-3 font-devanagari">
            देवामृतम्
          </p>
        </div>
      </div>
    </>
  );
}
