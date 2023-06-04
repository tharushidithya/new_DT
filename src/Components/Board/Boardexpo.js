import React, { useEffect, useState } from "react";
import "./Project_title.css";

function Project_title(props) {
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
