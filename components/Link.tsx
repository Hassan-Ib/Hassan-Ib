import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const Link = ({ href, children, className, ariaLabel }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a aria-label={ariaLabel} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
