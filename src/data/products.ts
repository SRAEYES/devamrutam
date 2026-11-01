import type { Product } from '@/types';

// Product data — DEVAMRUTAM BHĀṆḌĀRAM
// Status options: 'coming-soon' | 'available-on-enquiry' | 'out-of-stock'
// 
// IMPORTANT: Do not add price, materials or sourcing details until confirmed.
// All products are currently 'coming-soon'. Update status when ready.

export const products: Product[] = [
  // ── Bhakti Packs ──────────────────────────────────────
  {
    slug: 'bhakti-pack-mini',
    name: 'Bhakti Pack Mini',
    nameSanskrit: 'भक्तिपैक (लघु)',
    category: 'bhakti-packs',
    shortDescription:
      'A beautiful starter pack for children beginning their devotional journey — everything a young devotee needs to start.',
    fullDescription:
      'The Bhakti Pack Mini is DEVAMRUTAM\'s signature beginner pack. Thoughtfully curated with a young learner in mind, it contains essential items to begin a simple, joyful devotional practice.',
    contents: [
      'Small japa bag',
      'Chanting counter',
      'Beginner shloka cards',
      'Small devotional booklet',
      'Welcome card from DEVAMRUTAM',
    ],
    status: 'coming-soon',
    images: ['/images/products/bhakti-pack-mini.jpg'],
    tags: ['children', 'beginner', 'japa', 'gift'],
  },
  {
    slug: 'bhakti-pack-advanced',
    name: 'Bhakti Pack Advanced',
    nameSanskrit: 'भक्तिपैक (उन्नत)',
    category: 'bhakti-packs',
    shortDescription:
      'A comprehensive devotional kit for learners ready to deepen their practice — curated with care for a meaningful experience.',
    fullDescription:
      'The Bhakti Pack Advanced is designed for learners who are ready to go deeper into their devotional practice. It includes a full japa mala, guided chanting resources and a practice journal.',
    contents: [
      'Japa bag',
      'Tulasi japa mala',
      'Chanting guide booklet',
      'Stotra or shloka book',
      'Devotional practice journal',
      'Storage pouch',
    ],
    status: 'coming-soon',
    images: ['/images/products/bhakti-pack-advanced.jpg'],
    tags: ['advanced', 'japa', 'tulasi-mala', 'gift'],
  },

  // ── Japa & Chanting Essentials ──────────────────────────────────────
  {
    slug: 'tulasi-japa-mala',
    name: 'Tulasi Japa Mala',
    category: 'japa-chanting',
    shortDescription: 'A traditional Tulasi Japa Mala for daily chanting and japa practice.',
    fullDescription:
      'A genuine Tulasi Japa Mala for regular devotional use. Suitable for chanting the names of the divine, mantra repetition and daily practice.',
    status: 'coming-soon',
    images: ['/images/products/tulasi-japa-mala.jpg'],
    tags: ['japa', 'tulasi', 'mala', 'chanting'],
  },
  {
    slug: 'japa-bag',
    name: 'Japa Bag',
    category: 'japa-chanting',
    shortDescription: 'A traditional cloth japa bag for your chanting practice.',
    fullDescription: 'A simple, clean japa bag for daily chanting. Keeps your mala protected and convenient to use.',
    status: 'coming-soon',
    images: ['/images/products/japa-bag.jpg'],
    tags: ['japa', 'bag', 'chanting'],
  },

  // ── Spiritual Books ──────────────────────────────────────
  {
    slug: 'books',
    name: 'Spiritual Books Collection',
    category: 'spiritual-books',
    shortDescription: 'Carefully selected spiritual books — Bhagavad Gita, shloka books, stotra collections and children\'s scripture books.',
    fullDescription:
      'DEVAMRUTAM will curate a selection of quality spiritual books suitable for children and families — including Bhagavad Gita editions, shloka books, stotra collections and inspiring children\'s stories from scripture.',
    status: 'coming-soon',
    images: ['/images/products/books.jpg'],
    tags: ['books', 'gita', 'shlokas', 'children'],
  },

  // ── Puja & Festival Essentials ──────────────────────────────────────
  {
    slug: 'karthika-deepam-set',
    name: 'Karthika Deepam Collection',
    category: 'puja-festival',
    shortDescription: 'A curated collection for Karthika Deepam celebrations — diyas, essentials and festival items.',
    fullDescription:
      'Celebrate Karthika Deepam with a thoughtfully curated collection of festival essentials. Details to be finalised.',
    status: 'coming-soon',
    images: ['/images/products/karthika-deepam-set.jpg'],
    tags: ['festival', 'karthika', 'diya'],
  },
  {
    slug: 'janmashtami-collection',
    name: 'Janmashtami Collection',
    category: 'puja-festival',
    shortDescription: 'A special collection for Janmashtami celebrations — Krishna-themed devotional items and gifts.',
    fullDescription:
      'A collection of devotional items and gifts inspired by the celebration of Sri Krishna\'s birth. Details to be finalised.',
    status: 'coming-soon',
    images: ['/images/products/janmashtami.jpg'],
    tags: ['festival', 'janmashtami', 'krishna', 'gift'],
  },

  // ── Devotional Gifting ──────────────────────────────────────
  {
    slug: 'devotional-gift-hamper',
    name: 'Devotional Gift Hamper',
    category: 'devotional-gifting',
    shortDescription: 'A beautifully curated devotional gift hamper — a meaningful gift for any occasion.',
    fullDescription:
      'A thoughtfully assembled devotional gift hamper suitable for gifting on festivals, birthdays and special occasions. Contents and pricing to be confirmed.',
    status: 'coming-soon',
    images: ['/images/products/gift-hamper.jpg'],
    tags: ['gift', 'hamper', 'devotional'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductStatusLabel(status: Product['status']): string {
  switch (status) {
    case 'coming-soon':
      return 'Coming Soon';
    case 'available-on-enquiry':
      return 'Available on Enquiry';
    case 'out-of-stock':
      return 'Out of Stock';
    default:
      return 'Coming Soon';
  }
}

export const productCategoryLabels: Record<Product['category'], string> = {
  'bhakti-packs': 'Bhakti Packs',
  'japa-chanting': 'Japa & Chanting Essentials',
  'spiritual-books': 'Spiritual Books',
  'puja-festival': 'Puja & Festival Essentials',
  'devotional-gifting': 'Devotional Gifting',
};
