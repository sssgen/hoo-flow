"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeController = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <MoonIcon
          className="cursor-pointer hover:text-primary active:text-primary/80"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : (
        <SunIcon
          className="cursor-pointer hover:text-primary active:text-primary/80"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </>
  );
};

export default ThemeController;
