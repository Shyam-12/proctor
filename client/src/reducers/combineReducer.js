import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const combineReducer = combineReducers({
  authReducer,
  errorReducer,
});

export default combineReducer;
