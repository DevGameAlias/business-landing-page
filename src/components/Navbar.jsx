import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#282828] border-b-4 border-yellow-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-3 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">HandyMan</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-100 hover:text-yellow-400">
            Services
          </a>
          <a href="#testimonials" className="text-gray-100 hover:text-yellow-400">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-100 hover:text-yellow-400">
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
