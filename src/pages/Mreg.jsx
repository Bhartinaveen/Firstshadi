import React from 'react';
import Footer from '../components/Footer';

const Mreg = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white px-4 py-8">
        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-red-700 mb-6">
            Create Your Account
          </h2>
          <p className="text-sm text-center text-blue-900 mb-8">
            Begin your journey to finding the right match by filling in the details below.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-900 text-sm mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-900 text-sm mb-1">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter mobile number"
              />
            </div>

            <div>
              <label className="block text-gray-900 text-sm mb-1">
                Create New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Create new password"
              />
            </div>

            <div>
              <label className="block text-gray-900 text-sm mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Confirm Password"
              />
            </div>

            <div>
              <label className="block text-gray-900 text-sm mb-1">
                Create profile for <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="">-- Select --</option>
                <option value="Myself">Myself</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Friend">Friend</option>
                <option value="Relative">Relative</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 rounded-xl hover:bg-purple-700 transition-all"
            >
              Register Now
            </button>
          </form>

          <p className="text-xs text-center text-gray-900 mt-5">
            By clicking on <strong>Register Now</strong>, you agree to our{' '}
            <span className="text-blue-900 underline">Terms of Use</span> and{' '}
            <span className="text-blue-900 underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mreg;
