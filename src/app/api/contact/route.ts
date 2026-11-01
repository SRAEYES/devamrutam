import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation/schemas';
import { supabaseServer, isSupabaseConfigured } from '@/lib/supabase/server';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const json = await request.json();

    // 1. Validate payload with Zod
    const validationResult = contactSchema.safeParse(json);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please verify the submitted details.',
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
        const { error: dbError } = await supabaseServer.from('general_enquiries').insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          category: data.category,
          message: data.message,
          consent: data.consent,
          status: 'new',
        });

        if (dbError) {
          console.error('[Database Insert Contact Error]', dbError);
        } else {
          savedToDatabase = true;
        }
      } catch (dbEx) {
        console.error('[Supabase Contact Error]', dbEx);
      }
    } else {
      console.info('[Contact Message Received (Memory/Log Mode)]', {
        name: data.name,
        email: data.email,
        category: data.category,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Dispatch transactional email (if configured)
    let emailDispatched = false;
    try {
      emailDispatched = await sendContactNotification(data);
    } catch (emailErr) {
      console.error('[Contact Email Dispatch Error]', emailErr);
    }

    // 4. Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to DEVAMRUTAM. Your message has been received.',
      meta: {
        persisted: savedToDatabase,
        emailSent: emailDispatched,
      },
    });
  } catch (error) {
    console.error('[API Contact Route Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your message. Please try again.',
      },
      { status: 500 }
    );
  }
}
