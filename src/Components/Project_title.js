import React, { useEffect, useState } from "react";
import "./Project_title.css";

function Project_title(props) {
    const [values, setValues] = useState({
        ...props.card,
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

    const handleBudgetUnitChange = (e) => {
        setValues({ ...values, budgetUnit: e.target.value });
    };

    return (
        <div className="Project">
            <div className="project_inline_box">
                <p style={{ marginRight: "32px", fontSize: "15px" }}>scope</p>
                <input
                    type="text"
                    value={values.desc}
                    onChange={(e) => setValues({ ...values, desc: e.target.value })}
                    placeholder="Enter description"
                />
            </div>

            <div className="project_inline_box">
                <p style={{ marginRight: "8px", fontSize: "15px" }}>objectives</p>
                <input
                    type="text"
                    value={values.objectives}
                    onChange={(e) => setValues({ ...values, objectives: e.target.value })}
                    placeholder="Enter objectives"
                />
            </div>

            <div className="project_inline_box">
                <p style={{ marginRight: "8px", fontSize: "15px" }}>drive links</p>
                <input
                    type="text"
                    value={values.driveLink}
                    onChange={(e) => setValues({ ...values, driveLink: e.target.value })}
                    placeholder="Enter drive link"
                />
            </div>

            <div className="project_inline_box">
                <p style={{ marginRight: "20px", fontSize: "15px" }}>sponsor</p>
                <input
                    type="text"
                    value={values.sponsor}
                    onChange={(e) => setValues({ ...values, sponsor: e.target.value })}
                    placeholder="Enter sponsor"
                />
            </div>

            <div className="project_inline_box budget">
                <p style={{ marginRight: "29px",fontSize: "15px" }}>budget</p>
                <div>
                    <input
                        type="number"
                        value={values.budget}
                        onChange={(e) => setValues({ ...values, budget: e.target.value })}
                        placeholder="Enter budget"
                        style={{ width:'100px' }}
                    />
                    <select
                        value={values.budgetUnit}
                        onChange={handleBudgetUnitChange}
                        style={{ marginLeft: "10px", width:'80px' }} // Added margin-left for spacing
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
