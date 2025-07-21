import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

/* ---------------------------------------------------------------
   Requested / Accepted / Declined  – auto-refresh on event
-----------------------------------------------------------------*/
const Mymatch = () => {
  const [requested, setRequested] = useState([]);
  const [accepted,  setAccepted]  = useState([]);
  const [declined,  setDeclined]  = useState([]);
  const [selectedTab, setSelectedTab] = useState('request');

  /* central reader ------------------------------------------------*/
  const readBuckets = () => {
    setRequested(JSON.parse(localStorage.getItem('requestedUsers')) || []);
    setAccepted (JSON.parse(localStorage.getItem('acceptedUsers'))  || []);
    setDeclined (JSON.parse(localStorage.getItem('declinedUsers'))  || []);
  };

  /* mount + event listeners --------------------------------------*/
  useEffect(() => {
    readBuckets();                                // initial load

    window.addEventListener('connections-updated', readBuckets);
    window.addEventListener('focus', readBuckets); // refresh when tab regains focus
    return () => {
      window.removeEventListener('connections-updated', readBuckets);
      window.removeEventListener('focus', readBuckets);
    };
  }, []);

  /* helpers ------------------------------------------------------*/
  const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
  const uniq = (arr, key = 'email') => {
    const m = new Map();
    arr.forEach(i => m.set(i[key], i));
    return [...m.values()];
  };

  /* moves --------------------------------------------------------*/
  const moveToAccepted = user => {
    const req = requested.filter(u => u.email !== user.email);
    const dec = declined .filter(u => u.email !== user.email);
    const acc = uniq([...accepted.filter(u => u.email !== user.email), user]);

    setRequested(req); save('requestedUsers', req);
    setDeclined(dec);  save('declinedUsers',  dec);
    setAccepted(acc);  save('acceptedUsers',  acc);
  };

  const moveToDeclined = user => {
    const req = requested.filter(u => u.email !== user.email);
    const acc = accepted .filter(u => u.email !== user.email);
    const dec = uniq([...declined.filter(u => u.email !== user.email), user]);

    setRequested(req); save('requestedUsers', req);
    setAccepted(acc);  save('acceptedUsers',  acc);
    setDeclined(dec);  save('declinedUsers',  dec);
  };

  /* renderer -----------------------------------------------------*/
  const renderUsers = (users, actions) => (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {users.length === 0 ? (
        <p className="text-center col-span-full text-gray-600">No profiles found.</p>
      ) : (
        users.map((u, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4 text-center">
            <img
              src={u.image}
              alt={u.name}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h4 className="font-semibold mt-2">{u.name}</h4>
            <p className="text-sm text-gray-500">{u.email}</p>

            {actions === 'request' && (
              <div className="flex justify-center gap-4 mt-3">
                <button
                  onClick={() => moveToAccepted(u)}
                  className="bg-green-500 px-3 py-1 rounded text-white text-sm"
                >
                  Accept
                </button>
                <button
                  onClick={() => moveToDeclined(u)}
                  className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                >
                  Decline
                </button>
              </div>
            )}

            {actions === 'accepted' && (
              <div className="mt-3">
                <button
                  onClick={() => moveToDeclined(u)}
                  className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                >
                  Decline
                </button>
              </div>
            )}

            {actions === 'declined' && (
              <div className="mt-3">
                <button
                  onClick={() => moveToAccepted(u)}
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

  /* --------------------------- UI ------------------------------*/
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-br from-yellow-50 to-pink-100 py-10 px-4">
        <h2 className="text-center text-3xl font-bold mb-6 text-purple-900">
          My Matches
        </h2>

        {/* tabs */}
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

        {/* tab content */}
        {selectedTab === 'request'  && (
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
    </div>
  );
};

export default Mymatch;
