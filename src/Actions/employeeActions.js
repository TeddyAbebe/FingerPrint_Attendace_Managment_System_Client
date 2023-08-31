import axios from "axios";
import {
  EMPLOYEE_ADD_FAIL,
  EMPLOYEE_ADD_REQUEST,
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
} from "../Constants/employeeConstants";

export const listEmployees = () => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_LIST_REQUEST,
    });

    const { data } = await axios.get(`https://finger-print-server.onrender.com/api/employees`);

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
  (name, jobTitle, emailAddress, mobileNo, photo) => async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_ADD_REQUEST,
      });

      const { data } = await axios.post(
        `https://finger-print-server.onrender.com/api/employees/add`,
        { name, jobTitle, emailAddress, mobileNo, photo }
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

export const updateEmployeeAction =
  (id, name, jobTitle, emailAddress, mobileNo, photo) => async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_UPDATE_REQUEST,
      });

      const { data } = await axios.put(
        `https://finger-print-server.onrender.com/api/employees/${id}`,
        { name, jobTitle, emailAddress, mobileNo, photo }
      );

      dispatch({
        type: EMPLOYEE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: EMPLOYEE_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteEmployeeAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `https://finger-print-server.onrender.com/api/employees/${id}`
    );

    dispatch({
      type: EMPLOYEE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload: message,
    });
  }
};
