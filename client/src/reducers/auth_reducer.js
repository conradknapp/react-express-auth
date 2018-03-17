import { SUCCESS_SIGN_IN, FAIL_SIGN_IN, ERROR_SIGN_IN } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SUCCESS_SIGN_IN:
      return { ...state, authenticated: true };
    case FAIL_SIGN_IN:
      return { ...state, authenticated: true };
    case ERROR_SIGN_IN:
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
}
