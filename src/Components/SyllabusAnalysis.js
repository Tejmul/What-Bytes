import React from "react";

const SyllabusAnalysis = () => {
  const syllabusData = [
    { title: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
    { title: "Tags & References in HTML", progress: 60, color: "bg-orange-500" },
    { title: "Tables & References in HTML", progress: 24, color: "bg-red-500" },
    { title: "Tables & CSS Basics", progress: 96, color: "bg-green-500" },
  ];

  return (
    <div className="max-w-md h-72 mx-auto p-4 w-full bg-white rounded-lg shadow-md border ">
      <h2 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h2>
      {syllabusData.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{item.title}</span>
            <span className="text-sm font-medium text-gray-700">{item.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${item.color}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
