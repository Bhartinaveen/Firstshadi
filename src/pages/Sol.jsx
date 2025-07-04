import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const userData = [
  {
    name: 'Naveen',
    gender: 'Man',
    phone: '9276898567',
    email: 'bharti9@gmail.com',
    age: '27 years',
    family: '4 (mother, father, 1 brother, 1 sister)',
    religion: 'Hindu',
    motherTongue: 'Hindi',
    caste: 'Brahmin',
    job: 'Government (SSC)',
    hobbies: 'Cricket',
    images: ['/image/s24.jpg', '/image/s41.jpg'],
  },
  {
    name: 'Anjali',
    gender: 'Woman',
    phone: '7896541230',
    email: 'anjali@gmail.com',
    age: '24 years',
    family: '5 (mother, father, 2 sisters)',
    religion: 'Hindu',
    motherTongue: 'Maithili',
    caste: 'Kayastha',
    job: 'Teacher',
    hobbies: 'Reading',
    images: ['/image/s46.jpg', '/image/s47.jpg'],
  },
  {
    name: 'Rohit',
    gender: 'Man',
    phone: '9988776655',
    email: 'rohit@gmail.com',
    age: '29 years',
    family: '3 (mother, father)',
    religion: 'Hindu',
    motherTongue: 'Bhojpuri',
    caste: 'Rajput',
    job: 'Engineer',
    hobbies: 'Football',
    images: ['/image/s42.jpg', '/image/s28.jpg'],
  },
  {
    name: 'Pooja',
    gender: 'Woman',
    phone: '9080706050',
    email: 'pooja@gmail.com',
    age: '25 years',
    family: '4 (mother, father, 1 brother)',
    religion: 'Hindu',
    motherTongue: 'Hindi',
    caste: 'Yadav',
    job: 'Doctor',
    hobbies: 'Painting',
    images: ['/image/s44.jpg', '/image/s45.jpg'],
  },
  {
    name: 'Vikas',
    gender: 'Man',
    phone: '8123456789',
    email: 'vikas@gmail.com',
    age: '30 years',
    family: '6 (parents, 2 brothers, 1 sister)',
    religion: 'Hindu',
    motherTongue: 'Magahi',
    caste: 'Kurmi',
    job: 'Banker',
    hobbies: 'Travelling',
    images: ['/image/s39.jpg', '/image/s40.jpg'],
  },
  {
    name: 'Aditi',
    gender: 'Woman',
    phone: '9012345678',
    email: 'aditi@gmail.com',
    age: '26 years',
    family: '3 (mother, father)',
    religion: 'Hindu',
    motherTongue: 'Hindi',
    caste: 'Teli',
    job: 'Designer',
    hobbies: 'Dancing',
    images: ['/image/s35.jpg', '/image/s36.jpg'],
  },
];

const Sol = () => {
  const { state } = useLocation();
  const [requestedUsers, setRequestedUsers] = useState([]);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [selectedCaste, setSelectedCaste] = useState('');

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('requestedUsers')) || [];
    setRequestedUsers(savedRequests.map((user) => user.email));
  }, []);

  const handleRequest = (user) => {
    const savedRequestData = JSON.parse(localStorage.getItem('requestedUsers')) || [];
    const alreadyRequested = savedRequestData.some((u) => u.email === user.email);
    if (alreadyRequested) return;

    const updatedRequests = [...requestedUsers, user.email];
    const newRequestData = [...savedRequestData, user];

    localStorage.setItem('requestedUsers', JSON.stringify(newRequestData));
    setRequestedUsers(updatedRequests);
  };

  const openImageModal = (images) => {
    setModalImages(images);
    setShowImageModal(true);
  };

  const filteredUsers = userData.filter((user) => {
    const userAge = parseInt(user.age);
    const {
      minAge,
      maxAge,
      gender,
      religion,
      motherTongue,
    } = state || {};

    return (
      (!gender || user.gender === gender) &&
      (!religion || user.religion === religion) &&
      (!motherTongue || user.motherTongue === motherTongue) &&
      (!selectedCaste || user.caste === selectedCaste) &&
      userAge >= minAge &&
      userAge <= maxAge
    );
  });

  const uniqueCastes = [...new Set(userData.map((u) => u.caste))];

  return (
    <div>
      <div className="min-h-screen bg-[#f0ffe0] px-4 py-8 relative">
        <div className="flex flex-col items-center justify-center mb-4 relative">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-black mb-2">
            Find the Soulmate
          </h1>

          <p className="text-center text-gray-700 max-w-2xl mb-4">
            Welcome to our matchmaking platform. Here, we help you find your perfect life partner 
            based on your preferences including age, religion, mother tongue, and now caste. Explore 
            the profiles below and send a request to those you feel a connection with.
          </p>

          <div className="mb-6">
            <label className="mr-2 font-semibold text-black">Filter by Caste:</label>
            <select
              value={selectedCaste}
              onChange={(e) => setSelectedCaste(e.target.value)}
              className="border border-gray-400 rounded px-3 py-1"
            >
              <option value="">All Castes</option>
              {uniqueCastes.map((caste, i) => (
                <option key={i} value={caste}>{caste}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredUsers.map((user, index) => {
            const isRequested = requestedUsers.includes(user.email);
            const isHovered = hoveredUser === user.email;

            return (
              <div
                key={index}
                className="bg-[#f5c8b0] w-full h-[320px] max-w-sm mx-auto p-4 rounded shadow-md flex flex-col justify-between border-2 border-red-500"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <img
                      src={user.images[0]}
                      alt="User"
                      onClick={() => openImageModal(user.images)}
                      className="w-16 h-16 rounded-full object-cover cursor-pointer border-2 border-gray-600"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black">Name: {user.name}</p>
                      <p className="text-sm text-black">📞 {user.phone}</p>
                      <p className="text-sm text-black">📧 {user.email}</p>

                      <div className="flex mt-2 space-x-2">
                        <button
                          disabled={isRequested}
                          onClick={() => handleRequest(user)}
                          onMouseEnter={() => setHoveredUser(user.email)}
                          onMouseLeave={() => setHoveredUser(null)}
                          className={`px-2 py-1 text-sm rounded text-white transition duration-200 ${
                            isRequested
                              ? 'bg-gray-500 cursor-not-allowed'
                              : isHovered
                              ? 'bg-green-600'
                              : 'bg-sky-500 hover:bg-green-600'
                          }`}
                        >
                          {isRequested
                            ? 'Requested'
                            : isHovered
                            ? 'Connect Request'
                            : 'Connect'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-200 p-2 rounded text-sm text-left space-y-1">
                    <p><strong>Age:</strong> <span className="text-orange-600">{user.age}</span></p>
                    <p><strong>Family:</strong> {user.family}</p>
                    <p><strong>Religion:</strong> {user.religion}</p>
                    <p><strong>Caste:</strong> {user.caste}</p>
                    <p><strong>Mother Tongue:</strong> {user.motherTongue}</p>
                    <p><strong>Job:</strong> {user.job}</p>
                    <p><strong>Hobbies:</strong> {user.hobbies}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-black"
                onClick={() => setShowImageModal(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-semibold mb-4 text-center">User Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {modalImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`User ${i}`}
                    className="w-full h-48 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Sol;
