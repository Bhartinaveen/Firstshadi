import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Memb = () => {
  const navigate = useNavigate();

  const features = [
    { title: "Explore Profiles", free: true, paid: true },
    { title: "Express Interest", free: true, paid: true },
    { title: "Chat without limits", free: true, paid: true },
    { title: "Receive triple match suggestions", free: true, paid: true },
    { title: "Advanced filter tools", free: true, paid: true },
   
    { title: "Priority profile highlights", free: true, paid: true },
    { title: "Verified Profile", free: true, paid: true }, // ✅ Added Verified Profile to both
     { title: "Access contact info", free: false, paid: true },
    { title: "HD video and voice calls", free: false, paid: true },
  ];

  const handleJoinFree = () => {
    navigate('/grm');
  };

  const handleSeePremiumPlans = () => {
    navigate('/grm');
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-red-700 mb-2">Membership Options</h2>
          <p className="text-blue-900 mb-10">Pick the plan that fits your connection goals best.</p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Free Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-blue-900">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Starter Access</h3>
              <ul className="space-y-4 text-left">
                {features.map((item, index) => (
                  <li key={index} className={`flex items-center ${item.free ? "text-gray-800" : "text-gray-400"}`}>
                    {(item.title === "Access contact info" || item.title === "HD video and voice calls") ? (
                      <XCircleIcon className="w-5 h-5 text-red-500 mr-2" />
                    ) : (
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    )}
                    {item.title}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleJoinFree}
                className="mt-6 w-full bg-red-900 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold"
              >
                Join Free
              </button>
            </div>

            {/* Paid Plan */}
            <div className="bg-indigo-900 text-white rounded-xl shadow-lg p-8 border-t-8 border-yellow-400">
              <h3 className="text-2xl font-semibold mb-6">Complete Access</h3>
              <ul className="space-y-4 text-left">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-yellow-300 mr-2" />
                    {item.title}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleSeePremiumPlans}
                className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-indigo-900 py-2 rounded-lg font-semibold"
              >
                See Premium Plans
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Memb;
