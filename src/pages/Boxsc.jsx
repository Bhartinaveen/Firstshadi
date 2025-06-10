import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import Footer from '../components/Footer';

const Boxsc = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['day', 'month', 'year'].includes(name)) {
      const val = value.replace(/\D/g, '');
      if (
        (name === 'day' || name === 'month') && val.length <= 2 ||
        (name === 'year' && val.length <= 4)
      ) {
        setForm((prev) => ({ ...prev, [name]: val }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if ((name === 'day' || name === 'month') && value.length === 1) {
      setForm((prev) => ({
        ...prev,
        [name]: '0' + value,
      }));
    }

    if (name === 'year' && value.length > 0 && value.length < 4) {
      setForm((prev) => ({
        ...prev,
        [name]: value.padStart(4, '0'),
      }));
    }
  };

  const isFormComplete = Object.values(form).every(val => val.trim() !== '');

  const handleContinue = () => {
    navigate('/rels'); // ✅ Navigate to Rels page
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
           <img
          src="./image/s14.jpg" // Update the path as needed
          alt="Sign Up Banner"
          className="rounded-md w-full object-cover -translate-y-4"
        />
          {/* <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <svg className="h-8 w-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM4 13a4 4 0 018 0H4z" />
              </svg>
            </div>
          </div> */}

          <h2 className="text-lg font-semibold text-gray-700 mb-2">His name</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded focus:outline-none"
            required
          />

          <h2 className="text-lg font-semibold text-gray-700 mb-2">Date of birth</h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              name="day"
              placeholder="Day"
              value={form.day}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-1/3 p-2 border rounded focus:outline-none"
              maxLength="2"
              required
            />
            <input
              type="text"
              name="month"
              placeholder="Month"
              value={form.month}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-1/3 p-2 border rounded focus:outline-none"
              maxLength="2"
              required
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={form.year}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-1/3 p-2 border rounded focus:outline-none"
              maxLength="4"
              required
            />
          </div>

          {isFormComplete && (
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-full font-semibold transition-all duration-300 hover:opacity-90"
            >
              Continue
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Boxsc;
