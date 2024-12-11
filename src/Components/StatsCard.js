"use client";
import React, { useState } from "react";
import { FaTrophy, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import Modal from "./Modal";

const StatsCard = ({ stats: initialStats, onStatsUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stats, setStats] = useState(initialStats);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateStats = (updatedStats) => {
        setStats(updatedStats);
        onStatsUpdate(updatedStats);
        closeModal();
    };

    return (
        <div className="bg-white w-full h-full mx-auto">
            <div className="flex justify-between items-center border border-gray-300 shadow-lg rounded-lg p-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">Hyper Text Markup Language</h2>
                    <p className="text-sm text-gray-500">
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                </div>
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none"
                >
                    Update
                </button>
            </div>
            <div className="mt-6 border border-gray-300 shadow-lg rounded-lg p-6">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Quick Statistics</h3>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex items-center">
                        <FaTrophy className="text-yellow-500 w-5 h-5 mr-2" />
                        <p className="text-gray-700 font-medium">Rank:</p>
                        <p className="ml-2 text-gray-900">{stats.rank}</p>
                    </div>
                    <div className="flex items-center">
                        <FaFileAlt className="text-blue-500 w-5 h-5 mr-2" />
                        <p className="text-gray-700 font-medium">Percentile:</p>
                        <p className="ml-2 text-gray-900">{stats.percentile}%</p>
                    </div>
                    <div className="flex items-center">
                        <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />
                        <p className="text-gray-700 font-medium">Correct Answers:</p>
                        <p className="ml-2 text-gray-900">{stats.correctAnswers}/{stats.totalQuestions}</p>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal stats={stats} updateStats={updateStats} closeModal={closeModal} />}
        </div>
    );
};

export default StatsCard;
