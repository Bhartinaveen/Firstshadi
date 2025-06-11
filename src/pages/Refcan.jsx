import React from 'react';
import Footer from '../components/Footer';

const Refcan = () => {
  return (
    <div>
    <div className="max-w-4xl mx-auto p-6 text-gray-800 text-sm leading-6">
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-red-700">
          Cancellation & Refund Policy
        </h1>
        <p className="mb-4">
          At <strong>First<span className="text-red-600">Marriage.com</span></strong>, we strive to ensure that our users have a safe, smooth, and satisfactory experience. The following policy outlines the terms regarding cancellation of memberships and refunds.
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            Subscription plans once purchased are <span className="text-red-600 font-semibold">non-transferable</span> and <span className="text-red-600 font-semibold">non-refundable</span> after 24 hours of activation.
          </li>
          <li>
            Users may request cancellation within <strong>24 hours of purchase</strong> if no premium features (like contact view, chat, or call) have been used. In such cases, a partial refund may be considered after deduction of service charges.
          </li>
          <li>
            No refunds will be issued for profile deletions, inactive usage, or unsuccessful match outcomes.
          </li>
          <li>
            Refund requests must be submitted through our official support email or helpdesk with valid reason and payment proof.
          </li>
          <li>
            Approved refunds (if any) will be processed within <strong>7–10 business days</strong> to the original payment method.
          </li>
          <li>
            Add-on services such as profile boosting, horoscope match, or verification badges are <span className="text-red-600 font-semibold">non-refundable</span> once activated.
          </li>
          <li>
            Refunds will not be entertained for any dissatisfaction due to personal choices, mismatched preferences, or lack of responses.
          </li>
          <li>
            In case of duplicate payments due to technical errors, verified excess amounts will be refunded within 10 days after validation.
          </li>
          <li>
            In case of fraudulent or unauthorized use of the account, First<span className="text-red-600">Marriage.com</span> reserves the right to suspend access without any refund.
          </li>
          <li>
            Any exceptions due to unforeseen circumstances will be handled solely at the discretion of <strong>First<span className="text-red-600">Marriage.com</span></strong> support team.
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Refcan;
