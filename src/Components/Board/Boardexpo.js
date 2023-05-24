import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type, X } from "react-feather";
import Modal from "../../Modal/Modal.js";
import Editable from "../../Editabled/Editable.js";
import "./CardInfo.css";

function CardInfo(props) {
    const colors = [
        "#a8193d",
        "#4fcc25",
        "#1ebffa",
        "#8da377",
        "#9975bd",
        "#cf61a1",
        "#240959",
    ];

    const [selectedColor, setSelectedColor] = useState();
    const [values, setValues] = useState({
        ...props.card,
    });

    const updateTitle = (value) => {
        setValues({ ...values, title: value });
    };

    const updateDesc = (value) => {
        setValues({ ...values, desc: value });
    };

    const addLabel = (label) => {
        const index = values.labels.findIndex((item) => item.text === label.text);
        if (index > -1) return;

        setSelectedColor("");
        setValues({
            ...values,
            labels: [...values.labels, label],
        });
    };

    const removeLabel = (label) => {
        const tempLabels = values.labels.filter((item) => item.text !== label.text);

        setValues({
            ...values,
            labels: tempLabels,
        });
    };

    const addTask = (value) => {
        const task = {
            id: Date.now() + Math.random() * 2,
            completed: false,
            text: value,
            desc: "", // Added description field for each subtask
            startDate: "", // Added start date field for each subtask
        };
        setValues({
            ...values,
            tasks: [...values.tasks, task],
        });
    };

    const removeTask = (id) => {
        const tasks = [...values.tasks];

        const tempTasks = tasks.filter((item) => item.id !== id);
        setValues({
            ...values,
            tasks: tempTasks,
        });
    };

    const updateTask = (id, field, value) => {
        const tasks = [...values.tasks];

        const index = tasks.findIndex((item) => item.id === id);
        if (index < 0) return;

        tasks[index][field] = value;

        setValues({
            ...values,
            tasks,
        });
    };

    const calculatePercent = () => {
        if (!values.tasks?.length) return 0;
        const completed = values.tasks?.filter((item) => item.completed)?.length;
        return (completed / values.tasks?.length) * 100;
    };

    const updateDate = (id, date, field) => {
        if (!date) return;

        updateTask(id, field, date);
    };

    useEffect(() => {
        setValues({ ...props.card }); // Initialize values with props.card when component mounts
    }, [props.card]);

    useEffect(() => {
        if (props.updateCard) props.updateCard(props.boardId, values.id, values);
    }, [values]);

    return (
        <Modal onClose={props.onClose}>
            <div className="cardinfo">
                <div className="cardinfo_box">
                    <div className="cardinfo_box_title">
                        <Type />
                        <p>Title</p>
                    </div>
                    <Editable
                        defaultValue={values.title}
                        text={values.title}
                        placeholder="Enter Title"
                        onSubmit={updateTitle}
                    />
                </div>

                <div className="cardinfo_box">
                    <div className="cardinfo_box_title">
                        <List />
                        <p>Description</p>
                    </div>
                    <Editable
                        defaultValue={values.desc}
                        text={values.desc || "Add a Description"}
                        placeholder="Enter description"
                        onSubmit={updateDesc}
                    />
                </div>

                <div className="card_dates" style={{ display: "flex", gap: "20px" }}>
                    <div className="cardinfo_box">
                        <div className="cardinfo_box_title">
                            <Calendar />
                            <p>Start Date</p>
                        </div>
                        <input
                            type="date"
                            value={values.startDate || ""}
                            min={values.startDate || new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate(values.id, event.target.value, "startDate")}
                        />
                    </div>

                    <div className="cardinfo_box">
                        <div className="cardinfo_box_title">
                            <Calendar />
                            <p>End Date</p>
                        </div>
                        <input
                            type="date"
                            value={values.endDate || ""}
                            min={values.startDate || new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate(values.id, event.target.value, "endDate")}
                        />
                    </div>
                </div>


                <div className="cardinfo_box">
                    <div className="cardinfo_box_title">
                        <Tag />
                        <p>Labels</p>
                    </div>
                    <div className="cardinfo_box_labels">
                        {values.labels?.map((item, index) => (
                            <label
                                key={index}
                                style={{ backgroundColor: item.color, color: "#fff" }}
                            >
                                {item.text}
                                <X onClick={() => removeLabel(item)} />
                            </label>
                        ))}
                    </div>
                    <ul>
                        {colors.map((item, index) => (
                            <li
                                key={index + item}
                                style={{ backgroundColor: item }}
                                className={selectedColor === item ? "li_active" : ""}
                                onClick={() => setSelectedColor(item)}
                            />
                        ))}
                    </ul>
                    <Editable
                        text="Add Label"
                        placeholder="Enter label text"
                        onSubmit={(value) =>
                            addLabel({ color: selectedColor, text: value })
                        }
                    />
                </div>

                <div className="subtask_box">
                    <div className="cardinfo_box">
                        <div className="cardinfo_box_title">
                            <CheckSquare />
                            <p>Sub Tasks</p>
                        </div>
                        <div className="cardinfo_box_progress-bar">
                            <div
                                className="cardinfo_box_progress"
                                style={{
                                    width: `${calculatePercent()}%`,
                                    backgroundColor:
                                        calculatePercent() === 100 ? "limegreen" : "",
                                }}
                            />
                        </div>


                        <div className="cardinfo_box_task_list">
                            {values.tasks?.map((item) => (
                                <div key={item.id} className="cardinfo_box_task_checkbox">
                                    <input
                                        type="checkbox"
                                        defaultChecked={item.completed}
                                        onChange={(event) =>
                                            updateTask(item.id, "completed", event.target.checked)
                                        }
                                    />
                                    <div style={{marginTop:'50px'}}>
                                        <Editable
                                            defaultValue={item.text}
                                            text={item.text }
                                            placeholder="Enter task"
                                            onSubmit={(value) => updateTask(item.id, "text", value)}

                                        />
                                        <br/>

                                        <Editable
                                            defaultValue={item.desc}
                                            text={item.desc || "Add a Description"}
                                            placeholder="Enter description"
                                            onSubmit={(value) =>
                                                updateTask(item.id, "desc", value)
                                            }

                                        />

                                    </div>

                                    <div style={{padding: '3rem'}}>
                                        <h4>Start date</h4>
                                        <Calendar />
                                        <input
                                            type="date"
                                            defaultValue={item.startDate}
                                            min={new Date().toISOString().substr(0, 10)}
                                            onChange={(event) =>
                                                updateDate(item.id, event.target.value)
                                            }
                                        />
                                    </div>
                                    <Trash onClick={() => removeTask(item.id)} />
                                </div>
                            ))}
                        </div>
                        <br/>
                        <Editable
                            text={"Add a sub task"}
                            placeholder="Enter task"
                            onSubmit={addTask}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default CardInfo;