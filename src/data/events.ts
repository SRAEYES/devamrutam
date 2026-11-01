import type { Event } from '@/types';

// Event data — add actual events here when scheduled.
// Do not invent event dates or times. Leave date/time undefined for unscheduled events.
// Status options: 'upcoming' | 'past' | 'coming-soon'

export const events: Event[] = [
  {
    id: 'karthika-deepam-2024',
    title: 'Karthika Deepam Celebrations',
    titleSanskrit: 'कार्तिक दीपम्',
    category: 'festival',
    status: 'coming-soon',
    isOnline: true,
    description:
      'A special online celebration of Karthika Deepam — the Festival of Lights. Join us for devotional sharing, stories and the significance of this sacred festival.',
    audience: 'Families and children of all ages',
    image: '/images/community/karthika-deepam.jpg',
  },
  {
    id: 'janmashtami-2025',
    title: 'Janmashtami Programme',
    titleSanskrit: 'जन्माष्टमी',
    category: 'festival',
    status: 'coming-soon',
    isOnline: true,
    description:
      'Celebrate the birth of Sri Krishna with devotional songs, stories from Krishna\'s childhood and cultural activities for children.',
    audience: 'Children, families',
    image: '/images/community/janmashtami.jpg',
  },
  {
    id: 'shloka-competition',
    title: 'Shloka Recitation Competition',
    category: 'children',
    status: 'coming-soon',
    isOnline: true,
    description:
      'An encouraging competition for children to showcase their shloka recitation skills. Categories for different age groups.',
    audience: 'Children aged 5–16',
    image: '/images/community/shloka-competition.jpg',
  },
  {
    id: 'gita-quiz',
    title: 'Bhagavad Gita Quiz',
    category: 'children',
    status: 'coming-soon',
    isOnline: true,
    description:
      'A fun and educational Bhagavad Gita quiz designed to test and celebrate children\'s knowledge of the Gita\'s stories and teachings.',
    audience: 'Children aged 10–16',
  },
  {
    id: 'webinar-devotional-practices',
    title: 'Introduction to Devotional Practices',
    category: 'workshop',
    status: 'coming-soon',
    isOnline: true,
    description:
      'An introductory webinar on daily devotional practices — their significance, how to begin and how to create a meaningful routine for your family.',
    audience: 'Parents and families',
  },
];

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => e.status === 'upcoming');
}

export function getEventsByCategory(category: Event['category']): Event[] {
  return events.filter((e) => e.category === category);
}
