import { NextResponse } from 'next/server';
import { parentEnquirySchema } from '@/lib/validation/schemas';
import { supabaseServer, isSupabaseConfigured } from '@/lib/supabase/server';
import { sendParentEnquiryNotification, sendParentEnquiryConfirmation } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const json = await request.json();

    // 1. Validate payload with Zod
    const validationResult = parentEnquirySchema.safeParse(json);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please verify the submitted details.',
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Persist to Supabase (if configured)
    let savedToDatabase = false;
    if (isSupabaseConfigured && supabaseServer) {
      try {
        const { error: dbError } = await supabaseServer.from('parent_enquiries').insert({
          parent_name: data.parentName,
          parent_email: data.parentEmail,
          parent_phone: data.parentPhone || null,
          course_slug: data.courseSlug || null,
          child_age_band: data.childAgeBand || null,
          teaching_language: data.teachingLanguage || null,
          message: data.message || null,
          consent: data.consent,
          status: 'new',
        });

        if (dbError) {
          console.error('[Database Insert Error]', dbError);
        } else {
          savedToDatabase = true;
        }
      } catch (dbEx) {
        console.error('[Supabase Unexpected Error]', dbEx);
      }
    } else {
      // In development / initial launch without credentials, we log safely
      console.info('[Parent Enquiry Received (Memory/Log Mode)]', {
        parentName: data.parentName,
        parentEmail: data.parentEmail,
        courseSlug: data.courseSlug,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Dispatch transactional emails (non-blocking if not configured)
    let emailDispatched = false;
    try {
      const [adminNotified, parentNotified] = await Promise.all([
        sendParentEnquiryNotification(data),
        sendParentEnquiryConfirmation(data),
      ]);
      emailDispatched = adminNotified || parentNotified;
    } catch (emailErr) {
      console.error('[Email Dispatch Error]', emailErr);
    }

    // 4. Return success response
    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been received. We look forward to connecting with you.',
      meta: {
        persisted: savedToDatabase,
        emailSent: emailDispatched,
      },
    });
  } catch (error) {
    console.error('[API Enquiries Route Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your enquiry. Please try again.',
      },
      { status: 500 }
    );
  }
}
