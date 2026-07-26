/**
 * ÚNICO ARCHIVO DE CONFIGURACIÓN PERSONAL.
 * Edita aquí tus datos: nombre, contacto, redes y credenciales de EmailJS.
 */
export const SITE = {
  name: "Yeison Mayorga",
  initials: "YM",
  role: "Full Stack Developer",
  email: "yeisonfa.2003@gmail.com",
  phone: "+57 314 218 2069",
  /** Solo dígitos, con indicativo del país (para el enlace de WhatsApp). */
  whatsapp: "573142182069",
  location: "Colombia · Remoto / Worldwide",
  /** Cuando compres tu dominio, cámbialo aquí (sin slash final). */
  domain: "",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  /** EmailJS — crea tu cuenta en emailjs.com y pega los IDs aquí. */
  emailjs: {
    serviceId: "",
    templateId: "",
    publicKey: "",
  },
} as const;

export const NAV_LINKS = [
  { id: "sobre-mi", key: "nav.about" },
  { id: "tecnologias", key: "nav.tech" },
  { id: "servicios", key: "nav.services" },
  { id: "portafolio", key: "nav.portfolio" },
  { id: "experiencia", key: "nav.experience" },
  { id: "blog", key: "nav.blog" },
  { id: "contacto", key: "nav.contact" },
] as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
