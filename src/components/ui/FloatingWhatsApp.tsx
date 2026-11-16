'use client';

import { getWhatsAppUrl } from '@/lib/utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl('Hare Krishna! I would like to enquire about DEVAMRUTAM spiritual programmes and products.');

  return (
    <aside aria-label="WhatsApp quick enquiry" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with DEVAMRUTAM (7205645789)"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#173D32] hover:bg-[#102D25] text-[#FAF8F2] border border-[#B68A42]/60 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B68A42] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B68A42]"></span>
        </span>
        <MessageCircle size={19} className="text-[#D8BC83] group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
