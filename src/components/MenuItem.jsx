import React from "react";

const MenuItem = ({ item, onClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(item);
    }
  };

  return (
    <div
      className="group cursor-pointer outline-none"
      role="button"
      tabIndex={0}
      onClick={() => onClick(item)}
      onKeyDown={handleKeyDown}
    >
      <div className="overflow-hidden rounded">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="mt-4 text-center">
        <h4 className="text-lg font-medium tracking-wide text-neutral-200 group-hover:text-amber-400 transition-colors duration-300">
          {item.name}
        </h4>
        <p className="text-neutral-500 text-sm">
          {item.price === "Market Price" ? "Market Price" : `$${item.price}`}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
