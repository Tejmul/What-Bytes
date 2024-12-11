"use client"
import React, { useState } from "react";
import SyllabusAnalysis from "../Components/SyllabusAnalysis";
import StatsCard from "../Components/StatsCard";
import ComparisonGraph from "../Components/ComparisonGraph";
import QuestionAnalysis from "../Components/QuestionAnalysis";

const Dashboard = () => {
    const [stats, setStats] = useState({
        rank: 1,
        percentile: 100,
        correctAnswers: 15,
        totalQuestions: 15
    });

    const handleStatsUpdate = (updatedStats) => {
        setStats(updatedStats);
        console.log("Updated Stats in Parent:", updatedStats); 
    };

    return (
        <div className="flex flex-col m-2 w-full gap-2 md:ml-5">
            <p>Skill Test</p>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col gap-5 w-full">
                    <StatsCard stats={stats} onStatsUpdate={handleStatsUpdate} />
                    <ComparisonGraph />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <SyllabusAnalysis /> 
                    <QuestionAnalysis totalQuestions={stats.totalQuestions} correctAnswers={stats.correctAnswers}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
