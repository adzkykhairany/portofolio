"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [open, setOpen] = useState(false);

  const ThemeIcon =
    !mounted
      ? Monitor
      : theme === "light"
        ? Sun
        : theme === "dark"
          ? Moon
          : Monitor;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-foreground/10 bg-background p-3 text-foreground shadow-lg transition hover:scale-105"
          aria-label="Change theme"
        >
          <ThemeIcon size={20} />
        </button>

        {open && (
          <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-1 rounded-full border border-foreground/10 bg-background p-1 shadow-lg">
            <button
              onClick={() => {
                setTheme("light");
                setOpen(false);
              }}
              className="rounded-full p-2 text-foreground transition hover:bg-foreground/10"
              aria-label="Light mode"
            >
              <Sun size={18} />
            </button>

            <button
              onClick={() => {
                setTheme("dark");
                setOpen(false);
              }}
              className="rounded-full p-2 text-foreground transition hover:bg-foreground/10"
              aria-label="Dark mode"
            >
              <Moon size={18} />
            </button>

            <button
              onClick={() => {
                setTheme("system");
                setOpen(false);
              }}
              className="rounded-full p-2 text-foreground transition hover:bg-foreground/10"
              aria-label="System theme"
            >
              <Monitor size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}