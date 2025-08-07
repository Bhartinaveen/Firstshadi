import React from 'react';

// For the arrow icon, you would typically install a library like react-icons:
// npm install react-icons
import { FaArrowRight } from "react-icons/fa";

const Pstst = () => {
  return (
    // Main container with a red gradient background
    <div className="bg-gradient-to-r from-red-800 to-red-600 flex justify-between items-center rounded-xl shadow-2xl px-10 py-6 my-8">
      
      {/* Text Section */}
      <div>
        <h2 className="text-white text-3xl font-bold tracking-tight">
          Your story is waiting to happen!
        </h2>
        {/* Adjusted secondary text color for better contrast on red */}
        <p className="text-red-200 mt-1">
          Join now and start your next great adventure.
        </p>
      </div>

      {/* The button's cyan/blue gradient provides a great contrast to the red */}
      <button className="group relative inline-flex items-center justify-center bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-red-300">
        <span className="relative z-10 flex items-center">
          Get Started
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>

    </div>
  );
};

export default Pstst;