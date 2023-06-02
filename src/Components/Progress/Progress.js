import React from "react";
import { Doughnut } from "react-chartjs-2";

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

    return (
        <div>
            <Doughnut data={data} />
        </div>
    );
};

export default Progress;
