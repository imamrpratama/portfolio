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
          <div className="inline-flex items-center gap-2.5 mb-6 px-5 py-2.5 bg-white border border-zinc-200 rounded-full text-zinc-700 text-sm shadow-sm animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-zinc-900 animate-fade-in-up px-2 sm:px-4">
            Imam Rizky Pratama
            <span className="text-orange-600">.</span>
          </h1>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-4 animate-fade-in-up animation-delay-300 px-2 sm:px-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-800">
            Full Stack Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto">
            Crafting beautiful, functional applications with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base pt-4">
            {["Laravel", "Flutter", "Next.js"].map((tech, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-zinc-700 rounded-full border border-zinc-200 hover:border-orange-600/50 hover:text-orange-600 transition-all duration-300 cursor-default shadow-sm"
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
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => smoothScrollTo("contact")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-semibold border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 text-sm sm:text-base"
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
        <div className="w-6 h-10 border-2 border-zinc-300 rounded-full flex justify-center hover:border-orange-600 transition-colors">
          <div className="w-1 h-3 bg-zinc-400 rounded-full mt-2 animate-scroll" />
        </div>
      </button>
    </section>
  );
};
