import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 House of Yuen. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
