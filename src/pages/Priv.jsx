import React from 'react';
import Footer from '../components/Footer';
const PrivacyPolicy = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-red-800 p-3">
            <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
            
          </div>

          {/* Content */}
          <div className="p-4 space-y-6">
            {/* Section 1 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">1. Introduction</h2>
              <p className="text-gray-900 mb-1">
                At First    Marriage.com ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services.
              </p>
              <p className="text-gray-900">
                This policy applies to all visitors, users, and others who access our service ("Users"). By using First Marriage.com, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">2. Information We Collect</h2>
              <p className="text-gray-900 mb-1">
                We collect several types of information to provide and improve our services to you:
              </p>
              <ul className="list-disc pl-6 text-gray-900 space-y-1 mb-3">
                <li>Personal details such as name, email address, date of birth, phone number, and gender</li>
                <li>Profile information including education, occupation, income, and marital preferences</li>
                <li>Photos and other media you choose to upload</li>
                <li>Communication data when you interact with other users</li>
                <li>Technical data including IP address, browser type, and device information</li>
                <li>Usage data about how you interact with our platform</li>
              </ul>
              <p className="text-gray-900">
                We may collect sensitive personal data only with your explicit consent, which you can withdraw at any time.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">3. How We Use Your Information</h2>
              <p className="text-gray-900 mb-3">We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 text-gray-900 space-y-1 mb-3">
                <li>To create and manage your account</li>
                <li>To provide personalized matchmaking services</li>
                <li>To communicate with you about matches and service updates</li>
                <li>To improve our platform and develop new features</li>
                <li>To prevent fraud and ensure platform security</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="text-gray-900">
                Your profile information (excluding contact details) may be visible to other users to facilitate matches.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-900 mb-3">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-900 space-y-1 mb-1">
                <li>Essential cookies for platform functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p className="text-gray-900">
                You can control cookies through your browser settings, but disabling them may affect certain features.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">5. Information Sharing</h2>
              <p className="text-gray-900 mb-1">
                We may share your information in these limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-900 space-y-1 mb-3">
                <li>With service providers who assist in platform operations</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with business transfers like mergers or acquisitions</li>
              </ul>
              <p className="text-gray-900">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">6. Data Security</h2>
              <p className="text-gray-900">
                We implement appropriate technical and organizational measures to protect your personal data. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">7. Children's Privacy</h2>
              <p className="text-gray-900">
                Our services are intended for users aged 18 and above. We do not knowingly collect information from minors. If we become aware of such collection, we will take steps to delete the information.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">8. Changes to This Policy</h2>
              <p className="text-gray-900">
                We may update this Privacy Policy periodically. We will notify you of significant changes through our platform or via email. Your continued use after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h2 className="text-1xl font-semibold text-blue-900 mb-1">9. Contact Us</h2>
              <p className="text-gray-900">
                If you have questions about this Privacy Policy or your personal data, please contact our Data Protection Officer at <span className="text-indigo-600">privacy@firstmarriage.com</span>.
              </p>
            </div>
          </div>

          {/* Footer */}
          
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;