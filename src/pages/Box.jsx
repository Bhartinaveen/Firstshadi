import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Box = () => {
  const [profileFor, setProfileFor] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const profilesWithGender = ['Myself', 'My Relative', 'My Friend'];
  const showGender = profilesWithGender.includes(profileFor);
  const isFormComplete = showGender ? gender !== '' && profileFor !== '' : profileFor !== '';

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
    if (isFormComplete) {
      navigate('/boxsc');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-6">
        <img
          src="./image/s18.jpg"
          alt="Banner"
          className="w-85 h-78 object-cover rounded-md mb-4 shadow-lg"
        />

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-sm">
          <h2 className="text-base font-medium mb-2 text-center sm:text-left text-red-800">
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
              <h2 className="text-base font-medium mb-2 text-center sm:text-left text-red-800">
                Gender
              </h2>
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

          {/* Button Row */}
          <div className="flex gap-4 justify-between">
            <button
              onClick={handleBack}
              className="w-1/2 py-2 rounded-full text-white text-sm bg-gray-600 hover:bg-gray-800 transition-all duration-300"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!isFormComplete}
              className={`w-1/2 py-2 rounded-full text-white text-sm transition-all duration-300 ${
                isFormComplete
                  ? 'bg-red-700 hover:bg-red-900'
                  : 'bg-red-600 cursor-not-allowed opacity-50'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Box;
