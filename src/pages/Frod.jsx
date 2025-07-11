import React from 'react';
import Footer from '../components/Footer';

const Frod = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex justify-center items-start p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Security Advisory</h1>
          <p className="text-gray-900 mb-4">
            First Marriage is committed to offering a secure and trustworthy platform where users can search for potential life partners. While we strive to ensure a safe environment, we encourage users to remain vigilant and use personal judgment when interacting on our site.
          </p>

          <p className="text-gray-900 font-semibold mb-2">To protect yourself, please keep these safety tips in mind:</p>
          <ul className="list-disc list-inside text-gray-900 space-y-2">
            <li>
              If you notice a profile with misleading or false information (e.g., fake profession, income, family background), report it using the “Report Profile” feature and avoid further interaction.
            </li>
            <li>
              Do not entertain requests for money, goods, or personal favors such as paying on someone’s behalf. Cease contact with such individuals immediately.
            </li>
            <li>
              Beware of imitation websites pretending to be First Marriage. Always ensure you are visiting <strong className='text-blue-500'>www.firstmarriage</strong>.
            </li>
            <li>
              Fraudulent agents may impersonate our support team to collect membership fees or personal data. Contact our customer care team if you suspect such activity.
            </li>
            <li>
              First Marriage will never ask for your password, OTP, or confidential login details through calls, messages, or emails.
            </li>
            <li>
              Refrain from sharing sensitive data such as your bank account details, credit card numbers, or online banking information.
            </li>
            <li>
              Always meet potential matches in a public place and inform your family or friends beforehand.
            </li>
            <li>
              Perform independent background checks before moving ahead with any commitments.
            </li>
          </ul>

          <p className="text-gray-900 mt-6">
            First Marriage only facilitates initial introductions between individuals. Users must carry out their own due diligence before taking any decision. Verifying the authenticity of a profile rests with the user.
          </p>

          <p className="text-gray-900 font-semibold mt-4">
            If you suspect a fake profile or experience any suspicious behavior, please notify us immediately at{' '}
            <a href="mailto:support@firstmarriage.online" className="text-blue-600 underline">
              support@firstmarriage.online
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frod;
