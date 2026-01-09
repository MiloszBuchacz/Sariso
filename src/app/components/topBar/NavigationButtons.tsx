"use client";

import { usePathname } from "next/navigation";

import Button from "../Button/Button";

import "../Drower/Drower.css";

const NavigationButtons = () => {
  const pathname = usePathname();

  return (
    <div>
      <Button
        className={`${pathname === "/" && "active"} custom-button-styles`}
        url="/"
      >
        home
      </Button>
      <Button
        className={`${
          pathname === "/projects" && "active"
        } custom-button-styles`}
        url="/projects"
      >
        our work
      </Button>
      <Button
        className={`${
          pathname === "/contact" && "active"
        } custom-button-styles`}
        url="/contact"
      >
        contact
      </Button>
      <Button
        className={`${
          pathname === "/aboutUs" && "active"
        } custom-button-styles`}
        url="/aboutUs"
      >
        about us
      </Button>
    </div>
  );
};

export default NavigationButtons;
