"use client";

import { useCallback, useState } from "react";

import { useIsDesktop } from "@/app/hooks/useIsDesktop";

import Button from "../Button/Button";

import "../Drower/Drower.css";

interface DrowerInterface {
  children: React.ReactNode;
}

const Drower: React.FC<DrowerInterface> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrower = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  if (useIsDesktop()) return;
  return isOpen ? (
    <div className="drower-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button className="close-drower-button" onClick={handleToggleDrower}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>

        {children}
      </div>
    </div>
  ) : (
    <Button onClick={handleToggleDrower} className="drower-button">
      <span className="material-symbols-outlined">menu</span>
    </Button>
  );
};

export default Drower;
