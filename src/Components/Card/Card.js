import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown.js";
import CardInfo from "./CardInfo/CardInfo.js";

import "./Card.css";

function Card(props) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { id, title, startDate, tasks, kpi, budget, weight,endDate, actualStartDate,actualEndDate } = props.card;

    const formatDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        if (!date) return "";

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        return `${day} ${month}`;
    };


    return (
        <>
            {showModal && (
                <CardInfo
                    onClose={() => setShowModal(false)}
                    card={props.card}
                    boardId={props.boardId}
                    updateCard={props.updateCard}
                />
            )}
            <div
                className="card"
                draggable
                onDragEnd={() => props.dragEnded(props.boardId, id)}
                onDragEnter={() => props.dragEntered(props.boardId, id)}
                onClick={() => setShowModal(true)}
            >
                <div className="card_top">
                    <div className="card_title">{title}</div>
                    <div
                        className="card_top_more"
                        onClick={(event) => {
                            event.stopPropagation();
                            setShowDropdown(true);
                        }}
                    >
                        <MoreHorizontal />
                        {showDropdown && (
                            <Dropdown
                                class="board_dropdown"
                                onClose={() => setShowDropdown(false)}
                            >
                                <p onClick={() => props.removeCard(props.boardId, id)}>
                                    Delete Card
                                </p>
                            </Dropdown>
                        )}
                    </div>
                </div>

                {kpi && (
                    <div className="card_info">
                        <span className="card_info_label">KPI:</span>
                        <span className="card_info_value">{kpi}</span>
                    </div>
                )}
                {budget && (
                    <div className="card_info">
                        <span className="card_info_label">Budget:</span>
                        <span className="card_info_value">{budget}</span>
                    </div>
                )}
                {weight && (
                    <div className="card_info">
                        <span className="card_info_label">Weight:</span>
                        <span className="card_info_value">{weight}</span>
                    </div>
                )}
                <div >

                    <div className="card_dates">
                        {startDate && (
                            <p className="card_footer_item">
                                <h7>Start date: </h7>
                                <Clock className="card_footer_icon" />
                                {formatDate(startDate)}
                            </p>
                        )}
                        {actualStartDate && (
                            <p className="card_footer_item">
                                <h7>Actual Start date: </h7>
                                <Clock className="card_footer_icon" />
                                {formatDate(actualStartDate)}
                            </p>
                        )}
                    </div>

                    <div className="card_dates">
                        {endDate && (
                            <p className="card_footer_item">
                                <h7>End date: </h7>
                                <Clock className="card_footer_icon" />
                                {formatDate(endDate)}
                            </p>
                        )}
                        {actualEndDate && (
                            <p className="card_footer_item">
                                <h7>Actual End date: </h7>
                                <Clock className="card_footer_icon" />
                                {formatDate(actualEndDate)}
                            </p>
                        )}
                    </div>



                    {tasks && tasks.length > 0 && (
                        <div style={{ display: "flex", alignItems: "center", marginTop: "5px", fontSize: '12px', fontWeight: 'bold' }}>
                            <span style={{ marginRight: "4px" }}>Sub tasks:</span>
                            <p className="card_footer_item" style={{ fontSize: '10px', background:'none'}} >
                                {tasks.length}
                            </p>
                        </div>
                    )}


                </div>
            </div>
        </>
    );
}

export default Card;
