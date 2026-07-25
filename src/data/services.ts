import {
  Blocks,
  Building2,
  Database,
  Globe,
  LayoutTemplate,
  LifeBuoy,
  MessageCircle,
  MonitorSmartphone,
  Plug,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Localized } from "@/hooks/use-i18n";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: Localized;
  description: Localized;
}

export const services: Service[] = [
  {
    id: "fullstack",
    icon: Blocks,
    title: { es: "Desarrollo Full Stack", en: "Full Stack Development" },
    description: {
      es: "Frontend, backend, base de datos y despliegue: un solo responsable para todo el producto.",
      en: "Frontend, backend, database and deployment: one owner for the whole product.",
    },
  },
  {
    id: "enterprise",
    icon: Building2,
    title: { es: "Software Empresarial", en: "Enterprise Software" },
    description: {
      es: "Sistemas de gestión a la medida de tu operación, con roles, reportes y trazabilidad.",
      en: "Management systems tailored to your operation, with roles, reports and traceability.",
    },
  },
  {
    id: "web",
    icon: Globe,
    title: { es: "Aplicaciones Web", en: "Web Applications" },
    description: {
      es: "Plataformas rápidas y escalables, accesibles desde cualquier navegador y dispositivo.",
      en: "Fast, scalable platforms reachable from any browser and device.",
    },
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: { es: "Aplicaciones Móviles", en: "Mobile Applications" },
    description: {
      es: "Apps con experiencia nativa, modo offline y sincronización con tus sistemas.",
      en: "Apps with native-feeling UX, offline mode and sync with your systems.",
    },
  },
  {
    id: "desktop",
    icon: MonitorSmartphone,
    title: { es: "Aplicaciones de Escritorio", en: "Desktop Applications" },
    description: {
      es: "Software instalable para puntos de venta, facturación y operación sin internet.",
      en: "Installable software for POS, invoicing and offline operation.",
    },
  },
  {
    id: "automation",
    icon: Workflow,
    title: { es: "Automatización de Procesos", en: "Process Automation" },
    description: {
      es: "Elimino tareas repetitivas: reportes, notificaciones y flujos entre sistemas.",
      en: "I remove repetitive work: reports, notifications and cross-system flows.",
    },
  },
  {
    id: "databases",
    icon: Database,
    title: { es: "Bases de Datos", en: "Databases" },
    description: {
      es: "Modelado, migraciones, optimización de consultas, respaldos y seguridad.",
      en: "Modeling, migrations, query optimization, backups and security.",
    },
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: { es: "WhatsApp Business API", en: "WhatsApp Business API" },
    description: {
      es: "Atención automatizada, notificaciones y ventas directamente por WhatsApp.",
      en: "Automated support, notifications and sales directly through WhatsApp.",
    },
  },
  {
    id: "landing",
    icon: LayoutTemplate,
    title: { es: "Landing Pages", en: "Landing Pages" },
    description: {
      es: "Páginas de alta conversión, optimizadas para SEO y velocidad de carga.",
      en: "High-conversion pages optimized for SEO and load speed.",
    },
  },
  {
    id: "apis",
    icon: Plug,
    title: { es: "Desarrollo de APIs", en: "API Development" },
    description: {
      es: "APIs REST seguras y documentadas para conectar tus servicios y terceros.",
      en: "Secure, documented REST APIs to connect your services and third parties.",
    },
  },
  {
    id: "maintenance",
    icon: LifeBuoy,
    title: { es: "Mantenimiento de Software", en: "Software Maintenance" },
    description: {
      es: "Soporte, mejoras continuas, monitoreo y actualizaciones de seguridad.",
      en: "Support, continuous improvements, monitoring and security updates.",
    },
  },
];
