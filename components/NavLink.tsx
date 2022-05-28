import React from "react";
import Link, { LinkProps } from "./Link";

export const NavLink = ({
  children,
  closeNav,
  href,
}: LinkProps & { closeNav?: () => void }) => {
  return (
    <Link href={href} className="py-2 px-1">
      <span onClick={closeNav}>{children}</span>
    </Link>
  );
};
