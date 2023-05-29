import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type, X } from "react-feather";
import Modal from "../../Modal/Modal.js";
import Editable from "../../Editabled/Editable.js";
import "./CardInfo.css";




function CardInfo(props) {


    const [values, setValues] = useState({
        ...props.card,
    });

    const updateTitle = (value) => {
        setValues({ ...values, title: value });
    };

    const updateDesc = (value) => {
        setValues({ ...values, desc: value });
    };


    const [kpi, setKpi] = useState("");
    const [budget, setBudget] = useState("");
    const [weight, setWeight] = useState("");
    const [actualweight, setActualWeight] = useState("");


    const handleKpiChange = (event) => {
        setKpi(event.target.value);
    };

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleActualWeightChange = (event) => {
        setActualWeight(event.target.value);
    };




    const addTask = (value) => {
        const task = {
            id: Date.now() + Math.random() * 2,
            completed: false,
            text: value,
        };
        setValues({
            ...values,
            tasks: [...values.tasks, task],
        });
    };


    const updateTask = (id, field, value) => {
        const tasks = [...values.tasks];
        const taskIndex = tasks.findIndex((item) => item.id === id);
        if (taskIndex < 0) return;

        tasks[taskIndex][field] = value;

        setValues({
            ...values,
            tasks: tasks,
        });
    };



    const updateDate = (fieldName, date) => {
        if (!date) return;

        setValues({
            ...values,
            [fieldName]: date,
        });
    };


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

                <div className="cardinfo_inline_box">
                    <div className="cardinfo_box_title">
                        <List />
                        <p>Description</p>
                    </div>
                    <input
                        type="text"
                        value={values.desc}
                        onChange={(e) => setValues({ ...values, desc: e.target.value })}
                        placeholder="Enter description"
                    />
                </div>


                <div className="cardinfo_inline_box" style={{paddingRight:'2rem', width:'18rem'}}>
                    <div className="cardinfo_box_title">
                        <p>Budget</p>
                    </div>
                    <input
                        type="text"
                        value={values.budget}
                        onChange={(e) => setValues({ ...values, budget: e.target.value })}
                        placeholder="Enter Budget"
                    />
                </div>

                <div className="cardinfo_inline_box" style={{paddingRight:'2rem', width:'18rem' }}>
                    <div className="cardinfo_box_title">
                        <p>KPI</p>
                    </div>
                    <input
                        type="text"
                        value={values.kpi}
                        onChange={(e) => setValues({ ...values, kpi: e.target.value })}
                        placeholder="Enter KPI"
                    />
                </div>


                <div className="cardinfo_inline_boxes">
                    <div className="cardinfo_inline_box">
                        <div className="cardinfo_box_title">
                            <p>Weight</p>
                        </div>
                        <input
                            type="text"
                            value={values.weight}
                            onChange={(e) => setValues({ ...values, weight: e.target.value })}
                            placeholder="Enter Weight"
                        />
                    </div>


                    <div className="cardinfo_inline_box" >
                        <div className="cardinfo_box_title">
                            <p>Actual Weight</p>
                        </div>
                        <input
                            type="text"
                            value={values.actualweight}
                            onChange={(e) => setValues({ ...values, actualweight: e.target.value })}
                            placeholder="Enter Actual Weight"
                        />
                    </div>


                </div>


                <div className="card_dates" >
                    <div className="cardinfo_box" style={{marginRight:'4rem' }}>
                        <div className="cardinfo_box_title">
                            <Calendar />
                            <p>Start Date</p>
                        </div>
                        <input
                            type="date"
                            value={values.startDate || ""}
                            min={values.startDate || new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate("startDate", event.target.value)}
                        />


                    </div>

                    <div className="cardinfo_box" style={{marginRight:'4rem' }}>
                        <div className="cardinfo_box_title">
                            <Calendar />
                            <p>Actual Start Date</p>
                        </div>
                        <input
                            type="date"
                            value={values.actualStartDate || ""}
                            min={values.actualStartDate || new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate("actualStartDate", event.target.value)}
                        />
                    </div>

                    <div className="cardinfo_box" style={{marginRight:'4rem' }}>
                        <div className="cardinfo_box_title">
                            <Calendar />
                            <p>End Date</p>
                        </div>
                        <input
                            type="date"
                            value={values.endDate || ""}
                            min={values.startDate || new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate("endDate", event.target.value)}
                        />
                    </div>


                    <div className="cardinfo_box" style={{marginRight:'4rem' }}>
                        <div className="cardinfo_box_title">
                            <Calendar />
                            <p>Actual End Date</p>
                        </div>
                        <input
                            type="date"
                            value={values.actualEndDate || ""}
                            min={values.actualEndDate || new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate("actualEndDate", event.target.value)}
                        />
                    </div>

                </div>



                <div className="subtask_box">
                    <div className="cardinfo_box">
                        <div className="cardinfo_box_title">
                            <CheckSquare />
                            <p>Sub Tasks</p>
                        </div>

                        <table className="subtask_table">
                            <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Planned Start Date</th>
                                <th>Planned End Date</th>
                                <th>Actual Start Date</th>
                                <th>Actual End Date</th>
                                <th>Status</th>
                                <th>Remark</th>
                                <th>Members Assigned</th>
                            </tr>
                            </thead>
                            <tbody>
                            {values.tasks?.map((item) => (
                                <tr key={item.id} className={"subtask_card"}>
                                    <td >
                                        <input
                                            type="text"
                                            value={item.text}
                                            onChange={(event) =>
                                                updateTask(item.id, "text", event.target.value)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={item.description}
                                            onChange={(event) =>
                                                updateTask(item.id, "description", event.target.value)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <div className="calendar-input">
                                            <input
                                                type="date"
                                                value={item.plannedStartDate || ""}
                                                onChange={(event) =>
                                                    updateTask(item.id, "plannedStartDate", event.target.value)
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="calendar-input">
                                            <input
                                                type="date"
                                                value={item.plannedEndDate || ""}
                                                onChange={(event) =>
                                                    updateTask(item.id, "plannedEndDate", event.target.value)
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="calendar-input">
                                            <input
                                                type="date"
                                                value={item.actualStartDate || ""}
                                                onChange={(event) =>
                                                    updateTask(item.id, "actualStartDate", event.target.value)
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="calendar-input">
                                            <input
                                                type="date"
                                                value={item.actualEndDate || ""}
                                                onChange={(event) =>
                                                    updateTask(item.id, "actualEndDate", event.target.value)
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <select
                                            value={item.status || ""}
                                            onChange={(event) =>
                                                updateTask(item.id, "status", event.target.value)
                                            }
                                        >
                                            <option value="todo">To Do</option>
                                            <option value="inprogress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={item.remark}
                                            onChange={(event) =>
                                                updateTask(item.id, "remark", event.target.value)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={item.membersAssigned}
                                            onChange={(event) =>
                                                updateTask(item.id, "membersAssigned", event.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <button className="addTask" onClick={() => addTask("New Task")}>Add Task</button>
                    </div>
                </div>

            </div>
        </Modal>
    );
}

export default CardInfo;