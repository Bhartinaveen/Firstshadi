import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0); 
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // This effect simulates receiving new notifications.
  // The logic here remains the same.
  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationCount(prevCount => prevCount + 1);
    }, 4000); 

    return () => clearInterval(interval);
  }, []); 

  // This effect handles closing the menu when clicking outside.
  // No changes needed here.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed h-18 top-0 left-0 w-full bg-[#f5fdd5] px-6 py-2 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 -translate-y-4 -translate-x-4">
            <Link to="/">
              <img src="/image/l2.png" alt="Logo" className="h-21 w-21" />
            </Link>
            <span className="-translate-x-4 font-bold text-[#0a0a0a]">First</span>
            <span className="-translate-x-5 font-bold text-red-700">Marriage</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium -translate-y-3">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/mymatch">My Matches</Link>
            <Link to="/myprofile">My Profile</Link>
            <Link to="/contact">Contact Us</Link>
            
            {/* --- MODIFIED NOTIFICATION ICON (Desktop) --- */}
            <Link to="/notifications" className="relative">
              <Bell className="h-6 w-6" />
              {notificationCount > 0 && (
                // This span now renders a simple dot instead of the count.
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#f5fdd5]" />
              )}
            </Link>
            
            <Link to="/signin" className="font-semibold">Sign In</Link>
            <a
              href="https://wa.me/+919040170727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-semibold"
            >
              Chat
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4 -translate-y-4">
             {/* --- MODIFIED NOTIFICATION ICON (Mobile) --- */}
             <Link to="/notifications" className="relative">
              <Bell className="h-6 w-6" />
              {notificationCount > 0 && (
                 // This span also renders a simple dot.
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-[#f5fdd5]" />
              )}
            </Link>
            <button onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-[400px] w-2/4 sm:w-1/2 bg-[#fb9c7c] shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex flex-col items-start p-6 space-y-4 text-gray-800 font-medium">
            <button onClick={toggleMenu} className="self-end">
              <X className="h-6 w-6" />
            </button>
            <Link to="/" onClick={toggleMenu}>🏠 Home</Link>
            <Link to="/about" onClick={toggleMenu}>🧑‍💼 About Us</Link>
            <Link to="/mymatch" onClick={toggleMenu}>❤️ My Matches</Link>
            <Link to="/myprofile" onClick={toggleMenu}>🧑‍💼 My Profile</Link>
            <Link to="/notifications" onClick={toggleMenu}>🔔 Notifications</Link>
            <Link to="/contact" onClick={toggleMenu}>📞 Contact Us</Link>
            <Link to="/signin" onClick={toggleMenu} className="font-semibold">🔐 Sign In</Link>
            <a
              href="https://wa.me/+919040170727"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              ❓ Chat
            </a>
          </div>
        </div>
      </nav>

      {/* Push content below the fixed navbar */}
      <div className="pt-18" />
    </>
  );
};

export default Navbar;