import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Gift, MessageCircle, Package, ShieldCheck, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { products, productCategoryLabels, getProductStatusLabel } from '@/data/products';
import { getProductWhatsAppUrl, getWhatsAppUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Devotional Store & Gifting | DEVAMRUTAM BHĀṆḌĀRAM',
  description:
    'Thoughtful devotional products, Bhakti Packs for children (₹199+), Tulasi japa malas (₹59), cotton japa bags (₹59), and sacred festival gifts.',
};

export default function StoreCataloguePage() {
  const categories = Object.keys(productCategoryLabels) as (keyof typeof productCategoryLabels)[];

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 sm:pt-16 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM BHĀṆḌĀRAM
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Thoughtful Gifts. Meaningful Practices.
          </h1>
          <p className="text-[#77756D] text-[1rem] sm:text-[1.05rem] leading-relaxed mb-6">
            Carefully curated devotional kits, authentic chanting essentials, sacred literature, and auspicious festival gifts to enrich spiritual life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#173D32]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full border border-[#E7DFD0]">
              <ShieldCheck size={15} className="text-[#B68A42]" /> Genuine Sacred Sourcing
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full border border-[#E7DFD0]">
              <MessageCircle size={15} className="text-[#B68A42]" /> Direct WhatsApp Ordering
            </span>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {categories.map((catKey) => {
          const catProducts = products.filter((p) => p.category === catKey);
          if (catProducts.length === 0) return null;

          return (
            <section key={catKey} aria-labelledby={`category-${catKey}`}>
              <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8 pb-3 border-b border-[#E7DFD0]">
                <div>
                  <h2
                    id={`category-${catKey}`}
                    className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32]"
                  >
                    {productCategoryLabels[catKey]}
                  </h2>
                  <span className="text-xs text-[#77756D]">
                    {catProducts.length} {catProducts.length === 1 ? 'Curated Offering' : 'Curated Offerings'}
                  </span>
                </div>
              </div>

              {/* Responsive: swipeable snap carousel on mobile/iPad, grid on laptop */}
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 pb-4 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6">
                {catProducts.map((prod) => {
                  const whatsappUrl = getProductWhatsAppUrl(prod.name, prod.price);

                  return (
                    <article
                      key={prod.slug}
                      className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-start bg-white rounded-3xl border border-[#E7DFD0] overflow-hidden flex flex-col justify-between hover:border-[#D8BC83] hover:shadow-md transition-all duration-200 flex-shrink-0 lg:flex-shrink"
                    >
                      {/* Product Image / Visual Showcase */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] border-b border-[#E7DFD0] overflow-hidden flex items-center justify-center">
                        <Image
                          src={`/images/products/${prod.slug}.svg`}
                          alt={prod.name}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {prod.price && (
                          <div className="absolute top-3.5 right-3.5">
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#173D32] text-[#F5EBD9] shadow-sm">
                              {prod.price}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {prod.nameSanskrit && (
                            <span className="font-devanagari text-xs text-[#B68A42] font-medium block mb-1">
                              {prod.nameSanskrit}
                            </span>
                          )}
                          <h3 className="font-cormorant font-bold text-xl text-[#173D32] mb-2 leading-snug">
                            {prod.name}
                          </h3>
                          <p className="text-xs text-[#77756D] leading-relaxed mb-4">
                            {prod.shortDescription}
                          </p>

                          {prod.contents && prod.contents.length > 0 && (
                            <div className="mb-4 pt-3 border-t border-[#E7DFD0]/60">
                              <span className="text-[0.7rem] uppercase font-bold text-[#77756D] block mb-1.5">
                                Included in this Pack:
                              </span>
                              <ul className="text-xs text-[#373A35] space-y-1">
                                {prod.contents.slice(0, 3).map((item, i) => (
                                  <li key={i} className="flex items-center gap-1.5">
                                    <span className="text-[#B68A42] text-xs font-bold">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                                {prod.contents.length > 3 && (
                                  <li className="text-[0.7rem] text-[#77756D] italic">
                                    + {prod.contents.length - 3} more items
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Actions with WhatsApp Redirect */}
                        <div className="pt-4 border-t border-[#E7DFD0] flex flex-col sm:flex-row gap-2">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#173D32] text-white text-xs font-semibold rounded-xl hover:bg-[#102D25] transition-colors shadow-xs"
                          >
                            <MessageCircle size={14} className="text-[#D8BC83]" />
                            <span>Enquire on WhatsApp</span>
                          </a>
                          <Link
                            href={`/store/${prod.slug}`}
                            className="px-3.5 py-2.5 text-center border border-[#173D32] text-[#173D32] text-xs font-semibold rounded-xl hover:bg-[#F5EBD9] transition-colors"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Custom Devotional Gifting */}
        <div className="mt-14 sm:mt-20 bg-gradient-to-r from-[#F5EBD9] via-[#FAF8F2] to-[#F5EBD9] border border-[#E7DFD0] rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
          <Gift size={32} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-3">
            Custom Hampers &amp; Festival Bulk Inquiries
          </h3>
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed mb-6 max-w-lg mx-auto">
            Looking for thoughtful return gifts, Upanayanam prayer sets, or bespoke spiritual hampers? Chat directly with us on WhatsApp for tailored curation.
          </p>
          <a
            href={getWhatsAppUrl('Hare Krishna! I would like to enquire about custom devotional gift hampers and bulk packages.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#173D32] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#102D25] transition-colors shadow-sm"
          >
            <MessageCircle size={16} className="text-[#D8BC83]" />
            <span>Chat on WhatsApp (+91 7205645789)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
