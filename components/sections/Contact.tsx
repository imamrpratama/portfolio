"use client";

import { socialLinks } from "@/constants";

interface ContactProps {
  isVisible: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isVisible }) => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-600 mb-4">
            04 — Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Let's Connect
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const isEmail = social.name === "Email";

            return (
              <a
                key={social.name}
                href={social.url}
                target={!isEmail ? "_blank" : undefined}
                rel={!isEmail ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base font-medium ${
                  isEmail
                    ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:-translate-y-0.5"
                    : "bg-white text-zinc-800 border-2 border-zinc-900 shadow-[4px_4px_0_#18181b] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#ea580c] hover:text-orange-600"
                }`}
                aria-label={`${
                  isEmail ? "Send email to" : `Visit my ${social.name} profile`
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>

        <div
          className={`pt-8 border-t border-zinc-200 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-zinc-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Built with{" "}
            <span className="text-orange-600">Next.js</span> &{" "}
            <span className="text-orange-600">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};
