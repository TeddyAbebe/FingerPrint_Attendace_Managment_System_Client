import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeAction,
  listEmployees,
} from "../Actions/employeeActions";
import Loader from "../Components/Loader";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";

const EmployeeListContainer = ({ search }) => {
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, employees, error } = employeeList;

  const deleteEmployee = useSelector((state) => state.deleteEmployee);
  const { success: successDelete, error: errorDelete } = deleteEmployee;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to fire the Employee ??")) {
      dispatch(deleteEmployeeAction(id));
    }
  };

  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch, successDelete]);

  return (
    <div className="container mx-auto mt-4">
      {error && <ErrorMessage message={error} />}
      {errorDelete && <ErrorMessage message={errorDelete} />}
      {loading && <Loader />}
      {employees && (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Tools</th>
            </tr>
          </thead>
          <tbody>
            {employees
              ?.filter((filteredEmployee) =>
                filteredEmployee.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((employee, index) => (
                <tr key={employee._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{employee.name}</td>
                  <td className="border px-4 py-2">{employee.jobTitle}</td>
                  <td className="border px-4 py-2">{employee.emailAddress}</td>
                  <td className="border px-4 py-2">{employee.mobileNo}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-16 h-16 bg-orange-800 rounded-full"
                    />
                  </td>

                  <td className="border-t px-4 py-3 space-x-10">
                    <Link to={`/employees/${employee._id}`}>
                      <button className="mr-2 bg-blue-500 hover:bg-green-500 font-serif hover:text-white font-bold py-2 px-4 rounded-xl">
                        Profile
                      </button>
                    </Link>
                    <button
                      className="  bg-[#E50D0E] font-serif hover:text-white font-semibold py-2 px-4 rounded-xl"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeListContainer;
