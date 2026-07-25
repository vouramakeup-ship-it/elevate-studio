import emailjs from "@emailjs/browser";
import { SITE } from "@/constants/site";

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const isEmailConfigured = () =>
  Boolean(SITE.emailjs.serviceId && SITE.emailjs.templateId && SITE.emailjs.publicKey);

export async function sendContactEmail(payload: ContactPayload) {
  if (!isEmailConfigured()) throw new Error("EMAILJS_NOT_CONFIGURED");
  await emailjs.send(
    SITE.emailjs.serviceId,
    SITE.emailjs.templateId,
    {
      from_name: payload.name,
      company: payload.company,
      reply_to: payload.email,
      phone: payload.phone,
      message: payload.message,
    },
    { publicKey: SITE.emailjs.publicKey },
  );
}
