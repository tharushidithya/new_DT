import React, { useState } from 'react';
import "./Landing_Page.css";

const LandingPage = ({ onSubProjectClick, subProjects, onSubProjectButtonClick }) => {
    const [subProjectData, setSubProjectData] = useState('');

    const handleSubProjectDataChange = (e) => {
        setSubProjectData(e.target.value);
    };

    const handleSubProjectClick = () => {
        onSubProjectClick(subProjectData);
        setSubProjectData('');
    };

    return (
        <div className="landing-page">
            <div className="h1-container">
                <h1>DT Program</h1>
            </div>
            <div className="sub-projects-container">
                <h3 className="sub-projects-heading">Sub projects:</h3>
                <button className="add-project-button" onClick={handleSubProjectClick}>Create Sub Project</button>
            </div>
            <div>
                {subProjects.map((subProject) => (
                    <button className="sub-project-button" key={subProject.id} onClick={() => onSubProjectButtonClick(subProject.id)}>
                        Sub Project {subProject.id}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
