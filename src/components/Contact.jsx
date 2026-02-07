import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">CONTACT US</h2>
        <p className="mb-4 text-lg">
          Fairmont Jakarta, Level 3 <br />
          Jl. Asia Afrika No.8, Gelora, Tanah Abang <br />
          Jakarta Pusat, DKI Jakarta 10270
        </p>
        <p className="text-lg">
          Phone: (021) 29703333
        </p>
        <div className="mt-8">
          <a
            href="https://wa.me/6281234567890" // Replace with the actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            RESERVE NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
