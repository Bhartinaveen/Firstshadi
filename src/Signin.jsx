import React, { useState } from 'react';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = () => {
    // Replace this with actual Google Sign-In logic
    alert('Google Sign-In triggered');
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        {/* Image Banner */}
        <div className="w-full max-w-md">
          <img
            src="./image/s12.png"
            alt="Sign Up Banner"
            className="rounded-md w-full object-cover"
          />
        </div>

        {/* Sign-in Card */}
        <div className="bg-white w-full max-w-md mt-6 p-6 rounded-md shadow-md">
          <h2 className="text-center text-xl font-semibold mb-6 text-red-700">Sign In</h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-yellow-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full border border-yellow-600 p-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-yellow-600" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-yellow-600" />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              SIGN IN
            </button>
          </form>

          {/* Google Sign-In Button without border */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">Sign in with Google</span>
            </button>
          </div>

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
