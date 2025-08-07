import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoulmateSteps = () => {
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
      route: '/ncon',
    },
    // {
    //   id: 3,
    //   icon: '💬',
    //   title: 'Interact',
    //   description: 'Become a Premium Member & Start a Conversation',
    //   route: '/int',
    // },
  ];

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    // Main container with a light gradient background
    <div className="bg-gradient-to-br from-red-50 to-orange-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 mb-4">
          Find Your Soulmate
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Your journey to finding true love starts here. Follow these simple steps to begin.
        </p>

        {/* Flex container for the step cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {steps.map(({ id, icon, title, description, route }) => (
            <div
              key={id}
              onClick={() => handleClick(route)}
              // Card with white background, no border, and enhanced shadow
              className="group w-full max-w-sm cursor-pointer rounded-2xl bg-white p-8 text-center
                         shadow-xl transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br
                           from-orange-400 to-red-500 text-5xl shadow-md transition-transform duration-300
                           group-hover:rotate-12"
              >
                {icon}
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {description}
                </p>
              </div>
              {/* The numbered span has been removed from here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoulmateSteps;