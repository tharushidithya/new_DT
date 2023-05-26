import React, { useEffect, useState } from "react";

import Board from "./Components/Board/Board.js";

import "./KanbanApp.css";
import Editable from "./Components/Editabled/Editable.js";

function KanbanApp() {
  const [boards, setBoards] = useState(
      JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
      <div className="kapp">
        <div className="app_boards_container">
          <div className="app_boards">
            <Board
                key={boards[0]?.id}
                board={boards[0]}
                addCard={addCardHandler}
                removeCard={removeCard}
                updateCard={updateCard}
            >
              <h3>To-do</h3>
            </Board>
            <Board
                key={boards[1]?.id}
                board={boards[1]}
                addCard={addCardHandler}
                removeCard={removeCard}
                updateCard={updateCard}
            >
              <h3>In progress</h3>
            </Board>
            <Board
                key={boards[2]?.id}
                board={boards[2]}
                addCard={addCardHandler}
                removeCard={removeCard}
                updateCard={updateCard}
            >
              <h3>Completed</h3>
            </Board>
          </div>
        </div>
      </div>
  );
}

export default KanbanApp;
