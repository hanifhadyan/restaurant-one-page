import React from "react";

const HERO_IMAGE_URL = "/images/hero/restaurant-hero.png";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HERO_IMAGE_URL}
        alt="House of Yuen Restaurant"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Elegant Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="mb-6 text-xs tracking-[0.35em] text-amber-400/90 md:text-sm">
            CANTONESE FINE DINING
          </p>

          {/* Main Heading */}
          <h1 className="mb-8 font-serif text-4xl tracking-[0.2em] text-amber-100 md:text-5xl lg:text-6xl">
            HOUSE OF YUEN
          </h1>

          {/* Decorative Line */}
          <div className="mx-auto mb-8 h-px w-32 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed tracking-wide text-gray-200 md:text-base lg:text-lg">
            A contemporary expression of classic Cantonese cuisine within a
            five-star setting. Crafted for intimate celebrations, discreet
            business gatherings, and occasions that demand quiet excellence.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 mt-5">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-600 px-8 py-3 text-xs font-medium tracking-widest text-neutral-900 transition-all duration-300 hover:bg-amber-700 hover:text-black hover:shadow-lg hover:shadow-amber-900/50"
            >
              RESERVE VIA WHATSAPP
            </a>
            <a
              href="#menu"
              className="text-xs font-medium tracking-widest text-gray-300 transition-colors duration-300 hover:text-amber-400"
            >
              VIEW THE MENU
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/80 to-transparent"></div>
    </div>
  );
};

export default Hero;
