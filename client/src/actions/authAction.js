import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alertAction";

const uri = "http://localhost:5000";

// LOAD USER
export const loadUser = () => async dispatch => {
  // CHECK TOKEN ON LOCAL STORAGE AND SET AUTH HEADER
  if (localStorage.token) setAuthToken(localStorage.token);

  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    const { data } = await axios.get(`${uri}/api/auth/user`, config);
    const { user } = data;

    // DISPATCH USER LOADED
    dispatch({ type: USER_LOADED, payload: user });
  } catch (error) {
    // DISPATCH AUTH ERROR
    dispatch({ type: AUTH_ERROR });
  }
};

// REGISTER USER
export const registerUser = ({
  name,
  username,
  email,
  password,
  cPassword
}) => async dispatch => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  const body = { name, username, email, password, cPassword };

  try {
    const { data } = await axios.post(`${uri}/api/user/signup`, body, config);

    // DISPATCH REGISTER SUCCESS
    dispatch({ type: REGISTER_SUCCESS, payload: data });

    // DISPATCH LOAD USER
    dispatch(loadUser());

    // DISPATCH SET ALERT ACTION
    dispatch(setAlert("Logged In", 201, "success"));
  } catch (error) {
    const { data, status } = error.response;

    // DISPATCH REGISTER FAIL
    dispatch({ type: REGISTER_FAIL });

    // DISPATCH SET ALERT ACTION
    dispatch(setAlert(data, status, "danger"));
  }
};

// LOGIN USER
export const loginUser = (username, password) => async dispatch => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  const body = { username, password };

  try {
    const { data } = await axios.post(`${uri}/api/auth`, body, config);

    // DISPATCH LOGIN SUCCESS
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });

    // DISPATCH LOAD USER
    dispatch(loadUser());

    // DISPATCH SET ALERT ACTION
    dispatch(setAlert("Logged In!", 200, "success"));
  } catch (error) {
    const { data, status } = error.response;

    // DISPATCH LOGIN FAIL
    dispatch({
      type: LOGIN_FAIL
    });

    // DISPATCH SET ALERT ACTION
    dispatch(setAlert(data, status, "danger"));
  }
};

// LOGOUT USER
export const logoutUser = () => async dispatch => {
  // SET LOGOUT
  dispatch({ type: LOGOUT });

  // DISPATCH SET ALERT ACTION
  dispatch(setAlert("Logged Out", 200, "success"));
};
