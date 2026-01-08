"use client";

import { useHasScrolled } from "@/app/hooks/useHasScrolled";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import logotyp from "../../../../public/logotyp.png";

const Logo: React.FC = () => {
  const scrolled = useHasScrolled(10);

  return (
    <div className="container">
      <div
        className="logoWrapper"
        style={{
          height: "100px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: scrolled ? "132px" : "0px",
          transition: scrolled
            ? "margin-left 0.2s ease 0.3s"
            : "margin-left 0.2s ease 0s",
        }}
      >
        <Image
          style={{ height: "100px", width: "100px" }}
          src={logotyp}
          alt="logo"
        />
      </div>

      <span
        className={`title ${scrolled ? "titleHidden" : ""}`}
        style={{ transition: scrolled ? "0.3s ease 0s" : "0.3s ease 0.2s" }}
      >
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
