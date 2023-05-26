import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  X,
} from "react-feather";

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


            {/* KPI text box */}
            <div >
              <div className="cardinfo_box_title" style={{paddingRight:'2rem' }}>
              <p>Budget</p>
            </div>
          <input
              type="text"
              value={values.budget}
              onChange={(e) => setValues({ ...values, budget: e.target.value })}
              placeholder="Enter Budget"
          />
            </div>


            {/* Budget text box */}
            <div className="cardinfo_inline_box" style={{paddingRight:'2rem' }}>
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
            {/* Weight text box */}
            <div className="cardinfo_inline_box" style={{paddingRight:'2rem' }}>
              <div className="cardinfo_box_title">
                <Tag />
                <p>Weight</p>
              </div>
              <input
                  type="text"
                  value={values.weight}
                  onChange={(e) => setValues({ ...values, weight: e.target.value })}
                  placeholder="Enter Weight"
              />
            </div>


            <div className="cardinfo_inline_box">
              <div className="cardinfo_box_title">
                <Tag />
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


          <div className="card_dates" style={{ display: "flex", gap: "20px", paddingBottom:"1rem", paddingTop:"1rem" }}>
            <div className="cardinfo_box">
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

            <div className="cardinfo_box">
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
          </div>



          <div className="subtask_box">
            <div className="cardinfo_box">
              <div className="cardinfo_box_title">
                <CheckSquare />
                <p>Sub Tasks</p>
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
                      <div>
                        <div style={{ marginTop: "60px" }}>
                          <Editable
                              text={item.text}
                              placeholder="Enter task"
                              onSubmit={(value) => updateTask(item.id, "text", value)}
                          /></div>
                        <br />
                        {/* Add a text box for the description */}
                        <textarea
                            className="taskDescription"
                            value={item.description}
                            onChange={(event) =>
                                updateTask(item.id, "description", event.target.value)
                            }
                            placeholder="Enter description"
                        />



                      </div>
                      <div style={{ padding: "3rem", marginBottom:'1rem' }}>
                        <h4>Start date</h4>
                        <Calendar />
                        <input
                            type="date"
                            defaultValue={item.startDate}
                            min={new Date().toISOString().substr(0, 10)}
                            onChange={(event) => updateDate(item.id, event.target.value)}
                        />
                      </div>

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