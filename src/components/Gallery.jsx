import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://placehold.co/600x450/1a1a1a/1a1a1a",
      alt: "House of Yuen Interior",
    },
    {
      src: "https://placehold.co/600x450/1a1a1a/1a1a1a",
      alt: "Signature Dish",
    },
    {
      src: "https://placehold.co/600x450/1a1a1a/1a1a1a",
      alt: "Private Dining Room",
    },
    {
      src: "https://placehold.co/600x450/1a1a1a/1a1a1a",
      alt: "Culinary Excellence",
    },
    {
      src: "https://placehold.co/600x450/1a1a1a/1a1a1a",
      alt: "Fine Dining Experience",
    },
    {
      src: "https://placehold.co/600x450/1a1a1a/1a1a1a",
      alt: "Elegant Ambience",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-neutral-950 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm tracking-[0.35em] text-amber-400 uppercase md:text-base">
            Gallery
          </h2>
          <div className="w-24 h-px bg-amber-500/60 mx-auto mt-6" />
          <p className="mt-8 text-base leading-relaxed text-neutral-300 text-justify md:text-lg md:leading-loose">
            A visual journey through our elegant dining spaces and exquisite
            culinary creations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-neutral-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Text Overlay - Always Visible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex items-center justify-center p-4">
                <p className="text-amber-400 text-sm tracking-widest uppercase text-center md:text-base">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
