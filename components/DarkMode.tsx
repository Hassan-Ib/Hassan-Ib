import React from "react";
import { useDarkModeCtx } from "../context/DarkModeCtx";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function DarkMode() {
  const { darkMode, toggleDarkMode } = useDarkModeCtx();
  return (
    <button
      onClick={toggleDarkMode}
      className="w-7 h-7 text-xl relative  rounded border border-black dark:border-main-light overflow-hidden flex flex-col items-center"
    >
      <span
        className={`bg-main-dark text-white p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-100 duration-300 ${
          !darkMode || "-rotate-90 -translate-x-12"
        }`}
      >
        <BsFillMoonFill />
      </span>
      <span
        className={`bg-main-100 text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-100 duration-300 ${
          darkMode || "translate-x-12  rotate-90"
        }`}
      >
        <BsFillSunFill />
      </span>
    </button>
  );
}
