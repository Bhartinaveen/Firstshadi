import React from "react";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 py-8">
      {/* Header Image */}
      <div className="w-full max-w-md flex justify-center mb-6">
        <img
          src="./image/s11.jpg"
          alt="Registration Visual"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-6">Create Account</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          

          <button
            type="submit"
            className="w-full  bg-red-900 text-white py-2 rounded hover:bg-blue-700 transition"
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
