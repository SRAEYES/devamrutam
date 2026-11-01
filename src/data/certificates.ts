import type { Certificate } from '@/types';

// Founder certificates
// Image files should be placed in: public/images/certificates/
// If images are not yet available, placeholders are used.
// Replace image paths with actual file names when files are supplied.

export const certificates: Certificate[] = [
  {
    id: 'nitya-pooja',
    organisation: 'Bhadrachadri Sri Rama Temple of USA',
    programme: 'Vishnuchitta Gurukulam',
    achievement: 'Successful completion of Nitya Pooja programme',
    guidance: 'Sri Anchanakam Padmanabha Acharyulu',
    imagePath: '/images/certificates/nitya-pooja.jpg',
    imageAlt: 'Certificate of completion for Nitya Pooja programme — Bhadrachadri Sri Rama Temple of USA, Vishnuchitta Gurukulam',
  },
  {
    id: 'panchamrutha-abhishekam',
    organisation: 'Bhadrachadri Sri Rama Temple of USA',
    programme: 'Vishnuchitta Gurukulam',
    achievement: 'Successful completion of Panchamrutha Abhishekam programme',
    guidance: 'Sri Anchanakam Padmanabha Acharyulu',
    imagePath: '/images/certificates/panchamrutha-abhishekam.jpg',
    imageAlt: 'Certificate of completion for Panchamrutha Abhishekam — Bhadrachadri Sri Rama Temple of USA, Vishnuchitta Gurukulam',
  },
  {
    id: 'gita-gunjana-1',
    organisation: 'Geeta Pariwar',
    achievement: 'Gita Gunjana — Successful recitation examination of Bhagavad Gita Chapters 12 and 15',
    imagePath: '/images/certificates/gita-gunjana-1.jpg',
    imageAlt: 'Gita Gunjana certificate — Bhagavad Gita Chapters 12 and 15 recitation examination — Geeta Pariwar',
  },
  {
    id: 'vishnu-sahasranama',
    organisation: 'Geeta Pariwar',
    achievement: 'Vishnu Sahasranama Stotra recitation examination achievement',
    imagePath: '/images/certificates/vishnu-sahasranama.jpg',
    imageAlt: 'Vishnu Sahasranama Stotra recitation certificate — Geeta Pariwar',
  },
  {
    id: 'gita-gunjana-2',
    organisation: 'Geeta Pariwar',
    achievement: 'Gita Gunjana Certificate of Appreciation — Perfect recitation examination of Bhagavad Gita Chapters 12 and 15',
    imagePath: '/images/certificates/gita-gunjana-2.jpg',
    imageAlt: 'Gita Gunjana Certificate of Appreciation — Perfect recitation — Bhagavad Gita Chapters 12 and 15 — Geeta Pariwar',
  },
];
