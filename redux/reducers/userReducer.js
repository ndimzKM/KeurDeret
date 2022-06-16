// local imports
import * as actionTypes from "../actions";

// initial state value
const initialState = {
  id: 1,
  firstName: "Foday",
  lastName: "Sanyang",
  address: "Bakau",
  phoneNumber: "3577717",
  bloodGroup: "A+",
  photo:
    "https://store-images.s-microsoft.com/image/apps.13367.13817186670444302.148c432a-9fce-4c7d-bf13-8a2bd3a527b3.f26b74f0-8b1f-41eb-a82f-06843ec33473",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...action.payload };
    case actionTypes.REMOVE_USER:
      return {};
    // case actionTypes.UPDATE_USER:
    //     return state.map(item => (item.id === action.payload.id ? action.payload : item))
    default:
      return state;
  }
};

export default userReducer;
