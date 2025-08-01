import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const Mymatch = () => {
  const [requested, setRequested] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [declined, setDeclined] = useState([]);
  const [selectedTab, setSelectedTab] = useState('request');
  const [viewingProfile, setViewingProfile] = useState(null);

  // Load users from localStorage buckets
  const readBuckets = () => {
    setRequested(JSON.parse(localStorage.getItem('requestedUsers')) || []);
    setAccepted(JSON.parse(localStorage.getItem('acceptedUsers')) || []);
    setDeclined(JSON.parse(localStorage.getItem('declinedUsers')) || []);
  };

  useEffect(() => {
    readBuckets();

    window.addEventListener('connections-updated', readBuckets);
    window.addEventListener('focus', readBuckets);
    return () => {
      window.removeEventListener('connections-updated', readBuckets);
      window.removeEventListener('focus', readBuckets);
    };
  }, []);

  // Save data to localStorage
  const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));

  // Remove duplicates by email
  const uniq = (arr, key = 'email') => {
    const map = new Map();
    arr.forEach(item => map.set(item[key], item));
    return [...map.values()];
  };

  // Move user to Accepted bucket
  const moveToAccepted = (user) => {
    const req = requested.filter(u => u.email !== user.email);
    const dec = declined.filter(u => u.email !== user.email);
    const acc = uniq([...accepted.filter(u => u.email !== user.email), user]);

    setRequested(req);
    save('requestedUsers', req);
    setDeclined(dec);
    save('declinedUsers', dec);
    setAccepted(acc);
    save('acceptedUsers', acc);

    window.dispatchEvent(new Event('connections-updated'));
  };

  // Move user to Declined bucket
  const moveToDeclined = (user) => {
    const req = requested.filter(u => u.email !== user.email);
    const acc = accepted.filter(u => u.email !== user.email);
    const dec = uniq([...declined.filter(u => u.email !== user.email), user]);

    setRequested(req);
    save('requestedUsers', req);
    setAccepted(acc);
    save('acceptedUsers', acc);
    setDeclined(dec);
    save('declinedUsers', dec);

    window.dispatchEvent(new Event('connections-updated'));
  };

  // Close profile modal
  const closeModal = () => setViewingProfile(null);

  // Render user cards with appropriate actions
  const renderUsers = (users, actions) => (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {users.length === 0 ? (
        <p className="text-center col-span-full text-gray-600">No profiles found.</p>
      ) : (
        users.map((user, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4 text-center">
            <img
              src={user.uploadedImages?.[0] || user.image || '/default-avatar.png'}
              alt={user.name || user.fullName}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h4 className="font-semibold mt-2">{user.name || user.fullName || 'N/A'}</h4>
            <p className="text-sm text-gray-500">{user.email || user.mobile || 'N/A'}</p>

            {/* Verified Profile badge */}
            {user.verified && (
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm mt-1 select-none">
                Verified Profile
              </span>
            )}

            {actions === 'request' && (
              <div className="flex justify-center gap-4 mt-3">
                <button
                  onClick={() => moveToAccepted(user)}
                  className="bg-green-500 px-3 py-1 rounded text-white text-sm"
                >
                  Accept
                </button>
                <button
                  onClick={() => moveToDeclined(user)}
                  className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                >
                  Decline
                </button>
              </div>
            )}

            {actions === 'accepted' && (
              <div className="flex justify-center gap-3 mt-3">
                <button
                  onClick={() => setViewingProfile(user)}
                  className="bg-blue-600 px-3 py-1 rounded text-white text-sm"
                >
                  View Profile
                </button>
                <button
                  onClick={() => moveToDeclined(user)}
                  className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                >
                  Decline
                </button>
              </div>
            )}

            {actions === 'declined' && (
              <div className="mt-3">
                <button
                  onClick={() => moveToAccepted(user)}
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

  // Profile modal to show detailed info
  const ProfileModal = ({ user }) => {
    if (!user) return null;

    const isImageFile = /\.(jpg|jpeg|png|gif)$/i.test(user.file);

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded p-6 max-w-xl w-full max-h-[90vh] overflow-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-lg"
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={user.uploadedImages?.[0] || user.image || '/default-avatar.png'}
            alt={user.name || user.fullName}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-center mb-4">
            {user.name || user.fullName || "Profile Details"}
          </h2>

          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> {user.email || "N/A"}</p>
            <p><strong>Mobile:</strong> {user.mobile || "N/A"}</p>
            {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}

            {user.file ? (
              <div className="mt-4">
                <strong>File:</strong>
                {isImageFile ? (
                  <img src={user.file} alt="User file" className="mt-2 max-h-60 object-contain mx-auto" />
                ) : (
                  <p className="mt-2 text-center">
                    <a
                      href={user.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      View File
                    </a>
                  </p>
                )}
              </div>
            ) : (
              <p className="mt-4 italic text-gray-500 text-center">No file associated with this profile.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-br from-yellow-50 to-pink-100 py-10 px-4">
        <h2 className="text-center text-3xl font-bold mb-6 text-purple-900">
          My Matches
        </h2>

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

        {/* Tab content */}
        {selectedTab === 'request' && (
          <>
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              Pending Requests
            </h3>
            {renderUsers(requested, 'request')}
          </>
        )}
        {selectedTab === 'accepted' && (
          <>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Accepted Profiles
            </h3>
            {renderUsers(accepted, 'accepted')}
          </>
        )}
        {selectedTab === 'declined' && (
          <>
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              Declined Profiles
            </h3>
            {renderUsers(declined, 'declined')}
          </>
        )}
      </div>

      <Footer />

      {/* Profile Modal */}
      {viewingProfile && <ProfileModal user={viewingProfile} />}
    </div>
  );
};

export default Mymatch;
