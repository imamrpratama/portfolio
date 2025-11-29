import { useState, useEffect, useRef } from "react";

interface UseIntersectionObserverReturn {
  isVisible: Record<string, boolean>;
}

/**
 * Custom hook for intersection observer to detect when sections are visible
 */
export const useIntersectionObserver = (
  sections: readonly string[],
  options?: IntersectionObserverInit
): UseIntersectionObserverReturn => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        }
      });
    }, options || { threshold: 0.15, rootMargin: "0px 0px -100px 0px" });

    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sectionElements = document.querySelectorAll("section[id]");
      sectionElements.forEach((section) => {
        observerRef.current?.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [sections, options]);

  return { isVisible };
};
