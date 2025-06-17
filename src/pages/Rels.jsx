import React, { useState } from 'react';
import Footer from '../components/Footer';

const Rels = () => {
  const [form, setForm] = useState({
    religion: '',
    community: '',
    country: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormComplete = form.religion && form.community && form.country;

  const handleContinue = () => {
    if (isFormComplete) {
      console.log('Form Submitted:', form);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 py-6">

        {/* 🖼️ Image outside the card */}
        <img
          src="./image/s15.jpg"
          alt="Banner"
          className="w-85 h-70 object-cover rounded-md mb-4 shadow-lg"
        />

        {/* 📦 Card */}
        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-xl w-full max-w-md relative">

          {/* Religion */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-sm sm:text-base text-red-800">His religion</label>
            <select
              name="religion"
              value={form.religion}
              onChange={handleChange}
              className="w-full border border-yellow-600 rounded-md px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Baudh">Baudh</option>
            </select>
          </div>

          {/* Community */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-sm sm:text-base text-red-800">Community</label>
            <select
              name="community"
              value={form.community}
              onChange={handleChange}
              className="w-full border border-yellow-600 rounded-md px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Community</option>
              <option value="Tamil">Tamil</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Bengali">Bengali</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Marathi">Marathi</option>
              <option value="Kasmiri">Kasmiri</option>
              <option value="Bihari">Bihari</option>
            </select>
          </div>

          {/* Country */}
          <div className="mb-6">
            <label className="block font-semibold mb-1 text-sm sm:text-base text-red-800">Living in</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border border-yellow-600 rounded-md px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="Albania">Albania</option>
              <option value="USA">USA</option>
            </select>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!isFormComplete}
            className={`w-full py-2 rounded-full text-white font-semibold text-sm sm:text-base transition ${
              isFormComplete
                ? 'bg-gradient-to-r from-red-700 to-red-900 hover:opacity-90'
                : 'bg-red-300 cursor-not-allowed opacity-50'
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
