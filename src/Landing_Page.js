import React, { useState } from 'react';
import HomePage from './Assets/HomePage.jpg';
import './Landing_Page.css';

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
        <div className="landing-page" style={{ backgroundImage: `url(${HomePage})` }}>
            <div className="home-bannerImage-container">
                <div className="h1-container">
                    <h1>DT Program</h1>
                </div>
                <div className="sub-projects-container">
                    <h3 className="sub-projects-heading">Sub projects:</h3>
                    <button className="add-project-button" onClick={handleSubProjectClick}>
                        Create Sub Project
                    </button>
                </div>
                <ul className="sub-projects-list">
                    {subProjects.map((subProject) => (
                        <li className="sub-project-item" key={subProject.id}>
                            <button
                                className="sub-project-button"
                                onClick={() => onSubProjectButtonClick(subProject.id)}
                            >
                                Sub Project {subProject.id}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LandingPage;
