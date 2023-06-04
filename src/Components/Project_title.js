import React, { useEffect, useState } from "react";
import "./Project_title.css";

function Project_title(props, budget) {

    console.log("budget here:", budget);

    const [values, setValues] = useState({
        ...props.card,
        budget: 0,
        budgetUnit: "$", // Default budget unit
    });

    useEffect(() => {
        // Get values from local storage if available
        const storedValues = localStorage.getItem("projectValues");
        if (storedValues) {
            setValues(JSON.parse(storedValues));
        }
    }, []);

    useEffect(() => {
        // Save values to local storage whenever they change
        localStorage.setItem("projectValues", JSON.stringify(values));
    }, [values]);


    const handleBudgetChange = (e) => {
        setValues({ ...values, budget: e.target.value });

    };

    const handleBudgetUnitChange = (e) => {
        setValues({ ...values, budgetUnit: e.target.value });
    };

    return (

        <div className="Project scrollable-project">
            <div className="project_inline_box">
                <p style={{ marginRight: "32px", fontSize: "15px" }}>Scope</p>
                <input
                    type="text"
                    value={values.desc}
                    onChange={(e) => setValues({ ...values, desc: e.target.value })}
                    placeholder="Enter description"
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
                        value={values.budget}
                        onChange={handleBudgetChange}
                        placeholder="Enter budget"
                        style={{ width: "90px" }}
                    />
                    <select
                        value={values.budgetUnit}
                        onChange={handleBudgetUnitChange}
                        style={{ marginLeft: "10px", width: "70px" }} // Added margin-left for spacing
                    >
                        <option value="$">$</option>
                        <option value="€">€</option>
                        <option value="£">£</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Project_title;
