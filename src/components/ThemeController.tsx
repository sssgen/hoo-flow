"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeController = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Moon
        className={`cursor-pointer hover:text-primary active:text-primary/80 ${
          theme === "light" ? "hidden" : ""
        }`}
      />
      {theme === "light" && (
        <Sun className="cursor-pointer hover:text-primary active:text-primary/80" />
      )}
    </div>
  );
};

export default ThemeController;
