import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const staticProfiles = [
  {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    mobile: '9876543210',
    religion: 'Hindu',
    caste: 'Brahmin',
    dateOfBirth: '1990-01-15',
    uploadedImages: ['/images/profile1.jpg'],
  },
  {
    name: 'Sneha Patel',
    email: 'sneha.patel@example.com',
    mobile: '9123456789',
    religion: 'Hindu',
    caste: 'Patel',
    dateOfBirth: '1992-05-20',
    uploadedImages: ['/images/profile2.jpg'],
  },
  {
    name: 'Amit Sharma',
    email: 'amit.sharma@example.com',
    mobile: '9988776655',
    religion: 'Hindu',
    caste: 'Rajput',
    dateOfBirth: '1989-12-05',
    uploadedImages: ['/images/profile3.jpg'],
  },
  {
    name: 'Neha Singh',
    email: 'neha.singh@example.com',
    mobile: '9812345670',
    religion: 'Hindu',
    caste: 'Rajput',
    dateOfBirth: '1994-07-18',
    uploadedImages: ['/images/profile4.jpg'],
  },
  {
    name: 'Vikram Joshi',
    email: 'vikram.joshi@example.com',
    mobile: '9876123456',
    religion: 'Hindu',
    caste: 'Kayastha',
    dateOfBirth: '1988-11-30',
    uploadedImages: ['/images/profile5.jpg'],
  },
  {
    name: 'Pooja Mehta',
    email: 'pooja.mehta@example.com',
    mobile: '9876501234',
    religion: 'Hindu',
    caste: 'Gupta',
    dateOfBirth: '1993-04-12',
    uploadedImages: ['/images/profile6.jpg'],
  },
  {
    name: 'Rohan Verma',
    email: 'rohan.verma@example.com',
    mobile: '9123478560',
    religion: 'Hindu',
    caste: 'Jat',
    dateOfBirth: '1991-09-25',
    uploadedImages: ['/images/profile7.jpg'],
  },
  {
    name: 'Anjali Deshmukh',
    email: 'anjali.deshmukh@example.com',
    mobile: '9812345698',
    religion: 'Hindu',
    caste: 'Maratha',
    dateOfBirth: '1992-02-14',
    uploadedImages: ['/images/profile8.jpg'],
  },
];

// Helper function to mask mobile number: show first 2 and last 2 digits only
const maskMobile = (mobile) => {
  if (!mobile || mobile.length < 4) return mobile;
  const len = mobile.length;
  const visibleStart = mobile.slice(0, 2);
  const visibleEnd = mobile.slice(len - 2);
  const maskedSection = 'X'.repeat(len - 4);
  return visibleStart + maskedSection + visibleEnd;
};

// Eye icon component: shows open or closed eye based on 'open' prop
const EyeIcon = ({ open }) => (
  open ? (
    // Eye open icon (filled)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-blue-600"
      aria-hidden="true"
    >
      <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  ) : (
    // Eye closed icon (outline with slash)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-gray-500"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.94 17.94A10.005 10.005 0 0112 19c-7 0-10-7-10-7a19.824 19.824 0 013.08-4.45M9.88 9.88a3 3 0 104.24 4.24M1 1l22 22" />
    </svg>
  )
);

const Ncon = () => {
  const [connections, setConnections] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [requestedIndices, setRequestedIndices] = useState([]);
  
  // Track which indices currently show full mobile number
  const [showFullMobileIndices, setShowFullMobileIndices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedConnections') || 'null');
    const profiles = saved && saved.length > 0 ? saved : staticProfiles;
    setConnections(profiles);

    const requestedUsers = JSON.parse(localStorage.getItem('requestedUsers') || '[]');
    const requestedIdxs = profiles.reduce((acc, user, index) => {
      if (requestedUsers.some((u) => u.email === user.email)) acc.push(index);
      return acc;
    }, []);
    setRequestedIndices(requestedIdxs);
  }, []);

  const handleSendRequest = (profile, idx) => {
    const requestedUsers = JSON.parse(localStorage.getItem('requestedUsers') || '[]');
    const isAlreadyRequested = requestedUsers.some((u) => u.email === profile.email);
    if (!isAlreadyRequested) {
      const updatedRequested = [...requestedUsers, profile];
      localStorage.setItem('requestedUsers', JSON.stringify(updatedRequested));
    }
    setRequestedIndices((prev) => [...prev, idx]);

    window.dispatchEvent(new Event('connections-updated'));

    navigate('/mymatch');
  };

  // Toggle showing full mobile number for a profile index
  const toggleMobileVisibility = (idx) => {
    setShowFullMobileIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  if (connections.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md w-full">
          <h2 className="text-lg font-semibold text-red-800 mb-4">
            No Saved Connections Found
          </h2>
          <p className="text-gray-700">You have not saved any profiles to connect yet.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-red-800 mb-6">
            Saved Connections
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {connections.map((profile, idx) => {
              const name = profile.name || profile.fullName || 'N/A';
              const religion = profile.religion || 'N/A';
              const caste = profile.caste || 'N/A';
              const dateOfBirth =
                profile.dateOfBirth ||
                profile.dob ||
                profile.dateofbirth ||
                profile['date of birth'] ||
                'N/A';

              const isHovered = hoveredIndex === idx;
              const isRequested = requestedIndices.includes(idx);

              const mobile = profile.mobile || 'N/A';
              const isFullMobileShown = showFullMobileIndices.includes(idx);
              const displayedMobile = isFullMobileShown ? mobile : maskMobile(mobile);

              return (
                <div
                  key={idx}
                  className="bg-[#FBF5DE] rounded-lg shadow p-4 flex flex-col items-center"
                >
                  <img
                    src={profile.uploadedImages?.[0] || '/default-avatar.png'}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-red-400 mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-avatar.png'; // fallback
                    }}
                  />
                  <div className="text-center space-y-1 text-sm text-gray-800 mb-4 w-full max-w-xs">
                    <div>
                      <strong>Name:</strong> {name}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <strong>Mobile:</strong>
                      <span className="font-mono select-text">{displayedMobile}</span>
                      {mobile && mobile.length >= 4 && mobile !== 'N/A' && (
                        <button
                          type="button"
                          aria-label={
                            isFullMobileShown
                              ? 'Hide full mobile number'
                              : 'Show full mobile number'
                          }
                          onClick={() => toggleMobileVisibility(idx)}
                          className="focus:outline-none"
                          title={isFullMobileShown ? 'Hide full number' : 'Show full number'}
                        >
                          <EyeIcon open={isFullMobileShown} />
                        </button>
                      )}
                    </div>
                    <div>
                      <strong>Religion:</strong> {religion}
                    </div>
                    <div>
                      <strong>Caste:</strong> {caste}
                    </div>
                    <div>
                      <strong>Date of Birth:</strong> {dateOfBirth}
                    </div>
                  </div>

                  <button
                    type="button"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => !isRequested && handleSendRequest(profile, idx)}
                    disabled={isRequested}
                    className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-200 ${
                      isRequested
                        ? 'bg-green-500 cursor-not-allowed'
                        : isHovered
                        ? 'bg-blue-600'
                        : 'bg-blue-400'
                    }`}
                  >
                    {isRequested ? 'Request Sent' : isHovered ? 'Send Request' : 'Connect'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ncon;
