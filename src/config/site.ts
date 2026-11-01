// Central site configuration — update these values when information becomes available.
// All social links and contact details are placeholders until officially confirmed.

export const siteConfig = {
  // Brand identity
  name: 'DEVAMRUTAM',
  wordmark: 'DEVĀMṚTAM',
  wordmarkSanskrit: 'देवामृतम्',
  wordmarkTelugu: 'దేవామృతమ్',
  
  // Taglines
  taglinePrimary: 'Timeless Wisdom. Devotional Living.',
  taglineSecondary: 'Nurturing Young Hearts with Timeless Wisdom.',
  taglineSupporting: 'Learn. Practise. Experience. Share.',
  
  // Description
  description:
    'Discover DEVAMRUTAM, a spiritual learning initiative introducing children to Sanskrit shlokas, Bhagavad Gita wisdom, devotional stories and Indian cultural traditions.',
  
  // Domain — replace with the actual production domain
  domain: 'https://devamrutam.com',
  
  // Contact — replace with official addresses before launch
  contactEmail: 'contact@devamrutam.com', // PLACEHOLDER
  adminEmail: 'admin@devamrutam.com',      // PLACEHOLDER
  
  // Social media — replace with official handles/URLs before launch
  instagramUrl: 'https://www.instagram.com/devamrutam', // PLACEHOLDER
  youtubeUrl: 'https://www.youtube.com/@devamrutam',     // PLACEHOLDER
  whatsappUrl: 'https://wa.me/91XXXXXXXXXX',             // PLACEHOLDER — add actual WhatsApp Business number
  
  // Software Prabhuji creator identity
  softwarePrabhujiYoutubeUrl: 'https://www.youtube.com/@softwareprabhuji', // PLACEHOLDER
  softwarePrabhujiDescription: 'Founder & Content Creator — Bhagavad Gita, Sanskrit Shlokas & Devotional Content in Telugu, English & Hindi',
  
  // Founder
  founderName: 'Chakka Sraeyes',
  founderRole: 'Founder, DEVAMRUTAM',
  founderBio:
    'DEVAMRUTAM is founded by Chakka Sraeyes, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology. Alongside his academic journey in technology, he has developed a strong interest in Indian spiritual traditions, devotional learning and cultural education.',
  founderBelief: 'Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.',
  
  // SEO defaults
  ogImage: '/images/brand/og-image.png',
  twitterHandle: '@devamrutam',
  
  // Copyright
  copyrightYear: 2026,
} as const;

export type SiteConfig = typeof siteConfig;
