"use client"
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ComparisonGraph = () => {
  const data = {
    labels: [0, 10, 25, 50, 75, 90, 100],
    datasets: [
      {
        label: "Percentile Distribution",
        data: [1, 2, 3, 6, 4, 2, 1],
        borderColor: "#7c3aed",
        backgroundColor: "#7c3aed",
        tension: 0.3,
        pointBackgroundColor: "#7c3aed",
        pointBorderColor: "#7c3aed",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full mx-auto bg-white p-6 border  shadow-lg rounded-lg ">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Comparison Graph</h2>
      <p className="text-gray-600 mb-2">
        You scored <span className="font-bold text-gray-800">30% percentile</span>, which is lower than the average percentile of <span className="font-bold">72%</span> of all engineers who took this assessment.
      </p>
      <div className="relative h-64">
        <Line data={data} options={options} />
        <div className="absolute top-[70%] left-[30%] text-sm text-gray-500">Your Percentile</div>
      </div>
    </div>
  );
};

export default ComparisonGraph;