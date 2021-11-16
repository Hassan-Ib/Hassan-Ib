import React from "react";
import Link, { LinkProps } from "./Link";
import { VscGithub } from "react-icons/vsc";
import { ImTwitter } from "react-icons/im";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiLichess } from "react-icons/si";
import NextLink from "next/link";

const Social = (props: LinkProps & { linkTo: string }) => {
  return (
    <Link
      className={props.className}
      href={props.href}
      ariaLabel={`Hassan Ibrahim | Developer | ${props.linkTo} link`}>
      {props.children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-20 p-2 pt-4 md:pt-8 flex flex-col justify-center items-center ">
      <div
        aria-label="social media icons"
        className="flex justify-center gap-6 mb-1 text-xl md:text-2xl dark:text-white">
        <Social href="https://github.com/Hassan-Ib" linkTo="github">
          <VscGithub />
        </Social>

        <Social href="https://twitter.com/Azanebrahim" linkTo="twitter">
          <ImTwitter />
        </Social>

        <Social href="https://www.linkedin.com/in/hassan-ib" linkTo="LinkedIn">
          <FaLinkedinIn />
        </Social>
        <Social
          href="https://facebook.com/profile.php?id=100050198353049"
          linkTo="facebook">
          <FaFacebookF />
        </Social>
        <Social
          href="https://twitter.com/Azanebrahim"
          linkTo="lichess"
          className="">
          <SiLichess />
        </Social>
      </div>

      <div
        className="py-1 w-full text-xs font-normal md:font-medium text-center bg-main-light dark:bg-main-dark"
        style={{ fontSize: "0.7rem" }}>
        Design inspired by
        <NextLink href="https://mayashavin.com" passHref>
          <a
            className="underline px-1"
            rel="noopener noreferrer"
            target="_blank">
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
