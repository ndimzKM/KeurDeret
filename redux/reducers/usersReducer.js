
// local imports
import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actions";

// initial state value
const initialState = [
    {id: 1, firstName: 'John', lastName: 'Doe', address: 'Bakau', phoneNumber: '+220-3577717', bloodGroup: 'O+'}
]

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload]
        case DELETE_USER:
            return state.filter(item => (item.id !== action.payload))
        case UPDATE_USER:
            return state.map(item => (item.id === action.payload.id ? action.payload : item))
        default:
            return state;
    }
}

export default usersReducer