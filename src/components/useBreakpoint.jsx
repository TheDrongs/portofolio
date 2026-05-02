import { useEffect, useState } from "react";

export function useBreakpoint() {
  const getWidth = () => {
    if (typeof window === "undefined") return 1200;
    return window.innerWidth;
  };

  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width <= 680,
    isTablet: width <= 980,
    isMedium: width <= 1200,
  };
}
