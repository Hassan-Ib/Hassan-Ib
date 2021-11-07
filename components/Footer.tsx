import React from "react";
import Link, { LinkProps } from "./Link";
import { VscGithub } from "react-icons/vsc";
import { ImTwitter } from "react-icons/im";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiLichess } from "react-icons/si";

type Props = {
  className?: string;
};

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

const Footer = (props: Props) => {
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
        className={`${props.className} py-1 w-full text-xs text-center  bg-main dark:bg-main-dark`}>
        Design inspired by
        <Link href="https://mayashavin.com" className="underline px-1">
          Maya Shavin
        </Link>{" "}
        & Developed by Hassan Ibrahim with 🧡 - © 2021
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
