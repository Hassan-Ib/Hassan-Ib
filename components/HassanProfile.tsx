import React from "react";
import Image from "next/image";
import HassanImage from "../public/img/profile 1.jpg";

const HassanProfile = () => {
  return (
    <div className="relative ">
      {/* <div className="w-36 h-36 md:w-44 md:h-44 border-2 border-main-dark dark:border-main-light absolute left-6 top-2 transform rotate-45"></div> */}
      <div className="relative rounded-full w-48  h-48 md:w-62 md:h-62 overflow-hidden">
        <Image
          src={
            "https://avatars.githubusercontent.com/u/53692907?s=400&u=1c19cef9caad448f9565a4b4431ab88e99baaee3&v=4"
          }
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
