"use client";

import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 720) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint + 1}px)`);

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
}
