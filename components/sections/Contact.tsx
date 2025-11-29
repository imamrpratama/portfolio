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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-6 shadow-lg shadow-indigo-500/50" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
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
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg text-sm sm:text-base font-medium ${
                  isEmail
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-indigo-500/50"
                    : "bg-white/5 hover:bg-indigo-500/10 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 hover:shadow-indigo-500/20"
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
          className={`pt-8 border-t border-white/10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Built with{" "}
            <span className="text-indigo-400">Next.js</span> &{" "}
            <span className="text-indigo-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};
