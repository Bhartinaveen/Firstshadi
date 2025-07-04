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

  const handleBack = () => {
    navigate(-1);
  };

  const months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <img
          src="./image/s14.jpg"
          alt="Banner"
          className="w-85 h-70 object-cover rounded-md mb-4 shadow-lg"
        />

        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 text-red-800">Name</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded focus:outline-none border-yellow-600 placeholder-yellow-600"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded focus:outline-none border-yellow-600 placeholder-yellow-600"
            required
          />

          <h2 className="text-lg font-semibold text-gray-700 mb-2 text-red-800">Date of Birth</h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              name="day"
              placeholder="Day"
              value={form.day}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-1/3 p-2 border rounded focus:outline-none border-yellow-600 placeholder-yellow-600"
              maxLength="2"
              required
            />

            <select
              name="month"
              value={form.month}
              onChange={handleChange}
              className={`w-1/3 p-2 border rounded focus:outline-none bg-white border-yellow-600 ${
                form.month === '' ? 'text-yellow-600' : 'text-black'
              }`}
              required
            >
              <option value="" className="text-yellow-600">Month</option>
              {months.map(({ value, name }) => (
                <option key={value} value={value} className="text-black">
                  {name}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="year"
              placeholder="Year"
              value={form.year}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-1/3 p-2 border rounded focus:outline-none border-yellow-600 placeholder-yellow-600"
              maxLength="4"
              required
            />
          </div>

          {/* Buttons Row */}
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="w-1/2 bg-gray-600 text-white py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!isFormComplete}
              className={`w-1/2 bg-gradient-to-r from-red-700 to-red-900 text-white py-2 rounded-full font-semibold transition-all duration-300 ${
                isFormComplete ? 'hover:opacity-90' : 'opacity-50 cursor-not-allowed'
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
