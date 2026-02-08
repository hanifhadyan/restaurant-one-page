import React from "react";
import { X } from "lucide-react";

const MenuModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="grow overflow-y-auto">
            <h2 className="text-3xl font-bold tracking-widest text-amber-400 mb-4">
              {item.name}
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-neutral-700 text-right">
            <p className="text-2xl font-light text-amber-400">
              {item.price === "Market Price"
                ? "Market Price"
                : `$${item.price}`}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
        aria-label="Close menu item details"
      >
        <X size={32} />
      </button>
    </div>
  );
};

export default MenuModal;
