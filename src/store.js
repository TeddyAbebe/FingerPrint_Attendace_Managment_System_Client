import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  employeeAddReducer,
  employeeDeleteReducer,
  employeeListReducer,
  employeeUpdateReducer,
} from "./Reducers/employeeReducer";
import { adminLoginReducer } from "./Reducers/adminReducer";

const reducer = combineReducers({
  //this will contain all reducers
  adminLogin: adminLoginReducer,
  employeeList: employeeListReducer,
  addEmployee: employeeAddReducer,
  updateEmployee: employeeUpdateReducer,
  deleteEmployee: employeeDeleteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
