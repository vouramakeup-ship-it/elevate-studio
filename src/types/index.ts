import type { Localized } from "@/hooks/use-i18n";

export type ProjectStatus = "completed" | "in-progress" | "maintenance";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  date: string;
  status: ProjectStatus;
  featured?: boolean;
  image: string;
  gallery: string[];
  summary: Localized;
  description: Localized;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface BlogPost {
  slug: string;
  image: string;
  date: string;
  readingTime: number;
  category: Localized;
  title: Localized;
  excerpt: Localized;
  content: Localized[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: Localized;
  company: string;
  quote: Localized;
  rating: number;
}
