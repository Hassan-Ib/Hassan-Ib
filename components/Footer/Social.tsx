import React from "react";
import Link, { LinkProps } from "../Link";

export const Social = (props: LinkProps & { linkTo: string }) => {
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
