// LandingPage.js
import React, { useState } from 'react';

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
        <div>
            <h1>Landing Page</h1>
            <button onClick={handleSubProjectClick}>Create Sub Project</button>
            <div>
                {subProjects.map((subProject) => (
                    <button key={subProject.id} onClick={() => onSubProjectButtonClick(subProject.id)}>
                        Sub Project {subProject.id}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
