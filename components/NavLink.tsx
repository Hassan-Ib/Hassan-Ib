import React from "react";
import Link, { LinkProps } from "./Link";
// import { useRouter } from "next/router";

type NavLinkProps = LinkProps & {
  closeNav: () => void;
  index: number;
};
export const NavLink = ({ children, closeNav, href, index }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="py-2 px-1 font-medium font-barlow tracking-widest "
    >
      <span onClick={closeNav}>
        <span className="text-black dark:text-main-100 ">0{index + 1}.</span>
        {"  "}
        <span className=" text-black dark:text-main-100">{children}</span>
      </span>
    </Link>
  );
};
