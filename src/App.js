import React from "react";
import './App.css';
import Notification from './Components/Notification/Notification.js';
import KanbanApp from './KanbanApp.js';
import Leftside from './Components/Leftside/Leftside.js';
// import ProjectPage from './components/ProjectPage/ProjectPage';



function App() {
    return (
        <div className="App">
            <Leftside/>
            <div className="AppGlass"><KanbanApp/></div>
            <Notification/>
        </div>

    );
}

export default App;
