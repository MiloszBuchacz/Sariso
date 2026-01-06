"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";

import "./Background.css";
import { figures } from "../../../../public/figures";

const Background: React.FC = () => {
  const [photoSize, setPhotoSize] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      const size = window.innerWidth / 4;
      setPhotoSize(size);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="background-container">
      {figures.map((photo, index) => (
        <div
          key={index}
          className="single-photo"
          style={{
            width: photoSize,
            height: photoSize,
          }}
        >
          <Image src={photo} alt="figure-photo" fill />
        </div>
      ))}
    </div>
  );
};

export default Background;
