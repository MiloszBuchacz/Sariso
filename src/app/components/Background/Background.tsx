import Image from "next/image";
import bulb1 from "../../../../public/figures/bulb1.png";
import bulb2 from "../../../../public/figures/bulb2.png";
import gible1 from "../../../../public/figures/gible1.png";
import gible2 from "../../../../public/figures/gible2.png";
import gible3 from "../../../../public/figures/gible3.png";
import gible4 from "../../../../public/figures/gible4.png";
import gligar1 from "../../../../public/figures/gligar1.png";
import gligar2 from "../../../../public/figures/gligar2.png";

import "./Background.css";

const Background: React.FC = () => {
  const photos = [
    bulb1,
    bulb2,
    gible1,
    gible2,
    gible3,
    gible4,
    gligar1,
    gligar2,
  ];

  return (
    <div className="background-container">
      {photos?.map((photo, index) => (
        <Image
          className="single-photo"
          src={photo}
          alt="figure-photo"
          key={index}
        />
      ))}
    </div>
  );
};

export default Background;
