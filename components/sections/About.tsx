"use client";

import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/constants";

interface AboutProps {
  isVisible: boolean;
}

export const About: React.FC<AboutProps> = ({ isVisible }) => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-600 mb-4">
            01 — About
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900">
            About Me
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          <div
            className={`max-w-3xl text-center space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building
              scalable web applications and cross-platform mobile solutions. I
              love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              With a strong foundation in Laravel and PHP for backend
              development, and Flutter for mobile applications, I create
              seamless user experiences across all platforms.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              {socialLinks.slice(0, 2).map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-zinc-700 rounded-xl border-2 border-zinc-900 shadow-[3px_3px_0_#18181b] hover:-translate-y-0.5 hover:text-orange-600 hover:shadow-[4px_4px_0_#ea580c] transition-all duration-300"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
