"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useScrollDetection, useIntersectionObserver } from "@/lib/hooks";
import { navSections } from "@/constants";
import { Navigation, AnimatedBackground } from "@/components/layout";
import { Hero, About, Skills, Projects, Contact } from "@/components/sections";
import { portfolioStyles } from "@/lib/utils/styles";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollY, isScrolled, activeSection } =
    useScrollDetection(navSections);
  const { isVisible } = useIntersectionObserver(navSections);

  // Calculate scroll progress and show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900 overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-progress fixed top-0 left-0 h-1 bg-orange-600 z-[9999] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <AnimatedBackground />

      <Navigation
        isScrolled={isScrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Hero />
      <About isVisible={isVisible.about || false} />
      <Skills isVisible={isVisible.skills || false} />
      <Projects isVisible={isVisible.projects || false} />
      <Contact isVisible={isVisible.contact || false} />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-zinc-900 text-white rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <style jsx global>
        {portfolioStyles}
      </style>
    </div>
  );
};

export default Portfolio;
