import React from "react";
import { useDarkMode } from "../hooks";
import NextLink from "next/link";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

type Props = {
  className?: string;
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const Link = ({ href, children, className, ariaLabel }: LinkProps) => {
  return (
    <NextLink href={href}>
      <a aria-label={ariaLabel} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

const NavLink = (props: LinkProps) => {
  return (
    <Link
      href={props.href}
      className="py-3 px-1 md:border-b-2 md:border-main-dark md:dark:border-main">
      {props.children}
    </Link>
  );
};
const Navigation = (props: Props) => {
  const toggleDarkMode = useDarkMode();

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const openNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="bg-main dark:bg-main-dark">
      <nav className="py-6 flex items-center justify-end">
        <div
          className={`uppercase tracking-wide flex flex-col absolute ${
            isNavOpen || "hidden"
          } py-8 px-4 left-0 top-0 w-full bg-main md:flex dark:bg-main-dark z-20 md:relative md:flex-row md:gap-4 md:items-center`}>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/download-cv">download cv</NavLink>
          <Link href="/" ariaLabel="Home link" className="order-first">
            logo
          </Link>
          <NavLink href="/about#contact">contact</NavLink>
          <NavLink href="/playChess">Lets play</NavLink>

          <button
            onClick={openNav}
            className="text-3xl absolute right-4 top-0 mt-8 md:hidden"
            aria-label="menu close">
            <MdClose />
          </button>
        </div>

        <div className="border flex items-center gap-4 border-black">
          <button
            aria-label="menu open"
            className="text-4xl md:hidden"
            onClick={openNav}>
            <BiMenu />
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 text-2xl  rounded border border-black overflow-hidden flex flex-col items-center">
            <span className="p-1 transform origin-right ${is}">
              <BsFillMoonFill />
            </span>
            <span className="text-main p-1">
              <BsFillSunFill />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

Navigation.defaultProps = {
  className: "",
};
export default Navigation;
