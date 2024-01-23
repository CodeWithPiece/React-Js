import counterReducer from "./counterReducer";
import { combineReducers } from "redux";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  counterReducer,
  listReducer,
});

export default rootReducer;
