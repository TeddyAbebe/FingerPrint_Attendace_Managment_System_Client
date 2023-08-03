import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to fire the Employee ??")) {
    }
  };

  const fetchEmployees = async () => {
    const { data } = await axios.get("http://localhost:5000/api/employees");

    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Employee ID</th>
            <th className="px-4 py-2">Job Title</th>
            <th className="px-4 py-2">Email Address</th>
            <th className="px-4 py-2">Mobile No</th>
            <th className="px-4 py-2">Photo</th>
            <th className="px-4 py-2">Tools</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee._id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.employeeId}</td>
              <td className="border px-4 py-2">{employee.jobTitle}</td>
              <td className="border px-4 py-2">{employee.emailAddress}</td>
              <td className="border px-4 py-2">{employee.mobileNo}</td>
              <td className="border px-4 py-2">
                <img
                  src={employee.photo}
                  alt={employee.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                  // onClick={() => handleEdit(employee.id)}
                  href={`/employee/${employee._id}`}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl"
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeListContainer;
