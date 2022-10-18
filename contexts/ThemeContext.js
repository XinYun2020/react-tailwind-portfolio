import React, { useContext, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={`${darkMode ? "dark" : ""} `}>
        <div
          className="font-plex px-14 min-h-screen
          bg-gradient-to-b from-white xto-teal-50 
          dark:text-white dark:from-gray-900 dark:to-gray-500"
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl right-16 top-28 fixed"
          >
            <BsFillMoonStarsFill />
          </button>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
