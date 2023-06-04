import React, { useState } from "react";
import './App.css';
import KanbanApp from './KanbanApp.js';
import Leftside from './Components/Leftside/Leftside.js';
import Project_title from './Components/Project_title.js';

function Sub_Project({ subProject, onBackButtonClick, props }) {
    const [cards, setCards] = useState([]);
    const [budget, setBudget] = useState(0);
    
    const handleAddCard = () => {
        setCards([...cards, { weight: "", achievedWeight: "", result: 0 }]);
    };

    const handleRemoveCard = (index) => {
        const updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
    };

    const handleCardChange = (index, updatedCard) => {
        const updatedCards = [...cards];
        updatedCards[index] = updatedCard;
        setCards(updatedCards);
    };

    const sumOfResults = cards.reduce(
        (total, card) => total + parseInt(card.result),
        0
    );

    return (
        <div className="Sub_Project">
            <div className="container scrollable">
                <div className="column-container">
                    <h2 className="project_title">{subProject.id + ' ' + subProject.title}</h2>
                    <Project_title {...props} budget={budget} />
                    <Leftside cards={cards} sumOfResults={sumOfResults} />
                </div>
                <button className="back_button" onClick={onBackButtonClick}><span>&#8680;</span></button>
                {/* Render the subproject page content */}
                <KanbanApp />
            </div>
        </div>
    );
}

export default Sub_Project;
