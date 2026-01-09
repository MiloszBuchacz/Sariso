"use client";

import { usePathname } from "next/navigation";

import Button from "../../components/Button/Button";
import Drower from "../../components/Drower/Drower";

import "../../components/Drower/Drower.css";

const HomeDrower: React.FC = () => {
  const pathname = usePathname();

  return (
    <Drower>
      <div className="drower-buttons-container" style={{ marginTop: "3rem" }}>
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
    </Drower>
  );
};

export default HomeDrower;
