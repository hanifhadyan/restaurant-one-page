import React from "react";

const PrivateDining = () => {
  const privateRooms = [
    {
      name: "Imperial Suite",
      capacity: "10-12 guests",
      description:
        "An intimate setting perfect for executive gatherings and family celebrations.",
    },
    {
      name: "Garden Room",
      capacity: "8-10 guests",
      description:
        "A serene space with elegant décor, ideal for private business dinners.",
    },
    {
      name: "Dynasty Hall",
      capacity: "20-25 guests",
      description:
        "Our largest private room, designed for grand celebrations and corporate events.",
    },
  ];

  return (
    <section
      id="private-dining"
      className="py-24 bg-neutral-950 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm tracking-[0.35em] text-amber-400 uppercase md:text-base">
            Private Dining
          </h2>
          <div className="w-24 h-px bg-amber-500/60 mx-auto mt-6" />
          <p className="mt-8 text-base leading-relaxed text-neutral-300 text-justify md:text-lg md:leading-loose">
            The restaurant accommodates 12 private rooms for the city's diners
            who wish to banquet comfortably for special occasions. Each room is
            designed with refined elegance, offering an exclusive atmosphere for
            intimate celebrations, discreet business gatherings, and memorable
            family events.
          </p>
        </div>

        {/* Private Rooms Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {privateRooms.map((room, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-sm hover:border-amber-600/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-medium mb-3 text-amber-100 tracking-wide">
                {room.name}
              </h3>
              <p className="text-xs tracking-widest text-amber-500/70 mb-4 uppercase">
                {room.capacity}
              </p>
              <p className="text-base leading-relaxed text-neutral-300">
                {room.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-medium tracking-widest text-amber-400 border-b border-amber-400/60 hover:border-amber-400 transition-colors duration-300"
          >
            INQUIRE ABOUT PRIVATE ROOMS
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
