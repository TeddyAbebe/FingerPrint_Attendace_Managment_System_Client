import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeAction } from "../Actions/employeeActions";
import Heading from "../Components/Heading";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../Components/ErrorMessage";

function EmployeeProfile() {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateEmployee = useSelector((state) => state.updateEmployee);
  const { error } = updateEmployee;

  const { id } = useParams();

  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/employees/${id}`
        );

        setName(data.name);
        setEmployeeId(data.employeeId);
        setJobTitle(data.jobTitle);
        setEmailAddress(data.emailAddress);
        setMobileNo(data.mobileNo);
        setPhoto(data.photo);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetching();
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(
      updateEmployeeAction(
        id,
        name,
        employeeId,
        jobTitle,
        emailAddress,
        mobileNo,
        photo
      )
    );

    if (
      !name ||
      !employeeId ||
      !jobTitle ||
      !emailAddress ||
      !mobileNo ||
      !photo
    ) {
      return;
    }

    // onClose();
    navigate("/employee");
  };

  return (
    <div>
      <Heading header="Employee Profile" />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="flex flex-col bg-cyan-500 py-7 pb-10 md:pb-7 p-5 w-full">
          <Link
            className="flex w-fit hover:cursor-pointer"
            to={`http://localhost:3000/employee`}
          >
            <BsFillArrowLeftSquareFill className="h-8 w-8 rounded-full hover:text-red-700" />
          </Link>

          <form
            onSubmit={handleUpdate}
            className="flex flex-col gap-2 p-4 text-black w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="rounded-md p-2"
              required
            />

            <input
              type="text"
              name="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Employee ID"
              className="rounded-md p-2"
              required
            />
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title"
              className="rounded-md p-2"
              required
            />

            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email Address"
              className="rounded-md p-2"
              required
            />

            <input
              type="tel"
              name="mobileNo"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="Mobile No"
              className="rounded-md p-2"
              required
            />
            <input
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
              className="rounded-md p-2"
              required
            />
            <span className="flex justify-evenly items-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md w-[30%]"
              >
                Update Employee
              </button>
            </span>
          </form>
        </div>
      )}
    </div>
  );
}

export default EmployeeProfile;
