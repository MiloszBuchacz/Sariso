"use client";

import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import Button from "../Button/Button";
import Drower from "../Drower/Drower";

import "./TopBar.css";

const NavigationButtons: React.FC = () => {
  return (
    <div>
      {useIsDesktop() ? (
        <div>
          <Button url="/home">home</Button>
          <Button url="/contact">contact</Button>
          <Button url="/aboutUs">about us</Button>
          <Button url="/projects">our work</Button>
        </div>
      ) : (
        <div>
          <Drower>
            <Button className="custom-button-styles" url="/home">
              home
            </Button>
            <Button className="custom-button-styles" url="/contact">
              contact
            </Button>
            <Button className="custom-button-styles" url="/aboutUs">
              about us
            </Button>
            <Button className="custom-button-styles" url="/projects">
              our work
            </Button>
          </Drower>
        </div>
      )}
    </div>
  );
};
export default NavigationButtons;
