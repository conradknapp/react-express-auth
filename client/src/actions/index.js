import axios from "axios";

import * as actionTypes from "./types";

const BASE_URL = "http://localhost:4000/api";

export const onSignIn = ({ email, password }) => {
  return function(dispatch) {
    axios.post(`${BASE_URL}/sign_in`, { email, password });
  };
};
