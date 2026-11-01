// Social links configuration — all values are placeholders until officially confirmed
// Update these in src/config/site.ts — they are re-exported here for convenience

export const socialLinks = {
  instagram: {
    label: 'Instagram',
    handle: '@devamrutam',
    url: 'https://www.instagram.com/devamrutam', // PLACEHOLDER
    platform: 'instagram' as const,
  },
  youtube: {
    label: 'YouTube',
    handle: '@devamrutam',
    url: 'https://www.youtube.com/@devamrutam', // PLACEHOLDER
    platform: 'youtube' as const,
  },
  whatsapp: {
    label: 'WhatsApp',
    handle: 'WhatsApp Business',
    url: 'https://wa.me/91XXXXXXXXXX', // PLACEHOLDER — replace with actual WhatsApp Business number
    platform: 'whatsapp' as const,
  },
  softwarePrabhuji: {
    label: 'Software Prabhuji',
    handle: '@softwareprabhuji',
    url: 'https://www.youtube.com/@softwareprabhuji', // PLACEHOLDER
    platform: 'youtube' as const,
    description: 'Devotional content in Telugu, English & Hindi',
  },
} as const;
