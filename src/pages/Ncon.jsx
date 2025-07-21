import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

/* ---------------------------------------------------------------
   Saved Connections  →  one-click Connect   (no pop-up)
-----------------------------------------------------------------*/
const Ncon = () => {
  /* ---------------- state ---------------- */
  const [connections, setConnections] = useState([]);
  const [searchText,       setSearchText]       = useState('');
  const [selectedCaste,    setSelectedCaste]    = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');

  /* ① load saved connections once --------------------------------*/
  useEffect(() => {
    setConnections(
      JSON.parse(localStorage.getItem('savedConnections') || '[]')
    );
  }, []);

  /* helpers ------------------------------------------------------*/
  const unique = (arr, key = 'email') => {
    const m = new Map();
    arr.forEach(i => m.set(i[key], i));
    return [...m.values()];
  };

  /* ② filter list ------------------------------------------------*/
  const filtered = connections.filter(p => {
    const textOk =
      !searchText ||
      (p.name || p.fullName || '')
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());

    const casteOk    = selectedCaste    ? p.caste    === selectedCaste    : true;
    const religionOk = selectedReligion ? p.religion === selectedReligion : true;

    return textOk && casteOk && religionOk;
  });

  /* ③ CONNECT (silent + event dispatch) --------------------------*/
  const handleRequest = profile => {
    const user = {
      name:  profile.fullName || profile.name || '',
      email: profile.email    || '',
      image: profile.uploadedImages?.[0] || '/default-avatar.png',
      caste: profile.caste,
      religion: profile.religion,
    };

    let requested = JSON.parse(localStorage.getItem('requestedUsers') || '[]');
    let accepted  = JSON.parse(localStorage.getItem('acceptedUsers')  || '[]');
    let declined  = JSON.parse(localStorage.getItem('declinedUsers')  || '[]');

    /* ensure the user lives in only ONE bucket ------------------*/
    requested = requested.filter(u => u.email !== user.email);
    accepted  = accepted .filter(u => u.email !== user.email);
    declined  = declined .filter(u => u.email !== user.email);

    requested.push(user);
    requested = unique(requested);

    localStorage.setItem('requestedUsers', JSON.stringify(requested));
    localStorage.setItem('acceptedUsers',  JSON.stringify(accepted));
    localStorage.setItem('declinedUsers',  JSON.stringify(declined));

    /* 🔔 notify every open tab / component */
    window.dispatchEvent(new Event('connections-updated'));

    /* (optional) hide the card immediately in this list */
    setConnections(prev => prev.filter(c => c.email !== user.email));
  };

  /* dropdown values ---------------------------------------------*/
  const castes    = [...new Set(connections.map(c => c.caste   ).filter(Boolean))];
  const religions = [...new Set(connections.map(c => c.religion).filter(Boolean))];

  /* --------------------------- UI ------------------------------*/
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gray-100 px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Saved Connections
        </h1>

        {/* filter bar */}
        {connections.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search by name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="flex-1 p-2 rounded border border-gray-400"
            />

            <select
              value={selectedCaste}
              onChange={e => setSelectedCaste(e.target.value)}
              className="p-2 rounded border border-gray-400"
            >
              <option value="">All castes</option>
              {castes.map(cs => (
                <option key={cs} value={cs}>
                  {cs}
                </option>
              ))}
            </select>

            <select
              value={selectedReligion}
              onChange={e => setSelectedReligion(e.target.value)}
              className="p-2 rounded border border-gray-400"
            >
              <option value="">All religions</option>
              {religions.map(r => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {(searchText || selectedCaste || selectedReligion) && (
              <button
                onClick={() => {
                  setSearchText('');
                  setSelectedCaste('');
                  setSelectedReligion('');
                }}
                className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* empty-state messages */}
        {connections.length === 0 && (
          <p className="text-center text-gray-600">No profiles saved yet.</p>
        )}
        {connections.length > 0 && filtered.length === 0 && (
          <p className="text-center text-gray-600">
            No profiles match your filters.
          </p>
        )}

        {/* card grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2">
          {filtered.map((p, idx) => (
            <div key={idx} className="flex flex-col bg-white shadow-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src={p.uploadedImages?.[0] || '/default-avatar.png'}
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover border border-gray-300 mr-4"
                />
                <div className="text-sm space-y-1">
                  {Object.entries(p)
                    .filter(([k]) => k !== 'uploadedImages')
                    .slice(0, 4)
                    .map(
                      ([k, v]) =>
                        v && (
                          <p key={k}>
                            <span className="font-medium">
                              {k.replace(/([A-Z])/g, ' $1')}:
                            </span>{' '}
                            {String(v)}
                          </p>
                        )
                    )}
                </div>
              </div>

              <button
                onClick={() => handleRequest(p)}
                className="self-start px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 focus:outline-none"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ncon;
