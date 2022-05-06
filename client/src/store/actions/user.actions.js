import axios from "axios";

import { usersActions } from "../slices/user.slice";

const API_URL = "";

export const login = (accountNumber, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const registerData = {
        accountNumber,
        password,
      };
      const res = await axios.post(
        `http://localhost:5000/api/v1/users/login`,
        registerData
      );
      const { user } = res.data;
      dispatch(usersActions.login(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const registerData = {
        name,
        password,
      };
      const res = await axios.post(
        `http://localhost:5000/api/v1/users/signup`,
        registerData
      );
      const { newUser } = res.data;
      dispatch(usersActions.newUser({ newUser }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = (id) => {
  return async (dispatch) => {
    try {
      const registerData = {
        id,
      };
      const res = await axios.post(
        `http://localhost:5000/api/v1/users/logout`,
        registerData
      );
      const { user } = res.data;

      dispatch(usersActions.logout(user));
    } catch (error) {
      console.log(error);
    }
  };
};
