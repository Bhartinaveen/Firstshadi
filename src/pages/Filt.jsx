import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const ALL_CASTES = [
  'Brahmin', 'Rajput', 'Kayastha', 'Bania', 'Yadav', 'Kshatriya', 'Jatav',
  'Gupta', 'Kumhar', 'Kurmi', 'Nai', 'Khatik', 'Chamar', 'Teli',
  'Maurya', 'Sonar', 'Jat', 'Agarwal', 'Mali', 'Vishwakarma',
  'Thakur', 'Ahir', 'Koli', 'Valmiki', 'Pandit', 'Ravidasia',
  'Scheduled Caste', 'Scheduled Tribe', 'OBC', 'General'
];

const ALL_RELIGIONS = [
  'Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Parsi',
  'Jewish', 'Other'
];

const userData = [
  {
    name: 'Naveen',
    email: 'bharti9@gmail.com',
    caste: 'Brahmin',
    religion: 'Hindu',
    images: ['/image/s24.jpg']
  },
  {
    name: 'Anjali',
    email: 'anjali@gmail.com',
    caste: 'Kayastha',
    religion: 'Hindu',
    images: ['/image/s46.jpg']
  },
  {
    name: 'Pooja',
    email: 'pooja@gmail.com',
    caste: 'Yadav',
    religion: 'Hindu',
    images: ['/image/s44.jpg']
  },
  {
    name: 'Rohit',
    email: 'rohit@gmail.com',
    caste: 'Rajput',
    religion: 'Hindu',
    images: ['/image/s42.jpg']
  },
  {
    name: 'Vikas',
    email: 'vikas@gmail.com',
    caste: 'Kurmi',
    religion: 'Hindu',
    images: ['/image/s39.jpg']
  },
  {
    name: 'Aditi',
    email: 'aditi@gmail.com',
    caste: 'Teli',
    religion: 'Hindu',
    images: ['/image/s35.jpg']
  }
];

const dedupe = (arr, key = 'email') => {
  const m = new Map();
  arr.forEach(i => m.set(i[key], i));
  return [...m.values()];
};

const ProfileCard = ({ profile, hoveredEmail, setHoveredEmail, isRequested, handleRequest, onImageClick }) => {
  const btnText = isRequested
    ? 'Request Sent'
    : hoveredEmail === profile.email
      ? 'Send Request'
      : 'Connect';

  const btnClasses = isRequested
    ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
    : 'bg-green-600 text-white hover:bg-green-700';

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-2xl p-6 items-center text-center">
      <img
        src={profile.uploadedImages?.[0] || profile.images?.[0] || '/default-avatar.png'}
        alt="avatar"
        className="w-24 h-24 rounded-full object-cover border border-gray-300 mb-4 cursor-pointer"
        onClick={() => onImageClick(profile.uploadedImages?.[0] || profile.images?.[0])}
      />
      <div className="text-sm space-y-1 mb-4">
        <p><strong>Name:</strong> {profile.name || profile.fullName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Caste:</strong> {profile.caste}</p>
        <p><strong>Religion:</strong> {profile.religion}</p>
      </div>
      <button
        disabled={isRequested}
        onClick={() => !isRequested && handleRequest(profile)}
        onMouseEnter={() => setHoveredEmail(profile.email)}
        onMouseLeave={() => setHoveredEmail(null)}
        className={`${btnClasses} px-5 py-2 rounded-full text-sm font-semibold`}
      >
        {btnText}
      </button>
    </div>
  );
};

const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
      <img
        src={imageUrl}
        alt="Full view"
        className="max-w-full max-h-full rounded-lg border-4 border-white"
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        &times;
      </button>
    </div>
  );
};

const Ncon = () => {
  const [connections, setConnections] = useState([]);
  const [requestedEmails, setRequestedEmails] = useState([]);
  const [hoveredEmail, setHoveredEmail] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedCaste, setSelectedCaste] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setConnections(JSON.parse(localStorage.getItem('savedConnections') || '[]'));
    const req = JSON.parse(localStorage.getItem('requestedUsers') || '[]');
    setRequestedEmails(req.map(u => u.email));
  }, []);

  const handleRequest = profile => {
    const user = {
      name: profile.name || profile.fullName || '',
      email: profile.email,
      image: profile.uploadedImages?.[0] || profile.images?.[0] || '/default-avatar.png',
      caste: profile.caste,
      religion: profile.religion
    };
    let requested = JSON.parse(localStorage.getItem('requestedUsers') || '[]');
    requested = requested.filter(u => u.email !== user.email);
    requested.push(user);
    requested = dedupe(requested);
    localStorage.setItem('requestedUsers', JSON.stringify(requested));
    setRequestedEmails(prev => dedupe([...prev, user.email]));
    window.dispatchEvent(new Event('connections-updated'));
  };

  const filteredConnections = connections.filter(p => {
    const txtOk = !searchText || (p.name || p.fullName || '').toLowerCase().includes(searchText.trim().toLowerCase());
    const casteOk = selectedCaste ? p.caste === selectedCaste : true;
    const religionOk = selectedReligion ? p.religion === selectedReligion : true;
    return txtOk && casteOk && religionOk;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-[#eaffee] px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">Connections</h1>
        {connections.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search by name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="flex-1 p-2 rounded border border-gray-400"
            />
            <select value={selectedCaste} onChange={e => setSelectedCaste(e.target.value)} className="p-2 rounded border border-gray-400">
              <option value="">All castes</option>
              {ALL_CASTES.map(cs => <option key={cs} value={cs}>{cs}</option>)}
            </select>
            <select value={selectedReligion} onChange={e => setSelectedReligion(e.target.value)} className="p-2 rounded border border-gray-400">
              <option value="">All religions</option>
              {ALL_RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            {(searchText || selectedCaste || selectedReligion) && (
              <button onClick={() => {
                setSearchText('');
                setSelectedCaste('');
                setSelectedReligion('');
              }} className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm">Clear</button>
            )}
          </div>
        )}
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Saved Connections</h2>
        {connections.length === 0 && <p className="text-center text-gray-600 mb-8">No profiles saved yet.</p>}
        {connections.length > 0 && filteredConnections.length === 0 && <p className="text-center text-gray-600 mb-8">No profiles match your filters.</p>}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 mb-12">
          {filteredConnections.map(profile => (
            <ProfileCard
              key={profile.email}
              profile={profile}
              hoveredEmail={hoveredEmail}
              setHoveredEmail={setHoveredEmail}
              isRequested={requestedEmails.includes(profile.email)}
              handleRequest={handleRequest}
              onImageClick={setModalImage}
            />
          ))}
        </div>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">Sample Users</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
          {userData.map(u => (
            <ProfileCard
              key={u.email}
              profile={u}
              hoveredEmail={hoveredEmail}
              setHoveredEmail={setHoveredEmail}
              isRequested={requestedEmails.includes(u.email)}
              handleRequest={handleRequest}
              onImageClick={setModalImage}
            />
          ))}
        </div>
      </div>
      <Footer />
      <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default Ncon;