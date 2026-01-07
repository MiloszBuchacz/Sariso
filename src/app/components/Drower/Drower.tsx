"use client";

import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import "../Drower/Drower.css";
import { useState } from "react";
import Button from "../Button/Button";

interface DrowerInterface {
  children: React.ReactNode;
}

const Drower: React.FC<DrowerInterface> = ({ children }) => {
  const [isOpen, seIsOpen] = useState(false);

  if (useIsDesktop()) return;
  return isOpen ? (
    <div className="drower-container"> {children}</div>
  ) : (
    <Button className="drower-button">
      <span className="material-symbols-outlined">menu</span>
    </Button>
  );
};

export default Drower;
