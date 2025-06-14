import { useEffect, useState } from "react";

/**
 * Helper media queries – keep in sync with Tailwind screens
 */
const queries = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const mobileMql = window.matchMedia(queries.mobile);
    const tabletMql = window.matchMedia(queries.tablet);
    const desktopMql = window.matchMedia(queries.desktop);

    const handler = () => {
      setIsMobile(mobileMql.matches);
      setIsTablet(tabletMql.matches);
      setIsDesktop(desktopMql.matches);
    };

    // initial run
    handler();

    mobileMql.addEventListener("change", handler);
    tabletMql.addEventListener("change", handler);
    desktopMql.addEventListener("change", handler);

    return () => {
      mobileMql.removeEventListener("change", handler);
      tabletMql.removeEventListener("change", handler);
      desktopMql.removeEventListener("change", handler);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}; 