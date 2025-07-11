import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
    <div className="flex flex-col items-center w-full px-4 py-8 space-y-8">
      {/* Top Image */}
      <img
        src="/image/s9.jpg" // Replace with actual path
        alt="Teamwork"
        className="w-full max-w-4xl rounded shadow-md"
      />

      {/* About Us Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-600">About Us</h1>
        <p className="text-sm md:text-base text-gray-600">
          Delivering Excellence in wedding
        </p>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-4xl bg-red-50 border border-red-400 rounded-md p-4 shadow-sm">
        <h2 className="font-semibold text-lg mb-2">Our Mission</h2>
        <p className="text-sm text-gray-700">
          To revolutionize the matchmaking experience by connecting individuals and families through innovative technology and heartfelt service.First Marriage, we ensure transparency, trust, and compatibility in every match — helping you find your perfect life partner with confidence.
        </p>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-4xl bg-blue-50 border border-blue-400 rounded-md p-4 shadow-sm">
        <h2 className="font-semibold text-lg mb-2">Our Vision</h2>
        <p className="text-sm text-gray-700">
          To be the leading matrimonial platform, empowering individuals and families with a seamless, meaningful, and culturally respectful matchmaking experience — making the journey to marriage joyful, trusted, and memorable.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full max-w-4xl bg-red-900 text-indigo-100 text-center rounded-md p-6">
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-sm">
         We bring together a trusted network of genuine profiles, intelligent matchmaking technology, and dedicated support to ensure your search for the perfect life partner is smooth, secure, and successful — every step of the way.


        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
