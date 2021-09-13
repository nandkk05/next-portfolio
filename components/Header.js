import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
      {" "}
      <div className="flex items-center text-2xl font-bold justify-between w-full max-w-7xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav dark:bg-black bg-opacity-60 dark:text-gray-100">
        <h1>
          Nand <span className="text-blue-500">Kishor</span>
        </h1>
        {renderThemeChanger()}
      </div>
    </div>
  );
}

export default Header;
