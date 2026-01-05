"use client";
import { useCallback, ReactNode } from "react";
import { useRouter } from "next/navigation";

import "./Button.css";

interface ButtonProps {
  url?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}

export default function Button({
  url,
  onClick,
  children,
  className,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    if (url) {
      router.push(url);
    }
  }, [onClick, url, router]);

  return (
    <button
      className={
        className
          ? `${className} sariso-navigation-button`
          : "sariso-navigation-button"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
