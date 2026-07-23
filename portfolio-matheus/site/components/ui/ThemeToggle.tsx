"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const {
    theme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9" />
    );
  }

  const isDark =
    theme === "dark";

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className="rounded-lg p-2 text-muted transition-colors hover:bg-secondary hover:text-foreground"
    >
      {isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}