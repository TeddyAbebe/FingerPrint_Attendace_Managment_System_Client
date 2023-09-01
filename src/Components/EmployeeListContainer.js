import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeAction,
  listEmployees,
} from "../Actions/employeeActions";
import Loader from "../Components/Loader";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const EmployeeListContainer = ({ search }) => {
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, employees, error } = employeeList;

  const deleteEmployee = useSelector((state) => state.deleteEmployee);
  const { success: successDelete, error: errorDelete } = deleteEmployee;

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to fire Dear ${name} ??`)) {
      dispatch(deleteEmployeeAction(id));
    }
  };

  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch, successDelete]);

  return (
    <div className="mx-auto mt-4">
      {error && <ErrorMessage message={error} />}
      {errorDelete && <ErrorMessage message={errorDelete} />}
      {loading && <Loader />}
      {employees && (
        <div className="overflow-auto max-h-[30rem]">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">No.</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Job Title</th>
                <th className="border border-gray-400 px-4 py-2">
                  Email Address
                </th>
                <th className="border border-gray-400 px-4 py-2">Mobile No</th>
                <th className="border border-gray-400 px-4 py-2">Photo</th>
                <th className="border border-gray-400 px-4 py-2">Tools</th>
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
                    <td className="border border-gray-400 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {employee.name}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {employee.jobTitle}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {employee.emailAddress}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {employee.mobileNo}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <img
                        src={employee.photo}
                        alt={employee.name}
                        className="w-16 h-16 bg-[#00FF00] rounded-full"
                      />
                    </td>

                    <td className="border-t border-gray-400 py-3 space-x-5 text-center">
                      <Link to={`/employees/${employee._id}`}>
                        <button className="mr-2 bg-sky-800 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded-xl">
                          <BiEditAlt />
                        </button>
                      </Link>
                      <button
                        className="bg-[#E50D0E] hover:bg-red-800 hover:text-white font-semibold py-2 px-4 rounded-xl"
                        onClick={() =>
                          handleDelete(employee._id, employee.name)
                        }
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeListContainer;
