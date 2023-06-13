import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import "./Cost.css";

import { useSelector } from 'react-redux';

const Cost = ({  budget}) => {

    const taskBudget = useSelector((state) => state.taskBudget);
    const cic = useSelector((state) => state.cic);


    console.log("budget cost:", budget);

    // console.log("task budget cost:", taskBudget);


    const labels = ["Task Est. Budget", "Incurred Cost"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Expenditure",
                borderColor: "rgb(0,0,0)",
                data: [taskBudget, cic],
                backgroundColor: ["rgb(157,250,208)", "rgb(203,156,156)"],
            },
            {
                label: "Budget",
                borderColor: "rgb(0,0,0)",
                data: [budget, budget],
                // data: [80, 100 - 80],
                type: "line",
                backgroundColor: ["rgb(197,201,204)"],
            },
        ],
    };

    return (
        <div className="chart-container">
            <Bar data={data} />
        </div>
    );
};

export default Cost;
