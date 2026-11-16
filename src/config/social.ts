// Social links configuration
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';

export const socialLinks = {
  instagram: {
    label: 'Instagram',
    handle: '@devamrutam',
    url: 'https://www.instagram.com/devamrutam',
    platform: 'instagram' as const,
  },
  youtube: {
    label: 'YouTube',
    handle: '@devamrutam',
    url: 'https://www.youtube.com/@devamrutam',
    platform: 'youtube' as const,
  },
  whatsapp: {
    label: 'WhatsApp',
    handle: '+91 7205645789',
    url: getWhatsAppUrl('Hare Krishna! I would like to connect with DEVAMRUTAM.'),
    platform: 'whatsapp' as const,
  },
  softwarePrabhuji: {
    label: 'Software Prabhuji',
    handle: '@softwareprabhuji',
    url: 'https://www.youtube.com/@softwareprabhuji',
    platform: 'youtube' as const,
    description: 'Devotional content in Telugu, English & Hindi',
  },
} as const;
