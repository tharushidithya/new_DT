import React, { useEffect, useState } from "react";
import "./Project_title.css";
import {db} from "../Config/Firebase.js";
import {collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

function Project_title(props) {
    let setBudget = props.setBudget;
    let budget = props.budget;
    console.log("budget here:", budget);
    console.log(props.setBudget)

    const [values, setValues] = useState({
        ...props.card,
        budget: 0,
        budgetUnit: "lkr", // Default budget unit
    });

    const saveDataToFirestore = async () => {
        try {
            const projectRef = doc(db, "projects", "your_project_id"); // Replace "your_project_id" with your actual project ID in Firestore
            await updateDoc(projectRef, values); // Save the updated values to Firestore
            console.log("Data saved to Firestore successfully!");
        } catch (error) {
            console.error("Error saving data to Firestore:", error);
        }
    };

    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
        setValues({ ...values, budget: e.target.value });
    };

    return (

        <div className="Project scrollable-project">
            <div className="project_inline_box">
                <p style={{ marginRight: "32px", fontSize: "15px" }}>Scope</p>
                <input
                    type="text"
                    value={values.desc}
                    onChange={(e) => setValues({ ...values, desc: e.target.value })}
                    placeholder="Enter scope"
                />
            </div>

            <div className="project_inline_box">
                <p style={{ marginRight: "8px", fontSize: "15px" }}>Objectives</p>
                <input
                    type="text"
                    value={values.objectives}
                    onChange={(e) => setValues({ ...values, objectives: e.target.value })}
                    placeholder="Enter objectives"
                />
            </div>

            <div className="project_inline_box">
                <p style={{ marginRight: "8px", fontSize: "15px" }}>Drive links</p>
                <input
                    type="text"
                    value={values.driveLink}
                    onChange={(e) => setValues({ ...values, driveLink: e.target.value })}
                    placeholder="Enter drive link"
                />
            </div>

            <div className="project_inline_box">
                <p style={{ marginRight: "20px", fontSize: "15px" }}>Sponsor</p>
                <input
                    type="text"
                    value={values.sponsor}
                    onChange={(e) => setValues({ ...values, sponsor: e.target.value })}
                    placeholder="Enter sponsor"
                />
            </div>

            <div className="project_inline_box budget">

                <p style={{ marginRight: "29px", fontSize: "15px" }}>Budget</p>
                <div>
                    <input
                        type="number"
                        value={budget}
                        onChange={handleBudgetChange}
                        placeholder="Enter budget"
                        style={{ width: "90px" }}
                    /> <span style={{ fontSize: "12px"}}>LKR</span>
                </div>
            </div>
            <button style={{marginLeft:"13rem", width:'3rem',fontSize: "10px",
                color: "#ffffff",
                background: "black",
                padding:"6px",
                fontWeight: "bold",
                borderRadius: "3px"}} onClick={saveDataToFirestore}>Save </button>
        </div>
    );
}

export default Project_title;
