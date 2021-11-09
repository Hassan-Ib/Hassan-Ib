import React from "react";
import Image from "next/image";
import HassanImage from "../public/img/profile 1.jpg";

const HassanProfile = () => {
  return (
    <div className="relative ">
      <div className="w-36 h-36 md:w-44 md:h-44 border-2 border-main-dark dark:border-main-light absolute left-6 top-2 transform rotate-45"></div>
      <div className="relative rounded-full w-40  h-40 md:w-48 md:h-48 overflow-hidden">
        <Image
          src={HassanImage}
          alt="Hassan Ibrahim"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default HassanProfile;
