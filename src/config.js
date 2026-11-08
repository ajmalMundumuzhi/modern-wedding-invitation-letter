// TODO: confirm which number should receive RSVPs / enquiries.
export const WHATSAPP_NUMBER = '61468898137';

export const waLink = (text, number = WHATSAPP_NUMBER) =>
  `https://wa.me/${String(number).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;