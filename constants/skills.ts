import {
  Code,
  Smartphone,
  Database,
  Server,
  Github,
  Bolt,
  Figma,
} from "lucide-react";
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Laravel", icon: Server, level: 90 },
      { name: "PHP", icon: Code, level: 85 },
      { name: "REST API", icon: Database, level: 88 },
    ],
  },
  {
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Next.js", icon: Code, level: 85 },
      { name: "Tailwind CSS", icon: Code, level: 90 },
      { name: "Figma", icon: Figma, level: 88 },
    ],
  },
  {
    title: "Mobile Development",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Flutter", icon: Smartphone, level: 88 },
      { name: "Firebase", icon: Database, level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "MySQL", icon: Database, level: 85 },
      { name: "Microsoft SQL Server", icon: Database, level: 75 },
      { name: "Git", icon: Github, level: 88 },
      { name: "Automation", icon: Bolt, level: 85 },
    ],
  },
];
