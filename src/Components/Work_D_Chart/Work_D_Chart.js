import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const Work_D_Chart = () => {
    const data = {
        labels: [
            'To-Do',
            'In progress',
            'Completed'
        ],
        datasets: [{
            label: 'work distribution',
            data: [300,200, 150],
            backgroundColor: [
                'rgb(253,142,142)',
                'rgb(181,215,99)',
                'rgb(0,93,162)'
            ],
            hoverOffset: 4
        }]
    };
    return (
        <div>
            <Doughnut data={data} />
        </div>
    );

}

export default Work_D_Chart;