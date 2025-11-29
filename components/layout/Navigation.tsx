"use client";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-indigo-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick("home")}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navSections.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`capitalize px-4 py-2.5 rounded-xl transition-all duration-300 relative ${
                  activeSection === item
                    ? "text-indigo-400 bg-indigo-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navSections.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left capitalize px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item
                    ? "bg-indigo-500/20 text-indigo-400"
                    : "text-gray-300 hover:bg-white/5"
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
