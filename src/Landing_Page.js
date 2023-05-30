import React, { useState } from 'react';
import video from './Assets/video.mp4.mp4';
import './Landing_Page.css';

const LandingPage = ({ onSubProjectClick, subProjects, onSubProjectButtonClick }) => {
    const [subProjectData, setSubProjectData] = useState('');

    const handleSubProjectDataChange = (e) => {
        setSubProjectData(e.target.value);
    };

    const handleSubProjectClick = () => {
        const subProject = {
            id: subProjects.length + 1, // Generate a unique ID for the sub project
            title: subProjectData
        };
        onSubProjectClick(subProject);
        setSubProjectData('');
    };

    return (
        <div className="landing-page">
            <div className="content-container">
                <div className="home-bannerImage-container">
                    <div className="video-container">
                        <video src={video} autoPlay loop muted className="background-video" />
                    </div>
                </div>
                <div className="content-container">
                    <div className="h1-container">
                        <h1>Digital Transformation Program</h1>
                    </div>
                    <div className="sub-projects-container">
                        <h3 className="sub-projects-heading">Projects :</h3>
                        <input
                            type="text"
                            value={subProjectData}
                            onChange={handleSubProjectDataChange}
                            placeholder="Enter project title"
                            className="sub-project-title-input"
                        />
                        <button className="add-project-button" onClick={handleSubProjectClick}>
                            Create project
                        </button>
                    </div>
                    <ul className="sub-projects-list">
                        {subProjects.map((subProject) => (
                            <li className="sub-project-item" key={subProject.id}>
                                <button
                                    className="sub-project-button"
                                    onClick={() => onSubProjectButtonClick(subProject.id)}
                                >
                                    {subProject.id + ' : ' + subProject.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
