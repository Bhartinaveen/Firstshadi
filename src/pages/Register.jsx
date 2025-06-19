import React, { useState } from "react";
import Footer from '../components/Footer';
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // You can also add custom validation logic here if needed
    navigate('/regone');
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 py-8">
        <div className="w-full max-w-md flex justify-center mb-6">
          <img
            src="./image/s11.jpg"
            alt="Registration Visual"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
          <h2 className="text-center text-2xl font-semibold mb-6 text-red-800">Create Account</h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border border-yellow-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600 text-black"
            />
            <input
              type="text"
              placeholder="Phone Number"
              required
              className="w-full border border-yellow-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600 text-black"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-yellow-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600 text-black"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
                className="w-full border border-yellow-600 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600 text-black"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-yellow-600" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-yellow-600" />
                )}
              </div>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                required
                className="w-full border border-yellow-600 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-600 text-black"
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-yellow-600" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-yellow-600" />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              REGISTER
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-red-600 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
