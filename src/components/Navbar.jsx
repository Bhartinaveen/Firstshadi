import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-[#f5fdd5] px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-8"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback-logo.png"; // Optional fallback
            }}
          />
          <span className="text-sm font-semibold text-[#0a0a0a]">First</span>
          <span className='text-sm font-semibold text-[#b21616]'>Marriage.Com</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Help</a>
          <a href="#" className="font-semibold">Sign In</a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-[300px] w-2/3 sm:w-1/2 bg-[#fb9c7c] shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-4 text-gray-800 font-medium">
          <button onClick={toggleMenu} className="self-end">
            <X className="h-6 w-6" />
          </button>
          <a href="#" onClick={toggleMenu}>Home</a>
          <a href="#" onClick={toggleMenu}>About Us</a>
          <a href="#" onClick={toggleMenu}>Help</a>
          <a href="#" onClick={toggleMenu} className="font-semibold">Sign In</a>
        </div>
      </div>

     
    </nav>
     {/* Push content below the fixed navbar */}
      <div className="pt-16" />
    </>
    
  );
};

export default Navbar;
