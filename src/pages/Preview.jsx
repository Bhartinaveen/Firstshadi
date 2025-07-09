import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // required for accessibility

const Preview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!data) return <div className="text-center text-lg text-red-600">No profile data found!</div>;

  const {
    profileFor, firstName, lastName, dob,
    country, state, city, qualification, employedIn, occupation, income, currentAddress, permanentAddress,
    birthPlace, favColor, favSong, favMovies, height, weight, manglik,
    faceColor, bodyShape, rashi, bloodGroup, photos = [], aboutYourself,
    father, mother, brothers = [], sisters = [],
  } = data;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-8">Full Profile Preview</h2>

      {/* Image Thumbnails (Circular) */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {photos.map((file, idx) => (
          <img
            key={idx}
            src={URL.createObjectURL(file)}
            alt={`Photo ${idx + 1}`}
            className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500 cursor-pointer transition hover:scale-105"
            onClick={() => {
              setSelectedIndex(idx);
              setModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* Image Modal Gallery */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Image Viewer"
        className="bg-white max-w-3xl mx-auto mt-20 rounded-lg shadow-lg p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start"
      >
        <div className="flex flex-col items-center space-y-4">
          <img
            src={URL.createObjectURL(photos[selectedIndex])}
            alt="Full View"
            className="max-w-full h-[400px] object-contain rounded-lg"
          />
          <div className="flex justify-between w-full">
            <button
              onClick={() => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              ◀ Prev
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Close
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev + 1) % photos.length)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Next ▶
            </button>
          </div>
        </div>
      </Modal>

      {/* Main Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><strong>Profile For:</strong> {profileFor}</div>
        <div><strong>Name:</strong> {firstName} {lastName}</div>
        <div><strong>Date of Birth:</strong> {dob}</div>
        <div><strong>Birth Place:</strong> {birthPlace}</div>
        <div><strong>Country:</strong> {country}</div>
        <div><strong>State:</strong> {state}</div>
        <div><strong>City:</strong> {city}</div>
        <div><strong>Qualification:</strong> {qualification}</div>
        <div><strong>Employed In:</strong> {employedIn}</div>
        <div><strong>Occupation:</strong> {occupation}</div>
        <div><strong>Income:</strong> {income}</div>
        <div><strong>Current Address:</strong> {currentAddress}</div>
        <div><strong>Permanent Address:</strong> {permanentAddress}</div>
        <div><strong>Height:</strong> {height}</div>
        <div><strong>Weight:</strong> {weight}</div>
        <div><strong>Manglik:</strong> {manglik}</div>
        <div><strong>Face Color:</strong> {faceColor}</div>
        <div><strong>Body Shape:</strong> {bodyShape}</div>
        <div><strong>Rashifal:</strong> {rashi}</div>
        <div><strong>Blood Group:</strong> {bloodGroup}</div>
        <div><strong>Favorite Color:</strong> {favColor}</div>
        <div><strong>Favorite Song:</strong> {favSong}</div>
        <div><strong>Favorite Movies:</strong> {favMovies}</div>
        <div className="md:col-span-2"><strong>About Yourself:</strong> {aboutYourself}</div>
      </div>

      {/* Family Info */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Family Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg text-yellow-700">Father</h4>
            <p><strong>Name:</strong> {father?.name}</p>
            <p><strong>Job:</strong> {father?.job}</p>
            <p><strong>Occupation:</strong> {father?.occupation}</p>
            <p><strong>Qualification:</strong> {father?.qualification}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-yellow-700">Mother</h4>
            <p><strong>Name:</strong> {mother?.name}</p>
            <p><strong>Job:</strong> {mother?.job}</p>
            <p><strong>Occupation:</strong> {mother?.occupation}</p>
            <p><strong>Qualification:</strong> {mother?.qualification}</p>
          </div>
        </div>

        {/* Brothers */}
        {brothers.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-lg text-yellow-700">Brothers</h4>
            {brothers.map((bro, i) => (
              <div key={i} className="border p-2 my-2 rounded">
                <p><strong>Name:</strong> {bro.name}</p>
                <p><strong>Job:</strong> {bro.job}</p>
                <p><strong>Occupation:</strong> {bro.occupation}</p>
                <p><strong>Qualification:</strong> {bro.qualification}</p>
              </div>
            ))}
          </div>
        )}

        {/* Sisters */}
        {sisters.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-lg text-yellow-700">Sisters</h4>
            {sisters.map((sis, i) => (
              <div key={i} className="border p-2 my-2 rounded">
                <p><strong>Name:</strong> {sis.name}</p>
                <p><strong>Job:</strong> {sis.job}</p>
                <p><strong>Occupation:</strong> {sis.occupation}</p>
                <p><strong>Qualification:</strong> {sis.qualification}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Preview;
