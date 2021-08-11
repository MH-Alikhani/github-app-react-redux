// import axios
import axios from "axios";

import {
  SET_USER,
  CLR_INPUT,
  SET_USERS,
  SET_LOADING,
  SET_INPUT_VALUE,
} from "../type.js";

// find and show user func
export const searchUsers = (searchValue) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  const res = await axios(
    `https://api.github.com/search/users?q=${searchValue}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRE}`
  );
  dispatch({ type: SET_USERS, payload: res.data.items });
};

// set search input value
export const setInputValue = (value) => {
  return { type: SET_INPUT_VALUE, payload: value };
};

// clear search input and shown users
export const clrInput = (e) => {
  e.preventDefault();
  return { type: CLR_INPUT };
};

// get single user for showing their page
export const getSingleUser = (userLogin) => async (dispatch) => {
  const res = await axios(
    `https://api.github.com/users/${userLogin}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRE}`
  );
  console.log(res.data);
  dispatch({ type: SET_USER, payload: res.data });
};
