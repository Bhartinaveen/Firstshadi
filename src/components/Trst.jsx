import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const Trst = () => {
  const navigate = useNavigate();

  const handleMembershipClick = () => {
    navigate('/memb'); // Navigates to the membership page route
  };

  // Feature items for easy mapping
  const features = [
    {
      // MODIFIED: Reduced icon size
      icon: <HeartIcon className="w-8 h-8 mb-2 text-rose-500" />,
      title: 'Best Matches',
      description: 'AI-powered matchmaking to find your ideal partner.',
    },
    {
      // MODIFIED: Reduced icon size
      icon: <ShieldCheckIcon className="w-8 h-8 mb-2 text-sky-500" />,
      title: 'Verified Profiles',
      description: 'Manually verified profiles for your safety and trust.',
    },
    {
      // MODIFIED: Reduced icon size
      icon: <UserGroupIcon className="w-8 h-8 mb-2 text-indigo-500" />,
      title: '35M+ Members',
      description: 'Join a vast community of members seeking true love.',
    },
  ];

  return (
    // Main container with a subtle gradient background
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-sky-100 flex items-center justify-center p-4">
      
      {/* MODIFIED: Increased max-width to 7xl and reduced padding further */}
      <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-4 md:p-6 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img
            src="/image/l2.png" // Ensure this path is correct in your project
            alt="FirstMarriage Logo"
            // MODIFIED: Reduced logo size
            className="w-20 h-20 object-contain drop-shadow-md"
          />
        </div>

        {/* Main Title with Gradient Text */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent mb-1">
          First Marriage
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 font-medium mb-3"> {/* Reduced margin-bottom */}
          India's Most Trusted Matrimony Service
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-4"> {/* Reduced margin-bottom */}
          Created with a heartfelt mission to unite individuals in the sacred journey of lifelong companionship. We blend tradition with modern technology on a secure, user-friendly platform, helping thousands find their perfect match.
        </p>

        {/* Enhanced Call-to-Action Button */}
        <div className="mb-6"> {/* Reduced margin-bottom */}
          <button
            onClick={handleMembershipClick}
            className="text-white font-bold py-3 px-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Explore Membership Plans
          </button>
        </div>

        {/* Features Section with Professional Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-200 pt-4"> {/* Reduced gap and padding-top */}
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Country Links */}
        <div className="mt-6 text-sm text-gray-500"> {/* Reduced margin-top */}
          <p className="mb-2 font-semibold">Find Matches from:</p>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:text-rose-500 transition">India</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-500 transition">USA</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-500 transition">UK</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-500 transition">Canada</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-500 transition">UAE</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-500 transition font-bold">More ▸</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trst;