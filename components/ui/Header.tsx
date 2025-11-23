"use client"; // Needed for the mobile menu state

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import REFLECT_LOGO from "@/public/logos/reflect_logo.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-primary-200/90 py-2 shadow-md backdrop-blur-md"
          : "bg-primary-200 py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="group relative z-50">
          <Image
            src={REFLECT_LOGO}
            alt="Reflect Logo"
            className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-black"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-primary-500 rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            Join for free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 block p-2 text-gray-800 focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`bg-primary-200/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl font-semibold">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary-500 rounded-full px-8 py-3 text-white shadow-lg"
          >
            Join for free
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Helper Component for Navigation Links
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative text-sm font-semibold text-gray-700 transition-colors hover:text-black"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
