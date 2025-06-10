import React from 'react';
import Footer from '../components/Footer';
const Terms = () => {
  return (
    <div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Card Header */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Terms & Conditions</h1>
        </div>
        
        {/* Card Body */}
        <div className="p-6 text-gray-800 leading-relaxed">
          <p className="text-sm sm:text-base mb-6">
            Welcome to FirstMarriage.com. By accessing or using our platform, you agree to these Terms & Conditions. If you do not agree, please do not use the platform.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">1. Usage and Purpose</h2>
              <p className="text-sm sm:text-base mt-2">
                FirstMarriage.com is a matrimonial platform for individuals intending to explore potential marriage alliances. It is not a dating or casual contact site.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">2. Account Responsibility</h2>
              <p className="text-sm sm:text-base mt-2">
                Users are responsible for the profiles they create and must have consent from individuals they represent. We reserve the right to remove or reject any profile that violates our policies.
              </p>
              <p className="text-sm sm:text-base mt-2">
                The user must ensure all information provided is accurate. Any misrepresentation may result in termination of the account without notice.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">3. Personal Data</h2>
              <p className="text-sm sm:text-base mt-2">
                Your data may be used to improve matchmaking features and may be shared with third parties only with your consent. Profiles should be accurate and not misleading.
              </p>
              <p className="text-sm sm:text-base mt-2">
                We collect minimal personal data necessary for the service. Users have control over what information they wish to share.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">4. Acceptable Use</h2>
              <p className="text-sm sm:text-base mt-2">
                Users must not upload offensive, false, or harmful content. Any attempts to misuse the platform will result in removal and potential legal action.
              </p>
              <p className="text-sm sm:text-base mt-2">
                Commercial use or unauthorized data scraping from the platform is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">5. Disclaimers</h2>
              <p className="text-sm sm:text-base mt-2">
                We do not guarantee matchmaking outcomes. Any interaction or communication between users is at their own discretion and risk.
              </p>
              <p className="text-sm sm:text-base mt-2">
                FirstMarriage.com is not liable for any financial or emotional loss resulting from user interaction.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">6. Intellectual Property</h2>
              <p className="text-sm sm:text-base mt-2">
                All content, trademarks, and materials on FirstMarriage.com are the property of the company and may not be copied or reused without permission.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">7. Modifications</h2>
              <p className="text-sm sm:text-base mt-2">
                Terms may be updated occasionally. Continued use of the platform implies acceptance of these changes.
              </p>
              <p className="text-sm sm:text-base mt-2">
                We encourage users to periodically review the terms to stay informed of updates.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">8. Contact</h2>
              <p className="text-sm sm:text-base mt-2">
                For queries regarding these terms, please contact us at <a href="mailto:support@firstmarriage.com" className="text-blue-600 underline hover:text-blue-800">support@firstmarriage.com</a>.
              </p>
              <p className="text-sm sm:text-base mt-2">
                Our customer service team is available to assist you Monday through Friday during standard business hours.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Terms;