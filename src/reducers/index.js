import { combineReducers } from "redux";

import todos from "./todos";
import search from "./search";
import login from "./login";
export default combineReducers({
  todos,
  search,
  login
});
