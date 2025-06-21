import React, { useState, useRef, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline'; // npm install @heroicons/react
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
    image: '/image/s24.jpg',
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
    image: '/image/s25.jpg',
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
    image: '/image/s28.jpg',
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
    image: '/image/s26.jpg',
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
    image: '/image/s31.jpg',
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
    image: '/image/s29.jpg',
  },
];

const Sol = () => {
  const [notifications, setNotifications] = useState([]);
  const [requestedUsers, setRequestedUsers] = useState([]);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotificationPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRequest = (user) => {
    if (requestedUsers.includes(user.email)) return;

    setNotifications((prev) => [...prev, `Request sent to ${user.name}`]);
    setRequestedUsers((prev) => [...prev, user.email]);
  };

  const handleDecline = (user) => {
    setNotifications((prev) =>
      prev.filter((note) => !note.includes(user.name))
    );
    setRequestedUsers((prev) =>
      prev.filter((email) => email !== user.email)
    );
  };

  return (
    <div>
    <div className="min-h-screen bg-[#f0ffe0] px-4 py-8 relative">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-6 relative">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-black mb-4">
          Find the Soulmate
        </h1>

        {/* Notification Bell */}
        <div className="absolute right-4 top-0" ref={notificationRef}>
          <button
            className="relative p-2 bg-purple-100 rounded-full shadow hover:bg-purple-200"
            onClick={() => setShowNotificationPanel((prev) => !prev)}
          >
            <BellIcon className="h-6 w-6 text-purple-700" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotificationPanel && (
            <div className="absolute right-0 mt-2 w-64 bg-yellow-100 border border-yellow-300 rounded shadow-lg z-10">
              <div className="p-3">
                <h2 className="font-semibold text-sm border-b pb-2 mb-2 text-yellow-900">
                  Notifications
                </h2>
                {notifications.length === 0 ? (
                  <p className="text-xs text-gray-600">No notifications</p>
                ) : (
                  <ul className="text-sm space-y-1 text-yellow-800">
                    {notifications.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {userData.map((user, index) => (
          <div
            key={index}
            className="bg-[#f5c8b0] w-full h-[320px] max-w-sm mx-auto p-4 rounded shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src={user.image}
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-black">Name: {user.name}</p>
                  <p className="text-sm text-black">📞 {user.phone}</p>
                  <p className="text-sm text-black">📧 {user.email}</p>
                  <div className="flex mt-2 space-x-2">
                    <button
                      className={`px-2 py-1 text-sm rounded ${
                        requestedUsers.includes(user.email)
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-green-500'
                      } text-white`}
                      disabled={requestedUsers.includes(user.email)}
                      onClick={() => handleRequest(user)}
                    >
                      {requestedUsers.includes(user.email) ? 'Requested' : 'Request'}
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
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Sol;
