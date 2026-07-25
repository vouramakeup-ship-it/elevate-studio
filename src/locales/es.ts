export const es = {
  "nav.about": "Sobre mí",
  "nav.tech": "Tecnologías",
  "nav.services": "Servicios",
  "nav.portfolio": "Portafolio",
  "nav.experience": "Experiencia",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "nav.cta": "Hablemos",

  "loader.text": "Compilando experiencia...",

  "hero.badge": "Disponible para nuevos proyectos",
  "hero.title1": "Construyo software",
  "hero.title2": "que hace crecer empresas",
  "hero.desc":
    "Diseño y desarrollo plataformas web, móviles y de escritorio a la medida: sistemas de gestión, automatizaciones, APIs e integraciones con WhatsApp Business API. Código limpio, escalable y pensado para el negocio.",
  "hero.cta1": "Ver proyectos",
  "hero.cta2": "Contactarme",
  "hero.scroll": "Desliza",

  "about.tag": "Sobre mí",
  "about.title": "Ingeniería con visión de negocio",
  "about.p1":
    "Soy desarrollador Full Stack especializado en convertir procesos manuales y desordenados en software confiable. Trabajo de punta a punta: entiendo el problema, diseño la arquitectura, construyo la interfaz, el backend y la base de datos, y acompaño el producto después del lanzamiento.",
  "about.p2":
    "Mi enfoque combina experiencia de usuario cuidada con fundamentos técnicos sólidos: rendimiento, seguridad, escalabilidad y mantenibilidad. Cada proyecto se entrega documentado, medible y listo para crecer.",
  "about.p3":
    "He trabajado con empresas que necesitaban inventarios en tiempo real, canales de atención automatizados por WhatsApp y paneles de gestión hechos a la medida de su operación.",
  "about.h1": "Enfoque en resultados",
  "about.h1d": "Cada línea de código responde a un objetivo de negocio medible.",
  "about.h2": "Comunicación clara",
  "about.h2d": "Avances semanales, demos y sin tecnicismos innecesarios.",
  "about.h3": "Entrega puntual",
  "about.h3d": "Alcance definido, hitos claros y cumplimiento de plazos.",
  "about.h4": "Soporte continuo",
  "about.h4d": "Mantenimiento, mejoras y acompañamiento después del lanzamiento.",

  "tech.tag": "Stack tecnológico",
  "tech.title": "Tecnologías que domino",
  "tech.desc":
    "Un stack moderno, probado en producción y elegido para construir productos rápidos, seguros y fáciles de mantener.",
  "tech.level": "Nivel",

  "services.tag": "Servicios",
  "services.title": "Soluciones tecnológicas a la medida",
  "services.desc":
    "Desde una landing page de alto impacto hasta plataformas empresariales completas.",
  "services.cta": "Solicitar",

  "portfolio.tag": "Portafolio",
  "portfolio.title": "Proyectos seleccionados",
  "portfolio.desc":
    "Casos reales de software construido para resolver problemas concretos de negocio.",
  "portfolio.all": "Todos",
  "portfolio.more": "Ver más",
  "portfolio.demo": "Demo",
  "portfolio.code": "GitHub",
  "portfolio.client": "Cliente",
  "portfolio.date": "Fecha",
  "portfolio.category": "Categoría",
  "portfolio.status": "Estado",
  "portfolio.gallery": "Galería",
  "portfolio.stack": "Tecnologías",
  "portfolio.close": "Cerrar",

  "stats.tech": "Tecnologías",
  "stats.projects": "Proyectos entregados",
  "stats.hours": "Horas de desarrollo",
  "stats.commit": "Compromiso",

  "experience.tag": "Trayectoria",
  "experience.title": "Mi experiencia",
  "experience.desc": "Una línea de tiempo de mi evolución profesional y técnica.",

  "blog.tag": "Blog",
  "blog.title": "Artículos y notas técnicas",
  "blog.desc": "Ideas sobre desarrollo, arquitectura y automatización de procesos.",
  "blog.read": "Leer más",
  "blog.readtime": "min de lectura",
  "blog.back": "Volver al inicio",

  "testimonials.tag": "Testimonios",
  "testimonials.title": "Lo que dicen mis clientes",
  "testimonials.desc": "Resultados reales, relaciones a largo plazo.",

  "faq.tag": "FAQ",
  "faq.title": "Preguntas frecuentes",
  "faq.desc": "Todo lo que sueles querer saber antes de empezar un proyecto.",

  "contact.tag": "Contacto",
  "contact.title": "Cuéntame tu proyecto",
  "contact.desc":
    "Respondo en menos de 24 horas. Cuéntame qué necesitas y te propongo una solución con alcance y tiempos.",
  "contact.name": "Nombre",
  "contact.company": "Empresa",
  "contact.email": "Correo",
  "contact.phone": "Teléfono",
  "contact.message": "Mensaje",
  "contact.placeholder": "Cuéntame brevemente qué necesitas construir...",
  "contact.send": "Enviar mensaje",
  "contact.sending": "Enviando...",
  "contact.success": "¡Mensaje enviado! Te responderé muy pronto.",
  "contact.error": "No se pudo enviar el mensaje. Escríbeme por WhatsApp o correo.",
  "contact.notconfigured":
    "Configura tus credenciales de EmailJS en src/constants/site.ts para activar el envío.",
  "contact.err.name": "Ingresa tu nombre (mínimo 2 caracteres).",
  "contact.err.email": "Ingresa un correo válido.",
  "contact.err.phone": "Ingresa un teléfono válido.",
  "contact.err.message": "Cuéntame un poco más (mínimo 10 caracteres).",
  "contact.direct": "Canales directos",
  "contact.whatsapp": "Escribir por WhatsApp",

  "footer.tagline": "Software a la medida para empresas que quieren crecer.",
  "footer.links": "Enlaces rápidos",
  "footer.social": "Redes",
  "footer.rights": "Todos los derechos reservados.",
  "footer.built": "Diseñado y desarrollado con React, TypeScript y mucho café.",

  "a11y.theme": "Cambiar tema",
  "a11y.lang": "Cambiar idioma",
  "a11y.menu": "Abrir menú",
  "a11y.whatsapp": "Escribir por WhatsApp",
  "wa.default": "Hola, vi tu portafolio y me gustaría cotizar un proyecto.",
} as const;

export type TranslationKey = keyof typeof es;
