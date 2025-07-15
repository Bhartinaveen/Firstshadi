import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Rels = () => {
  const navigate           = useNavigate();
  const { state: boxData } = useLocation();          // data gathered in Box

  /* ---------- local state ---------- */
  const [form, setForm] = useState({
    religion : '',
    community: '',
    caste    : ''
  });

  const isComplete = form.religion && form.community && form.caste;

  /* ---------- move forward ---------- */
  const handleContinue = () => {
    if (!isComplete) return;
    /* send Box + Rels details to Car */
    navigate('/car', { state: { ...boxData, ...form } });
  };

  /* ---------- block direct entry ---------- */
  useEffect(() => {
    if (!boxData?.firstName) navigate('/box');
  }, [boxData, navigate]);

  /* ---------- UI ---------- */
  const casteOptions = [
    'Brahmin','Rajput','Yadav','SC - Scheduled Caste',
    'OBC - Other Backward Class','Other'
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <img
        src="/image/s27.jpg"
        alt="Banner"
        className="w-85 h-70 object-cover rounded-md shadow-lg mb-4"
      />

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        {/* Religion */}
        <label className="block font-semibold text-red-800 mb-1">Religion</label>
        <select
          name="religion"
          value={form.religion}
          onChange={(e) => setForm({ ...form, religion: e.target.value })}
          className="w-full mb-4 border border-yellow-600 p-2 rounded"
        >
          <option value="">Select</option>
          <option>Hindu</option>
          <option>Muslim</option>
          <option>Christian</option>
          <option>Sikh</option>
          <option>Other</option>
        </select>

        {/* Community */}
        <label className="block font-semibold text-red-800 mb-1">Community</label>
        <select
          name="community"
          value={form.community}
          onChange={(e) => setForm({ ...form, community: e.target.value })}
          className="w-full mb-4 border border-yellow-600 p-2 rounded"
        >
          <option value="">Select</option>
          <option>Hindi</option>
          <option>Bengali</option>
          <option>Punjabi</option>
          <option>Marathi</option>
          <option>Other</option>
        </select>

        {/* Caste */}
        <label className="block font-semibold text-red-800 mb-1">Caste</label>
        <select
          name="caste"
          value={form.caste}
          onChange={(e) => setForm({ ...form, caste: e.target.value })}
          className="w-full mb-6 border border-yellow-600 p-2 rounded"
        >
          <option value="">Select Caste</option>
          {casteOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-600 text-white py-2 rounded-full"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!isComplete}
            className={`w-1/2 py-2 rounded-full text-white ${
              isComplete
                ? 'bg-red-700 hover:bg-red-900'
                : 'bg-red-400 cursor-not-allowed opacity-50'
            }`}
          >
            Continue
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rels;
