import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Boxsc = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['day', 'year'].includes(name)) {
      const val = value.replace(/\D/g, '');
      if (
        (name === 'day' && val.length <= 2) ||
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

    if (name === 'day' && value.length === 1) {
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
    if (isFormComplete) {
      navigate('/rels');
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <img
            src="./image/s14.jpg"
            alt="Sign Up Banner"
            className="rounded-md w-full object-cover -translate-y-4"
          />

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

            <select
              name="month"
              value={form.month}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded focus:outline-none bg-white"
              required
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => {
                const val = (i + 1).toString().padStart(2, '0');
                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>

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

          <button
            onClick={handleContinue}
            disabled={!isFormComplete}
            className={`w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-full font-semibold transition-all duration-300 ${
              isFormComplete ? 'hover:opacity-90' : 'opacity-50 cursor-not-allowed'
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

export default Boxsc;
