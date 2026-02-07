import React from 'react';

const PrivateDining = () => {
  return (
    <section id="private-dining" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">PRIVATE DINING</h2>
        <p className="mb-8 text-lg">
          The restaurant also accommodates 12 private rooms for the city's dinner
          who wish to banquet comfortably for special occasions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add images of private dining rooms here */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Room 1</h3>
            <p className="text-gray-400">Capacity: 10 guests</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Room 2</h3>
            <p className="text-gray-400">Capacity: 12 guests</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Room 3</h3>
            <p className="text-gray-400">Capacity: 8 guests</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
