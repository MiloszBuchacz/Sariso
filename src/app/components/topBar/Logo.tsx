"use client";

import { useHasScrolled } from "@/app/hooks/useHasScrolled";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import logotyp from "../../../../public/logotyp.png";

const Logo: React.FC = () => {
  return (
    <div className="container">
      <div
        className="logoWrapper"
        style={{ width: "200px", backgroundColor: "black" }}
      >
        <Image
          style={{ height: "70px", width: "70px" }}
          src={logotyp}
          alt="logo"
        />
      </div>

      <span className={`title ${useHasScrolled(10) ? "titleHidden" : ""}`}>
        <Image
          style={{ height: "100px", width: "100px" }}
          src={logo}
          alt="logo"
        />
      </span>
    </div>
  );
};

export default Logo;
