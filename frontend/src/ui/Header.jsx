import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white transition hover:bg-teal-800"
          >
            V
          </Link>

          <div>
            <h1 className="text-base font-semibold tracking-tight text-slate-900 leading-tight">
              <Link to="/">Vision Cart</Link>
            </h1>

            <p className="hidden sm:block text-[11px] text-slate-500">
              An Smart Retail Management System
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/howitworks"
            className="text-sm font-medium text-slate-600 hover:text-teal-700 transition"
          >
            How it works
          </a>

          <a
            href="/features"
            className="text-sm font-medium text-slate-600 hover:text-teal-700 transition"
          >
            Features
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-teal-700 transition"
          >
            About
          </a>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 transition"
          >
            Login
          </Link>

          <div className="h-8 w-px bg-slate-200" />

          <Link
            to="/signup"
            className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 space-y-4 md:hidden shadow-lg">
          <div className="flex flex-col space-y-3">
            <a
              href="/howitworks"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-teal-700 py-1 transition"
            >
              How it works
            </a>
            <a
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-teal-700 py-1 transition"
            >
              Features
            </a>
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-teal-700 py-1 transition"
            >
              About
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-md border border-teal-700 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
