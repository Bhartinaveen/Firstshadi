import React from 'react';
import Footer from '../components/Footer';

const Mreg = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md my-10">
          <h2 className="text-2xl font-semibold text-center mb-6 text-red-700">Sign In</h2>

          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-md font-semibold transition duration-300"
            >
              SIGN IN
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?{' '}
            <a href="/grm" className="text-red-600 hover:underline font-medium">
              Register here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mreg;
