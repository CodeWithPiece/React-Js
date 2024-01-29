import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import toogleReducer from "./reducers/toogleReducer";

const rootReducer = combineReducers({
  counterReducer,
  toogleReducer,
});

export default rootReducer;
