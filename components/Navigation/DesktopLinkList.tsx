import React from "react";
import { NavLink } from "./NavLink";
import { navlinks } from "./navlinks";
import { ResumeBtn } from "./ResumeBtn";

export function DesktopNavList() {
  return (
    <ul className="hidden md:flex md:flex-row md:gap-4 items-center ">
      {navlinks.map((navlink, index) => (
        <li key={index}>
          <NavLink href={navlink.href} index={index}>
            {navlink.text}
          </NavLink>
        </li>
      ))}
      <ResumeBtn />
    </ul>
  );
}

export default DesktopNavList;
