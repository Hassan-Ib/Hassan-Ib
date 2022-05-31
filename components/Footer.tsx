import React from "react";
import Link, { LinkProps } from "./Link";
import { VscGithub } from "react-icons/vsc";
import { ImTwitter } from "react-icons/im";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiLichess } from "react-icons/si";
import NextLink from "next/link";

const socialsInfo = [
  {
    linkTo: "github",
    href: "https://github.com/Hassan-Ib",
    icon: <VscGithub />,
  },
  {
    linkTo: "twitter",
    href: "https://twitter.com/Azanebrahim",
    icon: <ImTwitter />,
  },
  {
    linkTo: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan-ib",
    icon: <FaLinkedinIn />,
  },
  {
    linkTo: "facebook",
    href: "https://facebook.com/profile.php?id=100050198353049",
    icon: <FaFacebookF />,
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
    <footer className=" ">
      <ul
        aria-label="social media icons"
        className="fixed bottom-6 left-6 z-20 flex flex-col gap-5 max-w-fit mb-1 text-lg md:text-xl dark:text-white before-stroke after-stroke"
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

      <div
        className=" bg-red-500 px-4 rounded-sm max-w-fit fixed bottom-0 z-20 right-8 py-1 w-full text-xs font-normal md:font-medium text-center"
        style={{ fontSize: "0.7rem" }}
      >
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
        & Developed by Hassan Ibrahim with 🧡 - © 2021
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
