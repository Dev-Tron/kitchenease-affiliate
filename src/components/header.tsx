"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger load animation
    setTimeout(() => setLoaded(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-30 transform transition-all duration-700 ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } ${
        isOpen
          ? "bg-white shadow-md h-16"
          : scrolled
          ? "bg-[#5A8F60] shadow-md h-12"
          : "bg-transparent h-16"
      }`}
    >
      <div
        className={`container mx-auto h-full px-4 flex items-center justify-between transition-all duration-500 ${
          isOpen ? "text-black" : "text-white"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`font-extrabold tracking-tight flex items-center transition-all duration-500 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          <span className="inline-block px-2.5 py-1 rounded-xl bg-white text-brand">
            Kitchen
          </span>
          <span className="ml-1">Ease</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex gap-5 items-center transition-all duration-500 ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          <Link className="hover:text-yellow-200 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-yellow-200 transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-yellow-200 transition-colors" href="/disclosure">
            Disclosure
          </Link>
          <Link className="hover:text-yellow-200 transition-colors" href="/contact">
            Contact
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white text-black p-6 shadow-lg z-50 transform transition-all duration-300 ease-in-out rounded-bl-2xl ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-black"
        >
          <X size={26} />
        </button>

        {/* ✅ Nav Links (hydration-safe) */}
        <nav className="mt-10 flex flex-col gap-4 text-lg">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Disclosure", href: "/disclosure" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`transform transition-all duration-300 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              } hover:text-[#5A8F60]`}
              style={{ transitionDelay: `${index * 100}ms` }} // ✅ safe fix for hydration mismatch
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="mt-8 border-t border-stone-200 pt-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
