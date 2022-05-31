import { createContext, useContext } from "react";
import { useDarkMode } from "../hooks";
type DarkMode = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeCtx = createContext<Partial<DarkMode>>({ darkMode: false });
type DarkProps = {
  children: React.ReactNode;
};
const DarkModeProvider = ({ children }: DarkProps) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <DarkModeCtx.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeCtx.Provider>
  );
};

const useDarkModeCtx = () => {
  const darkMode = useContext(DarkModeCtx);
  return darkMode;
};

export default DarkModeProvider;
export { useDarkModeCtx };
