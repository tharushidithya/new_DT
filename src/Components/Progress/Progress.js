import React from "react";
import { Doughnut } from "react-chartjs-2";

const Progress = ({ result }) => {
    const data = {
        labels: ["Weighted", "Remaining"],
        datasets: [
            {
                label: "Progress",
                data: [result, 100 - result],
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
