import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Heart, Package, ShieldCheck, Sparkles, Tag } from 'lucide-react';
import { products, getProductBySlug, getProductStatusLabel, productCategoryLabels } from '@/data/products';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | DEVAMRUTAM BHĀṆḌĀRAM',
    };
  }

  return {
    title: `${product.name} | DEVAMRUTAM BHĀṆḌĀRAM`,
    description: product.shortDescription,
  };
}

export default async function SingleProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-[#FAF8F2] border-b border-[#E7DFD0] py-3.5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#77756D]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#173D32] transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/store" className="hover:text-[#173D32] transition-colors">
              Store
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#173D32] font-medium" aria-current="page">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <Link
          href="/store"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#77756D] hover:text-[#173D32] transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Devotional Store
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-square bg-gradient-to-br from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] rounded-3xl border border-[#E7DFD0] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden shadow-sm">
              <span className="text-7xl mb-4" aria-hidden="true">
                📿
              </span>
              <p className="font-cormorant font-bold text-2xl text-[#173D32] mb-1">
                {product.name}
              </p>
              {product.nameSanskrit && (
                <span className="font-devanagari text-sm text-[#B68A42]">
                  {product.nameSanskrit}
                </span>
              )}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#77756D] border border-[#E7DFD0] uppercase tracking-wider">
                  {getProductStatusLabel(product.status)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E7DFD0] flex items-center justify-between text-xs text-[#77756D]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#B68A42]" /> Hand-selected devotional curation
              </span>
              <span>Category: {productCategoryLabels[product.category]}</span>
            </div>
          </div>

          {/* Right Column: Information & Enquiries (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B68A42]">
                  {productCategoryLabels[product.category]}
                </span>
              </div>
              <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-sm text-[#373A35] leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Contents breakdown */}
            {product.contents && product.contents.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6">
                <h3 className="font-cormorant font-bold text-lg text-[#173D32] mb-3 flex items-center gap-2">
                  <Package size={18} className="text-[#B68A42]" />
                  What This Curated Pack Contains:
                </h3>
                <ul className="space-y-2.5">
                  {product.contents.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#373A35]">
                      <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#173D32] flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sourcing and Transparency Note */}
            <div className="bg-[#F5EBD9]/60 rounded-xl border border-[#E7DFD0] p-5 text-xs text-[#373A35] space-y-2">
              <p className="font-semibold text-[#173D32]">
                Sourcing &amp; Availability Notice
              </p>
              <p className="text-[#77756D] leading-relaxed">
                DEVAMRUTAM prioritises authentic spiritual sourcing without commercial shortcuts. Tulasi beads and prayer items are sourced with reverence. Pricing, packaging options, and dispatch timelines will be confirmed upon individual enquiry.
              </p>
            </div>

            {/* Enquire CTA */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/contact?category=product&item=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#173D32] text-white font-medium rounded-xl hover:bg-[#102D25] transition-colors text-sm shadow-sm"
              >
                Enquire About This Product
                <ArrowRight size={16} />
              </Link>
              <p className="text-center text-[0.7rem] text-[#77756D]">
                Direct e-commerce checkout is not active in Version 1. All orders and bulk enquiries are managed personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
