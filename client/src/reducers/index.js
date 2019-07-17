import { combineReducers } from "redux";

import auth from "./authReducer";
import alerts from "./alertReducer";

export default combineReducers({
  auth,
  alerts
});
