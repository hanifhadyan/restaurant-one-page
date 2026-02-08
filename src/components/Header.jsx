import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#050506] text-white border-b border-neutral-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-left">
          <span className="block text-[11px] tracking-[0.3em] uppercase text-amber-300">
            HOUSE
          </span>
          <span className="block text-[11px] tracking-[0.3em] uppercase text-amber-300">
            OF YUEN
          </span>
          <span className="block text-[8px] tracking-[0.2em] uppercase text-neutral-400">
            Cantonese Dining
          </span>
        </h1>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-amber-300 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-amber-300 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-amber-300 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-[11px] tracking-[0.25em] uppercase">
            <li>
              <a
                href="#about"
                className="text-neutral-200 hover:text-amber-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-neutral-200 hover:text-amber-300 transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#private-dining"
                className="text-neutral-200 hover:text-amber-300 transition-colors"
              >
                Private Dining
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="text-neutral-200 hover:text-amber-300 transition-colors"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-neutral-200 hover:text-amber-300 transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-neutral-200 hover:text-amber-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-18.25 left-0 right-0 bg-[#050506] border-b border-neutral-800 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex flex-col space-y-4 text-[11px] tracking-[0.25em] uppercase">
            <li>
              <a
                href="#about"
                className="block text-neutral-200 hover:text-amber-300 transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="block text-neutral-200 hover:text-amber-300 transition-colors py-2"
                onClick={closeMenu}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#private-dining"
                className="block text-neutral-200 hover:text-amber-300 transition-colors py-2"
                onClick={closeMenu}
              >
                Private Dining
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="block text-neutral-200 hover:text-amber-300 transition-colors py-2"
                onClick={closeMenu}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block text-neutral-200 hover:text-amber-300 transition-colors py-2"
                onClick={closeMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-neutral-200 hover:text-amber-300 transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
