import {
  EMPLOYEE_ADD_FAIL,
  EMPLOYEE_ADD_REQUEST,
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
} from "../Constants/employeeConstants";

export const employeeListReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { loading: true };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_ADD_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    default:
      return state;
  }
};

export const employeeAddReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_ADD_REQUEST:
      return { loading: true };
    case EMPLOYEE_ADD_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
