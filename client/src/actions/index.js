import axios from "axios";

import { SUCCESS_SIGN_IN, FAIL_SIGN_IN, ERROR_SIGN_IN } from "./types";

const BASE_URL = "http://localhost:4000/api";

export const onSignIn = ({ email, password }, cb) => {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/sign_in`, { email, password })
      .then(response => {
        dispatch({ type: SUCCESS_SIGN_IN });
        localStorage.setItem("auth", response.data.token);
        console.log("auth token stored!");
        cb();
      })
      .catch(() => {
        dispatch({
          type: ERROR_SIGN_IN,
          payload: "Sign In Failed"
        });
      });
  };
};
