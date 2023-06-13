const taskBudgetReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_TASK_BUDGET':
            const { taskId, newBudget } = action.payload;
            return state.map((task) =>
                task.id === taskId ? { ...task, taskBudget: newBudget } : task
            );
        default:
            return state;
    }
};

export default taskBudgetReducer;
