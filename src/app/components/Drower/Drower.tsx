"use client";

import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import "./Drower.css";

interface DrowerInterface {
  children: React.ReactNode;
}

const Drower: React.FC<DrowerInterface> = ({ children }) => {
  if (useIsDesktop()) return;
  return <div className="drower-container"> {children}</div>;
};

export default Drower;
