// local imports
import * as actionTypes from "../actions";

// initial state value
const initialState = {
  id: 2,
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  bloodGroup: "",
  photo:
    "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case actionTypes.REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
