import React, { useEffect, useState } from "react";
import Modal from "../../Modal/Modal.js";
import "./CardInfo.css";


function CardInfo(props) {


    const [values, setValues] = useState({
        ...props.card,
    });


    const [weight, setWeight] = useState("");
    const [achievedweight, setAchievedWeight] = useState("");


    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleAchievedWeightChange = (event) => {
        setAchievedWeight(event.target.value);
    };



    useEffect(() => {
        if (props.updateCard) props.updateCard(props.boardId, values.id, values);
    }, [values]);

    return (
        <Modal onClose={props.onClose}>
            <div className="cardinfo">

                <div className="cardinfo_inline_boxes">
                    <div className="cardinfo_inline_box">
                        <div className="cardinfo_box_title">
                            <p>Weight (%)</p>
                        </div>
                        <input
                            type="number"
                            value={values.weight}
                            onChange={(e) => {
                                if (e.target.value <= 100) {
                                    setValues({ ...values, weight: e.target.value })
                                }
                            }}
                            placeholder="Enter Weight (max 100)"
                            className="input_box"
                            style={{ width: '300px' }}
                            max={100}
                        />
                    </div>
                    <div className="cardinfo_inline_box">
                        <div className="cardinfo_box_title">
                            <p>Achieved Weight (%)</p>
                        </div>
                        <input
                            type="number"
                            value={values.achievedWeight}
                            onChange={(e) => {
                                if (e.target.value <= 100) {
                                    setValues({ ...values, achievedWeight: e.target.value })
                                }
                            }}
                            placeholder="Enter achieved weight (max 100)"
                            className="input_box"
                            style={{ width: '300px' }}
                            max={100}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default CardInfo;