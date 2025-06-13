import React from 'react';
import Footer from '../components/Footer';

const Grmdtl = () => {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-lg text-red-700 font-medium text-center mb-1">
          Hi! You are joining the Best Matchmaking Experience.
        </h2>
       

        <form className="space-y-5">
          {/* Groom's Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
               Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Groom's Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {/* <p className="text-xs text-gray-500 mt-1">
              If you wish to hide your name from others, click on settings icon and choose the setting
            </p> */}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mother Tongue */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mother tongue <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Mother Tongue</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Religion */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Religion <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Jain">Jain</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Marital Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Marital status <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Height</option>
              <option value="4'0&quot;">4'0"</option>
              <option value="4'5&quot;">4'5"</option>
              <option value="5'0&quot;">5'0"</option>
              <option value="5'5&quot;">5'5"</option>
              <option value="6'0&quot;">6'0"</option>
              <option value="6'5&quot;">6'5"</option>
              <option value="7'0&quot;">7'0"</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Re-enter Password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Continue
          </button>

          {/* Already have an account */}
          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/mreg" className="text-red-600 hover:underline font-medium">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Grmdtl;
