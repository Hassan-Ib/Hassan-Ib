import React from "react";
import Link, { LinkProps } from "../Link";
import ToolTiped from "../ToolTiped";

export const Social = (props: LinkProps & { linkTo: string }) => {
  return (
    <ToolTiped tip={props.linkTo}>
      <Link
        className={props.className}
        href={props.href}
        ariaLabel={`Hassan Ibrahim | Developer | ${props.linkTo} link`}>
        {props.children}
      </Link>
    </ToolTiped>
  );
};
