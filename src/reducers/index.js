import { combineReducers } from "redux";
import todos from "./todos";
import user from "./user";
import detail from "./detail";

const reducers = combineReducers({ todos, user, detail });

export default reducers;
