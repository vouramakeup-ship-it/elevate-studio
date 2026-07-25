import type { Localized } from "@/hooks/use-i18n";

export interface TimelineItem {
  id: string;
  period: string;
  role: Localized;
  org: Localized;
  description: Localized;
  tags: string[];
}

/** Edita libremente tu trayectoria aquí. */
export const timeline: TimelineItem[] = [
  {
    id: "t1",
    period: "2025 — " + "…",
    role: { es: "Desarrollador Full Stack independiente", en: "Freelance Full Stack Developer" },
    org: { es: "Clientes empresariales", en: "Enterprise clients" },
    description: {
      es: "Diseño y construcción de sistemas de gestión, integraciones con WhatsApp Business API y plataformas web para empresas de retail, distribución y servicios.",
      en: "Design and delivery of management systems, WhatsApp Business API integrations and web platforms for retail, distribution and service companies.",
    },
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    id: "t2",
    period: "2024 — 2025",
    role: { es: "Desarrollador de Software", en: "Software Developer" },
    org: { es: "Proyecto FoncePan", en: "FoncePan project" },
    description: {
      es: "Desarrollo del sistema de gestión completo: producción, inventario, ventas y reportes. Automaticé el cierre diario y digitalicé procesos que se llevaban en papel.",
      en: "Built the complete management system: production, inventory, sales and reporting. Automated daily closing and digitized paper-based processes.",
    },
    tags: ["Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "t3",
    period: "2023 — 2024",
    role: { es: "Desarrollador Web", en: "Web Developer" },
    org: { es: "Proyectos independientes", en: "Independent projects" },
    description: {
      es: "Landing pages y sitios corporativos con enfoque en rendimiento, SEO técnico y conversión. Despliegue continuo y mantenimiento posterior.",
      en: "Landing pages and corporate sites focused on performance, technical SEO and conversion, with continuous deployment and ongoing maintenance.",
    },
    tags: ["Vite", "TailwindCSS", "Vercel", "Hostinger"],
  },
  {
    id: "t4",
    period: "2022 — 2023",
    role: { es: "Inicio en desarrollo de software", en: "Getting started in software" },
    org: { es: "Formación y práctica", en: "Training and practice" },
    description: {
      es: "Fundamentos de programación, algoritmos, bases de datos y control de versiones. Primeros proyectos reales y aprendizaje continuo.",
      en: "Programming fundamentals, algorithms, databases and version control. First real projects and continuous learning.",
    },
    tags: ["JavaScript", "HTML5", "CSS3", "Git"],
  },
];
