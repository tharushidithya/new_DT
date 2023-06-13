const cicReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_CIC':
            const { taskId, newCic } = action.payload;
            return state.map((task) =>
                task.id === taskId ? { ...task, cic: newCic } : task
            );
        default:
            return state;
    }
};

export default cicReducer;
