import React from "react";

const IS_DARK_MODE = "dark";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  React.useEffect(() => {
    const isDarkTheme = (): boolean =>
      window.localStorage.theme === IS_DARK_MODE;

    setDarkMode(isDarkTheme);
  }, [darkMode]);

  // adding the className to body
  React.useEffect(() => {
    let root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}
