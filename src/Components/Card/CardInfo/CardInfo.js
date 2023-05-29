import React from "react";
import { Edit2, X } from "react-feather";


import Editable from '..////'


import "./CardInfo.css";

function CardInfo(props) {
    const { card, onClose, updateCard } = props;

    const addTaskHandler = (title) => {
        const newTasks = [
            ...card.tasks,
            { id: Date.now() + Math.random() * 2, title, completed: false },
        ];

        const updatedCard = { ...card, tasks: newTasks };
        updateCard(updatedCard);
    };

    const removeTaskHandler = (taskId) => {
        const newTasks = card.tasks.filter((task) => task.id !== taskId);
        const updatedCard = { ...card, tasks: newTasks };
        updateCard(updatedCard);
    };

    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = card.tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        const updatedCard = { ...card, tasks: updatedTasks };
        updateCard(updatedCard);
    };

    return (
        <div className="card-info">
            <div className="card-info_header">
                <Editable
                    text={card.title}
                    placeholder="Enter Card Title"
                    displayClass="card-info_title"
                    editClass="card-info_title_edit"
                    onSubmit={(value) => {
                        const updatedCard = { ...card, title: value };
                        updateCard(updatedCard);
                    }}
                />
                <div className="card-info_header_icons">
                    <Edit2 className="card-info_icon" onClick={onClose} />
                    <X className="card-info_icon" onClick={() => onClose(card.id)} />
                </div>
            </div>
            <div className="card-info_tasks">
                {card.tasks.map((task) => (
                    <div key={task.id} className="card-info_task">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
                        <X className="card-info_task-delete" onClick={() => removeTaskHandler(task.id)} />
                    </div>
                ))}
                <Editable
                    text="+ Add Task"
                    placeholder="Enter Task Title"
                    displayClass="card-info_add-task"
                    editClass="card-info_add-task_edit"
                    onSubmit={addTaskHandler}
                />
            </div>
        </div>
    );
}

export default CardInfo;
