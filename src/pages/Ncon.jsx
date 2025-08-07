import React, { useEffect, useState } from 'react';

const Ncon = () => {
  const [connections, setConnections] = useState([]);
  const [requestStatus, setRequestStatus] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('connections');
    if (stored) {
      try {
        setConnections(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing connections from localStorage', e);
      }
    }

    const requested = JSON.parse(localStorage.getItem('requestedUsers')) || [];
    const statusMap = {};
    requested.forEach((profile) => {
      if (profile.email) {
        statusMap[profile.email] = true;
      }
    });
    setRequestStatus(statusMap);
  }, []);

  const sendConnectionRequest = (profile) => {
    const requestedUsers = JSON.parse(localStorage.getItem('requestedUsers')) || [];

    const alreadyRequested = requestedUsers.find((u) => u.email === profile.email);
    if (alreadyRequested) return;

    const updated = [...requestedUsers, profile];
    localStorage.setItem('requestedUsers', JSON.stringify(updated));

    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const newNotif = {
      message: `Connection request sent to ${profile.name?.first || ''} ${profile.name?.last || ''}`,
      email: profile.email,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('notifications', JSON.stringify([newNotif, ...notifications]));

    setRequestStatus((prev) => ({ ...prev, [profile.email]: true }));
    window.dispatchEvent(new Event('connections-updated'));
  };

  if (!connections.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans p-8">
        <h2 className="text-2xl font-semibold text-slate-700 mb-2">Connections</h2>
        <p className="text-slate-500">No saved profiles.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-50 font-sans p-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">My Connections</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {connections.map((profile, idx) => {
          const name = `${profile.name?.first || ''} ${profile.name?.last || ''}`.trim() || 'Profile';
          const addressParts = [
            profile.address?.street,
            profile.address?.city,
            profile.address?.zip,
          ].filter(Boolean);
          const displayAddress = addressParts.length > 0 ? addressParts.join(', ') : '—';

          const isRequested = requestStatus[profile.email];

          return (
            <div
              key={profile.email || idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-slate-300"
                src={
                  profile.uploadedImages?.[0] && typeof profile.uploadedImages[0] === 'string'
                    ? profile.uploadedImages[0]
                    : 'https://placehold.co/200x200/e2e8f0/475569?text=👤'
                }
                alt={name}
              />
              <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
              <div className="text-slate-500 mt-1 mb-4">{profile.email}</div>
              <ul className="text-left text-slate-700 text-sm w-full mt-2 space-y-1">
                <li>
                  <b>Phone:</b> {profile.phone || <span className="text-slate-400">—</span>}
                </li>
                <li>
                  <b>Date of Birth:</b> {profile.dob || <span className="text-slate-400">—</span>}
                </li>
                <li>
                  <b>Address:</b> {displayAddress}
                </li>
                <li>
                  <b>Religious:</b> {profile.religious || <span className="text-slate-400">—</span>}
                </li>
              </ul>

              <button
                onClick={() => sendConnectionRequest(profile)}
                disabled={isRequested}
                className={`mt-4 px-4 py-2 rounded-full text-white font-semibold ${
                  isRequested ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isRequested ? 'Requested' : 'Connect'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ncon;
