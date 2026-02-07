import React from "react";

const Header = () => {
  return (
    <header className="bg-[#050506] text-white border-b border-neutral-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-left">
          <span className="block text-[11px] tracking-[0.3em] uppercase text-amber-300">
            HOUSE OF YUEN
          </span>
          <span className="block text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            Fine Cantonese Dining
          </span>
        </h1>

        {/* Simple nav, similar to original style but color-tuned */}
        <nav>
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
    </header>
  );
};

export default Header;
