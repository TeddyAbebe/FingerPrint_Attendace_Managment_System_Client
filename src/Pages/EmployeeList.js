import React, { useState } from "react";
import Heading from "../Components/Heading";
import { BsFillPlusCircleFill } from "react-icons/bs";
import EmployeeListContainer from "../Components/EmployeeListContainer";
import NewEmployee from "../Components/NewEmployee";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Heading header="Employee List" />
      <div className="">
        <div className="flex justify-between bg-cyan-500 mx-10 mt-10 rounded-lg">
          <button
            onClick={() => setAddTaskOpen(true)}
            className="flex items-center gap-1 font-semibold bg-sky-600 hover:bg-green-500 font-serif hover:text-white p-2 mx-10 rounded-md m-5"
          >
            <BsFillPlusCircleFill className="h-5 w-5" />
            Add New Employee
          </button>
          <div className="flex items-center gap-3 text-lg font-semibold pr-10 ">
            Search:{" "}
            <input
              className="rounded-md p-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {addTaskOpen && (
          <NewEmployee
            onClose={() => setAddTaskOpen(false)}
            onAddEmployee={handleAddEmployee}
            className="w-1/2"
          />
        )}
        <div className="bg-cyan-500 mx-10 rounded-lg">
          <EmployeeListContainer employees={filteredEmployees} />
        </div>
      </div>
    </div>
  );
}
