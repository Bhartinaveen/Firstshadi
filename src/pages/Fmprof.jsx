import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const generalJobs = ['Private Sector', 'Government', 'Business', 'Not Working'];
const occupations = [
  'Software Engineer', 'Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Electronics Engineer',
  'Data Scientist', 'Doctor', 'Teacher', 'Accountant', 'Lawyer', 'Banker',
  'Professor', 'Designer', 'Pharmacist', 'Police', 'Army Personnel',
  'IAS', 'State PCS', 'SSC CGL Officer', 'SSC CHSL Clerk', 'JE (Junior Engineer)', 'AE (Assistant Engineer)',
  'Marketing Manager', 'Human Resources', 'Pilot', 'Journalist', 'Architect', 'Scientist', 'None',
];
const qualifications = [
  'PhD', 'Postgraduate', 'MCom', 'MA', 'MBA', 'MBBS', 'CA', 'Journalism', 'LLB', 'LLM',
  'BTech', 'BSc', 'BCom', 'BBA', 'BA', 'B.Ed',
  'MPharma', 'BPharma', 'Pharmacy', 'Dentist', 'Agriculture',
  'Hospitality', 'Undergraduate', 'Diploma', 'ITI',
  'Higher Secondary (12th)', '11th', 'Secondary (10th)', 'None'
];


const Fmprof = () => {
  const navigate = useNavigate();

  const [family, setFamily] = useState({
    father: { name: '', job: '', occupation: '', qualification: '' },
    mother: { name: '', job: '', occupation: '', qualification: '' },
    brothers: [{ name: '', job: '', occupation: '', qualification: '' }],
    sisters: [{ name: '', job: '', occupation: '', qualification: '' }],
  });

  const handleChange = (type, index, field, value) => {
    if (type === 'father' || type === 'mother') {
      setFamily({
        ...family,
        [type]: { ...family[type], [field]: value },
      });
    } else {
      const updated = [...family[type]];
      updated[index][field] = value;
      setFamily({ ...family, [type]: updated });
    }
  };

  const addMember = (type) => {
    setFamily({
      ...family,
      [type]: [...family[type], { name: '', job: '', occupation: '', qualification: '' }],
    });
  };

  const removeMember = (type, index) => {
    const updated = [...family[type]];
    updated.splice(index, 1);
    setFamily({ ...family, [type]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      alert('Form submitted successfully!');
    } else {
      form.reportValidity();
    }
  };

  const renderFieldWithDropdown = (value, onChange, options, placeholder) => (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded w-full text-base focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
        value={value}
        onChange={onChange}
      />
      <div className="relative w-full">
        <select
          className="border border-gray-300 p-2 pr-10 rounded w-full text-base bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
          onChange={(e) => onChange(e)}
          value=""
        >
          <option value="">Select</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const getJobOptions = (role) => {
    if (role === 'father' || role === 'brothers') return [...generalJobs, 'Farmer'];
    if (role === 'mother' || role === 'sisters') return [...generalJobs, 'Housewife'];
    return generalJobs;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center py-10 px-4">
        <div className="w-full md:w-3/4 lg:w-2/3 overflow-hidden rounded-t-lg shadow-lg">
          <img
            src="/image/s34.jpg"
            alt="Family"
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
        </div>

        <form
          className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-2xl rounded-b-lg p-6 md:p-10 space-y-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-center text-red-700">About Family</h2>

          {['father', 'mother'].map((role) => (
            <div key={role}>
              <h3 className="text-xl font-semibold text-yellow-800 mb-3 capitalize">{role}'s Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder={`${role.charAt(0).toUpperCase() + role.slice(1)}'s Name`}
                  className="border border-gray-300 p-2 rounded w-full text-base focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  value={family[role].name}
                  onChange={(e) => handleChange(role, null, 'name', e.target.value)}
                />
                {renderFieldWithDropdown(
                  family[role].job,
                  (e) => handleChange(role, null, 'job', e.target.value),
                  getJobOptions(role),
                  'Job'
                )}
                {renderFieldWithDropdown(
                  family[role].occupation,
                  (e) => handleChange(role, null, 'occupation', e.target.value),
                  occupations,
                  'Occupation'
                )}
                {renderFieldWithDropdown(
                  family[role].qualification,
                  (e) => handleChange(role, null, 'qualification', e.target.value),
                  qualifications,
                  'Qualification'
                )}
              </div>
            </div>
          ))}

          {['brothers', 'sisters'].map((relation) => (
            <div key={relation}>
              <h3 className="text-xl font-semibold text-yellow-800 mb-3 capitalize">{relation}</h3>
              <div className="space-y-4">
                {family[relation].map((person, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-gray-50 p-4 rounded shadow-sm"
                  >
                    <input
                      type="text"
                      placeholder={`${relation.slice(0, -1)} ${index + 1} Name`}
                      className="border border-gray-300 p-2 rounded w-full text-base focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                      value={person.name}
                      onChange={(e) => handleChange(relation, index, 'name', e.target.value)}
                    />
                    {renderFieldWithDropdown(
                      person.job,
                      (e) => handleChange(relation, index, 'job', e.target.value),
                      getJobOptions(relation),
                      'Job'
                    )}
                    {renderFieldWithDropdown(
                      person.occupation,
                      (e) => handleChange(relation, index, 'occupation', e.target.value),
                      occupations,
                      'Occupation'
                    )}
                    {renderFieldWithDropdown(
                      person.qualification,
                      (e) => handleChange(relation, index, 'qualification', e.target.value),
                      qualifications,
                      'Qualification'
                    )}
                  </div>
                ))}

                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => addMember(relation)}
                    className="bg-green-600 text-white text-sm px-2 py-1 rounded-md hover:bg-green-700 transition"
                  >
                    + Add
                  </button>
                  <button
                    type="button"
                    onClick={() => removeMember(relation, family[relation].length - 1)}
                    className="bg-red-600 text-white text-sm px-2 py-1 rounded-md hover:bg-red-700 transition"
                    disabled={family[relation].length === 1}
                  >
                    − Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="bg-red-800 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Fmprof;
