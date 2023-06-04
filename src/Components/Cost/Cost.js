import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
// import "./Cost.css";

const Cost = () => {
    const labels = ["Task Est. Budget", "Incurred Cost"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Cost",
                borderColor: "rgb(0,0,0)",
                data: [ 40, 45],
                backgroundColor: [
                    'rgb(157,250,208)',
                    'rgb(203,156,156)',
                ],
            },
            {
                label: "Budget",
                borderColor: "rgb(0,0,0)",
                data: [50, 50, 50],
                type:'line',
                backgroundColor: [
                    'rgb(197,201,204)',
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