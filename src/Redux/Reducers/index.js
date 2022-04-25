import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer, buttonReducer } from "../Reducers/Reducers";

const rootReducer = combineReducers({
  cars: itemReducer,
  selectedItem: selectedItemReducer,
  buttonText: buttonReducer,
});

export default rootReducer;
