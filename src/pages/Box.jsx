// src/pages/Box.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Box = () => {
  const [profileFor, setProfileFor] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const profilesWithGender = ['Myself', 'My Relative', 'My Friend'];
  const showGender = profilesWithGender.includes(profileFor);
  const isFormComplete = showGender ? profileFor && gender : !!profileFor;

  const profileOptions = [
    'Myself', 'My Son', 'My Daughter',
    'My Brother', 'My Sister', 'My Friend', 'My Relative'
  ];

  const handleContinue = () => {
    if (isFormComplete) {
      navigate('/boxsc', { state: { profileFor, gender } }); // navigate to Boxsc instead of Preview
    }
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
        <h2 className="text-base font-medium mb-2 text-center text-red-800">
          This Profile is for
        </h2>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {profileOptions.map(opt => (
            <button
              key={opt}
              onClick={() => {
                setProfileFor(opt);
                if (!profilesWithGender.includes(opt)) setGender('');
              }}
              className={`px-3 py-1 rounded-full border text-sm ${
                profileFor === opt
                  ? 'bg-blue-100 text-blue-600 border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {showGender && (
          <>
            <h2 className="text-base font-medium mb-2 text-center text-red-800">
              Gender
            </h2>
            <div className="flex gap-4 justify-center mb-6">
              {['Male', 'Female'].map(opt => (
                <button
                  key={opt}
                  onClick={() => setGender(opt)}
                  className={`px-4 py-1 rounded-full border text-sm ${
                    gender === opt
                      ? 'bg-blue-100 text-blue-600 border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-4 justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 py-2 rounded-full text-white bg-gray-600 hover:bg-gray-800"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!isFormComplete}
            className={`w-1/2 py-2 rounded-full text-white ${
              isFormComplete
                ? 'bg-red-700 hover:bg-red-900'
                : 'bg-red-400 cursor-not-allowed opacity-50'
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
