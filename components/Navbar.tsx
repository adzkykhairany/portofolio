"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 text-foreground backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em]">
          AK
        </p>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-opacity hover:opacity-70 ${
                activeSection === item.href.replace("#", "")
                  ? "opacity-100"
                  : "opacity-60"
              }`}
            >
              {item.label}

              {activeSection === item.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 hover:bg-foreground/10 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-foreground/10 px-8 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "opacity-60"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}