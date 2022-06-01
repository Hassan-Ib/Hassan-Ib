import React from "react";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import { DarkMode } from "./DarkMode";
import Link from "../Link";
import Logo from "../Logo";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { MobileNavList } from "./MoblileLinkList";
import DesktopLinkList from "./DesktopLinkList";
type Props = {
  className?: string;
};

const Navigation = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const { pathname } = useRouter();

  const openNav = () => {
    setIsNavOpen(true);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  React.useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavOpen]);

  React.useEffect(() => {
    closeNav();
  }, [pathname]);
  return (
    <header className="py-1">
      <nav className="py-4 px-4 flex items-center ">
        <div className="flex-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <DesktopLinkList />
        <AnimatePresence exitBeforeEnter>
          {isNavOpen && (
            <MobileNavList
              isNavOpen={isNavOpen}
              closeNav={closeNav}
              openNav={openNav}
            />
          )}
        </AnimatePresence>
        <div className="flex items-center gap-4">
          <button
            aria-label="menu open"
            className=" md:hidden flex items-center font-barlow gap-1 border py-1 px-3 border-black dark:border-white rounded-md"
            onClick={openNav}
          >
            Menu <BiMenu className=" text-3xl" />
          </button>

          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

Navigation.defaultProps = {
  className: "",
};

export default Navigation;
