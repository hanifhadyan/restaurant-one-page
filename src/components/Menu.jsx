import React, { useState } from "react";
import MenuCategory from "./MenuCategory";
import MenuModal from "./MenuModal";

// --- MENU DATA ---
// Replace this with CMS/API data later.
// Images use remote placeholders for now – you can swap to /images/... once you have assets.
const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        id: 1,

        name: "Crispy Spring Rolls",

        description:
          "Delicate rolls filled with fresh vegetables and minced pork, fried to a perfect golden crisp. Served with a sweet chili dipping sauce.",

        price: "18",
        image:
          "https://placehold.co/600x400/1a1a1a/d4af37?text=Crispy+Spring+Rolls",
      },
      {
        id: 2,
        name: "Steamed Dumpling Selection",

        description:
          "A curated selection of handcrafted dumplings, including prawn har gow and pork siu mai, steamed to preserve their natural sweetness.",

        price: "25",

        image:
          "https://placehold.co/600x400/1a1a1a/d4af37?text=Steamed+Dumplings",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        id: 3,

        name: "Peking Duck",

        description:
          "Whole duck, marinated and roasted to achieve lacquered, crispy skin and succulent meat. Served with traditional pancakes, scallions, and hoisin.",

        price: "98",

        image: "https://placehold.co/600x400/1a1a1a/d4af37?text=Peking+Duck",
      },
      {
        id: 4,
        name: "Wok-Fried Wagyu Beef",

        description:
          "Premium Wagyu cubes, flash-fried with crushed black pepper and garlic. A balance of smoky aroma, tenderness, and richness.",

        price: "120",

        image: "https://placehold.co/600x400/1a1a1a/d4af37?text=Wagyu+Beef",
      },
      {
        id: 5,
        name: "Steamed Garoupa",

        description:
          "Whole garoupa gently steamed with superior soy, ginger, and scallions to highlight its delicate texture and natural sweetness.",

        price: "Market Price",

        image:
          "https://placehold.co/600x400/1a1a1a/d4af37?text=Steamed+Garoupa",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 6,

        name: "Chilled Mango Sago",

        description:
          "A refreshing classic of mango purée, pomelo, and sago pearls, served chilled for a clean, vibrant finish.",

        price: "15",

        image: "https://placehold.co/600x400/1a1a1a/d4af37?text=Mango+Sago",
      },
    ],
  },
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section
      id="menu"
      className="py-24 bg-neutral-950 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4">
        {/* Intro – narrow centered block, similar to reference layout */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm tracking-[0.35em] text-amber-400 uppercase md:text-base">
            The Menu
          </h2>
          <div className="w-24 h-px bg-amber-500/60 mx-auto mt-6" />
          <p className="mt-8 text-base leading-relaxed text-neutral-300 md:text-lg md:leading-loose">
            Explore a curated selection of dishes representing the pinnacle of
            Cantonese culinary artistry. Each plate is prepared with meticulous
            technique and ingredients selected to meet the expectations of a
            five-star dining room.
          </p>
        </div>

        {/* Categories – constrained width so content is visually centered, not hugging the left */}
        <div className="max-w-5xl mx-auto space-y-14">
          {menuData.map((category) => (
            <MenuCategory
              key={category.category}
              title={category.category}
              items={category.items}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>

      {/* Dish detail modal */}
      {selectedItem && (
        <MenuModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Menu;
