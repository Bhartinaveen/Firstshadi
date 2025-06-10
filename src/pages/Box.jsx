import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation hook
import Footer from '../components/Footer';

const Box = () => {
  const [profileFor, setProfileFor] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const profilesWithGender = ['Myself', 'My Relative', 'My Friend'];
  const showGender = profilesWithGender.includes(profileFor);
  const isFormComplete = showGender ? gender !== '' : profileFor !== '';

  const profileOptions = [
    'Myself',
    'My Son',
    'My Daughter',
    'My Brother',
    'My Sister',
    'My Friend',
    'My Relative',
  ];

  const handleProfileClick = (option) => {
    setProfileFor(option);
    if (!profilesWithGender.includes(option)) {
      setGender('');
    }
  };

  const handleGenderClick = (option) => {
    setGender(option);
  };

  const handleContinue = () => {
    navigate('/boxsc'); // Navigate to Boxsc page
  };

  return (
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

        
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-sm">
          <img
          src="./image/s13.jpg" // Update the path as needed
          alt="Sign Up Banner"
          className="rounded-md w-full object-cover -translate-y-4"
        />
          {/* <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-2xl">👤</span>
            </div>
          </div> */}

          <h2 className="text-base font-medium mb-2 text-center sm:text-left">
            This Profile is for
          </h2>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
            {profileOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleProfileClick(option)}
                className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ${
                  profileFor === option
                    ? 'bg-blue-100 text-blue-600 border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showGender && (
            <>
              <h2 className="text-base font-medium mb-2 text-center sm:text-left">Gender</h2>
              <div className="flex gap-4 justify-center sm:justify-start mb-6">
                {['Male', 'Female'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleGenderClick(option)}
                    className={`px-4 py-1 rounded-full border text-sm transition-all duration-200 ${
                      gender === option
                        ? 'bg-blue-100 text-blue-600 border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {isFormComplete && (
            <button
              onClick={handleContinue}
              className="w-full py-2 rounded-full text-white text-sm transition-all duration-300 bg-blue-600 hover:bg-blue-700"
            >
              Continue
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Box;
