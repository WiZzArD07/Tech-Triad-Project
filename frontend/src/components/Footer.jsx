// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center max-w-[1440px]">
        <p className="pl-2">
          © Copyrights 2024; workwise | All rights reserved | Digital Partner
          Indus Net Technologies
        </p>
        <div className="flex space-x-6 pr-2">
          <a href="#" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;