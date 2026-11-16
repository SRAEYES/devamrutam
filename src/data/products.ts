import type { Product } from '@/types';

// Product data — DEVAMRUTAM BHĀṆḌĀRAM
// Updated with confirmed introductory prices:
// Mini Pack (with Japa Mala): ₹199 + shipping
// Advanced Pack: ₹249
// Tulasi Japa Mala: ₹59
// Japa Bag: ₹59

export const products: Product[] = [
  // ── Bhakti Packs ──────────────────────────────────────
  {
    slug: 'bhakti-pack-mini',
    name: 'Bhakti Pack Mini',
    nameSanskrit: 'भक्तिपैक (लघु)',
    category: 'bhakti-packs',
    shortDescription:
      'A beautiful devotional starter pack for children including a sacred Tulasi japa mala, cotton japa bag, chanting counter, and beginner shloka cards.',
    fullDescription:
      'The Bhakti Pack Mini is DEVAMRUTAM\'s signature introductory pack designed with warmth for young learners. It brings together all foundational devotional items — including an authentic Tulasi Japa Mala, cotton chanting bag, digital counter, and beautifully illustrated prayer cards — to begin a joyful and disciplined spiritual habit.',
    contents: [
      'Sacred Tulasi Japa Mala (108 beads)',
      'Traditional cotton japa bag',
      'Digital chanting counter',
      'Beginner Sanskrit shloka cards with meanings',
      'Illustrated devotional guide booklet',
      'Welcome blessing card from DEVAMRUTAM',
    ],
    price: '₹199 + shipping',
    status: 'available-on-enquiry',
    images: ['/images/products/bhakti-pack-mini.jpg'],
    tags: ['children', 'beginner', 'japa', 'tulasi-mala', 'gift'],
  },
  {
    slug: 'bhakti-pack-advanced',
    name: 'Bhakti Pack Advanced',
    nameSanskrit: 'भक्तिपैक (उन्नत)',
    category: 'bhakti-packs',
    shortDescription:
      'A comprehensive, premium devotional kit for young practitioners ready to deepen their chanting and daily scripture study.',
    fullDescription:
      'The Bhakti Pack Advanced is crafted for dedicated students and children advancing in their spiritual journey. Containing a premium Tulasi mala, embroidered japa bag, stotra recitation scripture, daily practice journal, and velvet keepsake pouch, it inspires a lifelong devotional discipline.',
    contents: [
      'Premium Tulasi japa mala (108 beads)',
      'Embroidered sacred japa bag with strap',
      'Digital chanting tally counter',
      'Selected Stotra and Shloka scripture book',
      'Daily devotional practice journal',
      'Protective velvet storage pouch',
    ],
    price: '₹249',
    status: 'available-on-enquiry',
    images: ['/images/products/bhakti-pack-advanced.jpg'],
    tags: ['advanced', 'japa', 'tulasi-mala', 'gift', 'stotras'],
  },

  // ── Japa & Chanting Essentials ──────────────────────────────────────
  {
    slug: 'tulasi-japa-mala',
    name: 'Tulasi Japa Mala',
    nameSanskrit: 'तुलसी जपमाला',
    category: 'japa-chanting',
    shortDescription: 'Sacred hand-strung Tulasi Japa Mala (108+1 beads) with traditional knotting for daily mantra recitation.',
    fullDescription:
      'An authentic, reverently sourced Tulasi Japa Mala comprising 108 chanting beads plus the Meru bead. Suitable for children and adults to cultivate focus, peace of mind, and regular recitation discipline.',
    contents: [
      '108+1 genuine Tulasi wood beads',
      'Traditional knotting between beads',
      'Cotton tassel',
    ],
    price: '₹59',
    status: 'available-on-enquiry',
    images: ['/images/products/tulasi-japa-mala.jpg'],
    tags: ['japa', 'tulasi', 'mala', 'chanting', 'sacred'],
  },
  {
    slug: 'japa-bag',
    name: 'Traditional Japa Bag',
    nameSanskrit: 'जप झोली',
    category: 'japa-chanting',
    shortDescription: 'Clean, comfortable cotton chanting bag (Japa Jholi) designed to keep your sacred mala clean and protected.',
    fullDescription:
      'A breathable cotton japa bead bag with an index finger opening and comfortable hanging strap. Ideal for children to hold their mala with reverence while reciting shlokas and daily prayers.',
    contents: [
      'Durable pure cotton fabric',
      'Bead opening and finger loop',
      'Hanging neck/shoulder strap',
    ],
    price: '₹59',
    status: 'available-on-enquiry',
    images: ['/images/products/japa-bag.jpg'],
    tags: ['japa', 'bag', 'chanting', 'accessories'],
  },

  // ── Spiritual Books ──────────────────────────────────────
  {
    slug: 'books',
    name: 'Spiritual Books Collection',
    nameSanskrit: 'आध्यात्मिक ग्रन्थावली',
    category: 'spiritual-books',
    shortDescription: 'Carefully curated spiritual books — Bhagavad Gita editions, shloka books, stotra collections and illustrated stories.',
    fullDescription:
      'DEVAMRUTAM curates inspiring, child-friendly editions of timeless scriptures. From illustrated Bhagavatam tales to clear word-by-word Gita verse translations, these editions make sacred knowledge delightful to read.',
    contents: [
      'Children\'s illustrated Bhagavad Gita',
      'Sanskrit Shloka pocket reciter',
      'Bhagavatam bedtime stories',
    ],
    status: 'coming-soon',
    images: ['/images/products/books.jpg'],
    tags: ['books', 'gita', 'shlokas', 'children', 'scriptures'],
  },

  // ── Puja & Festival Essentials ──────────────────────────────────────
  {
    slug: 'karthika-deepam-set',
    name: 'Karthika Deepam Collection',
    nameSanskrit: 'कार्तिक दीपम् संग्रह',
    category: 'puja-festival',
    shortDescription: 'A curated collection for Karthika Deepam celebrations — brass diyas, sacred wicks and festival essentials.',
    fullDescription:
      'Celebrate the auspicious month of Karthika with hand-cast diyas, pure cotton wicks, and festival storytelling guides for families to perform evening Deeparadhana together.',
    status: 'coming-soon',
    images: ['/images/products/karthika-deepam-set.jpg'],
    tags: ['festival', 'karthika', 'diya', 'puja'],
  },
  {
    slug: 'janmashtami-collection',
    name: 'Janmashtami Collection',
    nameSanskrit: 'जन्माष्टमी संग्रह',
    category: 'puja-festival',
    shortDescription: 'Special Krishna-themed devotional items, peacock feather bookmarks, and festival celebration accessories.',
    fullDescription:
      'A joyful collection dedicated to Sri Krishna\'s appearance day celebrations, featuring pocket verse booklets, altar accessories, and festive gifts for children.',
    status: 'coming-soon',
    images: ['/images/products/janmashtami.jpg'],
    tags: ['festival', 'janmashtami', 'krishna', 'gift'],
  },

  // ── Devotional Gifting ──────────────────────────────────────
  {
    slug: 'devotional-gift-hamper',
    name: 'Devotional Gift Hamper',
    nameSanskrit: 'माङ्गल्य उपहार पेटिका',
    category: 'devotional-gifting',
    shortDescription: 'A beautifully arranged gift hamper with devotional treasures for birthdays, Upanayanam, and family festivals.',
    fullDescription:
      'A customized spiritual gift hamper combining Bhakti packs, scripture books, and auspicious celebration items in an elegant gold-embossed presentation box.',
    status: 'coming-soon',
    images: ['/images/products/gift-hamper.jpg'],
    tags: ['gift', 'hamper', 'devotional', 'celebration'],
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
