import Link from 'next/link';
import { ArrowRight, Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#FAF8F2] min-h-[75vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-[#E7DFD0] p-8 sm:p-12 text-center shadow-sm">
        <span className="text-5xl block mb-4" aria-hidden="true">
          🪷
        </span>
        <span className="font-devanagari text-xs text-[#B68A42] font-semibold block mb-1">
          पृष्ठम् न लब्धम् · 404
        </span>
        <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed mb-8">
          The page or path you are looking for has been moved or does not exist. Let us guide you back to our devotional learning offerings.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#173D32] text-white text-xs font-semibold rounded-lg hover:bg-[#102D25] transition-colors"
          >
            <Home size={15} /> Return to Homepage
          </Link>
          <Link
            href="/learn"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#173D32] text-[#173D32] text-xs font-semibold rounded-lg hover:bg-[#F5EBD9] transition-colors"
          >
            <Compass size={15} /> Explore Gurukulam Programmes
          </Link>
        </div>
      </div>
    </div>
  );
}
