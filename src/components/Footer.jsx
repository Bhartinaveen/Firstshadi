import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white text-sm">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Advanced search</a></li>
            <li><a href="#">Success stories</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Create Horoscope</a></li>
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
            <li><a href="#">Contact us</a></li>
            <li><a href="#">First Marriage.com  </a></li>
          </ul>
        </div>
        

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Fraud Alert</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">3rd party terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookie policy</a></li>
            <li><a href="#">Privacy Features</a></li>
            <li><a href="#">Summons/Notices</a></li>
            <li><a href="#">Grievances</a></li>
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
    
<div className="bg-[#22313f] py-4 px-6 text-sm">
  <div className="max-w-7xl mx-auto flex justify-center items-center">
    <p className="text-center">
   Copyright@2025, Developed by First Marriage.com
    </p>
  </div>
</div>

      
    </footer>
  );
};

export default Footer;
