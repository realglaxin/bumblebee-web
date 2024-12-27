import { useState, useEffect } from "react";
import type { Theme } from "../utils/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return { theme, setTheme };
}
