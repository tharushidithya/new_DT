// LandingPage.js
import React, { useState } from 'react';

const LandingPage = ({ onSubProjectButtonClick }) => {
    const [subProjects, setSubProjects] = useState([]);

    const handleSubProjectClick = () => {
        setSubProjects([...subProjects, {}]);
    };

    const handleSubProjectButtonClick = () => {
        console.log('Sub project button clicked');
        onSubProjectButtonClick(); // Call the callback function passed from App.js
    };

    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={handleSubProjectClick}>Create Sub Project</button>
            {subProjects.map((_, index) => (
                <button key={index} onClick={handleSubProjectButtonClick}>
                    Sub Project {index + 1}
                </button>
            ))}
        </div>
    );
};

export default LandingPage;
