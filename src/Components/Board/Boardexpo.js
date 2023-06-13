import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Type} from "react-feather";
import Modal from "../../Modal/Modal.js";
import Editable from "../../Editabled/Editable.js";
import "./CardInfo.css";

import { useDispatch } from 'react-redux';
import { updateTaskBudget, updateCic } from "../../../reducers/actions.js";



function CardInfo(props) {

    const { cardId } = props;
    const [values, setValues] = useState({
        ...props.card,
        ...props.cardId,
    });

    const dispatch = useDispatch();


    const [taskBudget, setTaskBudget] = useState("");
    const [cic, setCic] = useState("");


    const handleTaskBudgetChange = (event) => {
        const newBudget = event.target.value;
        dispatch(updateTaskBudget(props.cardId, newBudget));
    };

    const handleCicChange = (event) => {
        const newCic = event.target.value;
        dispatch(updateCic(props.cardId, newCic));
    };




    useEffect(() => {
        if (props.updateCard) props.updateCard(props.boardId, values.id, values, weight);
    }, [values, weight]);




    return (
        <Modal onClose={props.onClose}>
            <div className="cardinfo">

                <div className="cardinfo_inline_boxes">
                    <div className="cardinfo_inline_box" style={{ paddingRight: '2rem', width: '18rem' }}>
                        <div className="cardinfo_box_title">
                            <p>Budget</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="number"
                                value={values.taskBudget}
                                onChange={(e) => setValues({ ...values, taskBudget: e.target.value })}
                                placeholder="Enter Budget"
                                style={{ width: '200px',marginRight: '10px' }}
                            />
                            <select
                                value={values.budgetUnit}
                                style={{ width: '80px', padding:'7px', border: '1px solid #ccc', borderRadius:'4px'}}
                            >
                                <option value="lkr">LKR</option>

                            </select>
                        </div>
                    </div>

                    <div className="cardinfo_inline_box" style={{ paddingRight: '2rem', width: '18rem' }}>
                        <div className="cardinfo_box_title">
                            <p>Current incurred cost</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="number"
                                value={values.cic}
                                onChange={(e) => setValues({ ...values, cic: e.target.value })}
                                placeholder="Enter Current incurred cost"
                                style={{ width: '200px',marginRight: '10px' }}
                            />
                            <select
                                value={values.budgetUnit}
                                style={{ width: '80px', padding:'7px', border: '1px solid #ccc', borderRadius:'4px'}}
                            >
                                <option value="lkr">LKR</option>
                            </select>
                        </div>
                    </div>

                </div>


            </div>
        </Modal>
    );
}

export default CardInfo;