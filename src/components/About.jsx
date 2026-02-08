import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        {/* Narrow centered column, similar to the original reference layout */}
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-sm tracking-[0.35em] text-amber-400 uppercase md:text-base">
              About Us
            </h2>
            <div className="w-24 h-px bg-amber-500/60 mx-auto mt-6" />
          </div>

          {/* Body copy */}
          <div className="space-y-6 text-base leading-relaxed text-neutral-300 text-justify md:text-lg md:leading-loose">
            <p>
              The city celebrate enlivened taste of Hong Kong that has been
              respected for generations. Bringing the true taste of Chinese high
              dining to the table, House of Yuen is ready to add to the palate
              and set a refined standard for gourmands in the city.
            </p>
            <p>
              Offering a wide, delectable array of Cantonese delicacies, House
              of Yuen aims to be synonymous with constantly excellent qualities
              and services. With highly training staff, their personalized
              service is crafted to match customer need of the moment.
            </p>
            <p>
              House of Yuen is as much about the ambience as it is about the
              high quality of the cuisine and service that it presents with a
              contemporary touch. Nestled in an exquisite setting at the
              Fairmont hotel in the strategic Senayan Square compound, it is
              ready to dish out to over 250 guests from business associates as
              well as families. The restaurant also accommodates 12 private
              rooms for the city's dinner who wish to banquet comfortably for
              special occasions.
            </p>
          </div>

          {/* Reservation link, left-aligned within the text column */}
          <div className="mt-10 text-left">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] uppercase text-amber-400 border-b border-amber-400/60 hover:border-amber-400"
            >
              Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
