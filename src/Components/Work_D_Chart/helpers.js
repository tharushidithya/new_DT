import React  from "react";


// helpers.js
export const getBoardWeightSum = (board, weight) => {
    let sum = 0;
    for (const card of board.cards) {
        sum += parseInt(card[weight]) || 0;
    }
    return sum;
};
