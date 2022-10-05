import React from "react";
import { SiLichess } from "react-icons/si";
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";

export const socialsInfo = [
  {
    linkTo: "github",
    href: "https://github.com/Hassan-Ib",
    icon: <VscGithub />,
  },
  {
    linkTo: "twitter",
    href: "https://twitter.com/Azanebrahim",
    icon: <VscTwitter />,
  },
  {
    linkTo: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan-ib",
    icon: <AiFillLinkedin />,
  },
  // {
  //   linkTo: "facebook",
  //   href: "https://facebook.com/profile.php?id=100050198353049",
  //   icon: <FiFacebook />,
  // },
  {
    linkTo: "lichess",
    href: "https://lichess.org/@/Hassan-Ib",
    icon: <SiLichess />,
  },
];
