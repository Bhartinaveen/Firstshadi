import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white text-sm">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            {/* <li><a href="#">Home</a></li> */}
            <li><a href="#">Advanced search</a></li>
            <li><a href="#">Success stories</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#">Membership Options</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><Link to="/contact">Contact us</Link></li> {/* Updated this line */}
            <li><a href="#">First Marriage</a></li>
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            
            <li><Link to="/about">About us</Link></li> 
           
            <li><Link to="/fraud">Fraud Alert</Link></li> 
            
            <li><Link to="/terms">Terms of use</Link></li>
            <li><Link to="/ref">Cancellation & Refund Policy</Link></li>
            <li><Link to="/priv">Privacy policy</Link></li>
            <li><Link to="/cyb">Cyber Security</Link></li>


            
          </ul>
        </div>
      </div>
      
      <div className="flex items-center gap-3 -translate-y-6 translate-x-4">
        <span className="font-medium">Follow us on</span>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 bg-blue-700"
        >
          <FaFacebookF className="text-xl" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 bg-blue-700"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 bg-pink-500"
        >
          <FaInstagram className="text-xl" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 bg-red-700"
        >
          <FaYoutube className="text-xl" />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-500 py-4 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <p className="text-center">
            Copyright@2025, <span className='text-black font-bold'>First</span> <span className='text-red-900 font-bold'>Marriage </span>All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;