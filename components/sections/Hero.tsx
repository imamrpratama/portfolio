"use client";

import { smoothScrollTo } from "@/lib/utils/scroll";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20"
    >
      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          <div className="inline-block mb-6 px-6 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-300 text-sm backdrop-blur-md animate-fade-in shadow-lg shadow-indigo-500/5">
            👋 Welcome to my Portfolio
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-tight animate-fade-in-up px-2 sm:px-4">
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Imam Rizky Pratama
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 mx-auto rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
        </div>

        <div className="space-y-4 animate-fade-in-up animation-delay-300 px-2 sm:px-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
            Full Stack Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting beautiful, functional applications with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base pt-4">
            {["Laravel", "Flutter", "Next.js"].map((tech, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up animation-delay-600 px-2 sm:px-4">
          <button
            onClick={() => smoothScrollTo("projects")}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 text-sm sm:text-base"
          >
            View Projects
          </button>
          <button
            onClick={() => smoothScrollTo("contact")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button
        onClick={() => smoothScrollTo("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-purple-400 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
        </div>
      </button>
    </section>
  );
};
