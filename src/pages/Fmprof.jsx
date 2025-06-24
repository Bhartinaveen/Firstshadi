import React, { useState } from 'react';
import Footer from '../components/Footer';

const jobs = ['Private Sector', 'Government', 'Business', 'Not Working'];
const occupations = [
  'Software Engineer', 'Civil Engineer', 'Data Scientist', 'Doctor', 'Teacher',
  'Accountant', 'Lawyer', 'Banker', 'Professor', 'Designer',
  'Pharmacist', 'Police Officer', 'Army Personnel', 'Sales Executive',
  'Marketing Manager', 'HR Specialist', 'Pilot', 'Journalist',
  'Architect', 'None',
];

const Fmprof = () => {
  const [family, setFamily] = useState({
    father: { name: '', job: '', occupation: '' },
    mother: { name: '', job: '', occupation: '' },
    brothers: [{ name: '', job: '', occupation: '' }],
    sisters: [{ name: '', job: '', occupation: '' }],
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
      [type]: [...family[type], { name: '', job: '', occupation: '' }],
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

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8 px-4 space-y-6">

        {/* Image on Top with increased height */}
        <div className="w-full md:w-2/3 bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src="/image/s34.jpg"
            alt="Family"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Main Form Below Image */}
        <form
          className="w-full md:w-2/3 bg-white shadow-2xl rounded-lg p-6 md:p-8 space-y-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-red-600 text-center">About Family</h2>

          {/* Father & Mother */}
          {['father', 'mother'].map((role) => (
            <div key={role}>
              <h3 className="font-semibold text-lg mb-2 capitalize text-red-800">{role}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={`${role.charAt(0).toUpperCase() + role.slice(1)}'s Name`}
                  className="border border-yellow-600 placeholder-yellow-600 p-2 rounded"
                  required
                  value={family[role].name}
                  onChange={(e) => handleChange(role, null, 'name', e.target.value)}
                />
                <input
                  list="job-options"
                  placeholder="Job"
                  className="border border-yellow-600 placeholder-yellow-600 p-2 rounded"
                  required
                  value={family[role].job}
                  onChange={(e) => handleChange(role, null, 'job', e.target.value)}
                />
                <input
                  list="occupation-options"
                  placeholder="Occupation"
                  className="border border-yellow-600 placeholder-yellow-600 p-2 rounded"
                  required
                  value={family[role].occupation}
                  onChange={(e) => handleChange(role, null, 'occupation', e.target.value)}
                />
              </div>
            </div>
          ))}

          {/* Brothers & Sisters */}
          {['brothers', 'sisters'].map((relation) => (
            <div key={relation}>
              <h3 className="font-semibold text-lg mb-2 capitalize text-red-800">{relation}</h3>
              <div className="space-y-2">
                {family[relation].map((person, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
                  >
                    <input
                      type="text"
                      placeholder={`${relation.slice(0, -1)} ${index + 1} Name`}
                      className="border border-yellow-600 placeholder-yellow-600 p-2 rounded"
                      required
                      value={person.name}
                      onChange={(e) => handleChange(relation, index, 'name', e.target.value)}
                    />
                    <input
                      list="job-options"
                      placeholder="Job"
                      className="border border-yellow-600 placeholder-yellow-600 p-2 rounded"
                      required
                      value={person.job}
                      onChange={(e) => handleChange(relation, index, 'job', e.target.value)}
                    />
                    <input
                      list="occupation-options"
                      placeholder="Occupation"
                      className="border border-yellow-600 placeholder-yellow-600 p-2 rounded"
                      required
                      value={person.occupation}
                      onChange={(e) => handleChange(relation, index, 'occupation', e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeMember(relation, index)}
                      className="bg-red-500 text-white px-3 py-1 rounded md:col-span-3 w-fit"
                      disabled={family[relation].length === 1}
                    >
                      - Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addMember(relation)}
                  className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                >
                  + Add {relation.slice(0, -1).charAt(0).toUpperCase() + relation.slice(1, -1)}
                </button>
              </div>
            </div>
          ))}

          {/* Dropdown Lists */}
          <datalist id="job-options">
            {jobs.map((job, i) => (
              <option key={i} value={job} />
            ))}
          </datalist>

          <datalist id="occupation-options">
            {occupations.map((occ, i) => (
              <option key={i} value={occ} />
            ))}
          </datalist>

          {/* Continue Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-red-900 text-white px-6 py-2 rounded hover:bg-red-800 transition"
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
