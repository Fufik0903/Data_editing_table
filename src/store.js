import { combineReducers, createStore } from "redux";
import DataReducer from "./redux/Reducers/DataReducer";

let reducers = combineReducers({
  data: DataReducer,
});

let store = createStore(reducers);
export default store;
