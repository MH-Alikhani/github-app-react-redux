import {
  SET_USER,
  CLR_INPUT,
  SET_USERS,
  SET_LOADING,
  SET_INPUT_VALUE,
} from "../type.js";

const initialState = {
  user: {},
  users: [],
  inputValue: "",
  loading: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_INPUT_VALUE:
      return { ...state, inputValue: payload };
    case CLR_INPUT:
      return { ...state, users: [], inputValue: "" };
    case SET_USERS:
      return { ...state, users: payload, loading: false };
    default:
      return state;
  }
};

export default usersReducer;
