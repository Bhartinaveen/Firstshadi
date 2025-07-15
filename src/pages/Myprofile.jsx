// src/pages/Myprofile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const prettify = (str) =>
  str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .replace('Dob', 'Date of Birth');

const flatten = (data, path = '') => {
  const rows = [];
  if (data == null || ['string', 'number', 'boolean'].includes(typeof data)) {
    rows.push({ label: prettify(path.trim()), value: data });
    return rows;
  }
  if (Array.isArray(data)) {
    data.forEach((item, i) => rows.push(...flatten(item, `${path} ${i + 1}`)));
    return rows;
  }
  Object.entries(data).forEach(([k, v]) =>
    rows.push(...flatten(v, `${path} ${prettify(k)}`))
  );
  return rows;
};

const Myprofile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('myProfile');
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
    if (confirmDelete) {
      localStorage.removeItem('myProfile');
      navigate('/');
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-red-800">No Profile Found</h2>
        </div>
      </div>
    );
  }

  const rows = flatten({ ...profile, uploadedImages: undefined });

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
        <div
          className="p-4 rounded-lg shadow-lg w-full max-w-md"
          style={{ backgroundColor: '#FBF5DE' }}
        >
          {/* Top Profile Image */}
          {profile.uploadedImages?.length > 0 && (
            <div className="flex justify-center mb-3">
              <img
                src={profile.uploadedImages[0]}
                alt="Profile"
                className="w-28 h-28 object-cover rounded-full border-4 border-red-400 shadow"
              />
            </div>
          )}

          <h1 className="text-lg font-bold text-center text-red-800 mb-3">My Profile</h1>

          {/* Additional Photos */}
          {profile.uploadedImages?.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {profile.uploadedImages.slice(1).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Photo ${idx + 2}`}
                  className="w-14 h-14 object-cover rounded-full border border-gray-300"
                />
              ))}
            </div>
          )}

          {/* Profile Details */}
          <div className="bg-red-100 p-3 rounded-lg shadow-inner space-y-2 text-sm">
            {rows.map(({ label, value }, idx) =>
              value ? (
                <div
                  key={idx}
                  className="flex justify-between items-start border-b border-dashed pb-1"
                >
                  <span className="font-medium text-gray-700">{label}:</span>
                  <span className="text-right ml-3 text-gray-800 break-words">
                    {String(value)}
                  </span>
                </div>
              ) : null
            )}
          </div>

          {/* Delete Button */}
          <div className="mt-5 text-center">
            <button
              onClick={handleDelete}
              className="px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-800 text-sm"
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
