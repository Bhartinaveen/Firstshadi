import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spcl = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      icon: '📝',
      title: 'Sign Up',
      description: 'Register Your Profile',
      route: '/box',
    },
    {
      id: 2,
      icon: '💑',
      title: 'Connect',
      description: 'Select & Connect with Matches you like',
      route: '/filt',
    },
    {
      id: 3,
      icon: '💬',
      title: 'Interact',
      description: 'Become a Premium Member & Start a Conversation with verified profile',
      route: '/box',
    },
  ];

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-gray-100 py-12 text-center">
      <h2 className="text-3xl font-semibold text-red-700 mb-12">
        Find Your Soulmate
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8 gap-10 items-center px-4">
        {steps.map(({ id, icon, title, description, route }) => (
          <div
            key={id}
            onClick={() => handleClick(route)}
            className="flex flex-col items-center w-60 cursor-pointer
              transform transition-transform duration-300 ease-in-out
              hover:scale-105"
          >
            <div
              className="relative rounded-full w-36 h-36 flex items-center justify-center text-white text-5xl
                bg-orange-300 transition-colors duration-300 ease-in-out
                hover:bg-orange-400"
            >
              <span>{icon}</span>
              <span
                className="absolute -bottom-3 right-1 bg-white text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg border border-gray-300
                  transition-colors duration-300 ease-in-out
                  hover:border-red-700"
              >
                {id}
              </span>
            </div>
            <h3 className="mt-4 text-red-600 text-xl font-semibold hover:text-red-800">
              {title}
            </h3>
            <p className="mt-1 text-black text-sm px-4 hover:text-yellow-800">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spcl;
