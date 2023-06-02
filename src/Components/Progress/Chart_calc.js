import React, { useState } from "react";
import CardInfo from "../Card/CardInfo/CardInfo.js";
import Progress from "./Progress.js";

function Chart_calc() {
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
    };

    const sumOfResults = cards.reduce(
        (total, card) => total + parseInt(card.result),
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
            <Progress cards={cards} sumOfResults={sumOfResults} />
        </div>
    );
}

export default Chart_calc;
