import { combineReducers } from 'redux';
import taskBudgetReducer from './taskBudgetReducer.js';
import cicReducer from './cicReducer.js';

const rootReducer = combineReducers({
    taskBudget: taskBudgetReducer,
    cic: cicReducer,
});

export default rootReducer;
