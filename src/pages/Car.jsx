import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Car = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: '',
    degree: '',
    employedIn: '',
    occupation: '',
    income: '',
    photos: [],
    hobby: '',
    about: '',
  });

  const handleDropdownChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (index, file) => {
    const newPhotos = [...formData.photos];
    newPhotos[index] = file;
    setFormData({ ...formData, photos: newPhotos });
  };

  const addPhotoField = () => {
    setFormData({ ...formData, photos: [...formData.photos, null] });
  };

  const removePhotoField = (index) => {
    const newPhotos = [...formData.photos];
    newPhotos.splice(index, 1);
    setFormData({ ...formData, photos: newPhotos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasValidPhoto = formData.photos.some(photo => photo !== null);
    if (!hasValidPhoto) {
      alert("Please upload at least one photo.");
      return;
    }

    // Redirect silently after validation
    navigate('/fmprof');
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="mb-[-50px] z-10">
          <img
            src="/image/s32.jpg"
            alt="Top Banner"
            className="w-[500px] h-[430px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="w-full max-w-xl bg-white shadow-md p-8 rounded-md mt-14">
          <h2 className="text-center text-lg font-medium text-red-700 mb-2">
            Complete your profile
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              {
                label: 'Country',
                name: 'country',
                options: ['India', 'USA', 'Canada', 'Australia'],
              },
              {
                label: 'State',
                name: 'state',
                options: [
                  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
                  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
                  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
                  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
                  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
                  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
                  'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli and Daman & Diu',
                  'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
                ],
              },
              {
                label: 'City living in',
                name: 'city',
                options: [
                  'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata',
                  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Surat', 'Kanpur',
                  'Nagpur', 'Indore', 'Bhopal', 'Patna', 'Vadodara', 'Ludhiana',
                  'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi',
                  'Srinagar', 'Amritsar', 'Ranchi', 'Guwahati', 'Noida', 'Thane'
                ],
              },
              {
                label: 'Highest Degree',
                name: 'degree',
                options: ['B.E./B.Tech', 'M.E./M.Tech', 'B.Sc', 'MBA', 'M.Sc', 'PhD']
              },
              {
                label: 'Employed In',
                name: 'employedIn',
                options: ['Private Sector', 'Government', 'Business', 'Not Working'],
              },
              {
                label: 'Occupation',
                name: 'occupation',
                options: [
                  'Software Engineer', 'Civil Engineer', 'Data Scientist', 'Doctor', 'Teacher',
                  'Accountant', 'Lawyer', 'Banker', 'Professor', 'Designer',
                  'Pharmacist', 'Police Officer', 'Army Personnel', 'Sales Executive',
                  'Marketing Manager', 'HR Specialist', 'Pilot', 'Journalist',
                  'Architect', 'None',
                ],
              },
              {
                label: 'Annual Income',
                name: 'income',
                options: [
                  'Rs. 0 - 1 Lakh', 'Rs. 1 - 2 Lakh', 'Rs. 2 - 5 Lakh',
                  'Rs. 5 - 10 Lakh', 'Rs. 10 - 20 Lakh', 'Rs. 20 Lakh-Above'
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
                    required
                    className="w-2/3 border border-yellow-600 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                  />
                  <select
                    className="w-1/3 border border-yellow-600 rounded px-2 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                    onChange={(e) => {
                      handleDropdownChange(name, e.target.value);
                      e.target.selectedIndex = 0;
                    }}
                  >
                    <option disabled selected>Select</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            {/* Hobby Section */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">
                Hobbies <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="hobby"
                value={formData.hobby}
                onChange={handleInputChange}
                placeholder="E.g., Reading, Traveling, Music"
                required
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
              />
            </div>

            {/* Photo Upload Section */}
            <div>
              <label className="block text-sm font-medium text-yellow-600 mb-1">
                Upload Photo(s) <span className="text-red-500">*</span>
              </label>
              {formData.photos.map((photo, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoChange(index, e.target.files[0])}
                    className="block w-full border border-yellow-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-600"
                    required
                  />
                  {photo && (
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-green-600">
                        Selected file: <strong>{photo.name}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => removePhotoField(index)}
                        className="text-xs text-red-600 hover:underline ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addPhotoField}
                className="text-sm mt-2 text-blue-600 hover:underline"
              >
                + Add Another Photo
              </button>
            </div>

            {/* Express Yourself */}
            <div>
              <p className="text-sm font-medium text-yellow-600 mb-2">
                Here is your chance to make your profile stand out!
              </p>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                required
                placeholder="Write Yourself! *"
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
