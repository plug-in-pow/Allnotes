import authReducer from "./authReducer";
import notesReducer from "./notesReducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    note: notesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer; 