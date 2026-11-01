import type { Course } from '@/types';

// Course status configuration — change these to update what is shown on the website.
// Status options: 'enquiry-open' | 'enrolling-soon' | 'coming-soon'
//
// For the initial launch:
//   - bala-amrutam: 'enquiry-open'
//   - shloka-saurabham: 'enquiry-open'
//   - All others: 'coming-soon'

export const courses: Course[] = [
  {
    slug: 'bala-amrutam',
    name: 'BĀLA AMṚTAM',
    nameDisplay: 'Bāla Amṛtam',
    nameSanskrit: 'बालामृतम्',
    positioningTagline: 'A joyful first step into spiritual learning.',
    shortDescription:
      'A gentle, joyful introduction to devotional practices, simple Sanskrit shlokas, Krishna and Rama stories, and core spiritual values for young children.',
    fullDescription:
      'Bāla Amṛtam is designed to be a child\'s very first encounter with India\'s rich spiritual tradition — warm, joyful and entirely at the child\'s pace. Through simple shlokas, illustrated devotional stories and value-based activities, young learners develop a natural love for learning, prayers and devotional practices.',
    ageGroup: '5-9',
    ageGroupDisplay: '5–9 years',
    status: 'enquiry-open',
    image: '/images/courses/bala-amrutam.jpg',
    colorAccent: '#B68A42',
    icon: '🌸',
    topics: [
      'Basic prayers and simple greetings to the divine',
      'Simple Sanskrit shlokas with pronunciation',
      'Introduction to devotional practices',
      'Krishna and Rama stories from scripture',
      'Values — kindness, gratitude and respect',
      'Simple recitation practice and memorisation',
    ],
    learningObjectives: [
      'Develop a familiarity with devotional prayers',
      'Learn 3–5 simple Sanskrit shlokas with meaning',
      'Understand stories of Krishna and Rama',
      'Practise basic recitation and pronunciation',
      'Develop early spiritual values in everyday life',
    ],
    curriculum: [
      { week: 1, title: 'Introduction and Simple Prayers', description: 'Getting to know the programme, simple greetings to the divine and introduction to daily prayer.' },
      { week: 2, title: 'Basic Shloka Pronunciation', description: 'Understanding Sanskrit sounds, vowels and how to pronounce shlokas correctly.' },
      { week: 3, title: 'Shloka Learning and Recitation', description: 'Learning and practising selected simple shlokas with their meanings.' },
      { week: 4, title: 'Devotional Stories', description: 'Stories of Krishna\'s childhood, Rama\'s values and other inspiring tales from scripture.' },
      { week: 5, title: 'Values and Practical Learning', description: 'Kindness, gratitude, respect — understanding how values apply to everyday life.' },
      { week: 6, title: 'Revision and Recitation Practice', description: 'Reviewing all shlokas, stories and prayers. Group recitation and celebration.' },
    ],
    teachingFormat: 'Interactive online sessions with stories, recitation practice and discussion.',
    teachingLanguages: ['English', 'Telugu', 'Hindi'],
    duration: 'To be confirmed — estimated 6 weeks',
    faqs: [
      {
        question: 'What age group is this programme for?',
        answer: 'Bāla Amṛtam is designed for children aged 5–9 years. However, we treat this as a suggestion, not a strict rule. If you feel your child is ready, please enquire.',
      },
      {
        question: 'Does my child need any prior knowledge of Sanskrit?',
        answer: 'No prior knowledge is needed. This programme starts from the very basics and is designed to be accessible for children with no previous experience.',
      },
      {
        question: 'In which language will the sessions be conducted?',
        answer: 'Sessions can be conducted in English, Telugu or Hindi. Please indicate your preference when you enquire.',
      },
      {
        question: 'How long is each session?',
        answer: 'Session duration will be confirmed at the time of enrolment. We will design sessions that are engaging and appropriate for young children\'s attention spans.',
      },
      {
        question: 'Does a parent need to be present?',
        answer: 'For young children, we recommend a parent or guardian to be nearby during sessions, particularly for the first few sessions.',
      },
    ],
  },

  {
    slug: 'shloka-saurabham',
    name: 'ŚLOKA SAURABHAM',
    nameDisplay: 'Śloka Saurabham',
    nameSanskrit: 'श्लोकसौरभम्',
    positioningTagline: 'Discover the beauty of Sanskrit shlokas.',
    shortDescription:
      'A structured programme in Sanskrit shloka recitation, ashtakas and stotras for children and young learners who want to go deeper into devotional recitation.',
    fullDescription:
      'Śloka Saurabham offers a deeper exploration of Sanskrit shlokas, ashtakas and stotras. Learners develop correct pronunciation, memorisation techniques and an understanding of the meaning behind the verses they recite. This programme builds devotional discipline and a genuine appreciation of Sanskrit\'s beauty.',
    ageGroup: '8-14',
    ageGroupDisplay: '8–14 years',
    status: 'enquiry-open',
    image: '/images/courses/shloka-saurabham.jpg',
    colorAccent: '#173D32',
    icon: '📿',
    topics: [
      'Sanskrit pronunciation and phonetics',
      'Shloka recitation — selected devotional verses',
      'Meaning and context of selected shlokas',
      'Ashtakas — structure and recitation',
      'Stotras — devotional hymns',
      'Memorisation techniques and regular practice',
      'Devotional recitation discipline',
    ],
    learningObjectives: [
      'Develop correct Sanskrit pronunciation',
      'Learn selected shlokas, ashtakas and stotras',
      'Understand the meanings of the verses',
      'Build a regular recitation practice',
      'Develop discipline, patience and devotion',
    ],
    curriculum: [
      { week: 1, title: 'Sanskrit Sounds and Phonetics', description: 'Introduction to Sanskrit pronunciation, vowels and consonants.' },
      { week: 2, title: 'Selected Shlokas — Part 1', description: 'Learning the first set of selected devotional shlokas with correct pronunciation.' },
      { week: 3, title: 'Selected Shlokas — Part 2 and Meanings', description: 'Continuing with shlokas and exploring their meanings and context.' },
      { week: 4, title: 'Introduction to Ashtakas', description: 'Understanding the structure of ashtakas and beginning recitation practice.' },
      { week: 5, title: 'Selected Stotras', description: 'Introduction to stotras — devotional hymns and their significance.' },
      { week: 6, title: 'Memorisation and Regular Practice', description: 'Techniques for memorising shlokas and building a daily recitation habit.' },
      { week: 7, title: 'Devotional Recitation — Advanced Practice', description: 'Combining all learned content into a confident recitation practice.' },
      { week: 8, title: 'Revision and Recitation Session', description: 'Full revision, group recitation and celebration of progress.' },
    ],
    teachingFormat: 'Structured online sessions with pronunciation drills, group recitation and guided practice.',
    teachingLanguages: ['English', 'Telugu', 'Hindi'],
    duration: 'To be confirmed — estimated 8 weeks',
    faqs: [
      {
        question: 'Is any prior knowledge of Sanskrit required?',
        answer: 'Basic familiarity with Sanskrit sounds is helpful but not required. We will cover pronunciation from the beginning.',
      },
      {
        question: 'Which shlokas and stotras will be covered?',
        answer: 'The specific selection will be finalised before the programme begins. Details will be shared with enrolled families.',
      },
      {
        question: 'In which languages are sessions available?',
        answer: 'Sessions can be conducted in English, Telugu or Hindi. Please indicate your preference in your enquiry.',
      },
      {
        question: 'Can adults join this programme?',
        answer: 'While the programme is designed for children aged 8–14, adults interested in shloka learning are welcome to enquire.',
      },
    ],
  },

  {
    slug: 'gita-bodham',
    name: 'GĪTĀ BODHAM',
    nameDisplay: 'Gītā Bodham',
    nameSanskrit: 'गीताबोधम्',
    positioningTagline: 'Discover timeless wisdom through the Bhagavad Gita.',
    shortDescription:
      'An accessible and meaningful introduction to the Bhagavad Gita for older children, exploring selected verses, their meanings and their application to everyday life.',
    fullDescription:
      'Gītā Bodham introduces young learners to the Bhagavad Gita through selected verses, engaging discussion and real-life application. Rather than being a scholarly course, this programme focuses on making the Gita\'s wisdom approachable, relevant and genuinely inspiring for the next generation.',
    ageGroup: '10-16',
    ageGroupDisplay: '10–16 years',
    status: 'coming-soon',
    image: '/images/courses/gita-bodham.jpg',
    colorAccent: '#722D32',
    icon: '📖',
    topics: [
      'Introduction to the Bhagavad Gita — context and significance',
      'The dialogue between Krishna and Arjuna',
      'Selected verses from key chapters',
      'Simple meanings of chosen verses',
      'Spiritual values and real-life application',
      'Chapter introductions and overview',
      'Guided discussions and reflections',
    ],
    learningObjectives: [
      'Understand the context and significance of the Bhagavad Gita',
      'Learn selected verses and their meanings',
      'Explore the themes of duty, devotion and wisdom',
      'Apply Gita values to everyday situations',
      'Develop a genuine interest in the Gita',
    ],
    curriculum: [
      { week: 1, title: 'Introduction to the Bhagavad Gita' },
      { week: 2, title: 'Krishna and Arjuna — The Great Dialogue' },
      { week: 3, title: 'Selected Verses — Chapter 2' },
      { week: 4, title: 'Selected Verses — Chapters 9 and 12' },
      { week: 5, title: 'The Path of Devotion (Bhakti Yoga)' },
      { week: 6, title: 'Values — Duty, Equanimity and Surrender' },
      { week: 7, title: 'Real-Life Applications of Gita Wisdom' },
      { week: 8, title: 'Reflection, Discussion and Conclusion' },
    ],
    teachingFormat: 'Discussion-based online sessions with verse study, storytelling and guided reflection.',
    teachingLanguages: ['English', 'Telugu', 'Hindi'],
    duration: 'To be confirmed',
    faqs: [
      {
        question: 'Does my child need to have read the Bhagavad Gita before joining?',
        answer: 'No. This programme assumes no prior knowledge of the Gita.',
      },
      {
        question: 'Is this a religious programme?',
        answer: 'This programme is rooted in Indian spiritual tradition and the Bhagavad Gita. It is respectful, inclusive and focused on values and wisdom.',
      },
    ],
  },

  {
    slug: 'katha-amrutam',
    name: 'KATHĀ AMṚTAM',
    nameDisplay: 'Kathā Amṛtam',
    nameSanskrit: 'कथामृतम्',
    positioningTagline: 'Timeless stories. Meaningful lessons.',
    shortDescription:
      'A collection of captivating stories from the Bhagavatam, Ramayana and Mahabharata — bringing India\'s greatest stories to life for children.',
    fullDescription:
      'Kathā Amṛtam brings the greatest stories of India\'s spiritual heritage to life for young audiences. Through engaging storytelling of tales from the Bhagavatam, Ramayana and Mahabharata, children discover inspiring examples of devotion, courage, wisdom and kindness.',
    ageGroup: '5-12',
    ageGroupDisplay: '5–12 years',
    status: 'coming-soon',
    image: '/images/courses/katha-amrutam.jpg',
    colorAccent: '#B68A42',
    icon: '📜',
    topics: [
      'Stories from Srimad Bhagavatam',
      'Ramayana stories — Rama, Sita, Hanuman',
      'Mahabharata stories — Pandavas, Krishna',
      'Krishna\'s childhood stories (Bal Leela)',
      'Prahlada — devotion and faith',
      'Dhruva — determination and surrender',
      'Stories of courage, devotion and kindness',
    ],
    learningObjectives: [
      'Develop familiarity with India\'s great spiritual stories',
      'Understand values through story-based learning',
      'Develop imagination and a love for stories',
      'Identify inspiring examples from scripture',
      'Build cultural awareness and spiritual curiosity',
    ],
    curriculum: [
      { week: 1, title: 'Introduction — The World of Sacred Stories' },
      { week: 2, title: 'Krishna\'s Childhood — Bal Leela Stories' },
      { week: 3, title: 'Stories of Prahlada and Dhruva' },
      { week: 4, title: 'Ramayana — Rama, Sita and Hanuman' },
      { week: 5, title: 'Mahabharata — The Pandavas and Krishna' },
      { week: 6, title: 'Values in Stories — Courage, Devotion, Kindness' },
    ],
    teachingFormat: 'Engaging storytelling sessions with illustrations, activities and discussions.',
    teachingLanguages: ['English', 'Telugu', 'Hindi'],
    duration: 'To be confirmed',
    faqs: [
      {
        question: 'Are these stories suitable for young children?',
        answer: 'Yes. Stories will be selected and presented in an age-appropriate manner for the registered age group.',
      },
    ],
  },

  {
    slug: 'nitya-aradhana',
    name: 'NITYA ĀRĀDHANĀ',
    nameDisplay: 'Nitya Ārādhanā',
    nameSanskrit: 'नित्यआराधना',
    positioningTagline: 'An introduction to traditional daily devotional practices.',
    shortDescription:
      'A thoughtful introduction to traditional daily devotional practices — daily prayer, nitya puja, selected stotras and the significance of offerings.',
    fullDescription:
      'Nitya Ārādhanā introduces learners to the beauty of traditional daily devotional practice. This programme covers the significance of daily prayer, basic puja procedures, selected stotras and the etiquette of devotional offerings. Designed for older children and teenagers with parental guidance.',
    ageGroup: '10+',
    ageGroupDisplay: '10+ years (with parental guidance)',
    status: 'coming-soon',
    image: '/images/courses/nitya-aradhana.jpg',
    colorAccent: '#173D32',
    icon: '🪔',
    topics: [
      'Daily prayer — significance and practice',
      'Introduction to Nitya Puja',
      'Selected stotras and their significance',
      'Traditional devotional practices',
      'Significance of offerings — flowers, incense, lamp',
      'Basic puja procedure and etiquette',
    ],
    learningObjectives: [
      'Understand the significance of daily devotional practice',
      'Learn the basic procedure of Nitya Puja',
      'Learn selected stotras for daily recitation',
      'Develop a regular devotional routine',
      'Understand the meaning of traditional offerings',
    ],
    curriculum: [
      { week: 1, title: 'Introduction — Daily Devotional Practice' },
      { week: 2, title: 'Daily Prayer and Morning Routine' },
      { week: 3, title: 'Nitya Puja — Procedure and Significance' },
      { week: 4, title: 'Significance of Offerings' },
      { week: 5, title: 'Selected Stotras for Daily Recitation' },
      { week: 6, title: 'Building a Devotional Routine' },
    ],
    teachingFormat: 'Guided online sessions with practical demonstrations and discussion.',
    teachingLanguages: ['English', 'Telugu', 'Hindi'],
    duration: 'To be confirmed',
    faqs: [
      {
        question: 'Does this programme require purchasing puja materials?',
        answer: 'Basic puja materials are helpful but not mandatory for joining this programme. A detailed list will be provided to enrolled families.',
      },
      {
        question: 'Is parental involvement required?',
        answer: 'Yes, we recommend parental guidance and involvement, particularly for younger participants in this age group.',
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByStatus(status: Course['status']): Course[] {
  return courses.filter((c) => c.status === status);
}

export function getStatusLabel(status: Course['status']): string {
  switch (status) {
    case 'enquiry-open':
      return 'Enquiry Open';
    case 'enrolling-soon':
      return 'Enrolling Soon';
    case 'coming-soon':
      return 'Coming Soon';
    default:
      return 'Coming Soon';
  }
}
