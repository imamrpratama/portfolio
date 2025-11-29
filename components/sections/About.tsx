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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full shadow-lg shadow-indigo-500/50" />
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          <div
            className={`max-w-3xl text-center space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building
              scalable web applications and cross-platform mobile solutions. I
              love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
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
                    className="p-3 bg-white/5 hover:bg-indigo-500/20 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-indigo-500/20"
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
