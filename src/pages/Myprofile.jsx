import React, { useEffect, useRef, useState } from 'react';

// --- Helper Components ---
const Footer = () => (
  <footer className="w-full text-center p-4 mt-8 text-gray-500 text-sm">
    <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
  </footer>
);

// --- SVG Icons ---
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    <path d="m15 5 4 4"/>
  </svg>
);

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/>
    <polyline points="7 3 7 8 15 8"/>
  </svg>
);

const CancelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ConnectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// --- Utility Functions ---
const prettify = (str) =>
  str.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).replace('Dob', 'Date of Birth');

const flatten = (data, prefix = '', path = []) => {
  const rows = [];
  if (data == null || ['string', 'number', 'boolean'].includes(typeof data)) {
    if (prefix.trim().length > 0) {
      rows.push({ label: prettify(prefix.trim()), value: data, path });
    }
    return rows;
  }
  if (Array.isArray(data)) {
    data.forEach((item, i) =>
      rows.push(...flatten(item, `${prefix} ${i + 1}`, [...path, i]))
    );
    return rows;
  }
  Object.entries(data).forEach(([k, v]) => {
    if (k !== 'uploadedImages') { // skip images from flatten display
      rows.push(...flatten(v, `${prefix} ${prettify(k)}`, [...path, k]));
    }
  });
  return rows;
};

// --- Main Component ---
const Myprofile = () => {
  const navigate = (path) => {
    // Replace this with real routing (e.g. react-router) in your app
    console.log(`Navigating to: ${path}`);
  };

  const fileInputRef = useRef(null);

  const [initialProfileData] = useState({
    name: { first: 'Jane', last: 'Doe' },
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    dob: '1995-08-15',
    address: { street: '123 Main St', city: 'Anytown', zip: '12345' },
    uploadedImages: ['https://placehold.co/200x200/a78bfa/ffffff?text=JD'],
  });

  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});

  useEffect(() => {
    let stored = localStorage.getItem('myProfile');
    if (!stored) {
      stored = JSON.stringify(initialProfileData);
      localStorage.setItem('myProfile', stored);
    }
    const parsed = JSON.parse(stored);
    setProfile(parsed);
    setEditedProfile(parsed);
  }, [initialProfileData]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      // Remove from local storage
      localStorage.removeItem('myProfile');

      // Remove from connections list if present
      const existing = JSON.parse(localStorage.getItem("connections")) || [];
      const updatedConnections = existing.filter(
        (conn) => conn.email !== profile.email
      );
      localStorage.setItem("connections", JSON.stringify(updatedConnections));

      setProfile(null);
      setEditedProfile(null);

      navigate('/');
    }
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    localStorage.setItem('myProfile', JSON.stringify(editedProfile));
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (path, value) => {
    setEditedProfile((currentProfile) => {
      const newProfile = JSON.parse(JSON.stringify(currentProfile));
      let temp = newProfile;
      for (let i = 0; i < path.length - 1; i++) {
        if (!temp[path[i]]) temp[path[i]] = typeof path[i + 1] === 'number' ? [] : {};
        temp = temp[path[i]];
      }
      temp[path[path.length - 1]] = value;
      return newProfile;
    });
  };

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImg = reader.result;
      const updated = {
        ...editedProfile,
        uploadedImages: [newImg, ...(editedProfile.uploadedImages?.slice(1) || [])],
      };
      setEditedProfile(updated);
      if (!isEditing) {
        setProfile(updated);
        localStorage.setItem('myProfile', JSON.stringify(updated));
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Connect button click with quota-safe saving:
  const handleSaveToConnect = () => {
    try {
      // Make a copy & remove base64 images (only keep image URLs or empty)
      const profileToSave = JSON.parse(JSON.stringify(editedProfile));

      // If uploadedImages has base64 img(s), remove them or keep just URL string (to reduce size)
      if (Array.isArray(profileToSave.uploadedImages)) {
        profileToSave.uploadedImages = profileToSave.uploadedImages.map(img => {
          // Keep only URL strings (if they are base64 data URI, replace with empty or placeholder URL)
          if (typeof img === 'string' && img.startsWith('data:image')) {
            // Replace base64 with placeholder or omit
            return 'https://placehold.co/200x200/e2e8f0/475569?text=Img';
          }
          return img;
        });
      }

      const existing = JSON.parse(localStorage.getItem("connections")) || [];
      const isDuplicate = existing.some(item => item.email === profileToSave.email);
      if (isDuplicate) {
        alert("Profile already exists in connections!");
        return;
      }

      // Optional: Check data size before saving
      const approxSize = JSON.stringify(profileToSave).length;
      const maxBytes = 4 * 1024 * 1024; // ~4MB limit
      if (approxSize > maxBytes) {
        alert("Profile data is too large. Try reducing image size or removing large fields.");
        return;
      }

      const updatedConnections = [...existing, profileToSave];
      localStorage.setItem("connections", JSON.stringify(updatedConnections));

      alert("Profile saved to connections!");
      navigate("/connections");

    } catch (error) {
      if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        alert("LocalStorage quota exceeded! Please delete some saved connections or reduce profile size.");
      } else {
        console.error("Failed to save profile:", error);
        alert("An unexpected error occurred while saving profile.");
      }
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center font-sans">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-slate-700">Loading Profile...</h2>
        </div>
      </div>
    );
  }

  const displayProfile = isEditing ? editedProfile : profile;
  const rows = flatten(displayProfile);
  const profileName = `${displayProfile.name?.first || ''} ${displayProfile.name?.last || ''}`.trim() || 'My Profile';

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transition-all">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
          <div className="relative mb-4 sm:mb-0 sm:mr-6">
            <img
              src={displayProfile.uploadedImages?.[0] || 'https://placehold.co/200x200/e2e8f0/475569?text=??'}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
            {isEditing && (
              <button
                onClick={handleImageClick}
                className="absolute bottom-0 right-0 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white hover:bg-indigo-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                title="Change profile image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h3"/><path d="m17.5 9.5-2.2-2.2c-.4-.4-1-.4-1.4 0L5.5 15.7c-.2.2-.3.4-.3.7v2.8c0 .3.3.5.5.5h2.8c.3 0 .5-.1.7-.3l8.4-8.4c.4-.4.4-1 0-1.4Z"/></svg>
              </button>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-slate-800">{profileName}</h1>
            <p className="text-slate-500 mt-1">{displayProfile.email}</p>
            <div className="mt-4 flex justify-center sm:justify-start space-x-2">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-all active:scale-95 shadow-sm">
                    <SaveIcon /> Save
                  </button>
                  <button onClick={handleCancel} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-500 text-white text-sm font-semibold hover:bg-slate-600 transition-all active:scale-95 shadow-sm">
                    <CancelIcon /> Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleEdit} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all active:scale-95 shadow-sm">
                    <EditIcon /> Edit Profile
                  </button>
                  <button onClick={handleSaveToConnect} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-all active:scale-95 shadow-sm">
                    <ConnectIcon /> Connect
                  </button>
                  <button onClick={handleDelete} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-transparent text-slate-500 text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all active:scale-95">
                    <DeleteIcon />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {rows.map(({ label, value, path }, idx) =>
              value !== null && value !== undefined ? (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm font-medium text-slate-500 mb-1">{label}</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={String(value)}
                      onChange={(e) => handleChange(path, e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-md text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                  ) : (
                    <span className="text-slate-800 font-semibold text-base break-words">
                      {String(value)}
                    </span>
                  )}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
