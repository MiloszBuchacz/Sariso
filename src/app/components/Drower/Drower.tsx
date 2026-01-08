"use client";

import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import "../Drower/Drower.css";
import { useCallback, useState } from "react";
import Button from "../Button/Button";

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
        <Button onClick={handleToggleDrower}>
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
