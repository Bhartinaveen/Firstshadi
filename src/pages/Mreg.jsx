import React from 'react';
import Footer from '../components/Footer';

const Mreg = () => {
  const handleGoogleSignIn = () => {
    // Replace this with your real Google sign-in logic
    alert('Google Sign-In triggered');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">

        {/* Plain Image without Card */}
        <img
          src="/image/s19.jpg"
          alt="Top"
          className="w-full max-w-md h-70 object-cover rounded-xl translate-y-3"
        />

        {/* Main Form Card */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md mt-8 z-0">
          <h2 className="text-2xl font-semibold text-center mb-6 text-red-700">Sign In</h2>

          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 mb-4 border border-yellow-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder-yellow-600 text-yellow-600"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 mb-6 border border-yellow-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder-yellow-600 text-yellow-600"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-md font-semibold transition duration-300"
            >
              SIGN IN
            </button>
          </form>

          {/* Google Sign-In Button */}
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
