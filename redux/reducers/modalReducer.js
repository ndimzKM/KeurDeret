// local imports
import * as actionTypes from "../actions";

const modalReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return true
        case actionTypes.HIDE_MODAL:
            return false
        default:
            return state
    }
}

export default modalReducer