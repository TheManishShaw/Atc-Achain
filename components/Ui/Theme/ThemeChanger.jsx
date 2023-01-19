import React from "react";
import { useTheme } from "next-themes";

import { useState } from "react";
import { useEffect } from "react";
const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("dark")
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    0;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-white focus:outline-none focus:ring-4 focus:ring-gray-500 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
          onClick={() => setTheme("light")}
        >
          sun
        </button>
      );
    } else {
      return (
        <button
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 bg-primary focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
          onClick={() => setTheme("dark")}
        >
          moon
        </button>
      );
    }
  };
  return (
    <div>
      <div></div>
      {renderThemeChanger()}
    </div>
  );
};

export default ThemeChanger;
