// App.js
import React, { useState } from "react";
import './App.css';
import LandingPage from "./Landing_Page.js";
import Sub_Project from "./Sub_Project.js";

function App() {
    const [subProjects, setSubProjects] = useState([]);
    const [activeSubProject, setActiveSubProject] = useState(null);

    const handleSubProjectClick = (subProjectData) => {
        const newSubProject = {
            id: subProjects.length + 1,
            title: subProjectData.title // Store the sub project title
        };
        setSubProjects([...subProjects, newSubProject]);
    };


    const handleSubProjectButtonClick = (subProjectId) => {
        setActiveSubProject(subProjectId);
    };

    return (
        <div className="App">
            <div className="AppGlass">
                {activeSubProject !== null ? (
                    <Sub_Project
                        subProject={subProjects.find(subProject => subProject.id === activeSubProject)}
                        onBackButtonClick={() => setActiveSubProject(null)}
                    />
                ) : (
                    <LandingPage
                        onSubProjectClick={handleSubProjectClick}
                        subProjects={subProjects}
                        onSubProjectButtonClick={handleSubProjectButtonClick}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
