import React from "react";

const News = () => {
  const newsItems = [
    {
      title: "Culinary Excellence Recognized",
      date: "Since 2011",
      excerpt:
        "House of Yuen continues the legacy of excellence in Cantonese fine dining, bringing generations of respected culinary traditions to contemporary gastronomy.",
    },
    {
      title: "New Seasonal Menu Unveiled",
      date: "October 26, 2023",
      excerpt:
        "Experience the taste of autumn with our new seasonal menu, featuring the freshest ingredients of the season.",
    },
  ];

  return (
    <section
      id="news"
      className="py-24 bg-neutral-950 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm tracking-[0.35em] text-amber-400 uppercase md:text-base">
            News
          </h2>
          <div className="w-24 h-px bg-amber-500/60 mx-auto mt-6" />
        </div>

        {/* News Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-sm hover:border-amber-600/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-medium mb-3 text-amber-100 md:text-2xl">
                {item.title}
              </h3>
              <p className="text-xs tracking-widest text-amber-500/70 mb-4 uppercase">
                {item.date}
              </p>
              <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
