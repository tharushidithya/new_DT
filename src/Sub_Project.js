import React from "react";
import './App.css';
import KanbanApp from './KanbanApp.js';
import Leftside from './Components/Leftside/Leftside.js';

function Sub_Project() {
    return (
        <div className="Sub_Project">
            <div className="container">
                <Leftside/>
                <KanbanApp/>
            </div>
        </div>
    );
}

export default Sub_Project;
