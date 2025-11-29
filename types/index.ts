import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  images: string[];
  demo: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export type NavSection = "home" | "about" | "skills" | "projects" | "contact";
