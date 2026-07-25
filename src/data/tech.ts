import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Github,
  GitBranch,
  Globe,
  Layers,
  MessageCircle,
  Palette,
  Server,
  Share2,
  Smartphone,
  Terminal,
  Triangle,
  Webhook,
  Zap,
  FileCode,
  Braces,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Localized } from "@/hooks/use-i18n";

export interface TechItem {
  name: string;
  icon: LucideIcon;
  level: number;
  description: Localized;
}

export interface TechCategory {
  id: string;
  label: Localized;
  icon: LucideIcon;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    icon: Palette,
    items: [
      {
        name: "HTML5",
        icon: FileCode,
        level: 95,
        description: {
          es: "Marcado semántico, accesible y optimizado para SEO.",
          en: "Semantic, accessible and SEO-optimized markup.",
        },
      },
      {
        name: "CSS3",
        icon: Layers,
        level: 92,
        description: {
          es: "Layouts modernos, animaciones y diseño responsive.",
          en: "Modern layouts, animations and responsive design.",
        },
      },
      {
        name: "JavaScript",
        icon: Braces,
        level: 93,
        description: {
          es: "ES2023+, asincronía y manipulación eficiente del DOM.",
          en: "ES2023+, async patterns and efficient DOM handling.",
        },
      },
      {
        name: "TypeScript",
        icon: Code2,
        level: 90,
        description: {
          es: "Tipado estricto para bases de código escalables y seguras.",
          en: "Strict typing for scalable, safer codebases.",
        },
      },
      {
        name: "React",
        icon: Boxes,
        level: 94,
        description: {
          es: "Arquitectura por componentes, hooks y estado predecible.",
          en: "Component architecture, hooks and predictable state.",
        },
      },
      {
        name: "Vite",
        icon: Zap,
        level: 90,
        description: {
          es: "Builds ultrarrápidos y optimización de bundles.",
          en: "Ultra-fast builds and bundle optimization.",
        },
      },
    ],
  },
  {
    id: "backend",
    label: { es: "Backend", en: "Backend" },
    icon: Server,
    items: [
      {
        name: "Node.js",
        icon: Terminal,
        level: 88,
        description: {
          es: "APIs REST, servicios en tiempo real y tareas programadas.",
          en: "REST APIs, real-time services and scheduled jobs.",
        },
      },
      {
        name: "Supabase",
        icon: Database,
        level: 90,
        description: {
          es: "Auth, storage, RLS y funciones serverless en producción.",
          en: "Auth, storage, RLS and serverless functions in production.",
        },
      },
      {
        name: "PostgreSQL",
        icon: Database,
        level: 87,
        description: {
          es: "Modelado relacional, índices y consultas optimizadas.",
          en: "Relational modeling, indexes and optimized queries.",
        },
      },
    ],
  },
  {
    id: "cloud",
    label: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    icon: Cloud,
    items: [
      {
        name: "Git",
        icon: GitBranch,
        level: 92,
        description: {
          es: "Control de versiones con flujos de ramas profesionales.",
          en: "Version control with professional branching flows.",
        },
      },
      {
        name: "GitHub",
        icon: Github,
        level: 91,
        description: {
          es: "Code review, issues y despliegues con GitHub Actions.",
          en: "Code review, issues and deployments with GitHub Actions.",
        },
      },
      {
        name: "Hostinger",
        icon: Globe,
        level: 85,
        description: {
          es: "Hosting, dominios, correo corporativo y certificados SSL.",
          en: "Hosting, domains, business email and SSL certificates.",
        },
      },
      {
        name: "Vercel",
        icon: Triangle,
        level: 89,
        description: {
          es: "Despliegue continuo, edge network y previews por rama.",
          en: "Continuous deployment, edge network and branch previews.",
        },
      },
    ],
  },
  {
    id: "apis",
    label: { es: "APIs & Integraciones", en: "APIs & Integrations" },
    icon: Share2,
    items: [
      {
        name: "WhatsApp Business API",
        icon: MessageCircle,
        level: 90,
        description: {
          es: "Plantillas, mensajería automatizada y atención multiagente.",
          en: "Templates, automated messaging and multi-agent support.",
        },
      },
      {
        name: "Meta Developers",
        icon: Smartphone,
        level: 85,
        description: {
          es: "Apps, tokens, verificación y permisos de la plataforma Meta.",
          en: "Apps, tokens, verification and Meta platform permissions.",
        },
      },
      {
        name: "REST APIs",
        icon: Server,
        level: 92,
        description: {
          es: "Diseño de endpoints, versionado, auth y documentación.",
          en: "Endpoint design, versioning, auth and documentation.",
        },
      },
      {
        name: "Webhooks",
        icon: Webhook,
        level: 88,
        description: {
          es: "Eventos en tiempo real, firmas seguras y reintentos.",
          en: "Real-time events, signature verification and retries.",
        },
      },
    ],
  },
];
