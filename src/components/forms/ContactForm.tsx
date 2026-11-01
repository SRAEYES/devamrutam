'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { contactSchema, type ContactInput } from '@/lib/validation/schemas';

function InnerContactForm() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as ContactInput['category'] | null;
  const itemParam = searchParams.get('item');
  const eventParam = searchParams.get('event');
  const titleParam = searchParams.get('title');
  const initialSubject = itemParam || eventParam || titleParam || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: categoryParam || 'general',
      message: initialSubject ? `Regarding: ${initialSubject}\n\n` : '',
      consent: false,
    },
  });

  useEffect(() => {
    if (categoryParam) {
      setValue('category', categoryParam);
    }
    if (initialSubject) {
      setValue('message', `Regarding: ${initialSubject}\n\n`);
    }
  }, [categoryParam, initialSubject, setValue]);

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit contact request. Please try again.');
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-[#FAF8F2] border border-[#B8D5C9] rounded-2xl p-8 sm:p-10 text-center shadow-xs">
        <div className="w-16 h-16 bg-[#EBF4F0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#173D32]">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-3">
          Message Received
        </h3>
        <p className="text-sm text-[#373A35] leading-relaxed max-w-md mx-auto mb-6">
          Thank you for reaching out to DEVAMRUTAM. Our team will review your message and reply via email shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="px-6 py-2.5 border border-[#173D32] text-[#173D32] text-xs font-semibold rounded-lg hover:bg-[#173D32] hover:text-white transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {errorMessage && (
        <div
          role="alert"
          className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-xs text-red-800"
        >
          <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. S. Venkatraman"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
            errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-[#77756D] font-normal text-[0.7rem]">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register('phone')}
            aria-invalid={errors.phone ? 'true' : 'false'}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
              errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
          Enquiry Category <span className="text-red-500">*</span>
        </label>
        <select
          id="category"
          {...register('category')}
          className="w-full px-4 py-3 rounded-lg border border-[#E7DFD0] text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42]"
        >
          <option value="general">General Enquiry</option>
          <option value="course">Course &amp; Gurukulam Question</option>
          <option value="community">Community &amp; Festival Celebrations</option>
          <option value="product">Devotional Store &amp; Products</option>
          <option value="workshop">Speaker or Workshop Proposal</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-600">{errors.category.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contactMessage" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contactMessage"
          rows={5}
          placeholder="Please describe how we can assist you..."
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-1 h-4 w-4 rounded border-[#E7DFD0] text-[#173D32] focus:ring-[#B68A42]"
          />
          <span className="text-xs text-[#77756D] leading-relaxed">
            I consent to DEVAMRUTAM processing my contact details to reply to this message in accordance with the Privacy Policy.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#173D32] text-white font-medium rounded-lg hover:bg-[#102D25] disabled:opacity-60 transition-colors text-sm shadow-sm cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-xs text-[#77756D] flex items-center justify-center gap-2">
          <Loader2 size={16} className="animate-spin text-[#B68A42]" />
          <span>Loading contact form...</span>
        </div>
      }
    >
      <InnerContactForm />
    </Suspense>
  );
}
