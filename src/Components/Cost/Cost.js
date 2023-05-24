import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
// import "./Cost.css";

const Cost = () => {
    const labels = ["Actual cost", "Planned cost", "Budget"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Cost",
                borderColor: "rgb(0,93,162)",
                data: [50, 40, 45],
                backgroundColor: [
                    'rgb(16,94,5)',
                    'rgb(255,155,26)',
                    'rgb(83,167,220)'
                ],
            },
        ],
    };
    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default Cost;