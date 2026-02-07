import React from "react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative h-[70vh] min-h-[480px] border-b border-neutral-800 overflow-hidden"
    >
      {/* Background image – replace with real photo of the restaurant */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/restaurant-hero.jpg')",
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90" />

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto h-full px-4 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber-300 mb-4">
              Cantonese Fine Dining
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl text-amber-100 tracking-[0.25em] uppercase">
              House of Yuen
            </h1>

            <p className="mt-6 text-sm text-neutral-200 leading-relaxed">
              A contemporary expression of classic Cantonese cuisine within a
              five-star setting. Crafted for intimate celebrations, discreet
              business gatherings, and occasions that demand quiet excellence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Reserve via WhatsApp
              </a>
              <a
                href="#menu"
                className="text-[11px] tracking-[0.3em] uppercase text-neutral-200 hover:text-amber-300"
              >
                View the Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
