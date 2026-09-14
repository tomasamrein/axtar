// +54 3426397415 -> 54 (Argentina) + 9 (mobile prefix) + area+number, no leading 0/15.
// Double-check with a real on-phone test before this goes live.
export const WHATSAPP_NUMBER = "5493426397415";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Tomás, vi la web de Axtar Studio y quiero contarte sobre mi proyecto.";

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
