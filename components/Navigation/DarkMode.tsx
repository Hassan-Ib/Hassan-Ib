import React from "react";
import { useDarkModeCtx } from "../../context/DarkModeCtx";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function DarkMode() {
  const { darkMode, toggleDarkMode } = useDarkModeCtx();
  const mode = darkMode ? "dark" : "light";
  return (
    <section
      // onClick={toggleDarkMode}
      // arial-label={`toggle ${mode} mode`}
      className="w-7 h-7 text-xl relative rounded border border-black dark:border-main-light overflow-hidden flex flex-col items-center">
      <button
        onClick={toggleDarkMode}
        aria-label="toggle dark mode"
        className={`bg-main-dark text-white p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-100 duration-300 ${
          !darkMode || "-rotate-90 -translate-x-12"
        }`}>
        <BsFillMoonFill />
      </button>
      <button
        onClick={toggleDarkMode}
        aria-label="toggle light mode"
        className={`bg-main-100 text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-100 duration-300 ${
          darkMode || "translate-x-12  rotate-90"
        }`}>
        <BsFillSunFill />
      </button>
    </section>
  );
}
