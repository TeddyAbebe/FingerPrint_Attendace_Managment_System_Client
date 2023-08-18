import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  employeeAddReducer,
  employeeDeleteReducer,
  employeeListReducer,
  employeeUpdateReducer,
} from "./Reducers/employeeReducer";
import {
  adminLoginReducer,
  adminRegisterReducer,
} from "./Reducers/adminReducer";

const reducer = combineReducers({
  //this will contain all reducers
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,
  employeeList: employeeListReducer,
  addEmployee: employeeAddReducer,
  updateEmployee: employeeUpdateReducer,
  deleteEmployee: employeeDeleteReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
