import React from 'react';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';


const Signin = () => {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Image Banner */}
      <div className="w-full max-w-md">
        <img
          src="./image/s12.png" // Update the path as needed
          alt="Sign Up Banner"
          className="rounded-md w-full object-cover"
        />
      </div>

      {/* Sign-in Card */}
      <div className="bg-white w-full max-w-md mt-6 p-6 rounded-md shadow-md">
        <h2 className="text-center text-xl font-semibold mb-6">Sign In</h2>
        
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full  bg-red-900 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{' '}
          <Link to="/register" className="text-red-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
     <Footer />
    </div>
  );
};

export default Signin;
