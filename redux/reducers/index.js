import { combineReducers } from "redux";

import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import modalReducer from "./modalReducer";


const rootReducer = combineReducers({
    user:userReducer,
    users: usersReducer,
    modal: modalReducer,
})

export default rootReducer