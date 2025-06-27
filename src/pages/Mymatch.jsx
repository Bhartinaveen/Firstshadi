import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const Mymatch = () => {
  const [requested, setRequested] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [declined, setDeclined] = useState([]);
  const [selectedTab, setSelectedTab] = useState('request');

  useEffect(() => {
    const storedReq = JSON.parse(localStorage.getItem('requestedUsers')) || [];
    const storedAcc = JSON.parse(localStorage.getItem('acceptedUsers')) || [];
    const storedDec = JSON.parse(localStorage.getItem('declinedUsers')) || [];
    setRequested(storedReq);
    setAccepted(storedAcc);
    setDeclined(storedDec);
  }, []);

  const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeDuplicates = (arr, key = 'email') => {
    const map = new Map();
    arr.forEach((item) => map.set(item[key], item));
    return [...map.values()];
  };

  const handleAccept = (user, from = 'request') => {
    const updatedRequested = requested.filter((u) => u.email !== user.email);
    const updatedDeclined = declined.filter((u) => u.email !== user.email);
    const updatedAccepted = [...accepted.filter((u) => u.email !== user.email), user];

    setRequested(updatedRequested);
    setDeclined(updatedDeclined);
    setAccepted(removeDuplicates(updatedAccepted));

    updateLocalStorage('requestedUsers', updatedRequested);
    updateLocalStorage('declinedUsers', updatedDeclined);
    updateLocalStorage('acceptedUsers', updatedAccepted);
  };

  const handleDecline = (user, from = 'request') => {
    const updatedRequested = requested.filter((u) => u.email !== user.email);
    const updatedAccepted = accepted.filter((u) => u.email !== user.email);
    const updatedDeclined = [...declined.filter((u) => u.email !== user.email), user];

    setRequested(updatedRequested);
    setAccepted(updatedAccepted);
    setDeclined(removeDuplicates(updatedDeclined));

    updateLocalStorage('requestedUsers', updatedRequested);
    updateLocalStorage('acceptedUsers', updatedAccepted);
    updateLocalStorage('declinedUsers', updatedDeclined);
  };

  const getPendingUsers = () => requested;

  const renderUsers = (users, showRequestActions = false, tabName = '') => (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {users.length === 0 ? (
        <p className="text-center col-span-full text-gray-600">No profiles found.</p>
      ) : (
        users.map((user, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4 text-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h4 className="font-semibold mt-2">{user.name}</h4>
            <p className="text-sm text-gray-500">{user.email}</p>

            {/* Buttons for Requests tab */}
            {showRequestActions && (
              <div className="flex justify-center gap-4 mt-3">
                <button
                  onClick={() => handleAccept(user, 'request')}
                  className="bg-green-500 px-3 py-1 rounded text-white text-sm"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecline(user, 'request')}
                  className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                >
                  Decline
                </button>
              </div>
            )}

            {/* Decline button for Accepted tab */}
            {tabName === 'accepted' && (
              <div className="mt-3">
                <button
                  onClick={() => handleDecline(user, 'accepted')}
                  className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                >
                  Decline
                </button>
              </div>
            )}

            {/* Accept button for Declined tab */}
            {tabName === 'declined' && (
              <div className="mt-3">
                <button
                  onClick={() => handleAccept(user, 'declined')}
                  className="bg-green-500 px-3 py-1 rounded text-white text-sm"
                >
                  Accept
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 text-purple-900">My Matches</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSelectedTab('request')}
          className={`px-4 py-2 rounded font-semibold ${
            selectedTab === 'request'
              ? 'bg-yellow-400 text-white'
              : 'bg-yellow-200 hover:bg-yellow-300'
          }`}
        >
          Requests
        </button>
        <button
          onClick={() => setSelectedTab('accepted')}
          className={`px-4 py-2 rounded font-semibold ${
            selectedTab === 'accepted'
              ? 'bg-green-500 text-white'
              : 'bg-green-200 hover:bg-green-300'
          }`}
        >
          Accepted
        </button>
        <button
          onClick={() => setSelectedTab('declined')}
          className={`px-4 py-2 rounded font-semibold ${
            selectedTab === 'declined'
              ? 'bg-red-500 text-white'
              : 'bg-red-200 hover:bg-red-300'
          }`}
        >
          Declined
        </button>
      </div>

      {/* Tab Content */}
      {selectedTab === 'request' && (
        <>
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">Pending Requests</h3>
          {renderUsers(getPendingUsers(), true)}
        </>
      )}
      {selectedTab === 'accepted' && (
        <>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Accepted Profiles</h3>
          {renderUsers(accepted, false, 'accepted')}
        </>
      )}
      {selectedTab === 'declined' && (
        <>
          <h3 className="text-xl font-semibold text-red-700 mb-2">Declined Profiles</h3>
          {renderUsers(declined, false, 'declined')}
        </>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Mymatch;
