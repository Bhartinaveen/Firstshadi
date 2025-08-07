// Landing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Data Constants & Helper Components ---
const ageOptions = Array.from({ length: 58 }, (_, i) => i + 18); // Ages 18 to 75

const religionOptions = [
  "Hindu", "Muslim", "Christian", "Sikh", "Jain", "Buddhist", "Parsi", "Jewish", "Spiritual", "Other"
];

const motherTongueOptions = [
  "Hindi", "English", "Bengali", "Marathi", "Punjabi", "Tamil", "Telugu", "Gujarati", 
  "Kannada", "Malayalam", "Odia", "Urdu", "Assamese", "Bhojpuri", "Haryanvi", "Rajasthani", "Other"
];

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-1.383-.597 15.185 15.185 0 01-2.025-1.222c-.713-.577-1.36-1.18-1.92-1.815a11.14 11.14 0 01-2.427-4.22c-.157-.525-.26-1.07-.323-1.638C3.23 10.993 3 10.027 3 9.049c0-2.41 1.745-4.376 4.088-4.908A5.492 5.492 0 0112 5.169a5.492 5.492 0 014.912-1.026C19.255 4.673 21 6.639 21 9.049c0 .978-.23 1.944-.674 2.827-.063.568-.166 1.113-.323 1.638a11.14 11.14 0 01-2.427 4.22c-.56.635-1.207 1.238-1.92 1.815a15.185 15.185 0 01-2.025 1.222 15.247 15.247 0 01-1.383-.597l-.022.012-.007.003z" />
  </svg>
);

/**
 * Reusable Select Field Component with Placeholder support for mobile
 * @param {object} props - Component props
 * @param {string} props.placeholder - The placeholder text for the select input.
 * @param {string} props.value - The current value of the select input.
 * @param {Function} props.onChange - The function to call when the value changes.
 * @param {string[]} props.options - An array of strings for the select options.
 * @param {string} [props.className] - Additional classes for the container.
 */
const SelectField = ({ placeholder, value, onChange, options, className = "" }) => (
    <div className={className}>
        <select
            className="w-full p-2.5 lg:p-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>{placeholder}</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
);


// --- Main Component ---
const Landing = () => {
  // **NOTE: Initial state is now empty ('') to show placeholders by default
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Provide default values if user doesn't select any
    const searchState = {
        gender: gender || 'Woman',
        minAge: minAge || 18,
        maxAge: maxAge || 75,
        religion: religion || '',
        motherTongue: motherTongue || ''
    };
    navigate('/sol', { state: searchState });
  };
  
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white font-sans">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100" 
        style={{ backgroundImage: "url('/image/m1.png')" }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-shadow-lg">
          Find Your <span className="text-amber-400">Perfect Partner</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          The world's most trusted matchmaking service. Start your search from millions of verified profiles.
        </p>
        
        <form 
          className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
          onSubmit={handleSearch}
        >
          {/* **UPDATED GRID: Now 2 columns on mobile, 5 on large screens */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            <SelectField
                className="col-span-2 lg:col-span-1"
                placeholder="I'm looking for a..."
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={['Woman', 'Man']}
            />

            {/* **UPDATED AGE PICKER: More compact for mobile */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4">
                <select 
                  className="w-full p-2.5 lg:p-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  value={minAge}
                  onChange={(e) => {
                    const newMin = parseInt(e.target.value);
                    setMinAge(newMin);
                    if (newMin > maxAge) setMaxAge(newMin);
                  }}
                >
                  <option value="" disabled>From Age</option>
                  {ageOptions.map((age) => <option key={`min-${age}`} value={age}>{age}</option>)}
                </select>
                <select 
                  className="w-full p-2.5 lg:p-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  value={maxAge}
                  onChange={(e) => setMaxAge(parseInt(e.target.value))}
                >
                  <option value="" disabled>To Age</option>
                  {ageOptions.filter((age) => age >= (minAge || 18)).map((age) => <option key={`max-${age}`} value={age}>{age}</option>)}
                </select>
            </div>

            <SelectField
                placeholder="Religion"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                options={religionOptions}
            />

            <SelectField
                placeholder="Mother Tongue"
                value={motherTongue}
                onChange={(e) => setMotherTongue(e.target.value)}
                options={motherTongueOptions}
            />

            <button
              type="submit"
              className="col-span-2 lg:col-span-1 w-full text-lg font-bold bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-slate-900 py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/30"
            >
              <HeartIcon />
              Find
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Landing;