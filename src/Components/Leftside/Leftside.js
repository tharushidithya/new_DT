import React from "react";
import "./Leftside.css";
import Progress from '../Progress/Progress.js';
import Cost from '../Cost/Cost.js';

const Leftside = () =>{
    return (
        <div className="bg-color">
            <div className="project-title">Project Title</div>
            <div className="title">Progress</div>
            <div className="progress"><Progress/></div>
            <br/>
            <div className="title">Cost</div>
            <div className="cost"> <Cost/></div>
        </div>
    );
}

export default Leftside;
