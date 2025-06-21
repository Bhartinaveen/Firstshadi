import React, { useState } from 'react';
import Footer from '../components/Footer';

const Car = () => {
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: '',
    degree: '',
    employedIn: '',
    occupation: '',
    income: '',
    familyName: '',
    familyNumber: '',
    photo: null,
  });

  const handleDropdownChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Top Banner Image */}
        <div className="mb-[-50px] z-10">
          <img
            src="/image/s32.jpg"
            alt="Top Banner"
            className="w-[500px] h-[300px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Main Card */}
        <div className="w-full max-w-xl bg-white shadow-md p-8 rounded-md mt-14">
          <h2 className="text-center text-lg font-medium text-red-700 mb-2">
            complete your <span className="text-black">First</span> Marriage.com profile.
          </h2>

          <form className="space-y-4">
            {/* Dropdown & Input Pairs */}
            {[
              {
                label: 'Country',
                name: 'country',
                options: ['India', 'USA', 'Canada', 'Australia'],
              },
              {
                label: 'State',
                name: 'state',
                options: ['Andaman & Nicobar Islands', 'Bihar', 'Delhi', 'Maharashtra' ,'jharkhand','Andhra Pradesh','Arunanchal Pradesh','Assam','Chhattisgarh','Goa','Gujarat','Haryana','Himachal pradesh','Karnataka','Kerala','Madhya Pradesh','Manipur','Meghalaya','Mizoram','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','West bengal'],
              },
              {
                label: 'City living in',
                name: 'city',
                options: ['Bambooflat', 'Port Blair', 'Patna', 'Mumbai'],
              },
              {
                label: 'Highest Degree',
                name: 'degree',
                options: ['B.E./B.Tech', 'M.E./M.Tech', 'B.Sc', 'MBA'],
              },
              {
                label: 'Employed In',
                name: 'employedIn',
                options: ['Private Sector', 'Government', 'Business', 'Not Working'],
              },
              {
                label: 'Occupation',
                name: 'occupation',
                options: ['Clerk', 'Engineer', 'Doctor', 'Teacher'],
              },
              {
                label: 'Annual Income',
                name: 'income',
                options: [
                  'Rs. 0 - 1 Lakh',
                  'Rs. 1 - 2 Lakh',
                  'Rs. 2 - 5 Lakh',
                  'Rs. 5 - 10 Lakh',
                ],
              },
            ].map(({ label, name, options }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-yellow-600">
                  {label} <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-2/3 border border-yellow-600 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                  />
                  <select
                    className="w-1/3 border border-yellow-600 rounded px-2 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                    onChange={(e) => handleDropdownChange(name, e.target.value)}
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select
                    </option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            {/* Family Name */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">
                Family Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="familyName"
                value={formData.familyName}
                onChange={handleInputChange}
                placeholder="Enter Family Name"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
              />
            </div>

            {/* Family Number */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">
                Family Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="familyNumber"
                value={formData.familyNumber}
                onChange={handleInputChange}
                placeholder="Enter Family Contact Number"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
              />
            </div>

            {/* Upload Photo */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-yellow-600 mb-1">
                Upload Photo <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="block w-full border border-yellow-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-600"
              />
              {formData.photo && (
                <span className="text-sm text-green-600 mt-1 block">
                  Selected file: <strong>{formData.photo.name}</strong>
                </span>
              )}
            </div>

            {/* Express Yourself */}
            <div>
              <p className="text-sm font-medium text-yellow-600 mb-2">
                Here is your chance to make your profile stand out!
              </p>
              <div className="flex items-center gap-2 text-sm mb-2">
                <a href="#" className="ml-auto text-xs text-red-700 hover:underline">
                  Need help writing?
                </a>
              </div>
              <textarea
                placeholder="Express Yourself! *"
                className="w-full h-28 border border-yellow-600 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-2 rounded hover:bg-pink-700 transition"
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Car;
