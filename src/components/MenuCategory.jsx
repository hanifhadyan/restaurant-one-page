import React from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ title, items, onItemClick }) => {
  return (
    <section className="mb-14">
      {/* Category heading – subtle, spaced out, luxury feel */}
      <h3 className="text-[11px] tracking-[0.35em] text-amber-400 uppercase mb-6">
        {title}
      </h3>

      {/* Items – restrained grid, feels more like a curated list than a shop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} onClick={onItemClick} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
