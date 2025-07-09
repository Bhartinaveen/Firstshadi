import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Paym = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [memberName, setMemberName] = useState('');
  const [plan, setPlan] = useState('7days');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');

  const plans = {
    '7days': { label: '7 Days', price: 49 },
    '3months': { label: '3 Months', price: 499 },
    '6months': { label: '6 Months', price: 899 },
    '1year': { label: '1 Year', price: 1499 },
  };

  const selectedPlan = plans[plan];
  const gst = (selectedPlan.price * 0.18).toFixed(2);
  const total = (selectedPlan.price + parseFloat(gst)).toFixed(2);

  const generateOrderId = () => {
    const datePart = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 12);
    const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit random
    return `ORD${datePart}${randomPart}`;
  };

  const generatePaymentId = () => {
    return 'PAY' + Date.now().toString().slice(-8);
  };

  const handlePayment = () => {
    if (!memberName) {
      alert("Please enter the member name.");
      return;
    }

    const newOrderId = generateOrderId();
    const newPaymentId = generatePaymentId();

    setOrderId(newOrderId);
    setPaymentId(newPaymentId);
    setPaymentSuccess(true);
  };

  useEffect(() => {
    const clearToast = () => {
      if (paymentSuccess) {
        setTimeout(() => setPaymentSuccess(false), 6000);
      }
    };
    clearToast();
  }, [paymentSuccess]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 relative">

        {/* ✅ Payment Success Toast */}
        {paymentSuccess && (
          <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded shadow-lg z-50">
            <div className="font-bold text-lg">✅ Payment Successful</div>
            <div className="mt-2">👤 <b>Member:</b> {memberName}</div>
            <div>📦 <b>Plan:</b> {selectedPlan.label}</div>
            <div>🧾 <b>Order ID:</b> {orderId}</div>
            <div>💳 <b>Payment ID:</b> {paymentId}</div>
            <div>💰 <b>Total Paid:</b> ₹{total}</div>
          </div>
        )}

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-black bg-white px-3 py-1 rounded-full shadow hover:bg-gray-100"
        >
          ← Back
        </button>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md mt-10">
          <div className="bg-black text-white text-center py-2 text-lg font-semibold">
            Pay Membership
          </div>

          <div className="p-6">
            {/* Payment Methods */}
            <h2 className="text-xl font-semibold mb-4">CHOOSE A PAYMENT METHOD *</h2>
            <div className="flex gap-6 mb-6 flex-col md:flex-row">
              {/* Credit Card */}
              <label className="flex-1 border rounded-md p-4 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={() => setPaymentMethod('credit')}
                  className="mr-2"
                />
                <span className="font-medium">Credit Card</span>
                <div className="flex gap-2 mt-2">
                  <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/discover.png" alt="discover" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" className="h-6" />
                </div>
              </label>

              {/* PayPal */}
              <label className="flex-1 border rounded-md p-4 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                <span className="font-medium">Paypal</span>
                <div className="mt-2">
                  <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" className="h-6" />
                </div>
              </label>
            </div>

            {/* Member & Plan */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">MEMBERSHIP</h3>
              <input
                type="text"
                placeholder="Enter Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="border rounded-md p-2 w-full mb-2"
              />

              <div className="mb-3">
                <label className="block font-medium mb-1">Select Plan</label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="border rounded-md p-2 w-full"
                >
                  {Object.entries(plans).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label} - ₹{val.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border rounded-md p-2 mb-1">
                ₹{selectedPlan.price.toFixed(2)} + 18% GST (₹{gst})
              </div>
              <div className="font-bold mt-1">
                Total <span className="float-right">₹{total}</span>
              </div>
            </div>

            {/* Card Fields */}
            {paymentMethod === 'credit' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">CREDIT CARD INFORMATION</h3>
                <div className="flex gap-2 mb-4">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6" alt="visa" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" className="h-6" alt="mastercard" />
                  <img src="https://img.icons8.com/color/48/000000/amex.png" className="h-6" alt="amex" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Card Number" className="border p-2 rounded w-full" />
                  <input type="text" placeholder="Name on Card" className="border p-2 rounded w-full" />
                  <input type="text" placeholder="Expiry Date (MM/YY)" className="border p-2 rounded w-full" />
                  <input type="text" placeholder="CVV" className="border p-2 rounded w-full" />
                </div>
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={paymentSuccess}
              className={`bg-black text-white px-6 py-2 rounded transition ${
                paymentSuccess ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
              }`}
            >
              {paymentSuccess ? 'Paid' : 'Pay Now'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Paym;
