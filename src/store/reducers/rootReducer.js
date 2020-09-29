import authReducer from "./authReducer";
import notesReducer from "./notesReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    note: notesReducer
});

export default rootReducer; 