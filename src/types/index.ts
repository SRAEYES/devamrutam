// Type definitions for DEVAMRUTAM

export type CourseStatus = 'enquiry-open' | 'enrolling-soon' | 'coming-soon';

export type ProductStatus = 'coming-soon' | 'available-on-enquiry' | 'out-of-stock';

export type EventStatus = 'upcoming' | 'past' | 'coming-soon';

export type TeachingLanguage = 'English' | 'Telugu' | 'Hindi' | 'Other / To Be Discussed';

export type AgeGroup = '5-9' | '8-14' | '10-16' | '5-12' | '10+' | 'All ages';

export interface Course {
  slug: string;
  name: string;
  nameDisplay: string;         // Display name with diacritics
  nameSanskrit: string;        // Sanskrit script
  positioningTagline: string;
  shortDescription: string;
  fullDescription: string;
  ageGroup: string;
  ageGroupDisplay: string;
  status: CourseStatus;
  topics: string[];
  learningObjectives: string[];
  curriculum: CurriculumWeek[];
  teachingFormat: string;
  teachingLanguages: TeachingLanguage[];
  duration: string;            // Configurable placeholder
  faqs: FAQ[];
  image: string;
  colorAccent: string;
  icon: string;                // Emoji or lucide icon name
}

export interface CurriculumWeek {
  week: number;
  title: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Event {
  id: string;
  title: string;
  titleSanskrit?: string;
  category: 'festival' | 'lecture' | 'workshop' | 'children' | 'devotional';
  status: EventStatus;
  date?: string;               // ISO date string, undefined if not yet scheduled
  time?: string;
  location?: string;
  isOnline: boolean;
  description: string;
  audience: string;
  image?: string;
  registrationUrl?: string;
}

export interface Product {
  slug: string;
  name: string;
  nameSanskrit?: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  contents?: string[];
  materials?: string;
  dimensions?: string;
  price?: string;              // Only populate when confirmed
  status: ProductStatus;
  images: string[];
  tags: string[];
}

export type ProductCategory =
  | 'bhakti-packs'
  | 'japa-chanting'
  | 'spiritual-books'
  | 'puja-festival'
  | 'devotional-gifting';

export interface Certificate {
  id: string;
  organisation: string;
  programme?: string;
  achievement: string;
  guidance?: string;
  imagePath: string;
  imageAlt: string;
}

export interface ParentEnquiryFormData {
  parentName: string;
  parentEmail: string;
  parentPhone?: string;
  courseSlug?: string;
  childAgeBand?: string;
  teachingLanguage?: TeachingLanguage;
  message?: string;
  consent: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  category: 'general' | 'course' | 'community' | 'product' | 'workshop';
  message: string;
  consent: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
