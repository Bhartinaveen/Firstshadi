import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed h-18 top-0 left-0 w-full bg-[#f5fdd5] px-6 py-2 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 -translate-y-3 -translate-x-4">
            <Link to="/">
            <img
              src="/image/l1.png"
              alt="Logo"
              className="h-20 w-20"
            />
            </Link>
            <span className="  -translate-x-4 font-bold text-[#0a0a0a]">First</span>
            <span className=" -translate-x-4 font-bold text-red-700">Marriage.Com</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium -translate-y-3">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/matches">My Matches</Link>
            <Link to="/help">Help</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/signin" className="font-semibold">Sign In</Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden -translate-y-3">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-[300px] w-2/4 sm:w-1/2 bg-[#fb9c7c] shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col items-start p-6 space-y-4 text-gray-800 font-medium">
            <button onClick={toggleMenu} className="self-end">
              <X className="h-6 w-6" />
            </button>
            <Link to="/" onClick={toggleMenu}>🏠 Home</Link>
            <Link to="/about" onClick={toggleMenu}>🧑‍💼 About Us</Link>
            <Link to="/matches" onClick={toggleMenu}>❤️ My Matches</Link>
            <Link to="/help" onClick={toggleMenu}>❓ Help</Link>
            <Link to="/contact" onClick={toggleMenu}>📞 Contact Us</Link>
            <Link to="/signin" onClick={toggleMenu} className="font-semibold">🔐 Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Push content below the fixed navbar */}
      <div className="pt-18" />
    </>
  );
};

export default Navbar;
