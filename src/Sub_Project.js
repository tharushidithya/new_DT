import React from "react";
import './App.css';
import KanbanApp from './KanbanApp.js';
import Leftside from './Components/Leftside/Leftside.js';

function Sub_Project({ subProject, onBackButtonClick }) {
    return (
        <div className="Sub_Project">
            <div className="container">
                <h2 className="project_title"> {subProject.id + ' ' + subProject.title}</h2>
                <button className="back_button" onClick={onBackButtonClick}><span>&#8680;</span></button>
                {/* Render the subproject page content */}
                <Leftside />
                <KanbanApp />
            </div>
        </div>
    );
}

export default Sub_Project;
