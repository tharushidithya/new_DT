import React from "react";
import { Bar } from "react-chartjs-2";
import "./Cost.css";

const Cost = ({ budget }) => {
    const labels = ["Task Est. Budget", "Incurred Cost"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Cost",
                borderColor: "rgb(0,0,0)",
                data: [ 50, 20],
                backgroundColor: [
                    'rgb(157,250,208)',
                    'rgb(203,156,156)',
                ],
            },
            {
                label: "Budget",
                borderColor: "rgb(0,0,0)",
                data: [budget, budget],
                type:'line',
                backgroundColor: [
                    'rgb(197,201,204)',
                ],
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