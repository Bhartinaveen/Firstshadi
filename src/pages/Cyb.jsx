import React from 'react';
import Footer from '../components/Footer';

const Cyb = () => {
  return (
    <div>
    <div className="max-w-2xl mx-auto p-6 text-sm text-gray-800 font-sans">
      <h1 className="text-2xl font-bold text-center mb-8">
        <span className="text-red-700">Cyber </span>
        <span className="text-red-700">Security</span>
      </h1>

      <div className="space-y-6">
        {/* 1 */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-blue-900 font-bold mb-1">1. Data Protection</h2>
          <p>
            We prioritize the protection of your personal and financial data through encryption, secure servers, and advanced cybersecurity protocols.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-blue-900 font-bold mb-1">2. Secure Transactions</h2>
          <p>
            All payment transactions are processed through secure and trusted platforms with end-to-end encryption to prevent unauthorized access.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-blue-900 font-bold mb-1">3. Threat Monitoring</h2>
          <p>
            Our systems are continuously monitored for suspicious activities, and we employ advanced threat detection tools to proactively respond to potential risks.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-blue-900 font-bold mb-1">4. Account Security</h2>
          <p>
            We encourage users to use strong, unique passwords and offer two-factor authentication (2FA) to enhance account protection.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-blue-900 font-bold mb-1">5. Incident Response</h2>
          <p>
            In the event of a cybersecurity breach, we have an incident response plan to immediately contain, investigate, and resolve any threats while keeping affected users informed.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-blue-900 font-bold mb-1">6. Your Role in Security</h2>
          <p>
            We recommend that users regularly update passwords, avoid sharing login details, and report any suspicious activities immediately to our support team.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Cyb;
