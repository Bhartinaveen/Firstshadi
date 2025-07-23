import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const ALL_CASTES = [
  'Brahmin', 'Rajput', 'Kayastha', 'Bania', 'Yadav', 'Kshatriya', 'Jatav',
  'Gupta', 'Kumhar', 'Kurmi', 'Nai', 'Khatik', 'Chamar', 'Teli',
  'Maurya', 'Sonar', 'Jat', 'Agarwal', 'Mali', 'Vishwakarma',
  'Thakur', 'Ahir', 'Koli', 'Valmiki', 'Pandit', 'Ravidasia',
  'Scheduled Caste', 'Scheduled Tribe', 'OBC', 'General'
];

const ALL_RELIGIONS = [
  'Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Parsi',
  'Jewish', 'Other'
];

// Static sample user data
const userData = [
  {
    name: 'Naveen',
    gender: 'Man',
    phone: '9276898567',
    email: 'bharti9@gmail.com',
    age: '27 years',
    family: '4 (mother, father, 1 brother, 1 sister)',
    religion: 'Hindu',
    motherTongue: 'Hindi',
    caste: 'Brahmin',
    job: 'Government (SSC)',
    hobbies: 'Cricket',
    images: ['/image/s24.jpg'],
  },
  {
    name: 'Anjali',
    gender: 'Woman',
    phone: '7896541230',
    email: 'anjali@gmail.com',
    age: '24 years',
    family: '5 (mother, father, 2 sisters)',
    religion: 'Hindu',
    motherTongue: 'Maithili',
    caste: 'Kayastha',
    job: 'Teacher',
    hobbies: 'Reading',
    images: ['/image/s46.jpg'],
  },
  {
    name: 'Rohit',
    gender: 'Man',
    phone: '9988776655',
    email: 'rohit@gmail.com',
    age: '29 years',
    family: '3 (mother, father)',
    religion: 'Hindu',
    motherTongue: 'Bhojpuri',
    caste: 'Rajput',
    job: 'Engineer',
    hobbies: 'Football',
    images: ['/image/s42.jpg'],
  },
  {
    name: 'Pooja',
    gender: 'Woman',
    phone: '9080706050',
    email: 'pooja@gmail.com',
    age: '25 years',
    family: '4 (mother, father, 1 brother)',
    religion: 'Hindu',
    motherTongue: 'Hindi',
    caste: 'Yadav',
    job: 'Doctor',
    hobbies: 'Painting',
    images: ['/image/s44.jpg'],
  },
  {
    name: 'Vikas',
    gender: 'Man',
    phone: '8123456789',
    email: 'vikas@gmail.com',
    age: '30 years',
    family: '6 (parents, 2 brothers, 1 sister)',
    religion: 'Hindu',
    motherTongue: 'Magahi',
    caste: 'Kurmi',
    job: 'Banker',
    hobbies: 'Travelling',
    images: ['/image/s39.jpg'],
  },
  {
    name: 'Aditi',
    gender: 'Woman',
    phone: '9012345678',
    email: 'aditi@gmail.com',
    age: '26 years',
    family: '3 (mother, father)',
    religion: 'Hindu',
    motherTongue: 'Hindi',
    caste: 'Teli',
    job: 'Designer',
    hobbies: 'Dancing',
    images: ['/image/s35.jpg'],
  },
];

const Ncon = () => {
  const [connections, setConnections] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCaste, setSelectedCaste] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');

  useEffect(() => {
    setConnections(JSON.parse(localStorage.getItem('savedConnections') || '[]'));
  }, []);

  const filtered = connections.filter(p => {
    const textOk = !searchText || (p.name || p.fullName || '')
      .toLowerCase().includes(searchText.trim().toLowerCase());
    const casteOk = selectedCaste ? p.caste === selectedCaste : true;
    const religionOk = selectedReligion ? p.religion === selectedReligion : true;
    return textOk && casteOk && religionOk;
  });

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <div className="flex-grow px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Saved Connections
        </h1>

        {connections.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search by name"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="flex-1 p-2 rounded border border-gray-400"
            />
            <select
              value={selectedCaste}
              onChange={e => setSelectedCaste(e.target.value)}
              className="p-2 rounded border border-gray-400"
            >
              <option value="">All castes</option>
              {ALL_CASTES.map(cs => <option key={cs} value={cs}>{cs}</option>)}
            </select>
            <select
              value={selectedReligion}
              onChange={e => setSelectedReligion(e.target.value)}
              className="p-2 rounded border border-gray-400"
            >
              <option value="">All religions</option>
              {ALL_RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            {(searchText || selectedCaste || selectedReligion) && (
              <button
                onClick={() => {
                  setSearchText('');
                  setSelectedCaste('');
                  setSelectedReligion('');
                }}
                className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* Filtered Connections */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 mb-12">
          {filtered.map((p, idx) => (
            <div key={idx} className="flex flex-col bg-white shadow-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src={p.uploadedImages?.[0] || '/default-avatar.png'}
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover border border-gray-300 mr-4"
                />
                <div className="text-sm space-y-1">
                  <p><strong>Name:</strong> {p.name || p.fullName}</p>
                  <p><strong>Email:</strong> {p.email}</p>
                  <p><strong>Caste:</strong> {p.caste}</p>
                  <p><strong>Religion:</strong> {p.religion}</p>
                </div>
              </div>
              <button
                className="self-start px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700"
              >
                Connect
              </button>
            </div>
          ))}
        </div>

        {/* Static User Cards */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Sample Users</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
          {userData.map((user, idx) => (
            <div key={idx} className="bg-orange-100 border border-red-500 rounded-lg shadow-md p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={user.images[0]}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-lg">Name: {user.name}</p>
                  <p className="text-sm text-pink-800">📞 {user.phone}</p>
                  <p className="text-sm text-indigo-800">📧 {user.email}</p>
                </div>
              </div>
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded mb-4">
                Connect
              </button>
              <div className="bg-gray-100 p-3 rounded text-sm">
                <p><strong>Age:</strong> <span className="text-red-600">{user.age}</span></p>
                <p><strong>Family:</strong> {user.family}</p>
                <p><strong>Religion:</strong> {user.religion}</p>
                <p><strong>Caste:</strong> {user.caste}</p>
                <p><strong>Mother Tongue:</strong> {user.motherTongue}</p>
                <p><strong>Job:</strong> {user.job}</p>
                <p><strong>Hobbies:</strong> {user.hobbies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ncon;
