import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-blue-400">SwiftRide Rentals</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#vehicles" className="hover:text-blue-400">Vehicles</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#aboutus" className="hover:text-blue-400">About Us</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:flex">
          <a href="#book" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 border-t border-gray-700">
          <a href="#home" className="block px-4 py-2 hover:text-blue-400">Home</a>
          <a href="#vehicles" className="block px-4 py-2 hover:text-blue-400">Vehicles</a>
          <a href="#services" className="block px-4 py-2 hover:text-blue-400">Services</a>
          <a href="#aboutus" className="block px-4 py-2 hover:text-blue-400">About Us</a>
          <a href="#contact" className="block px-4 py-2 hover:text-blue-400">Contact</a>
          <a href="#book" className="block px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-center rounded">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
