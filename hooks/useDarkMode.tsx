import React from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  const getTheme = (): boolean =>
    window.localStorage.theme === "dark" ||
    window.matchMedia("(prefers-color-scheme : dark)").matches
      ? true
      : false;

  React.useEffect(() => {
    setDarkMode(getTheme);
  }, []);

  React.useEffect(() => {
    console.log(localStorage.theme);
    let root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");

    // console.log(root.className);
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}
