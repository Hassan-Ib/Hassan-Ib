import React from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    let root = window.document.documentElement;

    darkMode ? root.classList.add("dark") : root.classList.remove("dark");

    console.log(root.className);
  }, [darkMode]);

  return toggleDarkMode;
}
