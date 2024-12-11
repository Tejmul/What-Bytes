"use client"
import React, { useState } from "react";
import CircularProgressBar from "../Components/CircularProgress"


const QuestionAnalysis = ({totalQuestions, correctAnswers}) => {
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6  border shadow-lg rounded-lg ">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Question Analysis</h2>
      <p className="text-gray-600 mb-2">
        You scored <span className="font-bold text-gray-800">{correctAnswers} question{correctAnswers > 1 ? "s" : ""}</span> correct out of {totalQuestions}. However, it still needs some improvements.
      </p>
      <div className="flex justify-center items-center h-40 w-40 mx-auto">
        <CircularProgressBar
          percentage={percentage}
          text={`${correctAnswers}/${totalQuestions}`}
        />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
