import { useState, useEffect } from "react";
import { NavSection } from "@/types";

interface UseScrollDetectionReturn {
  scrollY: number;
  isScrolled: boolean;
  activeSection: string;
}

/**
 * Custom hook to detect scroll position and active section
 */
export const useScrollDetection = (
  sections: readonly string[]
): UseScrollDetectionReturn => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollY(scrollPos);
      setIsScrolled(scrollPos > 50);

      const scrollPosition = scrollPos + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return { scrollY, isScrolled, activeSection };
};
