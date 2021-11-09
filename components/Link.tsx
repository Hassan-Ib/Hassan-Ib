import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const Link = (props: LinkProps) => {
  return (
    <NextLink passHref {...props}>
      <a aria-label={props.ariaLabel} className={props.className}>
        {props.children}
      </a>
    </NextLink>
  );
};

export default Link;
