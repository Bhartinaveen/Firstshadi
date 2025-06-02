import React from 'react';

const Trst = () => {
  return (
    <div className="bg-[#fefefe] text-center px-4 py-10">
      {/* Logo Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/logo.png"  // <-- Replace with your image path
          alt="firstShaadi Logo"
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-[#ff5a60] mb-4">
        FirstShaadi.com - Trusted by over 35 Million Members
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 leading-7 mb-2">
        FirstShadi.com is India’s trusted destination for meaningful matrimonial connections, created with a heartfelt mission — to bring people together in the journey of lifelong companionship.
Launched with the vision to simplify the search for a life partner, FirstShadi.com offers a modern and secure platform that blends tradition with technology.
Since its inception, it has helped thousands find their perfect match by transforming how Indian brides and grooms connect, engage, and build lasting relationships.
        
      </p>

      {/* Country Links */}
      <div className="text-[#00bcd5] space-x-2 mt-4 mb-8">
        <a href="#" className="hover:underline">India</a>|
        <a href="#" className="hover:underline">USA</a>|
        <a href="#" className="hover:underline">Canada</a>|
        <a href="#" className="hover:underline">UK</a>|
        <a href="#" className="hover:underline">Singapore</a>|
        <a href="#" className="hover:underline">Australia</a>|
        <a href="#" className="hover:underline">UAE</a>|
        <a href="#" className="hover:underline">NRI Matrimonials ▸</a>
      </div>

      {/* Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-[#00bcd5] text-white px-6 py-2 rounded font-semibold hover:bg-[#00aabf] transition">
          Trusted by Millions
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex justify-center space-x-12 mt-6 text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">💍</span>
          <span>Best Matches</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">✅</span>
          <span>Verified Profiles</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔒</span>
          <span>100% Privacy</span>
        </div>
      </div>
    </div>
  );
};

export default Trst;
