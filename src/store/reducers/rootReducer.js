import authReducer from "./authReducer";
import notesReducer from "./notesReducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    note: notesReducer,
    firestore: firestoreReducer
});

export default rootReducer; 