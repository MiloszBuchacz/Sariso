"use client";

import { useEffect, useRef, useState } from "react";

export function useHasScrolled(threshold = 10) {
  const lastY = useRef(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (!hasScrolled && currentY > threshold) {
        setHasScrolled(true);
      }

      if (hasScrolled && currentY <= threshold) {
        setHasScrolled(false);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolled, threshold]);

  return hasScrolled;
}
