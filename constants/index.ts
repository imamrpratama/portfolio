import { Github, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/imamrpratama",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/imamrpratama",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:imamrpratama0900@gmail.com",
    icon: Mail,
  },
];

export const navSections = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
] as const;
