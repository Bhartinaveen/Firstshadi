import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Rels = () => {
  const navigate = useNavigate();
  const { state: boxData } = useLocation(); // data gathered in Box

  /* ---------- local state ---------- */
  const [form, setForm] = useState({
    religion: '',
    community: '',
    caste: ''
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

  /* ---------- Religion Options ---------- */
  const religionOptions = [
    'Hindu',
    'Muslim',
    'Christian',
    'Sikh',
    'Jain',
    'Buddhist',
    'Parsi',
    'Jewish',
    
    'Atheist',
    'Other'
  ];

  /* ---------- Community Options ---------- */
  const communityOptions = [
    // Hindi-speaking communities
    'Hindi', 'Bhojpuri', 'Rajasthani', 'Haryanvi', 'Awadhi', 'Chhattisgarhi', 
    
    // South Indian communities
    'Tamil', 'Telugu', 'Malayali', 'Kannada', 'Tulu', 'Kodava', 
    
    // Western Indian communities
    'Marathi', 'Konkani', 'Goan', 
    
    // Eastern Indian communities
    'Bengali', 'Odia', 'Assamese', 'Bihari', 
    
    // North-East communities
    'Naga',   'Manipuri', 'Tripuri', 
    
    // Punjabi and nearby
    'Punjabi', 'Dogri', 'Kashmiri', 
    
    // Gujarati
    'Gujarati', 'Kutchi', 
    
    // Other significant communities
    'Sindhi', 'Urdu-speaking',   'Other'
  ];

  /* ---------- Caste Options ---------- */
  const casteOptions = [
    // General Castes
    'Brahmin', 'Rajput', 'Bania', 'Kayastha', 'Khatri', 'Maratha', 'Patidar', 'Reddy', 'Vellalar', 'Nair', 
    
    // OBC Castes
    'Yadav', 'Kurmi', 'Lodh', 'Gurjar', 'Jat', 'Ahir', 'Kamma', 'Naidu', 'Vokkaliga', 'Lingayat', 
    
    // SC Castes
    'Chamar', 'Dhobi', 'Valmiki', 'Pasi', 'Mahar', 'Mala', 'Madiga', 'Pulaya', 'Paraiyar', 
    
    // ST Castes
    'Gond', 'Bhil', 'Santhal', 'Munda', 'Ho', 'Khasi', 'Naga', 'Mizo', 'Bodo', 
    
    // Other Categories
    'SC - Scheduled Caste', 
    'ST - Scheduled Tribe', 
    'OBC - Other Backward Class', 
    'General', 
    'Other'
  ];

  return (
    <div>
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
            <option value="">Select Religion</option>
            {religionOptions.map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>

          {/* Community */}
          <label className="block font-semibold text-red-800 mb-1">Community</label>
          <select
            name="community"
            value={form.community}
            onChange={(e) => setForm({ ...form, community: e.target.value })}
            className="w-full mb-4 border border-yellow-600 p-2 rounded"
          >
            <option value="">Select Community</option>
            {communityOptions.map((community) => (
              <option key={community} value={community}>
                {community}
              </option>
            ))}
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
            {casteOptions.map((caste) => (
              <option key={caste} value={caste}>
                {caste}
              </option>
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
      </div>

      <Footer />
    </div>
  );
};

export default Rels;