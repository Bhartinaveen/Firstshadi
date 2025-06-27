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
    photos: [null],
    hobby: '',
    about: '',
    favoriteColor: '',
    favoriteSong: '',
    favoriteMovies: '',
    height: '',
    faceColor: '',
    bloodGroup: '',
    currentAddress: '',
    permanentAddress: '',
    dob: '',
    birthPlace: '',
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
            {/* Form with dropdowns */}
            {[{ label: 'Country', name: 'country', options: ['India', 'USA', 'Canada', 'Australia'] }, { label: 'State', name: 'state', options: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli and Daman & Diu', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'] }, { label: 'City living in', name: 'city', options: ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Surat', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Patna', 'Vadodara', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Amritsar', 'Ranchi', 'Guwahati', 'Noida', 'Thane'] }, {
              label: 'Qualification', name: 'degree', options: ['PhD', 'Postgraduate', 'MCom', 'MA', 'MBA', 'MBBS', 'CA', 'Journalism', 'LLB', 'LLM',
                'BTech', 'BSc', 'BCom', 'BBA', 'BA', 'B.Ed',
                'MPharma', 'BPharma', 'Pharmacy', 'Dentist', 'Agriculture',
                'Hospitality', 'Undergraduate', 'Diploma', 'ITI',
                'Higher Secondary (12th)', '11th', 'Secondary (10th)', 'None']
            }, { label: 'Employed In', name: 'employedIn', options: ['Private Sector', 'Government', 'Business', 'Not Working'] }, { label: 'Occupation', name: 'occupation', options: ['Software Engineer', 'Civil Engineer', 'Data Scientist', 'Doctor', 'Teacher', 'Accountant', 'Lawyer', 'Banker', 'Professor', 'Designer', 'Pharmacist', 'Police Officer', 'Army Personnel', 'Sales Executive', 'Marketing Manager', 'HR Specialist', 'Pilot', 'Journalist', 'Architect', 'None'] }, { label: 'Annual Income', name: 'income', options: ['Rs. 0 - 1 Lakh', 'Rs. 1 - 2 Lakh', 'Rs. 2 - 5 Lakh', 'Rs. 5 - 10 Lakh', 'Rs. 10 - 20 Lakh', 'Rs. 20 Lakh-Above'] }].map(({ label, name, options }) => (
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
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            {/* Current Address */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Current Address <span className="text-red-500">*</span></label>
              <textarea
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleInputChange}
                required
                placeholder="Enter your current address"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              ></textarea>
            </div>

            {/* Permanent Address */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Permanent Address <span className="text-red-500">*</span></label>
              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                required
                placeholder="Enter your permanent address"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              ></textarea>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Date of Birth <span className="text-red-500">*</span></label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              />
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Birth Place <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleInputChange}
                required
                placeholder="Enter your place of birth"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              />
            </div>

            {/* Favorite Info */}
            {[{ label: 'Favorite Color', name: 'favoriteColor' }, { label: 'Favorite Song', name: 'favoriteSong' }, { label: 'Favorite Movies', name: 'favoriteMovies' }].map(({ label, name }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-yellow-600">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
                />
              </div>
            ))}

            {/* Height */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Height</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-2/3 border border-yellow-600 rounded px-3 py-2"
                />
                <select
                  className="w-1/3 border border-yellow-600 rounded px-2 py-2"
                  onChange={(e) => {
                    handleDropdownChange("height", e.target.value);
                    e.target.selectedIndex = 0;
                  }}
                >
                  <option disabled selected>Select</option>
                  {["4’6”", "4’8”", "5’0”", "5’4”", "5’8”", "6’0”", "6’4”"].map(ht => (
                    <option key={ht} value={ht}>{ht}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Face Color */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Face Color</label>
              <select
                name="faceColor"
                value={formData.faceColor}
                onChange={handleInputChange}
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              >
                <option disabled selected>Select Face Color</option>
                {["Fair", "Medium", "Dark", "Wheatish"].map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Blood Group</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="w-2/3 border border-yellow-600 rounded px-3 py-2"
                />
                <select
                  className="w-1/3 border border-yellow-600 rounded px-2 py-2"
                  onChange={(e) => {
                    handleDropdownChange("bloodGroup", e.target.value);
                    e.target.selectedIndex = 0;
                  }}
                >
                  <option disabled selected>Select</option>
                  {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(bg => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Hobby */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">Hobbies <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="hobby"
                value={formData.hobby}
                onChange={handleInputChange}
                required
                placeholder="E.g., Reading, Traveling, Music"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              />
            </div>

            {/* Photo Upload Section */}
            <div>
              <label className="block text-sm font-medium text-yellow-600 mb-1">Upload Photo(s) <span className="text-red-500">*</span></label>
              {formData.photos.map((photo, index) => (
                <div key={index} className="mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoChange(index, e.target.files[0])}
                    className="block w-full border border-yellow-600 rounded px-2 py-1 text-sm"
                    required={formData.photos.length === 1}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {photo ? (
                      <span className="text-sm text-green-600">
                        Selected file: <strong>{photo.name}</strong>
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">No file selected</span>
                    )}
                    <button
                      type="button"
                      onClick={() => removePhotoField(index)}
                      className="text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
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

            {/* About */}
            <div>
              <p className="text-sm font-medium text-yellow-600 mb-2">Here is your chance to make your profile stand out!</p>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                required
                placeholder="Write Yourself! *"
                className="w-full h-28 border border-yellow-600 rounded px-3 py-2"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-red-900 text-white py-2 px-4 rounded hover:bg-pink-700"
              >
                Continue
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
