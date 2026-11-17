import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  Package,
  ShieldCheck,
} from "lucide-react";
import {
  products,
  getProductBySlug,
  getProductStatusLabel,
  productCategoryLabels,
} from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/utils/whatsapp";

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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | DEVAMRUTAM BHĀṆḌĀRAM",
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

  const whatsappUrl = getProductWhatsAppUrl(product.name, product.price);

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-[#FAF8F2] border-b border-[#E7DFD0] py-3.5">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-[#77756D]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#173D32] transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/store"
              className="hover:text-[#173D32] transition-colors"
            >
              Store
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#173D32] font-medium" aria-current="page">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16">
        <Link
          href="/store"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#77756D] hover:text-[#173D32] transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft size={14} /> Back to Devotional Store
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Product Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-square bg-gradient-to-br from-[#F5EBD9] via-[#FAF8F2] to-[#FAF8F2] rounded-3xl border border-[#E7DFD0] overflow-hidden shadow-sm flex items-center justify-center">
              <Image
                src={`/images/products/${product.slug}.png`}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
              {product.price && (
                <div className="absolute top-4 right-4">
                  <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-[#173D32] text-[#F5EBD9] shadow-md">
                    {product.price}
                  </span>
                </div>
              )}
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#E7DFD0] flex items-center justify-between text-xs text-[#77756D]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#B68A42]" />{" "}
                Hand-selected devotional curation
              </span>
              <span>Category: {productCategoryLabels[product.category]}</span>
            </div>
          </div>

          {/* Right Column: Information & WhatsApp Order (6 cols) */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B68A42]">
                  {productCategoryLabels[product.category]}
                </span>
                {product.nameSanskrit && (
                  <span className="font-devanagari text-xs text-[#B68A42] font-medium">
                    · {product.nameSanskrit}
                  </span>
                )}
              </div>
              <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#173D32] leading-tight mb-3">
                {product.name}
              </h1>
              {product.price && (
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#173D32]">
                    {product.price}
                  </span>
                </div>
              )}
              <p className="text-sm text-[#373A35] leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Contents breakdown */}
            {product.contents && product.contents.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#E7DFD0] p-6 shadow-2xs">
                <h3 className="font-cormorant font-bold text-lg text-[#173D32] mb-3 flex items-center gap-2">
                  <Package size={18} className="text-[#B68A42]" />
                  What This Curated Pack Contains:
                </h3>
                <ul className="space-y-2.5">
                  {product.contents.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#373A35]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#173D32] flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ordering Instructions Box */}
            <div className="bg-[#F5EBD9]/70 rounded-2xl border border-[#E7DFD0] p-5 text-xs text-[#373A35] space-y-2">
              <p className="font-bold text-[#173D32]">
                How to Order via WhatsApp:
              </p>
              <p className="text-[#77756D] leading-relaxed">
                Click the button below to message us on WhatsApp. We will
                confirm your delivery address, share payment details (UPI/Bank
                Transfer), and dispatch your order with tracking details.
              </p>
            </div>

            {/* Enquire CTA */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#173D32] text-white font-semibold rounded-2xl hover:bg-[#102D25] transition-colors text-sm shadow-sm"
              >
                <MessageCircle size={18} className="text-[#D8BC83]" />
                <span>Order / Enquire on WhatsApp (+91 7205645789)</span>
              </a>
              <p className="text-center text-[0.72rem] text-[#77756D]">
                Direct personalized support via WhatsApp ensures your items are
                packed with devotion and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
