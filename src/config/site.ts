// Central site configuration — updated with verified official channels
import { WHATSAPP_PHONE, DISPLAY_PHONE, getWhatsAppUrl } from '@/lib/utils/whatsapp';

export const siteConfig = {
  // Brand identity
  name: 'DEVAMRUTAM',
  wordmark: 'DEVĀMṚTAM',
  wordmarkSanskrit: 'देवामृतम्',
  wordmarkTelugu: 'దేवाమృతమ్',
  
  // Taglines
  taglinePrimary: 'Timeless Wisdom. Devotional Living.',
  taglineSecondary: 'Nurturing Young Hearts with Timeless Wisdom.',
  taglineSupporting: 'Learn. Practise. Experience. Share.',
  
  // Description
  description:
    'Discover DEVAMRUTAM, a spiritual learning initiative introducing children to Sanskrit shlokas, Bhagavad Gita wisdom, devotional stories and Indian cultural traditions.',
  
  // Domain
  domain: 'https://devamrutam.vercel.app',
  
  // Official Contact Channels
  contactEmail: 'devamrutam27@gmail.com',
  adminEmail: 'devamrutam27@gmail.com',
  phone: DISPLAY_PHONE,
  rawPhone: '7205645789',
  
  // Social media
  instagramUrl: 'https://www.instagram.com/devamrutam',
  youtubeUrl: 'https://www.youtube.com/@devamrutam',
  whatsappUrl: getWhatsAppUrl('Hare Krishna! I would like to connect with DEVAMRUTAM.'),
  
  // Software Prabhuji creator identity
  softwarePrabhujiYoutubeUrl: 'https://www.youtube.com/@softwareprabhuji',
  softwarePrabhujiDescription: 'Founder & Content Creator — Bhagavad Gita, Sanskrit Shlokas & Devotional Content in Telugu, English & Hindi',
  
  // Founder
  founderName: 'Chakka Sraeyes',
  founderRole: 'Founder, DEVAMRUTAM',
  founderLanguages: ['English', 'Telugu', 'Hindi', 'Tamil', 'Odia'],
  founderBio:
    'DEVAMRUTAM is founded by Chakka Sraeyes, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology. A passionate spiritual educator and polyglot fluent in English, Hindi, Telugu, Tamil, and Odia, he explains intricate scriptural wisdom, Sanskrit pronunciation, and philosophical values with clarity, warmth, and deep cultural relatability.',
  founderBelief: 'Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.',
  
  // SEO defaults
  ogImage: '/images/brand/og-image.png',
  twitterHandle: '@devamrutam',
  
  // Copyright
  copyrightYear: 2026,
} as const;

export type SiteConfig = typeof siteConfig;
