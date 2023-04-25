"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon className="h-6 text-yellow-500 cursor-pointer" onClick={()=>setTheme('light')} />
      ) : (
        <MoonIcon className="h-6 cursor-pointer text-gray-900" onClick={()=>setTheme('dark')}/>
      )}
    </div>
  );
};

export default DarkModeButton;
