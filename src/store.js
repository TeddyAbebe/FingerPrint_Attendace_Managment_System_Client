import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { employeeAddReducer, employeeListReducer, employeeUpdateReducer } from "./Reducers/employeeReducer";

const reducer = combineReducers({
  //this will contain all reducers
  employeeList: employeeListReducer,
  addEmployee: employeeAddReducer,
  updateEmployee: employeeUpdateReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
