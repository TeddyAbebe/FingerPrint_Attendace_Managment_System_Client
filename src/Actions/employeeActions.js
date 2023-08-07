import axios from "axios";
import {
  EMPLOYEE_ADD_FAIL,
  EMPLOYEE_ADD_REQUEST,
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
} from "../Constants/employeeConstants";

export const listEmployees = () => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/employees`);

    dispatch({
      type: EMPLOYEE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload: message,
    });
  }
};

export const addEmployeeAction =
  (name, employeeId, jobTitle, emailAddress, mobileNo, photo) =>
  async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_ADD_REQUEST,
      });

      const { data } = await axios.post(
        `http://localhost:5000/api/employees/add`,
        { name, employeeId, jobTitle, emailAddress, mobileNo, photo }
      );

      dispatch({
        type: EMPLOYEE_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: EMPLOYEE_ADD_FAIL,
        payload: message,
      });
    }
  };
