import { CURRENT_USER, USER_LOADING } from "../actions/types";
import isEmpty from "is-empty";

const intialState = {
  isLoggedIn: false,
  user: {},
  loading: false,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CURRENT_USER:
      return {
        ...state,
        isLoggedIn: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
