"use client";

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils/scroll";
import { navSections } from "@/constants";

interface NavigationProps {
  isScrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const handleNavClick = (section: string) => {
    smoothScrollTo(section);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#faf8f5]/90 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick("home")}
            className="text-2xl font-bold font-display text-zinc-900 hover:text-orange-600 transition-colors duration-300"
          >
            Imam<span className="text-orange-600">.</span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navSections.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`capitalize px-4 py-2.5 rounded-xl transition-all duration-300 relative ${
                  activeSection === item
                    ? "text-orange-600 font-semibold"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-900/5"
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-zinc-900 p-2 hover:bg-zinc-900/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 top-20 bg-zinc-900/20 backdrop-blur-sm -z-10"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navSections.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left capitalize px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item
                    ? "bg-orange-600/10 text-orange-600 font-semibold"
                    : "text-zinc-600 hover:bg-zinc-900/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
