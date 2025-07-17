// src/pages/Boxsc.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Boxsc = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { profileFor, gender } = state || {};

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
  });

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['day', 'year'].includes(name)) {
      const digits = value.replace(/\D/g, '');
      if ((name === 'day' && digits.length <= 2) || (name === 'year' && digits.length <= 4)) {
        setForm((prev) => ({ ...prev, [name]: digits }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isComplete = Object.values(form).every((v) => v.trim() !== '');

  const handleContinue = () => {
    if (!isComplete) return;
    const dob = `${form.day.padStart(2, '0')}-${form.month}-${form.year}`;
    navigate('/rels', {
      state: {
        profileFor,
        gender,
        firstName: form.firstName,
        lastName: form.lastName,
        dob
      }
    });
  };

  useEffect(() => {
    if (!profileFor) navigate('/box');
  }, [profileFor, navigate]);

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <img src="/image/s14.jpg" alt="Banner" className="w-85 h-70 object-cover rounded-md mb-4 shadow-lg" />

        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          {/* Name */}
          <h2 className="text-lg font-semibold text-red-800 mb-2">Name</h2>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="w-full mb-2 p-2 border border-yellow-600 rounded"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="w-full mb-4 p-2 border border-yellow-600 rounded"
          />

          {/* DOB */}
          <h2 className="text-lg font-semibold text-red-800 mb-2">Date of Birth</h2>
          <div className="flex space-x-2 mb-4">
            <input
              name="day"
              placeholder="DD"
              value={form.day}
              onChange={handleChange}
              maxLength="2"
              className="w-1/3 p-2 border border-yellow-600 rounded"
            />
            <select
              name="month"
              value={form.month}
              onChange={handleChange}
              className="w-1/3 p-2 border border-yellow-600 rounded"
            >
              <option value="">Month</option>
              {monthNames.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <input
              name="year"
              placeholder="YYYY"
              value={form.year}
              onChange={handleChange}
              maxLength="4"
              className="w-1/3 p-2 border border-yellow-600 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button onClick={() => navigate(-1)} className="w-1/2 bg-gray-600 text-white py-2 rounded-full">
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!isComplete}
              className={`w-1/2 py-2 rounded-full text-white ${
                isComplete ? 'bg-red-700 hover:bg-red-900' : 'bg-red-400 cursor-not-allowed opacity-50'
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

export default Boxsc;
