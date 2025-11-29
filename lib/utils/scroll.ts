/**
 * Smoothly scroll to an element by ID
 * @param id - The element ID to scroll to
 * @param headerOffset - Offset for fixed header (default: 80)
 */
export const smoothScrollTo = (id: string, headerOffset: number = 80): void => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Get the base path for images based on environment
 */
export const getImagePath = (path: string): string => {
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? `/portfolio${path}` : path;
};
