// Email service using Resend
// If RESEND_API_KEY is not configured, email sending is skipped gracefully.
// The website will NOT report successful email delivery if this is not configured.

import { Resend } from 'resend';
import type { ParentEnquiryInput } from '@/lib/validation/schemas';
import type { ContactInput } from '@/lib/validation/schemas';

function getResendClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

const adminEmail = process.env.ADMIN_EMAIL || process.env.CONTACT_EMAIL || '';
const fromEmail = 'noreply@devamrutam.com'; // Update after domain verification in Resend

export async function sendParentEnquiryNotification(data: ParentEnquiryInput): Promise<boolean> {
  const resend = getResendClient();
  if (!resend || !adminEmail) return false;

  try {
    const courseLabel = data.courseSlug
      ? data.courseSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      : 'Not specified';

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Parent Enquiry — ${courseLabel} | DEVAMRUTAM`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FAF8F2; border-radius: 8px;">
          <h2 style="color: #173D32; border-bottom: 2px solid #B68A42; padding-bottom: 12px;">New Parent Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #77756D; width: 40%;">Parent Name</td><td style="padding: 8px 0; color: #373A35;"><strong>${data.parentName}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Email</td><td style="padding: 8px 0; color: #373A35;">${data.parentEmail}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Phone</td><td style="padding: 8px 0; color: #373A35;">${data.parentPhone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Programme</td><td style="padding: 8px 0; color: #373A35;">${courseLabel}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Child Age Band</td><td style="padding: 8px 0; color: #373A35;">${data.childAgeBand || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Teaching Language</td><td style="padding: 8px 0; color: #373A35;">${data.teachingLanguage || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #373A35;">${data.message || 'No message provided'}</td></tr>
          </table>
          <p style="color: #77756D; font-size: 12px; margin-top: 24px;">Sent from DEVAMRUTAM parent enquiry form. Consent given: ${data.consent ? 'Yes' : 'No'}</p>
        </div>
      `,
    });
    return true;
  } catch (err) {
    console.error('Failed to send admin enquiry notification:', err);
    return false;
  }
}

export async function sendParentEnquiryConfirmation(data: ParentEnquiryInput): Promise<boolean> {
  const resend = getResendClient();
  if (!resend) return false;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: data.parentEmail,
      subject: 'Thank you for your enquiry — DEVAMRUTAM',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FAF8F2; border-radius: 8px;">
          <h2 style="color: #173D32; border-bottom: 2px solid #B68A42; padding-bottom: 12px;">Thank you, ${data.parentName}</h2>
          <p style="color: #373A35; line-height: 1.7;">Thank you for your interest in DEVAMRUTAM. Your enquiry has been received.</p>
          <p style="color: #373A35; line-height: 1.7;">We look forward to connecting with you and helping you explore our learning programmes.</p>
          <div style="background: #F5EBD9; border-left: 3px solid #B68A42; padding: 16px; margin: 24px 0; border-radius: 4px;">
            <p style="color: #173D32; margin: 0; font-style: italic;">"Timeless Wisdom. Devotional Living."</p>
          </div>
          <p style="color: #77756D;">— The DEVAMRUTAM Team</p>
          <p style="color: #77756D; font-size: 12px; margin-top: 24px;">DEVAMRUTAM | देवामृतम्</p>
        </div>
      `,
    });
    return true;
  } catch (err) {
    console.error('Failed to send parent confirmation email:', err);
    return false;
  }
}

export async function sendContactNotification(data: ContactInput): Promise<boolean> {
  const resend = getResendClient();
  if (!resend || !adminEmail) return false;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Enquiry — ${data.category} | DEVAMRUTAM`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FAF8F2; border-radius: 8px;">
          <h2 style="color: #173D32; border-bottom: 2px solid #B68A42; padding-bottom: 12px;">New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #77756D; width: 40%;">Name</td><td style="padding: 8px 0; color: #373A35;"><strong>${data.name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Email</td><td style="padding: 8px 0; color: #373A35;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Phone</td><td style="padding: 8px 0; color: #373A35;">${data.phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D;">Category</td><td style="padding: 8px 0; color: #373A35;">${data.category}</td></tr>
            <tr><td style="padding: 8px 0; color: #77756D; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #373A35;">${data.message}</td></tr>
          </table>
          <p style="color: #77756D; font-size: 12px; margin-top: 24px;">Sent from DEVAMRUTAM contact form. Consent given: ${data.consent ? 'Yes' : 'No'}</p>
        </div>
      `,
    });
    return true;
  } catch (err) {
    console.error('Failed to send contact notification:', err);
    return false;
  }
}
