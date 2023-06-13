export const updateTaskBudget = (taskId, newBudget) => ({
    type: 'UPDATE_TASK_BUDGET',
    payload: { taskId, newBudget },
});

export const updateCic = (taskId, newCic) => ({
    type: 'UPDATE_CIC',
    payload: { taskId, newCic },
});


export const calculateTotalBudget = () => {
    return (dispatch, getState) => {
        const { taskBudget, cic } = getState();
        const taskBudgetValues = taskBudget.map((card) => card.taskBudget);
        const cicValues = cic.map((card) => card.cic);

        const taskBudgetSum = taskBudgetValues.reduce(
            (total, value) => total + Number(value),
            0
        );
        const cicSum = cicValues.reduce((total, value) => total + Number(value), 0);

        dispatch({
            type: 'CALCULATE_TOTAL_BUDGET',
            payload: { taskBudgetSum, cicSum },
        });
    };
};

