import React, { useState } from 'react';

const Landing = () => {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(30);

  const ageOptions = Array.from({ length: 83 }, (_, i) => i + 18);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 
                 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/image/m1.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="text-red-100 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The World's No.1 Matchmaking Partner
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Search by City, Profession & Community
          </p>

          <form className="flex flex-wrap justify-center gap-4 bg-orange-100 bg-opacity-90 p-4 rounded-lg text-red-900 mb-20 translate-y-20">
            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">I'm looking for a</label>
              <select className="px-3 py-2 rounded border border-red-600 ">
                <option>Woman</option>
                <option>Man</option>
              </select>
            </div>

            {/* Age */}
            <div className="flex flex-col ">
              <label className="text-sm font-medium">Age</label>
              <div className="flex gap-2">
                <select
                  className="px-3 py-2 rounded border border-red-600 "
                  value={minAge}
                  onChange={(e) => {
                    const newMinAge = parseInt(e.target.value);
                    setMinAge(newMinAge);
                    if (newMinAge > maxAge) {
                      setMaxAge(newMinAge);
                    }
                  }}
                >
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
                <span className="self-center text-sm font-semibold">to</span>
                <select
                  className="px-3 py-2 rounded border border-red-600 "
                  value={maxAge}
                  onChange={(e) => setMaxAge(parseInt(e.target.value))}
                >
                  {ageOptions
                    .filter((age) => age >= minAge)
                    .map((age) => (
                      <option key={age} value={age}>
                        {age}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Religion */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Religion</label>
              <select className="px-3 py-2 rounded border border-red-600 ">
                <option>Select</option>
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Sikh</option>
                 <option>Baudh</option>

              
              </select>
            </div>

            {/* Mother Tongue */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Mother tongue</label>
              <select className="px-3 py-2 rounded border border-red-600 ">
                <option>Select</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Bengali</option>
                <option>Asomiya</option>
                <option>Gujarati</option>
                <option>Telugu</option>
                <option>Kannada</option>
                <option>Kashmiri</option>
                <option>Marathi</option>
                <option>Punjabi</option>
                <option>Urdu</option>
                <option>Bhojpuri</option>
                <option>Odia</option>
                
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                style={{ backgroundColor: '#DDA853' }}
                className="hover:opacity-90 text-white font-semibold px-5 py-2 rounded"
              >
                Let's Begin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
