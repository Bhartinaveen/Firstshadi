import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-[#E83F25] px-4 py-4 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/delivery.png"
              alt="Logo"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold text-[#5b1511]">
              First shaadi.com
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">HelpUs</li>
            <li className="hover:underline cursor-pointer">Sign In</li>
          </ul>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`text-2xl p-1 rounded transition duration-300 ${
                isOpen ? 'bg-gray-300' : 'bg-transparent'
              }`}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-[30%] w-64 bg-[#e85e59] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon Inside Menu */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            <HiX />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-6 space-y-4 text-gray-800 font-medium text-sm -translate-y-4">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">About Us</span>
          <span className="hover:underline cursor-pointer">HelpUs</span>
          <span className="hover:underline cursor-pointer">Sign In</span>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Spacer to prevent content being hidden behind navbar */}
      <div className="pt-20" />
    </>
  );
};

export default Navbar;
