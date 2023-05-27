// App.js
import React, { useState } from "react";
import './App.css';
import Landing_Page from "./Landing_Page.js";
import Sub_Project from "./Sub_Project.js";

function App() {
    const [showSubProject, setShowSubProject] = useState(false);

    const handleSubProjectButtonClick = () => {
        setShowSubProject(true);
    };

    return (
        <div className="App">
            <div className="AppGlass">
                {showSubProject ? (
                    <Sub_Project />
                ) : (
                    <Landing_Page onSubProjectButtonClick={handleSubProjectButtonClick} />
                )}
            </div>
        </div>
    );
}

export default App;
