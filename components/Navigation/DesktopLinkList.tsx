import React from "react";
import { NavLink } from "./NavLink";
import { navlinks } from "./navlinks";
import { ResumeBtn } from "./ResumeBtn";

export function DesktopNavList() {
  return (
    <div className="hidden md:flex gap-8 mx-4">
      <ul className="flex flex-row md:gap-4 items-center ">
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <NavLink href={navlink.href} index={index}>
              {navlink.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ResumeBtn />
    </div>
  );
}

export default DesktopNavList;
