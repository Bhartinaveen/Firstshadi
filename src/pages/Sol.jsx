import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const userData = [
  {
    name: 'Naveen',
    phone: '9276898567',
    email: 'bharti9@gmail.com',
    age: '27 years',
    family: '4 (mother, father, 1 brother, 1 sister)',
    religion: 'Hindu',
    caste: 'Brahmin',
    job: 'Government (SSC)',
    hobbies: 'Cricket',
    images: ['/image/s24.jpg', '/image/s41.jpg'],
  },
  {
    name: 'Anjali',
    phone: '7896541230',
    email: 'anjali@gmail.com',
    age: '24 years',
    family: '5 (mother, father, 2 sisters)',
    religion: 'Hindu',
    caste: 'Kayastha',
    job: 'Teacher',
    hobbies: 'Reading',
    images: ['/image/s46.jpg', '/image/s47.jpg'],
  },
  {
    name: 'Rohit',
    phone: '9988776655',
    email: 'rohit@gmail.com',
    age: '29 years',
    family: '3 (mother, father)',
    religion: 'Hindu',
    caste: 'Rajput',
    job: 'Engineer',
    hobbies: 'Football',
    images: ['/image/s42.jpg', '/image/s28.jpg'],
  },
  {
    name: 'Pooja',
    phone: '9080706050',
    email: 'pooja@gmail.com',
    age: '25 years',
    family: '4 (mother, father, 1 brother)',
    religion: 'Hindu',
    caste: 'Yadav',
    job: 'Doctor',
    hobbies: 'Painting',
    images: ['/image/s44.jpg', '/image/s45.jpg'],
  },
  {
    name: 'Vikas',
    phone: '8123456789',
    email: 'vikas@gmail.com',
    age: '30 years',
    family: '6 (parents, 2 brothers, 1 sister)',
    religion: 'Hindu',
    caste: 'Kurmi',
    job: 'Banker',
    hobbies: 'Travelling',
    images: ['/image/s39.jpg', '/image/s40.jpg'],
  },
  {
    name: 'Aditi',
    phone: '9012345678',
    email: 'aditi@gmail.com',
    age: '26 years',
    family: '3 (mother, father)',
    religion: 'Hindu',
    caste: 'Teli',
    job: 'Designer',
    hobbies: 'Dancing',
    images: ['/image/s35.jpg', '/image/s36.jpg'],
  },
];

const Sol = () => {
  const [requestedUsers, setRequestedUsers] = useState([]);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('requestedUsers')) || [];
    setRequestedUsers(savedRequests.map(user => user.email));
  }, []);

  const handleRequest = (user) => {
    const savedRequestData = JSON.parse(localStorage.getItem('requestedUsers')) || [];
    const alreadyRequested = savedRequestData.some(u => u.email === user.email);
    if (alreadyRequested) return;

    const updatedRequests = [...requestedUsers, user.email];
    const newRequestData = [...savedRequestData, user];

    localStorage.setItem('requestedUsers', JSON.stringify(newRequestData));
    setRequestedUsers(updatedRequests);
  };

  const handleDecline = (user) => {
    const updatedList = requestedUsers.filter((email) => email !== user.email);
    const updatedData = (JSON.parse(localStorage.getItem('requestedUsers')) || []).filter(u => u.email !== user.email);

    localStorage.setItem('requestedUsers', JSON.stringify(updatedData));
    setRequestedUsers(updatedList);
  };

  const openImageModal = (images) => {
    setModalImages(images);
    setShowImageModal(true);
  };

  return (
    <div>
      <div className="min-h-screen bg-[#f0ffe0] px-4 py-8 relative">
        <div className="flex flex-col items-center justify-center mb-6 relative">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-black mb-4">
            Find the Soulmate
          </h1>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {userData.map((user, index) => {
            const isRequested = requestedUsers.includes(user.email);
            const isHovered = hoveredUser === user.email;

            return (
              <div
                key={index}
                className="bg-[#f5c8b0] w-full h-[320px] max-w-sm mx-auto p-4 rounded shadow-md flex flex-col justify-between"
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

                        <button
                          className="px-2 py-1 text-sm rounded bg-red-500 text-white"
                          onClick={() => handleDecline(user)}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-200 p-2 rounded text-sm text-left space-y-1">
                    <p><strong>Age:</strong> <span className="text-orange-600">{user.age}</span></p>
                    <p><strong>Family member:</strong> {user.family}</p>
                    <p><strong>Religion:</strong> {user.religion}</p>
                    <p><strong>Caste:</strong> {user.caste}</p>
                    <p><strong>Job:</strong> {user.job}</p>
                    <p><strong>Hobbies:</strong> {user.hobbies}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
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

      <Footer />
    </div>
  );
};

export default Sol;
