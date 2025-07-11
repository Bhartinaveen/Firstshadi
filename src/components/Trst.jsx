import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate hook

const Trst = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleMembershipClick = () => {
    navigate('/memb'); // Navigate to Memb.jsx (make sure route is defined)
  };

  return (
    <div className="bg-[#fefefe] text-center px-4 py-10">
      {/* Logo Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/image/l2.png"
          alt="firstmarriage Logo"
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-[#ff5a60] mb-4">
        <span className='text-black '>First</span> Marriage <span className='text-blue-900'>-Trusted by over 35 Million Members</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 leading-7 mb-2">
        First Marriage is India’s trusted destination for meaningful matrimonial connections, created with a heartfelt mission — to bring people together in the journey of lifelong companionship.
        Launched with the vision to simplify the search for a life partner, First Marriage offers a modern and secure platform that blends tradition with technology.
        Since its inception, it has helped thousands find their perfect match by transforming how Indian brides and grooms connect, engage, and build lasting relationships.
      </p>

      {/* Country Links */}
      <div className="text-blue-900 space-x-2 mt-4 mb-8">
        <a href="#" className="hover:underline">India</a>|
        <a href="#" className="hover:underline">USA</a>|
        <a href="#" className="hover:underline">Canada</a>|
        <a href="#" className="hover:underline">UK</a>|
        <a href="#" className="hover:underline">Singapore</a>|
        <a href="#" className="hover:underline">UAE</a>|
        <a href="#" className="hover:underline">NRI Matrimonials ▸</a>
      </div>

      {/* Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleMembershipClick}
          className="bg-blue-900 text-white px-6 py-2 rounded font-semibold hover:bg-[#1e3437] transition"
        >
          Get Membership plans
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
