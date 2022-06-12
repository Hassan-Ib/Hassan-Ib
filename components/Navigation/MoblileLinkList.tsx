import React from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { navlinks } from "./navlinks";
import { ResumeBtn } from "./ResumeBtn";

type NavListProps = {
  closeNav: () => void;
  openNav: () => void;
  isNavOpen: boolean;
};
export function MobileNavList({ closeNav, openNav, isNavOpen }: NavListProps) {
  const focusableElement = "a[href], button";
  const firstFocusableElementRef = React.useRef<HTMLButtonElement>(null);

  const trapFocusOnTabThrough = React.useCallback(
    function (this: HTMLDivElement, e: KeyboardEvent) {
      const focusableElements = this.querySelectorAll(
        focusableElement
      ) as NodeListOf<HTMLElement>;
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;
      if (
        e.key === "Tab" &&
        e.shiftKey &&
        activeElement === firstFocusableElement
      ) {
        e.preventDefault();
        lastFocusableElement.focus();
      } else if (
        !e.shiftKey &&
        e.key === "Tab" &&
        activeElement === lastFocusableElement
      ) {
        e.preventDefault();
        firstFocusableElement.focus();
      }

      if (e.key === "Escape") {
        closeNav();
      }
    },
    [closeNav]
  );

  React.useEffect(() => {
    const activeElementBeforeNavOpen = document.activeElement as HTMLElement;
    firstFocusableElementRef.current?.focus();

    const linkListWrapper = document.querySelector(
      ".mobile-nav-list-wrapper"
    ) as HTMLDivElement;

    linkListWrapper.addEventListener("keydown", trapFocusOnTabThrough);

    return () => {
      if (linkListWrapper) {
        linkListWrapper.removeEventListener("keydown", trapFocusOnTabThrough);
      }
      activeElementBeforeNavOpen.focus();
    };
  }, [isNavOpen, trapFocusOnTabThrough]);

  return (
    <motion.div
      className={`mobile-nav-list-wrapper fixed z-50  w-3/4 sm:w-1/2  left-full h-screen top-0 capitalize tracking-wide flex flex-col justify-center items-center gap-8  bg-main-light backdrop-blur-sm dark:backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 dark:bg-main-dark transition-transform duration-200 md:hidden border-l border-main-dark dark:border-white`}
      key="mobile-nav-list-wrapper"
      initial={{
        x: "0",
      }}
      animate={{
        x: "-100%",
      }}
      exit={{
        x: "0%",
      }}
      transition={{
        duration: 0.1,
        type: "tween",
      }}>
      <button
        ref={firstFocusableElementRef}
        onClick={closeNav}
        className="text-lg font-barlow flex gap-1 items-center justify-center border border-main-dark dark:border-white rounded-md py-1 px-3 absolute right-4 top-0 mt-8 bg-main-light dark:bg-main-dark md:hidden"
        aria-label="menu close">
        <span> Close</span> <MdClose className="text-xl mt-1" />
      </button>
      <ul className=" px-6 flex flex-col gap-8">
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <NavLink href={navlink.href} closeNav={closeNav} index={index}>
              {navlink.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ResumeBtn />
    </motion.div>
  );
}
