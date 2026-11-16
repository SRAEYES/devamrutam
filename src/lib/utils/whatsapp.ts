// Central WhatsApp helper utility for DEVAMRUTAM
export const WHATSAPP_PHONE = '917205645789';
export const DISPLAY_PHONE = '+91 7205645789';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Hare Krishna! I would like to enquire about DEVAMRUTAM spiritual learning and devotional living.';
  const message = customMessage || defaultMsg;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getCourseWhatsAppUrl(courseName: string, courseSanskrit?: string): string {
  const msg = `Hare Krishna! I would like to enquire about admission for *${courseName}*${courseSanskrit ? ` (${courseSanskrit})` : ''} at DEVAMRUTAM Gurukulam. Please share batch timings and details.`;
  return getWhatsAppUrl(msg);
}

export function getProductWhatsAppUrl(productName: string, price?: string): string {
  const priceText = price ? ` [Price: ${price}]` : '';
  const msg = `Hare Krishna! I would like to enquire about *${productName}*${priceText} from DEVAMRUTAM Bhāṇḍāram. Please share ordering and shipping details.`;
  return getWhatsAppUrl(msg);
}
