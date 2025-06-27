import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Rels = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    religion: '',
    community: '',
    caste: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormComplete = form.religion && form.community && form.caste;

  const handleContinue = () => {
    if (isFormComplete) {
      console.log('Form Submitted:', form);
      navigate('/car');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const casteOptions = [
    'Brahmin', 'Rajput', 'Kayastha', 'Yadav', 'Kurmi', 'Kushwaha', 'Teli', 'Baniya',
    'Agarwal', 'Gupta', 'Khatri', 'Sindhi', 'Marwari', 'Maratha', 'Lingayat', 'Chettiar',
    'Nair', 'Reddy', 'Naidu', 'Ezhava', 'SC - Scheduled Caste', 'ST - Scheduled Tribe',
    'OBC - Other Backward Class', 'Patel', 'Jat', 'Koli', 'Meena', 'Ahir', 'Chamar',
    'Bhoi', 'Bheel', 'Gounder', 'Gujjar', 'Kamma', 'Kapu', 'Kharwar', 'Khatik', 'Lodh',
    'Mahajan', 'Mali', 'Maurya', 'Mochi', 'Mudaliar', 'Nadar', 'Pasi', 'Prajapati', 'Rajbhar',
    'Ramdasia', 'Sonar', 'Sutar', 'Thakur', 'Tiwari', 'Tyagi', 'Vanniyar', 'Vishwakarma',
    'Yadav (Ahir)', 'Other'
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 py-6">
        <img
          src="./image/s27.jpg"
          alt="Banner"
          className="w-85 h-70 object-cover rounded-md mb-4 shadow-lg"
        />

        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-xl w-full max-w-md relative">
          {/* Religion */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-sm sm:text-base text-red-800">Religion</label>
            <select
              name="religion"
              value={form.religion}
              onChange={handleChange}
              className="w-full border border-yellow-600 rounded-md px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Select</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Buddhist</option>
              <option>Jewish</option>
              <option>Parsi</option>
            </select>
          </div>

          {/* Community */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-sm sm:text-base text-red-800">Community</label>
            <select
              name="community"
              value={form.community}
              onChange={handleChange}
              className="w-full border border-yellow-600 rounded-md px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Select</option>
              
                <option>Hindu</option>
               
                <option>Bengali</option>
                <option>Marathi</option>
                <option>Punjabi</option>
                <option>Assamese</option>
                <option>Tamil</option>
                <option>Gujarati</option>
                <option>Telugu</option>
                <option>Kannada</option>
                <option>Kashmiri</option>
                <option>Haryanavi</option>
                <option>Himachali/pahari</option>
                {/* <option>kanauji</option> */}
                <option>Ladakhi</option>
                <option>Magahi</option>
                <option>Maithili</option>
                <option>Malayalam</option>
                <option>Manipuri</option>
                {/* <option>Miji</option> */}
                <option>Rajasthani</option>
                <option>Sanskrit</option>
                <option>Santhali</option>
                <option>Urdu</option>
                <option>Bhojpuri</option>
                <option>Odia</option>
                <option>Arunachali</option>
                <option>Other</option>
            </select>
          </div>

          {/* Caste (replacing Country) */}
          <div className="mb-6">
            <label className="block font-semibold mb-1 text-sm sm:text-base text-red-800">Caste</label>
            <select
              name="caste"
              value={form.caste}
              onChange={handleChange}
              className="w-full border border-yellow-600 rounded-md px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Select Caste</option>
              {casteOptions.map((caste) => (
                <option key={caste} value={caste}>{caste}</option>
              ))}
            </select>
          </div>

          {/* Buttons Row */}
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="w-1/2 py-2 rounded-full bg-gray-600 text-white font-semibold text-sm sm:text-base hover:bg-gray-800 transition"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!isFormComplete}
              className={`w-1/2 py-2 rounded-full text-white font-semibold text-sm sm:text-base transition ${
                isFormComplete
                  ? 'bg-gradient-to-r from-red-700 to-red-900 hover:opacity-90'
                  : 'bg-red-300 cursor-not-allowed opacity-50'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rels;
