import { combineReducers } from 'redux';
import userReducer from './users-reducer';
import allUserReducer from './all-users-reducer';
import allDoctorsReducer from './all-doctors-reducer';
import AppointmentReducer from './appointment-reducer';


export const rootReducer = combineReducers({
    userReducer,
    allUserReducer,
    allDoctorsReducer,
    AppointmentReducer
    });
