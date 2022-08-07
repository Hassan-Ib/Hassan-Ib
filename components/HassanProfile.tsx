import React from "react";
import Image from "next/image";
import { IconReact } from "./Icon";
import hassanIb from "../public/img/hassan-ib.webp";

// "https://avatars.githubusercontent.com/u/53692907?s=400&u=1c19cef9caad448f9565a4b4431ab88e99baaee3&v=4"

const HassanProfile = () => {
  return (
    <div className="relative ">
      <div className="block relative rounded-full w-60 h-60 overflow-hidden">
        <Image
          src={"/img/hassan-ib.webp"}
          priority
          alt="Hassan Ibrahim"
          layout="fill"
        />
      </div>
      <div className="absolute right-8 bottom-2 bg-white w-fit rounded-full">
        <IconReact />
      </div>
    </div>
  );
};

export default HassanProfile;
