import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Gift, Package, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { products, productCategoryLabels, getProductStatusLabel } from '@/data/products';

export const metadata: Metadata = {
  title: 'Devotional Store & Gifting | DEVAMRUTAM BHĀṆḌĀRAM',
  description:
    'Thoughtful devotional products, Bhakti Packs for children, Tulasi japa malas, sacred books, and festival essentials.',
};

const categoryIcons: Record<string, string> = {
  'bhakti-packs': '🎁',
  'japa-chanting': '📿',
  'spiritual-books': '📚',
  'puja-festival': '🪔',
  'devotional-gifting': '🪷',
};

export default function StoreCataloguePage() {
  const categories = Object.keys(productCategoryLabels) as (keyof typeof productCategoryLabels)[];

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-16 pb-12 border-b border-[#E7DFD0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D32]/10 text-[#173D32] text-[0.8rem] font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B68A42]" />
            DEVAMRUTAM BHĀṆḌĀRAM
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-4">
            Thoughtful Gifts. Meaningful Practices.
          </h1>
          <p className="text-[#77756D] text-[1.05rem] leading-relaxed mb-6">
            Carefully curated devotional kits, authentic chanting essentials, sacred literature, and auspicious festival gifts to enrich spiritual life.
          </p>

          <div className="p-4 bg-[#F5EBD9]/70 border border-[#E7DFD0] rounded-xl text-xs text-[#173D32] max-w-xl mx-auto leading-relaxed">
            <strong>Preview Showcase:</strong> DEVAMRUTAM Bhāṇḍāram is currently in its introductory curation phase. Sourcing and inventory are being carefully vetted. Products are currently available on enquiry.
          </div>
        </div>
      </section>

      {/* Product Categories Filter / Overview */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {categories.map((catKey) => {
            const catProducts = products.filter((p) => p.category === catKey);
            if (catProducts.length === 0) return null;

            return (
              <section key={catKey} aria-labelledby={`category-${catKey}`}>
                <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E7DFD0]">
                  <span className="text-3xl" aria-hidden="true">
                    {categoryIcons[catKey] || '✨'}
                  </span>
                  <div>
                    <h2
                      id={`category-${catKey}`}
                      className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32]"
                    >
                      {productCategoryLabels[catKey]}
                    </h2>
                    <span className="text-xs text-[#77756D]">
                      {catProducts.length} {catProducts.length === 1 ? 'Curated Item' : 'Curated Items'}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProducts.map((prod) => (
                    <article
                      key={prod.slug}
                      className="bg-white rounded-2xl border border-[#E7DFD0] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      {/* Product Visual Placeholder */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-[#F5EBD9] to-[#FAF8F2] border-b border-[#E7DFD0] flex flex-col items-center justify-center p-6 text-center relative">
                        <span className="text-5xl mb-2" aria-hidden="true">
                          {categoryIcons[prod.category] || '📦'}
                        </span>
                        <span className="font-cormorant text-xs text-[#173D32]/60 font-semibold tracking-wider uppercase">
                          DEVAMRUTAM Collection
                        </span>
                        <div className="absolute top-3 right-3">
                          <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-[#77756D] border border-[#E7DFD0] uppercase">
                            {getProductStatusLabel(prod.status)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {prod.nameSanskrit && (
                            <span className="font-devanagari text-xs text-[#B68A42] block mb-1">
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
                              <span className="text-[0.7rem] uppercase font-semibold text-[#77756D] block mb-1.5">
                                Kit Includes:
                              </span>
                              <ul className="text-xs text-[#373A35] space-y-1">
                                {prod.contents.slice(0, 3).map((item, i) => (
                                  <li key={i} className="flex items-center gap-1.5">
                                    <span className="text-[#B68A42] text-xs">•</span>
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

                        {/* Actions */}
                        <div className="pt-4 border-t border-[#E7DFD0] flex gap-2">
                          <Link
                            href={`/store/${prod.slug}`}
                            className="flex-1 text-center px-3 py-2 border border-[#173D32] text-[#173D32] text-xs font-medium rounded-lg hover:bg-[#F5EBD9] transition-colors"
                          >
                            View Details
                          </Link>
                          <Link
                            href={`/contact?category=product&item=${encodeURIComponent(prod.name)}`}
                            className="flex-1 text-center px-3 py-2 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
                          >
                            Enquire
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Custom Gifting Enquiry */}
        <div className="mt-20 bg-gradient-to-r from-[#F5EBD9] via-[#FAF8F2] to-[#F5EBD9] border border-[#E7DFD0] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <Gift size={32} className="text-[#B68A42] mx-auto mb-3" />
          <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-3">
            Custom Devotional Hampers &amp; Festival Bulk Orders
          </h3>
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed mb-6 max-w-xl mx-auto">
            Looking for thoughtful spiritual return gifts, Upanayanam packages, or children&apos;s birthday learning hampers? Contact us to curate a custom package.
          </p>
          <Link
            href="/contact?category=product"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-white text-xs font-medium rounded-lg hover:bg-[#102D25] transition-colors"
          >
            Inquire About Custom Orders
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
