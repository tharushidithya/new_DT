import React from "react";
import "./Leftside.css";
import Progress from "../Progress/Progress.js";
import Cost from "../Cost/Cost.js";
import Chart_calc from "../Progress/Chart_calc.js";
import Work_D_Chart from '../Work_D_Chart/Work_D_Chart.js';

const Leftside = ({ cards }) => {
    const sumOfResults = cards.reduce(
        (total, card) => total + parseInt(card.result),
        0
    );

    return (

    <div>
            <div>
                <div className="title">Progress</div>
                <div className="body">
                    <Progress sumOfResults={sumOfResults} />
                </div>
            </div>
        <div>
            <div className="title">Work distribution</div>
            <div className="body">
                <Work_D_Chart />
            </div>
        </div>
            <div>
                <div className="title">Cost</div>
                <div className="body">
                    <Cost />
                </div>
            </div>
        </div>
    );
};


export default Leftside;
