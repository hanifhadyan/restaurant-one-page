import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-neutral-950 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm tracking-[0.35em] text-amber-400 uppercase md:text-base">
            Contact Us
          </h2>
          <div className="w-24 h-px bg-amber-500/60 mx-auto mt-6" />
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          {/* Location */}
          <div className="text-center mb-12">
            <h3 className="text-xs tracking-widest text-amber-500/70 mb-4 uppercase">
              Location
            </h3>
            <p className="text-base leading-relaxed text-neutral-300 md:text-lg md:leading-loose">
              Fairmont Jakarta, Level 3<br />
              Jl. Asia Afrika No.8, Gelora, Tanah Abang
              <br />
              Jakarta Pusat, DKI Jakarta 10270
            </p>
          </div>

          {/* Phone */}
          <div className="text-center mb-12">
            <h3 className="text-xs tracking-widest text-amber-500/70 mb-4 uppercase">
              Telephone
            </h3>
            <a
              href="tel:+622129703333"
              className="text-base text-neutral-300 hover:text-amber-400 transition-colors duration-300 md:text-lg"
            >
              (021) 2970 3333
            </a>
          </div>

          {/* Operating Hours */}
          <div className="text-center mb-12">
            <h3 className="text-xs tracking-widest text-amber-500/70 mb-4 uppercase">
              Operating Hours
            </h3>
            <div className="text-base leading-relaxed text-neutral-300 md:text-lg">
              <p>Lunch: 11:30 AM - 3:00 PM</p>
              <p>Dinner: 6:00 PM - 10:30 PM</p>
              <p className="mt-2 text-sm text-neutral-400">Daily</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-amber-600 px-10 py-4 text-xs font-medium tracking-widest text-neutral-900 transition-all duration-300 hover:bg-amber-700 hover:text-black hover:shadow-lg hover:shadow-amber-900/50"
            >
              RESERVE NOW
            </a>
          </div>

          {/* Additional Contact Methods */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <a
              href="mailto:info@houseofyuen.com"
              className="text-xs font-medium tracking-widest text-gray-300 transition-colors duration-300 hover:text-amber-400"
            >
              EMAIL US
            </a>
            <span className="hidden sm:block text-amber-500/30">|</span>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-widest text-gray-300 transition-colors duration-300 hover:text-amber-400"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
