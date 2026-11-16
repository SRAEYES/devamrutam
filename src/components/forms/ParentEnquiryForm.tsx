'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle2, Loader2, MessageCircle, Send } from 'lucide-react';
import { parentEnquirySchema, type ParentEnquiryInput } from '@/lib/validation/schemas';
import { courses } from '@/data/courses';
import { getCourseWhatsAppUrl, getWhatsAppUrl } from '@/lib/utils/whatsapp';

function InnerParentEnquiryForm() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get('course') || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ParentEnquiryInput | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ParentEnquiryInput>({
    resolver: zodResolver(parentEnquirySchema),
    defaultValues: {
      courseSlug: initialCourse,
      teachingLanguage: 'English',
      consent: false,
    },
  });

  const selectedCourseSlug = watch('courseSlug');

  useEffect(() => {
    if (initialCourse) {
      setValue('courseSlug', initialCourse);
    }
  }, [initialCourse, setValue]);

  const onSubmit = async (data: ParentEnquiryInput) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Unable to submit enquiry. Please try again.');
      }

      setSubmittedData(data);
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

  const selectedCourse = courses.find((c) => c.slug === selectedCourseSlug);
  const directWhatsAppUrl = selectedCourse
    ? getCourseWhatsAppUrl(selectedCourse.nameDisplay, selectedCourse.nameSanskrit)
    : getWhatsAppUrl('Hare Krishna! I would like to enquire about admission to DEVAMRUTAM Gurukulam for my child.');

  if (submitSuccess && submittedData) {
    const successWhatsAppMsg = `Hare Krishna! I have submitted an online enquiry for DEVAMRUTAM Gurukulam.\n\nParent: ${submittedData.parentName}\nEmail: ${submittedData.parentEmail}\nPhone: ${submittedData.parentPhone || 'N/A'}\nCourse: ${submittedData.courseSlug || 'General'}\nAge Band: ${submittedData.childAgeBand || 'N/A'}\nPreferred Language: ${submittedData.teachingLanguage || 'English'}\n\nPlease share batch timings.`;
    const successWhatsAppUrl = getWhatsAppUrl(successWhatsAppMsg);

    return (
      <div className="bg-[#FAF8F2] border border-[#B8D5C9] rounded-3xl p-8 sm:p-10 text-center shadow-xs">
        <div className="w-16 h-16 bg-[#EBF4F0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#173D32]">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#173D32] mb-3">
          Thank you for your interest in DEVAMRUTAM!
        </h3>
        <p className="text-sm text-[#373A35] leading-relaxed max-w-md mx-auto mb-6">
          Your enquiry has been received. Our team will review your details and reach out shortly.
        </p>

        {/* WhatsApp Fast-track Button */}
        <div className="p-4 bg-[#EBF4F0] rounded-2xl border border-[#B8D5C9] max-w-md mx-auto mb-6 space-y-2">
          <p className="text-xs font-bold text-[#173D32]">
            Want a fast response? Continue to WhatsApp:
          </p>
          <a
            href={successWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#173D32] text-white text-xs font-semibold rounded-xl hover:bg-[#102D25] transition-colors w-full shadow-xs"
          >
            <MessageCircle size={16} className="text-[#D8BC83]" />
            <span>Open WhatsApp with Enquiry Details</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitSuccess(false);
            setSubmittedData(null);
          }}
          className="px-6 py-2.5 border border-[#173D32] text-[#173D32] text-xs font-semibold rounded-xl hover:bg-[#173D32] hover:text-white transition-colors cursor-pointer"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Quick WhatsApp Admission Banner */}
      <div className="p-4 bg-[#EBF4F0] border border-[#B8D5C9] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <MessageCircle size={20} className="text-[#173D32] flex-shrink-0" />
          <div className="text-xs text-[#173D32]">
            <span className="font-bold block">Prefer instant WhatsApp communication?</span>
            <span className="text-[#173D32]/80">Connect directly with our admissions desk (+91 7205645789)</span>
          </div>
        </div>
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#173D32] text-white text-xs font-semibold rounded-lg hover:bg-[#102D25] transition-colors whitespace-nowrap self-stretch sm:self-auto justify-center"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>

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

        {/* Parent Name */}
        <div>
          <label htmlFor="parentName" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
            Parent / Guardian Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            placeholder="e.g. Radhika Sharma"
            {...register('parentName')}
            aria-invalid={errors.parentName ? 'true' : 'false'}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
              errors.parentName ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
            }`}
          />
          {errors.parentName && (
            <p className="mt-1 text-xs text-red-600">{errors.parentName.message}</p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="parentEmail" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="parentEmail"
              type="email"
              placeholder="parent@example.com"
              {...register('parentEmail')}
              aria-invalid={errors.parentEmail ? 'true' : 'false'}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
                errors.parentEmail ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
              }`}
            />
            {errors.parentEmail && (
              <p className="mt-1 text-xs text-red-600">{errors.parentEmail.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="parentPhone" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
              Phone / WhatsApp Number <span className="text-[#77756D] font-normal text-[0.7rem]">(Optional)</span>
            </label>
            <input
              id="parentPhone"
              type="tel"
              placeholder="+91 98765 43210"
              {...register('parentPhone')}
              aria-invalid={errors.parentPhone ? 'true' : 'false'}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42] ${
                errors.parentPhone ? 'border-red-400 bg-red-50/20' : 'border-[#E7DFD0]'
              }`}
            />
            {errors.parentPhone && (
              <p className="mt-1 text-xs text-red-600">{errors.parentPhone.message}</p>
            )}
          </div>
        </div>

        {/* Course & Age Band Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="courseSlug" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
              Course of Interest
            </label>
            <select
              id="courseSlug"
              {...register('courseSlug')}
              className="w-full px-4 py-3 rounded-xl border border-[#E7DFD0] text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42]"
            >
              <option value="">General Gurukulam Guidance</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.nameDisplay} ({c.nameSanskrit}) — Ages {c.ageGroupDisplay}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="childAgeBand" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
              Child&apos;s Age Band
            </label>
            <select
              id="childAgeBand"
              {...register('childAgeBand')}
              className="w-full px-4 py-3 rounded-xl border border-[#E7DFD0] text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42]"
            >
              <option value="5-7">5 to 7 years</option>
              <option value="8-10">8 to 10 years</option>
              <option value="11-13">11 to 13 years</option>
              <option value="14-16">14 to 16 years</option>
              <option value="other">Other / Multiple Children</option>
            </select>
          </div>
        </div>

        {/* Preferred Language */}
        <div>
          <label htmlFor="teachingLanguage" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
            Preferred Teaching Language
          </label>
          <select
            id="teachingLanguage"
            {...register('teachingLanguage')}
            className="w-full px-4 py-3 rounded-xl border border-[#E7DFD0] text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42]"
          >
            <option value="English">English</option>
            <option value="Telugu">Telugu</option>
            <option value="Hindi">Hindi</option>
            <option value="Other / To Be Discussed">Other (Tamil / Odia / To Be Discussed)</option>
          </select>
          <p className="mt-1 text-[0.7rem] text-[#77756D]">
            Our founder is fluent in English, Hindi, Telugu, Tamil, and Odia. Shlokas are explained in whichever language the child feels most confident.
          </p>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#173D32] uppercase tracking-wider mb-1.5">
            Questions or Notes for Instructors <span className="text-[#77756D] font-normal text-[0.7rem]">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Please share any prior shloka learning, preferred days/timings, or particular goals..."
            {...register('message')}
            className="w-full px-4 py-3 rounded-xl border border-[#E7DFD0] text-sm text-[#373A35] bg-white focus:outline-none focus:ring-2 focus:ring-[#B68A42]"
          />
        </div>

        {/* Child Privacy & Consent */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('consent')}
              className="mt-1 h-4 w-4 rounded border-[#E7DFD0] text-[#173D32] focus:ring-[#B68A42]"
            />
            <span className="text-xs text-[#77756D] leading-relaxed">
              I confirm that I am the parent or legal guardian. I consent to DEVAMRUTAM contacting me regarding this programme enquiry. We respect child safety and do not collect unnecessary child personal information.
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
          className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#173D32] text-white font-semibold rounded-xl hover:bg-[#102D25] disabled:opacity-60 transition-colors text-sm shadow-sm cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting Enquiry...
            </>
          ) : (
            <>
              <Send size={15} />
              Submit Parent Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function ParentEnquiryForm() {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-xs text-[#77756D] flex items-center justify-center gap-2">
          <Loader2 size={16} className="animate-spin text-[#B68A42]" />
          <span>Loading admission form...</span>
        </div>
      }
    >
      <InnerParentEnquiryForm />
    </Suspense>
  );
}
