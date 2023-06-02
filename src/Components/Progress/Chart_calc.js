import React, { useState } from "react";
import CardInfo from "../Card/CardInfo/CardInfo.js"; // Import the CardInfo component
import Progress from "./Progress.js"; // Import the Progress component

function Chart_calc() {

    const [setSumOfResults] = useState(0);


    const [cards, setCards] = useState([]);

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

        const newSumOfResults = updatedCards.reduce((total, card) => total + card.result, 0);
        setSumOfResults(newSumOfResults);
    };



    const sumOfResults = cards.reduce(
        (total, card) => total + card.result,
        0
    );

    return (
        <div>
            {cards.map((card, index) => (
                <CardInfo
                    key={index}
                    card={card}
                    onChange={(updatedCard) => handleCardChange(index, updatedCard)}
                    onClose={() => handleRemoveCard(index)}
                />
            ))}
            <Progress result={sumOfResults} /> {/* Render the Progress component */}
        </div>
    );
}

export default Chart_calc;
