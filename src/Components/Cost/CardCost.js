import React, { useState } from "react";


function CardCost(props) {

    const [values, setValues] = useState({
        ...props.card,
        ...props.cardId,
        ...props.boardId,
        ...props.boardId,
        ...props.boardId,
    });

}