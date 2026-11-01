import type { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Learn', href: '/learn' },
  { label: 'Community', href: '/community' },
  { label: 'Store', href: '/store' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavGroups = {
  learn: {
    label: 'Learn',
    items: [
      { label: 'All Programmes', href: '/learn' },
      { label: 'Bāla Amṛtam', href: '/learn/bala-amrutam' },
      { label: 'Śloka Saurabham', href: '/learn/shloka-saurabham' },
      { label: 'Gītā Bodham', href: '/learn/gita-bodham' },
      { label: 'Kathā Amṛtam', href: '/learn/katha-amrutam' },
      { label: 'Nitya Ārādhanā', href: '/learn/nitya-aradhana' },
    ],
  },
  community: {
    label: 'Community',
    items: [
      { label: 'Community Overview', href: '/community' },
      { label: 'Upcoming Events', href: '/community/events' },
      { label: 'Workshops & Webinars', href: '/community/workshops' },
    ],
  },
  store: {
    label: 'Store',
    items: [
      { label: 'All Products', href: '/store' },
      { label: 'Bhakti Packs', href: '/store/bhakti-pack-mini' },
      { label: 'Books', href: '/store/books' },
    ],
  },
  about: {
    label: 'About',
    items: [
      { label: 'About DEVAMRUTAM', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Parent Enquiry', href: '/parent-enquiry' },
    ],
  },
  legal: {
    label: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Shipping Policy', href: '/shipping-policy' },
    ],
  },
};
