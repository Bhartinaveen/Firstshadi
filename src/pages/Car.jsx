import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Car = () => {
  const navigate                   = useNavigate();
  const { state: prevState = {} }  = useLocation();   // Box + Rels data

  /* ----------- local state ----------- */
  const [formData, setFormData] = useState({
    /* address / location */
    country: '', state: '', city: '',
    /* education & work */
    degree: '', employedIn: '', occupation: '', income: '',
    /* gallery */
    photos: [null],
    /* favourites & bio */
    hobby: '', about: '',
    favoriteColor: '', favoriteSong: '', favoriteMovies: '',
    /* physical details */
    height: '', weight: '', faceColor: '', bodyShape: '', rashifal: '',
    /* medical / astro */
    bloodGroup: '', manglik: '',
    /* more personal */
    currentAddress: '', permanentAddress: '',
    mobileNo: '',            // <-- NEW FIELD
    dob: '', birthPlace: ''
  });

  /* ----------- helpers ----------- */
  const handleDropdownChange = (field, value) =>
    setFormData({ ...formData, [field]: value });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhotoChange = (idx, file) => {
    const photos = [...formData.photos];
    photos[idx]  = file;
    setFormData({ ...formData, photos });
  };

  const addPhotoField    = () => setFormData({ ...formData, photos: [...formData.photos, null] });
  const removePhotoField = (idx) => {
    const photos = [...formData.photos];
    photos.splice(idx, 1);
    setFormData({ ...formData, photos });
  };

  /* ----------- submit ----------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.photos.some((p) => p)) {
      alert('Please upload at least one photo.');
      return;
    }
    navigate('/fmprof', { state: { ...prevState, ...formData } });
  };

  /* ----------- dropdown definitions ----------- */
  const combos = [
    { label: 'Country', name: 'country', options: ['India', 'USA', 'Canada', 'Australia'] },
    { label: 'State', name: 'state', options: [
        'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
        'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
        'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
        'Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman & Nicobar Islands','Chandigarh',
        'Dadra & Nagar Haveli and Daman & Diu','Delhi','Jammu & Kashmir','Ladakh','Lakshadweep','Puducherry'
      ]},
    { label: 'City living in', name: 'city', options: [
        'Mumbai','Delhi','Bengaluru','Hyderabad','Chennai','Kolkata','Pune','Ahmedabad','Jaipur','Lucknow',
        'Surat','Kanpur','Nagpur','Indore','Bhopal','Patna','Vadodara','Ludhiana','Agra','Nashik','Faridabad',
        'Meerut','Rajkot','Varanasi','Srinagar','Amritsar','Ranchi','Guwahati','Noida','Thane',
        // Odisha cities
        'Bhubaneswar','Cuttack','Rourkela','Berhampur','Sambalpur','Balasore','Puri','Bhadrak','Baripada',
        'Angul','Dhenkanal','Jharsuguda','Kendrapara','Jeypore','Rayagada','Koraput','Bargarh','Kalahandi',
        'Jagatsinghpur','Nabarangpur','Sundargarh','Talcher','Phulbani','Kendujhar','Paradip','Malkangiri'
      ]},
    { label: 'Qualification', name: 'degree', options: [
        'PhD','Postgraduate','MCom','MA','MBA','MBBS','CA','Journalism','LLB','LLM','BTech','BSc','BCom','BBA',
        'BA','B.Ed','MPharma','BPharma','Pharmacy','Dentist','Agriculture','Hospitality','Undergraduate',
        'Diploma','ITI','Higher Secondary (12th)','11th','Secondary (10th)','None'
      ]},
    { label: 'Employed In', name: 'employedIn', options: ['Private Sector','Government','Business','Not Working'] },
    { label: 'Occupation', name: 'occupation', options: [
        'Software Engineer','Civil Engineer','Data Scientist','Doctor','Teacher','Accountant','Lawyer','Banker',
        'Professor','Designer','Pharmacist','Police Officer','Army Personnel','Sales Executive','Marketing Manager',
        'HR Specialist','Pilot','Journalist','Architect','None'
      ]},
    { label: 'Annual Income', name: 'income', options: [
        'Rs. 0 – 1 Lakh','Rs. 1 – 2 Lakh','Rs. 2 – 5 Lakh','Rs. 5 – 10 Lakh',
        'Rs. 10 – 20 Lakh','Rs. 20 Lakh & Above'
      ] }
  ];

  /* ----------- UI ----------- */
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        {/* banner */}
        <div className="mb-[-50px] z-10">
          <img
            src="/image/s32.jpg"
            alt="Top Banner"
            className="w-[500px] h-[430px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* form card */}
        <div className="w-full max-w-xl bg-white shadow-md rounded-md p-8 mt-14">
          <h2 className="text-center text-lg font-medium text-red-700 mb-2">
            Complete your profile
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* combo fields */}
            {combos.map(({ label, name, options }) => (
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

            {/* --- NEW Mobile No field --- */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter 10-digit mobile number"
                className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
              />
            </div>

            {/* current/permanent address, DOB, birth place */}
            {[
              { label: 'Current Address', name: 'currentAddress', type: 'textarea' },
              { label: 'Permanent Address', name: 'permanentAddress', type: 'textarea' },
              { label: 'Date of Birth', name: 'dob', type: 'date' },
              { label: 'Birth Place', name: 'birthPlace', type: 'text' }
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-yellow-600">
                  {label} {name !== 'dob' && <span className="text-red-500">*</span>}
                </label>
                {type === 'textarea' ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}

            {/* favourites */}
            {['favoriteColor', 'favoriteSong', 'favoriteMovies'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-yellow-600">
                  {field
                    .replace(/favorite/, '')
                    .replace(/([A-Z])/g, ' $1')
                    .trim()
                    .replace(/^./, (c) => c.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
                />
              </div>
            ))}

            {/* height & weight */}
            {['height', 'weight'].map((field) => {
              const opts = field === 'height'
                ? ['4’6”', '4’8”', '5’0”', '5’4”', '5’8”', '6’0”', '6’4”']
                : ['40 kg','45 kg','50 kg','55 kg','60 kg','65 kg','70 kg','75 kg','80 kg','85 kg','90 kg','95 kg','100 kg+'];
              return (
                <div key={field}>
                  <label className="block text-sm font-medium text-yellow-600">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-2/3 border border-yellow-600 rounded px-3 py-2"
                    />
                    <select
                      className="w-1/3 border border-yellow-600 rounded px-2 py-2"
                      onChange={(e) => {
                        handleDropdownChange(field, e.target.value);
                        e.target.selectedIndex = 0;
                      }}
                    >
                      <option disabled selected>Select</option>
                      {opts.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}

            {/* manglik */}
            <div>
              <label className="block text-sm font-medium text-yellow-600 mb-1">
                Manglik
              </label>
              <div className="flex gap-6 mt-1">
                {['Yes', 'No', "Don't Know"].map((opt) => (
                  <label key={opt} className="flex items-center gap-1 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="manglik"
                      value={opt}
                      checked={formData.manglik === opt}
                      onChange={handleInputChange}
                      className="accent-yellow-600"
                    />
                    <span>{opt}</span>
                    <span>
                      {formData.manglik === opt ? (
                        <span className="text-green-600 text-sm ml-1">✔️</span>
                      ) : (
                        <span className="text-red-600 text-sm ml-1">❌</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* selectors */}
            {[
              { label: 'Face Color', name: 'faceColor', options: ['Fair', 'Medium', 'Dark', 'Wheatish'] },
              { label: 'Body Shape', name: 'bodyShape', options: ['Slim', 'Athletic', 'Average', 'Heavy', 'Curvy', 'Muscular'] },
              { label: 'Rashifal (Zodiac Sign)', name: 'rashifal', options: [
                  'Mesh (Aries)', 'Vrishabh (Taurus)', 'Mithun (Gemini)', 'Karka (Cancer)', 'Simha (Leo)',
                  'Kanya (Virgo)', 'Tula (Libra)', 'Vrischik (Scorpio)', 'Dhanu (Sagittarius)',
                  'Makar (Capricorn)', 'Kumbh (Aquarius)', 'Meen (Pisces)'
                ] }
            ].map(({ label, name, options }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-yellow-600">{label}</label>
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="w-full mt-1 border border-yellow-600 rounded px-3 py-2"
                >
                  <option disabled selected>Select</option>
                  {options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* blood group */}
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
                    handleDropdownChange('bloodGroup', e.target.value);
                    e.target.selectedIndex = 0;
                  }}
                >
                  <option disabled selected>Select</option>
                  {['A+','A-','B+','B-','O+','O-','AB+','AB-'].map((bg) => (
                    <option key={bg}>{bg}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* hobby */}
            <div>
              <label className="block text-sm font-medium text-yellow-600">
                Hobbies <span className="text-red-500">*</span>
              </label>
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

            {/* photo upload */}
            <div>
              <label className="block text-sm font-medium text-yellow-600 mb-1">
                Upload Photo(s) <span className="text-red-500">*</span>
              </label>
              {formData.photos.map((photo, idx) => (
                <div key={idx} className="mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoChange(idx, e.target.files[0])}
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
                      onClick={() => removePhotoField(idx)}
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

            {/* about / bio */}
            <div>
              <p className="text-sm font-medium text-yellow-600 mb-2">
                Here is your chance to make your profile stand out!
              </p>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                required
                placeholder="Write about yourself *"
                className="w-full h-28 border border-yellow-600 rounded px-3 py-2"
              />
            </div>

            {/* buttons */}
            <div className="flex justify-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-red-900 text-white px-4 py-2 rounded hover:bg-pink-700"
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
