import React, { useContext, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
  // how to use: const { darkMode, setDarkMode } = useTheme();
}

export default function ThemeProvider({ initialTheme, children }) {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);

    localStorage.setItem("current-theme", existing);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(darkMode);
  }, [darkMode]);

  //   const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark" : ""} `}>
        <div
          className="font-plex px-14 min-h-screen

          dark:bg-gray-900
          dark:text-white 

          "
        >
          {/* bg-gradient-to-b from-white to-white dark:from-gray-900
          dark:to-gray-800 */}

          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl right-16 top-28 fixed z-50"
          >
            <BsFillMoonStarsFill />
          </button> */}
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
