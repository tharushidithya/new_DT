import React from "react";
import { Doughnut } from "react-chartjs-2";
import './Progress.css';
const Progress = ({ cards, sumOfResults }) => {
    const data = {
        labels: ["Weighted", "Remaining"],
        datasets: [
            {
                label: "Progress",
                data: [sumOfResults, 100 - sumOfResults],
                backgroundColor: ["rgb(253, 142, 142)", "rgb(220, 220, 220)"],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || "";
                        let value = context.raw;
                        if (label) {
                            label += ": ";
                        }
                        label += value + "%";
                        return label;
                    },
                },
            },
        },
    };
    console.log("data:", data);

    return (
        <div className="p-chart-container">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default Progress;
