
export const UPDATE_CIC = "UPDATE_CIC";
export const UPDATE_TASK_BUDGET = "UPDATE_TASK_BUDGET";

// Define action creators
export const updateCic = (cic) => {
    return {
        type: UPDATE_CIC,
        payload: cic,
    };
};

export const updateTaskBudget = (budget) => {
    return {
        type: UPDATE_TASK_BUDGET,
        payload: budget,
    };
};
