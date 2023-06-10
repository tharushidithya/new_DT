import { combineReducers } from "redux";

const initialState = {
    cic: 0,
    taskBudget: [],
};

const cicReducer = (state = initialState.cic, action) => {
    switch (action.type) {
        case "UPDATE_CIC":
            return action.payload;
        default:
            return state;
    }
};

const taskBudgetReducer = (state = initialState.taskBudget, action) => {
    switch (action.type) {
        case "UPDATE_TASK_BUDGET":
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cic: cicReducer,
    taskBudget: taskBudgetReducer,
});

export default rootReducer;
