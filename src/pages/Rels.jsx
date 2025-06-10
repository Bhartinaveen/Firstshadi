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

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg p-6 sm:p-8 rounded-xl w-full max-w-md relative">
        {/* Avatar Icon */}
        <div className="flex justify-center mb-6 mt-4 sm:mt-0">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="icon"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Religion */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-sm sm:text-base">His religion</label>
          <select
            name="religion"
            value={form.religion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base"
          >
            <option value="">Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
          </select>
        </div>

        {/* Community */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-sm sm:text-base">Community</label>
          <select
            name="community"
            value={form.community}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base"
          >
            <option value="">Community</option>
            <option value="Tamil">Tamil</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Bengali">Bengali</option>
          </select>
        </div>

        {/* Country */}
        <div className="mb-6">
          <label className="block font-semibold mb-1 text-sm sm:text-base">Living in</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base"
          >
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="Albania">Albania</option>
            <option value="USA">USA</option>
          </select>
        </div>

        {/* Continue Button (Visible only when all filled) */}
        
        {isFormComplete && (
          <button
            className="w-full py-2 rounded-full text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-cyan-600 hover:opacity-90 transition"
          >
            Continue
          </button>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Rels;
