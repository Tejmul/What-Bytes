"use client"
import React, { useState } from 'react';

const Modal = ({ stats, updateStats, closeModal }) => {
  const [formValues, setFormValues] = useState({
    rank: stats.rank,
    percentile: stats.percentile,
    correctAnswers: stats.correctAnswers, 
    totalQuestions: 15
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStats(formValues);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 ">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Update scores</h2>
        <form onSubmit={handleSubmit}>
          {/* Rank Input */}
          <div className="mb-6 flex justify-between items-center">
            <label className="block text-base font-medium text-gray-800 mr-4 w-1/2">1. Update your <span className="font-bold">Rank</span></label>
            <input
              type="number"
              name="rank"
              value={formValues.rank}
              onChange={handleChange}
              className="w-28 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter rank"
            />
          </div>
          {/* Percentile Input hai ye*/}
          <div className="mb-6 flex  justify-between  items-center">
            <label className="block text-base font-medium text-gray-800 mr-4 w-1/2">2. Update your <span className="font-bold">Percentile</span></label>
            <input
              type="number"
              name="percentile"
              value={formValues.percentile}
              onChange={handleChange}
              className="w-28 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter percentile"
            />
          </div>
          {/* Current Score Input hai ji*/}
          <div className="mb-6 flex gap-4  justify-between  items-center">
            <label className="block text-base font-medium text-gray-800 mr-4 w-1/2">3. Update your <span className="font-bold">Current Score (out of 15)</span></label>
            <input
              type="number"
              name="correctAnswers"
              value={formValues.correctAnswers}
              onChange={handleChange}
              className="w-28 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter current score"
            />
          </div>
          {/* Buttons boltey */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md font-medium hover:bg-gray-400 focus:outline-none">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none flex items-center gap-2">
              Save 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
