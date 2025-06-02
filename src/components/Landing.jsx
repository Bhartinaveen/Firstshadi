import React from 'react';

const Landing = () => {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 
                 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/image/m1.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="text-red-100 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The World's No.1 Matchmaking Service
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Search by City, Profession & Community
          </p>

          <form className="flex flex-wrap justify-center gap-4 bg-orange-100 bg-opacity-90 p-4 rounded-lg text-red-900 mb-20">
            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">I'm looking for a</label>
              <select className="px-3 py-2 rounded border border-red-600 z-50">
                <option>Woman</option>
                <option>Man</option>
              </select>
            </div>

            {/* Age */}
            <div className="flex flex-col z-50">
              <label className="text-sm font-medium">Age</label>
              <div className="flex gap-2">
                <select className="px-3 py-2 rounded border border-red-600 z-50">
                  {Array.from({ length: 83 }, (_, i) => (
                    <option key={i}>{i + 18}</option>
                  ))}
                </select>
                <span className="self-center text-sm font-semibold">to</span>
                <select className="px-3 py-2 rounded border border-red-600 z-50">
                  {Array.from({ length: 83 }, (_, i) => (
                    <option key={i}>{i + 18}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Religion */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Of religion</label>
              <select className="px-3 py-2 rounded border border-red-600 z-50">
                <option>Select</option>
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Sikh</option>
              </select>
            </div>

            {/* Mother Tongue */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">And mother tongue</label>
              <select className="px-3 py-2 rounded border border-red-600 z-50">
                <option>Select</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Bengali</option>
                <option>Telugu</option>
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
