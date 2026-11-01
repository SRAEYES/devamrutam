// Brand identity constants
export const brand = {
  name: 'DEVAMRUTAM',
  wordmark: 'DEVĀMṚTAM',
  devanagari: 'देवामृतम्',
  telugu: 'దేవామృతమ్',
  
  // Division names
  divisions: {
    gurukulam: {
      name: 'DEVAMRUTAM GURUKULAM',
      description: 'Online Spiritual Education',
      tagline: 'Learning rooted in tradition.',
    },
    sannidhyam: {
      name: 'DEVAMRUTAM SANNIDHYAM',
      description: 'Community, Events & Devotional Experiences',
      tagline: 'Come together. Celebrate. Learn.',
    },
    bhandaram: {
      name: 'DEVAMRUTAM BHĀṆḌĀRAM',
      description: 'Devotional Products, Books & Gifting',
      tagline: 'Thoughtful gifts. Meaningful practices.',
    },
  },
  
  // Teaching languages available for courses
  teachingLanguages: ['English', 'Telugu', 'Hindi', 'Other / To Be Discussed'] as const,
  
  // Website language
  websiteLanguage: 'English',
  
  // Colours (CSS custom property names)
  colors: {
    forestGreen: '#173D32',
    deepForest: '#102D25',
    antiqueGold: '#B68A42',
    softGold: '#D8BC83',
    warmIvory: '#F5EBD9',
    bgCream: '#FAF8F2',
    pureWhite: '#FFFFFF',
    templeMaroon: '#722D32',
    bodyText: '#373A35',
    mutedText: '#77756D',
    border: '#E7DFD0',
  },
} as const;
