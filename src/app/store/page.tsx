import type { Metadata } from "next";
import SacredBackground from "@/components/background/SacredBackground";
import Link from "next/link";
import Image from "next/image";
import { products, productCategoryLabels } from "@/data/products";

export const metadata: Metadata = {
  title: "Devotional Store & Gifting | DEVAMRUTAM BHĀṆḌĀRAM",
  description:
    "A curated catalogue of Bhakti Packs, japa and chanting essentials, spiritual books, puja and festival essentials, and devotional gifts.",
};

const categoryBlurbs: Record<string, string> = {
  "bhakti-packs": "Carefully curated devotional learning kits.",
  "japa-chanting": "Japa bags, chanting beads and genuine chanting essentials.",
  "spiritual-books":
    "Bhagavad Gita, shloka books and selected spiritual literature.",
  "puja-festival":
    "Nitya Puja essentials and festival-related devotional items.",
  "devotional-gifting":
    "Thoughtful devotional gifts for children and festive occasions.",
};

export default function StoreCataloguePage() {
  const categories = (
    Object.keys(productCategoryLabels) as (keyof typeof productCategoryLabels)[]
  ).filter((k) => products.some((p) => p.category === k));

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Introduction */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] pt-14 sm:pt-16 pb-10">
        <SacredBackground variant="store" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-[0.8rem] font-semibold tracking-wider uppercase text-[#B68A42] mb-3">
            DEVAMRUTAM BHĀṆḌĀRAM
          </p>
          <h1 className="font-cormorant font-bold text-3xl sm:text-5xl text-[#173D32] leading-tight mb-3">
            Thoughtful Gifts. Meaningful Practices.
          </h1>
          <p className="text-[#77756D] text-[1rem] sm:text-[1.05rem] leading-relaxed">
            <span className="font-devanagari text-[#B68A42]">भाण्डारम्</span>{" "}
            means a storehouse. Here you will find carefully chosen devotional
            kits, chanting essentials, sacred books and gifts.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <nav
        aria-label="Store categories"
        className="sticky top-[72px] z-20 bg-[#FAF8F2]/95 backdrop-blur border-y border-[#E7DFD0]"
      >
        <ul className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-3 flex gap-2.5 overflow-x-auto scrollbar-none">
          {categories.map((k) => (
            <li key={k} className="flex-shrink-0">
              <a
                href={`#category-${k}`}
                className="inline-block px-4 py-1.5 rounded-full border border-[#E7DFD0] bg-white text-[0.8rem] font-medium text-[#173D32] hover:border-[#D8BC83] hover:bg-[#F5EBD9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
              >
                {productCategoryLabels[k]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Catalogue */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14 sm:space-y-16">
        {categories.map((catKey) => {
          const catProducts = products.filter((p) => p.category === catKey);
          return (
            <section
              key={catKey}
              aria-labelledby={`category-${catKey}`}
              className="scroll-mt-32"
            >
              <h2
                id={`category-${catKey}`}
                className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32]"
              >
                {productCategoryLabels[catKey]}
              </h2>
              <p className="text-sm text-[#77756D] mt-1 mb-6">
                {categoryBlurbs[catKey]}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {catProducts.map((prod) => (
                  <article
                    key={prod.slug}
                    className="group bg-white rounded-2xl border border-[#E7DFD0] overflow-hidden flex flex-col hover:border-[#D8BC83] hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative aspect-[4/3] max-lg:aspect-square bg-[#F5EBD9] overflow-hidden">
                      <Image
                        src={`/images/products/${prod.slug}.png`}
                        alt={prod.name}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover max-lg:object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {prod.status !== "available-on-enquiry" && (
                        <span className="absolute top-3 left-3 text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider bg-white/90 text-[#77756D] border border-[#E7DFD0]">
                          {prod.status === "out-of-stock"
                            ? "Out of Stock"
                            : "Coming Soon"}
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-[0.68rem] uppercase tracking-wider text-[#B68A42] font-semibold mb-1">
                        {productCategoryLabels[prod.category]}
                      </p>
                      <h3 className="font-cormorant font-bold text-xl text-[#173D32] leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-[0.82rem] text-[#77756D] leading-relaxed mt-1.5 mb-4">
                        {prod.shortDescription}
                      </p>
                      <div className="mt-auto flex items-center justify-between gap-3">
                        {prod.price ? (
                          <span className="text-sm font-semibold text-[#173D32]">
                            {prod.price}
                          </span>
                        ) : (
                          <span />
                        )}
                        <Link
                          href={`/store/${prod.slug}`}
                          className="inline-flex items-center px-4 py-2 border border-[#173D32] text-[#173D32] text-xs font-semibold rounded-lg hover:bg-[#173D32] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A42]"
                        >
                          View &amp; Enquire
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <p className="text-center text-sm text-[#77756D]">
          Looking for something specific?{" "}
          <Link
            href="/contact?category=product"
            className="font-semibold text-[#173D32] underline hover:text-[#B68A42]"
          >
            Send us a product enquiry
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
