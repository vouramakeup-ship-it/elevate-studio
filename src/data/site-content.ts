import type { Localized } from "@/hooks/use-i18n";
import type { Testimonial } from "@/types";

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

/** Agrega nuevos testimonios aquí. */
export const testimonials: Testimonial[] = [
  {
    id: "ts1",
    name: "María Restrepo",
    role: { es: "Gerente de Operaciones", en: "Operations Manager" },
    company: "FoncePan",
    rating: 5,
    quote: {
      es: "Digitalizó por completo nuestra operación. Lo que antes tomaba horas en papel ahora se resuelve en minutos y con información confiable.",
      en: "He fully digitized our operation. What used to take hours on paper now takes minutes, with reliable data.",
    },
  },
  {
    id: "ts2",
    name: "Andrés Gómez",
    role: { es: "Director Comercial", en: "Sales Director" },
    company: "Distribuidora Regional",
    rating: 5,
    quote: {
      es: "La integración con WhatsApp cambió nuestra atención al cliente. Respondemos automáticamente y cerramos más ventas sin ampliar el equipo.",
      en: "The WhatsApp integration transformed our customer service. We reply automatically and close more sales without growing the team.",
    },
  },
  {
    id: "ts3",
    name: "Laura Méndez",
    role: { es: "Fundadora", en: "Founder" },
    company: "Consultora Tecnológica",
    rating: 5,
    quote: {
      es: "Profesional, puntual y muy claro explicando. El sitio quedó impecable y el rendimiento es excelente en todos los dispositivos.",
      en: "Professional, punctual and very clear in his explanations. The site is flawless and performs great on every device.",
    },
  },
];

/** Agrega nuevas preguntas aquí. */
export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: {
      es: "¿Cuánto cuesta desarrollar un proyecto?",
      en: "How much does a project cost?",
    },
    answer: {
      es: "El precio depende del alcance. Después de una llamada corta te envío una propuesta con funcionalidades, tiempos y costo cerrado, sin sorpresas.",
      en: "Pricing depends on scope. After a short call I send a proposal with features, timeline and a fixed cost — no surprises.",
    },
  },
  {
    id: "f2",
    question: { es: "¿Cuánto tarda un desarrollo?", en: "How long does development take?" },
    answer: {
      es: "Una landing page toma entre 1 y 2 semanas. Un sistema de gestión completo, entre 6 y 12 semanas, entregando avances funcionales cada semana.",
      en: "A landing page takes 1–2 weeks. A complete management system takes 6–12 weeks, with working increments delivered every week.",
    },
  },
  {
    id: "f3",
    question: {
      es: "¿Trabajas con empresas fuera de mi ciudad o país?",
      en: "Do you work with companies abroad?",
    },
    answer: {
      es: "Sí. Trabajo 100% en remoto con reuniones por videollamada, repositorio compartido y demos en línea en cada hito.",
      en: "Yes. I work fully remote with video calls, a shared repository and online demos at every milestone.",
    },
  },
  {
    id: "f4",
    question: {
      es: "¿El código queda a mi nombre?",
      en: "Do I own the source code?",
    },
    answer: {
      es: "Sí. Al finalizar el proyecto recibes el código fuente, la documentación y los accesos a la infraestructura.",
      en: "Yes. When the project ends you receive the source code, documentation and infrastructure access.",
    },
  },
  {
    id: "f5",
    question: {
      es: "¿Ofreces mantenimiento después de la entrega?",
      en: "Do you offer maintenance after delivery?",
    },
    answer: {
      es: "Sí. Ofrezco planes mensuales de soporte que incluyen correcciones, mejoras, monitoreo y actualizaciones de seguridad.",
      en: "Yes. I offer monthly support plans covering fixes, improvements, monitoring and security updates.",
    },
  },
  {
    id: "f6",
    question: {
      es: "¿Puedes integrar mi sistema actual con WhatsApp?",
      en: "Can you connect my current system to WhatsApp?",
    },
    answer: {
      es: "Sí, mediante la API oficial de WhatsApp Business (Meta). Conecto notificaciones, respuestas automáticas y flujos de atención con tu sistema.",
      en: "Yes, through the official WhatsApp Business API (Meta). I wire notifications, auto-replies and support flows into your system.",
    },
  },
];
