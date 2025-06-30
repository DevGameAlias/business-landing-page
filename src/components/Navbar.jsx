import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">HandyMan</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-yellow-600">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-yellow-600">
            About
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-yellow-600">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#services" className="block text-gray-700">
            Services
          </a>
          <a href="#about" className="block text-gray-700">
            About
          </a>
          <a href="#testimonials" className="block text-gray-700">
            Testimonials
          </a>
          <a href="#contact" className="block text-gray-700">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
