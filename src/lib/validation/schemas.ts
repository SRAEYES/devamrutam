import { z } from 'zod';

export const parentEnquirySchema = z.object({
  parentName: z
    .string()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Name is too long.'),
  parentEmail: z
    .string()
    .email('Please enter a valid email address.'),
  parentPhone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+\d\s\-()]{7,20}$/.test(val), {
      message: 'Please enter a valid phone number.',
    }),
  courseSlug: z
    .string()
    .optional(),
  childAgeBand: z
    .string()
    .optional(),
  teachingLanguage: z
    .enum(['English', 'Telugu', 'Hindi', 'Other / To Be Discussed'])
    .optional(),
  message: z
    .string()
    .max(1000, 'Message is too long (max 1000 characters).')
    .optional(),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Please acknowledge and provide consent to continue.',
    }),
});

export type ParentEnquiryInput = z.infer<typeof parentEnquirySchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name.')
    .max(100, 'Name is too long.'),
  email: z
    .string()
    .email('Please enter a valid email address.'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+\d\s\-()]{7,20}$/.test(val), {
      message: 'Please enter a valid phone number.',
    }),
  category: z.enum(['general', 'course', 'community', 'product', 'workshop'], {
    message: 'Please select an enquiry category.',
  }),
  message: z
    .string()
    .min(10, 'Please provide a message (at least 10 characters).')
    .max(2000, 'Message is too long (max 2000 characters).'),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Please acknowledge and provide consent to continue.',
    }),
});

export type ContactInput = z.infer<typeof contactSchema>;
