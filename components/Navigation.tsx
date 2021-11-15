import React from "react";
import { useDarkMode } from "../hooks";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Link, { LinkProps } from "./Link";
import Image from "next/image";
import Logo from "../public/hassan-logo.svg";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

const NavLink = ({
  children,
  closeNav,
  href,
}: LinkProps & { closeNav?: () => void }) => {
  return (
    <Link
      href={href}
      className="py-2 px-1 md:border-b-2 md:border-main-dark md:dark:border-main-light">
      <span onClick={closeNav}>{children}</span>
    </Link>
  );
};
const Navigation = (props: Props) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const { pathname } = useRouter();
  // console.log(darkMode, toggleDarkMode);

  const openNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  React.useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className=" py-1 bg-main-light  dark:bg-main-dark ">
      <nav className="py-4 px-4 flex items-center justify-end">
        <div
          className={`uppercase tracking-wide flex flex-col absolute left-0 top-0 w-full py-8 px-4 bg-main-light dark:bg-main-dark ${
            isNavOpen || "hidden"
          } dark:bg-main-dark md:p-0 md:text-xl md:flex md:flex-grow 
          z-20 md:relative md:flex-row md:gap-4 md:items-center md:justify-center`}>
          <NavLink href="/about">About</NavLink>
          {/* <NavLink href="/blog">Blog</NavLink> */}
          <Link
            href="/"
            className="order-first md:order-none relative flex items-center"
            ariaLabel="Click to go back to homepage">
            <div className="absolute w-10  h-10  top-4  border border-main-dark dark:border-white transform origin-right rotate-45" />
            <Image
              src={Logo}
              alt="Hassan logo | home Logo"
              width="70"
              height="50"
            />
            <span className=" md:hidden">Home</span>
          </Link>
          <NavLink href="/download-cv">download cv</NavLink>
          {/* <NavLink href="/playChess">Lets play</NavLink> */}

          <button
            onClick={openNav}
            className="text-3xl absolute right-4 top-0 mt-8 md:hidden"
            aria-label="menu close">
            <MdClose />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="menu open"
            className="text-3xl md:hidden"
            onClick={openNav}>
            <BiMenu />
          </button>

          <button
            onClick={toggleDarkMode}
            className="w-7 h-7 text-xl relative  rounded border border-black dark:border-main-light overflow-hidden flex flex-col items-center">
            <span
              className={`bg-main-dark text-white p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-200 duration-300 ${
                !darkMode || "-rotate-90 -translate-x-12"
              }`}>
              <BsFillMoonFill />
            </span>
            <span
              className={`bg-main-light text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-200 duration-300 ${
                darkMode || "translate-x-12  rotate-90"
              }`}>
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
