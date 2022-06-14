// action types
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const SHOW_MODAL = "SHOW_MODAL"
export const HIDE_MODAL = "HIDE_MODAL"


// action creators
export const addUser = (newUser) => ({ type: ADD_USER, payload: newUser });
export const deleteUser = (id) => ({ type: DELETE_USER, payload: id });
export const updateUser = (updatedUser) => ({ type: UPDATE_USER, payload: updatedUser });

export const showModal = () => ({type: SHOW_MODAL})
export const hideModal = () => ({type: HIDE_MODAL})

