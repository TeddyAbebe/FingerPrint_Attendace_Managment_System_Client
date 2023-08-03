import {
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
} from "../Constants/employeeConstants";

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
