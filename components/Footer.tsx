import React from "react";
import Link, { LinkProps } from "./Link";
import { VscGithub } from "react-icons/vsc";
import { ImTwitter } from "react-icons/im";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiLichess } from "react-icons/si";
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
import NextLink from "next/link";

const socialsInfo = [
  {
    linkTo: "github",
    href: "https://github.com/Hassan-Ib",
    icon: <FiGithub />,
  },
  {
    linkTo: "twitter",
    href: "https://twitter.com/Azanebrahim",
    icon: <FiTwitter />,
  },
  {
    linkTo: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan-ib",
    icon: <FiLinkedin />,
  },
  {
    linkTo: "facebook",
    href: "https://facebook.com/profile.php?id=100050198353049",
    icon: <FiFacebook />,
  },
  {
    linkTo: "lichess",
    href: "https://lichess.org/@/Hassan-Ib",
    icon: <SiLichess />,
  },
];

const Social = (props: LinkProps & { linkTo: string }) => {
  return (
    <Link
      className={props.className}
      href={props.href}
      ariaLabel={`Hassan Ibrahim | Developer | ${props.linkTo} link`}
    >
      {props.children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className=" font-barlow  flex flex-col justify-center items-center">
      <ul
        aria-label="social media icons"
        className=" md:fixed bottom-6 left-6 z-20 flex md:flex-col gap-5 max-w-fit mb-4 text-2xl dark:text-white before-stroke after-stroke"
      >
        {socialsInfo.map((social, index) => (
          <Social
            key={index}
            href={social.href}
            className=""
            linkTo={social.linkTo}
          >
            {social.icon}
          </Social>
        ))}
      </ul>

      <div className=" opacity-70 md:bg-red-700 md:text-white md:dark:bg-red-500 px-4 rounded-sm max-w-fit md:fixed bottom-0 z-20 right-8 py-1 w-full text-xs tracking-wider font-medium text-center">
        Design inspired by
        <NextLink href="https://mayashavin.com" passHref>
          <a
            className="underline px-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Maya Shavin
          </a>
        </NextLink>
        & <br /> Developed by Hassan Ibrahim with 🧡 - © 2021
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
