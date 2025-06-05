import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
        <img
          src="/image/s8.png" // Replace with actual path or URL
          alt="Customer Support"
          className="w-full max-w-sm h-auto rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-center mb-2 text-red-700" >Contact Us</h1>
        <p className="text-center text-gray-800 mb-6">
          We're here to help! Feel free to reach out to us with any questions or concerns.
        </p>

        <form className="w-full bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 text-white font-semibold py-2 rounded hover:bg-red-700 transition-colors"
          >
            SUBMIT
          </button>
        </form>

        <div className="bg-blue-900 text-white p-6 rounded-lg mt-8 w-full max-w-md">
          <h2 className="text-lg font-bold mb-2 text-red-600">Contact Information</h2>
          <p><strong>Address:</strong> 123 First Marriage.com Street, Cityname, Country</p>
          <p><strong>Phone:</strong> +1 (294) 984-784</p>
          <p><strong>Email:</strong> support@firstmarriage.com</p>
          <p><strong>Working Hours:</strong> Mon-Fri: 9 AM - 6 PM</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
