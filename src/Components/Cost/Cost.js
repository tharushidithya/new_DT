import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import "./Cost.css";

const Cost = ({ budget }) => {
    console.log("budget cost:", budget);
    const labels = ["Task Est. Budget", "Incurred Cost"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Expenditure",
                borderColor: "rgb(0,0,0)",
                data: [55, 38],
                backgroundColor: ["rgb(157,250,208)", "rgb(203,156,156)"],
            },
            {
                label: "Budget",
                borderColor: "rgb(0,0,0)",
                // data: [budget, budget],
                data: [80, 80],
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
