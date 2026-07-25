import type { BlogPost } from "@/types";

/** Agrega nuevos artículos aquí; aparecerán automáticamente en el blog. */
export const posts: BlogPost[] = [
  {
    slug: "automatizar-atencion-whatsapp-business-api",
    image: "/images/projects/whatsapp.jpg",
    date: "2025-06-12",
    readingTime: 6,
    category: { es: "Automatización", en: "Automation" },
    title: {
      es: "Cómo automatizar la atención al cliente con WhatsApp Business API",
      en: "How to automate customer service with the WhatsApp Business API",
    },
    excerpt: {
      es: "Plantillas, webhooks y enrutamiento a agentes: la arquitectura que usan las empresas para responder al instante sin ampliar el equipo.",
      en: "Templates, webhooks and agent routing: the architecture companies use to reply instantly without growing the team.",
    },
    content: [
      {
        es: "La API oficial de WhatsApp Business permite enviar plantillas aprobadas, recibir mensajes en tiempo real mediante webhooks y mantener una conversación con contexto. A diferencia de las soluciones no oficiales, no se corre el riesgo de bloqueos de cuenta.",
        en: "The official WhatsApp Business API lets you send approved templates, receive messages in real time through webhooks and keep conversations with context. Unlike unofficial solutions, there is no risk of account bans.",
      },
      {
        es: "El primer paso es crear la app en Meta Developers, verificar el número y configurar el webhook con verificación de firma. A partir de ahí, cada mensaje entrante se almacena y se enruta según reglas de negocio.",
        en: "The first step is creating the app in Meta Developers, verifying the number and configuring the webhook with signature verification. From there, every inbound message is stored and routed by business rules.",
      },
      {
        es: "El mayor retorno aparece en las notificaciones automáticas: confirmaciones de pedido, recordatorios y alertas de estado. Reducen llamadas, disminuyen errores y mejoran la percepción de servicio.",
        en: "The biggest return comes from automated notifications: order confirmations, reminders and status alerts. They reduce calls, cut errors and improve perceived service quality.",
      },
    ],
  },
  {
    slug: "sistema-de-inventario-que-si-funciona",
    image: "/images/projects/inventario.jpg",
    date: "2025-05-03",
    readingTime: 5,
    category: { es: "Software Empresarial", en: "Enterprise Software" },
    title: {
      es: "Qué debe tener un sistema de inventario que sí funciona",
      en: "What a truly useful inventory system must have",
    },
    excerpt: {
      es: "Kardex confiable, alertas de stock mínimo y trazabilidad por bodega. Las decisiones técnicas que evitan que el inventario se desincronice.",
      en: "Reliable kardex, minimum-stock alerts and per-warehouse traceability. The technical decisions that keep inventory in sync.",
    },
    content: [
      {
        es: "Un inventario falla cuando el software permite estados imposibles. La solución es modelar movimientos inmutables (entradas, salidas, traslados y ajustes) y calcular las existencias a partir de ellos.",
        en: "Inventory fails when software allows impossible states. The fix is modeling immutable movements (inbound, outbound, transfers and adjustments) and deriving stock from them.",
      },
      {
        es: "Con ese diseño, cualquier diferencia se puede auditar hasta el movimiento exacto que la originó, y los reportes de rotación se vuelven confiables.",
        en: "With that design, any discrepancy can be audited down to the exact movement that caused it, and turnover reports become trustworthy.",
      },
    ],
  },
  {
    slug: "rendimiento-web-lighthouse-95",
    image: "/images/projects/landing.jpg",
    date: "2025-03-21",
    readingTime: 4,
    category: { es: "Rendimiento", en: "Performance" },
    title: {
      es: "Cómo lograr más de 95 en Lighthouse sin sacrificar diseño",
      en: "How to score 95+ on Lighthouse without sacrificing design",
    },
    excerpt: {
      es: "Imágenes optimizadas, carga diferida, fuentes controladas y animaciones que respetan las preferencias del usuario.",
      en: "Optimized images, lazy loading, controlled fonts and animations that respect user preferences.",
    },
    content: [
      {
        es: "El rendimiento no está peleado con una estética premium. La clave está en priorizar el contenido visible, diferir todo lo demás y evitar bloqueos del hilo principal.",
        en: "Performance and premium aesthetics are not at odds. The key is prioritizing visible content, deferring everything else and avoiding main-thread blocking.",
      },
      {
        es: "Las animaciones deben usar transform y opacity, respetar prefers-reduced-motion y ejecutarse solo cuando el elemento entra en pantalla.",
        en: "Animations should use transform and opacity, respect prefers-reduced-motion and only run when the element enters the viewport.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
