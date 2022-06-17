// local imports
import * as actionTypes from "../actions";

// initial state value
const initialState = [
  {
    id: 1,
    firstName: "Foday",
    lastName: "Sanyang",
    address: "Bakau",
    phoneNumber: "3577717",
    bloodGroup: "A+",
    photo: 'https://store-images.s-microsoft.com/image/apps.13367.13817186670444302.148c432a-9fce-4c7d-bf13-8a2bd3a527b3.f26b74f0-8b1f-41eb-a82f-06843ec33473'
  },
  {
    id: 2,
    firstName: "Sirreh",
    lastName: "Saho",
    address: "Manjai",
    phoneNumber: "3477717",
    bloodGroup: "B-",
    photo: 'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg'
  },
  {
    id: 3,
    firstName: "Momodou",
    lastName: "Bah",
    address: "Kotu",
    phoneNumber: "3377717",
    bloodGroup: "AB",
    photo: 'https://cdn.pixabay.com/photo/2017/10/24/07/13/mask-2883635_960_720.jpg'
  },
  {
    id: 4,
    firstName: "Aminatou",
    lastName: "Jallow",
    address: "Sinchu",
    phoneNumber: "3277717",
    bloodGroup: "O+",
    photo: 'https://cdn.pixabay.com/photo/2018/07/25/15/51/hijab-3561651_960_720.jpg'
  },
];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [...state, action.payload];
    case actionTypes.DELETE_USER:
      return state.filter((item) => item.id !== action.payload);
    case actionTypes.UPDATE_USER:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};

export default usersReducer;
