import React from 'react';
import Footer from '../components/Footer';

const Grmdtl = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10 space-y-6">

        {/* 🖼️ Plain Image Outside the Form Card */}
        <img
          src="./image/s17.jpg"
          alt="Groom Banner"
          className="w-full max-w-md h-70 object-cover rounded-xl"
        />

        {/* 📋 Form Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-lg text-red-700 font-medium text-center mb-1">
            Hi! You are joining the Best Matchmaking Experience.
          </h2>

          <form className="space-y-5">
            {/* Groom's Title + Name */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  className="w-1/4 border border-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                >
                  <option value="Mr">Mr.</option>
                  <option value="Miss">Miss</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="w-3/4 border border-yellow-600 placeholder-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
            </div>

            {/* Gender Selection */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="male" className="form-radio text-yellow-600" required />
                  <span className="ml-2 text-red-800">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="female" className="form-radio text-yellow-600" required />
                  <span className="ml-2 text-red-800">Female</span>
                </label>
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border border-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>

            {/* Marital Status */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Marital status <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border border-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              >
                <option value="">Select Marital Status</option>
                <option value="Never Married">Never Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
              </select>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full border border-yellow-600 placeholder-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>

            {/* Create Password */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Create Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-yellow-600 placeholder-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-red-800 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Re-enter Password"
                className="w-full border border-yellow-600 placeholder-yellow-600 text-yellow-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Continue
            </button>

            {/* Already have account */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/mreg" className="text-red-600 hover:underline font-medium">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Grmdtl;
