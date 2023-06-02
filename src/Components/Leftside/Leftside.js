import React from "react";
import "./Leftside.css";
import Progress from '../Progress/Progress.js';
import Cost from '../Cost/Cost.js';

const Leftside = ({ cards, sumOfResults }) => {
    return (
        <div>
            <div>
                <div className="P_title">Progress</div>
                <div className="progress">
                    <Progress cards={cards} sumOfResults={sumOfResults} />
                </div>
            </div>
            <div>
                <div className="C_title">Cost</div>
                <div className="cost">
                    <Cost />
                </div>
            </div>
        </div>
    );
}

export default Leftside;
