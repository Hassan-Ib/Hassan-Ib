import React, { useEffect } from "react";
import { BsInfoLg } from "react-icons/bs";
import NextLink from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { Social } from "./Social";
import { socialsInfo } from "./socialsInfo";

const Footer = () => {
  const isTab = useMediaQuery("(min-width: 768px)");
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  const open = isTab;

  React.useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = open;
    }
  }, [open]);

  return (
    <footer className=" fixed bottom-2 left-4 md:right-4 font-barlow z-50 flex flex-col justify-center items-center py-4">
      <details className="relative" ref={detailsRef} open={open}>
        <summary className="md:hidden">
          {" "}
          <div className="rounded-full text-white text-xl bg-red-800 w-10 h-10 flex items-center justify-center backdrop-blur-xl">
            <BsInfoLg />
          </div>
        </summary>
        <div className=" text-main-dark absolute bottom-full left-[80%] border-[1px]  shadow-md border-black bg-white p-6  rounded-lg md:bg-none  md:relative md:left-0 md:right-0 md:p-0 md:border-none">
          <ul
            aria-label="social media icons"
            className="  md:fixed bottom-6 left-6 z-20 flex md:flex-col gap-5 max-w-fit mb-4 text-2xl md:dark:text-white md:before-stroke md:after-stroke">
            {socialsInfo.map((social, index) => (
              <Social
                key={index}
                href={social.href}
                className=""
                linkTo={social.linkTo}>
                {social.icon}
              </Social>
            ))}
          </ul>

          <div className=" md:bg-red-700 md:text-white md:dark:bg-red-500 px-4 rounded-sm max-w-fit md:fixed bottom-0 z-20 right-8 py-1 w-full text-xs tracking-wider font-medium text-center">
            Design inspired by
            <NextLink href="https://mayashavin.com" passHref>
              <a
                className="underline px-1 decoration-wavy text-red"
                rel="noopener noreferrer"
                target="_blank">
                Maya Shavin
              </a>
            </NextLink>
            & <br /> Developed by Yours sincerly with 🧡 - © 2021
          </div>
        </div>
      </details>
    </footer>
  );
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
