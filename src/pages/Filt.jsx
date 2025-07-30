import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
  { name: 'Naveen', mobile: '9876543210', caste: 'Brahmin', religion: 'Hindu', images: ['/image/s24.jpg'], email: 'naveen@example.com' },
  { name: 'Anjali', mobile: '9123456789', caste: 'Kayastha', religion: 'Hindu', images: ['/image/s46.jpg'], email: 'anjali@example.com' },
  { name: 'Pooja', mobile: '9988776655', caste: 'Yadav', religion: 'Hindu', images: ['/image/s44.jpg'], email: 'pooja@example.com' },
  { name: 'Rohit', mobile: '9012345678', caste: 'Rajput', religion: 'Hindu', images: ['/image/s42.jpg'], email: 'rohit@example.com' },
  { name: 'Vikas', mobile: '9876501234', caste: 'Kurmi', religion: 'Hindu', images: ['/image/s39.jpg'], email: 'vikas@example.com' },
  { name: 'Aditi', mobile: '9234567890', caste: 'Teli', religion: 'Hindu', images: ['/image/s35.jpg'], email: 'aditi@example.com' }
];

// Helper to dedupe by email
const dedupe = (arr, key = 'email') => {
  const map = new Map();
  arr.forEach(item => {
    if (item[key]) map.set(item[key], item);
  });
  return [...map.values()];
};

const ProfileCard = ({
  profile,
  hoveredEmail,
  setHoveredEmail,
  isRequested,
  handleRequest,
  onImageClick
}) => {
  const [showMobile, setShowMobile] = useState(false);

  const maskMobile = (mobile = '') => {
    if (mobile.length < 5) return mobile;
    const first2 = mobile.slice(0, 2);
    const last3 = mobile.slice(-3);
    const masked = 'X'.repeat(mobile.length - 5);
    return `${first2}${masked}${last3}`;
  };

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
        style={{ touchAction: 'manipulation' }}
      />
      <div className="text-sm space-y-1 mb-4">
        <p><strong>Name:</strong> {profile.name || profile.fullName}</p>
        <p className="flex items-center justify-center gap-2">
          <strong>Mobile:</strong>
          <span className="font-mono">{showMobile ? profile.mobile : maskMobile(profile.mobile)}</span>
          <button
            type="button"
            onClick={() => setShowMobile(!showMobile)}
            aria-label={showMobile ? "Hide mobile number" : "Show mobile number"}
            className="focus:outline-none text-blue-600"
            title={showMobile ? "Hide mobile number" : "Show mobile number"}
          >
            {showMobile ? <FaEyeSlash /> : <FaEye />}
          </button>
        </p>
        <p><strong>Caste:</strong> {profile.caste}</p>
        <p><strong>Religion:</strong> {profile.religion}</p>
      </div>
      <button
        disabled={isRequested}
        onClick={() => !isRequested && handleRequest(profile)}
        onMouseEnter={() => setHoveredEmail(profile.email)}
        onMouseLeave={() => setHoveredEmail(null)}
        className={`${btnClasses} px-5 py-2 rounded-full text-sm font-semibold transition-all active:scale-95`}
        style={{ touchAction: 'manipulation' }}
      >
        {btnText}
      </button>
    </div>
  );
};

const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Full view"
        className="max-w-full max-h-full rounded-lg border-4 border-white"
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold"
        aria-label="Close image modal"
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
    // Load savedConnections, if none, save userData
    const savedConnections = JSON.parse(localStorage.getItem('savedConnections') || 'null');
    if (savedConnections && savedConnections.length > 0) {
      setConnections(savedConnections);
    } else {
      localStorage.setItem('savedConnections', JSON.stringify(userData));
      setConnections(userData);
    }

    // Load requested emails
    const fetchRequested = () => {
      const req = JSON.parse(localStorage.getItem('requestedUsers') || '[]');
      setRequestedEmails(req.map(u => u.email));
    };
    fetchRequested();

    // Listen to update event
    const handleUpdate = () => fetchRequested();
    window.addEventListener('connections-updated', handleUpdate);

    return () => window.removeEventListener('connections-updated', handleUpdate);
  }, []);

  const handleRequest = (profile) => {
    const user = {
      name: profile.name || profile.fullName || '',
      email: profile.email,
      mobile: profile.mobile || '',
      image: profile.uploadedImages?.[0] || profile.images?.[0] || '/default-avatar.png',
      caste: profile.caste,
      religion: profile.religion,
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
            <select
              value={selectedCaste}
              onChange={e => setSelectedCaste(e.target.value)}
              className="p-2 rounded border border-gray-400"
            >
              <option value="">All castes</option>
              {ALL_CASTES.map(cs => <option key={cs} value={cs}>{cs}</option>)}
            </select>
            <select
              value={selectedReligion}
              onChange={e => setSelectedReligion(e.target.value)}
              className="p-2 rounded border border-gray-400"
            >
              <option value="">All religions</option>
              {ALL_RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
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

        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Saved Connections</h2>
        {connections.length === 0 && (
          <p className="text-center text-gray-600 mb-8">No profiles saved yet.</p>
        )}
        {connections.length > 0 && filteredConnections.length === 0 && (
          <p className="text-center text-gray-600 mb-8">No profiles match your filters.</p>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 mb-12">
          {filteredConnections.map(profile => (
            <ProfileCard
              key={profile.email || profile.mobile}
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
          {userData.map((u, i) => (
            <ProfileCard
              key={u.email || u.mobile || i}
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
